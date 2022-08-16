import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/Request";

const initialState = {
  lists: [],
  isLoading: false,
};

export const __GetList = createAsyncThunk(
  "lists/__GetList",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/post`);
      return thunkAPI.fulfillWithValue(data.data.result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: {
    [__GetList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.lists = action.payload;
    },
  },
});

export const { openList } = MainSlice.actions;
export default MainSlice.reducer;
