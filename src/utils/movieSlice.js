import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { 
    nowPlayingMovies: null,
    trailerVideo:null
 },
 reducers:{
    addNowPlayingMovies:(state,action)=>{
        state.nowPlayingMovies=action.payload;
    },
    addTrailer:(state,action)=>{
      state.trailerVideo=action.payload;
    }
 }
});

export default movieSlice.reducer;
export const {addNowPlayingMovies,addTrailer} =movieSlice.actions;
