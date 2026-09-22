# 🎞️ DreamFrame

> **Turn imagination into visual experiences.**

DreamFrame is an experimental **AI image-generation product experience** built with Next.js. The project focuses on creating a cinematic, highly visual interface around the idea of generating images from imagination.

Rather than treating the project as a simple form-and-result application, DreamFrame explores how **motion, typography, visual storytelling, and product UI** can make an AI experience feel immersive.

## ✨ Highlights

- 🎬 **Cinematic hero experience** with a scroll-driven visual sequence
- 🖼️ **AI image-generation product concept** designed around prompt-to-image workflows
- 🧭 **Scroll-based storytelling** using a canvas-driven sequence
- ♾️ **Infinite logo marquee** for a dynamic product section
- 🧩 **Bento-style feature layout** for product capabilities and visual storytelling
- 🎨 Dark, cinematic visual direction with custom CSS
- 📱 Responsive web experience designed for modern browsers
- ⚡ Next.js App Router architecture
- 🧱 Component-based React structure for reusable sections

## 🧠 Project Concept

The central idea behind DreamFrame is simple:

**A user's imagination should be the starting point of the interface.**

The product direction combines an AI image-generation concept with a cinematic landing experience:

```text
User imagination
       ↓
     Prompt
       ↓
DreamFrame experience
       ↓
AI-generated visual
       ↓
Creative exploration
```

The current repository focuses heavily on the **frontend/product experience**. AI generation can be connected as the backend layer as the project evolves.

## 🏗️ Architecture

DreamFrame uses the Next.js App Router with reusable React components.

```text
dream-frame/
├── app/
│   ├── components/
│   │   ├── BentoGrid.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LogoMarquee.tsx
│   │   ├── ScrollCanvas.tsx
│   │   ├── ScrollSequence.tsx
│   │   └── sections.css
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json
└── package.json
```

### Main components

| Component | Purpose |
|---|---|
| `HeroSection` | Main cinematic product introduction |
| `ScrollSequence` | Coordinates the scroll-driven hero experience |
| `ScrollCanvas` | Handles canvas-based visual sequencing |
| `LogoMarquee` | Creates the continuous logo/brand carousel |
| `BentoGrid` | Presents product/features in a bento-style layout |
| `sections.css` | Styling for the major product sections |

## 🛠️ Tech Stack

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **CSS**
- **Next Font / Geist**
- **ESLint**

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/saatwiksharma07/dream-frame.git
cd dream-frame
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

## 📦 Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## 🎨 Design Direction

DreamFrame is intentionally designed around a **dark cinematic aesthetic**.

The interface emphasizes:

- Large visual compositions
- Motion and scroll interaction
- Strong typography
- High-contrast surfaces
- Spatial layouts
- Product storytelling
- Minimal UI around the visual content

The goal is to make the interface itself feel like part of the creative tool.

## 🔮 Roadmap

### Current

- [x] Next.js foundation
- [x] Cinematic hero section
- [x] Scroll-based visual sequence
- [x] Logo marquee
- [x] Bento-style sections
- [x] Responsive styling foundation

### Planned

- [ ] Connect a real image-generation model/API
- [ ] Prompt input and generation flow
- [ ] Generation loading/progress states
- [ ] Image history
- [ ] Download/share generated images
- [ ] User accounts and saved generations
- [ ] Model/style controls
- [ ] Production deployment

## 📌 Project Status

**Status:** 🧪 Experimental / In development

DreamFrame is currently focused on the **frontend experience and product direction**. The AI generation layer is part of the planned evolution of the project.

## 👤 Author

**Saatwik Sharma**

- GitHub: https://github.com/saatwiksharma07
- LinkedIn: https://www.linkedin.com/in/saatwik-sharma-3039723a/

## 📄 License

No explicit open-source license is currently defined for this repository.

---

### 🚀 Dream it. Frame it. Create it.
