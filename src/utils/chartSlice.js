import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
    name:"liveChart",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.unshift(action.payload)
        }
    }

})


export default chartSlice.reducer;
export const{addMessage} = chartSlice.actions;