import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { useGetNowPlayingMovies } from "../utils/useGetNowPlayingMovies";

const Browse = () => {
  useGetNowPlayingMovies();
 
  return (
    <div className="bg-black">
      <Header/>
      <MainContainer/>
      
    </div>
  );
};

export default Browse;
