import React from 'react';

const SecondaryNavbar = ({ scrolled, currentPage }) => {
  const navItems = [
    { label: 'Webinars', href: '#/webinars', page: '/webinars' },
    { label: 'Active Volunteer', href: '#/active-volunteer', page: '/active-volunteer' },
    { label: 'Alumni', href: '#/alumni', page: '/alumni' },
    { label: 'Associate Center', href: '#/associate-center', page: '/associate-center' },
  ];

  return (
    <nav className={`secondary-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="secondary-nav-container">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`secondary-nav-link ${currentPage === item.page ? 'active' : ''}`}
          >
            <span className="nav-dot"></span>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
