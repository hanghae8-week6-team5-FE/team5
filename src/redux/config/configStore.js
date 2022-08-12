import { configureStore, createSlice } from "@reduxjs/toolkit";
import login from "../modules/loginSlice";
import sign from "../modules/signupSlice";

const store = configureStore({
  reducer: { login, sign },
});

export default store;
