import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetTrailer } from "../utils/useGetTrailer";
const MainVideoBackground = ({ id }) => {
  useGetTrailer(id);
  const trailerKey = useSelector((store) => store.movie?.trailerVideo?.key);
  const link = `https://www.youtube.com/embed/${trailerKey}?si=xOdzfcWIpf4sCwhd`+  "?&autoplay=1&mute=1&controls=0  ";
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video h-[100vh]"
        src={link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MainVideoBackground;
