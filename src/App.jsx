import { useState } from 'react'
import landing_image from './assets/portrait-up.jpg';
import logo from './assets/logo.svg?react';
import background from './assets/background.png';
import './App.css'

function App() {
  return (
  <div className="body">
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo"/>
      </div>
    </div>
    <div className="landing">
      <div className="left">
        <div className="landing-text">
          <h1>hi, i'm <span className="landing-text-name">achilles</span></h1>
          <p>a creative developer and designer based in the Philippines, with a passion for building immersive experiences across web, games, and graphic design. i merge clean code with compelling visuals to craft everything from dynamic websites to interactive digital worlds.</p>
          <p>whether you're looking for a stunning website, an engaging game prototype, or a unique brand identity, i have the diverse skillset to bring your vision to life. let's collaborate and build something unforgettable.</p>
        </div>
      </div>
      <div className="right">
        <div className="landing-image">
          <img src={landing_image} alt="landing-image"/>
        </div>
      </div>
    </div>


  </div>
  )
}

export default App
