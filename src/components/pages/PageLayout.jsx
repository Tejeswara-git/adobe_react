import React, { useState } from 'react';

const PageLayout = ({ eyebrow, title, description, highlights = [], highlightDetails = [], image, ctaLabel, ctaHref = '#contact' }) => {
  const [activeHighlight, setActiveHighlight] = useState(() => {
    if (highlights && highlights.length > 0) {
      const first = highlights[0];
      return highlightDetails.find(d => d.id === first || d.title === first) || null;
    }
    return null;
  });

  const handleHighlightClick = (item) => {
    const details = highlightDetails.find(d => d.id === item || d.title === item);
    if (details) {
      setActiveHighlight(activeHighlight && (activeHighlight.id === item || activeHighlight.title === item) ? null : details);
    }
  };

  return (
    <main className="subpage">
      <section className="subpage-hero">
        <div className="section-container subpage-grid">
          <div className="subpage-copy">
            <div className="section-tag">{eyebrow}</div>
            <h1 className="section-title">{title}</h1>
            {typeof description === 'string'
              ? <p className="section-subtitle">{description}</p>
              : <div className="section-subtitle">{description}</div>
            }
            <div className="subpage-highlights">
              {highlights.map((item) => {
                const hasDetails = highlightDetails.some(d => d.id === item || d.title === item);
                const isActive = activeHighlight && (activeHighlight.id === item || activeHighlight.title === item);
                return (
                  <div 
                    key={item} 
                    className={`subpage-highlight ${hasDetails ? 'clickable' : ''} ${isActive ? 'active' : ''}`}
                    onClick={() => hasDetails && handleHighlightClick(item)}
                    style={hasDetails ? { cursor: 'pointer' } : {}}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <a href={ctaHref} className="btn-primary">
              {ctaLabel}
            </a>
          </div>
          <div className="subpage-visual">
            <img src={image.src} alt={image.alt} className="subpage-image" />
          </div>
        </div>
      </section>

      {activeHighlight && (
        <section className="highlight-details-section">
          <div className="section-container">
            <div 
              className="highlight-details-card" 
              style={{ backgroundImage: `url('${activeHighlight.image}')` }}
            >
              <div className="highlight-details-overlay"></div>
              <div className="highlight-details-content">
                <h2>{activeHighlight.title}</h2>
                <p className="highlight-desc">{activeHighlight.description}</p>
                {activeHighlight.additionalInfo && (
                  <p className="highlight-additional-info">{activeHighlight.additionalInfo}</p>
                )}
                {activeHighlight.topics && activeHighlight.topics.length > 0 && (
                  <div className="topics-wrapper">
                    <h3>Topics Covered</h3>
                    <ul className="topics-list">
                      {activeHighlight.topics.map(topic => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default PageLayout;
