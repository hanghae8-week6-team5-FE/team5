import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/Request";

const initialState = {
  lists: [],
  isLoading: false,
};

export const __GetList = createAsyncThunk(
  "users/__CheckeUserId",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`http://shshinkitec.shop/api/post`);
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
    [__GetList.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = MainSlice.actions;
export default MainSlice.reducer;
