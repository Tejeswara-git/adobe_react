import React from 'react';

const reflections = [
  {
    id: 1,
    month: 'January',
    year: 2024,
    title: 'New Beginnings',
    image: '/images/reflections-january.png',
    description: 'Starting the year with renewed purpose and dedication. January reminds us that every moment is an opportunity to make a difference in someone\'s life.',
    highlights: ['Goal Setting', 'Fresh Start', 'Inspiration']
  },
  {
    id: 2,
    month: 'February',
    year: 2024,
    title: 'Community Impact',
    image: '/images/reflections-february.png',
    description: 'February brings focus to the connections we build with our community. Through meaningful interactions, we create lasting positive change.',
    highlights: ['Connection', 'Growth', 'Unity']
  },
    {
    id: 3,
    month: 'February',
    year: 2024,
    title: 'Community Impact',
    image: '/images/reflections-february.png',
    description: 'February brings focus to the connections we build with our community. Through meaningful interactions, we create lasting positive change.',
    highlights: ['Connection', 'Growth', 'Unity']
  },
];

const Reflections = () => {
  return (
    <main className="subpage">
      <section className="reflections-hero">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">Reflections</div>
            <h1 className="section-title">
              Monthly <span className="gradient-text">Reflections</span> of ADORE
            </h1>
            <p className="section-subtitle">
              Each month brings new insights, learnings, and opportunities to make a meaningful impact in the lives of young people and communities we serve.
            </p>
          </div>
        </div>
      </section>

      <section className="reflections-content">
        <div className="section-container">
          <div className="reflections-grid">
            {reflections.map((reflection) => (
              <article key={reflection.id} className="reflection-card">
                <div className="reflection-image-wrapper">
                  <img
                    src={reflection.image}
                    alt={reflection.title}
                    className="reflection-image"
                  />
                  <div className="reflection-image-overlay"></div>
                </div>

                <div className="reflection-content">
                  <div className="reflection-header">
                    <div className="reflection-month">{reflection.month}</div>
                    <div className="reflection-year">{reflection.year}</div>
                  </div>

                  <h3 className="reflection-title">{reflection.title}</h3>

                  <p className="reflection-description">
                    {reflection.description}
                  </p>

                  <div className="reflection-highlights">
                    {reflection.highlights.map((highlight, index) => (
                      <span key={index} className="reflection-highlight">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <button className="reflection-btn">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reflections;
