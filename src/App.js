import React, { useState, useEffect } from "react";
import bootstrap from "bootstrap";
import "./styles.css";
import MovieList from "./MovieList";
import axios from "axios";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [headers, setHeaders] = useState("Movie Data");
  const [search, setSearch] = useState("Dhoom");

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://imdb8.p.rapidapi.com/title/find`,
      params: { q: search },
      headers: {
        "x-rapidapi-key": "42fd15c0f2msh0f564ca99e7afdcp1b53cajsn837c19cff342",
        "x-rapidapi-host": "imdb8.p.rapidapi.com"
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [search]);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading={headers} />
          <SearchBox search={search} setSearch={setSearch} />
        </div>
        {search !== "" && movies !== undefined ? (
          <MovieList movies={movies} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
