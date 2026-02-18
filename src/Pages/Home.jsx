import React from 'react';
import profileImg from '../assets/profile.png';
import ScrollReveal from '../Components/ScrollReveal';

const Home = () => {
  return (
    <div className="page home-container">
      <div className="hero-section">
        <ScrollReveal width="100%">
          <div className="hero-text">
            <h1>Hi, I'm Muhammad Shahal</h1>
            <h2>Full Stack Developer</h2>
            <p>
              Backend-focused MERN Stack Developer with hands-on experience designing, developing, and deploying production-ready web applications.
            </p>
            <div className="cta-buttons">
              <a href="/projects" className="btn btn-primary">View My Work</a>
              <a href="/contact" className="btn btn-outline">Contact Me</a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/muhammad-shahal-30736a351/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/mohdshahalc" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="mailto:shahal.c077@gmail.com">Email</a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} width="100%">
          <div className="hero-image">
            <img src={profileImg} alt="Muhammad Shahal Profile" />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Home;
