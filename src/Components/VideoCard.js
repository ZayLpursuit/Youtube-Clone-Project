
import {  useNavigate, } from "react-router-dom"


export default function VideoCard({videoDetails,history,setHistory}){

    const navigate=useNavigate()
    

   return   ( 
    <div onClick={()=>{navigate(`/video/${videoDetails.id.videoId||videoDetails.id}`); if (!history.includes(videoDetails)){setHistory([...history,videoDetails])}; console.log(history) }} >
    
    {videoDetails ? <div className="video-card">
            <img src={videoDetails.snippet.thumbnails.medium.url} alt="pic" className="thumb"/>
            <h4 className="vid-title">{videoDetails.snippet.title.slice(0,50)}</h4>
            <p>{videoDetails.snippet.chanelTitle}</p>
           
        </div>: null }

        </div>
  )

}