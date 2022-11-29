import VideoCard from "./VideoCard";

export default function Videos({ data,apiError }) {
  console.log(data);
if (apiError===400 || data===undefined){
console.log("error 400")
}
else{
  return (
    
    <div className="videos">
      {data.map((video, idx) => (
        <span key={idx}>
          <VideoCard videoDetails={video} />
        </span>
      ))}
    </div>
  )}
};

