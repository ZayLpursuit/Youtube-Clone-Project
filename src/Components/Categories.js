import { useEffect, useState } from "react";





export default function Categories({setData}){

    
    const [categories,setCategories]=useState([])
   

useEffect(()=>{ fetch(
            `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
          ).then(response=> response.json()).then(data=>setCategories(data.items))},[])


    function getCatData(idx){
       fetch (`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=${idx}&regionCode=US&maxResults=20&key=AIzaSyDQLTshcjR3ZT1rgB11YdE5Q4FeMh0pUkc`).then(response=>response.json()).then(data=>setData(data.items))
    
     }
     
     return (
      
        <div className="categories">
       
            <p>hi</p>
         {categories.filter(cat=>cat.snippet.assignable).map(category=>(
            <button key={category.snippet.title} className="cat-btn" onClick={()=>{ getCatData(category.id)}}>{category.snippet.title}</button>
            
            ))} 
           
     </div>
     )
}