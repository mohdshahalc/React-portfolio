import ScrollReveal from '../Components/ScrollReveal';

const About = () => {
  return (
    <div className="page about-container">
      {/* Introduction Section */}
      {/* Introduction Section */}
      <ScrollReveal width="100%">
        <div className="section">
          <h2 className="section-title">About Me</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Hi, I'm <strong>Muhammad Shahal</strong>, a passionate Computer Science graduate and MERN Stack Developer.
            I specialize in building scalable, high-performance web applications with a strong focus on backend architecture.
          </p>
        </div>
      </ScrollReveal>

      {/* Professional Summary */}
      {/* Professional Summary */}
      <ScrollReveal delay={0.2} width="100%">
        <div className="section">
          <h3 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Professional Summary</h3>
          <p>
            I am a backend-focused MERN Stack Developer with hands-on experience in designing and deploying production-ready applications.
            My expertise lies in building secure RESTful APIs, managing MongoDB databases, and implementing robust authentication systems using JWT and RBAC.
            I have a proven track record of integrating complex features like payment gateways (Stripe), real-time data handling, and cloud deployment on AWS (EC2, Nginx, PM2).
            I thrive in solving complex problems and delivering clean, maintainable code.
          </p>
        </div>
      </ScrollReveal>

      {/* Experience Section */}
      {/* Experience Section */}
      <ScrollReveal delay={0.3} width="100%">
        <div className="section section-spacing" style={{ marginTop: '3rem' }}>
          <h2 className="section-title">Experience</h2>
          <div className="card">
            <h3>MERN Stack Developer Intern</h3>
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>MakBig</h4>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6' }}>
              <li>Trained and worked as a MERN Stack Developer with primary focus on backend development and full-stack integration.</li>
              <li>Built and maintained RESTful APIs using Node.js and Express.js for authentication, products, orders, payments, and admin operations.</li>
              <li>Implemented JWT-based authentication, Role-Based Access Control (RBAC), and Email OTP verification.</li>
              <li>Designed and managed MongoDB databases using Mongoose with schemas for users, products, carts, orders, wallets, coupons, and offers.</li>
              <li>Integrated Stripe payment gateway, wallet system, and discount logic.</li>
              <li>Developed admin-side functionality including product management, order lifecycle handling, and customer monitoring.</li>
              <li>Implemented sales analytics and reporting with weekly summaries and downloadable reports.</li>
              <li>Deployed the application on AWS using EC2, MongoDB Atlas, Nginx, and PM2.</li>
            </ul>
          </div>
        </div>
      </ScrollReveal>

      {/* Education Section */}
      {/* Education Section */}
      <ScrollReveal delay={0.4} width="100%">
        <div className="section section-spacing" style={{ marginTop: '3rem' }}>
          <h2 className="section-title">Education</h2>
          <div className="card">
            <h3>B.Sc. in Computer Science</h3>
            <p>University of Calicut</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default About;
