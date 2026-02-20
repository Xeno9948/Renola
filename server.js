require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// Need larger payload limit because we're receiving full HTML strings
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Provide static site
app.use(express.static(path.join(__dirname, 'public')));

// Secure backend save endpoint
app.post('/api/save', (req, res) => {
    const { html, password } = req.body;

    // Check environment variable (or hardcoded fallback for local dev if not pushed)
    const securePassword = process.env.EDITOR_PASSWORD || 'local_dev_only';

    if (password !== securePassword) {
        return res.status(401).json({ success: false, message: 'Unauthorized: Incorrect password' });
    }

    if (!html) {
        return res.status(400).json({ success: false, message: 'Bad request: HTML content missing' });
    }

    const indexPath = path.join(__dirname, 'public', 'index.html');

    // Write file
    fs.writeFile(indexPath, html, 'utf8', (err) => {
        if (err) {
            console.error('Error writing index.html:', err);
            return res.status(500).json({ success: false, message: 'Server error saving file' });
        }

        console.log('Successfully saved updated index.html');

        // Automatically commit and push back to GitHub
        exec('git add public/index.html && git commit -m "chore: Update website content via visual editor" && git push',
            { cwd: __dirname },
            (error, stdout, stderr) => {
                if (error) {
                    console.error(`Git execution error: ${error.message}`);
                    return res.status(500).json({
                        success: true,
                        message: 'File saved, but failed to push to GitHub automatically.',
                        error: error.message
                    });
                }
                if (stderr) console.warn(`Git stderr: ${stderr}`);

                console.log(`Git stdout: ${stdout}`);
                res.status(200).json({ success: true, message: 'File saved and pushed successfully!' });
            });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
