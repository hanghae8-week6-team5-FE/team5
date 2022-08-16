import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/Request";

const initialState = {
  users: [],

  isLoading: false,
};

//회원가입
export const __postUser = createAsyncThunk(
  "users/__postUser",
  async (payload, thunkAPI) => {
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
//아이디중복확인
export const __CheckeUserId = createAsyncThunk(
  "users/__CheckeUserId",
  async ({ sign, Setcehckdiv }, thunkAPI) => {
    console.log(sign, Setcehckdiv);
    try {
      const data = await instance.post(`/idCheck`, sign);
      if (data.data.ok == true) {
        alert("사용가능한아이디입니다");
        Setcehckdiv(data.data.ok);
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      alert("이미 있는 아이디 입니다");
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const SignupSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeCheckId: (state, payload) => {
      state.checkId = state.action;
    },
  },
  extraReducers: {
    [__postUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__postUser.fulfilled]: (state, action) => {
      state.users = state.action;
    },
    [__postUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__CheckeUserId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [__CheckeUserId.rejected]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
  },
});

export const { changeCheckId } = SignupSlice.actions;
export default SignupSlice.reducer;
