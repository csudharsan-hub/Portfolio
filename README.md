# ⚡ Sanctum — Mystic Developer Portfolio

> **Sorcerer of Code**: A Doctor Strange & Sanctum Sanctorum mysticism-themed single-page developer portfolio website built for **Sudharsan C** (Java Spring Boot, Full-Stack & AI-Integrated Applications Architect).

---

## 🔮 Mystic Features & Signature Animations

- **Time-Stone Emerald Loader**: Initial animated runic seal expansion with pulsing green/cyan energy before transitioning to the sanctum.
- **Concentric Sling-Ring Portal**: Continuously rotating SVG mandala with fiery sparks, glowing concentric rings, and centered master title.
- **Interactive Cursor Spark Trail**: Dynamic particle canvas that emits glowing orange & gold embers following user cursor movements and bursts into magical flares on clicks.
- **Cloak of Levitation Parallax**: Smooth floating card elevation and glowing borders on hover.
- **Grimoire of Spells (Tech Stack)**: Filterable arcane disciplines (Languages, Backend & Frameworks, Databases, Tools) with glowing proficiency meters.
- **Dimensions Traversed (Projects)**: Interactive project cards with deep-dive **Inspect Dimension** modal overlays and direct GitHub summon links.
- **Sanctum Chronicles (Education)**: Chronological timeline tracking academic excellence and milestones.
- **Chamber of Relics (Certifications)**: Glowing verified credential cards with status runes.
- **Arcane Pillars (Strengths)**: Animated sacred geometry sigils for core engineering strengths.
- **Astral Transmission (Contact)**: Interactive contact form that channels messages through a dimensional portal with sound effects & celebratory spark particles.
- **Procedural Mystic Audio**: Lightweight Web Audio API synthesizer generating mystical hums, spell chimes, and swooshes without any external audio asset dependency.
- **Center-Aligned & Fully Responsive**: Engineered for perfect symmetry across mobile (375px), tablet (768px), and ultra-wide displays (1440px+).

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion & Physics**: [Framer Motion](https://www.framer.com/motion/) + HTML5 Canvas Particle Engine + Canvas Confetti
- **Typography**: Google Fonts (*Cinzel*, *Marcellus*, *Space Grotesk*, *Inter*)
- **Icons**: Custom SVG Crests + [Lucide Icons](https://lucide.dev/)
- **Audio Engine**: Synthesized Web Audio API (`MysticSoundEngine`)

---

## 🚀 Running Locally

### 1. Prerequisites
- **Node.js** (v18.0.0 or later)
- **npm** (v9.0.0 or later)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` (or `http://localhost:5174/` if 5173 is occupied).

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Bundle
```bash
npm run preview
```

---

## 📁 Project Structure

```
susa/
├── index.html                    # SEO meta tags, Google Fonts & mystic favicon
├── package.json                  # Dependencies & scripts
├── tailwind.config.js            # Tailwind theme tokens & custom animations
├── postcss.config.js             # PostCSS with @tailwindcss/postcss
├── vite.config.js                # Vite build configuration
├── src/
│   ├── index.css                 # Custom scrollbar, glow effects, glassmorphism & Tailwind imports
│   ├── main.jsx                  # React application entry
│   ├── App.jsx                   # Master component layout
│   ├── data/
│   │   └── portfolioData.js      # Structured resume data, projects, certs & links
│   ├── utils/
│   │   └── soundManager.js       # Procedural Web Audio API sound synthesizer
│   └── components/
│       ├── Icons.jsx             # Custom GitHub, LinkedIn & LeetCode SVGs
│       ├── Navbar.jsx            # Floating mystic glass navbar with audio toggle
│       ├── Hero.jsx              # Centered Sling-Ring rotating portal & CTA
│       ├── About.jsx             # Kamar-Taj origin lore & LeetCode/HackerRank stats
│       ├── Skills.jsx            # Grimoire of Spells filterable tech stack
│       ├── Projects.jsx          # Dimensions Traversed project showcase
│       ├── ProjectModal.jsx      # Deep-dive dimension inspection modal
│       ├── Education.jsx         # Sanctum Chronicles timeline
│       ├── Certifications.jsx    # Chamber of Relics credentials
│       ├── Strengths.jsx         # Arcane Pillars strengths
│       ├── Contact.jsx           # Astral Transmission portal contact form
│       ├── Footer.jsx            # Mystic seal footer
│       ├── CanvasMagic.jsx       # Floating cosmic embers & cursor spark physics
│       └── TimeStoneLoader.jsx   # Initial pulsing emerald time-stone intro
```

---

## 🖼️ Customization & Swapping Assets

- **Profile Avatar**: In [`src/components/Hero.jsx`](src/components/Hero.jsx), look for the `<!-- Profile Avatar / Monogram -->` section inside the central portal circle to replace the default monogram with your custom photo `<img src="/path-to-photo.jpg" alt="Sudharsan C" className="w-full h-full object-cover" />`.
- **Project Screenshots**: In [`src/components/ProjectModal.jsx`](src/components/ProjectModal.jsx) and [`src/components/Projects.jsx`](src/components/Projects.jsx), you can add custom preview thumbnails or screenshots.
- **Resume File**: Place your `resume.pdf` in the `public/` directory and link to it in [`src/components/Navbar.jsx`](src/components/Navbar.jsx) or [`src/components/Hero.jsx`](src/components/Hero.jsx).
- **Personal Data**: All real text, links, stats, and projects are centralized in [`src/data/portfolioData.js`](src/data/portfolioData.js).

---

## 📜 License

Created with passion for **Sudharsan C**. Designed under an original mystic sorcerer aesthetic.
