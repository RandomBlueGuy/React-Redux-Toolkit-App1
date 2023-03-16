import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/counterSlice";
import postsReducer  from '../Features/Posts/postsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    postsSlice: postsReducer 
  }
})
