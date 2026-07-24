# Jatan Puri — Developer Portfolio

A responsive developer portfolio showcasing my full-stack development, Flutter application development, Python automation, and QA testing experience.

The website presents selected projects, technical skills, education, freelance experience, and the development approach I follow when building software solutions.

## Live Portfolio

[View the live portfolio](https://jatanpuri.dev)

## About the Project

This portfolio was designed to present my software-development work in a clean and professional format.

It highlights my experience with:

- Full-stack web development
- React and Node.js applications
- Flutter mobile development
- REST API development and integration
- Python automation and web scraping
- Real-time systems using Socket.IO
- Playwright and Selenium test automation
- Docker-based development workflows

## Main Features

- Responsive layout for desktop, tablet, and mobile
- Professional hero and introduction sections
- Education and freelance-experience timeline
- Technical skills grouped by category
- Selected software-development projects
- Project descriptions, technologies, and repository links
- Downloadable resume
- Smooth scrolling and active navigation
- Scroll-progress indicator
- Lightweight animations and interactions
- Custom-domain deployment with HTTPS

## Technology Stack

### Frontend

- HTML5
- CSS3
- JavaScript
- Responsive Web Design

### Development and Deployment

- Git
- GitHub
- GitHub Pages
- Custom domain
- DNS configuration
- HTTPS

## Featured Work

The portfolio currently highlights projects such as:

### Bug Tracker Lite

A full-stack defect-tracking application built with React, Node.js, MongoDB, Jira REST API integration, Docker Compose, and Playwright end-to-end testing.

[View repository](https://github.com/JatanPuri5/bug-tracker-lite-sqe)

### Real-Time Chat Platform

A secure messaging platform featuring direct chats, public and private rooms, online presence, typing indicators, notifications, and delivery/read receipts.

[View repository](https://github.com/JatanPuri5/realtime-chat-socketio-platform)

### SpendWise Expense Tracker

A cross-platform Flutter expense-management application with a Node.js REST API, MySQL database, JWT authentication, budgets, transactions, and analytics.

[View repository](https://github.com/JatanPuri5/spendwise-expense-tracker)

### React E-Commerce SPA

A responsive React and Vite single-page application with product listings, cart functionality, API integration, and documented testing.

[View repository](https://github.com/JatanPuri5/my-spa-project)

## Project Structure

```text
JatanPuri5.github.io/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── profile.jpg
│   └── Jatan-Puri-Resume.pdf
├── CNAME
├── .nojekyll
└── README.md
```

## Run Locally

Clone the repository:

```bash
git clone https://github.com/JatanPuri5/JatanPuri5.github.io.git
```

Move into the project directory:

```bash
cd JatanPuri5.github.io
```

Start a local HTTP server on Windows:

```bash
py -m http.server 3000
```

For macOS or Linux:

```bash
python3 -m http.server 3000
```

Open the website in your browser:

```text
http://localhost:3000
```

You may also open `index.html` directly, but using a local server provides a more reliable preview.

## Content Management

### Main Page Content

The main website structure, introduction, education, experience, resume links, and other page content are managed in:

```text
index.html
```

### Projects and Technical Information

Project cards, project highlights, technology tags, skill groups, and rotating role text are managed in:

```text
js/main.js
```

### Design and Responsive Layout

Typography, colors, spacing, responsive layouts, navigation behavior, and animations are managed in:

```text
css/style.css
```

## Updating Projects

To add or update a project, edit the project collection inside:

```text
js/main.js
```

Each project can include:

- Project name
- Category
- Description
- Main features
- Technologies
- Repository link
- Live-demo link

Only add a live-demo link when the public demonstration is working correctly.

## Updating the Profile Photo

Replace:

```text
assets/profile.jpg
```

Keep the same filename unless you also update its reference inside `index.html`.

For better website performance, use a properly cropped and compressed image.

## Updating the Resume

Replace:

```text
assets/Jatan-Puri-Resume.pdf
```

Keep the same filename unless all related links inside the website are also updated.

The public resume should not contain confidential information such as:

- CNIC or identification numbers
- Complete residential address
- Passwords or account credentials
- Private client information

## GitHub Pages Deployment

The website is deployed directly from the repository's `main` branch through GitHub Pages.

The project does not require:

- A backend server
- A database
- Environment variables
- A package installation
- A build command

The custom domain is configured through the `CNAME` file.

Its content should remain:

```text
jatanpuri.dev
```

The `.nojekyll` file should also remain in the repository so GitHub Pages serves the files without Jekyll processing.

## Updating the Live Website

After making and reviewing changes locally, run:

```bash
git add .
git commit -m "Update portfolio content and design"
git push origin main
```

GitHub Pages will automatically deploy the latest version after the changes are pushed.

Deployment may take a few minutes to appear on the live website.

## Security and Privacy

This public repository should never contain:

- API keys
- Passwords
- Access tokens
- Private `.env` files
- Database credentials
- Personal identification documents
- Confidential client information
- Private production data

Use demonstration or public data in all project descriptions and screenshots.

## Author

**Jatan Puri**

Full-Stack Developer · Flutter Developer · Python Automation Developer · QA Automation Engineer
