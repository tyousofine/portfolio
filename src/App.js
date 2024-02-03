import './styles/index.scss';

import { BrowserRouter } from 'react-router-dom';

//components
import HeroContainer from './components/HeroContainer';
import NavBar from './components/NavBar';
import AboutContainer from './components/AboutContainer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <HeroContainer />
        <AboutContainer />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
