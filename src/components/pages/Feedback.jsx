import React, { useState } from 'react';

const mockReviews = [
    {
        id: 1,
        name: "Rohan Sharma",
        rating: 5,
        text: "Adore NGO has completely transformed the way I look at community service. The webinars are incredibly insightful!",
        date: "April 15, 2026"
    },
    {
        id: 2,
        name: "Priya Singh",
        rating: 4,
        text: "Great initiatives and wonderful team. I attended the Synergy program and it was a great learning experience.",
        date: "April 10, 2026"
    },
    {
        id: 3,
        name: "Ananya Desai",
        rating: 5,
        text: "Being part of the Young Leaders program helped me develop crucial leadership skills. Highly recommend to everyone!",
        date: "March 28, 2026"
    }
];

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        rating: 0
    });
    const [hoverRating, setHoverRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log("Feedback Submitted:", formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', message: '', rating: 0 });
        }, 4000);
    };

    const renderStars = (ratingValue, interactive = false) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`fas fa-star ${interactive ? 'interactive' : ''} ${interactive
                            ? (i <= (hoverRating || formData.rating) ? 'active' : '')
                            : (i <= ratingValue ? 'active' : '')
                        }`}
                    onClick={interactive ? () => setFormData(prev => ({ ...prev, rating: i })) : undefined}
                    onMouseEnter={interactive ? () => setHoverRating(i) : undefined}
                    onMouseLeave={interactive ? () => setHoverRating(0) : undefined}
                ></i>
            );
        }
        return stars;
    };

    return (
        <main className="subpage feedback-page">
            {/* ───── Hero Header ───── */}
            <section className="feedback-hero">
                <div className="section-container">
                    <div className="section-header">
                        <div className="section-tag">User Voice</div>
                        <h1 className="section-title">
                            We Value Your <span className="gradient-text">Feedback</span>
                        </h1>
                        <p className="section-subtitle">
                            Your thoughts and experiences help us improve and continue making a positive impact.
                            Read what others have to say and share your own journey with Adore NGO.
                        </p>
                    </div>
                </div>
            </section>

            {/* ───── User Reviews Section ───── */}
            <section className="feedback-reviews">
                <div className="section-container">
                    <h2 className="feedback-section-title">What People Say</h2>
                    <div className="reviews-grid">
                        {mockReviews.map((review) => (
                            <div className="review-card" key={review.id}>
                                <div className="review-header">
                                    <div className="review-avatar">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className="review-meta">
                                        <h4 className="review-author">{review.name}</h4>
                                        <span className="review-date">{review.date}</span>
                                    </div>
                                </div>
                                <div className="review-stars">
                                    {renderStars(review.rating)}
                                </div>
                                <p className="review-text">"{review.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───── Feedback Form Section ───── */}
            <section className="feedback-form-section">
                <div className="section-container">
                    <div className="feedback-form-wrapper">
                        <div className="form-info">
                            <h2>Share Your Experience</h2>
                            <p>
                                Have you attended our webinars, participated in a program, or volunteered with us?
                                We would love to hear your thoughts.
                            </p>
                            <div className="form-contact-details">
                                <div className="fc-item">
                                    <i className="fas fa-envelope"></i>
                                    <span>contact@adorengo.org</span>
                                </div>
                                <div className="fc-item">
                                    <i className="fas fa-phone-alt"></i>
                                    <span>+91 123 456 7890</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-container">
                            {submitted ? (
                                <div className="success-message">
                                    <i className="fas fa-check-circle"></i>
                                    <h3>Thank You!</h3>
                                    <p>Your feedback has been submitted successfully.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="feedback-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            required
                                            className="feedback-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Rating</label>
                                        <div className="star-rating-input">
                                            {renderStars(0, true)}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Your Feedback</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us about your experience..."
                                            required
                                            className="feedback-textarea"
                                            rows="5"
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn-primary full-width submit-btn">
                                        Submit Feedback
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Feedback;
