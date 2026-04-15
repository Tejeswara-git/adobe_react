import React from 'react';
import PageLayout from './PageLayout';

const WorkshopSenior = () => (
  <PageLayout
    eyebrow="Participate"
    title={<><span className="gradient-text">Workshop for Senior Citizens</span></>}
    description="ADORE connects youth with senior citizens to foster mutual learning, respect, and meaningful intergenerational relationships."
    highlights={['Childhood Memories','Hobbies and aspirations','Life experiences','Health and wellness','Technology for seniors']}
    image={{ src: '/images/a28.jpg', alt: 'Workshop for Senior Citizens' }}
    ctaLabel="Learn More"
  />
);

export default WorkshopSenior;
