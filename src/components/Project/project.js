import React from 'react';
import './project.css';
import linkedenImage from '../../assets/linkedinnew.png';

const Project = () => {
  const githubUrl = 'https://github.com/Swetaaa404Errr/RailsLinkedInClone';

  return (
    <>
     <section id="project">
    <div className="skill-heading">
        <h2>Project</h2>
      </div>
    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
     <div className="project-container">
      <div className="project-card">
        <img src={linkedenImage} alt="LinkedIn Clone" className="project-image" />
        <div className="project-text">
          <h3>Job Alley</h3>
          <p>Ruby On Rails, HTML, CSS, JavaScript</p>
        </div>
      </div>
    </div>
    </a>
    </section>
   </>
  
  )
}

export default Project;