import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider.js';
import './App.css';
import Trending from './components/Trending/Trending.js';
import MainBody from './components/MainBody/MainBody.js';

function App() {
  return (
    <div>
       <Navbar />
       <Slider />
       <Trending/>
       <MainBody />
    </div>
   
  );
}

export default App;
