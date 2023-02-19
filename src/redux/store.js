import { configureStore } from "@reduxjs/toolkit";
import addtodoreducer from "../features/addtodoslice.js";

export const store = configureStore({
  reducer: { addtodo: addtodoreducer },
});
