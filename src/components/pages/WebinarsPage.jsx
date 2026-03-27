import React from 'react';
import PageLayout from './PageLayout';

const WebinarsPage = () => (
  <PageLayout
    eyebrow="Programs"
    title={<>Live <span className="gradient-text">Webinars</span></>}
    description="ADORE webinars connect youth with mentors, experts, and changemakers through online knowledge-sharing sessions focused on growth, careers, social awareness, and self-development."
    highlights={['Expert speakers', 'Interactive online sessions', 'Flexible participation']}
    image={{ src: '/images/a23.jpg', alt: 'Webinars session' }}
    ctaLabel="Explore Webinars"
  />
);

export default WebinarsPage;
