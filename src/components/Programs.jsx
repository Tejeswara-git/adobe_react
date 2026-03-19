import React from 'react';

const Programs = () => {
    return (
        <section className="programs" id="programs">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-tag">What We Do</div>
                    <h2 className="section-title">Our <span className="gradient-text">Programs</span></h2>
                    <p className="section-subtitle">We conduct interactive sessions for children in schools, communities, homes, shelter homes so that they feel a sense of belongingness and flair as successful professional, The sessions also help them in emerging as responsible citizens and better human beings.</p>
                </div>

                <div className="programs-grid">
                    {[
                        { icon: '💡', title: 'Our Mission', text: 'Our mission is to create a platform for the youth where they can reach out to perform their social responsibilities.'},
                        { icon: '🎓', title: 'Our Vision', text: 'Our neighbourhood, our Society, our world is our own, it’s our home. It’s our’s to take care of, our’s to improve.'},
                        { icon: '🌱', title: 'Programs', text: 'We have developed several programs for people of all age groups to connect to each other, share their learning and develop their knowledge.' },

                    ].map((prog, i) => (
                        <div key={i} className={`program-card ${prog.featured ? 'featured' : ''}`}>
                            {prog.featured && <div className="program-featured-badge">Most Popular</div>}
                            <div className="prog-icon">{prog.icon}</div>
                            <h3>{prog.title}</h3>
                            <p>{prog.text}</p>
                            {/* <div className="prog-meta">
                                {prog.meta.map((m, j) => <span key={j}>{m}</span>)}
                            </div> */}
                            <a href="#contact" className="prog-link">Apply Now →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
