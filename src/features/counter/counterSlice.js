import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    //named for calling
    name: 'counter',
    //initial value is 0
    initialState: {
        value: 0,
    },
    //reducer contains action creators
    reducers: {
        //action creators
        increment: (state) => {
            state.value +=1
        },
        decrement : (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

//exporting all action creators
export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer