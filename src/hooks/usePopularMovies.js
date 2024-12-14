import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMoviesList = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      OPTIONS
    );
    const json = await response.json();
    console.log(json.results);

    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMoviesList();
  }, []);
};

export default usePopularMovies;
