import React from 'react';
import volunteerData from '../../data/volunteers.json';

const AlumniPage = () => {
  const { alumni } = volunteerData;

  return (
    <main className="subpage">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">Legacy</div>
          <h1 className="section-title">
            Our <span className="gradient-text">Alumni Network</span>
          </h1>
          <p className="section-subtitle">
            Celebrating the journey of our past volunteers who continue to inspire and contribute to society.
          </p>
        </div>

        <div className="volunteer-grid">
          {alumni.map((a) => (
            <div key={a.id} className="volunteer-card">
              <div className="volunteer-image-container">
                <img src={a.photo} alt={a.name} className="volunteer-image" />
              </div>
              <div className="volunteer-info">
                <h3 className="volunteer-name">{a.name}</h3>
                <div className="volunteer-team">
                  <i className="fas fa-history"></i> {a.teamName}
                </div>
                <div className="volunteer-city">
                  <i className="fas fa-map-marker-alt"></i> {a.city}
                </div>
                <div className="volunteer-activities">
                  <div className="volunteer-activities-label">Impact Legacy</div>
                  {a.activities}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Were you once a part of ADORE? We'd love to reconnect!
          </p>
          <a href="#contact" className="btn-primary">Get in Touch</a>
        </div>
      </div>
    </main>
  );
};

export default AlumniPage;
