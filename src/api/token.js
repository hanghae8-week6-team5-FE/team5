import axios from "axios";
import instance from "./Request";

export default function setToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
    delete axios.defaults.headers["Authorization"];
  }
}
