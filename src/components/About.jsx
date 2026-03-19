import React, { useState } from 'react';

const About = () => {
    const [teamOpen, setTeamOpen] = useState(false);

    return (
        <section className="about" id="about">
            <div className="section-container">
                <div className="about-grid">
                    <div className="about-visual">
                        <div className="about-img-wrapper">
                            <div className="about-illustration">
                                <img src="/images/adobe1.jpg" alt="About Adore" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '30px' }} />
                            </div>
                            <div className="about-badge-float">
                                <span className="badge-emoji">🏆</span>
                                <div>
                                    <strong>Top NGO 2024</strong>
                                    <span>Youth Empowerment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-content">
                        <div
                            className="section-tag"
                            style={{ fontSize: '1.5rem', display: 'block', width: 'fit-content', margin: '0 auto 1rem' }}
                        >
                            About Adore
                        </div>
                        <h2 className="section-title">We Believe Every Youth Has a <span className="gradient-text">Brilliant Idea</span></h2>

                        <p className="about-text">
                            Founded in 2014, ADORE is a worldwide voluntary organization comprised of college students and professionals working collaboratively to inspire and guide the youth towards positive action. Our global network of volunteers passionately contributes their time and expertise without any financial transactions, emphasizing our commitment to selfless service. The interactive sessions span diverse topics, encompassing areas such as Cleanliness, Soft Skills, Career Orientation, and Self-Development. Through these sessions, we aspire to empower and motivate young individuals to make impactful and positive contributions to society.
                        </p>
                        <div className="about-values">
                            <div className="value-chip">🌟 Inspire</div>
                            <div className="value-chip">💡 Innovate</div>
                            <div className="value-chip">🤝 Collaborate</div>
                            <div className="value-chip">🚀 Launch</div>
                        </div>

                        {/* Buttons row */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="#programs" className="btn-primary">Learn More →</a>

                            {/* Team accordion trigger */}
                            <button
                                onClick={() => setTeamOpen(!teamOpen)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '12px 24px',
                                    border: `2px solid ${teamOpen ? 'var(--purple)' : 'rgba(124,58,237,0.35)'}`,
                                    borderRadius: '100px',
                                    background: teamOpen ? 'var(--purple)' : 'transparent',
                                    color: teamOpen ? 'white' : 'var(--purple)',
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                👥 Team
                                <span style={{
                                    display: 'inline-block',
                                    transition: 'transform 0.35s ease',
                                    transform: teamOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    fontSize: '0.8rem',
                                }}>▾</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Team images — horizontal dropdown accordion */}
                <div style={{
                    maxHeight: teamOpen ? '400px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '1rem',
                        paddingTop: '2rem',
                        paddingBottom: '0.5rem',
                    }}>
                        {[
                            '/images/team1.png',
                            '/images/team2.jpg',
                            '/images/team3.jpg',
                            '/images/team4.jpg',
                            '/images/team5.jpg',
                            '/images/team6.jpg',
                        ].map((src, i) => (
                            <div key={i} style={{
                                flex: '1 1 0',
                                borderRadius: '14px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.14)',
                                border: '1px solid rgba(124,58,237,0.15)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(124,58,237,0.2)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.14)'; }}
                            >
                                <img
                                    src={src}
                                    alt={`Team ${i + 1}`}
                                    style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }}
                                />
                                <div style={{
                                    padding: '10px 12px',
                                    textAlign: 'center',
                                    fontWeight: 600,
                                    fontSize: '0.85rem',
                                    color: 'var(--text-primary)',
                                    background: 'var(--bg-card)',
                                }}>
                                    Team {i + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
