import { skillsData } from '../Data/skills';

// --- 1. MAKE SURE THIS LINE EXISTS ---
const Skills = () => {
  return (
    <section id="skills" className="container" style={{ padding: '50px 0' }}>
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skillsData.map((category) => (
          <div key={category.id} className="skill-box">
            
            <h3 className="skill-title">{category.title}</h3>
            
            <div className="skill-list">
              {category.items.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {/* Icon */}
                  <span className="skill-icon-wrapper">{skill.icon}</span>
                  {/* Name */}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 2. THIS EXPORT MUST BE AT THE BOTTOM ---
export default Skills;