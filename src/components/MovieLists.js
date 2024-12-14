import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movies }) => {
  const scrollRef = useRef();
  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };
  return (
    <div className="movieLists">
      <h2 className="title">{title}</h2>
      <button onClick={() => scroll(-250)}>LEFT</button>
      <button onClick={() => scroll(250)}>RIGHT</button>
      <div className="movieCards" ref={scrollRef}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieLists;
