# Dentora — Premium Dental Clinic Website

An editorial, luxury healthcare website engineered for modern aesthetic dental practices, implantology centers, and orthodontic clinics. Built with React.js, Vite, Tailwind CSS, Framer Motion, GSAP ScrollTrigger, and React Router DOM.

![Dentora Dental Care](https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80)

---

## Features & Highlights

- **Bespoke Editorial Healthcare Aesthetics**: Asymmetrical layouts, rounded luxury geometry, frosted glassmorphism, and high-contrast typography.
- **Brand Palette**: Primary Cyan (`#24AEC5`), Soft Cyan (`#DDF5F7`), Dark Charcoal (`#111111`), Clean White (`#FFFFFF`), and Light Neutral Grey (`#F5F5F5`).
- **Kinetic Animations**: Smooth GSAP ScrollTrigger image parallax scrubbing and Framer Motion spring physics.
- **Accessibility & Motion Safety**: Global `@media (prefers-reduced-motion: reduce)` override to support users with vestibular sensitivity.
- **Single Page Architecture with Nested Routing**: Seamless cross-route navigation between main landing sections (`#about`, `#services`, `#doctors`, `#appointment`) and code-split article detail views (`/blog/:slug`).
- **Dynamic Technical SEO Engine**: Lightweight `<SEO />` manager updating document titles, meta descriptions, canonical URLs, Open Graph, Twitter cards, and Schema.org JSON-LD (`Dentist`, `LocalBusiness`, `WebSite`, `Article`, `BreadcrumbList`).
- **Core Web Vitals Optimized**: Zero layout shifts (CLS), hero image preloading (`fetchpriority="high"` for LCP), and sub-50 kB CSS footprint.
- **Production-Ready Hosting Support**: Preconfigured rewrite rules and security headers for both **Vercel** (`vercel.json`) and **Netlify** (`public/_redirects`, `netlify.toml`).

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Declarative Component-Driven UI |
| **Vite 6** | Modern Build Tooling & ESM Dev Server |
| **Tailwind CSS 3** | Utility-First Styling System & Design Tokens |
| **Framer Motion 12** | Interactive Motion, Spring Physics, and Modals |
| **GSAP 3 + ScrollTrigger** | High-Performance Parallax & Scroll Animations |
| **React Router DOM 7** | Client-Side SPA Navigation & Nested Routes |
| **Lucide React** | Featherweight Medical & Interface Icons |

---

## Project Structure

```
Dentora/
├── public/
│   ├── _redirects             # Netlify SPA redirect rules (/* -> /index.html 200)
│   ├── robots.txt             # Search crawler directives & sitemap location
│   └── sitemap.xml            # XML sitemap with canonical pages
├── src/
│   ├── assets/
│   │   └── icons/             # Custom SVG dental icons (Tooth, Sparkle, Implant, Braces)
│   ├── components/
│   │   ├── ui/                # Atomic UI building blocks (Button, Badge, Container)
│   │   ├── common/            # Shared features (Lightweight SEO manager)
│   │   ├── Navbar.jsx         # Sticky glassmorphism header with active scroll-spy
│   │   ├── Hero.jsx           # Full-viewport cinematic hero with parallax background
│   │   ├── About.jsx          # Asymmetrical clinical overview with count-up statistics
│   │   ├── Services.jsx       # 6-part editorial bento grid with concierge CTA
│   │   ├── WhyChooseUs.jsx    # Dual overlapping photography & clinical benefit cards
│   │   ├── Doctors.jsx        # Specialist profiles with accessible dialog modal
│   │   ├── DoctorCard.jsx     # Individual doctor portrait card
│   │   ├── Testimonials.jsx   # Interactive patient stories carousel with drag gestures
│   │   ├── TestimonialCard.jsx# Individual patient review card
│   │   ├── Blog.jsx           # Dental health insights preview grid
│   │   ├── BlogCard.jsx       # Individual article card
│   │   ├── BlogDetails.jsx    # Lazy-loaded full article reader with breadcrumbs
│   │   ├── Appointment.jsx    # Booking & contact container with Google Maps integration
│   │   ├── AppointmentForm.jsx# Interactive booking form with real-time validation
│   │   ├── Footer.jsx         # 4-column responsive footer with back-to-top button
│   │   └── Newsletter.jsx     # Interactive newsletter subscription strip
│   ├── config/
│   │   └── seoConfig.js       # Central SEO metadata & Schema.org JSON-LD builders
│   ├── constants/
│   │   └── clinic.js          # Central clinic profile, hours, phone, and geo coordinates
│   ├── data/
│   │   └── blogData.js        # Informational sample dental articles
│   ├── hooks/
│   │   ├── useGsapScroll.js   # Lifecycle-safe GSAP ScrollTrigger hook
│   │   └── useSEO.js          # Imperative route metadata hook
│   ├── styles/
│   │   └── globals.css        # Base Tailwind directives & reduced-motion rules
│   ├── utils/
│   │   ├── animations.js      # Framer Motion variants & luxury cubic bezier easings
│   │   ├── cn.js              # clsx + tailwind-merge utility
│   │   └── gsapUtils.js       # GSAP plugin registration
│   ├── App.jsx                # Root route router with code-splitting
│   └── main.jsx               # Application entry point
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules including private env files
├── netlify.toml               # Netlify build settings, redirects, & security headers
├── package.json               # Project manifest & dependencies
├── tailwind.config.js         # Tailwind theme extension (colors, fonts, shadows)
├── vercel.json                # Vercel SPA routing & security headers
└── vite.config.js             # Vite config with manual chunking & path aliases
```

---

## Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/KISHOR403/Dentora.git
cd Dentora

# Install with pnpm (recommended)
pnpm install

# Or install with npm
npm install
```

### 2. Environment Variables Setup

Copy the example environment configuration:

```bash
cp .env.example .env.local
```

Edit `.env.local` to configure your clinic's parameters:

```env
# Verified production domain
VITE_SITE_URL=https://www.dentoraclinic.com

# Clinic branding overrides
VITE_CLINIC_NAME=Dentora
VITE_CLINIC_PHONE=+1 (800) 456-7890
VITE_CLINIC_EMAIL=concierge@dentoraclinic.com
```

> **Security Reminder**: Variables prefixed with `VITE_` are bundled into the public client JavaScript. Never place private database passwords, EHR API secret keys, or payment gateway secrets in this file.

### 3. Local Development

Start the local Vite development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Production Build & Preview

### Build Production Assets

Compile and optimize all assets into the `dist/` directory:

```bash
pnpm build
# or
npm run build
```

The build process enforces:
- Rollup manual chunk code-splitting (`vendor`, `animations`, `icons`, `BlogDetails`).
- Asset minification and Gzip compression.
- TypeScript/JSX validation.

### Preview Production Build Locally

Test the exact production bundle before deploying:

```bash
pnpm preview
# or
npm run preview
```

---

## Deployment Guide

### Option A: Deploy to Vercel (Recommended)

Vercel provides native edge deployment for Vite applications.

1. Push your repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/new), select **Add New Project** and import the `Dentora` repository.
3. Configure the build settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `vite build` or `pnpm build`
   - **Output Directory**: `dist`
4. Add your production environment variables in **Project Settings > Environment Variables** (matching `.env.example`).
5. Click **Deploy**.
6. The included `vercel.json` automatically configures SPA URL rewriting and HTTP security headers.

### Option B: Deploy to Netlify

1. Push your repository to GitHub.
2. In the [Netlify Dashboard](https://app.netlify.com/), click **Add new site > Import an existing project**.
3. Choose your repository.
4. Verify the build configuration:
   - **Base directory**: (leave blank)
   - **Build command**: `pnpm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.
6. The included `public/_redirects` and `netlify.toml` ensure deep URLs like `/blog/everyday-habits-healthy-smile` resolve properly on browser refresh without 404 errors.

---

## Custom Domain & DNS Setup

Once deployed on Vercel or Netlify, attach your registered custom domain (e.g. `dentoraclinic.com`):

### 1. Add Domain in Platform Dashboard
- **Vercel**: Go to **Project Settings > Domains** > Enter `dentoraclinic.com` and `www.dentoraclinic.com`.
- **Netlify**: Go to **Domain Management > Custom Domains** > Add `dentoraclinic.com`.

### 2. Configure DNS Records with Your Registrar
Configure your DNS records (at Namecheap, GoDaddy, Cloudflare, etc.):

| Type | Name / Host | Value / Target | Notes |
| :--- | :--- | :--- | :--- |
| **A** | `@` (root) | `76.76.21.21` *(Vercel)* or `75.2.60.5` *(Netlify)* | Points apex domain to edge network |
| **CNAME** | `www` | `cname.vercel-dns.com` *(Vercel)* or `[site-name].netlify.app` *(Netlify)* | Handles `www` subdomain |

### 3. Automatic SSL/TLS
Both Vercel and Netlify automatically provision free Let's Encrypt SSL certificates within minutes after DNS propagation.

### 4. Update Production URLs
Before public launch, update the production domain placeholder (`https://dentora-clinic.example.com`) in:
- `public/robots.txt`
- `public/sitemap.xml`
- `index.html` (canonical link, OG tags, static fallback JSON-LD)
- `src/constants/clinic.js` (or via `VITE_SITE_URL` in platform environment settings)

---

## Form Handling & Clinical Disclaimer

- **Appointment Booking & Newsletter Forms**: Both forms currently operate in **Frontend Demonstration Mode**. They execute client-side schema validation, provide realistic simulated latency, and display user-friendly confirmation cards. They **do not** transmit patient data over the internet or store PHI (Protected Health Information).
- **Backend Integration**: To connect live bookings to your clinic's HIPAA-compliant EHR/PMS (e.g., Dentrix, Curve Dental, NexHealth), replace the `setTimeout` handlers in `src/components/AppointmentForm.jsx` and `src/components/Newsletter.jsx` with your secured backend API endpoints.
- **Medical Disclaimer**: The dental insights and blog articles provided are sample educational demonstrations and do not replace professional medical or dental diagnosis, advice, or treatment.

---

## License

This project is licensed under the MIT License.
