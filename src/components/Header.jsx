// Header.jsx
import './Header.css';
import { useRef } from 'react';
import Logo from '../assets/logo.svg';
import HomeIcon from '../assets/house.svg?react';
import ProjectIcon from '../assets/folder.svg?react';
import AboutIcon from '../assets/crown.svg?react';
import ContactIcon from '../assets/envelope.svg?react';

function Header({ homeRef, projectsRef, aboutRef, contactRef }) {
  // header DOM element ref for height calculation
  const headerRef = useRef(null);

  const scrollToRef = (ref) => {
    if (!ref?.current || !headerRef?.current) return;
    
    const top = ref.current.getBoundingClientRect().top + window.pageYOffset - 40;

    window.scrollTo({ top, behavior: 'smooth' });

    // accessibility: focus the target after a short delay
    setTimeout(() => {
      try {
        ref.current.focus({ preventScroll: true });
      } catch (err) {
        // some elements may not accept focus; ignore
      }
    }, 400);
  };

  return (
    <div className="header" ref={headerRef}>
      <div className="buttons-left">
        <a
          href="#home"
          className='header-buttons'
          onClick={(e) => { e.preventDefault(); scrollToRef(homeRef); }}
        >
          <span className="text-label">home</span>
          <HomeIcon className="icon-label" />
        </a>

        <a
          href="#projects"
          className='header-buttons'
          onClick={(e) => { e.preventDefault(); scrollToRef(projectsRef); }}
        >
          <span className="text-label">projects</span>
          <ProjectIcon className="icon-label" />
        </a>
      </div>

      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
      </div>

      <div className="buttons-right">
        <a
          href="#about"
          className='header-buttons'
          onClick={(e) => { e.preventDefault(); scrollToRef(aboutRef); }}
        >
          <span className="text-label">about</span>
          <AboutIcon className="icon-label" />
        </a>

        <a
          href="#contact"
          className='header-buttons'
          onClick={(e) => { e.preventDefault(); scrollToRef(contactRef); }}
        >
          <span className="text-label">contact</span>
          <ContactIcon className="icon-label" />
        </a>
      </div>
    </div>
  );
}

export default Header;
