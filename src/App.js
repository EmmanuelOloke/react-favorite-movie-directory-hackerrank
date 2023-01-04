import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import { Movieform, Movieslist, Search } from "./components";

const appHeader = "Favorite Movie Directory";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let filteredMovies = movies;

  const addMovieHandler = (name, rating, duration) => {
    setMovies((movies) => [ ...movies, { name, rating, duration } ]);
  };

  if (searchInput.length >= 2) {
    filteredMovies = movies.filter((movie) => {
      return movie.name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

  const sortedFilteredMoviesDesc = filteredMovies.sort((a, b) => b.duration - a.duration);

  return (
    <div>
      <h8k-navbar header={appHeader} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform addMovieHandler={addMovieHandler} />
        </div>
        <div className="layout-column w-30">
          <Search searchInput={searchInput} setSearchInput={setSearchInput} />
          {sortedFilteredMoviesDesc.length !== 0 && <Movieslist movies={sortedFilteredMoviesDesc}/>}
          {sortedFilteredMoviesDesc.length === 0 && movies.length !== 0 && (
            <div data-testid="noResult">
              <h3 className="text-center">No Results Found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
