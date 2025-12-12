import '../App.css';
import './projects.css';
import Card from './Card';
import Video1 from '../assets/video1.mp4';
import Video2 from '../assets/video2.mp4';
import Video3 from '../assets/video3.mp4';
import Thumb1 from '../assets/thumb1.png';
import Thumb2 from '../assets/thumb2.png';
import Thumb3 from '../assets/thumb3.png';

function Projects({sectionRef}) {
  return (
    <section ref={sectionRef} id="projects" tabIndex={-1}>
      <div className="sections projects">
        <div className="projects-header">
          <h1>projects</h1>
        </div>
        <div className="projects-grid">
          <Card name="PYTHOMANCER" desc="Top-down RPG based on Python Programming" env="GDevelop, JavaScript | Role: Lead Developer & Designer" videoSrc={Video1} poster={Thumb1} />
          <Card name="//.LAST STAND" desc="Cyberpunk-themed 2D Platformer Shooter" env="GDevelop | Role: Lead Developer & Designer" videoSrc={Video3} poster={Thumb3} />
          <Card name="ANTI-KAIJU INSTITUTE" desc="3D Fighing Hack and Slash game based on Kaiju No.8" env="Tech: Unity, C#, Blender | Role: Lead Developer & Designer" videoSrc={Video2} poster={Thumb2} />
        </div>
      </div>
    </section>
  );
}
export default Projects;