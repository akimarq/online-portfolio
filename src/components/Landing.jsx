import '../App.css';
import './Landing.css'
import landing_image from '../assets/pfp2.jpeg';
import TextScramble from '../text-scramble';    

function Landing({sectionRef}) {
    const landingText = [
      "digital creator",
      "web developer",
      "graphic designer",
      "game developer",
    ];
  return (
    <section ref={sectionRef} id="home" tabIndex={-1}>
      <div className="sections landing">
          <div className="left">
            <div className="landing-text">
              <h1>hi, i'm <span className="landing-text-name">achilles</span></h1>
              <TextScramble phrases={landingText} charSet="matrix4" />
            </div>
          </div>
          <div className="right">
            <div className="landing-image">
              <img src={landing_image} alt="landing-image"/>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Landing