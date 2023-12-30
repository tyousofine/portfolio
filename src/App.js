import './App.css';

//components
import HeroContainer from './components/HeroContainer';
import NavBar from './components/NavBar';
import AboutContainer from './components/AboutContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroContainer />
      <AboutContainer />

    </div>
  );
}

export default App;
