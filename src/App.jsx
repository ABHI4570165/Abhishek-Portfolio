import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar is now separate and at the top */}
      <Hero />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;