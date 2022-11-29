
import LikedVidsCard from "./LikedVidsCard"
import Sidebar from "./Sidebar"


export default function LikedVideos({likedVids}){
  

    return (
        <div>
            <h1 className="liked-vids-tit">Your Liked Videos</h1>
            <div className="liked-vids-grid">
                <aside>
                <Sidebar/>
                </aside>
            <div className="liked-vids-sect">
            {likedVids? (
                likedVids.map((video,idx)=>{
                    return <div key={idx}><LikedVidsCard videoDetails={video} /></div>
                })
            ): <p>No Liked Videos</p>}
            </div>
            </div>
        </div>

    )

}