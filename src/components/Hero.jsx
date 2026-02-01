import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="part1">
        <h1>Accelerate Your Technology Career</h1>
        <p>Unlock your potential with our expert-led computer courses.</p>
        <a href="#courses" className="btn">Get Started</a>
      </div>
      <div className="part2">
        <img src="./img/hero.png" alt="hero image" />
      </div>
    </section>
  );
};

export default Hero;
