import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  write: [],
};

export const __postWrite = createAsyncThunk(
  "users/__postWrite",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`http://localhost:3001/write`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const SignupSlice = createSlice({
  name: "write",
  initialState,
  reducers: {},
  extraReducers: {
    [__postWrite.pending]: (state) => {},
    [__postWrite.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const {} = SignupSlice.actions;
export default SignupSlice.reducer;
