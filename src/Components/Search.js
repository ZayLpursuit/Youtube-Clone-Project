import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
import Videos from "./Videos"
import Categories from "./Categories"
import { useNavigate  } from "react-router-dom"




export default function Search (){
 const [data,setData]=useState([])
 const navigate=useNavigate()
  
 function getData(){
    fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&maxResults=20&key=${process.env.REACT_APP_API_KEY}`
      ).then(response=> response.json()).then(data=>setData(data.items))
      console.log(data)
      setInput("")

 }
    function submit(e){
        e.preventDefault()
        getData()
        
    }

    

    const [input,setInput]=useState("")
    function handleChange(e){
        setInput(e.target.value)
    }


    return (
        <div>
            <p>hi</p>
            <section>
        <form className="search-form" onSubmit={submit}>
            <input type="text" value={input} id="search-bar" onChange={handleChange} required/>
            <input type="submit" value="Submit" id="search-submit"  className="search-submit"/>
        </form >
        
    <Categories setData={setData}/>
        </section>
        
        <Videos data={data} />
        </div>
    )
}