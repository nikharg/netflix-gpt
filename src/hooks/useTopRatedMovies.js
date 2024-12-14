import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMoviesList = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      OPTIONS
    );
    const json = await response.json();
    console.log(json.results);

    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMoviesList();
  }, []);
};

export default useTopRatedMovies;
