import VideoCard from "./VideoCard"

export default function Videos({data}){
console.log(data)

return (
   
    <div className="videos">
        <p>hi</p>
        {data.map((video,idx)=><VideoCard videoDetails={video}/>)}
    </div>
)
}