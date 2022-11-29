import { useState } from "react";
import ErrorModal from "./UI/ErrorModal";

export default function Search({ setVidData, setVidType }) {
  const [error, setError] = useState();

  console.log(process.env.REACT_APP_API_KEY);

  function getData() {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&maxResults=20&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setVidData(data.items));
    setInput("").catch((error) => {
      console.log(error);
    });
  }

  function submit(e) {
    if (process.env.REACT_APP_API_KEY === undefined) {
      setError({
        title: `Sorry, we cannot search for ${input} right now. Please come Back again Later`,
        message: "Please try again later",
      });
    } else {
      e.preventDefault();
      getData();
      setVidType(`${input}`);
    }
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
      <div>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}
      </div>
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
