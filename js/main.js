document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- DATA ---------- */
const projects = [
  {
    index: "01",
    category: "Full-Stack QA / SQE Automation Platform",
    title: "Bug Tracker Lite",
    image: null, // e.g. "assets/projects/bug-tracker-lite.png"
    desc: "A full-stack bug-tracking app that doubles as a working demo of a real SQE workflow: every bug reported in the app creates a linked Jira issue via the Jira REST API, and marking a bug \u201cResolved\u201d auto-transitions the Jira issue to \u201cDone.\u201d The full stack runs in Docker Compose for one-command setup.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Docker", "Docker Compose", "Playwright", "Jira REST API"],
    tests: "5 automated Playwright E2E tests — creation, validation, status updates, filtering, deletion",
    repo: "https://github.com/JatanPuri5/bug-tracker-lite-sqe",
    demo: null
  },
  {
    index: "02",
    category: "Cross-Platform Personal Finance App",
    title: "SpendWise",
    image: null, // e.g. "assets/projects/spendwise.png"
    desc: "A cross-platform expense tracker with a Flutter frontend (Android, iOS, web, Windows, Linux, macOS) and a Node.js/Express REST API backend. JWT authentication with bcrypt password hashing protects the transaction and budget endpoints, backed by a relational MySQL schema.",
    stack: ["Flutter", "Dart", "Node.js", "Express", "MySQL", "JWT", "bcrypt", "fl_chart", "Postman"],
    tests: "All endpoints documented and tested via a Postman collection",
    repo: "https://github.com/JatanPuri5/spendwise-expense-tracker",
    demo: null
  },
  {
    index: "03",
    category: "E-Commerce Single-Page App",
    title: "E-Commerce Cart SPA",
    image: null, // e.g. "assets/projects/ecommerce-cart-spa.png"
    desc: "A single-page e-commerce style application with a React/Vite frontend, dedicated cart functionality, and a lightweight Python backend module — kept in a clear frontend, backend, and documentation structure.",
    stack: ["React", "Vite", "Python", "REST"],
    tests: "Manual test steps documented for core cart flows",
    repo: "https://github.com/JatanPuri5/my-spa-project",
    demo: null
  }
];

const moreWork = [
  { title: "Real-Time Chat Socket.IO Platform", desc: "A React + Node.js real-time messaging platform built with Socket.IO, TypeScript, and MongoDB. See the repository for the full feature set.", badge: "Public repository", link: "https://github.com/JatanPuri5/realtime-chat-socketio-platform" },
  { title: "Expense Tracker", desc: "An earlier, separate expense-tracking build — distinct from SpendWise. See the repository for stack and implementation details.", badge: "Public repository", link: "https://github.com/JatanPuri5/Expense-Tracker" },
  { title: "AI Invoice Extractor", desc: "Python + OCR document parsing with a Streamlit interface for AI-assisted data extraction.", badge: "Freelance prototype", link: null },
  { title: "PartnerCarrier Web Scraper", desc: "A Python and Playwright scraper with a Tkinter interface and CSV export for automated data collection.", badge: "Freelance prototype", link: null },
  { title: "Smart Hostel Management System", desc: "A Flutter app with provider-based state management for hostel administration workflows.", badge: "Academic project", link: null },
  { title: "Cisco Multi-Branch Network", desc: "A multi-branch network built in Packet Tracer covering VLANs, inter-VLAN routing, DHCP, ACLs, and NAT.", badge: "Academic project", link: null }
];

const roles = [
  "Full-Stack Developer",
  "Software Engineering Student",
  "QA Automation Engineer",
  "Flutter Developer",
  "Freelance Developer"
];
const roleColors = ["var(--amber)", "var(--mint)", "var(--rose)", "#7DD3FC", "var(--amber)"];

const caseStudies = [
  {
    tab: "Bug Tracker Lite",
    title: "Bug Tracker Lite",
    sub: "A full-stack bug tracker that mirrors a real Software Quality Engineering workflow — from bug report to Jira sync to automated regression testing.",
    what: "A React (Vite) + Node.js/Express + MongoDB bug-tracking app, containerized with Docker Compose for one-command setup.",
    why: "Manual bug triage and status updates between a dev tool and Jira waste time and drift out of sync. This closes that loop automatically.",
    how: "The Jira REST API v3 is wired in both directions: reporting a bug in the app creates a linked Jira issue, and marking a bug \u201cResolved\u201d auto-transitions that issue to \u201cDone.\u201d",
    architecture: "React (Vite) UI  →  Express API  →  MongoDB  ⇄  Jira REST API v3",
    outcome: "5 automated Playwright end-to-end tests cover creation, validation, status updates, filtering, and deletion — wired into an automatic Jira status-update script.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Docker Compose", "Playwright", "Jira REST API"]
  },
  {
    tab: "SpendWise",
    title: "SpendWise",
    sub: "A cross-platform personal finance app — one Flutter codebase running on Android, iOS, web, Windows, Linux, and macOS.",
    what: "A Flutter frontend paired with a Node.js/Express REST API and a relational MySQL schema for income, expenses, and budgets.",
    why: "Personal finance data needs to be accessible everywhere the user is, without maintaining six separate frontends.",
    how: "JWT authentication with bcrypt password hashing protects every transaction and budget endpoint. A dashboard summary and analytics screen uses fl_chart to visualize spending.",
    architecture: "Flutter (6 platforms)  →  Express REST API  →  MySQL  +  JWT / bcrypt auth",
    outcome: "Every endpoint is documented and tested through a Postman collection before being wired into the app.",
    stack: ["Flutter", "Dart", "Node.js", "Express", "MySQL", "JWT", "bcrypt", "fl_chart", "Postman"]
  },
  {
    tab: "E-Commerce Cart SPA",
    title: "E-Commerce Cart SPA",
    sub: "A single-page e-commerce style application focused on getting cart mechanics right, with a clean, testable project structure.",
    what: "A React/Vite frontend backed by a lightweight Python module, organized into clear frontend, backend, and documentation folders.",
    why: "Cart state — add, update quantity, remove, totals — is deceptively easy to get wrong. This project isolates and gets that flow right.",
    how: "Cart functionality is implemented as a dedicated, testable unit, with manual test steps documented for the core flows.",
    architecture: "React (Vite) UI  →  Python backend module  →  Product / cart data",
    outcome: "Manual test steps are documented for the full add-to-cart-through-checkout flow.",
    stack: ["React", "Vite", "Python", "REST"]
  }
];

const skillGroups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite"] },
  { title: "Backend & APIs", items: ["Node.js", "Express.js", "REST APIs", "Python", "SQL"] },
  { title: "Mobile", items: ["Flutter", "Dart"] },
  { title: "Databases", items: ["MongoDB", "Mongoose", "MySQL"] },
  { title: "Testing & Quality", items: ["Playwright", "Selenium", "Postman", "Jira REST API", "End-to-end testing"] },
  { title: "DevOps & Tools", items: ["Docker", "Docker Compose", "Git", "GitHub", "VS Code"] }
];

/* ---------- RENDER PROJECTS ---------- */
const projectsGrid = document.getElementById('projectsGrid');
projects.forEach((p, i) => {
  const card = document.createElement('article');
  card.className = 'project-card reveal' + (i % 2 === 1 ? ' reverse' : '');
  card.id = 'project-' + p.index;

  card.innerHTML = `
    <div class="project-visual">
      ${p.image ? `<img src="${p.image}" alt="${p.title} screenshot" loading="lazy">` : `
      <div class="mock-window">
        <div class="mock-bar"><span></span><span></span><span></span></div>
        <div class="mock-lines"><div></div><div></div><div></div><div></div></div>
      </div>`}
    </div>
    <div class="project-info">
      <span class="project-index">Project ${p.index}</span>
      <span class="project-category">${p.category}</span>
      <h3>${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-stack">${p.stack.map(s => `<span class="tag">${s}</span>`).join('')}</div>
      <p class="project-tests">✓ ${p.tests}</p>
      <div class="project-links">
        <a href="${p.repo}" target="_blank" rel="noopener">View Source ↗</a>
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Live Demo ↗</a>` : ''}
      </div>
    </div>
  `;
  projectsGrid.appendChild(card);
});

/* ---------- RENDER CASE STUDIES ---------- */
const caseTabs = document.getElementById('caseTabs');
const casePanel = document.getElementById('casePanel');

function renderCasePanel(cs){
  casePanel.innerHTML = `
    <h3>${cs.title}</h3>
    <p class="case-sub">${cs.sub}</p>
    <div class="case-cols">
      <div class="case-col"><span class="case-col-label">What</span><p>${cs.what}</p></div>
      <div class="case-col"><span class="case-col-label">Why</span><p>${cs.why}</p></div>
      <div class="case-col"><span class="case-col-label">How</span><p>${cs.how}</p></div>
    </div>
    <div class="case-architecture">${cs.architecture}</div>
    <p class="case-outcome">${cs.outcome}</p>
    <div class="case-stack">${cs.stack.map(s => `<span class="tag">${s}</span>`).join('')}</div>
  `;
}

caseStudies.forEach((cs, i) => {
  const btn = document.createElement('button');
  btn.className = 'case-tab' + (i === 0 ? ' active' : '');
  btn.type = 'button';
  btn.role = 'tab';
  btn.textContent = cs.tab;
  btn.addEventListener('click', () => {
    caseTabs.querySelectorAll('.case-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderCasePanel(cs);
  });
  caseTabs.appendChild(btn);
});
renderCasePanel(caseStudies[0]);

/* ---------- RENDER MORE WORK ---------- */
const moreGrid = document.getElementById('moreGrid');
moreWork.forEach(m => {
  const card = document.createElement('div');
  card.className = 'more-card reveal';
  card.innerHTML = `
    <span class="badge">${m.badge}</span>
    <h3>${m.title}</h3>
    <p>${m.desc}</p>
    ${m.link ? `<a href="${m.link}" target="_blank" rel="noopener">View Source ↗</a>` : ''}
  `;
  moreGrid.appendChild(card);
});

/* ---------- RENDER SKILLS ---------- */
const skillsGrid = document.getElementById('skillsGrid');
skillGroups.forEach(g => {
  const group = document.createElement('div');
  group.className = 'skill-group reveal';
  group.innerHTML = `<h3>${g.title}</h3><ul>${g.items.map(s => `<li>${s}</li>`).join('')}</ul>`;
  skillsGrid.appendChild(group);
});

/* ---------- TYPED ROLE ROTATOR ---------- */
const typedEl = document.getElementById('typedRole');
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

function typeRoles(){
  if (!typedEl) return; // defensive: never let a missing element break the rest of the page
  if (reducedMotionQuery.matches){
    typedEl.textContent = roles[0];
    typedEl.style.color = roleColors[0];
    return;
  }
  let roleIndex = 0, charIndex = 0, deleting = false;
  typedEl.style.color = roleColors[0];

  function tick(){
    const current = roles[roleIndex];
    if (!deleting){
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length){
        deleting = true;
        setTimeout(tick, 1300); // how long a finished role stays on screen
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0){
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typedEl.style.color = roleColors[roleIndex % roleColors.length];
      }
    }
    setTimeout(tick, deleting ? 22 : 42); // deleting speed, typing speed (lower = faster)
  }
  tick();
}
typeRoles();

/* ---------- HEADER SCROLL STATE ---------- */
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ---------- MOBILE NAV ---------- */
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
function closeMobileNav(){
  mobileNav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open menu');
}
navToggle.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileNav(); });

/* ---------- ACTIVE NAV LINK ---------- */
const sections = ['work', 'about', 'skills', 'experience', 'contact'].map(id => document.getElementById(id));
const navLinks = document.querySelectorAll('[data-nav]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => s && sectionObserver.observe(s));

/* ---------- REVEAL ON SCROLL ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- PIPELINE ANIMATION (signature element) ---------- */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const steps = document.querySelectorAll('#pipelineSteps li');
const statusEl = document.getElementById('pipelineStatus');
let stepIndex = 0;

function runPipeline(){
  steps.forEach(s => { s.classList.remove('active'); });
  if (stepIndex > 0) steps[stepIndex - 1].querySelector('.step-icon').textContent = '✓';
  if (stepIndex >= steps.length){
    statusEl.textContent = 'all checks passed — shipped ✓';
    steps.forEach(s => s.classList.add('done'));
    setTimeout(() => {
      steps.forEach(s => { s.classList.remove('done'); s.querySelector('.step-icon').textContent = '○'; });
      stepIndex = 0;
      statusEl.textContent = 'running…';
      runPipeline();
    }, 2600);
    return;
  }
  const current = steps[stepIndex];
  current.classList.add('active');
  statusEl.textContent = `running ${current.dataset.step}…`;
  stepIndex++;
  setTimeout(runPipeline, 900);
}
if (!prefersReduced){
  setTimeout(runPipeline, 600);
} else {
  steps.forEach(s => { s.classList.add('done'); s.querySelector('.step-icon').textContent = '✓'; });
  statusEl.textContent = 'all checks passed — shipped ✓';
}

/* ---------- COPY EMAIL ---------- */
const copyBtn = document.getElementById('copyEmailBtn');
const copyFeedback = document.getElementById('copyFeedback');
copyBtn.addEventListener('click', async () => {
  const email = copyBtn.dataset.email;
  try{
    await navigator.clipboard.writeText(email);
    copyFeedback.textContent = 'Copied ' + email + ' to your clipboard.';
  }catch(e){
    copyFeedback.textContent = email;
  }
  setTimeout(() => { copyFeedback.textContent = ''; }, 4000);
});

/* ---------- CONTACT FORM (mailto fallback, no fake backend) ---------- */
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!contactForm.checkValidity()){
    contactForm.reportValidity();
    return;
  }
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:jatanpuri5@gmail.com?subject=${subject}&body=${body}`;
  copyFeedback.textContent = 'Opening your email app with this message pre-filled…';
  setTimeout(() => { copyFeedback.textContent = ''; }, 5000);
});

/* ---------- BACK TO TOP ---------- */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
});
