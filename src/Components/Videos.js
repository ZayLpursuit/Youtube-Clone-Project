import VideoCard from "./VideoCard"

export default function Videos({data, setHistory, history}){


return (
   
    <div className="videos">
        
        {data.map((video,idx)=><VideoCard videoDetails={video} history={history} setHistory={setHistory}/>)}
    </div>
)
}