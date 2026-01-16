import './style.css'

// Project Data
const projects = [
    {
        id: "ecommerce-dashboard",
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing online stores, featuring real-time analytics and inventory management.",
        longDescription: "This project addresses the need for a unified platform to manage e-commerce operations. It integrates with major payment gateways and shipping providers to provide a seamless experience for store owners. The dashboard offers real-time insights into sales performance, customer behavior, and inventory levels.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        link: "project.html?id=ecommerce-dashboard",
        skills: ["React", "Node.js", "CSS/SCSS"]
    },
    {
        id: "ai-chat-interface",
        title: "AI Chat Interface",
        description: "A sleek, responsive chat interface powered by modern LLMs, featuring code highlighting and voice input.",
        longDescription: "Designed to democratize access to advanced AI models, this chat interface prioritizes user experience and accessibility. It supports markdown rendering, syntax highlighting for code blocks, and voice-to-text input, making it a versatile tool for developers and curious minds alike.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
        link: "project.html?id=ai-chat-interface",
        skills: ["JavaScript", "UI/UX Design", "TypeScript"]
    },
    {
        id: "travel-planner-app",
        title: "Travel Planner App",
        description: "Mobile-first application for planning trips, including itinerary scheduling and budget tracking.",
        longDescription: "Planning a trip can be overwhelming. This app simplifies the process by allowing users to create detailed itineraries, track expenses in real-time, and collaborate with travel companions. It features offline mode and integration with map services.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop",
        link: "project.html?id=travel-planner-app",
        skills: ["React", "UI/UX Design"]
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
