import '../App.css';   
import './About.css';
import List from './List.jsx';
import Carousel from './Carousel.jsx';
import Carousel1 from '../assets/carousel1.jpg';
import Carousel2 from '../assets/carousel2.png';
import Carousel3 from '../assets/carousel3.png';
import Carousel4 from '../assets/carousel4.png';
import Carousel5 from '../assets/carousel5.jpg';

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
                        <Carousel images={[Carousel1, Carousel2, Carousel3, Carousel4, Carousel5]} 
                        altTexts={["Image 1", "Image 2", "Image 3", "Image 4", "Image 5"]} 
                        autoPlay={true} 
                        interval={3000}/>
                    </div>
                </div>
                <div className="right">
                    <div className="about-content">
                        <div className="about-content-top">
                            <p>
                            I am <span className="alt-text">Achilles Marqueses</span>, an Information Technology graduate with practical experience in full stack development. 
                            </p>
                            <List 
                            title="Full Stack Development"
                            item="Experience with JavaScript, ReactJS, Typescript, NextJS, NodeJS, ExpressJS, MySQL, and Git. Skilled in front-end development, object-oriented programming, debugging, rapid iteration, and clear technical documentation."
                            />
                        <List 
                            title="Information Technology"
                            item="Experience with JavaScript, React.js, Java, C#, and Git-based workflows. Skilled in front-end development, object-oriented programming, debugging, rapid iteration, and clear technical documentation."
                            />
                        <List 
                        title="Game Development"
                        item="Experience with GDevelop, Unity (C#), JavaScript for gameplay logic, and Blender for modeling/animation. Skilled in gameplay programming, prototyping, system/combat design, asset creation, UI implementation, and debugging game mechanics."
                        />
                        <List 
                        title="Other Areas of Interest"
                        item="Experience with Homelabbing, Linux, and hardware/software troubleshooting. Digital Artist experienced with Krita, Blender and Adobe Suite. "
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