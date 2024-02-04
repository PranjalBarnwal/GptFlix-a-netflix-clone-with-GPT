import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';
const SecondaryContainer = () => {
    const movies=useSelector(store=>store?.movie?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie=movies[0];
    const { original_title, overview, id } = mainMovie;
  return (
  <div className='-mt-[15rem] z-01'>
    <MovieList movies={movies}/>
    <MovieList movies={movies}/>
    <MovieList movies={movies}/>
    <MovieList movies={movies}/>
    <MovieList movies={movies}/>
   
  </div>
  )
}

export default SecondaryContainer