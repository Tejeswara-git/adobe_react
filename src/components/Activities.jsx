import React, { forwardRef, useState, useEffect } from 'react';

const Activities = forwardRef(({ impactGridRef }, ref) => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            avatar: 'RS',
            img: 'https://adoreglobal.org/assets/images/Volunteer/Volunteer(2).jpeg',
            name: 'Chinaza Okoye',
            role: 'Volunteer',
            quote: '"My experience volunteering with ADORE. I have always wanted to be a part of something while growing up, maybe it’s the feeling of contributing to a bigger goal or helping people in distress, that connection to people is what ADORE offered me.Volunteering with ADORE has shaped my thinking and broadened my horizon."',
            bg: ''
        },
        {
            avatar: 'AM',
            img: 'https://adoreglobal.org/assets/images/team/team4.jpg',
            name: 'Garima Mishra',
            role: 'Volunteer',
            quote: '"Working in ADORE exceeded my expectations, for here the learning is never ending, and the growth is limitless, Also got connected with so many influential personalities because of the webinars and workshops. I am grateful to this platform for believing me and trusting me with the task of leading the team in ADORE."',
            bg: '#F97316'
        },
        {
            avatar: 'PK',
            img: 'https://adoreglobal.org/assets/images/Volunteer/Volunteer(1).jpeg',
            name: 'Aliyu, Nigeria',
            role: 'Volunteer',
            quote: '"I am Aliyu from Nigeria. I am a volunteer at ADORE Volunteering with ADORE is a life changing experience. It has been my dream to be a teacher and ADORE have fulfilled that dream of mine.Thanks to ADORE, I will always be indebted to you!."',
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

                {/* Activity Photo Gallery — full width */}
                <div style={{
                    marginTop: '3rem',
                    marginLeft: 'calc(-50vw + 50%)',
                    marginRight: 'calc(-50vw + 50%)',
                    width: '100vw',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'stretch',
                        gap: 0,
                    }}>
                        {[
                            '/images/a21.jpg', '/images/a22.png', '/images/a23.jpg', '/images/a24.jpg',
                            '/images/a25.jpg', '/images/a26.jpg', '/images/a27.jpg', '/images/a28.jpg'
                        ].map((src, i) => (
                            <div key={i} style={{
                                flex: '1 1 0',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease, filter 0.3s ease'
                            }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.filter = 'brightness(1.1)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(1)'; }}
                            >
                                <img src={src} alt={`Activity ${i + 21}`} style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Activities;
