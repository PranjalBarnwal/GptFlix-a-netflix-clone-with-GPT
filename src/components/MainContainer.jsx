import React from 'react'
import MainVideo from './MainVideo'
import MainVideoBackground from './MainVideoBackground'
import { useSelector } from 'react-redux';

import SecondaryContainer from './SecondaryContainer';
const MainContainer = () => {
    const movies=useSelector(store=>store?.movie?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie=movies[0];
    const { original_title, overview, id } = mainMovie;
  return (
    <div className=''>
    
    <MainVideo  title={original_title} overview={overview}/>

    <MainVideoBackground id={id}/>
    <SecondaryContainer/>
    </div>

  )
}

export default MainContainer