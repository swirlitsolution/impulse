import React from 'react';
import './App.css';
import Header from './components/Header';
import Courses from './components/Courses';
import WhyJoin from './components/WhyJoin';
import Timeline from './components/Timeline';
import Testimonial from './components/Testimonial';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Courses />
      <WhyJoin />
      <Timeline />
      <Testimonial />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
