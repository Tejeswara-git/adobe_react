import React, { useState } from 'react';

const Navbar = ({ scrolled, activeSection }) => {
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen(!navOpen);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <a href="#home" className="nav-logo">
                    <img src="/images/ADORE.png" alt="Adore logo" className="nav-logo-image" />
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
