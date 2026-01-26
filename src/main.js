import './style.css'
import { i18n } from './i18n.js'

// Project Data with translations
const projectTranslations = {
    'hardware-watchdog': {
        en: {
            title: "Implementation of a hardware watchdog",
            description: "Hardware watchdog integration for CROC SoC to improve robustness.",
            longDescription: "Integrated a hardware watchdog into the CROC SoC to detect processor stalls and deadlocks. Features a configurable timeout, OBI-protocol wrapper, and system-wide reset. Validated with randomized test cases and zero physical design violations."
        },
        de: {
            title: "Implementierung eines Hardware-Watchdogs",
            description: "Hardware-Watchdog-Integration für CROC SoC zur Verbesserung der Robustheit.",
            longDescription: "Integration eines Hardware-Watchdogs in den CROC SoC zur Erkennung von Prozessorstillständen und Deadlocks. Funktionen umfassen konfigurierbares Timeout, OBI-Protokoll-Wrapper und systemweiten Reset. Validiert mit randomisierten Testfällen und null Verletzungen im physischen Design."
        },
        fr: {
            title: "Implémentation d'un watchdog matériel",
            description: "Intégration de watchdog matériel pour le SoC CROC afin d'améliorer la robustesse.",
            longDescription: "Intégration d'un watchdog matériel dans le SoC CROC pour détecter les blocages et deadlocks du processeur. Dispose d'un timeout configurable, d'un wrapper de protocole OBI et d'une réinitialisation système. Validé avec des cas de test randomisés et zéro violation de conception physique."
        }
    },
    'sbb-optimization': {
        en: {
            title: "Predictive rail switch heating algorithm",
            description: "Physics-based predictive heating algorithm to optimize energy consumption for SBB rail switches.",
            longDescription: "Developed a predictive optimization algorithm in Python for SBB to manage heating loads. The solution achieved a 30% reduction in operating costs and improved reliability to over 98%. This project secured 50k CHF in government funding for further development and established a pilot project collaboration."
        },
        de: {
            title: "Prädiktiver Weichenheizungsalgorithmus",
            description: "Physikbasierter prädiktiver Heizalgorithmus zur Optimierung des Energieverbrauchs für SBB-Weichen.",
            longDescription: "Entwicklung eines prädiktiven Optimierungsalgorithmus in Python für die SBB zur Verwaltung von Heizlasten. Die Lösung erreichte eine Kostenreduktion von 30% bei den Betriebskosten und verbesserte die Zuverlässigkeit auf über 98%. Dieses Projekt erhielt 50'000 CHF an staatlicher Förderung für die Weiterentwicklung und etablierte eine Pilotprojekt-Zusammenarbeit."
        },
        fr: {
            title: "Algorithme de chauffage prédictif des aiguillages ferroviaires",
            description: "Algorithme de chauffage prédictif basé sur la physique pour optimiser la consommation d'énergie des aiguillages CFF.",
            longDescription: "Développement d'un algorithme d'optimisation prédictif en Python pour les CFF afin de gérer les charges de chauffage. La solution a permis une réduction de 30% des coûts d'exploitation et amélioré la fiabilité à plus de 98%. Ce projet a obtenu 50'000 CHF de financement gouvernemental pour le développement ultérieur et a établi une collaboration de projet pilote."
        }
    },
    'snake-assembly': {
        en: {
            title: "Snake in Assembly",
            description: "The classic Snake game implemented entirely in Assembly on an FPGA with LED matrix and motion controls.",
            longDescription: "For the EE-208 course, we developed a Snake game on a microcontroller in Assembly code. The game is displayed on an 8x8 LED matrix with the score shown on an LCD screen (which persists highscores). Players can control the snake using either an infrared distance sensor for hand-motion control or an infrared remote. The system features custom drivers for hardware input/output and interrupt-based handling."
        },
        de: {
            title: "Snake in Assembly",
            description: "Das klassische Snake-Spiel, vollständig in Assembly auf einem FPGA mit LED-Matrix und Bewegungssteuerung implementiert.",
            longDescription: "Für den Kurs EE-208 haben wir ein Snake-Spiel auf einem Mikrocontroller in Assembly-Code entwickelt. Das Spiel wird auf einer 8x8 LED-Matrix angezeigt, wobei die Punktzahl auf einem LCD-Bildschirm angezeigt wird (der Highscores speichert). Spieler können die Schlange entweder über einen Infrarot-Distanzsensor für Handbewegungssteuerung oder eine Infrarot-Fernbedienung steuern. Das System verfügt über benutzerdefinierte Treiber für Hardware-Ein-/Ausgabe und interruptbasierte Verarbeitung."
        },
        fr: {
            title: "Snake en Assembly",
            description: "Le jeu classique Snake implémenté entièrement en Assembly sur un FPGA avec matrice LED et contrôles de mouvement.",
            longDescription: "Pour le cours EE-208, nous avons développé un jeu Snake sur un microcontrôleur en code Assembly. Le jeu s'affiche sur une matrice LED 8x8 avec le score affiché sur un écran LCD (qui conserve les meilleurs scores). Les joueurs peuvent contrôler le serpent en utilisant soit un capteur de distance infrarouge pour le contrôle par mouvement de la main, soit une télécommande infrarouge. Le système dispose de pilotes personnalisés pour les entrées/sorties matérielles et la gestion basée sur les interruptions."
        }
    },
    'address-scrambling': {
        en: {
            title: "Flex-VecPool: Flexible SPM Partitioning",
            description: "Software-transparent SPM repartitioning for vectorized many-core SoCs, achieving 4.6x speedup.",
            longDescription: "Introduced Flex-VecPool, fusing address-scrambling with vectorized core clusters. Features a lightweight remapper (<1% area) that enables locality-aware folding. Achieved 4.6x speedup in Dot Product and 66% cycle reduction in GEMV."
        },
        de: {
            title: "Flex-VecPool: Flexible SPM-Partitionierung",
            description: "Softwaretransparente SPM-Repartitionierung für vektorisierte Many-Core-SoCs mit 4,6-facher Beschleunigung.",
            longDescription: "Einführung von Flex-VecPool, das Address-Scrambling mit vektorisierten Core-Clustern verbindet. Bietet einen leichtgewichtigen Remapper (<1% Fläche), der lokalitätsbewusstes Folding ermöglicht. Erreichte 4,6-fache Beschleunigung beim Dot Product und 66% Zyklenreduktion bei GEMV."
        },
        fr: {
            title: "Flex-VecPool : Partitionnement SPM flexible",
            description: "Repartitionnement SPM transparent pour le logiciel pour SoC multi-cœurs vectorisés, atteignant une accélération de 4,6x.",
            longDescription: "Présentation de Flex-VecPool, fusionnant le brouillage d'adresses avec des clusters de cœurs vectorisés. Dispose d'un remappeur léger (<1% de surface) qui permet le pliage conscient de la localité. A atteint une accélération de 4,6x pour le produit scalaire et une réduction de 66% des cycles pour GEMV."
        }
    },
    'hack-the-tracks': {
        en: {
            title: "Hack the tracks",
            description: "Genetic algorithm for construction site planning (Hackathon Winner - 25k CHF).",
            longDescription: "Winning solution for the 'Hack the Tracks' hackathon (25,000 CHF prize). Developed a genetic algorithm for optimizing construction site planning between different transport modes in just 36 hours. Features a Python backend and Streamlit frontend."
        },
        de: {
            title: "Hack the tracks",
            description: "Genetischer Algorithmus für Baustellenplanung (Hackathon-Gewinner - 25'000 CHF).",
            longDescription: "Gewinnerlösung für den 'Hack the Tracks' Hackathon (25'000 CHF Preisgeld). Entwicklung eines genetischen Algorithmus zur Optimierung der Baustellenplanung zwischen verschiedenen Transportmodi in nur 36 Stunden. Beinhaltet ein Python-Backend und Streamlit-Frontend."
        },
        fr: {
            title: "Hack the tracks",
            description: "Algorithme génétique pour la planification de chantiers (Gagnant du Hackathon - 25'000 CHF).",
            longDescription: "Solution gagnante du hackathon 'Hack the Tracks' (prix de 25'000 CHF). Développement d'un algorithme génétique pour optimiser la planification des chantiers entre différents modes de transport en seulement 36 heures. Comprend un backend Python et une interface Streamlit."
        }
    },
    'epfl-spacecraft': {
        en: {
            title: "EPFL Spacecraft Team",
            description: "Team leader for a student-built satellite project. Our board was launched into space in Jan 2023.",
            longDescription: "The EPFL Spacecraft Team is a student association at EPFL causing satellites. I was teamleader for a while and the board I was working on was sent to space in January 2023."
        },
        de: {
            title: "EPFL Spacecraft Team",
            description: "Teamleiter für ein von Studenten gebautes Satellitenprojekt. Unsere Platine wurde im Januar 2023 ins All geschickt.",
            longDescription: "Das EPFL Spacecraft Team ist eine Studentenvereinigung an der EPFL, die Satelliten baut. Ich war eine Zeit lang Teamleiter und die Platine, an der ich arbeitete, wurde im Januar 2023 ins All geschickt."
        },
        fr: {
            title: "EPFL Spacecraft Team",
            description: "Chef d'équipe pour un projet de satellite construit par des étudiants. Notre carte a été lancée dans l'espace en janvier 2023.",
            longDescription: "L'équipe EPFL Spacecraft est une association étudiante de l'EPFL construisant des satellites. J'ai été chef d'équipe pendant un certain temps et la carte sur laquelle je travaillais a été envoyée dans l'espace en janvier 2023."
        }
    },
    'lautsprecher-wasser': {
        en: {
            title: "Loudspeaker Water Art",
            description: "High-speed photography of colored water dancing on audio frequencies.",
            longDescription: "A series of photos capturing the behavior of water mixed with paint when placed on a loudspeaker playing various low frequencies. The vibrations create standing waves and complex structures that exist for only a fraction of a second."
        },
        de: {
            title: "Lautsprecher-Wasser-Kunst",
            description: "Hochgeschwindigkeitsfotografie von farbigem Wasser, das auf Audiofrequenzen tanzt.",
            longDescription: "Eine Serie von Fotos, die das Verhalten von mit Farbe gemischtem Wasser zeigen, wenn es auf einem Lautsprecher platziert wird, der verschiedene tiefe Frequenzen abspielt. Die Vibrationen erzeugen stehende Wellen und komplexe Strukturen, die nur für einen Bruchteil einer Sekunde existieren."
        },
        fr: {
            title: "Art de l'eau sur haut-parleur",
            description: "Photographie haute vitesse d'eau colorée dansant sur des fréquences audio.",
            longDescription: "Une série de photos capturant le comportement de l'eau mélangée à de la peinture lorsqu'elle est placée sur un haut-parleur jouant diverses basses fréquences. Les vibrations créent des ondes stationnaires et des structures complexes qui n'existent que pendant une fraction de seconde."
        }
    },
    'light-pendulum': {
        en: {
            title: "Light Pendulum",
            description: "Long exposure photos of pendulums with a light at the end creating geometric shapes.",
            longDescription: "A series of long exposure photos of pendulums with a light at the end to create cool shapes. The complex geometric patterns reveal the beautiful physics of motion hidden in the dark."
        },
        de: {
            title: "Licht-Pendel",
            description: "Langzeitbelichtungsfotos von Pendeln mit einem Licht am Ende, das geometrische Formen erzeugt.",
            longDescription: "Eine Serie von Langzeitbelichtungsfotos von Pendeln mit einem Licht am Ende, um coole Formen zu erzeugen. Die komplexen geometrischen Muster offenbaren die schöne Physik der Bewegung, die im Dunkeln verborgen ist."
        },
        fr: {
            title: "Pendule lumineux",
            description: "Photos en longue exposition de pendules avec une lumière à l'extrémité créant des formes géométriques.",
            longDescription: "Une série de photos en longue exposition de pendules avec une lumière à l'extrémité pour créer des formes sympas. Les motifs géométriques complexes révèlent la belle physique du mouvement cachée dans l'obscurité."
        }
    }
};

// Helper function to get translated text
const getTranslated = (projectId, field) => {
    const lang = i18n.getLanguage();
    return projectTranslations[projectId]?.[lang]?.[field] || projectTranslations[projectId]?.en?.[field] || '';
};

// Project Data
const projects = [
    {
        id: "hardware-watchdog",
        getTitle: () => getTranslated("hardware-watchdog", "title"),
        getDescription: () => getTranslated("hardware-watchdog", "description"),
        getLongDescription: () => getTranslated("hardware-watchdog", "longDescription"),
        image: "/hardware-watchdog.png",
        link: "projects/hardware-watchdog.html",
        skills: ["SystemVerilog", "RISC-V", "FPGA", "Hardware Verification"],
        type: "ETH",
        date: "Jun 2025"
    },
    {
        id: "sbb-optimization",
        getTitle: () => getTranslated("sbb-optimization", "title"),
        getDescription: () => getTranslated("sbb-optimization", "description"),
        getLongDescription: () => getTranslated("sbb-optimization", "longDescription"),
        image: "/sbb-predictive-heating.png",
        link: "projects/sbb-optimization.html",
        skills: ["Python", "Physics Modeling", "Optimization", "Energy Efficiency"],
        type: "SBB",
        date: "Jan 2024"
    },
    {
        id: "snake-assembly",
        getTitle: () => getTranslated("snake-assembly", "title"),
        getDescription: () => getTranslated("snake-assembly", "description"),
        getLongDescription: () => getTranslated("snake-assembly", "longDescription"),
        image: "/snake-assembly.png",
        link: "projects/snake-assembly.html",
        skills: ["Assembly", "FPGA", "Hardware Design", "Interrupts"],
        video: "ql-HQcmxW4Q",
        gallery: ["/snake-structure.png", "/snake-hardware.png"],
        type: "EPFL",
        date: "May 2022"
    },
    {
        id: "address-scrambling",
        getTitle: () => getTranslated("address-scrambling", "title"),
        getDescription: () => getTranslated("address-scrambling", "description"),
        getLongDescription: () => getTranslated("address-scrambling", "longDescription"),
        image: "/flex-vecpool.png",
        link: "projects/address-scrambling.html",
        skills: ["SystemVerilog", "Computer Architecture", "Many-Core", "Optimization"],
        type: "ETH",
        date: "Jun 2025"
    },
    {
        id: "hack-the-tracks",
        getTitle: () => getTranslated("hack-the-tracks", "title"),
        getDescription: () => getTranslated("hack-the-tracks", "description"),
        getLongDescription: () => getTranslated("hack-the-tracks", "longDescription"),
        image: "/hack-the-tracks-team.jpg",
        link: "projects/hack-the-tracks.html",
        skills: ["Python", "Genetic Algorithm", "Optimization", "Streamlit"],
        date: "Jan 2026"
    },
    {
        id: "epfl-spacecraft",
        getTitle: () => getTranslated("epfl-spacecraft", "title"),
        getDescription: () => getTranslated("epfl-spacecraft", "description"),
        getLongDescription: () => getTranslated("epfl-spacecraft", "longDescription"),
        image: "/est-logo.png",
        link: "projects/epfl-spacecraft.html",
        skills: ["PCB Design", "Leadership", "Space Systems", "Electronics"],
        type: "EPFL",
        date: "Jan 2023",
        gallery: ["/est-bunny-front.jpg", "/est-bunny-back.jpg", "/est-sd-cards.png"]
    }
];

// Art Projects Data
const artProjects = [
    {
        id: "lautsprecher-wasser",
        getTitle: () => getTranslated("lautsprecher-wasser", "title"),
        getDescription: () => getTranslated("lautsprecher-wasser", "description"),
        getLongDescription: () => getTranslated("lautsprecher-wasser", "longDescription"),
        image: "/assets/photography/lautsprecher_wasser/20200219184848_IMG_7489-01.jpeg",
        link: "projects/lautsprecher-wasser.html",
        skills: ["Photography", "High-speed", "Art"],
        type: "Personal",
        date: "Feb 2020",
        gallery: [
            "/assets/photography/lautsprecher_wasser/20200219184848_IMG_7489-01.jpeg",
            "/assets/photography/lautsprecher_wasser/20200219185127_IMG_7530-01.jpeg",
            "/assets/photography/lautsprecher_wasser/20200219185127_IMG_7531-01.jpeg",
            "/assets/photography/lautsprecher_wasser/20200303144302_IMG_7577-01.jpeg",
            "/assets/photography/lautsprecher_wasser/20200303144303_IMG_7580-01.jpeg",
            "/assets/photography/lautsprecher_wasser/20200303144754_IMG_7627-01.jpeg",
            "/assets/photography/lautsprecher_wasser/20200303145625_IMG_7652-01.jpeg",
            "/assets/photography/lautsprecher_wasser/20200303145625_IMG_7655-01.jpeg",
            "/assets/photography/lautsprecher_wasser/20200303145627_IMG_7660-01.jpeg"
        ]
    },
    {
        id: "light-pendulum",
        getTitle: () => getTranslated("light-pendulum", "title"),
        getDescription: () => getTranslated("light-pendulum", "description"),
        getLongDescription: () => getTranslated("light-pendulum", "longDescription"),
        image: "/light-pendulum/20200202221647_IMG_7076-01.jpeg",
        link: "projects/light-pendulum.html",
        skills: ["Photography", "Long Exposure", "Art"],
        type: "Personal",
        date: "Feb 2020",
        gallery: [
            "/light-pendulum/20200202012200_IMG_6875-01.jpeg",
            "/light-pendulum/20200202012912_IMG_6900-01-01.jpeg",
            "/light-pendulum/20200202013014_IMG_6904-01-01.jpeg",
            "/light-pendulum/20200202220917_IMG_7060-01.jpeg",
            "/light-pendulum/20200202220934_IMG_7061-01.jpeg",
            "/light-pendulum/20200202221200_IMG_7065-01.jpeg",
            "/light-pendulum/20200202221216_IMG_7066-01.jpeg",
            "/light-pendulum/20200202221647_IMG_7076-01.jpeg",
            "/light-pendulum/20200202221710_IMG_7077-01.jpeg"
        ]
    }
];

// Helper to resolve asset paths with Vite base URL
const resolvePath = (path) => {
    if (!path) return ''; // Handle undefined/null
    // If path doesn't start with /, return as is
    if (!path.startsWith('/')) return path;

    // Use Vite's BASE_URL which is set in vite.config.js
    // In dev, usually serve at root '/', so we use '/' to avoid broken images if accessing root directly
    // In prod, use the configured base URL
    const baseUrl = import.meta.env.DEV ? '/' : import.meta.env.BASE_URL;

    // import.meta.env.BASE_URL always ends with / in Vite
    if (baseUrl.endsWith('/')) {
        return `${baseUrl}${path.substring(1)}`;
    }
    return `${baseUrl}${path}`;
};


// Helper to parse "Month Year" into a Date object
const parseDate = (dateStr) => {
    if (!dateStr) return new Date(0); // No date = old
    const [month, year] = dateStr.split(' ');
    // Create date from "Month Year" (e.g., "Jun 2025" -> "2025-06-01")
    return new Date(`${month} 1, ${year}`);
};

// Sort projects by date (Newest First)
projects.sort((a, b) => parseDate(b.date) - parseDate(a.date));

// Function to render projects
const renderProjects = (container, projectList) => {
    if (!container) return;

    container.innerHTML = projectList.map(project => `
        <article class="project-card" data-skills='${JSON.stringify(project.skills)}'>
            <div class="project-image" style="background-image: url('${resolvePath(project.image)}')">
                <div class="project-badges">
                    ${project.type ? `<span class="badge badge-type badge-${project.type.toLowerCase()}">${project.type}</span>` : ''}
                    ${project.date ? `<span class="badge badge-date">${project.date}</span>` : ''}
                </div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.getTitle()}</h3>
                <p class="project-desc">${project.getDescription()}</p>
                <div class="project-tags">
                    ${project.skills.map(s => `<span class="mini-tag">${s}</span>`).join('')}
                </div>
                <a href="${resolvePath(project.link)}" class="project-link">${i18n.t('projects.viewProject')} &rarr;</a>
            </div>
        </article>
    `).join('');
};

// Function to update all translatable elements
const updateTranslations = () => {
    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18n.t(key);
    });

    // Re-render projects and photography
    renderProjects(document.getElementById('projects-grid'), projects);
    renderProjects(document.getElementById('photography-grid'), artProjects);

    // Reattach event listeners for skill hover
    attachSkillHoverListeners();
};

// Home Page Logic: Render Projects
const projectsContainer = document.getElementById('projects-grid');
const photographyContainer = document.getElementById('photography-grid');

renderProjects(projectsContainer, projects);
renderProjects(photographyContainer, artProjects);

// Function to attach skill hover listeners
const attachSkillHoverListeners = () => {
    const skillTags = document.querySelectorAll('.skill-tags .tag');
    const projectCards = document.querySelectorAll('.project-card');

    if (skillTags.length > 0 && projectCards.length > 0) {
        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                const skillName = tag.textContent.trim();

                projectCards.forEach(card => {
                    const cardSkills = JSON.parse(card.dataset.skills || '[]');
                    if (cardSkills.includes(skillName)) {
                        card.classList.add('highlight');
                        card.classList.remove('dim');
                    } else {
                        card.classList.add('dim');
                        card.classList.remove('highlight');
                    }
                });
            });

            tag.addEventListener('mouseleave', () => {
                projectCards.forEach(card => {
                    card.classList.remove('highlight', 'dim');
                });
            });
        });
    }
};

// Initial skill hover setup
attachSkillHoverListeners();

// Language Switcher Logic
const languageSwitcher = document.getElementById('language-switcher');
if (languageSwitcher) {
    const langButtons = languageSwitcher.querySelectorAll('.lang-btn');

    // Set initial active state
    const updateActiveButton = () => {
        const currentLang = i18n.getLanguage();
        langButtons.forEach(btn => {
            if (btn.dataset.lang === currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    updateActiveButton();

    // Add click handlers
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = btn.dataset.lang;
            i18n.setLanguage(newLang);
            updateActiveButton();
            updateTranslations();
        });
    });

    // Listen for language changes from other sources
    i18n.onChange(() => {
        updateActiveButton();
        updateTranslations();
    });
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-scroll').forEach(el => observer.observe(el));


// Shared Logic (Theme, Cursor, Nav)
// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');

// Check for saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}



// Page Transition Logic
const initPageTransitions = () => {
    // Small delay to ensure CSS transition triggers
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }
        document.body.classList.add('is-loaded');
    }, 100);
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPageTransitions);
} else {
    initPageTransitions();
}

// Handle outgoing links
document.querySelectorAll('a').forEach(link => {
    // Dynamic Path Resolution for Nav Links
    const rawHref = link.getAttribute('href');
    if (rawHref && !rawHref.startsWith('http') && !rawHref.startsWith('#') && !rawHref.startsWith('mailto:')) {
        if (rawHref.startsWith('/')) {
            link.href = resolvePath(rawHref);
        }
    }

    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Ignore if:
        // 1. No href
        // 2. Open in new tab (target="_blank")
        // 3. Anchor link on same page (starts with #)
        // 4. Mailto link (opens email client)

        if (!href || link.target === '_blank' || href.startsWith('#') || href.startsWith('mailto:')) return;

        // Simplify: allow internal transitions
        e.preventDefault();
        document.body.classList.remove('is-loaded');

        setTimeout(() => {
            window.location.href = href;
        }, 400); // Matches CSS duration
    });
});

// Handle Browser Back/Forward Cache
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        document.body.classList.add('is-loaded');
    }
});
