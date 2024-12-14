import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      OPTIONS
    );
    const json = await data.json();
    const vids = json.results.filter((vid) => vid.type === "Trailer");
    const trailer = vids.length ? vids[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getTrailer();
  }, []);
};
export default useMovieTrailer;
