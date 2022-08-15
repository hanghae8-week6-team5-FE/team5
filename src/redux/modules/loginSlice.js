import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../api/Request";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import setToken from "../../api/token";

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
      const data = await instance.post(`/login`, payload);
      const token = data.data.token;
      localStorage.setItem("token", token); //토큰 로컬 저장하는부분
      console.log(jwt_decode(token));
      const userId = jwt_decode(token);

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
      state.checkusers = { ok: false };
    },
  },
  extraReducers: {
    [__postCheckUser.pending]: (state) => {
      state.loading = true;
    },
    [__postCheckUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.checkusers = action.payload;
      console.log(action.payload);
    },
    [__postCheckUser.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload.response.data);
      // window.alert("로그인실패입니다");
    },
  },
});

export const { logOutUser } = LoginSlice.actions;
export default LoginSlice.reducer;
