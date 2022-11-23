import './App.css';
import { useEffect,useState } from 'react';
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom"
import Sidebar from './Components/Sidebar';
import Categories from './Components/Categories';

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
    

    </Routes>
  </Router>
  );
}

export default App;


