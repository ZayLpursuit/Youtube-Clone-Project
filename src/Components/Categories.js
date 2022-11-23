import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";





export default function Categories({setVidData,setVidType}){

    
    const [categories,setCategories]=useState([])
    const navigate=useNavigate()

useEffect(()=>{ fetch(
            `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
          ).then(response=> response.json()).then(data=>setCategories(data.items))},[])


    function getCatData(idx){
       fetch (`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=${idx}&regionCode=US&maxResults=20&key=${process.env.REACT_APP_API_KEY}`).then(response=>response.json()).then(data=>setVidData(data.items))
        
     }
     
     return (
      
        <div className="categories">
       
            
         {categories.filter(cat=>cat.snippet.assignable).map(category=>(
            <button key={category.snippet.title} className="cat-btn" onClick={()=>{ getCatData(category.id);setVidType(`${category.snippet.title}`);navigate(`/category/${category.snippet.title}`)}}>{category.snippet.title}</button>
            
            ))} 
           
     </div>
     )
}