import React from 'react';
import PageLayout from './PageLayout';

const AboutPage = () => (
  <PageLayout
    eyebrow="About"
    title={<>About <span className="gradient-text">ADORE</span></>}
    description="ADORE is a youth-led voluntary organization focused on helping young people grow through service, guidance, and practical learning. We bring together students and professionals to create positive social impact through interactive sessions and collaborative programs."
    highlights={['Founded in 2014', 'Global volunteer network', 'Youth empowerment focus']}
    image={{ src: '/images/adobe1.jpg', alt: 'About Adore' }}
    ctaLabel="Contact Us"
  />
);

export default AboutPage;
