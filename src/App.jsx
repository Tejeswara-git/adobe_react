import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Programs from './components/Programs';
import Participate from './components/Participate';
import Activities from './components/Activities';
import Releases from './components/Releases';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './components/pages/AboutPage';
import TeamPage from './components/pages/TeamPage';
import YoungLeadersPage from './components/pages/YoungLeadersPage';
import WebinarsPage from './components/pages/WebinarsPage';
import WorkshopsPage from './components/pages/WorkshopsPage';
import ESessionsPage from './components/pages/ESessionsPage';
import SunshinePage from './components/pages/SunshinePage';
import WorkshopClgStudent from './components/pages/WorkshopClgStudent';
import WorkshopSchool from './components/pages/WorkshopSchool';
import WorkshopSenior from './components/pages/WorkshopSenior';
import WorkshopHomemaker from './components/pages/WorkshopHomemaker';
import BooksPage from './components/pages/Books';

const pageRoutes = {
  '/about': AboutPage,
  '/team': TeamPage,
  '/young-leaders': YoungLeadersPage,
  '/webinars': WebinarsPage,
  '/workshops': WorkshopsPage,
  '/e-sessions': ESessionsPage,
  '/sunshine': SunshinePage,
  '/our-books': BooksPage,
  '/workshop-college': WorkshopClgStudent,
  '/workshop-school': WorkshopSchool,
  '/workshop-senior': WorkshopSenior,
  '/workshop-homemakers': WorkshopHomemaker,
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [countersStarted, setCountersStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => window.location.hash || '#home');

  const heroStatsRef = useRef(null);
  const impactGridRef = useRef(null);
  const activitiesRef = useRef(null);

  const isSubpage = currentPage.startsWith('#/');
  const currentRoute = currentPage.replace('#', '');
  const CurrentPageComponent = pageRoutes[currentRoute];

  useEffect(() => {
    const handleHashChange = () => {
      const nextHash = window.location.hash || '#home';
      setCurrentPage(nextHash);
      setActiveSection('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      if (window.location.hash.startsWith('#/')) {
        return;
      }

      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) current = section.id;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    let heroTimer;
    if (!isSubpage) {
      heroTimer = setTimeout(() => {
        if (heroStatsRef.current) initCounters(heroStatsRef.current);
      }, 800);
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    const revealTargets = [
      '.program-card', '.idea-card', '.impact-card', '.team-card',
      '.contact-item', '.about-content', '.about-visual',
      '.section-header', '.ideas-cta-box', '.volunteer-form',
    ];

    if (!isSubpage) {
      document.querySelectorAll(revealTargets.join(', ')).forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${(i % 5) * 0.1}s`;
        revealObserver.observe(el);
      });
    }

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
          if (impactGridRef.current) initCounters(impactGridRef.current);
          if (heroStatsRef.current) initCounters(heroStatsRef.current);
        }
      });
    }, { threshold: 0.3 });

    if (!isSubpage && activitiesRef.current) {
      counterObserver.observe(activitiesRef.current);
    }

    const particlesContainer = document.getElementById('particles');
    if (!isSubpage && particlesContainer && particlesContainer.childElementCount === 0) {
      for (let i = 0; i < 30; i += 1) {
        const p = document.createElement('span');
        const size = Math.random() * 4 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 15 + 8;
        const delay = Math.random() * 8;
        const opacity = Math.random() * 0.4 + 0.1;

        p.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: ${Math.random() > 0.5 ? '#7C3AED' : '#F97316'};
          border-radius: 50%;
          left: ${x}%;
          top: ${y}%;
          opacity: ${opacity};
          animation: particleFloat ${duration}s ${delay}s ease-in-out infinite alternate;
          pointer-events: none;
        `;
        particlesContainer.appendChild(p);
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(heroTimer);
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, [countersStarted, isSubpage]);

  const initCounters = (container) => {
    const counters = container.querySelectorAll('[data-target]');
    counters.forEach((counter) => {
      const target = parseInt(counter.dataset.target, 10);
      animateCounter(counter, target);
    });
  };

  const animateCounter = (el, target, duration = 2000) => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        el.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start).toLocaleString();
      }
    }, 16);
  };

  return (
    <div className="App">
      <Navbar scrolled={scrolled} activeSection={activeSection} currentPage={currentRoute} />
      {isSubpage && CurrentPageComponent ? (
        <CurrentPageComponent />
      ) : (
        <>
          <Hero ref={heroStatsRef} />
          <Marquee />
          <About />
          <Programs />
          <Participate />
          <Activities ref={activitiesRef} impactGridRef={impactGridRef} />
          <Releases />
          <Contact />
        </>
      )}
      <Footer />

      <button
        className={`back-to-top ${scrolled ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

export default App;
