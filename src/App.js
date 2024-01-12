import './App.css';

//components
import HeroContainer from './components/HeroContainer';
import NavBar from './components/NavBar';
import AboutContainer from './components/AboutContainer';
import Skills from './components/Skills';
import Projects from './components/Projects';



function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroContainer />
      <AboutContainer />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
