import './App.css';
import {BrowserRouter as Router, Routes,Route, } from "react-router-dom"
import Nav from './Components/Nav';
import About from './Components/About';
import Home from './Components/Home';

import Video from './Components/Video';


function App() {
 
  return (
    
  <Router className="display">
    <Nav />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/" element={<About />}/>
     <Route path="/video/:id" element={<Video  />} />
    <Route path="/category/:category" element={<Home/>} />

    </Routes>
  </Router>
  );
}

export default App;


