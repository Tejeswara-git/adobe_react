import React from 'react';

const monthlyPublications = [
  {
    id: 'gt_dec2025',
    src: '/images/GT_Dec2025.jpg',
    title: 'Growing Together - December 2025',
    month: 'December 2025',
    summary:
      'Start the new year with inspiring stories and insights on building stronger communities. This month features reflections on fresh beginnings and community resilience.',
  },
  {
    id: 'gt_june2025',
    src: '/images/GT_June2025.jpg',
    title: 'Growing Together - June 2025',
    month: 'June 2025',
    summary:
      'Explore the power of compassion and connection in this month\'s edition. Discover how ADORE volunteers are making a difference through kindness and community service.',
  },
  {
    id: 'gt_dec2024',
    src: '/images/GT_Dec2024.jpg',
    title: 'Growing Together - December 2024',
    month: 'December 2024',
    summary:
      'This month celebrates growth and transformation. Read inspiring stories from our volunteers and learn practical tools for personal and community development.',
  },
  {
    id: 'gt_june2024',
    src: '/images/GT_June2024.jpg',
    title: 'Growing Together - June 2024',
    month: 'June 2024',
    summary:
      'Discover the essence of leadership and mentorship in our April edition. Learn from experienced mentors as they guide young leaders toward positive change.',
  },
];

const GrowingTogetherPage = () => {
  return (
    <main className="subpage growing-together-page">
      <section className="subpage-hero">
        <div className="section-container subpage-grid">
          <div className="subpage-copy">
            <div className="section-tag">Monthly Releases</div>
            <h1 className="section-title">
              Growing <span className="gradient-text">Together Monthly</span>
            </h1>
            <p className="section-subtitle">
              Discover our monthly publications featuring inspiring stories, insights, and practical wisdom from ADORE's community of volunteers and mentors dedicated to positive change.
            </p>
            <div className="growing-together-highlights">
              <span className="subpage-highlight">Monthly updates</span>
              <span className="subpage-highlight">Community stories</span>
              <span className="subpage-highlight">Volunteer insights</span>
            </div>
            <div className="button-group">
              <a href="#/about" className="btn-primary">
                Explore More
              </a>
              <a href="#home" className="btn-secondary">
                Back to Home
              </a>
            </div>
          </div>
          <div className="subpage-visual">
            <img src="/images/adobe1.jpg" alt="ADORE Growing Together monthly collection" className="subpage-image" />
          </div>
        </div>
      </section>

      <section className="growing-together-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">Latest Edition</div>
            <h2 className="section-title">Monthly Publications</h2>
            <p className="section-subtitle">
              Each month brings fresh stories, reflections, and practical tools to support your journey in community service, leadership, and personal growth.
            </p>
          </div>

          <div className="books-grid">
            {monthlyPublications.map((publication) => (
              <article key={publication.id} className="book-card">
                <div className="book-info">
                  <div className="book-meta">{publication.month}</div>
                  <h3 className="book-title">{publication.title}</h3>
                  <p className="book-summary">{publication.summary}</p>
                  <div className="book-actions">
                    <a href="#/about" className="btn-primary">
                      Read Publication
                    </a>
                  </div>
                </div>
                <div className="book-cover-container">
                  <img src={publication.src} alt={`${publication.title} cover`} className="book-cover" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GrowingTogetherPage;
