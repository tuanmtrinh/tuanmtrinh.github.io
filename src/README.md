# Academic Portfolio - Trinh Minh Tuan

A clean, professional academic portfolio website for PhD candidates and researchers, built with React, TypeScript, and React Router.

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/tuanmtrinh/tuanmtrinh.github.io.git
   cd tuanmtrinh.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This repository includes a GitHub Actions workflow for automatic deployment.

1. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Under "Build and deployment", select **GitHub Actions** as the source

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Access your site**
   - Your site will be available at: `https://tuanmtrinh.github.io/`

### Important Notes

- Since your repository is `tuanmtrinh.github.io` (username.github.io format), the site deploys to the root domain
- The `base` in `vite.config.ts` is set to `'/'` which is correct for this setup
- The GitHub Actions workflow automatically installs dependencies and builds the site
- Deployment typically takes 2-3 minutes after pushing

## 🛠️ Customization

### Update Personal Information

Edit the following page components in `/components/pages/`:

- **Home.tsx** - Landing page with quick links and latest updates
- **AboutPage.tsx** - Biography, education, and research interests
- **ResearchPage.tsx** - Current and past research projects
- **PublicationsPage.tsx** - Academic publications with links
- **UpdatesPage.tsx** - News, achievements, and announcements
- **ContactPage.tsx** - Contact information and office details

### Update Sidebar

Edit `/components/Sidebar.tsx` to change:
- Your name and title
- Navigation links
- Email address
- Social media links

### Customize Colors

The sidebar uses Tailwind's slate color scheme. To change:

1. Open `/components/Sidebar.tsx`
2. Replace `slate-700`, `slate-600`, etc. with your preferred color
   - Options: `gray`, `zinc`, `neutral`, `stone`, `blue`, `indigo`, `purple`, etc.

### Add Your CV

Place your CV file in the `/public` folder as `cv.pdf`, or update the link in `/components/Sidebar.tsx`

## 📁 Project Structure

```
├── public/              # Static assets (add your CV here)
├── src/
│   └── main.tsx        # React entry point
├── components/
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ResearchPage.tsx
│   │   ├── PublicationsPage.tsx
│   │   ├── UpdatesPage.tsx
│   │   └── ContactPage.tsx
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── Footer.tsx      # Footer component
│   └── ui/            # Reusable UI components
├── styles/
│   └── globals.css    # Global styles
├── workflows/
│   └── deploy.yml     # GitHub Actions deployment
├── App.tsx            # Main app with routing
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
└── package.json       # Dependencies
```

## 🌐 Pages

### Home (`/`)
Landing page featuring:
- Brief introduction
- Latest updates (3 most recent)
- Quick navigation buttons

### About (`/about`)
- Biography
- Education timeline
- Research interests

### Research (`/research`)
- Research overview and interests
- Research areas with detailed projects
- Funding and collaborations

### Publications (`/publications`)
- Manuscripts in preparation
- Published papers grouped by year
- Links to papers and code

### Updates (`/updates`)
- News and announcements grouped by year
- Awards and achievements
- Talks and presentations
- Collaborations

### Contact (`/contact`)
- Email and office information
- Office hours
- Social media links

## 🔧 Technologies Used

- **React 18** - UI library
- **React Router 6** - Client-side routing
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **GitHub Pages** - Hosting
- **GitHub Actions** - Automated deployment

## 📝 Adding New Content

### Add a New Update

Edit `/components/pages/UpdatesPage.tsx` and add to the `updates` array:

```typescript
{
  date: "November 2024",
  year: 2024,
  title: "Your Update Title",
  description: "Description of the update...",
  category: "Publication" // or Award, Talk, Conference, etc.
}
```

The home page automatically shows the 3 most recent updates from `/components/pages/Home.tsx`.

### Add a New Publication

Edit `/components/pages/PublicationsPage.tsx`:
- For published papers, add to the `publications` array
- For manuscripts in progress, add to the `manuscripts` array

### Add a New Research Project

Edit `/components/pages/ResearchPage.tsx` and add to the appropriate research area in the `researchAreas` array.

## 🚀 Building for Production

```bash
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

The built files will be in the `dist/` directory.

## 🐛 Troubleshooting

### Deployment Errors

If you encounter deployment errors:
1. Check that GitHub Pages is enabled in Settings → Pages
2. Verify the source is set to "GitHub Actions"
3. Check the Actions tab for detailed error logs
4. Ensure all dependencies are correctly listed in `package.json`

### Routing Issues

- The app uses React Router for client-side routing
- All undefined routes automatically redirect to the home page
- If pages don't load correctly, check that `base` in `vite.config.ts` matches your deployment

## 📝 License

This project is open source and available for personal and academic use.

## 📧 Contact

**Trinh Minh Tuan**  
PhD Candidate in Computer Science  
University of California, Berkeley  
Email: tuanmt@berkeley.edu  
Website: https://tuanmtrinh.github.io

---

Last updated: November 2024
