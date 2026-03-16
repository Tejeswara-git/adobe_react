import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#home" className="nav-logo">
                            <img src="/images/ADORE.png" alt="Adore logo" className="footer-logo-image" />
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
