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

        <div className="demo-table-container">
          <table className="demo-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>Previously Chose</th>
              </tr>
            </thead>
            <tbody>
              {alumni.map((a) => (
                <tr key={a.id}>
                  <td><strong>{a.name}</strong></td>
                  <td>{a.city}</td>
                  <td>
                    <span className="tag-field">{a.fieldCategory}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Were you once a part of ADORE? We'd love to reconnect!</p>

        </div>
      </div>
    </main>
  );
};

export default AlumniPage;
