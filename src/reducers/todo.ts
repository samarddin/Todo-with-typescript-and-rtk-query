import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let api = "http://localhost:3000/data";
export let get: any = createAsyncThunk("data/get", async function () {
  try {
    let { data } = await axios.get(api);
    return data;
  } catch (error) {
    console.error(error);
  }
});
export let deleteUser:any = createAsyncThunk(
  "data/deleteUser",
  async function (id, { dispatch }) {
    try {
      let { data } = await axios.delete(`${api}/${id}`);
      dispatch(get());
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
);
let todo = createSlice({
  name: "todo",
  initialState: { data: [], modalEdit: false },
  reducers: {
    setModal: (state) => { 
      state.modalEdit =  true
    }
  },
  extraReducers: (builder) => {
    builder.addCase(get.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export default todo.reducer;
export let { setModal } = todo.actions
