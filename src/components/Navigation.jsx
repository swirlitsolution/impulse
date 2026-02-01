import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src="./img/logo.png" alt="logo" />
        <h2>IMPULSE COMPUTER ACADEMY</h2>
      </div>
      <div className="menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#demo" className="menu-join">Join Free 3 Day Demo Class</a>
      </div>
    </nav>
  );
};

export default Navigation;
