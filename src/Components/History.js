import Sidebar from "./Sidebar";
import VideoCard from "./VideoCard";



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
               ) : <div className="novids"><p className="history-vids-p">You have not watched any videos yet!</p></div> }
               </div>
        </div>
    )

}