import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#home" className="nav-logo">
                            <div className="logo-icon">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                                    <circle cx="18" cy="18" r="18" fill="url(#fLogoGrad)" />
                                    <circle cx="18" cy="24" r="4" fill="white" opacity="0.7" />
                                    <defs>
                                        <linearGradient id="fLogoGrad" x1="0" y1="0" x2="36" y2="36">
                                            <stop offset="0%" stopColor="#7C3AED" />
                                            <stop offset="100%" stopColor="#F97316" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className="logo-text">Adore</span>
                        </a>
                        <p>ADORE is a global voluntary group of college students and professionals, who have come forward together to motivate the budding youth into taking positive action.</p>
                        <p className="footer-reg">Registered Non-profit Organisation</p>
                    </div>

                    <div className="footer-links-group">
                        <h5>Programs</h5>
                        <ul>
                            <li><a href="#programs">Idea Incubator</a></li>
                            <li><a href="#programs">Leadership Camp</a></li>
                            <li><a href="#programs">Green Futures</a></li>
                            <li><a href="#programs">Creative Arts Hub</a></li>
                            <li><a href="#programs">Tech for Good</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h5>Organisation</h5>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#releases">Releases</a></li>
                            <li><a href="#activities">Impact</a></li>
                            <li><a href="#participate">Participate</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h5>Stay Connected</h5>
                        <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1rem' }}>Get updates.</p>
                        <div className="footer-newsletter">
                            <input type="email" placeholder="Email" />
                            <button>→</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 Adore NGO. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#home">Privacy Policy</a>
                        <a href="#home">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
