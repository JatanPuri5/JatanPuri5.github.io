const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const iconPaths = {
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1.35-3.74c4.5-.5 9.25-2.2 9.25-10A7.8 7.8 0 0 0 20.8 0a7.3 7.3 0 0 1-.2 4.25A7.7 7.7 0 0 0 12 3.95a7.7 7.7 0 0 0-8.6.3A7.3 7.3 0 0 1 3.2 0a7.8 7.8 0 0 0-2.1 4.26c0 7.76 4.72 9.48 9.22 10A4.8 4.8 0 0 0 9 18v4M9 19c-4.5 1.5-5-2-7-2"/>',
  code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  api: '<path d="M12 3v6m0 6v6M5.6 6.4l4.2 4.2m4.4 4.8 4.2 4.2M3 12h6m6 0h6M5.6 17.6l4.2-4.2m4.4-2.8 4.2-4.2"/>',
  phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  test: '<path d="M9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  scrape: '<path d="M4 7h16M4 12h16M4 17h10"/><path d="m16 15 2 2 4-4"/>',
  docker: '<path d="M3 13h18c-.3 4-3.2 7-8 7H9c-3.2 0-5.8-2.1-6-7Z"/><path d="M7 13V9h4v4M11 13V9h4v4M15 13V9h4v4M11 9V5h4v4"/>',
  learn: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
  bolt: '<path d="M13 2 3 14h8l-1 8 10-12h-8Z"/>'
};

function icon(name) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24">${iconPaths[name] || iconPaths.code}</svg>`;
}

const projects = [
  {
    number: "01",
    name: "Bug Tracker Lite",
    category: "Full-Stack QA / SQE Automation Platform",
    description: "A full-stack bug-tracking platform using React, Vite, Node.js, Express, MongoDB, Docker, Playwright, and Jira REST API integration.",
    points: [
      "Bug reports create linked Jira issues.",
      "Resolving bugs can synchronize their Jira status.",
      "Docker Compose provides repeatable deployment.",
      "Playwright covers major end-to-end workflows."
    ],
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "Docker", "Playwright", "Jira REST API"],
    repo: "https://github.com/JatanPuri5/bug-tracker-lite-sqe",
    preview: "workflow"
  },
  {
    number: "02",
    name: "SpendWise",
    category: "Cross-Platform Expense Tracker",
    description: "A Flutter personal-finance application supported by a Node.js/Express REST API and MySQL database.",
    points: [
      "JWT authentication and bcrypt password hashing.",
      "Income, expense, and budget tracking.",
      "Dashboard analytics and Postman API documentation."
    ],
    tags: ["Flutter", "Dart", "Node.js", "Express", "MySQL", "JWT", "bcrypt", "Postman"],
    repo: "https://github.com/JatanPuri5/spendwise-expense-tracker",
    preview: "finance"
  },
  {
    number: "03",
    name: "Real-Time Chat Platform",
    category: "Real-Time Messaging Application",
    description: "A secure real-time messaging platform repository built with React, Node.js, TypeScript, Socket.IO, MongoDB-ready schemas, Docker Compose, and Redis service wiring.",
    points: [
      "Authenticated WebSocket messaging and protected REST routes.",
      "Direct conversations, rooms, presence, typing, and delivery/read states.",
      "Docker Compose setup for web, server, MongoDB, and Redis services."
    ],
    tags: ["React", "Node.js", "TypeScript", "Socket.IO", "MongoDB", "Redis", "Docker"],
    repo: "https://github.com/JatanPuri5/realtime-chat-socketio-platform",
    preview: "chat"
  },
  {
    number: "04",
    name: "E-Commerce Cart SPA",
    category: "E-Commerce Single-Page Application",
    description: "A React/Vite single-page application repository focused on cart workflow practice, with manual cart testing notes included in the project files.",
    points: [
      "Separate frontend source and project documentation.",
      "Cart workflow testing notes are tracked in the repository."
    ],
    tags: ["React", "Vite", "JavaScript", "Cart Testing"],
    repo: "https://github.com/JatanPuri5/my-spa-project",
    preview: "cart"
  },
  {
    number: "05",
    name: "Expense Tracker",
    category: "Separate Flutter Expense-Tracking Repository",
    description: "An earlier Flutter expense-tracking repository, kept distinct from the fuller SpendWise full-stack application.",
    points: [
      "Separate from SpendWise.",
      "Flutter/Dart project structure with mobile and desktop platform folders."
    ],
    tags: ["Flutter", "Dart", "Mobile App"],
    repo: "https://github.com/JatanPuri5/Expense-Tracker",
    preview: "mobile"
  }
];

const projectHighlights = [
  "Built a complete Jira-connected bug-tracking workflow covering development, testing, Docker deployment, and issue synchronization.",
  "Developed cross-platform Flutter applications supported by authenticated REST APIs and structured database schemas.",
  "Combined frontend, backend, database, testing, automation, and deployment work across academic and freelance projects."
];

const expertise = [
  {
    title: "Full-Stack Web Development",
    icon: "layers",
    tone: "accent",
    description: "Responsive frontends, API-driven workflows, dashboards, CRUD interfaces, and complete project wiring from UI to database.",
    tags: ["React", "Vite", "JavaScript", "Responsive UI"]
  },
  {
    title: "Backend APIs & Authentication",
    icon: "api",
    tone: "teal",
    description: "REST APIs with validation, relational and document database integration, JWT flows, protected routes, and clear service structure.",
    tags: ["Node.js", "Express", "JWT", "MySQL", "MongoDB"]
  },
  {
    title: "Flutter App Development",
    icon: "phone",
    tone: "accent",
    description: "Cross-platform Flutter applications with structured screens, API integration, charting, and mobile-first interaction patterns.",
    tags: ["Flutter", "Dart", "HTTP", "fl_chart"]
  },
  {
    title: "QA & Test Automation",
    icon: "test",
    tone: "teal",
    description: "End-to-end browser testing, Selenium flows, Postman API checks, Jira integrations, and documented test cases.",
    tags: ["Playwright", "Selenium", "Postman", "Jira"]
  },
  {
    title: "Python Automation & Scraping",
    icon: "scrape",
    tone: "accent",
    description: "Automation workflows for scraping, OCR, API integration, CSV/Excel processing, and AI-assisted data extraction.",
    tags: ["Python", "Playwright", "OCR", "CSV"]
  },
  {
    title: "Docker & Deployment",
    icon: "docker",
    tone: "teal",
    description: "Repeatable local environments and deployment-ready project structures using Docker Compose, Git, and practical docs.",
    tags: ["Docker", "Compose", "GitHub", "Docs"]
  }
];

const skillGroups = [
  { title: "Languages", icon: "code", items: ["JavaScript", "TypeScript", "Dart", "Python", "SQL", "HTML", "CSS"] },
  { title: "Frontend", icon: "layers", items: ["React", "Vite", "Responsive Design", "Tailwind CSS"] },
  { title: "Backend & APIs", icon: "api", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"] },
  { title: "Databases", icon: "database", items: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL"] },
  { title: "Testing & Quality", icon: "test", items: ["Playwright", "Selenium", "Postman", "Jira REST API", "End-to-End Testing", "Manual Testing"] },
  { title: "Tools & Deployment", icon: "docker", items: ["Docker", "Docker Compose", "Git", "GitHub", "VS Code", "npm"] }
];

const learning = [
  { title: "BS Software Engineering", text: "SZABIST Karachi - six semesters completed, degree in progress.", tags: ["University", "Software Engineering"] },
  { title: "Software Quality Engineering & Testing", text: "Manual test design, automated browser testing, API checks, and defect workflows.", tags: ["SQE", "Testing", "Jira"] },
  { title: "Web Engineering", text: "Full-stack application structure, frontend implementation, backend APIs, and deployment practice.", tags: ["Web", "APIs"] },
  { title: "Database Systems", text: "Relational schemas, queries, data modeling, and practical MySQL/MongoDB integrations.", tags: ["SQL", "MongoDB"] },
  { title: "Data Structures & Algorithms", text: "Core programming foundations for organizing, searching, and reasoning about data.", tags: ["DSA", "Problem Solving"] },
  { title: "Computer Networks", text: "Networking foundations used across real-time systems, APIs, and deployment environments.", tags: ["Networks", "Systems"] }
];

function tagsMarkup(tags) {
  return `<div class="tag-list">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div>`;
}

function previewMarkup() {
  return `
    <div class="project-preview" aria-hidden="true">
      <div class="preview-bar"><span></span><span></span><span></span></div>
      <div class="preview-body">
        <i></i>
        <div><b></b><em></em></div>
      </div>
    </div>
  `;
}

const projectsGrid = document.getElementById("projectsGrid");
if (projectsGrid) {
  projectsGrid.innerHTML = projects.map((project) => `
    <article class="project-card reveal">
      <div class="project-top">
        <span class="project-icon">${icon("folder")}</span>
        <a class="project-link" href="${project.repo}" target="_blank" rel="noopener" aria-label="${project.name} repository">
          ${icon("github")}
        </a>
      </div>
      <p class="project-kicker">Project ${project.number}</p>
      <p class="project-category">${project.category}</p>
      <h3>${project.name}</h3>
      <p class="project-desc">${project.description}</p>
      ${previewMarkup(project.preview)}
      <ul class="project-points">
        ${project.points.map((point) => `<li>${point}</li>`).join("")}
      </ul>
      ${tagsMarkup(project.tags)}
    </article>
  `).join("");
}

const highlightGrid = document.getElementById("highlightGrid");
if (highlightGrid) {
  highlightGrid.innerHTML = projectHighlights.map((text, index) => `
    <article class="highlight-card reveal">
      <span class="highlight-icon">${String(index + 1).padStart(2, "0")}</span>
      <p>${text}</p>
    </article>
  `).join("");
}

const expertiseGrid = document.getElementById("expertiseGrid");
if (expertiseGrid) {
  expertiseGrid.innerHTML = expertise.map((item) => `
    <article class="expertise-card reveal">
      <div class="expertise-card-head">
        <span class="expertise-icon ${item.tone === "teal" ? "teal" : ""}">${icon(item.icon)}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${tagsMarkup(item.tags)}
    </article>
  `).join("");
}

const skillsGrid = document.getElementById("skillsGrid");
if (skillsGrid) {
  skillsGrid.innerHTML = skillGroups.map((group) => `
    <article class="skill-card reveal">
      <div class="skill-card-head">
        <span class="skill-icon">${icon(group.icon)}</span>
      </div>
      <h3>${group.title}</h3>
      ${tagsMarkup(group.items)}
    </article>
  `).join("");
}

const learningGrid = document.getElementById("learningGrid");
if (learningGrid) {
  learningGrid.innerHTML = learning.map((item) => `
    <article class="learning-card reveal">
      <div class="learning-card-head">
        <span class="learning-icon">${icon("learn")}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      ${tagsMarkup(item.tags)}
    </article>
  `).join("");
}

const roles = [
  "Full-Stack Developer",
  "Software Engineering Student",
  "QA Automation Engineer",
  "Flutter Developer",
  "Freelance Developer"
];

const typedRole = document.getElementById("typedRole");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function startTyping() {
  if (!typedRole) return;
  if (reducedMotion.matches) {
    typedRole.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];
    typedRole.textContent = current.slice(0, charIndex);

    if (!deleting && charIndex < current.length) {
      charIndex += 1;
      window.setTimeout(tick, 44);
      return;
    }

    if (!deleting && charIndex === current.length) {
      deleting = true;
      window.setTimeout(tick, 1300);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      window.setTimeout(tick, 24);
      return;
    }

    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    window.setTimeout(tick, 260);
  }

  charIndex = roles[0].length;
  window.setTimeout(tick, 1200);
}

startTyping();

const header = document.getElementById("siteHeader");
const progress = document.getElementById("scrollProgress");

function updateScrollState() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progressWidth = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if (progress) {
    progress.style.width = `${Math.min(progressWidth, 100)}%`;
  }
  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }
}

window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", updateScrollState);
updateScrollState();

const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");

function setMobileMenu(open) {
  if (!navToggle || !mobileMenu) return;
  document.body.classList.toggle("menu-open", open);
  mobileMenu.classList.toggle("open", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

if (navToggle && mobileMenu) {
  navToggle.addEventListener("click", () => {
    setMobileMenu(navToggle.getAttribute("aria-expanded") !== "true");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMobileMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMobileMenu(false);
      navToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 920) {
      setMobileMenu(false);
    }
  });
}

const sectionIds = ["about", "experience", "projects", "skills", "contact"];
const sectionEls = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
const navLinks = document.querySelectorAll("[data-nav]");

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  });
}, { rootMargin: "-42% 0px -48% 0px", threshold: 0.01 });

sectionEls.forEach((section) => activeObserver.observe(section));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("in");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach((element) => {
  if (reducedMotion.matches) {
    element.classList.add("in");
  } else {
    revealObserver.observe(element);
  }
});

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:jatanpuri5@gmail.com?subject=${subject}&body=${body}`;

    if (formStatus) {
      formStatus.textContent = "Opening your email application with this message filled in.";
      window.setTimeout(() => {
        formStatus.textContent = "";
      }, 5000);
    }
  });
}

const backToTop = document.getElementById("backToTop");
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" });
  });
}
