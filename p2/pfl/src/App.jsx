import './App.css';
import Navbar from './components/Navbar/Navbar';
import StarrySky from './components/StarrySky/StarrySky';
import Main from './components/main/main';
import ImgLoop from './components/ImgLoop/ImgLoop';
import About from './components/about/About';
import Achievements from './components/Achievements/Achievements';
import React, { useRef } from 'react';

const App = () => {
  const achievementsRef = useRef(null);

  return (
    <div className="App">
      <StarrySky />
      <Navbar achievementsRef={achievementsRef} />
      <ImgLoop />
      <Main/>
      <About/>
      <Achievements ref={achievementsRef} />
      <div>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br>.<br></br></div>
      
    </div>
  );
}

export default App;