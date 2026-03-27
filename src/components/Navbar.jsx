import React, { useEffect, useRef, useState } from 'react';

const dropdownMenus = [
  {
    label: 'About',
    href: '#about',
    key: 'about',
    items: [
      { label: 'About', href: '#/about', page: '/about' },
      { label: 'Team', href: '#/team', page: '/team' },
    ],
  },
  {
    label: 'Programs',
    href: '#programs',
    key: 'programs',
    items: [
      { label: 'Young Leaders', href: '#/young-leaders', page: '/young-leaders' },
      { label: 'Webinars', href: '#/webinars', page: '/webinars' },
      { label: 'Workshops', href: '#/workshops', page: '/workshops' },
      { label: 'E-Sessions', href: '#/e-sessions', page: '/e-sessions' },
      { label: 'AD Sunshine', href: '#/sunshine', page: '/sunshine' },
    ],
  },
  {
    label: 'Participate',
    href: '#participate',
    key: 'participate',
    items: [
      { label: 'Workshop for College Students', href: '#/workshop-college', page: '/workshop-college' },
      { label: 'Workshop for School Students', href: '#/workshop-school', page: '/workshop-school' },
      { label: 'Workshop for Homemakers', href: '#/workshop-homemakers', page: '/workshop-homemakers' },
      { label: 'Workshop for Senior Citizens', href: '#/workshop-senior', page: '/workshop-senior' },
      { label: 'Workshop for Others', href: '#/workshop-others', page: '/workshop-others' },
    ],
  },
  {
    label: 'Activities',
    href: '#activities',
    key: 'activities',
    items: [
      { label: 'Upcoming Activities', href: '#/upcoming-activities', page: '/upcoming-activities' },
      { label: 'Past Activities', href: '#/past-activities', page: '/past-activities' },
    ],
  },
  {
    label: 'Releases',
    href: '#releases',
    key: 'releases',
    items: [
      { label: 'Blogs', href: '#/blogs', page: '/blogs' },
      { label: 'Our Books', href: '#/our-books', page: '/our-books' },
      { label: 'Reflections', href: '#/reflections', page: '/reflections' },
      { label: "Adorable Kids' Magazine", href: '#/adorable-kids-magazine', page: '/adorable-kids-magazine' },
      { label: 'Growing Together', href: '#/growing-together', page: '/growing-together' },
      { label: 'Publications Newsletter', href: '#/publications-newsletter', page: '/publications-newsletter' },
      { label: "YIP's", href: '#/yips', page: '/yips' },
    ],
  },
];

const Navbar = ({ scrolled, activeSection, currentPage }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hideTopBar, setHideTopBar] = useState(false);
  const closeTimer = useRef(null);

<<<<<<< HEAD
  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 50);
    };
=======
      useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setHideTopBar(true);   
            } else {
                setHideTopBar(false);  
            }
        };
>>>>>>> b3c43b161ee10cac4ce98cd0283d831fcb027e65

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setNavOpen(false);
    setOpenDropdown(null);
  }, [currentPage]);

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleDropdown = (key) => setOpenDropdown(openDropdown === key ? null : key);

<<<<<<< HEAD
  const handleMouseEnter = (key) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 1000);
  };

  const isDropdownActive = (menu) => (
    activeSection === menu.key || menu.items.some((item) => item.page === currentPage)
  );

  return (
    <>
      <div className={`top-bar ${hideTopBar ? 'hide' : ''}`}>
        <div className="top-left">
          <a href="https://adore.ivdata.in/signup.php?grp=GRP61&zone=Subscribers" className="top-btn">Newsletters</a>
          <a href="https://adore.ivdata.in/" className="top-btn">Login</a>
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

      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${hideTopBar ? 'top' : ''}`} id="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            <img src="/images/ADORE.png" alt="Adore logo" className="nav-logo-image" />
          </a>

          <div className={`nav-links ${navOpen ? 'open' : ''}`} id="nav-links">
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => setNavOpen(false)}>Home</a>

            {dropdownMenus.map((menu) => (
              <div
                key={menu.key}
                className={`nav-dropdown ${isDropdownActive(menu) ? 'active' : ''} ${openDropdown === menu.key ? 'open' : ''}`}
                onMouseEnter={() => handleMouseEnter(menu.key)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`nav-link nav-dropdown-toggle ${isDropdownActive(menu) ? 'active' : ''}`}>
                  <a href={menu.href} onClick={() => setNavOpen(false)}>{menu.label}</a>
                  <button
                    type="button"
                    className="nav-dropdown-button"
                    aria-label={`Toggle ${menu.label} menu`}
                    onClick={() => toggleDropdown(menu.key)}
                  >
                    <span className="nav-caret">▾</span>
                  </button>
=======
         <>
           
            <div className={`top-bar ${hideTopBar ? 'hide' : ''}`}>
                {/* <div className="top-left">
    <a href="https://adore.ivdata.in/signup.php?grp=GRP61&zone=Subscribers" className="top-btn">Newsletters</a>
    <a href="https://adore.ivdata.in/" className="top-btn">Login</a>
</div> */}


                <div className="top-left">
                    Visit our latest <span>Webinars and Activities!</span>
>>>>>>> b3c43b161ee10cac4ce98cd0283d831fcb027e65
                </div>

                <div className="nav-dropdown-menu">
                  {menu.items.map((item) => (
                    <a
                      key={item.page}
                      href={item.href}
                      className={`nav-dropdown-item ${currentPage === item.page ? 'active' : ''}`}
                      onClick={() => {
                        setNavOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}


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
