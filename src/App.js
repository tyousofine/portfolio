import './styles/index.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

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

        <Routes>
          <Route path='hero' element={<HeroContainer />}></Route>
          <Route path='aboutContainer' element={<AboutContainer />}></Route>
          <Route path='skills' element={<Skills />}></Route>
          <Route path='projects' element={<Projects />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Routes>

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
