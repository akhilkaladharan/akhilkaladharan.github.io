PORTFOLIO TEMPLATE — QUICK START
=================================

FILES
  index.html   — page content (text, sections, links)
  style.css    — all styling / colors / fonts
  script.js    — nav, mobile menu, scroll animations
  assets/      — put your profile picture and resume here

1) ADD YOUR PROFILE PICTURE
   Drop your photo into the assets/ folder and name it "profile.jpg"
   (or edit the src in index.html, search for id="avatarImg").
   If no image is found, your initials show automatically instead —
   so the site never looks broken while you're editing.

2) EDIT YOUR INFO
   Open index.html and replace:
     - "Alex Rivera" -> your name (appears in <title> and footer)
     - the hero heading/subtitle text
     - the About section paragraphs and stats
     - email address and social links in the Contact section

3) EDIT YOUR SKILLS
   Each skill uses a free logo from https://simpleicons.org
   To add one: <div class="skill-chip"><img src="https://cdn.simpleicons.org/SLUG" alt=""><span>Name</span></div>
   Replace SLUG with the tool's slug on simpleicons.org (e.g. "vuedotjs", "graphql").

4) EDIT YOUR PROJECTS
   Duplicate a <article class="project-card">...</article> block inside
   #projects to add more. Update the title, description, tags, and links.

5) ADD YOUR RESUME
   Put a PDF at assets/resume.pdf and update the "Download résumé" link
   in index.html to point to it.

6) COLORS
   All colors live at the top of style.css under :root. Change --accent
   and --accent-2 to restyle the whole site instantly.

7) PREVIEW
   Just double-click index.html to open it in a browser — no build step,
   no dependencies. To deploy, upload the whole folder to Netlify, Vercel,
   GitHub Pages, or any static host.
