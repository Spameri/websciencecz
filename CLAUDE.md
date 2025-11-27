# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for the Web Science conference (https://www.webscience.cz), an annual tech conference held in Brno, Czech Republic. The site is a single-page application that provides information about the conference, program, speakers, tickets, and sponsors.

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript (no build process)
- **CSS Framework**: Bootstrap 4.4.1
- **JavaScript Libraries**:
  - jQuery 3.4.1 (slim build)
  - iframe-lightbox for video/iframe modals
  - Mapy.cz API for map integration
- **Hosting**: GitHub Pages (deployed from `gh-pages` branch)
- **Deployment**: Automated via GitHub Actions on push to `master`

## File Structure

- `index.html` - Main HTML file containing the entire conference website
- `style.css` - Custom CSS styles (uses Fira Code/Fira Mono fonts)
- `main.js` - JavaScript for navbar behavior, scroll effects, and menu toggle
- `img/` - Images directory
  - `speaker/` - Speaker profile photos
  - `partners/` - Partner/sponsor logos
- `docs/` - PDF documents (Code of Conduct, terms and conditions)
- `.github/workflows/gh-pages.yml` - GitHub Actions deployment workflow

## Key Features

### Navigation & UX
- Sticky navbar that appears after scrolling past the welcome section
- Responsive mobile menu with automatic collapse on link click
- Scroll-to-top button that appears after scrolling past welcome section
- Smooth scroll behavior for anchor links

### Content Sections (in order)
1. **Welcome** - Hero section with conference date and branding
2. **Program** - Detailed schedule with speaker info and talk descriptions
3. **Tickets** - Three ticket tiers (Blind/Regular/Late) with Stripe payment integration
4. **Location** - Venue information with Mapy.cz map integration
5. **Partners** - Gold/Diamond sponsors and community partners
6. **Previous Year** - Link to YouTube recordings from 2020
7. **Footer** - Social links, contact info, legal documents

### Important Details
- Conference content is in Czech language
- Payment integration uses Stripe (buy.stripe.com links)
- Google Analytics tracking (G-Y8CGC4CB51)
- Social meta tags configured for Facebook/OG sharing
- CNAME file points to www.webscience.cz domain

## Development Workflow

### Local Development
Since this is a static site with no build process, simply open `index.html` in a browser. For testing with external APIs (Mapy.cz) and proper URL routing, use a local web server:

```bash
python3 -m http.server 8000
# or
npx serve .
```

### Deployment
The site deploys automatically to GitHub Pages when changes are pushed to the `master` branch. The GitHub Action publishes from the `./html` directory (note: this appears to be a configuration issue - the workflow should likely publish from root `.` instead of `./html`).

### Making Changes

**To update conference information:**
- Edit `index.html` directly for content changes (dates, speakers, schedule, prices)
- Speaker images go in `img/speaker/`
- Partner logos go in `img/partners/`

**To update styling:**
- Edit `style.css` for visual changes
- Bootstrap classes are available throughout the HTML
- CSS uses the Fira Code/Fira Mono monospace font family

**To update interactive behavior:**
- Edit `main.js` for navigation, scroll effects, or menu behavior
- Keep JavaScript vanilla (no transpilation step)

### Important Notes
- The deployment workflow references `./html` directory but files are in root - this may need correction
- CSS is versioned in the HTML (`style.css?v=8`) - increment version when updating styles
- Ticket prices and Stripe links need manual updates each year
- Conference date appears in multiple places (meta tags, welcome section, title) - update all instances

## Maintenance Tasks

**Annual conference updates:**
1. Update conference date in all locations (title, meta tags, welcome section, OG tags)
2. Update program section with new speakers and talks
3. Update ticket prices and Stripe payment links
4. Update partner/sponsor logos and links
5. Move previous year section to link to new YouTube playlist
6. Update speaker photos in `img/speaker/`
7. Increment CSS version parameter if styles changed

**Regular updates:**
- Monitor and update ticket status (sold-out classes)
- Add new partners to sponsor sections
- Update social media links if needed
