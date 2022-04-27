import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { increment, decrement } from "./actions";

const valueReducer = createReducer(0, {
  [increment.type]: (state: number, action: { payload: number }) =>
    state + action.payload,
  [decrement.type]: (state: number, action: { payload: number }) =>
    state - action.payload,
});

const stepReducer = (state = 5, action: { payload: number }) => state;
export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
