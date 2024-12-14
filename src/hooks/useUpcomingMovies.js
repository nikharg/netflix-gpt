import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMoviesList = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      OPTIONS
    );
    const json = await response.json();
    console.log(json.results);

    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMoviesList();
  }, []);
};

export default useUpcomingMovies;
