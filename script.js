/**
 * Renola Investment Group - Localization & Interactions
 */

const translations = {
    nl: {
        hero_title: "Renola Investment Group",
        hero_subtitle: "Investing in digital infrastructure, trust and long-term value.",
        hero_description: "We investeren in en ontwikkelen schaalbare digitale ondernemingen die betrouwbaarheid, reputatie en datagedreven besluitvorming voor bedrijven wereldwijd versterken.",
        hero_cta: "Ontdek Onze Visie",
        
        about_title: "Over Renola",
        about_intro: "Renola Investment Group B.V. is een onafhankelijke investerings- en holdingmaatschappij die zich richt op digitale platforms, data-intelligence en trust-gerelateerde technologieën.",
        about_support: "Wij ondersteunen en structureren ondernemingen die duurzame waarde creëren via:",
        about_list_1: "Software en microapplicaties",
        about_list_2: "Datagedreven inzichten",
        about_list_3: "Reputatie- en vertrouwensinfrastructuur",
        about_list_4: "Internationale schaalbaarheid",
        about_conclusion: "Renola fungeert als strategische aandeelhouder, facilitator en kapitaalpartner, met een focus op lange termijn groei en solide governance.",
        
        minimal_title: "Onze Missie",
        minimal_text: "Renola Investment Group is een private investerings- en holdingmaatschappij met een focus op digitale platforms, data-infrastructuur en op vertrouwen gebaseerde ondernemingen. Wij structureren, ondersteunen en schalen bedrijven die gedrags- en reputatiesignalen omzetten in meetbare waarde.",

        focus_title: "Onze Focus",
        focus_intro: "Wij investeren in en faciliteren ondernemingen die:",
        focus_card1_title: "Vertrouwen Meetbaar Maken",
        focus_card1_text: "Vertrouwen vertalen naar meetbare acties in een digitale wereld.",
        focus_card2_title: "Processen Versterken",
        focus_card2_text: "Digitale bedrijfsprocessen optimaliseren en versterken.",
        focus_card3_title: "Strategisch Voordeel",
        focus_card3_text: "Informatie vertalen naar strategisch concurrentievoordeel.",
        focus_card4_title: "Internationaal Schalen",
        focus_card4_text: "Grensoverschrijdende schaalbaarheid mogelijk maken.",
        focus_portfolio: "Onze portfolio omvat digitale ventures actief in Europa en Zuid-Afrika.",

        gov_title: "Governance & Structuur",
        gov_text1: "Renola Investment Group opereert als centrale holding en participatiemaatschappij, met een duidelijke scheiding tussen strategische governance, intellectuele eigendom en operationele entiteiten.",
        gov_text2: "Wij geloven in transparantie, eenvoud en lange termijn waardecreatie.",
        
        closing_statement: "Building structured value through digital trust and intelligent infrastructure."
    },
    en: {
        hero_title: "Renola Investment Group",
        hero_subtitle: "Investing in digital infrastructure, trust and long-term value.",
        hero_description: "We invest in and develop scalable digital enterprises that strengthen reliability, reputation, and data-driven decision-making for businesses worldwide.",
        hero_cta: "Discover Our Vision",
        
        about_title: "About Renola",
        about_intro: "Renola Investment Group B.V. is an independent investment and holding company focused on digital platforms, data intelligence, and trust-related technologies.",
        about_support: "We support and structure enterprises that create sustainable value through:",
        about_list_1: "Software and micro-applications",
        about_list_2: "Data-driven insights",
        about_list_3: "Reputation and trust infrastructure",
        about_list_4: "International scalability",
        about_conclusion: "Renola acts as a strategic shareholder, facilitator, and capital partner, with a focus on long-term growth and solid governance.",
        
        minimal_title: "Our Mission",
        minimal_text: "A private investment and holding company focused on digital platforms, data infrastructure and trust-driven ventures. We structure, support and scale businesses that transform behavioral and reputational signals into measurable value.",

        focus_title: "Our Focus",
        focus_intro: "We invest in and facilitate enterprises that:",
        focus_card1_title: "Measure Trust",
        focus_card1_text: "Making trust measurable and actionable in a digital world.",
        focus_card2_title: "Strengthen Process",
        focus_card2_text: "Enhancing and optimizing digital business processes.",
        focus_card3_title: "Strategic Advantage",
        focus_card3_text: "Translating raw information into strategic business advantage.",
        focus_card4_title: "Global Scaling",
        focus_card4_text: "Enabling and driving international scalability.",
        focus_portfolio: "Our portfolio includes digital ventures active across Europe and South Africa.",

        gov_title: "Governance & Structure",
        gov_text1: "Renola Investment Group operates as a central holding and participation company, with a clear separation between strategic governance, intellectual property, and operational entities.",
        gov_text2: "We believe in transparency, simplicity, and long-term value creation.",
        
        closing_statement: "Building structured value through digital trust and intelligent infrastructure."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Set Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Language Switching Logic
    const btnEn = document.getElementById('lang-en');
    const btnNl = document.getElementById('lang-nl');
    const translatableElements = document.querySelectorAll('[data-i18n]');

    function setLanguage(lang) {
        // Update Buttons
        if (lang === 'en') {
            btnEn.classList.add('active');
            btnNl.classList.remove('active');
        } else {
            btnNl.classList.add('active');
            btnEn.classList.remove('active');
        }

        // Apply Translation with small fade effect
        translatableElements.forEach(el => {
            el.style.opacity = 0;
            setTimeout(() => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
                el.style.opacity = 1;
            }, 150);
        });

        // Set HTML lang attribute
        document.documentElement.lang = lang;
        
        // Save preference
        localStorage.setItem('renola_lang', lang);
    }

    // Event Listeners
    btnEn.addEventListener('click', () => setLanguage('en'));
    btnNl.addEventListener('click', () => setLanguage('nl'));

    // Init language (default EN, or saved preference)
    const savedLang = localStorage.getItem('renola_lang') || 'en';
    
    // We remove transition temporarily so page load doesn't flash
    translatableElements.forEach(el => {
        el.style.transition = 'opacity 0.15s ease';
    });
    setLanguage(savedLang);

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(6, 9, 19, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(6, 9, 19, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
});
