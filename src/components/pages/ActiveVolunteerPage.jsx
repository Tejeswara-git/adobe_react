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

        <div className="demo-table-container">
          <table className="demo-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>Field Category</th>
              </tr>
            </thead>
            <tbody>
              {activeVolunteers.map((v) => (
                <tr key={v.id}>
                  <td><strong>{v.name}</strong></td>
                  <td>{v.city}</td>
                  <td>
                    <span className="tag-field">{v.fieldCategory}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>

        </div>
      </div>
    </main>
  );
};

export default ActiveVolunteerPage;
