import { useEffect, useState } from "react";
import ErrorModal from "./UI/ErrorModal";

export default function Search({ setVidData, setVidType, vidData }) {
  const [error, setError] = useState();
  const[apiError,setApiError]=useState(false)


useEffect(()=>{


  fetch(
    `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
  ).then((response) =>  response.status).then(code=>{setApiError((code))})
},[])
  console.log(process.env.REACT_APP_API_KEY);

  function getData() {

    if (process.env.REACT_APP_API_KEY === undefined || (apiError === 400) || (apiError === 403)) {
      setError({
        title: `Error ${apiError}`,
        message: `Sorry, we cannot search for '${input}' right now. Please come Back again Later`,
      });
    
    } 
    else{


    
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&maxResults=20&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {console.log(data)
      
      setVidData(data.items)
  })}
      
    //   .catch((error) => {
    //   console.log(error);
    // });
  }

  function submit(e) {
  
      e.preventDefault();
      getData();
      setVidType(`${input}`);
    
  }

  const [input, setInput] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <div>
      {error && (<div>
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          /></div>
        )}
      <section>
        <form className="search-form" onSubmit={submit}>
          <input
            type="text"
            value={input}
            id="search-bar"
            onChange={handleChange}
            required
          />
          <input
            type="submit"
            value="Submit"
            id="search-submit"
            className="search-submit"
          />
        </form>
      </section>
    </div>
  );
}
