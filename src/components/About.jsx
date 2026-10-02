import '../App.css';   
import './About.css';
import List from './List.jsx';
import Carousel1 from '../assets/carousel1.jpg';
import Carousel2 from '../assets/carousel2.png';
import Carousel3 from '../assets/carousel3.png';
import Carousel4 from '../assets/carousel4.png';
import Carousel5 from '../assets/carousel5.jpg';
import Carousel from './Carousel.jsx';

const aboutImages = [
    { src: Carousel1, alt: "Image 1" },
    { src: Carousel2, alt: "Image 2" },
    { src: Carousel3, alt: "Image 3" },
    { src: Carousel4, alt: "Image 4" },
    { src: Carousel5, alt: "Image 5" },
];

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
                <Carousel
                autoplay
                interval={3000}
                ariaLabel="About images"
                className="carousel--gallery"
                >
                {aboutImages.map((img) => (
                    <img key={img.src} src={img.src} alt={img.alt} />
                ))}
                </Carousel>
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
                                item="Basic experience with Windows, Linux, and MacOS. Basic experience with hardware/software troubleshooting. Basic experience with networking and security."
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