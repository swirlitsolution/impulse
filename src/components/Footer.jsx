import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="details">
        <div className="footer-left">
          <div className="footer-brand">
            <img src="./img/logo.png" alt="logo" />
            <h2>IMPULSE COMPUTER ACADEMY</h2>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#testimonial">Testimonial</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p>Phone: <a href="tel:+917979815545">+91 7979815545</a></p>
            <p>Email:
              <a href="mailto:impulsebirsanagar@gmail.com">
                impulsebirsanagar@gmail.com
              </a>
            </p>
            <p>Address: 1st Floor Opposite Birsanagar Police Station,<br /> Jamshedpur, Jharkhand</p>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/impulsebirsanagar" target="_blank" rel="noopener noreferrer">
              <img src="./img/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/impulsebirsanagar/" target="_blank" rel="noopener noreferrer">
              <img src="./img/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/impulse-computer-academy-birsanagar/" target="_blank" rel="noopener noreferrer">
              <img src="./img/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.youtube.com/@impulsecomputeracademy" target="_blank" rel="noopener noreferrer">
              <img src="./img/youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2025 Impulse Computer Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
