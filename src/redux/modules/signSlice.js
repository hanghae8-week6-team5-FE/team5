import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const __postUser = createAsyncThunk(
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

export const SignupSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [__postUser.pending]: (state) => {},
    [__postUser.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const {} = SignupSlice.actions;
export default SignupSlice.reducer;
