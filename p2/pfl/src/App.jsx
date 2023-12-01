import './App.css';
import Navbar from './components/Navbar/Navbar';
import StarrySky from './components/StarrySky/StarrySky';
import ImageLoop from './components/ImageLoop/ImageLoop';
import VideoLoop from './components/VideoLoop/VideoLoop';

const App = () => {
  return (
    <div className="App">
      {/* <StarrySky /> */}
      <Navbar/>
      {/* <VideoLoop/> */}
      <ImageLoop/>
      
    </div>
  );
}

export default App;