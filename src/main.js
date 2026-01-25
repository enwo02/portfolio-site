import './style.css'

// Project Data
const projects = [
    {
        id: "siemens-pipeline",
        title: "Cloud Data Pipeline",
        description: "Automated cloud-based data pipeline integrating AWS, Snowflake, and PowerBI for visualized business insights.",
        longDescription: "At Siemens AG, I engineered a fully automated cloud data pipeline. By leveraging AWS for orchestration and Snowflake for data warehousing, I eliminated manual data handling processes (saving ~1 FTE). The pipeline feeds directly into PowerBI dashboards, empowering customers to make data-driven decisions regarding energy efficiency and CO2 savings.",
        image: "/vite.svg", // Placeholder
        link: "project.html?id=siemens-pipeline",
        skills: ["AWS", "Snowflake", "Python", "PowerBI"]
    },
    {
        id: "sbb-optimization",
        title: "Energy Optimization Algo",
        description: "Predictive algorithm for heating load distribution reducing operating costs by 30%.",
        longDescription: "Developed a predictive optimization algorithm in Python for SBB to manage heating loads. The solution achieved a 30% reduction in operating costs and improved reliability to over 98%. This project secured 50k CHF in government funding for further development and established a pilot project collaboration.",
        image: "/sbb-hackathon.png",
        link: "project.html?id=sbb-optimization",
        skills: ["Python", "Optimization", "Data Science", "Energy"]
    },
    {
        id: "snake-assembly",
        title: "Snake in Assembly",
        description: "The classic Snake game implemented entirely in Assembly on an FPGA with LED matrix and motion controls.",
        longDescription: "For the EE-208 course, we developed a Snake game on a microcontroller in Assembly code. The game is displayed on an 8x8 LED matrix with the score shown on an LCD screen (which persists highscores). Players can control the snake using either an infrared distance sensor for hand-motion control or an infrared remote. The system features custom drivers for hardware input/output and interrupt-based handling.",
        image: "/snake-assembly.png",
        link: "project.html?id=snake-assembly",
        skills: ["Assembly", "FPGA", "Hardware Design", "Interrupts"],
        video: "ql-HQcmxW4Q",
        gallery: ["/snake-structure.png", "/snake-hardware.png"]
    },
    {
        id: "address-scrambling",
        title: "Hardware Address Scrambling",
        description: "Research project at ETH IIS Lab on hardware address scrambling for security.",
        longDescription: "During my semester project at ETH Zürich's IIS Lab, I worked on designing a hardware address scrambling unit. The novel architecture improved memory access efficiency and security against side-channel attacks. This work contributed to a published research paper on secure hardware design.",
        image: "/address-scrambling.png",
        link: "project.html?id=address-scrambling",
        skills: ["Verilog", "Hardware Security", "Research", "ETH IIS"]
    }
];

// Router Implementation (Simple)
const path = window.location.pathname;
const isProjectPage = path.includes('project.html');

// Helper to resolve asset paths with Vite base URL
const resolvePath = (path) => {
    // If path doesn't start with /, return as is
    if (!path.startsWith('/')) return path;

    // Get base URL (e.g., '/portfolio-site/' or '/')
    const baseUrl = import.meta.env.BASE_URL;

    // Avoid double slashes if base ends with /
    if (baseUrl.endsWith('/')) {
        return `${baseUrl}${path.substring(1)}`;
    }
    return `${baseUrl}${path}`;
};

if (isProjectPage) {
    // Project Detail Page Logic
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projects.find(p => p.id === projectId);

    if (project) {
        document.title = `${project.title} | Elio Wanner`;

        // Populate Hero
        const header = document.querySelector('.project-header-image');
        if (header) header.style.backgroundImage = `url('${resolvePath(project.image)}')`;

        const titleEl = document.getElementById('project-title');
        if (titleEl) titleEl.textContent = project.title;

        const descEl = document.getElementById('project-desc');
        if (descEl) descEl.textContent = project.longDescription;

        // Populate Skills
        const skillsContainer = document.getElementById('project-skills');
        if (skillsContainer) {
            skillsContainer.innerHTML = project.skills.map(skill => `<span class="tag">${skill}</span>`).join('');
        }

        // Render Media (Video & Gallery)
        const placeholderContent = document.querySelector('.placeholder-content');
        if (placeholderContent) {
            let mediaHTML = '';

            // Video Embed
            if (project.video) {
                mediaHTML += `
                    <div class="video-container" style="margin-bottom: 3rem; margin-top: 2rem;">
                        <iframe width="100%" height="450" style="border-radius: 12px;" 
                            src="https://www.youtube.com/embed/${project.video}" 
                            title="Project Video" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                `;
            }

            // Gallery
            if (project.gallery && project.gallery.length > 0) {
                mediaHTML += `<div class="project-gallery" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 2rem;">`;
                project.gallery.forEach(img => {
                    mediaHTML += `<img src="${resolvePath(img)}" alt="${project.title} screenshot" style="width: 100%; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">`;
                });
                mediaHTML += `</div>`;
            }

            // Only replace content if we have media, otherwise remove placeholder
            if (mediaHTML) {
                placeholderContent.innerHTML = mediaHTML;
                placeholderContent.style.background = 'transparent'; // Remove default placeholder style
                placeholderContent.style.border = 'none';
                placeholderContent.style.padding = '0';
            } else {
                placeholderContent.remove();
            }
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
                <div class="project-image" style="background-image: url('${resolvePath(project.image)}')"></div>
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



// Page Transition Logic
document.addEventListener('DOMContentLoaded', () => {
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
});

// Handle outgoing links
// Handle outgoing links
document.querySelectorAll('a').forEach(link => {
    // Dynamic Path Resolution for Nav Links
    // This ensures links work on both local dev (/) and GitHub Pages (/portfolio-site/)
    const rawHref = link.getAttribute('href');
    if (rawHref && !rawHref.startsWith('http') && !rawHref.startsWith('#')) {
        link.href = resolvePath(rawHref);
    }

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
