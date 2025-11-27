import { useState } from 'react'
import '../App.css';
import Card from './Card';

function Projects() {
  return (
          <div className="sections projects">
        <div className="projects-header">
          <h1>projects</h1>
        </div>
        <div className="projects-grid">
          <Card name="PYTHOMANCER" desc="Top-down RPG based on Python Programming" env="GDevelop, JavaScript" />
          <Card name="ANTI-KAIJU INSTITUTE" desc="3D Fighing Hack and Slash game based on Kaiju No.8" env="Unity, C#, Blender" />
          <Card name="//.LAST STAND" desc="Cyberpunk-themed 2D Platformer Shooter" env="GDevelop" /> 
        </div>
      </div>
  );
}
export default Projects;