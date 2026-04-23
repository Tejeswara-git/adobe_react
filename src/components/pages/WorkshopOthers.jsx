import React from 'react';
import PageLayout from './PageLayout';

const WorkshopOthers = () => (
  <PageLayout
    eyebrow="Participate"
    title={<><span className="gradient-text">Workshop for Others</span></>}
    description="ADORE's workshops for others create inclusive spaces for individuals of all ages and backgrounds to come together, learn, and grow through shared experiences and meaningful connections."
    highlights={['Intergenerational Connections','Community Building','Lifelong Learning','Shared Experiences','Inclusive Spaces']}
    image={{ src: '/images/a28.jpg', alt: 'Workshop for Others' }}
    ctaLabel="Learn More"
  />
);

export default WorkshopOthers;
