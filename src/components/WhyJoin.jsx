import React from 'react';
import './WhyJoin.css';

const WhyJoin = () => {
  const reasons = [
    'Expert Instructors',
    'Industry Demand Training',
    'Minimum Theory',
    'Maximum Practical',
    'Doubt classes',
    'Hands-on Projects',
    'Flexible Learning',
    'Community Support',
    'Government Registered Certificate'
  ];

  return (
    <section className="whyJoin" id="whyjoin">
      <div className="details autoShow">
        <h1>Why Join Us?</h1>
        <p className="blurText">
          We are committed to providing the best learning experience with our expert instructors, 
          hands-on projects, and a supportive community.
        </p>
        <ul className="reasons-list">
          {reasons.map((reason, index) => (
            <li key={index} className="blurText">{reason}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyJoin;
