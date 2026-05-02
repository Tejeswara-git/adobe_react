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
                            <li><a href="#/young-leaders">Young Leader</a></li>
                            <li><a href="#/all-webinars">All Webinars</a></li>
                            <li><a href="#/webinars">Upcoming Webinar</a></li>
                            <li><a href="#/e-sessions">E-Session</a></li>
                            <li><a href="#/workshop-college">Workshops</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h5>Organisation</h5>
                        <ul>
                            <li><a href="#/about">About Us</a></li>
                            <li><a href="#/team">Team</a></li>
                            <li><a href="#/blogs">Blogs</a></li>
                            <li><a href="#/active-volunteer">Active Volunteers</a></li>
                            <li><a href="#/contact">Contact</a></li>
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
                    <p>© Copyright adoreglobal.org</p>
                    <p>Powered by Simtrak Solutions</p>
                    <div className="footer-bottom-links">
                        <a href="#home">Privacy Policy</a>
                        <a href="#home">Terms of Use</a>
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
            </div>
        </footer>
    );
};

export default Footer;
