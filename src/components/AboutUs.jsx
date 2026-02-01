import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="aboutUs" id="about">
      <div className="details autoShow">
        <h1>About Us</h1>
        <div className="about-content">
          <p className="blurText">
            Impulse Computer Academy is a leading computer education provider, dedicated to empowering 
            students with the skills they need to succeed in the digital world. Our expert instructors 
            and hands-on approach ensure that you receive the best learning experience.
          </p>
          <p className="blurText">
            We offer a wide range of courses, from web development to data science, designed to meet 
            the needs of today's job market. Our mission is to make quality computer education accessible 
            to everyone, and we are committed to helping you achieve your career goals.
          </p>
          <p className="blurText">
            Join us at Impulse Computer Academy and take the first step towards a successful career in 
            technology. Whether you are a beginner or an experienced professional, we have the right course for you.
          </p>
        </div>
        <a href="#courses" className="btn">Explore Courses</a>
      </div>
    </section>
  );
};

export default AboutUs;
