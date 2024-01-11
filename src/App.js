import './App.css';

//components
import HeroContainer from './components/HeroContainer';
import NavBar from './components/NavBar';
import AboutContainer from './components/AboutContainer';
import Skills from './components/Skills';



function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroContainer />
      <AboutContainer />
      <Skills />


    </div>
  );
}

export default App;
