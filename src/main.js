import './style.css'

// Project Data
const projects = [
    {
        id: "hardware-watchdog",
        title: "Implementation of a hardware watchdog",
        description: "Hardware watchdog integration for CROC SoC to improve robustness.",
        longDescription: "Integrated a hardware watchdog into the CROC SoC to detect processor stalls and deadlocks. Features a configurable timeout, OBI-protocol wrapper, and system-wide reset. Validated with randomized test cases and zero physical design violations.",
        image: "/hardware-watchdog.png",
        link: "projects/hardware-watchdog.html",
        skills: ["SystemVerilog", "RISC-V", "FPGA", "Hardware Verification"],
        type: "ETH",
        date: "Jun 2025"
    },
    {
        id: "sbb-optimization",
        title: "Predictive rail switch heating algorithm",
        description: "Physics-based predictive heating algorithm to optimize energy consumption for SBB rail switches.",
        longDescription: "Developed a predictive optimization algorithm in Python for SBB to manage heating loads. The solution achieved a 30% reduction in operating costs and improved reliability to over 98%. This project secured 50k CHF in government funding for further development and established a pilot project collaboration.",
        image: "/sbb-predictive-heating.png",
        link: "projects/sbb-optimization.html",
        skills: ["Python", "Physics Modeling", "Optimization", "Energy Efficiency"],
        type: "SBB",
        date: "Jan 2024"
    },
    {
        id: "snake-assembly",
        title: "Snake in Assembly",
        description: "The classic Snake game implemented entirely in Assembly on an FPGA with LED matrix and motion controls.",
        longDescription: "For the EE-208 course, we developed a Snake game on a microcontroller in Assembly code. The game is displayed on an 8x8 LED matrix with the score shown on an LCD screen (which persists highscores). Players can control the snake using either an infrared distance sensor for hand-motion control or an infrared remote. The system features custom drivers for hardware input/output and interrupt-based handling.",
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
        title: "Flex-VecPool: Flexible SPM Partitioning",
        description: "Software-transparent SPM repartitioning for vectorized many-core SoCs, achieving 4.6x speedup.",
        longDescription: "Introduced Flex-VecPool, fusing address-scrambling with vectorized core clusters. Features a lightweight remapper (<1% area) that enables locality-aware folding. Achieved 4.6x speedup in Dot Product and 66% cycle reduction in GEMV.",
        image: "/flex-vecpool.png",
        link: "projects/address-scrambling.html",
        skills: ["SystemVerilog", "Computer Architecture", "Many-Core", "Optimization"],
        type: "ETH",
        date: "Jun 2025"
    },
    {
        id: "hack-the-tracks",
        title: "Hack the tracks",
        description: "Genetic algorithm for construction site planning (Hackathon Winner - 25k CHF).",
        longDescription: "Winning solution for the 'Hack the Tracks' hackathon (25,000 CHF prize). Developed a genetic algorithm for optimizing construction site planning between different transport modes in just 36 hours. Features a Python backend and Streamlit frontend.",
        image: "/hack-the-tracks-team.jpg",
        link: "projects/hack-the-tracks.html",
        skills: ["Python", "Genetic Algorithm", "Optimization", "Streamlit"],
        date: "Jan 2026"
    },
    {
        id: "epfl-spacecraft",
        title: "EPFL Spacecraft Team",
        description: "Team leader for a student-built satellite project. Our board was launched into space in Jan 2023.",
        longDescription: "The EPFL Spacecraft Team is a student association at EPFL causing satellites. I was teamleader for a while and the board I was working on was sent to space in January 2023.",
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
        title: "Loudspeaker Water Art",
        description: "High-speed photography of colored water dancing on audio frequencies.",
        longDescription: "A series of photos capturing the behavior of water mixed with paint when placed on a loudspeaker playing various low frequencies. The vibrations create standing waves and complex structures that exist for only a fraction of a second.",
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
        title: "Light Pendulum",
        description: "Long exposure photos of pendulums with a light at the end creating geometric shapes.",
        longDescription: "A series of long exposure photos of pendulums with a light at the end to create cool shapes. The complex geometric patterns reveal the beautiful physics of motion hidden in the dark.",
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

// Home Page Logic: Render Projects
const projectsContainer = document.getElementById('projects-grid');
if (projectsContainer) {
    projectsContainer.innerHTML = projects.map(project => `
        <article class="project-card" data-skills='${JSON.stringify(project.skills)}'>
            <div class="project-image" style="background-image: url('${resolvePath(project.image)}')">
                <div class="project-badges">
                    ${project.type ? `<span class="badge badge-type badge-${project.type.toLowerCase()}">${project.type}</span>` : ''}
                    ${project.date ? `<span class="badge badge-date">${project.date}</span>` : ''}
                </div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tags">
                    ${project.skills.map(s => `<span class="mini-tag">${s}</span>`).join('')}
                </div>
                <a href="${resolvePath(project.link)}" class="project-link">View Project &rarr;</a>
            </div>
        </article>
    `).join('');


    /* Interaction Logic moved to end to cover all sections */
}

// Photography Logic: Render Projects
const photographyContainer = document.getElementById('photography-grid');
if (photographyContainer) {
    photographyContainer.innerHTML = artProjects.map(project => `
        <article class="project-card" data-skills='${JSON.stringify(project.skills)}'>
            <div class="project-image" style="background-image: url('${resolvePath(project.image)}')">
                <div class="project-badges">
                    ${project.type ? `<span class="badge badge-type badge-${project.type.toLowerCase()}">${project.type}</span>` : ''}
                    ${project.date ? `<span class="badge badge-date">${project.date}</span>` : ''}
                </div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tags">
                    ${project.skills.map(s => `<span class="mini-tag">${s}</span>`).join('')}
                </div>
                <a href="${resolvePath(project.link)}" class="project-link">View Project &rarr;</a>
            </div>
        </article>
    `).join('');

    // We reuse the skill hover logic and observer if we want, or add specific ones.
}

// Global Interaction Logic (Runs after injection)
// Skill Hover Interactive Logic
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
