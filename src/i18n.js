// i18n.js - Internationalization Module
// Manages translations for German, English, and French

const translations = {
    en: {
        nav: {
            about: 'About',
            projects: 'Projects',
            photography: 'Photography',
            contact: 'Contact'
        },
        hero: {
            title: 'Elio Wanner',
            subtitle1: 'MSc Student @ ETHZ',
            subtitle2: 'Data Analyst & Cloud Engineer @ Siemens',
            description: 'Specializing in Electronics and Railway Systems.',
            viewWork: 'View Work',
            contactMe: 'Contact Me'
        },
        about: {
            title: 'About Me',
            p1: "I am a Master's student in Electrical Engineering at ETH Zurich, specializing in Electronics and Railway Systems. Previously, I completed my BSc at EPFL and spent an exchange year at Lund University.",
            p2: "Currently, I am a working student at Siemens, where I work as a Data Analyst & Cloud Engineer Intern, building and managing cloud pipelines, improving data quality and creating visualizations for customers.",
            p3: "When I'm not coding, you can find me singing in a choir, riding a train or taking care of my plants.",
            fluency: 'Fluency:',
            fluencyText: 'German (Native), English (C2), French (C1), Swedish (B2), Italian (A2).',
            skillsTitle: 'Skills'
        },
        projects: {
            title: 'Selected Works',
            viewProject: 'View Project'
        },
        photography: {
            title: 'Photography'
        },
        contact: {
            title: "Let's Connect",
            description: 'Want to hire me or work together? Drop me a line.',
            getInTouch: 'Email me'
        },
        footer: {
            copyright: '© 2026 Elio Wanner. All rights reserved.'
        }
    },
    de: {
        nav: {
            about: 'Über mich',
            projects: 'Projekte',
            photography: 'Fotografie',
            contact: 'Kontakt'
        },
        hero: {
            title: 'Elio Wanner',
            subtitle1: 'MSc Student @ ETHZ',
            subtitle2: 'Datenanalyst & Cloud Engineer @ Siemens',
            description: 'Spezialisiert auf Elektronik und Bahnsysteme.',
            viewWork: 'Projekte ansehen',
            contactMe: 'Kontakt aufnehmen'
        },
        about: {
            title: 'Über mich',
            p1: 'Ich bin Masterstudent in Elektrotechnik an der ETH Zürich mit Schwerpunkt Elektronik und Bahnsysteme. Zuvor habe ich meinen BSc an der EPFL abgeschlossen und ein Austauschjahr an der Universität Lund verbracht.',
            p2: 'Derzeit arbeite ich als Werkstudent bei Siemens, wo ich als Datenanalyst & Cloud Engineer Praktikant Cloud-Pipelines aufbaue und verwalte, die Datenqualität verbessere und Visualisierungen für Kunden erstelle.',
            p3: 'Wenn ich nicht am Programmieren bin, singe ich in einem Chor, fahre Zug oder kümmere mich um meine Pflanzen.',
            fluency: 'Sprachkenntnisse:',
            fluencyText: 'Deutsch (Muttersprache), Englisch (C2), Französisch (C1), Schwedisch (B2), Italienisch (A2).',
            skillsTitle: 'Fähigkeiten'
        },
        projects: {
            title: 'Ausgewählte Projekte',
            viewProject: 'Projekt ansehen'
        },
        photography: {
            title: 'Fotografie'
        },
        contact: {
            title: 'Kontakt aufnehmen',
            description: 'Willst du mich anstellen oder zusammenarbeiten? Schreib mir eine Nachricht.',
            getInTouch: 'E-Mail senden'
        },
        footer: {
            copyright: '© 2026 Elio Wanner. Alle Rechte vorbehalten.'
        }
    },
    fr: {
        nav: {
            about: 'À propos',
            projects: 'Projets',
            photography: 'Photographie',
            contact: 'Contact'
        },
        hero: {
            title: 'Elio Wanner',
            subtitle1: 'Étudiant MSc @ ETHZ',
            subtitle2: 'Analyste de données & Ingénieur Cloud @ Siemens',
            description: 'Spécialisé en électronique et systèmes ferroviaires.',
            viewWork: 'Voir les projets',
            contactMe: 'Me contacter'
        },
        about: {
            title: 'À propos de moi',
            p1: "Je suis étudiant en Master en génie électrique à l'ETH Zurich, spécialisé en électronique et systèmes ferroviaires. Auparavant, j'ai obtenu mon BSc à l'EPFL et passé une année d'échange à l'Université de Lund.",
            p2: "Actuellement, je travaille comme étudiant chez Siemens, où je suis stagiaire en tant qu'analyste de données et ingénieur cloud, construisant et gérant des pipelines cloud, améliorant la qualité des données et créant des visualisations pour les clients.",
            p3: "Quand je ne programme pas, vous me trouverez en train de chanter dans une chorale, de prendre le train ou de m'occuper de mes plantes.",
            fluency: 'Compétences linguistiques :',
            fluencyText: 'Allemand (natif), Anglais (C2), Français (C1), Suédois (B2), Italien (A2).',
            skillsTitle: 'Compétences'
        },
        projects: {
            title: 'Projets sélectionnés',
            viewProject: 'Voir le projet'
        },
        photography: {
            title: 'Photographie'
        },
        contact: {
            title: 'Restons en contact',
            description: "Envie de m'embaucher ou de collaborer ? Envoyez-moi un message.",
            getInTouch: 'Envoyer un e-mail'
        },
        footer: {
            copyright: '© 2026 Elio Wanner. Tous droits réservés.'
        }
    }
};

class I18n {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.listeners = [];
    }

    detectLanguage() {
        // Check localStorage first
        const savedLang = localStorage.getItem('language');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }

        // Check browser language
        const browserLang = navigator.language.split('-')[0]; // 'en-US' -> 'en'
        if (translations[browserLang]) {
            return browserLang;
        }

        // Default to English
        return 'en';
    }

    setLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not available, falling back to en`);
            lang = 'en';
        }

        this.currentLang = lang;
        localStorage.setItem('language', lang);

        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);

        // Notify listeners
        this.listeners.forEach(callback => callback(lang));
    }

    getLanguage() {
        return this.currentLang;
    }

    t(key) {
        const keys = key.split('.');
        let value = translations[this.currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                console.warn(`Translation key "${key}" not found for language "${this.currentLang}"`);
                return key;
            }
        }

        return value || key;
    }

    // Subscribe to language changes
    onChange(callback) {
        this.listeners.push(callback);
    }

    // Get all available languages
    getAvailableLanguages() {
        return Object.keys(translations);
    }
}

// Export singleton instance
export const i18n = new I18n();
export default i18n;
