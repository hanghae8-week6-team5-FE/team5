import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../ele/Input";
import Button from "../../ele/Button";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [login, Setlogin] = useState({
    loginId: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    Setlogin({ ...login, [name]: value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Stlogin>
      <form onSubmit={onSubmitHandler}>
        <label>아이디</label>
        <Input name="loginId" onChange={onChangeHandler}></Input>
        <label>비밀번호</label>
        <Input
          name="password"
          onChange={onChangeHandler}
          type="password"
        ></Input>
        <Button>로그인</Button>
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
