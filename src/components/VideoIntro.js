import React from "react";
import "./videoIntro.css";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoIntro = ({ title, overview, id }) => {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  const info = overview.length > 150 ? overview.slice(0, 150) : overview;
  useMovieTrailer(id);
  return (
    trailerVideo && (
      <>
        <section className="videoPlayer">
          <iframe
            src={
              "https://www.youtube.com/embed/" +
              trailerVideo?.key +
              "?&autoplay=1&mute=1&loop=1&showinfo=0&controls=0&modestbranding=1&autohide=1&color=white&iv_load_policy=3&playlist=" +
              trailerVideo?.key
            }
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>
        <section className="videoInfo">
          <h1>{title}</h1>
          <p>{info}...</p>
          <div className="btns">
            <button>Play</button>
            <button>More Info</button>
          </div>
        </section>
      </>
    )
  );
};

export default VideoIntro;
