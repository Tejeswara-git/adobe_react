import React, { useState } from 'react';

const Navbar = ({ scrolled, activeSection }) => {
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen(!navOpen);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <a href="#home" className="nav-logo">
                    <div className="logo-icon">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <circle cx="18" cy="18" r="18" fill="url(#logoGrad)" />
                            <path d="M18 8 L26 20 H10 Z" fill="white" opacity="0.9" />
                            <circle cx="18" cy="24" r="4" fill="white" opacity="0.7" />
                            <defs>
                                <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36">
                                    <stop offset="0%" stopColor="#7C3AED" />
                                    <stop offset="100%" stopColor="#F97316" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span className="logo-text">Adore</span>
                </a>

                <div className={`nav-links ${navOpen ? 'open' : ''}`} id="nav-links">
                    <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => setNavOpen(false)}>Home</a>
                    <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => setNavOpen(false)}>About</a>
                    <a href="#programs" className={`nav-link ${activeSection === 'programs' ? 'active' : ''}`} onClick={() => setNavOpen(false)}>Programs</a>
                    <a href="#participate" className={`nav-link ${activeSection === 'participate' ? 'active' : ''}`} onClick={() => setNavOpen(false)}>Participate</a>
                    <a href="#activities" className={`nav-link ${activeSection === 'activities' ? 'active' : ''}`} onClick={() => setNavOpen(false)}>Activities</a>
                    <a href="#releases" className={`nav-link ${activeSection === 'releases' ? 'active' : ''}`} onClick={() => setNavOpen(false)}>Releases</a>
                    <a href="#contact" className="nav-link" id="nav-volunteer" onClick={() => setNavOpen(false)}>Join as a Volunteer</a>
                </div>

                <div className="nav-actions">
                    <button className="hamburger" id="hamburger" aria-label="Toggle menu" onClick={toggleNav}>
                        <span style={{ transform: navOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }}></span>
                        <span style={{ opacity: navOpen ? '0' : '1' }}></span>
                        <span style={{ transform: navOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }}></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
