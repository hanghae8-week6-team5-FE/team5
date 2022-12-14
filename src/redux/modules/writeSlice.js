import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/Request";

const initialState = {
  write: [],
};

export const __postWrite = createAsyncThunk(
  "users/__postWrite",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post(`/post`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.data.ok == false) {
        alert(`${error.response.data.errorMessage}`);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const WriteSlice = createSlice({
  name: "write",
  initialState,
  reducers: {},
  extraReducers: {
    [__postWrite.pending]: (state) => { },
    [__postWrite.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__postWrite.rejected]: (state, action) => {
      state.error = action.payload;
      console.log(action.payload.response.data);
    },
  },
});

export const { } = WriteSlice.actions;
export default WriteSlice.reducer;
