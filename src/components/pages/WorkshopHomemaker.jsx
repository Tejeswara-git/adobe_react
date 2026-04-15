import React from 'react';
import PageLayout from './PageLayout';

const WorkshopHomemaker = () => (
  <PageLayout
    eyebrow="Participate"
    title={<><span className="gradient-text">Workshop for Home Makers</span></>}
    description="ADORE connects youth with home makers to foster mutual learning, respect, and meaningful intergenerational relationships."
    highlights={['Computer Skills','Communication','Tech Savvy','Fitness & Wellness', 'Household Tips & Tricks']}
    image={{ src: '/images/a28.jpg', alt: 'Workshop for Home Makers' }}
    ctaLabel="Learn More"
  />
);

export default WorkshopHomemaker;
