
const Projects = () => {
  const projects = [
  {
    id: 1,
    title: "Modren Calculator",
    description: "A modern, stylish calculator app featuring a glassmorphism UI design with a purple gradient background. Supports basic arithmetic operations with a responsive layout.  ",
    techStack: ["HTML5", "CSS3", "Java Script"],
    demo: "https://modren-calculator.vercel.app/",
    source: "https://github.com/ABHI4570165/Modren-Calculator.git",
    image: "/Modren-Calculator.png"
  },
  {
    id: 2,
    title: "Food App",
    description: "This is a frontend-only, fully responsive landing page for Omnifood built with HTML, CSS, and JavaScript that adapts seamlessly to all device sizes. It focuses entirely on the visual interface and layout, meaning no actual backend operations",
    techStack: ["HTML5", "CSS3", "java Script"],
    demo: "https://food-application-mocha.vercel.app/",
    source: "https://github.com/ABHI4570165/Food-Application.git",
    image: "/foodApp.png"
  },
  {
    id: 3,
    title: "Rock Paper Scissor Game",
    description: "A web-based Rock-Paper-Scissors game that allows users to play against the computer. The game features a simple and intuitive interface, score tracking, and responsive design for an engaging user experience.",
    techStack: ["HTML5", "CSS3", "java Script"],
    demo: "https://rock-paper-scissor-six-vert.vercel.app/",
    source: "https://github.com/ABHI4570165/rock-paper-scissor.git",
    image: "/rock-paper-scissor.png"
  }
];

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