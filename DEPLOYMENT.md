# 🚀 Deployment Guide - Neev Foundation Website

## Option 1: Deploy to GitHub Pages (Recommended)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository named `neev-foundation` (or any name)
3. Don't initialize with README

### Step 2: Push Your Code
```bash
cd d:\Projects\neev
git init
git add .
git commit -m "Initial commit: Neev Foundation website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/neev-foundation.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The GitHub Actions workflow will automatically deploy your site

### Step 4: Access Your Website
Your site will be live at:
- Custom domain: `https://yourdomain.com` (if configured)
- GitHub Pages: `https://YOUR_USERNAME.github.io/neev-foundation/`

**Note:** If using GitHub Pages subdirectory, update `next.config.js`:
```javascript
basePath: '/neev-foundation',  // Use your repo name
```

---

## Option 2: Deploy to Vercel (Easiest)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
cd d:\Projects\neev
vercel
```

Follow the prompts:
- Link to existing project? **No**
- Project name: **neev-foundation**
- Directory: **./  (press Enter)**
- Build command: **npm run build (press Enter)**

### Step 3: Access Your Website
Vercel will provide you with a URL like:
`https://neev-foundation.vercel.app`

**Advantages:**
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on push
- ✅ Free for personal projects

---

## Option 3: Deploy to Netlify

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Build Your Site
```bash
npm run build
```

### Step 3: Deploy
```bash
netlify deploy --prod --dir=out
```

### Alternative: Netlify Drop
1. Go to https://app.netlify.com/drop
2. Drag and drop your `out` folder
3. Done!

---

## Option 4: Manual Deployment (Any Host)

### Step 1: Build Static Site
```bash
npm run build
```
This creates an `out` folder with static files.

### Step 2: Upload to Your Host
Upload the contents of the `out` folder to your web hosting:
- Via FTP/SFTP
- Via cPanel File Manager
- Via hosting control panel

**Common hosting providers:**
- Hostinger
- Bluehost
- GoDaddy
- DigitalOcean
- AWS S3

---

## Custom Domain Setup

### For GitHub Pages:
1. Add a `CNAME` file to `public/` folder:
   ```
   yourdomain.com
   ```
2. In your domain registrar (GoDaddy, Namecheap, etc.):
   - Add CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Add A records pointing to GitHub IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

### For Vercel:
1. Go to your Vercel project
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

### For Netlify:
1. Go to **Domain settings**
2. Add custom domain
3. Configure DNS with your registrar

---

## Post-Deployment Checklist

✅ **Test all pages** - Home, Courses, Faculty, Results, About, Contact  
✅ **Check mobile responsiveness**  
✅ **Verify all links work**  
✅ **Test contact form**  
✅ **Check images load correctly**  
✅ **Verify WhatsApp link works**  
✅ **Test Google Maps embed**  
✅ **Check social media links**  

---

## Common Issues & Solutions

### Issue: Images not loading
**Solution:** 
- Ensure images are in `public/images/` folder
- Use absolute paths: `/images/photo.jpg`
- Rebuild: `npm run build`

### Issue: 404 errors on refresh
**Solution:** 
- For static hosting, ensure `trailingSlash: true` in `next.config.js`
- Add `.nojekyll` file to `out` folder for GitHub Pages

### Issue: CSS not loading
**Solution:**
- Check `basePath` in `next.config.js`
- Clear browser cache
- Rebuild project

### Issue: Build fails
**Solution:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## Performance Optimization

### Before Deploying:
1. **Optimize Images**
   - Compress images (use TinyPNG, ImageOptim)
   - Use WebP format when possible
   - Resize large images

2. **Test Build**
   ```bash
   npm run build
   npm run start
   ```
   Test at http://localhost:3000

3. **Check Bundle Size**
   ```bash
   npm run build
   ```
   Review build output for large files

---

## Continuous Deployment Setup

### GitHub Actions (Already Included!)
The `.github/workflows/deploy.yml` file is already configured.

**How it works:**
1. Push code to `main` branch
2. GitHub Actions automatically builds
3. Deploys to GitHub Pages
4. Live in ~2 minutes!

### Automatic Deployments:
- Vercel: Auto-deploys on git push
- Netlify: Auto-deploys on git push
- GitHub Pages: Uses Actions workflow

---

## SSL/HTTPS Setup

### GitHub Pages
- ✅ Automatic HTTPS (built-in)

### Vercel & Netlify
- ✅ Automatic HTTPS (built-in)

### Custom Hosting
- Use Let's Encrypt (free)
- Enable in cPanel/hosting panel
- Or use Cloudflare (free CDN + SSL)

---

## Monitoring & Analytics

### Add Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx`:
```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID`}
  strategy="afterInteractive"
/>
```

### Performance Monitoring
- Use Google PageSpeed Insights
- Test with GTmetrix
- Monitor Core Web Vitals

---

## Backup & Maintenance

### Regular Backups
1. Keep repository updated on GitHub
2. Export `data/` folder regularly
3. Backup images and assets

### Updates
```bash
# Update dependencies
npm update

# Check for security issues
npm audit
npm audit fix
```

---

## 🎉 You're Ready to Deploy!

Choose your preferred method and follow the steps above.

**Recommended for beginners:** Vercel (easiest setup)  
**Recommended for free hosting:** GitHub Pages  
**Recommended for best performance:** Vercel or Netlify  

---

## 📞 Need Help?

- GitHub Pages: https://docs.github.com/pages
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com

---

**Good luck with your deployment! 🚀**
