import React from 'react';
import PageLayout from './PageLayout';

const highlightDetails = [
  {
    id: 'Leadership development',
    title: 'Leadership development',
    description: 'Building leadership skills and fostering a sense of responsibility.',
    topics: [
      'Team coordination',
      'Decision Making Skills',
      'Problem Solving',
      'Initiative Taking',
      'Responsibility Handling'
    ],
    image: '/images/Program/Leadership_Development.avif'
  },
  {
    id: 'Confidence Building',
    title: 'Confidence Building',
    description: 'Building self-assurance and a positive self-image.',
    topics: [
      'Public Speaking',
      'Self-Expression',
      'Goal Setting',
      'stage presence',
      'Overcoming Fear'
    ],
    image: '/images/Program/Confidence Building.jpg'
  },
  {
    id: 'Community Engagement',
    title: 'Community Engagement',
    description: 'Engaging with the community and developing a sense of social responsibility.',
    topics: [
      'Volunteer Work',
      'Community Service',
      'Social Awareness Activities',
      'Contributing to Society',
      'Teamwork Participation'
    ],
    image: '/images/Program/community-engagement.avif'
  },
];

const YoungLeadersPage = () => (
  <PageLayout
    eyebrow="Programs"
    title={<>Young <span className="gradient-text">Leaders</span></>}
    description="Young Leaders is designed to help students build confidence, communication skills, responsibility, and a stronger sense of civic leadership through practical activities and guided sessions."
    highlights={['Leadership development', 'Confidence Building', 'Community Engagement']}
    highlightDetails={highlightDetails}
    image={{ src: '/images/a24.jpg', alt: 'Young leaders program' }}
    ctaLabel="Join Young Leaders"
  />
);

export default YoungLeadersPage;
