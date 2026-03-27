import React from 'react';
import PageLayout from './PageLayout';

const SunshinePage = () => (
  <PageLayout
    eyebrow="Programs"
    title={<>AD <span className="gradient-text">Sunshine</span></>}
    description="AD Sunshine brings positive, uplifting sessions and outreach activities that encourage emotional well-being, optimism, and personal growth among young participants."
    highlights={['Well-being oriented', 'Positive engagement', 'Supportive environment']}
    image={{ src: '/images/a28.jpg', alt: 'AD Sunshine program' }}
    ctaLabel="Learn About AD Sunshine"
  />
);

export default SunshinePage;
