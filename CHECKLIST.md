# Pre-Deployment Checklist

Use this checklist before deploying to GitHub Pages.

## ✅ Required Steps

### 1. Update Configuration
- [ ] Open `package.json`
- [ ] Find line: `"homepage": "https://YOUR_GITHUB_USERNAME.github.io/codespaces-react"`
- [ ] Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username
- [ ] Save the file

### 2. Test Locally
- [ ] Run `npm start` to verify site works locally
- [ ] Test all navigation links (Home, Directory, About)
- [ ] Test search functionality on Directory page
- [ ] Test category filters
- [ ] Verify all site cards link correctly
- [ ] Check footer social links
- [ ] Test on mobile view (resize browser)

### 3. Build for Production
- [ ] Run `npm run build`
- [ ] Verify build completes without errors
- [ ] Check the `dist` folder was created

### 4. Deploy to GitHub Pages
- [ ] Ensure all changes are committed to git
- [ ] Run `npm run deploy`
- [ ] Wait for deployment to complete
- [ ] Check for success message

### 5. Configure GitHub Pages
- [ ] Go to your repository on GitHub
- [ ] Click **Settings** tab
- [ ] Scroll to **Pages** section (left sidebar)
- [ ] Under "Source", select `gh-pages` branch
- [ ] Click **Save**
- [ ] Wait 1-2 minutes for deployment

### 6. Verify Live Site
- [ ] Visit: `https://YOUR_GITHUB_USERNAME.github.io/codespaces-react`
- [ ] Test all pages load correctly
- [ ] Verify logo appears
- [ ] Test all external links
- [ ] Check mobile responsiveness
- [ ] Test search and filters

## 🔧 Troubleshooting

### Issue: 404 on GitHub Pages
**Solution**: 
- Ensure gh-pages branch exists
- Check GitHub Pages settings point to gh-pages branch
- Verify homepage URL in package.json is correct

### Issue: CSS/Images Not Loading
**Solution**:
- Verify `base` in vite.config.js matches repository name
- Should be: `base: '/codespaces-react/'`
- Rebuild and redeploy

### Issue: Routes Not Working (404 on refresh)
**Solution**:
- This is expected with client-side routing on GitHub Pages
- Consider adding a 404.html that redirects to index.html
- Or use hash router instead of browser router

## 📝 Optional Enhancements

### Custom Domain Setup
- [ ] Purchase domain name
- [ ] Add CNAME file to `public/` directory with your domain
- [ ] Configure DNS A records to point to GitHub Pages IPs
- [ ] Update homepage in package.json to custom domain
- [ ] Enable HTTPS in GitHub Pages settings

### SEO Optimization
- [ ] Add meta description tags
- [ ] Create robots.txt (already exists)
- [ ] Add Open Graph meta tags
- [ ] Generate sitemap.xml
- [ ] Submit to Google Search Console

### Analytics
- [ ] Sign up for Google Analytics
- [ ] Add tracking code to index.html
- [ ] Configure goals and conversions
- [ ] Monitor traffic

## 🚀 Post-Deployment

### Promote Your Site
- [ ] Share on AISureTech social media channels
- [ ] Add link to AISureTech.com
- [ ] Include in email signatures
- [ ] Share in relevant communities

### Monitor & Maintain
- [ ] Check GitHub Pages deployment status regularly
- [ ] Monitor analytics (if added)
- [ ] Update site content as new AISureTech sites launch
- [ ] Test periodically for broken links

## 📞 Need Help?

- Review [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions
- Check [README.md](README.md) for development info
- Contact: info@aisuretech.com

---

**Good luck with your deployment! 🎉**
