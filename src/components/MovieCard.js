import React from "react";
import { MOVIECARD_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <img src={MOVIECARD_URL + movie?.poster_path} alt="Movie poster" />
    </div>
  );
};

export default MovieCard;
