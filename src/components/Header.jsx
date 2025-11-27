import './Header.css';
import Logo from '../assets/logo.svg';
import HomeIcon from '../assets/house.svg?react';
import ProjectIcon from '../assets/folder.svg?react';
import AboutIcon from '../assets/crown.svg?react';
import ContactIcon from '../assets/envelope.svg?react';


function Header() {
    return (
        <div className="header">
          <div className="buttons-left">
            <a href="#" className='header-buttons'>
                <span className="text-label">home</span>
                <HomeIcon className="icon-label"/>
            </a>
            <a href="#" className='header-buttons'>
                <span className="text-label">projects</span>
                <ProjectIcon className="icon-label"/>
            </a>
          </div>
        <div className="logo-container">
          <img src={Logo} alt="logo" className="logo"/>
        </div>
        <div className="buttons-right">
            <a href="#" className='header-buttons'>
                <span className="text-label">about</span>
                <AboutIcon className="icon-label"/>
            </a>
            <a href="#" className='header-buttons'>
                <span className="text-label">contact</span>
                <ContactIcon className="icon-label"/>
            </a>
        </div>
      </div>
    );
}   
export default Header;