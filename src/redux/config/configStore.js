import { configureStore, createSlice } from "@reduxjs/toolkit";
import login from "../modules/loginSlice";
import sign from "../modules/signSlice";
import write from "../modules/writeSlice";

const store = configureStore({
  reducer: { login, sign, write },
});

export default store;
