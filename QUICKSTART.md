# 🚀 Quick Start Guide - Neev Foundation Website

## ⚡ Getting Started in 3 Steps

### 1️⃣ Install Dependencies (First Time Only)
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```
Then open: **http://localhost:3000**

### 3️⃣ Build for Production
```bash
npm run build
```

---

## 📝 Quick Customization Checklist

### ✅ Essential Updates

1. **Contact Information** (`data/siteConfig.json`)
   - [ ] Update phone number
   - [ ] Update email address
   - [ ] Update physical address
   - [ ] Update social media links

2. **Google Maps** (`data/siteConfig.json`)
   - [ ] Get your Google Maps embed URL
   - [ ] Update `contact.mapEmbedUrl`

3. **Courses** (`data/courses.json`)
   - [ ] Review course information
   - [ ] Update pricing if needed
   - [ ] Modify course features

4. **Faculty** (`data/faculty.json`)
   - [ ] Add real faculty photos (replace `/images/faculty/*.svg`)
   - [ ] Update faculty information
   - [ ] Add qualifications

5. **Top Performers** (`data/topPerformers.json`)
   - [ ] Add real student photos (replace `/images/toppers/*.svg`)
   - [ ] Update student achievements
   - [ ] Add testimonials

6. **Images**
   - [ ] Replace brand logo/profile image
   - [ ] Add faculty photos
   - [ ] Add student photos
   - [ ] Add facility photos

---

## 🎨 Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#YourColor',  // Main blue
    600: '#YourColor',  // Darker blue
    700: '#YourColor',  // Even darker
  },
  accent: {
    DEFAULT: '#YourColor',  // Orange/Yellow accent
  }
}
```

---

## 📁 File Structure Quick Reference

```
data/
  ├── siteConfig.json      ← Contact info, social links
  ├── courses.json         ← All course details
  ├── faculty.json         ← Teacher profiles
  ├── topPerformers.json   ← Student achievements
  └── testimonials.json    ← Parent reviews

app/
  ├── page.tsx            ← Home page
  ├── about/page.tsx      ← About Us
  ├── courses/page.tsx    ← Courses
  ├── faculty/page.tsx    ← Faculty
  ├── results/page.tsx    ← Results
  └── contact/page.tsx    ← Contact
```

---

## 🌐 Deploy to GitHub Pages

### Method 1: Automatic (GitHub Actions)
1. Push code to GitHub
2. GitHub Actions will auto-deploy
3. Enable Pages in repo settings

### Method 2: Manual
```bash
npm run build
# Upload 'out' folder to your hosting
```

---

## 🆘 Common Issues

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Build errors?
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Images not showing?
- Put images in `public/images/`
- Use path: `/images/your-image.jpg`

---

## 📞 Need Help?

Contact: **neevthefoundation619@gmail.com**

---

## 🎯 Next Steps

1. **Update all JSON files** with real data
2. **Replace placeholder images** with actual photos
3. **Test on mobile devices**
4. **Deploy to GitHub Pages**
5. **Share with the world!** 🎉
