import React, { useState, useEffect, useRef, useCallback } from 'react';

/* ─── Webinar Programs Data ─── */
const programs = [
    {
        id: 'synergy',
        title: 'Synergy',
        image: '/images/Webinars/Sy.jpeg',
        description:
            'Experts from different domains connect with youth and share career-defining insights, helping build a network-driven growth mindset.',
        about:
            'Structured conversations with subject-matter experts designed for learners aged 15–25.',
        objectives: [
            { icon: 'fas fa-bullseye', text: 'Build competencies through real-world storytelling' },
            { icon: 'fas fa-link', text: 'Bridge industry and academia understanding' },
            { icon: 'fas fa-comments', text: 'Develop confident communication with mentors' },
        ],
    },
    {
        id: 'soaring-wings',
        title: 'Soaring Wings',
        image: '/images/Webinars/SW-1.jpeg',
        description:
            'A growth-focused webinar that helps young individuals become independent through leadership, resilience, and community engagement.',
        about:
            'Interactive sessions with alumni and leaders from social enterprises.',
        objectives: [
            { icon: 'fas fa-rocket', text: 'Inspire long-term goal planning' },
            { icon: 'fas fa-lightbulb', text: 'Strengthen emotional intelligence and adaptability' },
            { icon: 'fas fa-handshake', text: 'Encourage collaboration and mentorship' },
        ],
    },
    {
        id: 'gypse',
        title: 'GYPSE',
        fullTitle: 'Global Youth Program for Social Entrepreneurship',
        image: '/images/Webinars/GYPSE.jpeg',
        description:
            'Focused on empowering youth to drive social change through project-based learning.',
        about:
            'Covers problem identification, idea development, and execution for community impact.',
        objectives: [
            { icon: 'fas fa-recycle', text: 'Teach sustainable social business thinking' },
            { icon: 'fas fa-balance-scale', text: 'Promote ethical leadership' },
            { icon: 'fas fa-chart-line', text: 'Enable scalable project planning' },
        ],
    },
    {
        id: 'wisetalk',
        title: 'WiseTalk',
        image: '/images/Webinars/WiseTalk.jpeg',
        description:
            'Insightful discussions with experienced leaders on decision-making, values, and future-ready skills.',
        about:
            'Includes Q&A sessions, live polls, and practical frameworks.',
        objectives: [
            { icon: 'fas fa-search', text: 'Improve critical thinking and self-reflection' },
            { icon: 'fas fa-satellite-dish', text: 'Expand awareness of emerging trends' },
            { icon: 'fas fa-compass', text: 'Help in making clear career decisions' },
        ],
    },
    {
        id: 'xpertalk',
        title: 'XperTalk',
        image: '/images/Webinars/XperTalk.png',
        description:
            'Expert-led sessions focusing on domain-specific skills, real-world use cases, and industry insights.',
        about:
            'Short, high-value sessions designed for quick and deep learning.',
        objectives: [
            { icon: 'fas fa-clipboard-list', text: 'Clarify industry skill demands' },
            { icon: 'fas fa-bolt', text: 'Provide rapid learning resources' },
            { icon: 'fas fa-trophy', text: 'Build confidence in skill selection' },
        ],
    },
    {
        id: 'young-leader-speak',
        title: 'Young Leader Speak',
        image: '/images/Webinars/YLSpeak.jpeg',
        description:
            'A platform where young leaders share experiences, initiatives, and inspire others.',
        about:
            'Combines public speaking practice with structured feedback.',
        objectives: [
            { icon: 'fas fa-microphone-alt', text: 'Enhance presentation and speaking skills' },
            { icon: 'fas fa-fist-raised', text: 'Encourage youth-led initiatives' },
            { icon: 'fas fa-star', text: 'Build a confident community' },
        ],
    },
    {
        id: 'youth-impact',
        title: 'Youth Impact',
        image: '/images/Webinars/YouthImpact.jpeg',
        description:
            'Focused on showcasing measurable outcomes of youth-driven initiatives and enabling community contribution.',
        about:
            'Includes real impact stories, research-backed methods, and actionable plans.',
        objectives: [
            { icon: 'fas fa-heart', text: 'Promote social responsibility' },
            { icon: 'fas fa-chart-bar', text: 'Teach impact measurement strategies' },
            { icon: 'fas fa-hands-helping', text: 'Build a collaborative support ecosystem' },
        ],
    },
];

const AllWebinars = () => {
    const [activeProgram, setActiveProgram] = useState(programs[0].id);
    const sectionRefs = useRef({});
    const pillsRef = useRef(null);

    /* ── Smooth-scroll to section on pill click ── */
    const scrollToSection = (id) => {
        setActiveProgram(id);
        const el = sectionRefs.current[id];
        if (el) {
            const offset = 160;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    /* ── Track active section on scroll ── */
    useEffect(() => {
        const handleScroll = () => {
            let current = '';
            const offset = 200; // adjust as needed
            programs.forEach((p) => {
                const el = sectionRefs.current[p.id];
                if (el) {
                    const top = el.getBoundingClientRect().top;
                    if (top >= 0 && top <= offset) {
                        current = p.id;
                    } else if (top < 0) {
                        current = p.id;
                    }
                }
            });
            if (current && current !== activeProgram) {
                setActiveProgram(current);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeProgram]);

    /* ── Keep the active pill visible (horizontal scroll on mobile) ── */
    useEffect(() => {
        if (!pillsRef.current) return;
        const activeBtn = pillsRef.current.querySelector('.aw-pill.active');
        if (activeBtn) {
            const container = pillsRef.current;
            const scrollLeft = activeBtn.offsetLeft - (container.clientWidth / 2) + (activeBtn.clientWidth / 2);
            container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
    }, [activeProgram]);

    return (
        <main className="subpage all-webinars-page">
            {/* ───── Hero Header ───── */}
            <section className="aw-hero">
                <div className="section-container">
                    <div className="section-header">
                        <div className="section-tag">Programs</div>
                        <h1 className="section-title">
                            Webinar <span className="gradient-text">Programs</span>
                        </h1>
                        <p className="section-subtitle">
                            Discover our diverse range of webinar programs designed to inspire,
                            educate, and empower the next generation of leaders and
                            change-makers.
                        </p>
                    </div>

                    {/* ───── Pill Navigation ───── */}
                    <div className="aw-pills-wrapper" ref={pillsRef}>
                        {programs.map((p) => (
                            <button
                                key={p.id}
                                id={`aw-pill-${p.id}`}
                                className={`aw-pill ${activeProgram === p.id ? 'active' : ''}`}
                                onClick={() => scrollToSection(p.id)}
                            >
                                {p.title}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───── Program Sections ───── */}
            <section className="aw-programs">
                <div className="section-container">
                    {programs.map((program, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <article
                                key={program.id}
                                id={program.id}
                                ref={(el) => (sectionRefs.current[program.id] = el)}
                                className={`aw-program-block ${activeProgram === program.id ? 'aw-active' : ''
                                    } ${isEven ? 'aw-slide-left' : 'aw-slide-right'}`}
                            >
                                {/* Top Accent Bar */}
                                <div className="aw-accent-bar" />

                                {/* Number Badge */}
                                <span className="aw-number">{String(index + 1).padStart(2, '0')}</span>

                                {/* Two-column layout: Content + Image (alternating) */}
                                <div className={`aw-block-grid ${isEven ? '' : 'aw-reversed'}`}>
                                    {/* Content Column */}
                                    <div className="aw-block-content">
                                        {/* 1. Title */}
                                        <h2 className="aw-program-title">{program.title}</h2>
                                        {program.fullTitle && (
                                            <span className="aw-program-fulltitle">{program.fullTitle}</span>
                                        )}

                                        {/* 2. One-line Description */}
                                        <p className="aw-program-desc">{program.description}</p>

                                        {/* 3. About the Program */}
                                        <div className="aw-about">
                                            <h4 className="aw-about-label">About the Program</h4>
                                            <p className="aw-about-text">{program.about}</p>
                                        </div>

                                        {/* 4. Objectives with Icon Bullets */}
                                        <div className="aw-objectives">
                                            <h4 className="aw-objectives-label">Objectives</h4>
                                            <ul className="aw-objectives-list">
                                                {program.objectives.map((obj, i) => (
                                                    <li key={i} className="aw-objective-item">
                                                        <span className="aw-obj-icon">
                                                            <i className={obj.icon}></i>
                                                        </span>
                                                        <span className="aw-obj-text">{obj.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Buttons */}
                                        <div className="aw-actions">
                                            <a href="#/webinars?type=upcoming" className="aw-btn-primary">
                                                Explore Webinars
                                            </a>
                                            <a href="#/webinars?type=past" className="aw-btn-outline">
                                                Past Sessions
                                            </a>
                                        </div>
                                    </div>

                                    {/* Image Column */}
                                    <div className="aw-block-image">
                                        <img
                                            src={program.image}
                                            alt={`${program.title} webinar program`}
                                            className="aw-program-img"
                                        />
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default AllWebinars;
