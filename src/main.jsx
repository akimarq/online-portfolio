// main.jsx
import React, { useRef } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Header from './components/header';
import Landing from './components/Landing';
import Contact from './components/Contact';

function RootApp() {
  // refs that point to the actual DOM sections
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header
        homeRef={homeRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />

      <App />
      <Landing sectionRef={homeRef} />
      <Projects sectionRef={projectsRef} />
      <About sectionRef={aboutRef} />
      <Contact sectionRef={contactRef} />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootApp />
  </StrictMode>
);
