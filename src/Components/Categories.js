import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorModal from "./UI/ErrorModal";

export default function Categories({ setVidData, setVidType }) {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
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
        message: "We cannot get 'Categories' for Videos. Please try again later",
      });
    } else {
      fetch(
        `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setCategories(data.items))

        .catch((error) => {
          console.log(error);
          
        });
    }
  }, [apiError]);

  function getCatData(idx) {
    if (process.env.REACT_APP_API_KEY === undefined || (apiError === 400) || (apiError === 403)) {
      setError({
        title: `Error ${apiError}`,
        message: "We cannot get 'Categories' for Videos. Please try again later",
      });
    } else {
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=${idx}&regionCode=US&maxResults=20&key=${process.env.REACT_APP_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setVidData(data.items))
        .catch((error) => {
          console.log(error);
        });
    }
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

      <div className="categories">
        {categories && categories
          .filter((cat) => cat.snippet.assignable)
          .map((category) => (
            <button
              key={category.snippet.title}
              className="cat-btn"
              onClick={() => {
                getCatData(category.id);
                setVidType(`${category.snippet.title}`);
                navigate(`/category/${category.snippet.title}`);
              }}
            >
              {category.snippet.title}
            </button>
          ))}
      </div>
    </div>
  );
}
