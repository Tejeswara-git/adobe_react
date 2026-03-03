import React from 'react';

const Programs = () => {
    return (
        <section className="programs" id="programs">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-tag">What We Do</div>
                    <h2 className="section-title">Our <span className="gradient-text">Programs</span></h2>
                    <p className="section-subtitle">Transformative programs designed to ignite the spark in every young mind.</p>
                </div>

                <div className="programs-grid">
                    {[
                        { icon: '💡', title: 'Idea Incubator', text: 'A 3-month accelerator program where youth develop their raw ideas into actionable projects.', meta: ['🕐 3 Months', '👥 50 Seats'] },
                        { icon: '🎓', title: 'Leadership Camp', text: 'Intensive 7-day residence building leadership, public speaking, and critical thinking.', meta: ['🕐 7 Days', '👥 120 Seats'], featured: true },
                        { icon: '🌱', title: 'Green Futures', text: 'Environmental innovation program empowering youth to design sustainable solutions.', meta: ['🕐 6 Weeks', '👥 80 Seats'] },
                        { icon: '🎨', title: 'Creative Arts Hub', text: 'Workshops in visual arts, music, film - helping youth express themselves.', meta: ['🕐 Ongoing', '👥 Open'] },
                        { icon: '💻', title: 'Tech for Good', text: 'Coding bootcamps and digital literacy for social impact.', meta: ['🕐 4 Weeks', '👥 60 Seats'] },
                        { icon: '🤝', title: 'Mentor Connect', text: '1:1 mentorship program pairing youth with industry leaders.', meta: ['🕐 1 Year', '👥 100 Pairs'] }
                    ].map((prog, i) => (
                        <div key={i} className={`program-card ${prog.featured ? 'featured' : ''}`}>
                            {prog.featured && <div className="program-featured-badge">Most Popular</div>}
                            <div className="prog-icon">{prog.icon}</div>
                            <h3>{prog.title}</h3>
                            <p>{prog.text}</p>
                            <div className="prog-meta">
                                {prog.meta.map((m, j) => <span key={j}>{m}</span>)}
                            </div>
                            <a href="#contact" className="prog-link">Apply Now →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
