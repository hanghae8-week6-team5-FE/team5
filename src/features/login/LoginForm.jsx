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
    dispatch(__postCheckUser(login));
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
    <Stlogin>
      <form onSubmit={onSubmitHandler}>
        <label>아이디</label>
        <Input
          value={login.loginId}
          name="loginId"
          onChange={onChangeHandler}
        ></Input>
        <label>비밀번호</label>
        <Input
          value={login.password}
          name="password"
          onChange={onChangeHandler}
          type="password"
        ></Input>
        <Button bgColor="#FE531F" disabled={!formstate}>
          로그인
        </Button>
      </form>
      <Button
        onClick={() => {
          navigate("/sign");
        }}
      >
        회원가입으로
      </Button>
    </Stlogin>
  );
};
const Stlogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default LoginForm;
