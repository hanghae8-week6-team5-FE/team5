import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../api/Request";

const initialState = {
  checkusers: [],
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

// export const __login = createAsyncThunk(
//   "log/LOGIN_LOG",
//   async (payload, thunkAPI) => {
//     const response = await instance.post("/login", payload);
//     // 토큰 localstorge 저장하기
//     localStorage.setItem("token", response.data.token);
//     // 로그인 상태 값 {true / false}
//     return response.data;
//   }
// );

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
      state.checkusers = action.payload;
    },
    [__postCheckUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { logOutUser } = LoginSlice.actions;
export default LoginSlice.reducer;
