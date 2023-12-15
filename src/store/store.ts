import { configureStore } from "@reduxjs/toolkit";
import todo from "../reducers/todo";
export let store = configureStore({
  reducer: {
    todo,
  },
});
