import { createSlice } from "@reduxjs/toolkit";

let initialState={
    value:""
};

export const setHeader=createSlice({
    name:"header",
    initialState,
    reducers:{
        setValue:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {setValue}=setHeader.actions;
export default setHeader.reducer;