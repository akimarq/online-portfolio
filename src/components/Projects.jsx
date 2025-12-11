import '../App.css';
import './projects.css';
import Card from './Card';

function Projects({sectionRef}) {
  return (
    <section ref={sectionRef} id="projects" tabIndex={-1}>
      <div className="sections projects">
        <div className="projects-header">
          <h1>projects</h1>
        </div>
        <div className="projects-grid">
          <Card name="PYTHOMANCER" desc="Top-down RPG based on Python Programming" env="GDevelop, JavaScript | Role: Lead Developer & Designer" />
          <Card name="//.LAST STAND" desc="Cyberpunk-themed 2D Platformer Shooter" env="GDevelop | Role: Lead Developer & Designer" /> 
          <Card name="ANTI-KAIJU INSTITUTE" desc="3D Fighing Hack and Slash game based on Kaiju No.8" env="Tech: Unity, C#, Blender | Role: Lead Developer & Designer" />
        </div>
      </div>
    </section>
  );
}
export default Projects;