# Project File Structure

This document outlines the complete file structure of the academic portfolio website.

## Root Directory

```
tuanmtrinh.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── components/                  # React components
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   ├── pages/                   # Page components
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── Home.tsx
│   │   ├── PublicationsPage.tsx
│   │   ├── ResearchPage.tsx
│   │   └── UpdatesPage.tsx
│   ├── ui/                      # shadcn/ui components
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── alert.tsx
│   │   ├── aspect-ratio.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── command.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── hover-card.tsx
│   │   ├── input-otp.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── menubar.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── resizable.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toggle-group.tsx
│   │   ├── toggle.tsx
│   │   ├── tooltip.tsx
│   │   ├── use-mobile.ts
│   │   └── utils.ts
│   ├── Footer.tsx               # Footer component
│   └── Sidebar.tsx              # Navigation sidebar
├── guidelines/
│   └── Guidelines.md            # Development guidelines
├── public/                       # Static assets (place cv.pdf here)
├── src/
│   └── main.tsx                 # React entry point
├── styles/
│   └── globals.css              # Global styles and Tailwind config
├── App.tsx                      # Main app with routing
├── Attributions.md              # Project attributions
├── DEPLOYMENT.md                # Detailed deployment guide
├── FILE_STRUCTURE.md            # This file
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── README.md                    # Project documentation
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite configuration
```

## Important Notes

### Entry Point
- **index.html** → Points to `/src/main.tsx`
- **src/main.tsx** → Imports `App.tsx` and `styles/globals.css`
- **App.tsx** → Main app component with React Router setup

### Import Paths
All imports use relative paths from the root:
- Components: `import { Sidebar } from "./components/Sidebar"`
- Pages: `import { Home } from "./components/pages/Home"`
- UI Components: `import { Button } from "./components/ui/button"`
- Styles: `import "../styles/globals.css"` (from src/main.tsx)

### TypeScript Configuration
The `tsconfig.json` includes:
- `src/` directory
- `components/` directory
- `styles/` directory
- `App.tsx` file
- `vite.config.ts` file

### GitHub Actions
The workflow is located at `/.github/workflows/deploy.yml` and:
- Triggers on push to `main` branch
- Installs dependencies with `npm install`
- Builds the project with `npm run build`
- Deploys to GitHub Pages

## File Purposes

### Configuration Files
- **vite.config.ts**: Vite bundler configuration, sets base path to `/`
- **tsconfig.json**: TypeScript compiler options and paths
- **package.json**: Dependencies, scripts, and project metadata

### Style Files
- **styles/globals.css**: Tailwind CSS v4 configuration with custom variables

### Component Files
- **App.tsx**: Router setup and main layout
- **components/Sidebar.tsx**: Navigation sidebar with mobile menu
- **components/Footer.tsx**: Footer with copyright info
- **components/pages/*.tsx**: Individual page components
- **components/ui/*.tsx**: Reusable shadcn/ui components

### Documentation
- **README.md**: Quick start guide and overview
- **DEPLOYMENT.md**: Detailed deployment instructions
- **FILE_STRUCTURE.md**: This file - project structure reference
- **Attributions.md**: Credits and acknowledgments

## Build Output

When you run `npm run build`, Vite creates:
```
dist/
├── index.html
├── assets/
│   ├── *.js
│   ├── *.css
│   └── (other bundled assets)
```

This `dist/` directory is what gets deployed to GitHub Pages.
