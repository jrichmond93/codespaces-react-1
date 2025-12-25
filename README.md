# AI Sure Network Hub

A centralized promotional website showcasing the entire AISureTech ecosystem of AI-powered websites. Built with React in GitHub Codespaces.

![AI Sure Network Hub](public/AI%20Sure%20Tech%20logo.png)

## 🌟 Features

- **Homepage** with featured AI-powered websites
- **Full Directory** of 19+ innovative AI tools and resources
- **Category Filtering** (Education, Finance, Creative, Entertainment)
- **Live Search** across site names and descriptions
- **Responsive Design** optimized for all devices
- **Social Media Integration** with all AISureTech channels
- **Easy Navigation** with React Router

## 🚀 Quick Start

### Prerequisites
- Node.js (included in Codespaces)
- npm (included in Codespaces)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd codespaces-react
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The site will open at `http://localhost:3000/codespaces-react/` (or another port if 3000 is in use).

## 📁 Project Structure

```
codespaces-react/
├── public/
│   ├── AI Sure Tech logo.png
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── SiteCard.jsx
│   │   └── SiteCard.css
│   ├── data/
│   │   └── sites.js          # All site data
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Directory.jsx
│   │   ├── Directory.css
│   │   ├── About.jsx
│   │   └── About.css
│   ├── App.jsx
│   ├── App.css
│   └── index.jsx
├── package.json
└── vite.config.js
```

## 🎨 Featured Sites

- **AI Evolution Explorer** - Discover animal evolutionary history
- **AI Stock Tickers** - AI-powered stock market insights
- **AI Trendified** - Today's trending topics with TED talks
- **Kitty Vids** - Adorable cat videos and care guides

## 📂 Categories

### AI Education & Insights
- AI Evolution Explorer
- AI Wisdom Council
- AI Trendified
- A Stoic Says
- Balanced Debate

### Finance & Crypto
- AI Stock Tickers
- Learn AI Stock Tickers
- Finster Chat
- Cryptiment
- AI Stock Tickers Blog

### Creative & Fun Tools
- Alternate History AI
- Create A Dish
- Feather Guess
- Idea To Market AI
- Opposing Point

### Entertainment
- Kitty Vids
- Puppy Vids

## 🔧 Technology Stack

- **React** 18.2.0 - UI framework
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations
- **GitHub Codespaces** - Development environment

## 📦 Deployment

### GitHub Pages

1. Update `package.json` with your GitHub username:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/codespaces-react"
```

2. Deploy:
```bash
npm run deploy
```

3. Enable GitHub Pages in repository settings (Settings → Pages → Source: gh-pages branch)

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 🌐 Social Links

- **Facebook**: https://www.facebook.com/aisuretech/
- **Instagram**: https://www.instagram.com/aisuretech
- **TikTok**: https://www.tiktok.com/@aisuretech
- **LinkedIn**: https://www.linkedin.com/company/aisuretech
- **X (Twitter)**: https://x.com/aisuretech
- **YouTube**: https://www.youtube.com/@AISureTech

## 📧 Contact

For questions or feedback, reach out to: **info@aisuretech.com**

Visit our main site: [AISureTech.com](https://aisuretech.com)

## 🛠️ Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

### Adding New Sites

1. Open `src/data/sites.js`
2. Add a new site object to the `sitesData` array:
```javascript
{
  id: 20,
  name: "New Site Name",
  url: "https://example.com",
  tagline: "Short tagline",
  description: "Detailed description...",
  category: "education", // or "finance", "creative", "entertainment"
  featured: false // set to true for homepage display
}
```

### Customization

- **Colors**: Edit gradient colors in CSS files (purple theme: `#667eea` to `#764ba2`)
- **Logo**: Replace `public/AI Sure Tech logo.png`
- **Categories**: Modify categories in `src/data/sites.js`

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Performance

- Optimized with Vite for fast builds
- Lazy loading for smooth navigation
- CSS animations for engaging UX
- Lighthouse score: 90+ (Performance, Accessibility, Best Practices, SEO)

## 📄 License

See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

Built with React in GitHub Codespaces as part of the AISureTech ecosystem initiative.

---

**Built with ❤️ by AISureTech** | © 2025 All Rights Reserved
