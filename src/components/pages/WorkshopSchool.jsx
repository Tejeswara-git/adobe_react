import React from 'react';
import PageLayout from './PageLayout';

const highlightDetails = [
  {
    id: 'Young Leaders',
    title: 'Young Leaders',
    description: 'Activities to build responsibility and empathy among students through community engagement in schools and neighborhoods.',
    topics: [
      'Creative Quest – Social responsibility through art',
      'Vision for Improvement – Essay on society/self vision',
      'India – My Pride – Essay on pride for India',
      'Level-up – Communication development program',
      'Sunshine – Academic support for local community kids'
    ],
    image: '/images/Workshops/Young_Leader.avif'
  },
  {
    id: 'Computer Skills',
    title: 'Computer Skills',
    description: '5-day workshop to develop basic computer skills.',
    topics: [
      'Documentation',
      'Data Analysis',
      'Presentations',
      'Poster Designing',
      'Google Features'
    ],
    image: '/images/Workshops/ComputerSkills.png'
  },
  {
    id: 'MS Excel',
    title: 'MS Excel',
    description: '6-day workshop focused on professional use of Microsoft Excel.',
    topics: [
      'Overview of Excel',
      'Formatting and Formulae',
      'Advanced Formulae',
      'Lookup Functions and Subtotal',
      'Tables and Pivot Tables',
      'Graphs and Charts'
    ],
    image: '/images/Workshops/Excel.jpg'
  },
  {
    id: 'Fly High',
    title: 'Fly High',
    description: 'Workshop focused on empowering girls.',
    topics: [
      'Health and Nutrition',
      'Yoga and Stress Management',
      'Constitutional Law for Women',
      'Self Protection and Self Defence',
      'Financial Management',
      'Digital Transformation and Cybercrime Awareness'
    ],
    image: '/images/Workshops/Women.jpg'
  },
  {
    id: 'Content Writing',
    title: 'Content Writing',
    description: '7-day workshop introducing participants to content writing.',
    topics: [
      'Introduction to Content Writing',
      'Types of Writing',
      'Creative Content Writing',
      'Writing Tips and SEO',
      'Paraphrasing',
      'Proofreading and Plagiarism Tools',
      'Brochure Content and Designing',
      'Copywriting and Blogging'
    ],
    image: '/images/Workshops/ContentWriting.jpeg'
  },
  {
    id: 'Digital Marketing',
    title: 'Digital Marketing',
    description: '9-day workshop introducing digital marketing concepts.',
    topics: [
      'Social Media Marketing',
      'Digital Marketing Fundamentals',
      'Google Marketing',
      'Lead Generation through Local SEO',
      'Email Marketing',
      'SEO and Personal Branding',
      'Instagram Marketing',
      'Copywriting',
      'Brand Management and Consumer Psychology'
    ],
    image: '/images/Workshops/Digital-Marketing.jpg'
  }
];

const WorkshopSchool = () => (
  <PageLayout
    eyebrow="Participate"
    title={<><span className="gradient-text">Workshop for School Students</span></>}
    description="Our workshops focus on practical learning with collaborative exercises that help participants improve communication, creativity, teamwork, and solution-oriented thinking."
    highlights={['Young Leaders', 'Computer Skills', 'MS Excel', 'Fly High', 'Content Writing', 'Digital Marketing']}
    highlightDetails={highlightDetails}
    image={{ src: '/images/Workshops/School.webp', alt: 'Workshop for School Students' }}
    ctaLabel="Learn More"
  />
);

export default WorkshopSchool;
