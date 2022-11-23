import { useNavigate } from "react-router-dom";



export default function RelatedVidsCard({video}){
const navigate=useNavigate()
return(
    <div  className="RV"onClick={()=>{navigate(`/video/${video.id.videoId||video.id}`);}} >

    {video ?<div className="relatedVidsCard">
    <img src={video.snippet.thumbnails.medium.url} alt="pic" className="relatedThumb"/>
    <div className="relatedDetails">
    <h4>{video.snippet.title.slice(0,50)}</h4>
    <p>{video.snippet.channelTitle}</p>
    </div>
    </div>:null
    
    
    }
    </div>
)

}