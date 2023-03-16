import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    INCREMENT: (state, action) => {
      state.count += action.payload;
    },
    DECREMENT: (state, action) => {
      state.count -= action.payload;
    },
    MULTIPLY: (state, action) => {
      state.count = state.count * action.payload;
    },
    DIVIDE: (state, action) => {
      state.count = state.count / action.payload;
    },
    RESET: (state) => {
      state.count = 0;
    },
  },
});

export const { INCREMENT, DECREMENT, MULTIPLY, DIVIDE, RESET } = counterSlice.actions;

export default counterSlice.reducer;
