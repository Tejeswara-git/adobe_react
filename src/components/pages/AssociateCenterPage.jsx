import React from 'react';
import volunteerData from '../../data/volunteers.json';

const AssociateCenterPage = () => {
  const { associateCenters } = volunteerData;

  return (
    <main className="subpage">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">Global Presence</div>
          <h1 className="section-title">
            Associate <span className="gradient-text">Centers</span>
          </h1>
          <p className="section-subtitle">
            Our centers across the globe that facilitate community growth and educational support.
          </p>
        </div>

        <div className="volunteer-grid">
          {associateCenters.map((center) => (
            <div key={center.id} className="volunteer-card">
              <div className="volunteer-image-container">
                <img src={center.photo} alt={center.name} className="volunteer-image" />
              </div>
              <div className="volunteer-info">
                <h3 className="volunteer-name">{center.name}</h3>
                <div className="volunteer-team">
                  <i className="fas fa-building"></i> {center.teamName}
                </div>
                <div className="volunteer-city">
                  <i className="fas fa-globe-americas"></i> {center.city}
                </div>
                <div className="volunteer-activities">
                  <div className="volunteer-activities-label">Collaborations</div>
                  {center.activities}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AssociateCenterPage;
