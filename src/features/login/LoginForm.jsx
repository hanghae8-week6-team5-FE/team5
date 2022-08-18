import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../../ele/Input";
import Button from "../../ele/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __postCheckUser } from "../../redux/modules/loginSlice.js";
import { useSelector } from "react-redux";

const LoginForm = () => {
  const navigate = useNavigate();
  const { checkusers } = useSelector((state) => state.login);
  console.log(checkusers);
  const dispatch = useDispatch();
  const [formstate, setFormState] = useState(false); //버튼잠금
  const [login, Setlogin] = useState({
    loginId: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    Setlogin({ ...login, [name]: value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(__postCheckUser({ login, navigate }));
    if (login.loginId.trim() === "" || login.password.trim() === "") {
      return alert("모든 항목을 입력해주세요.");
    }
    Setlogin({
      loginId: "",
      password: "",
    });
  };
  useEffect(() => {
    if (login.loginId !== "" && login.password !== "") {
      setFormState(true);
    } else {
      setFormState(false);
    }
  }, [login]);
  return (
    <StyLoginForm>
      <form onSubmit={onSubmitHandler}>
        <h2 style={{ width: "350px", height: "60px", margin: "0 auto" }}>✨Welcome to Login✨</h2>
        <label>
          <p align="left"> UserID </p>
          <Input
            value={login.loginId}
            name="loginId"
            onChange={onChangeHandler}
          ></Input>
        </label>

        <label>
          <p align="left"> PassWord </p>
          <Input
            value={login.password}
            name="password"
            onChange={onChangeHandler}
            type="password"
          ></Input>
        </label>

        <div>
          <Button bgColor=" rgb(215, 98, 115)" disabled={!formstate}>
            로그인
          </Button>

          <Button
            onClick={() => {
              navigate("/sign");
            }}
          >
            회원가입으로
          </Button>
        </div>
      </form>
    </StyLoginForm>
  );
};


const StyLoginForm = styled.div`
            border-radius: 10px;
            padding:30px 50px;
            text-align: center;
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%, -50%);
              `;
export default LoginForm;

