import React from 'react';
import PageLayout from './PageLayout';

const highlightDetails = [
  {
    id: 'Daily Life & Household Skills',
    title: 'Daily Life & Household Skills',
    description: 'Practical skills to manage daily home activities efficiently.',
    topics: [
      'Smiling Tiffin',
      'Household Tips & Tricks',
      'Improving Children’s Concentration',
      'Doctor at Home',
      'Kitchen Farming'
    ],
    image: '/images/Workshops/Daily life.jpg'
  },
  {
    id: 'Home Management & Lifestyle',
    title: 'Home Management & Lifestyle',
    description: 'Skills to maintain, organize, and improve home environment.',
    topics: [
      'Interior Decoration',
      'Basic Home Maintenance',
      'Creative Recycling'
    ],
    image: '/images/Workshops/Home management.webp'
  },
  {
    id: 'Digital & Technical Skills',
    title: 'Digital & Technical Skills',
    description: 'Basic digital knowledge to handle modern tools and online activities.',
    additionalInfo: 'Helps students research and identify their interests for future careers.',
    topics: [
      'Basic Digital Literacy',
      'Getting Tech Savvy',
      'Basic Computer Skills',
      'Level-up'
    ],
    image: '/images/Workshops/Digital skills.png'
  },
  {
    id: 'Communication & Personal Growth',
    title: 'Communication & Personal Growth',
    description: 'Enhancing confidence, communication, and personal abilities.',
    topics: [
      'English Conversation',
      'Teaching Skills',
      'Editing Skills'
    ],
    image: '/images/Workshops/Communication.webp'
  },
  {
    id: 'Creativity, Finance & Wellness',
    title: 'Creativity, Finance & Wellness',
    description: 'Developing creativity, financial awareness, and a healthy lifestyle.',
    topics: [
      'Chocolate Making',
      'Art & Craft',
      'Conservation Awareness',
      'Online Education',
      'Fitness & Wellness'
    ],
    image: '/images/Workshops/Finance wellness.jpg'
  }
];

const WorkshopHomemaker = () => (
  <PageLayout
    eyebrow="Participate"
    title={<><span className="gradient-text">Workshop for Home Makers</span></>}
    description="Empowering home-makers with essential life and soft skills to build confidence and meaningful engagement, while recognizing their abilities and encouraging knowledge sharing."
    highlights={['Daily Life & Household Skills', 'Home Management & Lifestyle', 'Digital & Technical Skills', 'Communication & Personal Growth', 'Creativity, Finance & Wellness']}
    highlightDetails={highlightDetails}
    image={{ src: '/images/Workshops/Home maker.png', alt: 'Workshop for Home Makers' }}
    ctaLabel="Learn More"
  />
);

export default WorkshopHomemaker;
