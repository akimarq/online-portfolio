import { useState } from 'react'
import landing_image from './assets/pfp2.png';
import Logo from './assets/logo.svg?react';
import background from './assets/background.png';
import TextScramble from './text-scramble';
import './App.css';

function App() {
  const landingText = [
    "digital creator",
    "web developer",
    "graphic designer",
    "game developer",
  ];

  return (
  <div className="body">
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
      <div className="sections landing">
        <div className="left">
          <div className="landing-text">
            <h1>hi, i'm <span className="landing-text-name">achilles</span></h1>
            <TextScramble phrases={landingText} charSet="matrix4" />
          </div>
        </div>
        <div className="right">
          <div className="landing-image">
            <img src={landing_image} alt="landing-image"/>
          </div>
        </div>
      </div>
      <div className="sections projects">
        <div className="projects-header">
          <h1>projects</h1>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="card-visual">
              <div className="card-placeolder-div">

              </div>
            </div>
            <div className="card-info">
              <h2>PYTHOMANCER</h2>
              <p>Top-down RPG based on Python Programming</p>
              <p>GDevelop</p>
            </div>
          </div>
          <div className="project-card">
            <div className="card-visual">
              <div className="card-placeolder-div">

              </div>
            </div>
            <div className="card-info">
              <h2>ANTI-KAIJU INSTITUTE</h2>
              <p>3D Fighing Hack and Slash game based on Kaiju No.8</p>
              <p>Unity, C#</p>
            </div>
          </div>
          <div className="project-card">
            <div className="card-visual">
              <div className="card-placeolder-div">

              </div>
            </div>
            <div className="card-info">
              <h2>//.LAST STAND</h2>
              <p>Cyberpunk-themed 2D Platformer Shooter</p>
              <p>GDevelop</p>
            </div>
          </div>
        </div>
      

      </div>
</div>
  )
}

export default App
