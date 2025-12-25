import { Link } from 'react-router-dom';
import { sitesData } from '../data/sites';
import SiteCard from '../components/SiteCard';
import './Home.css';

function Home() {
  const featuredSites = sitesData.filter(site => site.featured);

  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">
          Explore the AISureTech Ecosystem
        </h1>
        <p className="hero-subtitle">
          AI Tools, Insights, and Entertainment at Your Fingertips!
        </p>
        <p className="hero-description">
          Discover our network of innovative AI-powered websites designed to enhance your daily life, 
          from financial guidance to entertainment, education, and creative exploration.
        </p>
      </section>

      <section className="featured-section">
        <h2 className="section-title">Featured Sites</h2>
        <div className="featured-grid">
          {featuredSites.map(site => (
            <SiteCard key={site.id} site={site} featured={true} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Explore All Our Sites</h2>
        <p>Browse our complete directory of AI-powered tools and resources</p>
        <Link to="/directory" className="cta-button">View Full Directory</Link>
      </section>
    </div>
  );
}

export default Home;
