# 🌲 Morni Hills Tourism — Official Web Experience

> **Haryana's Hidden Hill Escape** • The only hill station in Haryana, situated in the Shivalik range (Elevation 1,220 m / 4,000 ft).

A modern, cinematic, interactive tourism single-page application built with **React**, **Tailwind CSS**, **Lucide Icons**, and **Three.js 3D atmospheric effects**.

---

## ✨ Features & Architecture

- **Cinematic 3D Hero Section**:
  - Full-screen high-definition landscape with layered mouse parallax interaction.
  - Interactive **Three.js** atmospheric mist & floating golden/emerald firefly particles.
  - Live weather badge (22°C Clear Breeze) & elevation indicator (1,220 m).
  - Smooth "Scroll to Explore" bouncing indicator.

- **Glassmorphism Navigation**:
  - Dynamic transparent-to-frosted-glass navbar on scroll.
  - Dark / Light mode toggle switch with persistent `localStorage` preference.
  - Active scroll spy and smooth scroll to all sections.
  - Responsive mobile drawer navigation with animated transitions.

- **Curated Tourism Modules**:
  - **About Morni Hills**: Split layout with Shivalik bio-diversity highlights and interactive elevation & area counters.
  - **Explore Morni**: Interactive cards for *Morni Fort*, *Tikkar Taal*, *Thakurdwara Temple*, *Karoh Peak & Viewpoints*, *Mandhana Pine Trails*, and *Adventure Park* with category filters and rich modal previews.
  - **Tikkar Taal Spotlight**: Full-width cinematic feature section dedicated to the sacred twin lakes (Bada Taal & Chota Taal).
  - **Experience Morni**: 8 outdoor activities (Nature Walks, Trekking, Boating, Stargazing, Bird Watching, Village Immersion, Photography, Sunsets) with Lucide React icons and difficulty/duration tags.
  - **Taste the Hills**: Local Haryanvi & North Indian culinary showcases, clay-oven specialties, lakefront bistros, and sample menus.
  - **Stay Among the Hills**: Luxury mountain-view eco-resorts, lakeside geodesic glamping domes, colonial stone cottages, and canopy treehouses with amenities and booking inquiry links.
  - **Beyond Morni**: Nearby tourist destinations (*Pinjore Gardens*, *Sukhna Lake*, *Nada Sahib Gurudwara*, *Timber Trail Cable Car*, *Kasauli*, *Cactus Garden*) with accurate road distances and travel times.
  - **Visual Chronicles (Gallery)**: Masonry photo gallery with category filters and full-screen Lightbox viewer with keyboard arrow navigation.
  - **Cinematic Film Showcase**: Modal video player for 4K nature b-roll.
  - **Parallax Quote Section**: Full-screen parallax banner with atmospheric coordinates.
  - **Plan Your Morni Escape**: Interactive trip planner inquiry form + Instant Trip Budget Estimator widget + FAQ accordions.
  - **Footer & Floating Scroll-to-Top**: Dark luxury footer with emergency helplines and SVG circular progress scroll-to-top button.

---

## 🎨 Color Palette

| Token | Hex | Role |
|---|---|---|
| **Primary** | `#2F6B5F` | Forest / Pine Green (Brand CTA & Accents) |
| **Secondary** | `#8FB9A8` | Soft Sage (Subtle highlights & Badges) |
| **Dark** | `#10201C` | Deep Pine Night (Backgrounds & Dark Mode) |
| **Light** | `#F5F7F2` | Alabaster Soft White (Light Mode Background) |
| **Accent** | `#D8A85B` | Warm Gold / Amber (Badges, Buttons & Stars) |

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 📸 Image Management (`src/assets/images/`)

All images are centralized in `src/assets/images/index.js` and point to curated high-resolution photography. If you want to use local offline photos, place your JPG/PNG files in `src/assets/images/`:

- `morni-hero.jpg` — Main hero landscape
- `tikkar-taal.jpg` — Tikkar Taal twin lakes
- `morni-fort.jpg` — 17th-century Morni Fort
- `morni-forest.jpg` — Mandhana pine trails
- `morni-road.jpg` — Scenic Shivalik hill roads
- `morni-sunset.jpg` — Morni ridge golden hour sunset
- `resort-1.jpg` — Shivalik Pines Eco-Resort
- `restaurant-1.jpg` — Traditional Haryanvi dining & Chai
- `pinjore-gardens.jpg` — Yadavindra Mughal Gardens
- `sukhna-lake.jpg` — Sukhna Lake Chandigarh

---

## 📁 Project Structure

```text
morni-hills-tourism/
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── index.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Hero3DCanvas.jsx
│   │   ├── About.jsx
│   │   ├── Attractions.jsx
│   │   ├── AttractionCard.jsx
│   │   ├── TikkarTaalFeature.jsx
│   │   ├── Experience.jsx
│   │   ├── Restaurants.jsx
│   │   ├── Resorts.jsx
│   │   ├── NearbyPlaces.jsx
│   │   ├── Gallery.jsx
│   │   ├── VideoSection.jsx
│   │   ├── ParallaxSection.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── Modal.jsx
│   │   └── Lightbox.jsx
│   ├── data/
│   │   └── morniData.js
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```
