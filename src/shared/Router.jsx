import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Sign from "../pages/Sign";
import WritePage from "../pages/WritePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign" element={<Sign />}></Route>
        <Route path="/writepage" element={<WritePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
