import React, { useState } from 'react';

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        city: '',
        hours: '',
        qualifications: '',
        domain: '',
        source: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/api/volunteers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setFormSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    city: '',
                    hours: '',
                    qualifications: '',
                    domain: '',
                    source: ''
                });
                e.target.reset();
                setTimeout(() => setFormSubmitted(false), 5000);
            } else {
                setError(data.error || 'Something went wrong');
            }
        } catch (err) {
            setError('Could not connect to the server. Is the backend running?');
        } finally {
            setSubmitting(false);
        }
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
                                <input type="text" name="name" placeholder="e.g. Rahul Sharma" required onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Email *</label>
                                <input type="email" name="email" placeholder="e.g. rahul@email.com" required onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Mobile No. *</label>
                                <input type="tel" name="mobile" placeholder="e.g. +91 98765 43210" required onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" name="city" placeholder="Your City" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Most suitable hours for meeting/working (10 AM - 10 PM)</label>
                            <input type="text" name="hours" placeholder="e.g. 4 PM - 7 PM" onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Your Educational Qualifications - course, year *</label>
                            <input type="text" name="qualifications" placeholder="e.g. B.Tech CS, 2024" required onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Domains interested in *</label>
                            <select name="domain" required defaultValue="" onChange={handleChange}>
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
                            <select name="source" required defaultValue="" onChange={handleChange}>
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

                        {error && (
                            <div className="form-error" style={{ display: 'block', color: '#ff4d4d', marginTop: '10px', fontSize: '0.9rem' }}>
                                <span>❌ {Array.isArray(error) ? error.join(', ') : error}</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
