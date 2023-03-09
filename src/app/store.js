import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
 reducer: {
    //within the store we need to import the reducer function from the counterSlice.
    //Defining it withi nthe reducer paramter tells the store to use this slice reducer
    //function to handle all updates to that state.
    counter: counterReducer,
 },
})
