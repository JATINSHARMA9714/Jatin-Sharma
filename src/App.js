import Footer from './components/Footer';
import Intro from './components/Intro';
import Media from './components/Media';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState(false)
  function changeModeHandler(){
    setMode(!mode);

  }
  return (
    <>
    <Navbar changeMode={changeModeHandler} mode={mode}/>
    <Intro/>
    <Skills mode={mode}/>
    <Projects mode={mode}/>
    <Media mode={mode}/>
    <Footer/>
    </>
  );
}

export default App;
