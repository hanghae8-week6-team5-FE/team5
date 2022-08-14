import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../api/Request";

const initialState = {
  checkusers: [], //아이디,ok값저장
  loading: false,
  error: null,
};

export const __postCheckUser = createAsyncThunk(
  "users/__postUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.post(
        `http://shshinkitec.shop/api/login`,
        payload
      );
      localStorage.setItem("token", data.data.token);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//슬라이스영역
export const LoginSlice = createSlice({
  name: "checkuser",
  initialState,
  reducers: {
    logOutUser: (state, payload) => {
      state.checkusers = { result: false };
    },
  },
  extraReducers: {
    [__postCheckUser.pending]: (state) => {
      state.loading = true;
    },
    [__postCheckUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      // window.alert("로그인성공입니다");
    },
    [__postCheckUser.rejected]: (state, action) => {
      state.isLoading = false;
      // window.alert("로그인실패입니다");
    },
  },
});

export const { logOutUser } = LoginSlice.actions;
export default LoginSlice.reducer;
