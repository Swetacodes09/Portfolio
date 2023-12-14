import React, { useState } from 'react';
import './navbar.css';

import profile from '../../assets/profile.png';
import { Link  } from 'react-scroll'; // Rename Link to Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
 
  return (
    <>
      <nav className='navbar'>
        

        <img src={profile} alt="profile" className='profile' />
        <div className='desktopMenu'>
          <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem"  >Home</Link>
          <Link activeClass="active" to='social' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Social</Link>
          <Link activeClass="active" to='project' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Project</Link>
          <Link activeClass="active" to='skill' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Skill</Link>
        </div>

        <div className="iconTextContainer desktopMenu">
          <button activeClass="active" className="desktopMenuBtn" onClick={()=> {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
          }}>
            <FontAwesomeIcon icon={faIdBadge} style={{ color: 'black' }} size="3x" />
            <span className="contactText">Contact Me</span>
          </button>
        </div>
        <div className={`mobMenu ${showMenu ? 'open' : ''}`} onClick={() => setShowMenu(!showMenu)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
        <div className='navMenu' style={{display: showMenu? 'flex': 'none'}}>
          <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >Home</Link>
          <Link activeClass="active" to='social' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Social</Link>
          <Link activeClass="active" to='project' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >Project</Link>
          <Link activeClass="active" to='skill' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skill</Link>
          <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
