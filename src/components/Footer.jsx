import './Footer.css';

function Footer() {
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/aisuretech/', icon: '📘' },
    { name: 'Instagram', url: 'https://www.instagram.com/aisuretech', icon: '📷' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@aisuretech', icon: '🎵' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/aisuretech', icon: '💼' },
    { name: 'X (Twitter)', url: 'https://x.com/aisuretech', icon: '🐦' },
    { name: 'YouTube', url: 'https://www.youtube.com/@AISureTech', icon: '📺' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>AI Sure Network Hub</h3>
          <p>Explore the AISureTech Ecosystem – AI Tools, Insights, and Entertainment at Your Fingertips!</p>
        </div>
        
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            {socialLinks.map(link => (
              <a 
                key={link.name}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                title={link.name}
              >
                <span className="social-icon">{link.icon}</span>
                <span className="social-name">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            <a href="mailto:info@aisuretech.com" className="contact-link">
              info@aisuretech.com
            </a>
          </p>
          <p>
            <a href="https://aisuretech.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              Visit AISureTech.com
            </a>
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Built with React in GitHub Codespaces | © {new Date().getFullYear()} AISureTech</p>
      </div>
    </footer>
  );
}

export default Footer;
