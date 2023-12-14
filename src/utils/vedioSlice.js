import { createSlice } from "@reduxjs/toolkit";

const vedioSlice = createSlice({
    name:"vedios",
    initialState:{
        popular:null
    },
    reducers:{
        addPopularMovies:(state,action)=>{
            state.popular = action.payload
        }
    }
})



export default vedioSlice.reducer;
export const{addPopularMovies} = vedioSlice.actions;