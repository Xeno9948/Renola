const { execSync } = require('child_process');

console.log('--- Cleaning Environment Variables ---');
['NEXT_PUBLIC_TINA_CLIENT_ID', 'TINA_TOKEN'].forEach(key => {
    if (process.env[key]) {
        const original = process.env[key];
        const cleaned = original.replace(/[\r\n\s]+/g, '');
        if (original !== cleaned) {
            console.log(`Cleaned ${key} (removed whitespace/newlines)`);
        }
        process.env[key] = cleaned;
    }
});

try {
    console.log('Running TinaCMS & Next build with cleaned environment variables...');
    execSync('npx @tinacms/cli build --skip-cloud-checks && npx next build', { stdio: 'inherit' });
} catch (error) {
    process.exit(error.status || 1);
}
