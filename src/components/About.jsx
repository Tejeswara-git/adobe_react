import React from 'react';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="section-container">
                <div className="about-grid">
                    <div className="about-visual">
                        <div className="about-img-wrapper">
                            <div className="about-illustration">
                                <img src="/images/adobe1.jpg" alt="About Adore" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px' }} />
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
                            ADORE is a global voluntary group of college students and professionals, who have come forward together to motivate the budding youth into taking positive action.
                        </p>
                        <p className="about-text">
                            Founded in 2015, Adore provides a safe, inspiring platform where young people can share, develop, and launch ideas that create meaningful change in their communities and beyond.
                        </p>
                        <div className="about-values">
                            <div className="value-chip">🌟 Inspire</div>
                            <div className="value-chip">💡 Innovate</div>
                            <div className="value-chip">🤝 Collaborate</div>
                            <div className="value-chip">🚀 Launch</div>
                            <div className="value-chip">🌍 Impact</div>
                        </div>
                        <a href="#programs" className="btn-primary">Learn More →</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
