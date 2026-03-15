import './style.css'
import { i18n } from './i18n.js'

// Project Data with translations
const projectTranslations = {
    'better-contacts': {
        en: {
            title: "BetterContacts",
            description: "Android app visualizing your social circle as an interactive bubble network.",
            longDescription: "A fresh take on the contact book. BetterContacts visualizes your social network as it really is: a web of connections. Built for Android using Kotlin and custom view components, it features a dynamic force-directed graph where you are the center of your universe, surrounded by color-coded groups of friends, family, and colleagues."
        },
        de: {
            title: "BetterContacts",
            description: "Android-App, die dein soziales Umfeld als interaktives Blasen-Netzwerk visualisiert.",
            longDescription: "Eine neue Perspektive auf das Kontaktbuch. BetterContacts visualisiert dein soziales Netzwerk so, wie es wirklich ist: ein Netz aus Verbindungen. Entwickelt für Android mit Kotlin und benutzerdefinierten View-Komponenten, bietet es einen dynamischen, kraftgesteuerten Graphen, in dem du das Zentrum deines Universums bist, umgeben von farbcodierten Gruppen aus Freunden, Familie und Kollegen."
        },
        fr: {
            title: "BetterContacts",
            description: "Application Android visualisant votre cercle social sous forme de réseau de bulles interactif.",
            longDescription: "Une nouvelle approche du carnet d'adresses. BetterContacts visualise votre réseau social tel qu'il est vraiment : une toile de connexions. Conçue pour Android avec Kotlin et des composants de vue personnalisés, elle propose un graphe dynamique dirigé par la force où vous êtes le centre de votre univers, entouré de groupes d'amis, de famille et de collègues codés par couleur."
        }
    },
    'hardware-watchdog': {
        en: {
            title: "Hardware Watchdog",
            description: "Hardware watchdog integration for CROC SoC to improve robustness.",
            longDescription: "Integrated a hardware watchdog into the CROC SoC to detect processor stalls and deadlocks. Features a configurable timeout, OBI-protocol wrapper, and system-wide reset. Validated with randomized test cases and zero physical design violations."
        },
        de: {
            title: "Hardware Watchdog",
            description: "Hardware-Watchdog-Integration für CROC SoC zur Verbesserung der Robustheit.",
            longDescription: "Integration eines Hardware-Watchdogs in den CROC SoC zur Erkennung von Prozessorstillständen und Deadlocks. Funktionen umfassen konfigurierbares Timeout, OBI-Protokoll-Wrapper und systemweiten Reset. Validiert mit randomisierten Testfällen und null Verletzungen im physischen Design."
        },
        fr: {
            title: "Hardware Watchdog",
            description: "Intégration de watchdog matériel pour le SoC CROC afin d'améliorer la robustesse.",
            longDescription: "Intégration d'un watchdog matériel dans le SoC CROC pour détecter les blocages et deadlocks du processeur. Dispose d'un timeout configurable, d'un wrapper de protocole OBI et d'une réinitialisation système. Validé avec des cas de test randomisés et zéro violation de conception physique."
        }
    },
    'sbb-optimization': {
        en: {
            title: "Predictive rail switch heating",
            description: "Physics-based predictive heating algorithm to optimize energy consumption for SBB rail switches.",
            longDescription: "Developed a predictive optimization algorithm in Python for SBB to manage heating loads. The solution achieved a 30% reduction in operating costs and improved reliability to over 98%. This project secured 50k CHF in government funding for further development and established a pilot project collaboration."
        },
        de: {
            title: "Prädiktive Weichenheizung",
            description: "Physikbasierter prädiktiver Heizalgorithmus zur Optimierung des Energieverbrauchs für SBB-Weichen.",
            longDescription: "Entwicklung eines prädiktiven Optimierungsalgorithmus in Python für die SBB zur Verwaltung von Heizlasten. Die Lösung erreichte eine Kostenreduktion von 30% bei den Betriebskosten und verbesserte die Zuverlässigkeit auf über 98%. Dieses Projekt erhielt 50'000 CHF an staatlicher Förderung für die Weiterentwicklung und etablierte eine Pilotprojekt-Zusammenarbeit."
        },
        fr: {
            title: "Chauffage prédictif des aiguillages",
            description: "Algorithme de chauffage prédictif basé sur la physique pour optimiser la consommation d'énergie des aiguillages CFF.",
            longDescription: "Développement d'un algorithme d'optimisation prédictif en Python pour les CFF afin de gérer les charges de chauffage. La solution a permis une réduction de 30% des coûts d'exploitation et amélioré la fiabilité à plus de 98%. Ce projet a obtenu 50'000 CHF de financement gouvernemental pour le développement ultérieur et a établi une collaboration de projet pilote."
        }
    },
    'snake-assembly': {
        en: {
            title: "Snake: 100% Assembly 🐍",
            description: "Classic Snake built entirely in Assembly. No high-level languages, no shortcuts—just pure logic.",
            longDescription: "Why write a game in a high-level language when you can manually manage every single register? For our Microcontrollers course, we decided to ignore the easy path and write Snake entirely in Assembly. The result? A glorious 8x8 LED matrix display, an LCD for high scores (so your shame persists), and controls that are... unique. You can guide the snake with a standard IR remote, or if you're feeling magical, wave your hands over distance sensors like a low-budget Jedi."
        },
        de: {
            title: "Snake: 100% Assembly 🐍",
            description: "Das klassische Snake, komplett in Assembly gebaut. Keine high-level Sprachen, keine Shortcuts – nur reine Logik.",
            longDescription: "Warum ein Spiel in einer Hochsprache schreiben, wenn man jedes einzelne Register manuell verwalten kann? Für unseren Mikrocontroller-Kurs haben wir uns entschieden, den einfachen Weg zu ignorieren und Snake komplett in Assembly zu schreiben. Das Ergebnis? Ein glorreiches 8x8 LED-Matrix-Display, ein LCD für Highscores (damit deine Schande bleibt) und Steuerungen, die... einzigartig sind. Du kannst die Schlange mit einer normalen IR-Fernbedienung steuern oder, wenn du dich magisch fühlst, deine Hände über Abstandssensoren wedeln wie ein Low-Budget-Jedi."
        },
        fr: {
            title: "Snake : 100% Assembly 🐍",
            description: "Le jeu Snake classique entièrement en Assembly. Pas de langages de haut niveau, pas de raccourcis – juste de la pure logique.",
            longDescription: "Pourquoi écrire un jeu dans un langage de haut niveau quand on peut gérer manuellement chaque registre ? Pour notre cours de microcontrôleurs, nous avons décidé d'ignorer la facilité et d'écrire Snake entièrement en Assembly. Le résultat ? Une glorieuse matrice LED 8x8, un écran LCD pour les meilleurs scores (pour que la honte persiste), et des contrôles... uniques. Vous pouvez guider le serpent avec une télécommande IR standard, ou si vous vous sentez magique, agiter vos mains au-dessus des capteurs de distance comme un Jedi à petit budget."
        }
    },
    'address-scrambling': {
        en: {
            title: "Flex-VecPool: Research",
            description: "Smashing the bandwidth wall with <1% area overhead. 4.6x speedup. Co-authored paper forthcoming.",
            longDescription: "Semester Project at ETH Zürich (IIS) under Prof. Luca Benini. I fused address scrambling with vector cores to create 'Flex-VecPool'—a transparent SPM that reconfigures on the fly. Result? 4.6x faster Dot Product and 3.0x faster GEMV, all with less than 1% area overhead."
        },
        de: {
            title: "Flex-VecPool: Forschung",
            description: "Durchbrechen der Bandbreiten-Mauer mit <1% Flächenaufwand. 4.6x Speedup. Co-Autor Paper folgt.",
            longDescription: "Semesterprojekt an der ETH Zürich (IIS) bei Prof. Luca Benini. Ich habe Adress-Scrambling mit Vektorkernen verschmolzen, um 'Flex-VecPool' zu schaffen – einen transparenten SPM, der sich zur Laufzeit rekonfiguriert. Ergebnis? 4.6x schnelleres Dot Product und 3.0x schnelleres GEMV, bei weniger als 1% Flächenaufwand."
        },
        fr: {
            title: "Flex-VecPool : Recherche",
            description: "Briser le mur de la bande passante avec <1% de surface. Accélération de 4.6x. Co-auteur d'un papier à venir.",
            longDescription: "Projet de semestre à l'ETH Zurich (IIS) sous le Prof. Luca Benini. J'ai fusionné le brouillage d'adresses avec des cœurs vectoriels pour créer 'Flex-VecPool' — une SPM transparente qui se reconfigure à la volée. Résultat ? Produit scalaire 4.6x plus rapide et GEMV 3.0x plus rapide, le tout avec moins de 1% de surface supplémentaire."
        }
    },
    'hack-the-tracks': {
        en: {
            title: "Hack the Tracks",
            description: "36 hours, 25k CHF prize. A genetic algorithm that optimized construction sites faster than a human ever could.",
            longDescription: "What happens when you lock a team called 'Biology Meets Rigi' in a room for 36 hours? We build an award-winning optimization engine! We dove into the 'Hack the Tracks' challenge with ambition, using a genetic algorithm to solve the nightmare of coordinating construction sites across all transport networks. Result: 1st place and 25,000 CHF."
        },
        de: {
            title: "Hack the Tracks",
            description: "36 Stunden, 25k CHF Preisgeld. Ein genetischer Algorithmus, der Baustellen schneller optimierte, als ein Mensch es je könnte.",
            longDescription: "Was passiert, wenn man ein Team namens 'Biology Meets Rigi' für 36 Stunden in einen Raum sperrt? Wir bauen eine preisgekrönte Optimierungs-Engine! Wir stürzten uns mit Ehrgeiz in die 'Hack the Tracks'-Challenge und nutzten einen genetischen Algorithmus, um den Albtraum der Koordination von Baustellen über alle Verkehrsnetze hinweg zu lösen. Ergebnis: 1. Platz und 25'000 CHF."
        },
        fr: {
            title: "Hack the Tracks",
            description: "36 heures, 25k CHF de prix. Un algo génétique qui a optimisé les chantiers plus vite qu'un humain ne le pourrait.",
            longDescription: "Que se passe-t-il quand on enferme une équipe appelée 'Biology Meets Rigi' dans une pièce pendant 36 heures ? On construit un moteur d'optimisation primé ! Nous avons plongé dans le défi 'Hack the Tracks' avec ambition, utilisant un algorithme génétique pour résoudre le cauchemar de la coordination des chantiers sur tous les réseaux de transport. Résultat : 1ère place et 25'000 CHF."
        }
    },
    'epfl-spacecraft': {
        en: {
            title: "Rocket Science 🚀",
            description: "Team leader for a student-built satellite project. Our board was launched into space in January 2023.",
            longDescription: "The EPFL Spacecraft Team is a student association at EPFL causing satellites. I was teamleader for a while and the board I was working on was sent to space in January 2023."
        },
        de: {
            title: "Rocket Science 🚀",
            description: "Teamleiter für ein von Studenten gebautes Satellitenprojekt. Unser PCB wurde im Januar 2023 ins All geschickt.",
            longDescription: "Das EPFL Spacecraft Team ist eine Studentenvereinigung an der EPFL, die Satelliten baut. Ich war eine Zeit lang Teamleiter und die Platine, an der ich arbeitete, wurde im Januar 2023 ins All geschickt."
        },
        fr: {
            title: "Rocket Science 🚀",
            description: "Chef d'équipe pour un projet de satellite construit par des étudiants. Notre PCB a été lancée dans l'espace en janvier 2023.",
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
    },
    'analog-first-film': {
        en: {
            title: "First Analog Film",
            description: "My very first analog film - capturing moments around Lausanne and Lund.",
            longDescription: "This was my very first roll of analog film. The first three photos were taken around Lausanne, Switzerland, experimenting with film photography for the first time. The last photo was captured in Lund, Sweden. Each frame represents the learning process and joy of shooting on film."
        },
        de: {
            title: "Erster Analogfilm",
            description: "Mein allererster Analogfilm - Momente rund um Lausanne und Lund.",
            longDescription: "Dies war meine allererste Rolle Analogfilm. Die ersten drei Fotos wurden rund um Lausanne, Schweiz aufgenommen, als ich zum ersten Mal mit Filmfotografie experimentierte. Das letzte Foto entstand in Lund, Schweden. Jeder Frame repräsentiert den Lernprozess und die Freude am Fotografieren auf Film."
        },
        fr: {
            title: "Premier film analogique",
            description: "Mon tout premier film analogique - capturant des moments autour de Lausanne et Lund.",
            longDescription: "C'était mon tout premier rouleau de film analogique. Les trois premières photos ont été prises autour de Lausanne, en Suisse, expérimentant la photographie argentique pour la première fois. La dernière photo a été capturée à Lund, en Suède. Chaque image représente le processus d'apprentissage et la joie de photographier sur film."
        }
    },
    'uppsala-digital': {
        en: {
            title: "Uppsala Autumn",
            description: "Digital photography from Uppsala, Sweden - autumn colors and architecture.",
            longDescription: "A collection of digital photos taken in Uppsala, Sweden during autumn 2022. Capturing the beautiful fall colors, historic architecture, and atmosphere of this charming Swedish university city."
        },
        de: {
            title: "Uppsala Herbst",
            description: "Digitalfotografie aus Uppsala, Schweden - Herbstfarben und Architektur.",
            longDescription: "Eine Sammlung digitaler Fotos aus Uppsala, Schweden im Herbst 2022. Festhaltend die wunderschönen Herbstfarben, historische Architektur und Atmosphäre dieser charmanten schwedischen Universitätsstadt."
        },
        fr: {
            title: "Uppsala Automne",
            description: "Photographie numérique d'Uppsala, Suède - couleurs d'automne et architecture.",
            longDescription: "Une collection de photos numériques prises à Uppsala, en Suède, pendant l'automne 2022. Capturant les belles couleurs automnales, l'architecture historique et l'atmosphère de cette charmante ville universitaire suédoise."
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
        id: "better-contacts",
        getTitle: () => getTranslated("better-contacts", "title"),
        getDescription: () => getTranslated("better-contacts", "description"),
        getLongDescription: () => getTranslated("better-contacts", "longDescription"),
        image: "/better-contacts-card.jpg",
        link: "projects/better-contacts.html",
        skills: ["Android", "Kotlin", "Graph Visualization", "UI/UX"],
        type: "Personal",
        date: "Nov 2024"
    },

    {
        id: "hardware-watchdog",
        getTitle: () => getTranslated("hardware-watchdog", "title"),
        getDescription: () => getTranslated("hardware-watchdog", "description"),
        getLongDescription: () => getTranslated("hardware-watchdog", "longDescription"),
        image: "/hardware-watchdog.png",
        link: "projects/hardware-watchdog.html",
        skills: ["SystemVerilog", "RISC-V", "FPGA", "Hardware Verification", "Git"],
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
        skills: ["Python", "Physics Modeling", "Optimization", "Energy Efficiency", "REST API", "Git"],
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
        skills: ["Assembly", "FPGA", "Drivers", "Microcontrollers"],
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
        skills: ["SystemVerilog", "Computer Architecture", "Many-Core", "Optimization", "Git"],
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
        skills: ["Python", "Genetic Algorithm", "Optimization", "Streamlit", "Git"],
        date: "Jan 2026"
    },
    {
        id: "epfl-spacecraft",
        getTitle: () => getTranslated("epfl-spacecraft", "title"),
        getDescription: () => getTranslated("epfl-spacecraft", "description"),
        getLongDescription: () => getTranslated("epfl-spacecraft", "longDescription"),
        image: "/est-logo.png",
        link: "projects/epfl-spacecraft.html",
        skills: ["PCB Design", "Leadership", "Space Systems", "Electronics", "Altium Designer", "Git"],
        type: "EPFL",
        date: "Jan 2023",
        gallery: ["/est-bunny-front.jpg", "/est-bunny-back.jpg", "/est-sd-cards.png"]
    }
];

// Art Projects Data
const artProjects = [
    {
        id: "uppsala-digital",
        getTitle: () => getTranslated("uppsala-digital", "title"),
        getDescription: () => getTranslated("uppsala-digital", "description"),
        getLongDescription: () => getTranslated("uppsala-digital", "longDescription"),
        image: "/assets/photography/uppsala_digital/20221013131824_IMG_8527-01.jpeg",
        link: "projects/uppsala-digital.html",
        skills: ["Photography", "Travel", "Architecture"],
        type: "Personal",
        date: "Oct 2022",
        gallery: [
            "/assets/photography/uppsala_digital/20221013115759_IMG_8472-01.jpeg",
            "/assets/photography/uppsala_digital/20221013124014_IMG_8493-01.jpeg",
            "/assets/photography/uppsala_digital/20221013131437_IMG_8521-01.jpeg",
            "/assets/photography/uppsala_digital/20221013131630_IMG_8525-01.jpeg",
            "/assets/photography/uppsala_digital/20221013131824_IMG_8527-01.jpeg",
            "/assets/photography/uppsala_digital/20221013161731_IMG_8543-01.jpeg"
        ]
    },
    {
        id: "analog-first-film",
        getTitle: () => getTranslated("analog-first-film", "title"),
        getDescription: () => getTranslated("analog-first-film", "description"),
        getLongDescription: () => getTranslated("analog-first-film", "longDescription"),
        image: "/assets/photography/analog_first_film/IMG_20220710_0004-01.jpeg",
        link: "projects/analog-first-film.html",
        skills: ["Photography", "Film", "Analog"],
        type: "Personal",
        date: "Jul 2022",
        gallery: [
            "/assets/photography/analog_first_film/IMG_20220710_0004-01.jpeg",
            "/assets/photography/analog_first_film/IMG_20220710_0006-01.jpeg",
            "/assets/photography/analog_first_film/IMG_20220710_0011-01.jpeg",
            "/assets/photography/analog_first_film/R1-00594-0014-01.jpeg"
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
    },
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
    }
];

// Helper to resolve asset paths with Vite base URL
const resolvePath = (path) => {
    if (!path) return ''; // Handle undefined/null
    // If path doesn't start with /, return as is
    if (!path.startsWith('/')) return path;

    // Use Vite's BASE_URL which is set in vite.config.js
    const baseUrl = import.meta.env.BASE_URL;

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
        <a href="${resolvePath(project.link)}" class="project-image">
            <img src="${resolvePath(project.image)}" alt="${project.getTitle()}" loading="lazy" class="project-image-img">
            <div class="project-badges">
                ${project.type ? `<span class="badge badge-type badge-${project.type.toLowerCase()}">${project.type}</span>` : ''}
                ${project.date ? `<span class="badge badge-date">${project.date}</span>` : ''}
            </div>
        </a>
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



// Function to attach skill hover listeners
const attachSkillHoverListeners = () => {
    const skillTags = document.querySelectorAll('.skill-tags .tag');
    const projectCards = document.querySelectorAll('.project-card');
    let activeSkill = null;

    // Function to clear active skill
    const clearActiveSkill = () => {
        activeSkill = null;
        skillTags.forEach(t => t.classList.remove('active'));
        projectCards.forEach(card => {
            card.classList.remove('highlight', 'dim');
        });
    };

    if (skillTags.length > 0 && projectCards.length > 0) {
        skillTags.forEach(tag => {
            // Click handler for toggle functionality
            tag.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent document click handler
                const skillName = tag.textContent.trim();

                // If clicking the already active skill, deactivate it
                if (activeSkill === skillName) {
                    clearActiveSkill();
                } else {
                    // Deactivate previous skill if any
                    skillTags.forEach(t => t.classList.remove('active'));

                    // Activate new skill
                    activeSkill = skillName;
                    tag.classList.add('active');

                    // Filter projects
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

                    // Smooth scroll to projects section
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });

            // Hover handlers (only work when no skill is actively selected)
            tag.addEventListener('mouseenter', () => {
                if (activeSkill === null) {
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
                }
            });

            tag.addEventListener('mouseleave', () => {
                if (activeSkill === null) {
                    projectCards.forEach(card => {
                        card.classList.remove('highlight', 'dim');
                    });
                }
            });
        });

        // Click anywhere else to deselect
        document.addEventListener('click', (e) => {
            // Check if click is outside skill tags area
            const isSkillTag = e.target.closest('.skill-tags .tag');
            if (!isSkillTag && activeSkill !== null) {
                clearActiveSkill();
            }
        });
    }
};

// Initial translation update (renders projects and attaches listeners)
updateTranslations();

// Language Switcher Logic
const languageSwitcher = document.getElementById('language-switcher');
if (languageSwitcher) {
    const langButtons = languageSwitcher.querySelectorAll('.lang-btn');
    const glider = languageSwitcher.querySelector('.lang-glider');

    // Function to update glider position
    const updateGlider = (clickedBtn) => {
        const activeBtn = clickedBtn || languageSwitcher.querySelector('.lang-btn.active');
        if (activeBtn && glider) {
            const btnRect = activeBtn.getBoundingClientRect();
            const parentRect = languageSwitcher.getBoundingClientRect();
            const relativeLeft = btnRect.left - parentRect.left;

            glider.style.width = `${btnRect.width}px`;
            // Calculate transform based on relative position minus the glider's CSS left offset (4px)
            glider.style.transform = `translateX(${relativeLeft - 4}px)`;
        }
    };

    // Set initial active state
    const updateActiveButton = () => {
        const currentLang = i18n.getLanguage();
        let activeBtn = null;

        langButtons.forEach(btn => {
            if (btn.dataset.lang === currentLang) {
                btn.classList.add('active');
                activeBtn = btn;
            } else {
                btn.classList.remove('active');
            }
        });

        if (activeBtn) {
            updateGlider(activeBtn);
        }
    };

    // Initial update
    const performUpdate = () => {
        requestAnimationFrame(updateActiveButton);
    };

    // Wait for fonts
    document.fonts.ready.then(performUpdate);

    // ResizeObserver to handle any layout changes in the container (font loads, etc.)
    const resizeObserver = new ResizeObserver(() => {
        performUpdate();
    });
    resizeObserver.observe(languageSwitcher);

    // Update on back/forward navigation (pageshow)
    window.addEventListener('pageshow', () => {
        performUpdate();
        // Polling to catch late shifts
        [50, 150, 300, 500].forEach(delay => setTimeout(performUpdate, delay));
    });

    // Initial polling to ensure it catches the final state
    [50, 150, 300, 500].forEach(delay => setTimeout(performUpdate, delay));

    // Update on window resize (fallback)
    window.addEventListener('resize', performUpdate);

    // Add click handlers
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = btn.dataset.lang;
            i18n.setLanguage(newLang);
            updateActiveButton();
            updateTranslations();
            updateGlider(btn);
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
        }, 0); // Matches CSS duration
    });
});

// Handle Browser Back/Forward Cache
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        document.body.classList.add('is-loaded');
    }
});

// Construct email address to prevent simple scraping
const contactBtn = document.getElementById('contact-email-btn');
if (contactBtn) {
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const user = 'elio.wanner';
        const domain = 'hotmail.com';
        window.location.href = `mailto:${user}@${domain}`;
    });
}

// Avatar Blinking Effect
const avatar = document.querySelector('.hero-avatar');
if (avatar) {
    const blinkImage = new Image();
    blinkImage.src = resolvePath('/avatar-blink.png');
    const originalSrc = avatar.src;

    let isBlinking = false;

    const blink = () => {
        if (isBlinking) return;
        isBlinking = true;
        avatar.src = blinkImage.src;
        setTimeout(() => {
            avatar.src = originalSrc;
            isBlinking = false;
        }, 200);
    };

    avatar.addEventListener('mouseenter', blink);
}
