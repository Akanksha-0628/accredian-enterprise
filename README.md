# Accredian Enterprise — Clone Assignment

Live demo:(https://accredian-enterprise-jade.vercel.app)

---

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Local Development

```bash
# 1. Clone or download this repository
git clone https://github.com/Akanksha-0628/accredian-enterprise.git
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── api/leads/route.js   ← API endpoint to store lead form submissions
│   ├── globals.css          ← Global styles, animations, design tokens
│   ├── layout.jsx           ← Root layout with metadata
│   └── page.jsx             ← Main page composing all sections
└── components/
    ├── Navbar.jsx           ← Sticky responsive navbar with mobile menu
    ├── HeroSection.jsx      ← Dark hero with floating cards
    ├── StatsBar.jsx         ← Animated stats strip
    ├── PartnersSection.jsx  ← Auto-scrolling marquee of partner logos
    ├── FeaturesSection.jsx  ← Feature cards grid
    ├── ProgramsSection.jsx  ← Program cards with tags
    ├── TestimonialsSection.jsx ← Testimonials from enterprise leaders
    ├── LeadForm.jsx         ← Bonus: lead capture form with API call
    └── Footer.jsx           ← Full multi-column footer
```

---

## Approach Taken

1. **Component-based architecture** — each section is its own reusable component
2. **Unique design system** — custom CSS variables, Bricolage Grotesque + DM Sans fonts, dark navy hero
3. **Fully responsive** — all sections adapt from mobile (320px) to large desktop
4. **API integration** — `/api/leads` Next.js API route captures form submissions in-memory
5. **Bonus lead form** — full form with validation, loading state, and toast notifications
6. **Smooth UX** — CSS animations, marquee, hover states, shimmer CTA button

---

## AI Usage Explanation

- **Claude AI** helped generate the initial component boilerplate and CSS animations
- **Manually modified**: All design decisions (color palette, typography, layout), the marquee animation, responsive breakpoints, toast notification logic, and form validation
- **Added by me**: The in-memory API storage logic, toast system, hero floating card design, glass morphism styles, noise texture overlay

---

## Improvements With More Time

- Replace in-memory lead store with a real DB (PostgreSQL / MongoDB via Prisma)
- Add email notifications via Resend or Nodemailer on form submission
- Add framer-motion for scroll-triggered section reveal animations
- Add a `/dashboard` page to view captured leads
- Add unit tests with Jest + React Testing Library
- Implement internationalization (Hindi/English toggle)
- Add more sections: FAQ, Pricing table, Case studies

---

## Tech Stack

| Layer     | Tech                        |
|-----------|-----------------------------|
| Framework | Next.js 14 (App Router)     |
| Styling   | Tailwind CSS + custom CSS   |
| Fonts     | Bricolage Grotesque + DM Sans |
| API       | Next.js API Routes          |
| Deploy    | Vercel                      |
