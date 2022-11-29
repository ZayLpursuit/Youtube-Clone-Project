import Search from "./Search";
import Videos from "./Videos";

import Categories from "./Categories";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import ErrorModal from "./UI/ErrorModal";


export default function Home() {
  const [vidData, setVidData] = useState([]);
  const [vidType, setVidType] = useState("Most Popular");
  const [error, setError] = useState(null);
const[apiError,setApiError]=useState(false)

useEffect(()=>{


  fetch(
    `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
  ).then((response) =>  response.status).then(code=>{setApiError((code))})
},[])

  useEffect(() => {
    
     if (process.env.REACT_APP_API_KEY === undefined || (apiError === 400) || (apiError === 403)) {
      setError({
        title: `Error ${apiError}`,
        message: "We cannot load default 'Most Popular' Videos. Please try again later",
      });
    } else {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setVidData(data.items))
        .catch((error) => {
          console.log(error);
        });
    }
  }, [apiError]);

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

      <div className="home-page">
        <Sidebar />
        <div className="search-cat">
          <Search vidData={vidData} setVidData={setVidData} setVidType={setVidType} />
          <Categories setVidData={setVidData} setVidType={setVidType} />
          <p className="vid-type">
            Showing Videos For:{" "}
            <span className="red">
              <strong>"{vidType}"</strong>
            </span>
          </p>
        </div>
        <Videos apiError={apiError} data={vidData} />
      </div>
    </div>
  );
}
