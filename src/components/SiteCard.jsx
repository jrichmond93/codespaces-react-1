import './SiteCard.css';

function SiteCard({ site, featured = false }) {
  return (
    <div className={`site-card ${featured ? 'featured' : ''}`}>
      <h3 className="site-name">{site.name}</h3>
      <p className="site-tagline">{site.tagline}</p>
      <p className="site-description">{site.description}</p>
      <a 
        href={site.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="site-link"
      >
        Visit Site →
      </a>
    </div>
  );
}

export default SiteCard;
