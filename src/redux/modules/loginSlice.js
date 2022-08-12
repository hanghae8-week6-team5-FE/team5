import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  checkusers: [],
};

export const __postCheckUser = createAsyncThunk(
  "users/__postUser",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(``, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const LoginSlice = createSlice({
  name: "checkuser",
  initialState,
  reducers: {},
  extraReducers: {
    [__postCheckUser.pending]: (state) => {},
    [__postCheckUser.fulfilled]: (state, action) => {
      state.checkusers.push(action.payload);
    },
  },
});

export const {} = LoginSlice.actions;
export default LoginSlice.reducer;
