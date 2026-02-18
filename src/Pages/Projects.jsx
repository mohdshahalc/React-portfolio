import ScrollReveal from '../Components/ScrollReveal';

const Projects = () => {
  return (
    <div className="page projects-container">
      <h2 className="section-title animate-load-up">Featured Projects</h2>
      <div className="projects-grid">

        {/* Project 1 - Dynamic */}
        <ScrollReveal width="100%">
          <div className="project-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0 }}>ENVA Cloth & Co</h3>
              <span style={{ background: 'white', color: 'black', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>FULL STACK</span>
            </div>
            <p style={{ color: 'var(--text-light)', fontStyle: 'italic', marginBottom: '1rem' }}>Node.js, Express.js, MongoDB, React.js, Stripe, AWS</p>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <li>Designed, developed, and deployed a production-ready full-stack e-commerce application.</li>
              <li>Built backend services using Node.js and Express.js with RESTful APIs.</li>
              <li>Implemented JWT authentication, Role-Based Access Control (RBAC), and Email OTP verification.</li>
              <li>Designed MongoDB schemas using Mongoose.</li>
              <li>Integrated Stripe payment gateway and wallet system.</li>
            </ul>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <button className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>View Code</button>
              <a href="https://envastore.online/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem', textDecoration: 'none' }}>Live Demo</a>
            </div>
          </div>
        </ScrollReveal>

        {/* Project 2 - Static/Frontend */}
        <ScrollReveal delay={0.2} width="100%">
          <div className="project-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0 }}>Nestro</h3>
              <span style={{ border: '1px solid var(--text-light)', color: 'var(--text-light)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>FRONTEND</span>
            </div>
            <p style={{ color: 'var(--text-light)', fontStyle: 'italic', marginBottom: '1rem' }}>React.js, Tailwind CSS, LocalStorage</p>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <li>Developed a frontend e-commerce application using React.js.</li>
              <li>Implemented user authentication (login/signup) using browser LocalStorage.</li>
              <li>Built cart and wishlist functionality with persistent state management via LocalStorage.</li>
              <li>Designed reusable React components and managed application state.</li>
              <li>Created responsive user interfaces using Tailwind CSS.</li>
            </ul>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <button className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>View Code</button>
              <a href="https://e-commerce-sandy-three-25.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem', textDecoration: 'none' }}>Live Demo</a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Projects;
