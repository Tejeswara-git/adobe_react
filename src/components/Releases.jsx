import React from 'react';

const Releases = () => {
    return (
        <section className="team" id="releases">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-tag">Releases</div>
                    <h2 className="section-title">Our Latest <span className="gradient-text">Releases</span></h2>
                    <p className="section-subtitle">Stay updated with our latest project launches, reports, and community announcements.</p>
                </div>

                <div className="team-grid">
                    {[
                        { name: 'Meera Joshi', role: 'Founder', text: '15 years of experience in social entrepreneurship.', img: '/images/a3.jpg' },
                        { name: 'Arjun Kapoor', role: 'Head of Programs', text: 'Former educator passionate about building youth programs.', img: '/images/a4.jpg' },
                        { name: 'Sneha Rao', role: 'Community Manager', text: 'Expert in building vibrant communities.', img: '/images/volunteer 1.jpg' },
                        { name: 'Dev Malhotra', role: 'Tech Lead', text: 'Helping youth leverage technology for good.', img: '/images/volunteer 2.jpg' }
                    ].map((member, i) => (
                        <div key={i} className="team-card">
                            <div className="team-avatar">
                                <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h4>{member.name}</h4>
                            <span className="team-role">{member.role}</span>
                            <p>{member.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Releases;
