import React, { useState } from 'react';
import volunteersData from '../../data/volunteers.json';

const coreTeam = [
  { id: 1, name: 'Md Rahman', role: 'Team Leader', category: 'Core Team', city: 'Delhi', activities: 'Leading the team and overseeing operations.', photo: '/images/Md Rahman-Team leader.jpg', linkedin: 'https://linkedin.com/in/mdrahman', twitter: 'https://twitter.com/mdrahman' },
  { id: 2, name: 'Sanu Kumar Roy', role: 'Frontend Developer', category: 'Core Team', city: 'Mumbai', activities: 'Developing user interfaces and frontend components.', photo: '/images/sanu kumar roy -Front end developer.jpg', linkedin: 'https://linkedin.com/in/sanukumarroy', twitter: 'https://twitter.com/sanukumarroy' },
  { id: 3, name: 'Suchana Mondal', role: 'Web Developer', category: 'Core Team', city: 'Kolkata', activities: 'Building and maintaining web applications.', photo: '/images/Suchana Mondal-web developer.jpg', linkedin: 'https://linkedin.com/in/suchanamondal', twitter: 'https://twitter.com/suchanamondal' },
  { id: 4, name: 'Shiv Vardhan Singh', role: 'Web Developer', category: 'Core Team', city: 'Jaipur', activities: 'Developing backend services and APIs.', photo: '/images/Shiv vardhan signh sikarwar-web developer.png', linkedin: 'https://linkedin.com/in/shivvardhansingh', twitter: 'https://twitter.com/shivvardhansingh' },
  { id: 5, name: 'Sayan Guha', role: 'Backend Developer', category: 'Core Team', city: 'Bangalore', activities: 'Managing databases and server-side logic.', photo: '/images/Sayan guha -Backend developer.jpg', linkedin: 'https://linkedin.com/in/sayanguha', twitter: 'https://twitter.com/sayanguha' },
  { id: 6, name: 'Sudipta Ghosh', role: 'Backend Developer', category: 'Core Team', city: 'Hyderabad', activities: 'Ensuring system performance and scalability.', photo: '/images/Sudipta ghosh-backend developer.jpg', linkedin: 'https://linkedin.com/in/sudiptaghosh', twitter: 'https://twitter.com/sudiptaghosh' },
  { id: 7, name: 'Bhavani Pampana', role: 'Graphic Designer', category: 'Core Team', city: 'Chennai', activities: 'Creating visual content and designs.', photo: '/images/Bhavani Pampana-Graphic designer.jpg', linkedin: 'https://linkedin.com/in/bhavanipampana', twitter: 'https://twitter.com/bhavanipampana' },
  { id: 8, name: 'Immanuel Kumar', role: 'Graphic Designer', category: 'Core Team', city: 'Pune', activities: 'Designing graphics for marketing and branding.', photo: '/images/Immanuel Kumar-Graphic Designer.jpg', linkedin: 'https://linkedin.com/in/immanuelkumar', twitter: 'https://twitter.com/immanuelkumar' },
];

const allMembers = [
  ...coreTeam,
  ...volunteersData.activeVolunteers.map(v => ({ ...v, category: 'Active Volunteers', role: v.teamName, linkedin: '', twitter: '' })),
  ...volunteersData.alumni.map(v => ({ ...v, category: 'Alumni', role: v.teamName, linkedin: '', twitter: '' })),
  ...volunteersData.associateCenters.map(v => ({ ...v, category: 'Associate Centers', role: v.teamName, linkedin: '', twitter: '' })),
];

const categories = ['All', 'Core Team', 'Active Volunteers', 'Alumni', 'Associate Centers'];

const TeamPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMembers = activeCategory === 'All' ? allMembers : allMembers.filter(member => member.category === activeCategory);

  const groupedMembers = filteredMembers.reduce((acc, member) => {
    if (!acc[member.category]) acc[member.category] = [];
    acc[member.category].push(member);
    return acc;
  }, {});

  return (
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

          {/* Category Filter Buttons */}
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Team Sections */}
          {Object.keys(groupedMembers).map(category => (
            <div key={category} className="team-section">
              <h2 className="team-category-title">{category}</h2>
              <div className="subpage-team-grid">
                {groupedMembers[category].map((member) => (
                  <article key={member.id || member.name} className="subpage-team-card">
                    <img src={member.photo} alt={member.name} className="subpage-team-image" />
                    <div className="subpage-team-copy">
                      <span className="team-category-badge">{member.category}</span>
                      <h3>{member.name}</h3>
                      <p className="role">{member.role}</p>
                      <p className="city">
                        <i className="fas fa-map-marker-alt"></i>
                        {member.city}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
