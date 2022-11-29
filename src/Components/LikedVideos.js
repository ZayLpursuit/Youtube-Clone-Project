
import LikedVidsCard from "./LikedVidsCard"
import Sidebar from "./Sidebar"
import { Card } from "@mui/material";
import classes from "./LikedVideos.module.css"

export default function LikedVideos({likedVids}){
  

    return (
        <div>
            <h1 className="liked-vids-tit">Your Liked Videos</h1>
            <div className="liked-vids-grid">
                <aside>
                <Sidebar/>
                </aside>
            <div className="liked-vids-sect">
            {likedVids.length ? (
                likedVids.map((video,idx)=>{
                    return <div key={idx}><LikedVidsCard videoDetails={video} /></div>
                })
            ): <Card className={classes.NoLike} >You have not liked any Videos yet</Card>}
            </div>
            </div>
        </div>

    )

}