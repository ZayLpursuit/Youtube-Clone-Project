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

  useEffect(() => {
    if (process.env.REACT_APP_API_KEY === undefined) {
      setError({
        title: "Error 400: Perhaps you made too many API requests",
        message: "Please try again later",
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
  }, []);

  function errorHandler() {
    setError(null);
  }

  return (
    <div>
      <div>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}
      </div>

      <div className="home-page">
        <Sidebar />
        <div className="search-cat">
          <Search setVidData={setVidData} setVidType={setVidType} />
          <Categories setVidData={setVidData} setVidType={setVidType} />
          <p className="vid-type">
            Showing Videos For:{" "}
            <span className="red">
              <strong>"{vidType}"</strong>
            </span>
          </p>
        </div>
        <Videos data={vidData} />
      </div>
    </div>
  );
}
