# AI Sure Network Hub Deployment Guide

This site is configured for deployment to GitHub Pages.

## Setup Instructions

### 1. Update package.json
Replace `YOUR_GITHUB_USERNAME` in package.json with your actual GitHub username:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/codespaces-react"
```

### 2. Deploy to GitHub Pages

Run the following command to build and deploy:
```bash
npm run deploy
```

This will:
- Build the production version of your site
- Create/update the `gh-pages` branch
- Push the built files to GitHub Pages

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select the `gh-pages` branch
4. Click **Save**

Your site will be live at: `https://YOUR_GITHUB_USERNAME.github.io/codespaces-react`

## Development

To run locally:
```bash
npm start
```

To build for production:
```bash
npm run build
```

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `public` directory with your domain name
2. Configure your DNS settings to point to GitHub Pages
3. Update the `homepage` field in package.json to your custom domain

## Notes

- The base URL is set to `/codespaces-react/` in vite.config.js
- All routes are handled by React Router
- The site is fully responsive and optimized for mobile devices
