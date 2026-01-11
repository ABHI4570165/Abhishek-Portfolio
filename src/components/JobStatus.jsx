// src/components/JobStatus.jsx

const JobStatus = () => {
  return (
    <section className="container" style={{ padding: '40px 0' }}>
      <div className="status-card">
        
        {/* Status Badge */}
        <div className="status-badge">
          <span className="pulsing-dot"></span>
          <span>Available for Work</span>
        </div>

        {/* Main Message */}
        <h2 className="status-title">
          Currently seeking new opportunities as a <br />
          <span className="highlight">Frontend / Full Stack Developer</span>
        </h2>
        
        <p className="status-desc">
          I am ready to join a team where I can contribute my skills in React, Java, and SQL 
          to build scalable applications.
        </p>

        {/* Motivational Quote Section */}
        <div className="quote-box">
          <p className="quote-text">
            "The best way to predict the future is to create it."
          </p>
          <span className="quote-author">- Peter Drucker</span>
        </div>

      </div>
    </section>
  );
};

export default JobStatus;