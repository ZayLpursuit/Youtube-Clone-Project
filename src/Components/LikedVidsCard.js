import { useNavigate } from "react-router-dom";



export default function LikedVidsCard({videoDetails}){

    const navigate=useNavigate()
    const ptag={
        "text-align":" center",
        "background-color":"red",
        "font-size":"30px"

    }

    return   ( 
     <div onClick={()=>{navigate(`/video/${videoDetails.id.videoId||videoDetails.id}`); console.log(videoDetails)}} >
     
     {videoDetails ? <div className="video-card">
             <img src={videoDetails.thumbnails.medium.url} alt="pic" className="thumb"/>
             <h4 className="vid-title">{videoDetails.title.slice(0,50)}</h4>
             <p style={ptag}>{videoDetails.chanelTitle}</p>
            
         </div>: null }
 
         </div>
   )

}