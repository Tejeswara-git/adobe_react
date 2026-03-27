import React from 'react';

const PageLayout = ({ eyebrow, title, description, highlights = [], image, ctaLabel, ctaHref = '#contact' }) => {
  return (
    <main className="subpage">
      <section className="subpage-hero">
        <div className="section-container subpage-grid">
          <div className="subpage-copy">
            <div className="section-tag">{eyebrow}</div>
            <h1 className="section-title">{title}</h1>
            <p className="section-subtitle">{description}</p>
            <div className="subpage-highlights">
              {highlights.map((item) => (
                <div key={item} className="subpage-highlight">
                  {item}
                </div>
              ))}
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
    </main>
  );
};

export default PageLayout;
