import React from 'react';
import PageLayout from './PageLayout';

const WorkshopSchool = () => (
  <PageLayout
    eyebrow="Participate"
    title={<><span className="gradient-text">Workshop for School Students</span></>}
    description="Our workshops focus on practical learning with collaborative exercises that help participants improve communication, creativity, teamwork, and solution-oriented thinking."
    highlights={['Young Leaders', 'Computer Skills', 'MS Excel', 'Fly High', 'Content Writing', 'Digital Marketing']}
    image={{ src: '/images/a28.jpg', alt: 'Workshop for School Students' }}
    ctaLabel="Learn More"
  />
);

export default WorkshopSchool;
