import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
  return (
    <>
    <p className='text-white pl-2 ml-2 text-xl font-semibold'>Now Playing</p>
    <div className='flex overflow-x-scroll p-2'>
    {movies.map(movie=><MovieCard key={movie?.id} img={movie?.poster_path}/>)}
    </div>
    </>
  )
}

export default MovieList