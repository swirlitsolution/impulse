import React from 'react';
import './Courses.css';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Learn to build dynamic websites and web applications.',
      image: './img/webdev.jpeg',
      link: '#'
    },
    {
      id: 2,
      title: 'Mern Stack Developer',
      description: 'Master Mongo DB, Express.js, Node.js and React with real time application development.',
      image: './img/mern.png',
      link: '#'
    },
    {
      id: 3,
      title: 'Python',
      description: 'Master the most demanding language and skill and automate the boaring stuff with python.',
      image: './img/python.jpg',
      link: '#'
    },
    {
      id: 4,
      title: 'Graphics Designing',
      description: 'The Ultimate Graphic Design Course Which Covers Photoshop, Illustrator, InDesign, Logo Design.',
      image: './img/graphics.jpg',
      link: '#'
    },
    {
      id: 5,
      title: 'Tally Prime',
      description: 'Advance Tally Prime + GST + Accounting - Certificate Course, E-way Bill, Payroll, TDS,MIS.',
      image: './img/tally.jpg',
      link: '#'
    },
    {
      id: 6,
      title: 'DCA',
      description: 'Master the fundamental of of computer application.',
      image: './img/dca.jpg',
      link: '#'
    }
  ];

  return (
    <section className="courses" id="courses">
      <div className="details autoShow">
        <h1>Our Courses</h1>
        <div className="course-list">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      <div className="image">
        <img src="./img/40908801699.png" alt="Courses Image" />
      </div>
    </section>
  );
};

const CourseCard = ({ course }) => {
  return (
    <div className="course-item">
      <img src={course.image} alt={course.title} />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <a href={course.link} className="course-link">Learn More</a>
    </div>
  );
};

export default Courses;
