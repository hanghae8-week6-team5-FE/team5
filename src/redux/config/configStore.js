import { configureStore, createSlice } from "@reduxjs/toolkit";
import login from "../modules/loginSlice";
import sign from "../modules/signSlice";
import write from "../modules/writeSlice";
import mainSlice from "../modules/mainSlice";

const store = configureStore({
  reducer: { login, sign, write, mainSlice: mainSlice.reducer },
});

export default store;
