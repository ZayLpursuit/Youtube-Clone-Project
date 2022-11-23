import {  useState } from "react"






export default function Search ({setVidData,setVidType}){

 function getData(){
    fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&maxResults=20&key=${process.env.REACT_APP_API_KEY}`
      ).then(response=> response.json()).then(data=>setVidData(data.items))
      setInput("")

 }
    function submit(e){
        e.preventDefault()
        getData()
        setVidType(`${input}`)
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
        
   
        </section>
        <p className="testinfo">Test information</p>
        
        </div>
    )
}