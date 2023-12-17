import React from "react";
import './intro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
  const downloadCV = () => {
    // Assuming your CV file is in the public folder
    const cvUrl = process.env.PUBLIC_URL + '/cv.pdf';

    // Create a virtual link element to trigger the download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="intro-container">
      <section id="intro">
        <p>
          <span className="bold-text">Hi, I'm Sweta</span><br />
          <span className="larger-text">I am a skilled and proficient web developer<br />
            with experience in creating user-friendly and dynamic websites using Ruby on Rails, HTML, CSS, JavaScript,
            and React.</span>
        </p>
      </section>

      <div className="download-container">
        <button className="downloadBtn" onClick={downloadCV}>
          <FontAwesomeIcon icon={faFloppyDisk} style={{ color: 'rgba(248, 188, 85, 0.996)' }} size="3x" />
         
        </button>
        <div>
        <span className="downloadText">CV</span>
        </div>
      </div>
    </div>
  );
}

export default Intro;
