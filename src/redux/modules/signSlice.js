import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {
    checkId: false,
  },
  //result:false,
  //checkName:false,
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
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://localhost:3001/user/?loginID=${payload}`
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
  reducers: {
    changeCheckId: (state, payload) => {
      state.checkId = false;
    },
  },
  extraReducers: {
    [__postUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__postUser.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    },
    [__postUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__CheckeUserId.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    },
    [__CheckeUserId.rejected]: (state, action) => {
      state.isLoading = false;
      window.alert("이미 존재하는 아이디입니다.");
    },
  },
});

export const { changeCheckId } = SignupSlice.actions;
export default SignupSlice.reducer;
