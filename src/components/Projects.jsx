import { useState } from 'react';
import '../App.css';
import './Projects.css';
import Card from './Card';
import Carousel from './Carousel.jsx';
import { projectSlides } from './projectSlides.js';

function Projects({ sectionRef }) {
  const slides = projectSlides.filter((slide) => slide.projects.length > 0);
  const [index, setIndex] = useState(0);

  return (
    <section ref={sectionRef} id="projects" tabIndex={-1}>
      <div className="sections projects">
        <div className="projects-header">
          <h1>projects</h1>
        </div>

        <div className="projects-buttons">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              className={`projects-button ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-pressed={i === index}
            >
              <span className="projects-button-text">{slide.title}</span>
            </button>
          ))}
        </div>

        <div className="projects-carousel">
          <Carousel
            index={index}
            onIndexChange={setIndex}
            ariaLabel="Project categories"
            className="carousel--full"
            showArrows={false}
            showDots={false}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="projects-grid">
                {slide.projects.map((project) => (
                  <Card key={project.id} {...project} />
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Projects;