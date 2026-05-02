import React from 'react';
import PageLayout from './PageLayout';

const highlightDetails = [
  {
    id: 'Well-being oriented',
    title: 'Well-being oriented',
    description: 'Focus on emotional health, resilience, and positive mindset.',
    topics: [
      'Mental wellness awareness',
      'Stress reduction practices',
      'Emotional support',
      'Healthy habits'
    ],
    image: '/images/Program/Wellbeing oriented.png'
  },
  {
    id: 'Positive engagement',
    title: 'Positive engagement',
    description: 'Encourage active participation and positive interactions among students.',
    topics: [
      'Interactive activities',
      'Active participation',
      'Creative involvement',
      'Collaborative learning'
    ],
    image: '/images/Program/Positive Engagement.webp'
  },
  {
    id: 'Supportive environment',
    title: 'Supportive environment',
    description: 'Create a safe and nurturing space for students to thrive.',
    topics: [
      'Inclusive practices',
      'Respectful communication',
      'Mentorship opportunities',
      'Safe spaces for expression'
    ],
    image: '/images/Program/Supportive environment.avif'
  },
   {
    id: 'Skill Development',
    title: 'Skill Development',
    description: 'Enhance practical skills and competencies for personal and professional growth.',
    topics: [
      'Communication improvement',
      'Basic education',
      'Practical life skills',
      'Confidence building',
      'Time Management',
      'Decision Making',
    ],
    image: '/images/Program/Skill Develop.jpg'
  },
];

const SunshinePage = () => (
  <PageLayout
    eyebrow="Programs"
    title={<>AD <span className="gradient-text">Sunshine</span></>}
    description="AD Sunshine brings positive, uplifting sessions and outreach activities that encourage emotional well-being, optimism, and personal growth among young participants."
    highlights={['Well-being oriented', 'Positive engagement', 'Supportive environment','Skill Development']}
    highlightDetails={highlightDetails}
    image={{ src: '/images/a28.jpg', alt: 'AD Sunshine program' }}
    ctaLabel="Learn About AD Sunshine"
  />
);

export default SunshinePage;
