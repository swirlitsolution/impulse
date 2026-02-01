import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contactUs" id="contact">
      <div className="details autoShow">
        <h1>Contact Us</h1>
        <p className="blurText">
          Have questions or need more information? Reach out to us and we'll be happy to assist you.
        </p>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="6"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
          <div className="contact-info">
            <div className="info-item">
              <h3>Phone</h3>
              <p>+91 7979815545</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:impulsebirsanagar@gmail.com">
                  impulsebirsanagar@gmail.com
                </a>
              </p>
            </div>
            <div className="info-item">
              <h3>Address</h3>
              <p>1st Floor Opposite Birsanagar Police Station,<br /> Jamshedpur, Jharkhand</p>
            </div>
            <div className="social-links">
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
      </div>
    </section>
  );
};

export default ContactUs;
