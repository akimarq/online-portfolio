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
