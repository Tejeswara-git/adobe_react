import React from 'react';
import PageLayout from './PageLayout';

const ESessionsPage = () => (
  <PageLayout
    eyebrow="Programs"
    title={<>E-<span className="gradient-text">Sessions</span></>}
    description="E-Sessions are digital learning experiences created to make mentorship and awareness programs accessible to students and communities regardless of location."
    highlights={['Remote access', 'Youth mentoring', 'Accessible learning']}
    image={{ src: '/images/a27.jpg', alt: 'Online learning sessions' }}
    ctaLabel="Join an E-Session"
  />
);

export default ESessionsPage;
