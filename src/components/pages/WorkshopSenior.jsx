import React from 'react';
import PageLayout from './PageLayout';

const highlightDetails = [
  {
    id: 'Interaction',
    title: 'Interaction',
    description: 'Building connection between youth and senior citizens through meaningful conversations.',
    topics: [
      'Childhood Memories',
      'Hobbies',
      'Aspirations'
    ],
    image: '/images/Workshops/Interaction.png'
  },
  {
    id: 'Life Experience',
    title: 'Life Experience',
    description: 'Understanding life journeys and impactful experiences of senior citizens.',
    topics: [
      'Life Experiences',
      'Personal Anecdotes',
      'Life History'
    ],
    image: '/images/Workshops/Life Experience.jpg'
  },
  {
    id: 'Guidance',
    title: 'Guidance',
    description: 'Learning valuable lessons and advice from elders.',
    topics: [
      'Advice for Youth',
      'Life Lessons'
    ],
    image: '/images/Workshops/Guidance.jpg'
  },
  {
    id: 'Social Connection',
    title: 'Social Connection',
    description: 'Strengthening inter-generational bonding and social involvement.',
    topics: [
      'Community Interaction',
      'Social Engagement'
    ],
    image: '/images/Workshops/Social Connection.jpg'
  },
  {
    id: 'Emotional Wellbeing',
    title: 'Emotional Wellbeing',
    description: 'Providing companionship and creating a sense of belonging.',
    topics: [
      'Companionship',
      'Mutual Respect'
    ],
    image: '/images/Workshops/Emotional Wellbeing.jpg'
  }
];

const WorkshopSenior = () => (
  <PageLayout
    eyebrow="Participate"
    title={<><span className="gradient-text">Workshop for Senior Citizens</span></>}
    description="ADORE connects youth with senior citizens to foster mutual learning, respect, and meaningful intergenerational relationships."
    highlights={['Interaction','Life Experience','Guidance','Emotional Wellbeing','Social Connection']}
    highlightDetails={highlightDetails}
    image={{ src: '/images/Workshops/Senior_Citizen.jpg', alt: 'Workshop for Senior Citizens' }}
    ctaLabel="Learn More"
  />
);

export default WorkshopSenior;
