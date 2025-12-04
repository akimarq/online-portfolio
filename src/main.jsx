import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Header from './components/header';
import Landing from './components/Landing';
import Contact from './components/Contact';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <Landing />
    <Projects />
    <About /> 
    <Contact />
  </StrictMode>,
)
