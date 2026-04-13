# Copilot Instructions for Simple Web App

## Architecture Overview
This is a minimal Node.js Express application demonstrating basic authentication flows. The backend consists of a single `server.js` file handling POST routes for login and registration, while the frontend uses static HTML files in `public/` with Bootstrap styling.

**Key Components:**
- `server.js`: Express server with hardcoded authentication (username: "chinmay", password: "password")
- `public/*.html`: Static pages for index, login, register, success states
- No database integration; registration is a placeholder redirect

**Data Flow:**
- Forms submit POST requests to `/login` or `/register`
- Server validates hardcoded credentials and redirects to success/error pages
- All pages share a consistent Bootstrap navbar

## Development Workflow
- **Run locally:** `node server.js` or `docker compose up --build`
- **Access:** http://localhost:3000
- **No build step:** Direct Node.js execution
- **No tests:** Manual testing via browser forms

## Code Patterns
- **Routing:** Simple Express routes with `app.post()` for form handling
- **Static serving:** `express.static("public")` for HTML/CSS/JS assets
- **Form parsing:** `body-parser.urlencoded({ extended: true })` for POST data
- **Responses:** Redirects (`res.redirect()`) for success, inline HTML for errors
- **Styling:** Bootstrap CDN links in `<head>`, consistent navbar across pages

## Conventions
- **File structure:** Flat `public/` directory for all frontend assets
- **Error handling:** Basic status codes with simple HTML responses
- **Navigation:** Hardcoded navbar in each HTML file (no templating)
- **Credentials:** Demo-only hardcoded auth in `server.js` (not for production)

## Key Files
- `server.js`: Core application logic and routes
- `public/index.html`: Landing page with navigation
- `public/login.html`: Login form (POST to `/login`)
- `public/register.html`: Registration form (POST to `/register`)

When modifying, maintain the redirect-based flow and static file architecture.