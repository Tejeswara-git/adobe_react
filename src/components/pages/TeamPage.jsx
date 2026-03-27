import React from 'react';

const teamMembers = [
  { src: '/images/Md Rahman-Team leader.jpg', name: 'Md Rahman', role: 'Team Leader' },
  { src: '/images/sanu kumar roy -Front end developer.jpg', name: 'Sanu Kumar Roy', role: 'Frontend Developer' },
  { src: '/images/Suchana Mondal-web developer.jpg', name: 'Suchana Mondal', role: 'Web Developer' },
  { src: '/images/Shiv vardhan signh sikarwar-web developer.png', name: 'Shiv Vardhan Singh', role: 'Web Developer' },
  { src: '/images/Sayan guha -Backend developer.jpg', name: 'Sayan Guha', role: 'Backend Developer' },
  { src: '/images/Sudipta ghosh-backend developer.jpg', name: 'Sudipta Ghosh', role: 'Backend Developer' },
  { src: '/images/Bhavani Pampana-Graphic designer.jpg', name: 'Bhavani Pampana', role: 'Graphic Designer' },
  { src: '/images/Immanuel Kumar-Graphic Designer.jpg', name: 'Immanuel Kumar', role: 'Graphic Designer' },
];

const TeamPage = () => (
  <main className="subpage">
    <section className="subpage-hero">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">Team</div>
          <h1 className="section-title">
            Meet the <span className="gradient-text">ADORE Team</span>
          </h1>
          <p className="section-subtitle">
            The organization is supported by volunteers across design, development, outreach, and leadership.
          </p>
        </div>
        <div className="subpage-team-grid">
          {teamMembers.map((member) => (
            <article key={member.name} className="subpage-team-card">
              <img src={member.src} alt={member.name} className="subpage-team-image" />
              <div className="subpage-team-copy">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default TeamPage;
