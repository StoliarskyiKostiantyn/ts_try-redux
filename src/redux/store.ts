import { configureStore } from "@reduxjs/toolkit";
import valueSlice from "./reducer";

export const store = configureStore({
  reducer: {
    counter: valueSlice,
  },
});
