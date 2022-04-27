import { createAction } from "@reduxjs/toolkit";

const increment = createAction<number, "increment">("increment");
const decrement = createAction<number, "decrement">("decrement");

export { increment, decrement };
