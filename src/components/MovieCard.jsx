import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
const MovieCard = ({img}) => {
    const img_link=IMG_CDN_URL+img;
  return (
    <img className='h-[15rem] p-2 hover:scale-125 transition ease-in-out duration-300' src={img_link} alt="" />
  )
}

export default MovieCard