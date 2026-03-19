import React, { useState, useEffect } from 'react';

const Navbar = ({scrolled, activeSection }) => {
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen(!navOpen);
     const [hideTopBar, setHideTopBar] = useState(false);


      useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setHideTopBar(true);   // hide top bar
            } else {
                setHideTopBar(false);  // show top bar
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (


         <>
           
            <div className={`top-bar ${hideTopBar ? 'hide' : ''}`}>
                <div className="top-left">
    <a href="/https://adore.ivdata.in/signup.php?grp=GRP61&zone=Subscribers" className="top-btn">Newsletters</a>
    <a href="/https://adore.ivdata.in/" className="top-btn">Login</a>
</div>


                <div className="top-center">
                    Visit our latest <span>Webinars and Activities!</span>
                </div>

                
<div className="top-right">
    <a href="https://api.whatsapp.com/send/?phone=%2B917980460134&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
    </a>
    <a href="https://www.facebook.com/adoreearth/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
    </a>
    <a href="https://www.instagram.com/adoretheearth/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
    </a>
    <a href="https://www.youtube.com/channel/UCnmuSy5FJ64zojXAP2P3ttQ/featured" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
    </a>
    <a href="https://www.linkedin.com/company/adore-official/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://x.com/AdoreEarth?t=kvxEaXb3QtcK41czb9itsA&s=08" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
    </a>
</div>
            </div>



        <nav className= {`navbar ${scrolled ? 'scrolled' : ''} ${hideTopBar ? 'top' : ''}`} id="navbar">
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
        </>
    );
};

export default Navbar;
