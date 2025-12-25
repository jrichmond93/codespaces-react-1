import { useState } from 'react';
import { sitesData, categories } from '../data/sites';
import SiteCard from '../components/SiteCard';
import './Directory.css';

function Directory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSites = sitesData.filter(site => {
    const matchesSearch = 
      site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || site.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const groupedSites = {};
  Object.keys(categories).forEach(cat => {
    groupedSites[cat] = filteredSites.filter(site => site.category === cat);
  });

  return (
    <div className="directory">
      <div className="directory-header">
        <h1>Site Directory</h1>
        <p>Explore all {sitesData.length} AI-powered sites in the AISureTech ecosystem</p>
      </div>

      <div className="directory-controls">
        <input
          type="text"
          placeholder="Search sites by name or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        
        <div className="category-filters">
          <button
            className={`filter-button ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Sites
          </button>
          {Object.keys(categories).map(cat => (
            <button
              key={cat}
              className={`filter-button ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {categories[cat].name}
            </button>
          ))}
        </div>
      </div>

      <div className="directory-content">
        {filteredSites.length === 0 ? (
          <div className="no-results">
            <p>No sites found matching your search criteria.</p>
          </div>
        ) : (
          Object.keys(categories).map(cat => {
            const sitesInCategory = groupedSites[cat];
            if (sitesInCategory.length === 0) return null;
            
            return (
              <div key={cat} className="category-section">
                <h2 className="category-title">{categories[cat].name}</h2>
                <p className="category-description">{categories[cat].description}</p>
                <div className="sites-grid">
                  {sitesInCategory.map(site => (
                    <SiteCard key={site.id} site={site} />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
    </>
  );
}

export default Directory;
