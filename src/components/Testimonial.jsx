import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Disha',
      image: './img/disha.jpg',
      text: '"good teaching skills, they even provide important study materials which are very easy to understand. Excellent overall. One can definitely consider joining this academy."'
    },
    {
      id: 2,
      name: 'Mohit',
      image: './img/mohit.jpeg',
      text: '"I attended three day demo class in birsanagar branch. The teaching approach of saurav sir was awesome. I came here for dca course but now enrolled for adca. Thank you sir."'
    },
    {
      id: 3,
      name: 'Mihir',
      image: './img/mihir.avif',
      text: '"Equipped with latest computer facility and best faculty this place is best for learning coding."'
    }
  ];

  return (
    <section className="testimonial" id="testimonial">
      <div className="details autoShow">
        <h1>What Our Students Say</h1>
        <p className="blurText">
          Hear from our successful students who have transformed their careers with our courses.
        </p>
        <div className="testimonial-list">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-item">
      <div className="testimonial-tag">
        <h3>{testimonial.name} .....</h3>
      </div>
      <img src={testimonial.image} alt={testimonial.name} />
      <p>{testimonial.text}</p>
    </div>
  );
};

export default Testimonial;
