
import './App.css';
import {BrowserRouter as Router, Routes,Route, } from "react-router-dom"
import Nav from './Components/Nav';
import About from './Components/About';
import Home from './Components/Home';
import LikedVideos from './Components/LikedVideos';
import Video from './Components/Video';
import { useState } from 'react';
import History from './Components/History';


function App() {
  const [likedVideos,setLikedVideos]=useState([])
  const [history,setHistory]=useState([])
  console.log(history)
  return (
    
  <Router className="display">
    <Nav />
    
    <Routes>
      <Route path="/" element={<Home setHistory={setHistory} history={history}/>} />
      <Route path="/about/" element={<About />}/>
     <Route path="/video/:id" element={<Video setLikedVideos={setLikedVideos} likedVideos={likedVideos} />}/>
    <Route path="/category/:category" element={<Home/>} />
    <Route path="/liked-videos" element={<LikedVideos likedVids={likedVideos}/>}/>
    <Route path="/history" element={<History history={history} />}/>

    </Routes>
  </Router>
  
  );
}

export default App;
