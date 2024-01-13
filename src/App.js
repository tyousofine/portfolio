import './styles/index.scss';

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
      <NavBar />
      <HeroContainer />
      <AboutContainer />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
