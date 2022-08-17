import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/Request";
import jwt_decode from "jwt-decode";

const initialState = {
  checkusers: [], //아이디,ok값저장
  loading: false,
  error: null,
};

export const __postCheckUser = createAsyncThunk(
  "checkusers/__postUser",
  async ({ login, navigate }, thunkAPI) => {
    try {
      const data = await instance.post(`/login`, login);
      const token = data.data.token;
      localStorage.setItem("token", token); //토큰 로컬 저장하는부분
      console.log(jwt_decode(token));
      const userId = jwt_decode(token);
      if (data.data.ok == true) {
        alert(`${userId.loginId}님 환영합니다`);
        navigate("/");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      if (error.response.data.ok == false) {
        alert(`${error.response.data.errorMessage}`);
      }
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
      state.loading = false;
      state.checkusers = action.payload;
      console.log(action.payload);
    },
    [__postCheckUser.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
  },
});

export const { logOutUser } = LoginSlice.actions;
export default LoginSlice.reducer;
