import { createSlice } from "@reduxjs/toolkit";



export interface CounterState {
    counter: number
}

const initialState : CounterState = {
    counter: 0
}
export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.counter ++;
        },
        decrement:(state)=>{
            state.counter --;
        }
    

    }

}) 

export const {increment,decrement} = CounterSlice.actions;
export default CounterSlice.reducer;
