import React, { useState, useEffect } from 'react';
import webinarDataFallback from '../../backend_dynamic/webinars.json';

const WebinarsPage = () => {
  const getInitialTab = () => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.split('?')[1]);
    const type = params.get('type');
    return (type === 'upcoming' || type === 'past') ? type : 'upcoming';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());
  const [webinars, setWebinars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const API_URL = 'http://localhost:5000/api/webinars';

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.split('?')[1]);
      const type = params.get('type');
      if (type && (type === 'upcoming' || type === 'past')) {
        setActiveTab(type);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    fetchWebinars();
  }, [activeTab]);

  const fetchWebinars = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?type=${activeTab}`);
      if (response.ok) {
        const data = await response.json();
        setWebinars(data);
      } else {
        // Fallback to local JSON if API fails
        setWebinars(webinarDataFallback[activeTab]);
      }
    } catch (error) {
      console.error('Error fetching webinars:', error);
      setWebinars(webinarDataFallback[activeTab]);
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterClick = (webinar) => {
    setSelectedWebinar(webinar);
    setShowModal(true);
    setIsSuccess(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          webinarId: selectedWebinar._id || selectedWebinar.id,
          ...formData
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '' });
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Could not connect to the server. Please check if the backend is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="subpage">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">Learning</div>
          <h1 className="section-title">
            ADORE <span className="gradient-text">Webinars</span>
          </h1>
          <p className="section-subtitle">
            Join our interactive sessions led by experts to learn, grow, and contribute to society.
          </p>
        </div>

        <div className="tab-nav">
          <button 
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => {
              window.location.hash = '#/webinars?type=upcoming';
              setActiveTab('upcoming');
            }}
          >
            Upcoming Webinars
          </button>
          <button 
            className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => {
              window.location.hash = '#/webinars?type=past';
              setActiveTab('past');
            }}
          >
            Past Webinars
          </button>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <div className="empty-visual">
               <div className="empty-circle"></div>
               <div className="empty-circle"></div>
               <div className="empty-circle"></div>
            </div>
            <p>Loading webinars...</p>
          </div>
        ) : (
          <div className="webinars-grid">
            {webinars.map((webinar) => (
              <article key={webinar._id || webinar.id} className="webinar-card">
                <img src={webinar.poster} alt={webinar.title} className="webinar-poster" />
                <div className="webinar-content">
                  <div className="webinar-tag">{activeTab === 'upcoming' ? 'Upcoming' : 'Past'}</div>
                  <h3 className="webinar-title">{webinar.title}</h3>
                  <div className="webinar-info">
                    <div className="webinar-meta">
                      <i className="fas fa-user"></i>
                      <span>Speaker: <strong>{webinar.speaker}</strong></span>
                    </div>
                    <div className="webinar-meta">
                      <i className="fas fa-calendar-alt"></i>
                      <span>{webinar.date} {webinar.time && `| ${webinar.time}`}</span>
                    </div>
                  </div>
                  {activeTab === 'upcoming' ? (
                    <div className="webinar-actions" style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                      <button 
                        className="btn-primary" 
                        style={{ flex: 1 }}
                        onClick={() => handleRegisterClick(webinar)}
                      >
                        Register Now
                      </button>
                      {webinar.reportUrl && (
                        <a 
                          href={webinar.reportUrl} 
                          className="btn-secondary" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ flex: 1, textAlign: 'center', textDecoration: 'none', padding: '0.6rem', borderRadius: '8px', fontSize: '0.9rem' }}
                        >
                          Webinar Report
                        </a>
                      )}
                    </div>
                  ) : (
                    <>
                      <p className="webinar-summary" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: '1rem' }}>
                        {webinar.summary}
                      </p>
                      <div className="webinar-actions" style={{ display: 'flex', gap: '0.5rem' }}>
                        {webinar.watchUrl && (
                          <a 
                            href={webinar.watchUrl} 
                            className="btn-primary" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ flex: 1, textAlign: 'center', textDecoration: 'none', padding: '0.6rem', borderRadius: '8px', fontSize: '0.9rem' }}
                          >
                            Watch Now
                          </a>
                        )}
                        {webinar.reportUrl && (
                          <a 
                            href={webinar.reportUrl} 
                            className="btn-secondary" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ flex: 1, textAlign: 'center', textDecoration: 'none', padding: '0.6rem', borderRadius: '8px', fontSize: '0.9rem' }}
                          >
                            Webinar Report
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>&times;</button>
            <div className="modal-title-box">
              <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                Register for Webinar
              </h2>
              <p className="modal-subtitle">
                {selectedWebinar?.title} with {selectedWebinar?.speaker}
              </p>
            </div>

            {isSuccess ? (
              <div className="success-message" style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', color: 'var(--green)', marginBottom: '1rem' }}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3>Registration Successful!</h3>
                <p>We've sent the webinar details to your email. Your data has been saved to MongoDB.</p>
                <button 
                  className="btn-primary" 
                  style={{ marginTop: '2rem' }}
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            ) : (
              <form className="volunteer-form" style={{ padding: 0, background: 'none', boxShadow: 'none' }} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="reg-name">Full Name</label>
                  <input 
                    type="text" 
                    id="reg-name" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="reg-email">Email Address</label>
                  <input 
                    type="email" 
                    id="reg-email" 
                    name="email" 
                    placeholder="your@email.com" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="reg-phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="reg-phone" 
                    name="phone" 
                    placeholder="Your Phone" 
                    required 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  By registering, you agree to receive webinar reminders and future event updates.
                </p>
                <button type="submit" className="btn-primary full-width" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : 'Confirm Registration'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default WebinarsPage;
