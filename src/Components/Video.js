import { useParams } from "react-router-dom";
import YouTube from 'react-youtube';
import React, { useEffect, useState } from "react";
import Comments from "./Comments.js";
import RelatedVids from "./RelatedVids.js";
import Sidebar from "./Sidebar.js";


export default function Video(){
    const [info,setInfo]=useState([])
    const [stats,setStats]=useState([])
    const [relatedVids,setRelatedVids]=useState([])
    const [comments,setComments]=useState([])


    const {id}=useParams()
    const opts = {
        height: '600',
        width: "100%",
        border:"1px solid red"
      };

      useEffect(()=>{
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${process.env.REACT_APP_API_KEY}` 
        ).then(res=>res.json()).then(data=>setInfo(data.items[0].snippet))
      },[id])

      useEffect(()=>{
       fetch(` https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`).then(res=>res.json()).then(stats=>setStats(stats.items[0].statistics))
      },[id])

      useEffect(()=>{
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=12&key=${process.env.REACT_APP_API_KEY}
        `).then(res=>res.json()).then(videos=>setRelatedVids(videos.items))
      },[id])

console.log(relatedVids)
     
      const [form,setForm]=useState({name:"",comment:""})

function handleChange(e){
    setForm({...form,[e.target.id]:e.target.value})
}


function onSubmit(e){
e.preventDefault()
comments.push(form)
setComments(comments)
console.log(comments)
setForm({...form,[e.target.id]:""})

}

    return (

    <div >
        
        <div className="video-page">
           <div className="related-sidebar">
            <Sidebar/>
           </div>
        <div className="column2">
        <div className="vid-deets">
        <YouTube videoId={id} opts={opts} />
        <h1 className="pad-tit">{info.title}</h1>
        <div className="flexed">
        <h3 className="vid-page-tit">{info.channelTitle}</h3>
        <p className="views">{stats.viewCount} <span>views</span></p>
        <p classname="likes">{stats.likeCount} <span>likes</span></p>
        </div>
        <p className="vid-description"><h3>Description</h3>{info.description}</p>
        </div>

        

        <div className="x">
        <form className="comments-form" onSubmit={onSubmit}>
        <h3>Leave a comment</h3>
            <label for="name" className="name-label">Name:
            <input type="text" id="name" value={form.name} onChange={handleChange}/>
            </label>
            <label for ="comment">Comment:
            <input type="text-area" id="comment" value={form.comment} onChange={handleChange}/>
            </label>
            <input type="submit" value="submit" className="cmmts-submit"/>
        </form>
        </div>

        
        <div className="cmmts-section">
        <h3>Comments</h3>
      <Comments comments={comments}/>
    </div>
    </div>
    <div className="RV-section">
        <h1 className="white">Related Videos</h1>
        <RelatedVids videos={relatedVids} />
    </div>
    </div>
    )
}


