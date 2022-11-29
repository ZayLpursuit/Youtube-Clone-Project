import Sidebar from "./Sidebar";
import VideoCard from "./VideoCard";
import { Card } from "@mui/material";
import classes from "./LikedVideos.module.css"


export default function History ({history}){

    return (
        <div>
            <h1 className="liked-vids-tit">Your Watched Videos</h1>
            <div className="history-grid">
                <div className="sid">
                <Sidebar/></div>
            {history.length?(
                <div className="history-vids">
                    {history.map((video,idx)=><div key={idx}><VideoCard videoDetails={video}/></div>)}
                </div>
               ) : <div className="novids"><Card className={classes.NoLike} >You have not watched any videos yet!</Card></div> }
               </div>
        </div>
    )

}