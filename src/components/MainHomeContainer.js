import React from "react";
import { useSelector } from "react-redux";
import VideoIntro from "./VideoIntro";

const MainHomeContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const random = Math.floor(Math.random() * 20);
  const { title, overview, id } = movies[random];
  return (
    <div>
      <VideoIntro title={title} overview={overview} id={id} />
    </div>
  );
};

export default MainHomeContainer;
