import React from 'react';
import PageLayout from './PageLayout';

const WorkshopClgStudent = () => (
  <PageLayout
    eyebrow="Participate"
    title={<><span className="gradient-text">Workshop for College Students</span></>}
    description="Our workshops focus on practical learning with collaborative exercises that help participants improve communication, creativity, teamwork, and solution-oriented thinking."
    highlights={['Career Development', 'E-Classes', 'E-Volve', 'Fun & Learn']}
    image={{ src: '/images/a28.jpg', alt: 'Workshop for College Students' }}
    ctaLabel="Learn More"
  />
);

export default WorkshopClgStudent;
