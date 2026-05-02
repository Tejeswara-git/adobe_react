import React from 'react';
import PageLayout from './PageLayout';

const highlightDetails = [
  {
    id: 'Learning Methods',
    title: 'Learning Methods',
    description: 'Focus on different learning approaches to improve participation and understanding.',
    topics: [
      'Knowledge Based Learning',
      'Emotion Based Learning',
      'Action Based Activities',
      'Interactive Sessions'
    ],
    image: '/images/Program/Learning Method.jpg'
  },
  {
    id: 'Core Topics',
    title: 'Core Topics',
    description: 'Explore essential subjects and themes relevant to student development.',
    topics: [
      'Personal Development',
      'Academic Excellence',
      'Career Guidance',
      'Social Responsibility',
      'Child Safety'
    ],
    image: '/images/Program/Core Topics.png'
  },
  {
    id: 'Skill Development',
    title: 'Skill Development',
    description: 'Enhance practical skills and competencies for personal and professional growth.',
    topics: [
      'Communication Skills',
      'Critical Thinking',
      'Creativity',
      'Digital Literacy',
      'Time Management',
      'Decision Making',
      'Emotional Intelligence'
    ],
    image: '/images/Program/skill-development.webp'
  },
  {
    id: 'Student Impact',
    title: 'Student Impact',
    description: 'Encourages overall development and better understanding of real-life challenges.',
    topics: [
      'Academic Achievement',
      'Personal Growth',
      'Leadership Development',
      'Career Preparation',
      'Positive Behaviour'
    ],
    image: '/images/Program/Student Impact.avif'
  },
];

const ESessionsPage = () => (
  <PageLayout
    eyebrow="Programs"
    title={<>E-<span className="gradient-text">Sessions</span></>}
    description="E-Sessions are digital learning experiences created to make mentorship and awareness programs accessible to students and communities regardless of location."
    highlights={['Learning Methods', 'Core Topics', 'Skill Development', 'Student Impact']}
    highlightDetails={highlightDetails}
    image={{ src: '/images/a27.jpg', alt: 'Online learning sessions' }}
    ctaLabel="Join an E-Session"
  />
);

export default ESessionsPage;
