import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const __postUser = createAsyncThunk(
  "users/__postUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.post(
        `http://shshinkitec.shop/api/signup`,
        payload
      );
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
      state.users.push(action.payload);
    },
    [__postUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = SignupSlice.actions;
export default SignupSlice.reducer;
