import { configureStore, createSlice } from "@reduxjs/toolkit";
import login from "../modules/loginSlice";
import sign from "../modules/signSlice";
import write from "../modules/writeSlice";
import main from "../modules/mainSlice";

const store = configureStore({
  reducer: { login, sign, write, main },
});

export default store;
