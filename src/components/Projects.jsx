import { useState } from 'react'
import '../App.css';

function Projects() {
  return (
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
  );
}
export default Projects;