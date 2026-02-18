import ScrollReveal from '../Components/ScrollReveal';

const About = () => {
  return (
    <div className="page about-container">

      {/* Introduction Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>

        {/* 1. Who am I? */}
        <ScrollReveal width="100%">
          <div className="glass-panel">
            <h2 className="section-title">Who am I?</h2>
            <p className="about-text">
              Hi, I'm <strong>Muhammad Shahal</strong>, a Computer Science graduate and passionate MERN Stack Developer.
              I enjoy building web applications that solve real-world problems and deliver meaningful user experiences.
            </p>
            <p className="about-text">
              My main interest lies in <strong>backend development</strong>, where I focus on designing scalable APIs,
              structuring databases efficiently, and implementing secure authentication systems.
            </p>
          </div>
        </ScrollReveal>

        {/* 2. Professional Summary */}
        <ScrollReveal delay={0.1} width="100%">
          <div className="glass-panel">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)', fontSize: '1.5rem' }}>Professional Summary</h3>
            <p className="about-text">
              I am a backend-focused MERN Stack Developer with hands-on experience in building
              production-ready applications. I specialize in developing RESTful APIs using <strong>Node.js</strong>
              and <strong>Express.js</strong>, managing MongoDB databases with Mongoose, and implementing secure
              authentication systems.
            </p>
            <p className="about-text">
              I have deployed applications using AWS EC2, MongoDB Atlas, Nginx, and PM2,
              gaining practical exposure to cloud infrastructure and server management.
            </p>
          </div>
        </ScrollReveal>

        {/* 3. Experience */}
        <ScrollReveal delay={0.2} width="100%">
          <div className="glass-panel">
            <h2 className="section-title">Experience</h2>

            <div className="timeline-item">
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>MERN Stack Developer Intern</h3>
              <h4 style={{ color: 'var(--secondary-color)', marginBottom: '1.2rem', fontStyle: 'italic', fontSize: '1.1rem' }}>MakBig</h4>
              <ul style={{ paddingLeft: '1rem', lineHeight: '1.8', color: 'var(--text-light)', fontSize: '1rem' }}>
                <li style={{ marginBottom: '0.8rem' }}>• Built and maintained secure RESTful APIs for products, orders, and payments.</li>
                <li style={{ marginBottom: '0.8rem' }}>• Implemented JWT-based authentication and Role-Based Access Control (RBAC).</li>
                <li style={{ marginBottom: '0.8rem' }}>• Integrated Stripe payment gateway with wallet/coupon logic.</li>
                <li>• Deployed applications on AWS EC2 using Nginx and PM2.</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* 4. Education */}
        <ScrollReveal delay={0.3} width="100%">
          <div className="glass-panel">
            <h2 className="section-title">Education</h2>
            <div className="timeline-item" style={{ marginBottom: 0 }}>
              <h3 style={{ fontSize: '1.3rem' }}>B.Sc. in Computer Science</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>University of Calicut</p>
            </div>
          </div>
        </ScrollReveal>

      </div>

    </div>
  );
};

export default About;
