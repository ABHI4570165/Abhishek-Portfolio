import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2 className="section-title">PROJECTS</h2>
      
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            
            <img 
              src={project.image} 
              className="project-image" 
              alt={project.title} 
            />
            
            <h3>{project.title}</h3>

            <p className="project-desc">
              {project.description}
            </p>
            
            {/* Tech Stack Tags */}
            <div className="project-tags">
              {project.techStack?.map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>
            
            {/* Buttons */}
            <div className="project-btn-row">
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noreferrer" 
                className="small-btn"
              >
                Live Demo
              </a>
              <a 
                href={project.source} 
                target="_blank" 
                rel="noreferrer" 
                className="small-btn"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;