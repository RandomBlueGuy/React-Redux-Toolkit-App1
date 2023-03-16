import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const PostsSlice = createSlice({
   name: "postsSlice",
   initialState: {
     postsArr: [],
     loading: false,
     error: null
   },
   reducers: {
     POSTS_SUCCESS: (state, action) => {
       state.postsArr = action.payload;
       state.loading = false;
       state.error = null;
     },
     POSTS_LOADING: (state) => {
       state.loading = true;
       state.error = null;
     },
     POSTS_ERROR: (state, action) => {
       state.loading = false;
       state.error = action.payload;
     },
   },
 });

 export const getPosts = () => {
   return async (dispatch) => {
     dispatch({ type: POSTS_LOADING });
     try {
       const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
       setTimeout(() => {
         dispatch({ type: POSTS_SUCCESS, payload: response.data });
       }, 2000);
     } catch (error) {
       dispatch({ type: POSTS_ERROR, payload: error.message });
     }
   };
 };
export const { POSTS_SUCCESS, POSTS_LOADING, POSTS_ERROR } = PostsSlice.actions;

export default PostsSlice.reducer;