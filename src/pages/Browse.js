import React from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MovieListsContainer from "../components/MovieListsContainer";
import MainHomeContainer from "../components/MainHomeContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptCurrentState = useSelector((state) => state?.gpt?.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {gptCurrentState === true ? (
        <GptSearchPage />
      ) : (
        <>
          <MainHomeContainer />
          <MovieListsContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
