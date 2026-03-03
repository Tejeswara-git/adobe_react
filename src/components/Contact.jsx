import React, { useState } from 'react';

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setFormSubmitted(true);
            e.target.reset();
            setTimeout(() => setFormSubmitted(false), 4000);
        }, 1500);
    };

    return (
        <section className="contact" id="contact">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-tag">Volunteer</div>
                    <h2 className="section-title">Join Our <span className="gradient-text">Movement</span></h2>
                    <p className="section-subtitle">
                        Thank you for showing interest in associating with Adore. Please fill this form so that we can contact you according to your interest.
                        Please do visit our website too. (Please Note : This is an unpaid internship/ volunteering)
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-item" style={{ background: 'none', border: 'none', padding: 0, marginBottom: '1.5rem', transform: 'none' }}>
                            <img src="/images/get-in-touch2.png" alt="Get in Touch" style={{ width: '100%', maxWidth: '350px', borderRadius: '15px', marginBottom: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }} />
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
                                ADORE is a global voluntary group of college students and professionals, who have come forward together to motivate the budding youth into taking positive action.
                            </p>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">📞</div>
                            <div>
                                <strong>Call / WhatsApp</strong>
                                <span>+91 79804 60134</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">📧</div>
                            <div>
                                <strong>Email Us</strong>
                                <span>info@adoreglobal.org</span>
                            </div>
                        </div>
                    </div>

                    <form className="volunteer-form" onSubmit={handleFormSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Name *</label>
                                <input type="text" placeholder="e.g. Rahul Sharma" required />
                            </div>
                            <div className="form-group">
                                <label>Email *</label>
                                <input type="email" placeholder="e.g. rahul@email.com" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Mobile No. *</label>
                                <input type="tel" placeholder="e.g. +91 98765 43210" required />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" placeholder="Your City" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Most suitable hours for meeting/working (10 AM - 10 PM)</label>
                            <input type="text" placeholder="e.g. 4 PM - 7 PM" />
                        </div>

                        <div className="form-group">
                            <label>Your Educational Qualifications - course, year *</label>
                            <input type="text" placeholder="e.g. B.Tech CS, 2024" required />
                        </div>

                        <div className="form-group">
                            <label>Domains interested in *</label>
                            <select required defaultValue="">
                                <option value="" disabled>Select a domain...</option>
                                <option value="volunteering">Volunteering/ Teaching</option>
                                <option value="management">General Management</option>
                                <option value="marketing-digital">Digital Marketing</option>
                                <option value="hr">Human Resource</option>
                                <option value="marketing">Marketing</option>
                                <option value="others">Others</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>How did you get to know about ADORE *</label>
                            <select required defaultValue="">
                                <option value="" disabled>Select an option...</option>
                                <option value="social">Social Media</option>
                                <option value="web">Search Engine/Website</option>
                                <option value="referral">Friends/Referral</option>
                            </select>
                        </div>

                        <div className="form-group" style={{ flexDirection: 'row', alignItems: 'flex-start', gap: '12px', padding: '10px 0' }}>
                            <input type="checkbox" style={{ width: 'auto', marginTop: '4px' }} required />
                            <label style={{ fontSize: '0.82rem', lineHeight: '1.4', color: 'var(--text-secondary)' }}>
                                I understand that this is an UNPAID volunteering/ internship and I am interested in it for personal contribution and professional development. *
                            </label>
                        </div>

                        <button type="submit" className="btn-primary full-width" disabled={submitting}>
                            {submitting ? 'Sending... ⏳' : 'Submit Application 🚀'}
                        </button>

                        {formSubmitted && (
                            <div className="form-success" style={{ display: 'block' }}>
                                <span>✅ Application sent! We'll get back to you shortly.</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
