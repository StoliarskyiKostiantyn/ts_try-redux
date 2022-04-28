import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  step: 5,
};
const valueSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
  },
});
export const { increment, decrement } = valueSlice.actions;
export default valueSlice.reducer;
