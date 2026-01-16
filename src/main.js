import './style.css'

// Project Data
const projects = [
    {
        id: "better-contacts",
        title: "Better Contacts",
        description: "An intelligent app to visualize your social network, track connections, and remember key facts about people.",
        longDescription: "Better Contacts helps you maintain meaningful relationships by visualizing your social network as an interactive graph. It serves as a personal CRM, reminding you of how you met people, important facts, and connection history. The app uses smart algorithms to suggest when to reach out and highlights strength of connections.",
        image: "/better-contacts.png",
        link: "project.html?id=better-contacts",
        skills: ["React", "D3.js", "Firebase", "Graph Theory"]
    },
    {
        id: "sbb-hackathon",
        title: "SBB Hackathon Winner",
        description: "Award-winning (25k CHF) prototype using genetic algorithms to optimize construction scheduling for SBB.",
        longDescription: "Won 25,000 CHF at the SBB Hackathon with a team of 4. In 36 hours, we developed 'TrackOpt', a prototype that uses genetic algorithms to determine the optimal timing for construction packages in the transport industry. The solution minimizes disruptions and costs by intelligently scheduling maintenance windows.",
        image: "/sbb-hackathon.png",
        link: "project.html?id=sbb-hackathon",
        skills: ["Python", "Genetic Algorithms", "Optimization", "SBB Data"]
    },
    {
        id: "snake-assembly",
        title: "Snake in Assembly",
        description: "The classic Snake game implemented entirely in Assembly on an FPGA with LED matrix and motion controls.",
        longDescription: "A deep dive into low-level programming at EPFL. I implemented the full Snake game logic in Assembly language, running on an FPGA board. The game features a custom 8x8 LED matrix display driver and accelerometer-based motion controls for an immersive retro experience.",
        image: "/snake-assembly.png",
        link: "project.html?id=snake-assembly",
        skills: ["Assembly", "FPGA", "Hardware Design", "VHDL"]
    },
    {
        id: "address-scrambling",
        title: "Hardware Address Scrambling",
        description: "Research project at ETH IIS Lab on hardware address scrambling for improved efficiency and security.",
        longDescription: "During my semester project at ETH Zürich's IIS Lab, I worked on designing a hardware address scrambling unit. The novel architecture improved memory access efficiency and security against side-channel attacks. This work contributed to a published research paper on secure hardware design.",
        image: "/address-scrambling.png",
        link: "project.html?id=address-scrambling",
        skills: ["Verilog", "Hardware Security", "Research", "ETH IIS"]
    }
];

// Router Implementation (Simple)
const path = window.location.pathname;
const isProjectPage = path.includes('project.html');

if (isProjectPage) {
    // Project Detail Page Logic
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projects.find(p => p.id === projectId);

    if (project) {
        document.title = `${project.title} | Elio Wanner`;

        // Populate Hero
        const header = document.querySelector('.project-header-image');
        if (header) header.style.backgroundImage = `url('${project.image}')`;

        const titleEl = document.getElementById('project-title');
        if (titleEl) titleEl.textContent = project.title;

        const descEl = document.getElementById('project-desc');
        if (descEl) descEl.textContent = project.longDescription;

        // Populate Skills
        const skillsContainer = document.getElementById('project-skills');
        if (skillsContainer) {
            skillsContainer.innerHTML = project.skills.map(skill => `<span class="tag">${skill}</span>`).join('');
        }
    } else {
        document.body.innerHTML = "<h1>Project not found</h1> <a href='/'>Go Home</a>";
    }

} else {
    // Home Page Logic

    // Render Projects
    const projectsContainer = document.getElementById('projects-grid');
    if (projectsContainer) {
        projectsContainer.innerHTML = projects.map(project => `
            <article class="project-card" data-skills='${JSON.stringify(project.skills)}'>
                <div class="project-image" style="background-image: url('${project.image}')"></div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-tags">
                        ${project.skills.map(s => `<span class="mini-tag">${s}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="project-link">View Project &rarr;</a>
                </div>
            </article>
        `).join('');
    }

    // Skill Hover Interactive Logic
    const skillTags = document.querySelectorAll('.skill-tags .tag');
    const projectCards = document.querySelectorAll('.project-card');

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
}


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

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    if (cursorDot && cursorOutline) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    }
});

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursorOutline) {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }
    });
    el.addEventListener('mouseleave', () => {
        if (cursorOutline) {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.backgroundColor = 'transparent';
        }
    });
});

// Page Transition Logic
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure CSS transition triggers
    setTimeout(() => {
        document.body.classList.add('is-loaded');
    }, 50);
});

// Handle outgoing links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Ignore if:
        // 1. No href
        // 2. Open in new tab (target="_blank")
        // 3. Anchor link on same page (starts with #)

        if (!href || link.target === '_blank' || href.startsWith('#')) return;

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
