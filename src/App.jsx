import { useState } from 'react'
import landing_image from './assets/pfp2.jpeg';
import Logo from './assets/logo.svg?react';
import background from './assets/background.png';
import TextScramble from './text-scramble';
import './App.css';
import Header from './components/header';

function App() {
  const landingText = [
    "digital creator",
    "web developer",
    "graphic designer",
    "game developer",
  ];

  return (
  <div className="body">
    <Header />
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

</div>
  )
}

export default App
