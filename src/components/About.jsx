import '../App.css';   
import './About.css';
import List from './List.jsx';

function About({sectionRef}) {
  return (
    <section ref={sectionRef} id="about" tabIndex={-1}>
        <div className="sections about">
            <div className="top">
                <div className="about-header">
                    <h1>about <span className="alt-text">me</span></h1>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="about-slideshow">
                            <p>*insert image slideshow*</p>
                    </div>
                </div>
                <div className="right">
                    <div className="about-content">
                        <div className="about-content-top">
                            <p>
                            I am Achilles Rupert Marqueses, a passionate game developer and programmer with a foundation in computer information. 
                            </p>
                            <List 
                            title="Game Development"
                            item="Experienced with GDevelop, Unity (C#), JavaScript for gameplay logic, 
                            and Blender for modeling/animation. Skilled in gameplay programming, prototyping, system/combat design, asset creation, 
                            UI implementation, and debugging game mechanics."
                            />
                        <List 
                            title="Information Technology"
                            item="Experience with JavaScript, React.js, Java, C#, and Git-based workflows. Skilled in front-end development, object-oriented programming, debugging, rapid iteration, and clear technical documentation."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
export default About;