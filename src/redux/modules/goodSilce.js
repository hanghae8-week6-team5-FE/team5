import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/Request";

const initialState = {
  goodusers: [],
  isLoading: false,
};

export const __goodUser = createAsyncThunk(
  "goodusers/__goodUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.post(`/like/${payload}`);
      if (data.data.ok == true) {
        alert(`${data.data.message}`);
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.data.ok == false) {
        alert(`${error.response.data.errorMessage}`);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const GoodSlice = createSlice({
  name: "goodusers",
  initialState,

  reducers: {
    goodUser: (state, payload) => {
      state.goodusers = { good: 0 };
    },
  },
  reducers: {},
  extraReducers: {
    [__goodUser.pending]: (state) => {
      state.isLoading = true;
    },

    [__goodUser.fulfilled]: (state, action) => {},

    [__goodUser.fulfilled]: (state, action) => {
      console.log(state.action);
      state.goodusers = state.action;
    },
    [__goodUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = GoodSlice.actions;
export default GoodSlice.reducer;
