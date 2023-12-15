import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let api = "http://localhost:3000/data";
export let get = createAsyncThunk("data/get", async function () {
  try {
    let { data } = await axios.get(api);
    return data;
  } catch (error) {
    console.error(error);
  }
});
let todo = createSlice({
  name: "todo",
  initialState: { data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export default todo.reducer;
