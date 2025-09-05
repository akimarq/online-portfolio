import { useState } from 'react'
import landing_image from './assets/portrait-up.jpg';
import './App.css'

function App() {
  return (
  <div className="body">
    <div className="header">
      <div className="header-text">
        <h1>achilles marqueses</h1>
        <p>Creative Developer</p>
      </div>
    </div>
    
    <div className="landing">
      <div className="left">
        <div className="landing-text">
          <h1>Hi, I'm Achilles</h1>
          <p>A creative developer based in the Philippines, specializing in crafting engaging and user-friendly digital experiences. With a passion for both design and technology, I blend creativity with technical expertise to bring ideas to life on the web.</p>
          <p>Whether you're looking to build a stunning website, an interactive application, or a seamless user interface, I'm here to help you achieve your digital goals. Let's work together to create something amazing!</p>  
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
