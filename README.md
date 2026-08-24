# Nick Goodchild ADI (demo template)

A single-page site template for a Nottingham-based driving instructor, adapted
from a React + Vite + MUI boilerplate originally built for an estate agent.
Business details, pricing and contact info are filled in — see "Still to do"
below for what's left before this goes live.

## Running it

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Still to do

- **Contact form backend** — `Contact.jsx` only confirms client-side right
  now; nothing is actually sent anywhere. Wire it up to something like
  EmailJS, Formspree, or a small API route before this goes live. This is
  the one real remaining task — everything else below is quick.
- **Favicon** — still the generic "L" plate SVG (`favicon.svg`), not branded
  to Nick specifically.
- **Stats** (lessons taught, pass rate, years' experience) — `About.jsx`.
- **Facebook review rating** — `Credentials.jsx` links to Nick's Facebook
  reviews and states the real count (5), but doesn't claim a specific star
  average since that wasn't confirmed — check the actual average and update
  the copy/icons if it's not a flat 5.0.
- **Credential badges** (ADI number, insurer, DBS) — `Credentials.jsx`, worth
  confirming exact wording with the instructor.
- **Test centres** — `About.jsx` mentions Colwick and Chilwell test centres —
  check these match where Nick actually takes learners for tests.
- **Instagram** — no account link supplied yet, so the icon was removed from
  the footer rather than shipped dead. Add it back (`Footer.jsx`) if Nick
  has one.

Nav/footer link judgment calls worth a second look: "Test Prep" in the nav
was swapped for "Reviews" (points at `#reviews`) since there wasn't a
distinct test-prep section to link to; a few footer links ("Pass Plus",
"Refresher Lessons", "Mock Test Booking", "Areas Covered") point at the
closest relevant section rather than a dedicated one of their own, since
those don't exist as separate content yet.

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
