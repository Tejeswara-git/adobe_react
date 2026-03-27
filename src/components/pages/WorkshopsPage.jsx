import React from 'react';
import PageLayout from './PageLayout';

const WorkshopsPage = () => (
  <PageLayout
    eyebrow="Programs"
    title={<>Hands-On <span className="gradient-text">Workshops</span></>}
    description="Our workshops focus on practical learning with collaborative exercises that help participants improve communication, creativity, teamwork, and solution-oriented thinking."
    highlights={['Skill practice', 'Collaborative format', 'Real-world activities']}
    image={{ src: '/images/a26.jpg', alt: 'Workshop activities' }}
    ctaLabel="View Workshops"
  />
);

export default WorkshopsPage;
