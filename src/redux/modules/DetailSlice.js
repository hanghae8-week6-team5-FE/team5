import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/Request";

const initialState = {
  posts: [],
  comments: [],
  loading: false,
  error: null,
};

export const __getDetailUser = createAsyncThunk(
  "postst/__getDetailUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.get(`/post/${payload}`);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//슬라이스영역
export const LoginSlice = createSlice({
  name: "DetailComment",
  initialState,
  reducers: {},
  extraReducers: {
    [__getDetailUser.pending]: (state) => {
      state.loading = true;
    },
    [__getDetailUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.result;
    },
    [__getDetailUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = LoginSlice.actions;
export default LoginSlice.reducer;
