import Logo from '../assets/logo.svg?react';

const Header = () => {
    return (
        <div className="header">
          <div className="buttons-left">
            <a href="#" className='header-buttons'>home</a>
            <a href="#" className='header-buttons'>projects</a>
          </div>
        <div className="logo-container">
          <img src={Logo} alt="logo" className="logo"/>
        </div>
        <div className="buttons-right">
            <a href="#" className='header-buttons'>about</a>
            <a href="#" className='header-buttons'>contact</a>
        </div>
      </div>
    );
}   
export default Header;