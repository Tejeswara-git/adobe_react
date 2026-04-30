import React from 'react';
import PageLayout from './PageLayout';

const highlightDetails = [
  {
    id: 'Career Development',
    title: 'Career Development',
    description: '7 days workshop aimed to help students make an easy transition from college to the professional world.',
    topics: [
      'Personality Development',
      'Resume Building',
      'Interview Skills',
      'Corporate Etiquettes',
      'Interpersonal Relationships',
      'Professional Networking',
      'Internships'
    ],
    image: '/images/Workshops/Career Development.jpg'
  },
  {
    id: 'E-Classes',
    title: 'E-Classes',
    description: 'Provides extra support in curriculum for better academic performance and helps build strong basic concepts.',
    topics: [
      'English',
      'Mathematics',
      'Science',
      'Social Science',
      'Computer Science',
      'Other Academic Subjects'
    ],
    image: '/images/Workshops/E-classes.jpg'
  },
  {
    id: 'E-Volve',
    title: 'E - Volve',
    description: 'Youth training program for students (Classes 7–12) conducted by volunteers/professionals to help them explore career interests.',
    additionalInfo: 'Helps students research and identify their interests for future careers.',
    topics: [
      'Communication Skills',
      'Presentation Skills',
      'Graphic Design',
      'Resume Building',
      'Interview Skills',
      'Interpersonal Relations',
      'Personality Development'
    ],
    image: '/images/Workshops/E-volve.jpg'
  },
  {
    id: 'Fun & Learn',
    title: 'Fun n Learn',
    description: 'Interactive online/offline workshop for junior students (up to Class 6) focused on learning through fun activities.',
    topics: [
      'Origami',
      'Story Telling',
      'Best out of Waste',
      'Quiz',
      'Happy Reading',
      'Dancing, Singing, Theatre',
      'Yoga',
      'Fireless Cooking',
      'Art and Craft'
    ],
    image: '/images/Workshops/Fun n learn.jpg'
  }
];

const WorkshopClgStudent = () => (
  <PageLayout
    eyebrow="Participate"
    title={<><span className="gradient-text">Workshop for College Students</span></>}
    description="Our workshops focus on practical learning with collaborative exercises that help participants improve communication, creativity, teamwork, and solution-oriented thinking."
    highlights={['Career Development', 'E-Classes', 'E-Volve', 'Fun & Learn']}
    highlightDetails={highlightDetails}
    image={{ src: '/images/Workshops/College.jpg', alt: 'Workshop for College Students' }}
    ctaLabel="Learn More"
  />
);

export default WorkshopClgStudent;
