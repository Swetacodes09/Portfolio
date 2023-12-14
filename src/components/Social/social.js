import React from 'react';
import './social.css';

const Social = () => {
  const linkedinProfileLink = 'https://www.linkedin.com/in/sweta-das-2724ab188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';

  return (

    <>
    <section id="social">
    <div className="social-container">

      Contact Me  <a href={linkedinProfileLink} target="_blank" rel="noopener noreferrer">@LinkedIn</a>
      </div>
      </section>
    </>
  );
}

export default Social;
