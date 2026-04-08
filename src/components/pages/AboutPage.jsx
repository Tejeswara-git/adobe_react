import React from 'react';
import PageLayout from './PageLayout';

const AboutPage = () => (
  <PageLayout
    eyebrow="About"
    title={<>About <span className="gradient-text">ADORE</span></>}
    description={
      <>
        <p>Founded in 2014, ADORE is a worldwide voluntary organization comprised of college students and professionals working collaboratively to inspire and guide the youth towards positive action. Our global network of volunteers passionately contributes their time and expertise without any financial transactions, emphasizing our commitment to selfless service. The interactive sessions span diverse topics, encompassing areas such as Cleanliness, Soft Skills, Career Orientation, and Self-Development. Through these sessions, we aspire to empower and motivate young individuals to make impactful and positive contributions to society.</p>
        <p>We aim to inspire the young generation to dedicate their time and channelize their ideas into some positive and productive action that improves their knowledge, polishes their skills, and enriches their thought processes. We make sure students are encouraged and enthusiastic to take initiative and participate in all the community services.</p>
        <p>Youth should feel responsible to contribute effectively towards the betterment of the society around them and we work together helping the youth improve their communication and managing skills and inculcating creativity and confidence.</p>
      </>
    }
    highlights={['Founded in 2014', 'Global volunteer network', 'Youth empowerment focus']}
    image={{ src: '/images/adobe1.jpg', alt: 'About Adore' }}
    ctaLabel="Contact Us"
  />
);

export default AboutPage;

