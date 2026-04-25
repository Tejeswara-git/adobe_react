import React from 'react';

const YipsPage = () => {
  return (
    <div className="yips-page">
      {/* Hero Section */}
      <section className="yips-hero">
        <div className="section-container yips-hero-content">
          <div className="yips-hero-text">
            <span className="section-tag light">Youth Involvement Program</span>
            <h1 className="section-title light">
              Welcome to <span className="gradient-text">YIPs</span>
            </h1>
            <p className="section-subtitle light">
              A platform for youth to engage, learn, and contribute through volunteering and internship opportunities.
              YIPs enables individuals to gain practical experience, develop skills, and actively participate in meaningful initiatives.
            </p>
            <div className="yips-hero-actions">
              <a href="#contact" className="btn-primary">Apply Now</a>
              <a href="#contact" className="btn-secondary" style={{color: '#0f172a', borderColor: '#0f172a'}}>Join YIPs</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why YIPs? */}
      <section className="yips-section" id="why-yips">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Why YIPs?</h2>
            <p className="section-subtitle">
              YIPs is designed to help young individuals move beyond theoretical learning and gain real-world exposure through active involvement.
            </p>
          </div>
          <div className="yips-grid why-grid">
            <div className="yips-card">
              <div className="yips-card-icon">🚀</div>
              <h3>Build Practical Skills</h3>
              <p>Enhance your abilities and confidence through hands-on projects.</p>
            </div>
            <div className="yips-card">
              <div className="yips-card-icon">💼</div>
              <h3>Gain Experience</h3>
              <p>Work on real tasks and responsibilities that matter.</p>
            </div>
            <div className="yips-card">
              <div className="yips-card-icon">🤝</div>
              <h3>Collaborative Environment</h3>
              <p>Work in a purpose-driven and supportive team setting.</p>
            </div>
            <div className="yips-card">
              <div className="yips-card-icon">🌍</div>
              <h3>Meaningful Initiatives</h3>
              <p>Contribute to projects that create a positive impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Available */}
      <section className="yips-section alt-bg" id="opportunities">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Explore</span>
            <h2 className="section-title">Opportunities Available</h2>
            <p className="section-subtitle">Participants can explore different areas based on their interests:</p>
          </div>
          <div className="yips-grid opp-grid">
            <div className="yips-card feature">
              <div className="yips-card-icon">🤲</div>
              <h3>Volunteering Opportunities</h3>
              <p>Contribute to events, programs, and community initiatives.</p>
            </div>
            <div className="yips-card feature">
              <div className="yips-card-icon">🎓</div>
              <h3>Internships</h3>
              <p>Work in structured roles across various professional fields.</p>
            </div>
            <div className="yips-card feature">
              <div className="yips-card-icon">🗣️</div>
              <h3>Community Engagement</h3>
              <p>Participate in awareness drives and impactful activities.</p>
            </div>
            {/* <div className="yips-card feature">
              <div className="yips-card-icon">👥</div>
              <h3>Team-Based Roles</h3>
              <p>Collaborate with dynamic teams on ongoing projects.</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="yips-section" id="how-it-works">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Process</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">A simple pathway to get involved and start making a difference.</p>
          </div>
          <div className="yips-steps-container">
            {[
              { num: '1', title: 'Apply', desc: 'Register your interest via our form.' },
              { num: '2', title: 'Selection', desc: 'Based on your profile and interest areas.' },
              { num: '3', title: 'Onboarding', desc: 'Get introduced to roles and responsibilities.' },
              { num: '4', title: 'Work & Learn', desc: 'Gain hands-on experience through tasks.' },
              { num: '5', title: 'Recognition', desc: 'Receive certificates and acknowledgments.' },
            ].map((step, idx) => (
              <div key={idx} className="yips-step">
                <div className="yips-step-num">{step.num}</div>
                <div className="yips-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Gain & Who Can Apply */}
      <section className="yips-section alt-bg" id="benefits">
        <div className="section-container">
          <div className="yips-split-layout">
            <div className="yips-split-card">
              <h2 className="yips-split-title">What You Gain</h2>
              <ul className="yips-list">
                <li><span>✅</span> Real-world experience</li>
                <li><span>✅</span> Skill development across domains</li>
                <li><span>✅</span> Mentorship and guidance</li>
                <li><span>✅</span> Certificate of participation / internship</li>
                <li><span>✅</span> Exposure to professional work environment</li>
              </ul>
            </div>
            <div className="yips-split-card">
              <h2 className="yips-split-title">Who Can Apply?</h2>
              <ul className="yips-list">
                <li><span>👤</span> Students and young individuals (15–25 years)</li>
                <li><span>👤</span> Anyone interested in volunteering or internships</li>
                <li><span>👤</span> Individuals willing to learn, contribute, and grow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Start Your Journey */}
      <section className="yips-cta-section">
        <div className="section-container yips-cta-content">
          <h2>Start Your Journey</h2>
          <p>Take your first step towards gaining experience and making a difference.</p>
          <div className="yips-cta-buttons">
            <a href="#contact" className="btn-primary">Apply Now</a>
            <a href="#contact" className="btn-secondary" style={{color: 'white', borderColor: 'rgba(255,255,255,0.4)'}}>Become a Volunteer / Intern</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YipsPage;
