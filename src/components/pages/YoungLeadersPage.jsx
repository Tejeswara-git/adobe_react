import React from 'react';
import PageLayout from './PageLayout';

const YoungLeadersPage = () => (
  <PageLayout
    eyebrow="Programs"
    title={<>Young <span className="gradient-text">Leaders</span></>}
    description="Young Leaders is designed to help students build confidence, communication skills, responsibility, and a stronger sense of civic leadership through practical activities and guided sessions."
    highlights={['Leadership development', 'Confidence building', 'Community engagement']}
    image={{ src: '/images/a24.jpg', alt: 'Young leaders program' }}
    ctaLabel="Join Young Leaders"
  />
);

export default YoungLeadersPage;
