import React, { forwardRef } from 'react';

const Hero = forwardRef((props, ref) => {
    return (
        <section className="hero" id="home">
            <div className="hero-bg">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
                <div className="particles" id="particles"></div>
            </div>

            <div className="hero-container">
                <div className="hero-badge">
                    <span className="badge-dot"></span>
                    Empowering Youth Since 2015
                </div>
                <h1 className="hero-title">
                    Share Ideas.<br />
                    <span className="gradient-text">Inspire</span> the Future.
                </h1>
                <p className="hero-subtitle">
                    Adore is a youth-driven NGO dedicated to igniting creativity,
                    fostering bold ideas, and building a generation of passionate
                    changemakers who dare to dream differently.
                </p>
                <div className="hero-actions">
                    <a href="#programs" className="btn-primary">Explore Programs</a>
                    <a href="#participate" className="btn-secondary">Share Your Idea</a>
                </div>

                <div className="hero-stats" ref={ref}>
                    <div className="stat-item">
                        <span className="stat-number" data-target="12000">0</span>
                        <span className="stat-suffix">+</span>
                        <span className="stat-label">Youth Inspired</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number" data-target="350">0</span>
                        <span className="stat-suffix">+</span>
                        <span className="stat-label">Ideas Funded</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number" data-target="48">0</span>
                        <span className="stat-suffix"></span>
                        <span className="stat-label">Cities Reached</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number" data-target="95">0</span>
                        <span className="stat-suffix">%</span>
                        <span className="stat-label">Success Rate</span>
                    </div>
                </div>
            </div>

            <div className="hero-visual">
                <div className="floating-card card-1">
                    <div className="fc-icon">💡</div>
                    <div className="fc-text">
                        <strong>New Idea Posted</strong>
                        <span>Sustainable farming solution</span>
                    </div>
                </div>
                <div className="floating-card card-2">
                    <div className="fc-icon">🚀</div>
                    <div className="fc-text">
                        <strong>Project Launched!</strong>
                        <span>EdTech for rural schools</span>
                    </div>
                </div>
                <div className="floating-card card-3">
                    <div className="fc-icon">🌟</div>
                    <div className="fc-text">
                        <strong>Youth Award</strong>
                        <span>Innovation of the Year</span>
                    </div>
                </div>

            </div>
        </section>
    );
});

export default Hero;
