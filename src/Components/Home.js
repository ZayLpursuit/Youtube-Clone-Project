
import Search from "./Search";
import Videos from "./Videos";

import Categories from "./Categories";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";



export default function Home(){
const [vidData,setVidData]=useState([])
const [vidType,setVidType]=useState("Most Popular")
useEffect(()=>{
fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
).then(res=>res.json()).then(data=>setVidData(data.items))
},[])

    return (
        <div className="home-page">
            <p>hi</p>
          <Sidebar/>
          <div className="search-cat">
            <Search setVidData={setVidData} setVidType={setVidType}/>
            <Categories setVidData={setVidData} setVidType={setVidType}/>
            <p className="vid-type">Showing Videos For: <span className="red"><strong>"{vidType}"</strong></span></p>
            </div>
            <Videos data={vidData}/>
          
        </div>
    )
}