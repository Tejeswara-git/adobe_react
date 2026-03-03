import React from 'react';

const Participate = () => {
    return (
        <section className="ideas-hub" id="participate">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-tag">Participate</div>
                    <h2 className="section-title">How You Can <span className="gradient-text">Participate</span></h2>
                    <p className="section-subtitle">Join our movement — share your ideas, develop your skills, and launch your dreams.</p>
                </div>

                <div className="ideas-grid">
                    {[
                        { cat: 'Environment', title: 'Solar Purifier', text: 'Low-cost solar purifier for rural villages.', author: 'AM', name: 'Ananya Mehta', subt: 'Age 22, Mumbai', tags: ['Climate', 'Tech'] },
                        { cat: 'Education', title: 'Offline Learning', text: 'Mobile app that works without internet.', author: 'RS', name: 'Rahul Sharma', subt: 'Age 24, Delhi', tags: ['Education', 'Mobile'] },
                        { cat: 'Health', title: 'Mental Health Peer', text: 'Student-run peer support network.', author: 'PK', name: 'Priya Kumar', subt: 'Age 20, Bangalore', tags: ['Health', 'Community'] },
                        { cat: 'Agriculture', title: 'Smart Drip', text: 'Low-cost IoT irrigation solution.', author: 'VP', name: 'Vijay Patil', subt: 'Age 23, Pune', tags: ['AgriTech', 'IoT'] }
                    ].map((idea, i) => (
                        <div key={i} className="idea-card">
                            <div className="idea-category">{idea.cat}</div>
                            <h4>{idea.title}</h4>
                            <p>{idea.text}</p>
                            <div className="idea-author">
                                <div className="author-avatar">{idea.author}</div>
                                <div>
                                    <strong>{idea.name}</strong>
                                    <span>{idea.subt}</span>
                                </div>
                            </div>
                            <div className="idea-tags">
                                {idea.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="ideas-cta">
                    <div className="ideas-cta-box" style={{ position: 'relative', overflow: 'hidden' }}>
                        <img src="/images/7.png" alt="Background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15, zIndex: 0, pointerEvents: 'none' }} />
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h3>Have a Brilliant Idea?</h3>
                            <p>Share it with our community! Every world-winning movement started with a single idea.</p>
                            <a href="#contact" className="btn-primary">Submit Your Idea ✨</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Participate;
