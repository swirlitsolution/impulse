import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineEvents = [
    {
      id: 1,
      year: '2020',
      title: 'Journey Started',
      description: 'Impulse Computer Academy was founded with a vision to provide quality computer education.',
      image: './img/inaugration.jpg',
      position: 'right'
    },
    {
      id: 2,
      year: '2022',
      title: 'First Franchise Branch',
      description: 'In 2022, we proudly opened our first franchise outlet, expanding our reach and making quality computer education accessible to more students in new regions.',
      image: './img/bagbeda.avif',
      position: 'left'
    },
    {
      id: 3,
      year: '2023',
      title: 'Second Branch',
      description: 'In 2023, we launched our second outlet in Bistupur, Jamshedpur, further expanding our presence and continuing our mission to deliver high-quality computer education to even more students.',
      image: 'https://lh3.googleusercontent.com/p/AF1QipMh721e3KKppil8PIgn6_Ix4lxhNcG4zr2ZuiKO=s680-w680-h510-rw',
      position: 'right'
    },
    {
      id: 4,
      year: '2025',
      title: 'Third Branch',
      description: 'We are thrilled to announce the opening of our third branch in Birsanagar! With this milestone, we are launching comprehensive programming and technology courses across all our branches.',
      image: './img/birsanagar.jpg',
      position: 'left'
    },
    {
      id: 5,
      year: 'Upto 2028',
      title: 'Vision',
      description: 'Our vision is to expand globally and make quality computer education accessible to everyone. By establishing a strong online teaching presence, we aim to reach students beyond geographical boundaries.',
      image: './img/global.jpg',
      position: 'right'
    }
  ];

  return (
    <section className="timeline" id="timeline">
      <div className="details autoShow">
        <h1>Our Journey</h1>
        <p className="blurText">
          From our humble beginnings to becoming a leading computer academy, explore our journey of growth and success.
        </p>
        <div className="timeline-list">
          {timelineEvents.map(event => (
            <TimelineItem key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ event }) => {
  return (
    <div className={`timeline-item ${event.position} fadeUp`}>
      <div className={`timeline-img content-${event.position}`}>
        <img src={event.image} alt={event.title} />
      </div>
      <div className="timeline-content">
        <h4 className="timeline-label">{event.title}</h4>
        <h3 className="timeline-year">{event.year}</h3>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default Timeline;
