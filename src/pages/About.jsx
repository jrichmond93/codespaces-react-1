import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './About.css';

function About() {
  return (
    <>
      <Helmet>
        <title>About - AI Sure Network Hub | AISureTech's AI Ecosystem</title>
        <meta name="description" content="Learn about AI Sure Network Hub, AISureTech's centralized platform showcasing innovative AI-powered websites for finance, education, creativity, and entertainment." />
        <link rel="canonical" href="https://hub.aisuretech.com/about" />
      </Helmet>
      
      <div className="about">
      <div className="about-container">
        <h1>About AI Sure Network Hub</h1>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            The AI Sure Network Hub is a centralized promotional platform designed to showcase 
            the innovative ecosystem of AI-powered websites developed by AISureTech. Our mission 
            is to make cutting-edge AI tools, insights, and entertainment accessible to everyone.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <p>
            Our network spans multiple categories, providing value across various aspects of your life:
          </p>
          <ul>
            <li><strong>AI Education & Insights:</strong> Learn and grow with AI-powered educational tools and wisdom from diverse perspectives</li>
            <li><strong>Finance & Crypto:</strong> Make informed financial decisions with AI-driven market analysis and investment guidance</li>
            <li><strong>Creative & Fun Tools:</strong> Explore innovative applications for creativity, ideation, and problem-solving</li>
            <li><strong>Entertainment:</strong> Discover delightful content that brings joy to your day</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Our Technology</h2>
          <p>
            This hub is built with modern web technologies including React and developed in 
            GitHub Codespaces, emphasizing a dynamic and interactive user experience. Each site 
            in our network leverages artificial intelligence to provide unique, valuable services 
            to our users.
          </p>
        </section>

        <section className="about-section">
          <h2>Join Our Community</h2>
          <p>
            We're constantly expanding our ecosystem with new AI-powered tools and resources. 
            Follow us on social media and stay connected to discover the latest additions to 
            the AISureTech network.
          </p>
          <p>
            Have questions or feedback? Reach out to us at{' '}
            <a href="mailto:info@aisuretech.com">info@aisuretech.com</a>
          </p>
        </section>

        <section className="about-section cta-box">
          <h2>Explore the Ecosystem</h2>
          <p>
            Ready to discover AI-powered solutions for your needs? Browse our complete directory 
            of innovative websites.
          </p>
          <Link to="/directory" className="about-button">View All Sites</Link>
        </section>
      </div>
    </div>
    </>
  );
}

export default About;
