import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <Hero />
    </header>
  );
};

export default Header;
