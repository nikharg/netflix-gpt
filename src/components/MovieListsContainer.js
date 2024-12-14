import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";
import "./movieListsContainer.css";

const MovieListsContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    movies?.nowPlayingMovies &&
    movies?.popularMovies &&
    movies?.upcomingMovies &&
    movies?.topRatedMovies && (
      <div className="movieListsContainer">
        <MovieLists
          title={"Now Playing Movies"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieLists
          title={"Top rated Movies"}
          movies={movies?.topRatedMovies}
        />
        <MovieLists title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieLists title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      </div>
    )
  );
};

export default MovieListsContainer;
