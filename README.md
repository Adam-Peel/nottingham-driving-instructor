# Nick Goodchild ADI (demo template)

A single-page site template for a Nottingham-based driving instructor, adapted
from a React + Vite + MUI boilerplate originally built for an estate agent.
Everything here — business name, copy, prices, stats, contact details — is
placeholder content meant to show what a finished site could look like. None
of it is real.

## Running it

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## What's real vs. still a placeholder

Real details already in place, all centralised in `src/data/contact.js`
and `src/data/packages.js`:

- Business name (Nick Goodchild ADI) and instructor name, plus two real
  photos of him with his car
  (`public/profile.jpg` in `About.jsx`, `public/cover.jpg` in `Hero.jsx`).
- Base rate (£45/hour, manual only) and package prices derived from it.
- Phone (`07554 121250`), email (`nickgoodchildadi@gmail.com`), WhatsApp
  number and Facebook page link.
- Pick-up areas (West Bridgford, Colwick, Bingham, Sneinton, Netherfield,
  Carlton, Gedling) plus the wider villages also covered (Aslockton, Newton,
  Radcliffe on Trent, Lowdham, Belvoir, Cotgrave, Bottesford, East Bridgford,
  Whatton) — used in `Hero.jsx` and the FAQ.

Package-card photos still use the `ImagePlaceholder` component (a dashed box
with a label, e.g. "Photo: pupil driving lesson") since we only have the two
photos above so far — swap those for real `<img>` tags once more photos
exist.

Still placeholder/fake, worth fixing before this goes live:

- **Favicon** — still the generic "L" plate SVG (`favicon.svg`), not branded
  to Nick specifically.
- **Contact form backend** — `Contact.jsx` only confirms client-side right
  now; nothing is actually sent anywhere. Wire it up to something like
  EmailJS, Formspree, or a small API route before this goes live.
- **Stats** (lessons taught, pass rate, years' experience) — `About.jsx`.
- **Review count / rating** — `Credentials.jsx`.
- **Credential badges** (ADI number, insurer, DBS) — `Credentials.jsx`, worth
  confirming exact wording with the instructor.
- **Test centres** — `About.jsx` mentions Colwick and Chilwell test centres —
  check these match where Nick actually takes learners for tests.

## Structure

```
src/
  Components/       one file per section, in the order they render in App.jsx
  data/packages.js   lesson package content, kept out of the component
```

Sections, top to bottom: `Hero` → `Credentials` (trust badges/reviews) →
`Guide` (how it works) → `Packages` (pricing cards + taster session banner)
→ `About` (instructor bio + stats) → `FAQ` (expandable common questions) →
`Contact` (contact form) → `Footer`. A floating `WhatsAppButton` renders on
top of every page.

Layout and responsiveness (mobile drawer nav, breakpoints, etc.) all carry
over from the original MUI-based template, so the site works across phone,
tablet and desktop out of the box.
