import axios from "axios";

const instance = axios.create({
  baseURL: "http://shshinkitec.shop/api",
<<<<<<< HEAD
  headers: {
    "Content-Type": "application/json",
  },
=======
>>>>>>> da0a0738394f0d818c8890d19bb99c4814a04c13
  // headers: {
  //   "Content-Type": "application/json",
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // },
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});
instance.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("token");
  if (accessToken) {
    config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});
<<<<<<< HEAD
instance.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("token");
  if (accessToken) {
    config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});
=======
>>>>>>> da0a0738394f0d818c8890d19bb99c4814a04c13

export const apis = {
  //login
  //signup
  //writepage
};

// 가지고 있는 토큰 넣어주기!
// 로그인 전이면 토큰이 없으니 못 넣어요.
// 그럴 땐 로그인 하고 토큰을 받아왔을 때 넣어줍시다.

export default instance;
