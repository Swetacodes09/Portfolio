import React from 'react';
import './skill.css';


const Skill = () => {
 

  return (
    <>
    <section id="skill">
     <div className="skill-heading">
        <h2>What I Know</h2>
      </div>
    <div className="skill-container">
      <div className="skill-card">
      <h3>Frontend</h3>
        <div className="skill-list">
        <div className="skill-list">
          <div className="skill-item">HTML</div>
          <div className="skill-item">CSS<br /></div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React Basics</div>
        </div>
        </div>
      </div>
      <div className="skill-card"><h3>Backend</h3>
        <div className="skill-list">
          <div className="skill-item">Ruby On Rails</div>
        </div>
      </div>
      <div className="skill-card"> 
      <h3>Database</h3>
        <div className="skill-list">
          <div className="skill-item">MySql</div>
          <div className="skill-item">Elastic Search</div>
        </div>
      </div>
      <div className="skill-card">
      <h3>Others</h3>
        <div className="skill-list">
          <div className="skill-item">GraphQl</div>
          <div className="skill-item">Rest API</div>
        </div>
      </div>
    </div>
    </section>
   </>
  
  )
}

export default Skill;