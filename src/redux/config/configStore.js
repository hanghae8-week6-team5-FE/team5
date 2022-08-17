import { configureStore, createSlice } from "@reduxjs/toolkit";
import login from "../modules/loginSlice";
import sign from "../modules/signSlice";
import write from "../modules/writeSlice";
import main from "../modules/mainSlice";
import detail from "../modules/DetailSlice";
import good from "../modules/goodSilce";

const store = configureStore({
  reducer: { login, sign, write, main, detail, good },
});

export default store;
