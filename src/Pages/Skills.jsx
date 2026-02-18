import ScrollReveal from '../Components/ScrollReveal';

const Skills = () => {
  return (
    <div className="page skills-container">
      <h2 className="section-title animate-load-up">Technical Skills</h2>
      <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>

        {/* Languages */}
        <ScrollReveal width="100%">
          <div className="skill-category card">
            <h3>Languages</h3>
            <div className="skill-bar-container">
              <div className="skill-info">
                <span>JavaScript</span>
                <span>90%</span>
              </div>
              <div className="progress-bar"><div className="progress" style={{ width: '90%' }}></div></div>
            </div>
          </div>
        </ScrollReveal>

        {/* Frontend */}
        <ScrollReveal delay={0.2} width="100%">
          <div className="skill-category card">
            <h3>Frontend</h3>
            <div className="skill-bar-container">
              <div className="skill-info">
                <span>React.js</span>
                <span>85%</span>
              </div>
              <div className="progress-bar"><div className="progress" style={{ width: '85%' }}></div></div>
            </div>
            <div className="skill-bar-container">
              <div className="skill-info">
                <span>HTML5 & CSS3</span>
                <span>95%</span>
              </div>
              <div className="progress-bar"><div className="progress" style={{ width: '95%' }}></div></div>
            </div>
            <div className="skill-bar-container">
              <div className="skill-info">
                <span>Tailwind CSS</span>
                <span>80%</span>
              </div>
              <div className="progress-bar"><div className="progress" style={{ width: '80%' }}></div></div>
            </div>
          </div>
        </ScrollReveal>

        {/* Backend */}
        <ScrollReveal delay={0.3} width="100%">
          <div className="skill-category card">
            <h3>Backend</h3>
            <div className="skill-bar-container">
              <div className="skill-info">
                <span>Node.js</span>
                <span>80%</span>
              </div>
              <div className="progress-bar"><div className="progress" style={{ width: '80%' }}></div></div>
            </div>
            <div className="skill-bar-container">
              <div className="skill-info">
                <span>Express.js</span>
                <span>85%</span>
              </div>
              <div className="progress-bar"><div className="progress" style={{ width: '85%' }}></div></div>
            </div>
          </div>
        </ScrollReveal>

        {/* Database */}
        <ScrollReveal delay={0.4} width="100%">
          <div className="skill-category card">
            <h3>Database</h3>
            <div className="skill-bar-container">
              <div className="skill-info">
                <span>MongoDB</span>
                <span>85%</span>
              </div>
              <div className="progress-bar"><div className="progress" style={{ width: '85%' }}></div></div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Skills;
