import React, { forwardRef, useState, useEffect } from 'react';

const Activities = forwardRef(({ impactGridRef }, ref) => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            avatar: 'RS',
            img: '/images/download.jpg',
            name: 'Rahul Sharma',
            role: 'Idea Incubator Alumni, 2022',
            quote: '"Adore gave me the confidence to believe in my idea. Their incubator program turned my dream into a real project that now impacts thousands of students."',
            bg: ''
        },
        {
            avatar: 'AM',
            img: '/images/volunterr 2.jpg',
            name: 'Ananya Mehta',
            role: 'Leadership Camp Participant, 2023',
            quote: '"The Youth Leadership Camp was transformative. I came in as a shy student and left as a confident leader ready to take on the world."',
            bg: '#F97316'
        },
        {
            avatar: 'PK',
            img: '/images/adobe2.jpg',
            name: 'Priya Kumar',
            role: 'Mentor Connect Participant, 2023',
            quote: '"My mentor through Adore helped me navigate challenges I couldn\'t have solved alone. I\'ve grown more in one year than in my entire college journey."',
            bg: '#10B981'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="impact" id="activities" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="/images/4.png" alt="Impact Background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.08, zIndex: 0, pointerEvents: 'none' }} />
            <div className="impact-bg" style={{ zIndex: 1 }}>
                <div className="blob blob-4"></div>
                <div className="blob blob-5"></div>
            </div>
            <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="section-header light">
                    <div className="section-tag light" style={{ fontSize: '2rem' }}>Our Activities</div>
                    <h2 className="section-title light">Recent <span className="gradient-text-light">Activities & Impact</span></h2>
                    <p className="section-subtitle light">Explore the wide range of activities we conduct to empower the next generation.</p>
                </div>

                <div className="impact-grid" ref={impactGridRef}>
                    {[
                        { icon: '👥', target: '12500', label: 'Youth Empowered' },
                        { icon: '💡', target: '350', label: 'Ideas Funded' },
                        { icon: '🌍', target: '48', label: 'Cities Reached' },
                        { icon: '🎓', target: '280', label: 'Workshops' },
                        { icon: '🤝', target: '500', label: 'Mentors' },
                        { icon: '🏆', target: '95', label: '% Success Rate' }
                    ].map((item, i) => (
                        <div key={i} className="impact-card">
                            <div className="impact-icon">{item.icon}</div>
                            <div className="impact-number" data-target={item.target}>0</div>
                            <div className="impact-label">{item.label}</div>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="testimonials">
                    <div className="section-header light" style={{ marginBottom: '2rem' }}>
                        <h3 className="section-title light" style={{ fontSize: '2rem' }}>What Youth Say About Us</h3>
                    </div>
                    <div className="testimonial-track" style={{ minHeight: '300px' }}>
                        {testimonials.map((testi, i) => (
                            <div key={i} className={`testimonial-card ${currentTestimonial === i ? 'active' : ''}`}>
                                <div className="testi-quote">❝</div>
                                <p>{testi.quote}</p>
                                <div className="testi-author">
                                    <div className="testi-avatar" style={{ background: testi.bg, overflow: 'hidden' }}>
                                        {testi.img ? <img src={testi.img} alt={testi.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : testi.avatar}
                                    </div>
                                    <div>
                                        <strong>{testi.name}</strong>
                                        <span>{testi.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="testi-dots">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                className={`testi-dot ${currentTestimonial === i ? 'active' : ''}`}
                                onClick={() => setCurrentTestimonial(i)}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Activities;
