# Paws & Claws Animal Rescue — Part 3

## Student details
- Student: Muhammad Suleman Pharos
- Student number: ST10515860
- Module: WEDE5020
- Institution: IIE

## Overview
This Part 3 builds on the supplied Part 2 website. Five original pages and the original CSS styling are preserved and extended with JavaScript interactions, search/filter/sort, an image lightbox, form validation, and SEO metadata.

## Features
- **Home:** responsive hero and programme links.
- **About:** accessible FAQ accordion using native `details` elements.
- **Services:** dynamically rendered *sample* adoption profiles with text search, species filter and sorting; original illustration gallery with accessible modal lightbox.
- **Enquiry:** volunteering, fostering and sponsorship enquiry; live annual-hours estimate, HTML5 and JavaScript validation.
- **Contact:** general contact form with message type and HTML5/JavaScript validation.
- **SEO:** unique titles and descriptions, semantic headings, descriptive image alt text, internal navigation, mobile layout, `robots.txt`, and `sitemap.xml` template.
- **Performance/security:** lightweight local SVGs, lazy-loaded gallery images, no third-party JS dependencies, DOM built using `textContent` rather than unsafe `innerHTML` for dynamic data.

## IMPORTANT: before publishing / submitting
1. **Form delivery:** Deploy to **Netlify** with Forms enabled. The HTML forms use `data-netlify="true"`, a named form, and URL-encoded AJAX submission when hosted on a `*.netlify.app` domain. Check the Forms section of Netlify after deployment and test a real submission. Other hosts use a **mailto fallback**, which opens the visitor's email client and **does not send automatically**. Add a verified organisation email address if using the mailto fallback. Never claim a mailto draft has been sent.
2. **Sitemap:** Replace `YOUR-VERIFIED-DOMAIN` in `sitemap.xml` with your real published domain; add `Sitemap: https://YOUR-VERIFIED-DOMAIN/sitemap.xml` to `robots.txt`. Do not submit the placeholder sitemap to search engines.
3. **Organisation details:** The Part 2 addresses, phone numbers, founding year and rescue statistics have not been independently verified; confirm them before using the site as a real organisation's public website.
4. **Sample adoption profiles:** Names, ages and descriptions are demonstration data, **not actual adoptable animals**. Replace with verified real records if available.
5. **Feedback:** Lecturer feedback (75.5/100) has now been reviewed and the changes below implemented. Screenshots and live GitHub/Netlify verification remain separate tasks.
6. **Screenshots and links:** Add desktop, tablet and mobile screenshots, your live URL and GitHub URL once you have deployed the site.

## Local testing
Open `index.html` in a browser or serve the folder with `python -m http.server 8000`. Check all navigation, search and sorting, FAQ, lightbox close/Escape, validation errors, keyboard navigation, and responsive layouts at 390px, 900px and 1440px. Local forms use mailto, not Netlify delivery.

## Deploy on Netlify
Upload the extracted project folder through Netlify's manual deploy workflow or connect the GitHub repository. Publish directory is the project root. Ensure Netlify detects the HTML forms and test submissions. Copy the real site URL into the sitemap and README and redeploy. On GitHub, commit all files and submit the repository link through your learning management system.

## Changelog
### [3.1.0] — 2026-11-09 — Lecturer feedback revision
- Added mobile navigation toggle, skip links, stronger keyboard focus indicators and refined mobile spacing.
- Added illustrative animal photographs across the site and gallery, with offline fallback images.
- Added a visual sitemap, project proposal corrections and a website-specific budget.
- Updated feedback tracking, references and testing documentation.

### [3.0.0] — 2026-11-09 — Part 3 enhancement
- Preserved five existing Part 2 pages and responsive CSS.
- Added `js/main.js` for search, filter, sorting, gallery lightbox, form validation and asynchronous Netlify form submission.
- Added dynamic example adoption profiles and three original local SVG illustrations.
- Added FAQ accordion, programme links and estimated volunteer hours.
- Improved semantic heading hierarchy and retained existing page-specific meta descriptions.
- Added accessible validation errors, live status messages, and field-level feedback.
- Added `robots.txt`, sitemap template, and a post-submission thank-you page.
- Documented hosting requirements, test plan, limitations and remaining actions.

### [2.0.0] — 2026-10-05 — Part 2 changes (from original submission)
- Added external stylesheet, CSS reset, responsive typography, Flexbox/Grid layouts, responsive images, hover/focus states and mobile/tablet breakpoints.

### Part 2 lecturer feedback and corresponding fixes (9 November 2026)
| Feedback from marking rubric | Change made | Evidence |
|---|---|---|
| Missing visual sitemap, budget and proposal corrections | Added visual sitemap and website-specific budget/proposal | `site-map.svg`, `docs/PROJECT-PROPOSAL.md` |
| Three identical SVG image variants; no actual animal photographs; other pages lack imagery | Added externally hosted animal photographs to Home, About, Services, Enquiry and Contact; retained local SVG fallbacks | HTML pages and `js/main.js` |
| Generic sections and limited visual variety | Added photo-and-text sections, expanded programme navigation and a photo gallery | HTML/CSS |
| Keyboard outlines insufficiently visible | Strong consistent `:focus-visible` indicators and skip link | `css/style.css`, HTML |
| Mobile navigation untidy | Added accessible collapsible menu and larger touch targets | HTML, CSS and JS |
| Supporting typography/spacing need refinement | Improved mobile heading, spacing and line-height | CSS media queries |
| Screenshots missing | Screenshot capture attempted but not completed in this environment; student must capture real desktop/tablet/mobile evidence | screenshots |
| Commits not descriptive | Provided suggested staged commit messages below; actual history must be created in your repository | GitHub checklist |
| README sitemap, references and changelog incomplete | Added file inventory, visual sitemap, dated changelog and image-source references | README and supporting documents |

### Suggested descriptive Git commits (perform these yourself)
1. `fix: improve mobile navigation and keyboard focus styles`
2. `feat: add animal imagery and interactive adoption gallery`
3. `feat: validate enquiry and contact forms and improve SEO`
4. `docs: add lecturer feedback log, sitemap, budget and screenshots`

### Testing evidence
Screenshot files have not been captured successfully in this environment. Before submission, capture actual desktop (1440px), tablet (900px), and mobile (390px) views and add them under `docs/screenshots/`. Validate keyboard controls, responsive layout, image loading and Netlify form delivery yourself.

### Known limits
Animal photos are loaded from Unsplash and require an internet connection; offline SVG illustrations are supplied as fallbacks. Photo source attribution is provided below, but source/photo identifiers should be confirmed before public use. No actual shelter animal records, verified shelter contacts, real donations, live URL, repository URL, external backlinks or social posts are claimed. Hosting, Git commits, Netlify submissions and Search Console verification require the student's own accounts.

## References
- Mozilla Developer Network (MDN), n.d. *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 9 November 2026).
- Mozilla Developer Network (MDN), n.d. *HTML dialog element*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog (Accessed: 9 November 2026).
- Google Search Central, n.d. *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 9 November 2026).
- Netlify, n.d. *Forms setup*. Available at: https://docs.netlify.com/manage/forms/setup/ (Accessed: 9 November 2026).
- Original Part 2 submission, 2026. *Paws & Claws Animal Rescue website and README*. Student-provided project files.


## Project structure
- `index.html`, `about.html`, `services.html`, `enquiry.html`, `contact.html`: main site pages
- `thank-you.html`: supporting confirmation page
- `css/style.css`: shared responsive stylesheet
- `js/main.js`: filtering, gallery, form validation, navigation
- `images/`: local SVG fallbacks
- `site-map.svg`: visual page structure
- `sitemap.xml`, `robots.txt`: search engine files (domain placeholder must be replaced)
- `docs/PROJECT-PROPOSAL.md`: corrected proposal and estimated budget
- `docs/screenshots/`: destination for required desktop, tablet and mobile screenshots (not yet captured)

## Image source references (illustrative photographs, not shelter animals)
- Unsplash (n.d.) *Golden retriever photograph*. Available at: https://images.unsplash.com/photo-1552053831-71594a27632d (Accessed: 9 November 2026).
- Unsplash (n.d.) *Cat photograph*. Available at: https://images.unsplash.com/photo-1573865526739-10659fec78a5 (Accessed: 9 November 2026).
- Unsplash (n.d.) *Dogs outdoors photograph*. Available at: https://images.unsplash.com/photo-1548199973-03cce0bbc87b (Accessed: 9 November 2026).
- Unsplash (n.d.) *Unsplash License*. Available at: https://unsplash.com/license (Accessed: 9 November 2026).
- Local SVG illustrations in `images/` are from the student's Part 2 files or generated as Part 3 demonstration artwork; they are not external photographs.

## External content and missing report citation
The Part 2 README mentions a Paws & Claws annual report without sufficient bibliographic information. No verifiable report document was supplied, so no fictitious author, publication or URL has been added. Replace the reference only when the actual report is available. Project-specific facts (including the rescue count and founding date) are carried over from Part 2 and remain unverified.
