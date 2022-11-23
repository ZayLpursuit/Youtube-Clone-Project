import VideoCard from "./VideoCard"

export default function Videos({data}){


return (
   
    <div className="videos">
        <p>hi</p>
        {data.map((video,idx)=><VideoCard videoDetails={video}/>)}
    </div>
)
}