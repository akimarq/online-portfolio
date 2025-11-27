import '../App.css';   
import './About.css';

function About() {
  return (
    <div className="sections about">
        <div className="left">
            <div className="about-header">
                <h1>about <span className="alt-text">me</span></h1>
            </div>
            <div className="about-slideshow">
                <p>*insert image slideshow*</p>
            </div>
        </div>
        <div className="right">
            <div className="about-content">
                <div className="about-content-top">
                    <p>
                    *insert about me content*
                    </p>
                    <p>
                        *insert additional content*
                    </p>
                </div>
                <div className="about-content-bottom">
                    <div className="about-content-bottom-left">
                        <p>side 1</p>
                        <ul>
                            <li>• skill 1</li>
                            <li>• skill 2</li>
                            <li>• skill 3</li>
                            <li>• skill 4</li>
                        </ul>
                    </div>
                    <div className="about-content-bottom-right">
                        <p>side 2</p>
                        <ul>
                            <li>• skill 5</li>
                            <li>• skill 6</li>
                            <li>• skill 7</li>
                            <li>• skill 8</li>
                        </ul>
                    </div>
                </div>

                
            </div>
        </div>
      
    </div>
  );
}
export default About;