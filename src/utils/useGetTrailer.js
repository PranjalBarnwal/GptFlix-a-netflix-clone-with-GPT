import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { addTrailer } from '../utils/MovieSlice';
import { useDispatch } from 'react-redux';

export const useGetTrailer=(id)=>{
    const dispatch=useDispatch();
    const getTrailerById=async(id)=>{
       const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,API_OPTIONS);
       const json=await data.json();
       const filterData=json.results.filter(data=>data.type==="Trailer");
       if(!filterData){
        dispatch(addTrailer(json.results[0]));
       }
       else dispatch(addTrailer(filterData[0]));
    }

    useEffect(()=>{
        getTrailerById(id);
    },[])
}