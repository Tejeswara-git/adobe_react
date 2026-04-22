import React from 'react';
import volunteerData from '../../data/volunteers.json';

const ActiveVolunteerPage = () => {
  const { activeVolunteers } = volunteerData;

  return (
    <main className="subpage">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">Network</div>
          <h1 className="section-title">
            Our <span className="gradient-text">Active Volunteers</span>
          </h1>
          <p className="section-subtitle">
            Meet the dedicated individuals who are making a difference across various fields and cities.
          </p>
        </div>

        <div className="volunteer-grid">
          {activeVolunteers.map((v) => (
            <div key={v.id} className="volunteer-card">
              <div className="volunteer-image-container">
                <img src={v.photo} alt={v.name} className="volunteer-image" />
              </div>
              <div className="volunteer-info">
                <h3 className="volunteer-name">{v.name}</h3>
                <div className="volunteer-team">
                  <i className="fas fa-users"></i> {v.teamName}
                </div>
                <div className="volunteer-city">
                  <i className="fas fa-map-marker-alt"></i> {v.city}
                </div>
                <div className="volunteer-activities">
                  <div className="volunteer-activities-label">Activities conducted</div>
                  {v.activities}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ActiveVolunteerPage;
