# NEEV – THE FOUNDATION

A premium, multi-page educational coaching website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🎓 About

**NEEV – THE FOUNDATION** is a professional educational coaching institute website featuring:
- Comprehensive course offerings (JEE, NEET, Foundation, Board Excellence, Olympiad)
- Expert faculty profiles
- Top performers showcase
- Online admission and contact system
- Responsive, mobile-first design
- Modern animations and interactions

## 🚀 Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deployment:** GitHub Pages (Static Export)

## 📁 Project Structure

```
NEEV/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── contact/           # Contact page
│   ├── courses/           # Courses page
│   ├── faculty/           # Faculty page
│   ├── results/           # Results/Top Performers page
│   ├── layout.tsx         # Root layout with Header & Footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── common/            # Common components (FloatingCTA)
│   └── layout/            # Layout components (Header, Footer)
├── data/                  # JSON configuration files
│   ├── siteConfig.json    # Site-wide configuration
│   ├── courses.json       # Course data
│   ├── faculty.json       # Faculty profiles
│   ├── topPerformers.json # Top performers data
│   └── testimonials.json  # Testimonials
├── public/                # Static assets (images, etc.)
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Export Static Site (for GitHub Pages)**
   ```bash
   npm run build
   ```
   This creates an `out` folder with static files.

## 🎨 Customization

### 1. Update Brand Information
Edit `data/siteConfig.json`:
```json
{
  "brandName": "Your Institute Name",
  "tagline": "Your Tagline",
  "contact": {
    "phone": "+91 XXXXXXXXXX",
    "email": "your@email.com",
    "address": "Your Address"
  }
}
```

### 2. Add/Edit Courses
Edit `data/courses.json` to add or modify courses.

### 3. Update Faculty
Edit `data/faculty.json` to add or update faculty members.

### 4. Add Top Performers
Edit `data/topPerformers.json` to showcase student achievements.

### 5. Change Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: {
    // Your primary colors
  },
  accent: {
    // Your accent colors
  }
}
```

### 6. Update Images
- Replace logo/brand image URLs in components
- Add images to `public/images/` folder
- Update image paths in JSON files

### 7. Google Maps
Update the map embed URL in `data/siteConfig.json`:
1. Go to [Google Maps](https://maps.google.com)
2. Find your location
3. Click "Share" → "Embed a map"
4. Copy the `src` URL from the iframe
5. Paste it in `contact.mapEmbedUrl`

## 🌐 Deployment to GitHub Pages

### Step 1: Update `next.config.js`
Make sure the `basePath` is set correctly (empty for custom domain, or `/repo-name` for GitHub Pages):

```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '', // or '/repo-name' if using username.github.io/repo-name
}
```

### Step 2: Build and Export
```bash
npm run build
```

### Step 3: Deploy to GitHub Pages

**Option A: Using GitHub Actions (Recommended)**

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

**Option B: Manual Deployment**

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. Go to your GitHub repo → Settings → Pages
5. Set source to `gh-pages` branch

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats, featured courses, top performers preview |
| Courses | `/courses` | Detailed course information with enrollment CTA |
| Faculty | `/faculty` | Faculty profiles with qualifications and achievements |
| Results | `/results` | Top performers showcase with filters |
| About Us | `/about` | Mission, vision, journey, values, milestones |
| Contact | `/contact` | Contact form, map, office hours, social links |

## 🎯 Features

✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop  
✅ **SEO Optimized** - Meta tags, semantic HTML, fast loading  
✅ **Smooth Animations** - Framer Motion for engaging user experience  
✅ **WhatsApp Integration** - Direct messaging via WhatsApp  
✅ **Contact Form** - Functional contact form with validation  
✅ **Configurable** - Easy to update content via JSON files  
✅ **Modern UI** - Clean, professional academic design  
✅ **Performance** - Optimized for speed and Core Web Vitals  

## 🔧 Troubleshooting

### Issue: Images not loading
- Make sure images are in the `public` folder
- Use relative paths: `/images/filename.jpg`
- For external images, use full URLs

### Issue: Build fails
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run lint`
- Clear cache: delete `.next` folder and rebuild

### Issue: Styles not applying
- Ensure Tailwind CSS is properly configured
- Check that `globals.css` imports Tailwind directives
- Rebuild the project

## 📞 Support

For any issues or customization requests:
- Email: NEEVthefoundation619@gmail.com
- Phone: +91 95481 56544

## 📝 License

This project is proprietary and confidential.

---

**Built with ❤️ for NEEV – THE FOUNDATION**
