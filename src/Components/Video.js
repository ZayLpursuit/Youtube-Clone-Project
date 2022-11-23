import { useParams } from "react-router-dom";
import YouTube from 'react-youtube';
import React, { useState } from "react";


export default function Video(){
    const {id}=useParams()
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const [form,setForm]=useState({name:"",comment:""})

function handleChange(e){
    setForm({...form,[e.target.id]:e.target.comment})
}


function onSubmit(e){
e.preventDefault()
console.log(form.name)
}
    return (
    <div >
        <p>hi</p>
        <div className="video-page">
        <YouTube videoId={id} />
        </div>
        <form className="comments-form" onSubmit={()=>onSubmit}>
            <label for="name" className="name-label">Name:
            <input type="text" id="name" value={form.name} onChange={handleChange}/>
            </label>
            <label for ="comment">Comment:
            <input type="text-area" id="comment" value={form.comment} onChange={handleChange}/>
            </label>
            <input type="submit" value="submit" className="cmmts-submit"/>
        </form>
        <div className="cmmts-section">
        <h3>Comments</h3>
        <p>@ {form.name}</p>
        <p>{form.comment}</p>
        
    </div>
    </div>
    )
}


