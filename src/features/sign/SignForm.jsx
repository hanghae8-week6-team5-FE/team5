import React from "react";
import Input from "../../ele/Input";
import Button from "../../ele/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __postUser, __CheckeUserId } from "../../redux/modules/signSlice";
import { idCheck, passwordCheck } from "../../shared/regExp";

const SignForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sign, Setsign] = useState({
    loginId: "",
    password: "",
    confirm: "",
  });
  const [nickname, Setnickname] = useState(false);
  const [password, Setpassword] = useState(false);
  const onchangeHandler = (event) => {
    const { value, name } = event.target;
    Setsign({ ...sign, [name]: value });
  };
  const nickonBlurHandler = (id) => {
    if (!idCheck(id)) {
      Setnickname(true);
    } else {
      Setnickname(false);
    }
  };
  const passwordonBlurHandler = (password) => {
    if (!passwordCheck(password)) {
      Setpassword(true);
    } else {
      Setpassword(false);
    }
  };
  const CheckIdClickHandler = () => {
    dispatch(__CheckeUserId(sign.loginId));
  };
  const onSumitHandler = (event) => {
    event.preventDefault();

    if (
      sign.loginId.trim() === "" ||
      sign.password.trim() === "" ||
      sign.confirm.trim() === ""
    ) {
      return alert("모든 항목을 입력해주세요.");
    }
    if (
      idCheck(sign.loginId) &&
      passwordCheck(sign.password) &&
      sign.password === sign.confirm
    ) {
      // dispatch(__postUser(signData));
      dispatch(__postUser(sign));
      Setsign({
        loginId: "",
        password: "",
        confirm: "",
      });
      window.alert("회원가입성공했습니다~");
      navigate("/login");
    } else {
      return window.alert("회원가입실패!!");
    }
  };
  return (
    <div>
      <form onSubmit={onSumitHandler}>
        <label>아이디생성</label>
        <StCheckbox>
          <Input
            onBlur={() => {
              nickonBlurHandler(sign.loginId);
            }}
            name="loginId"
            onChange={onchangeHandler}
            placeholder="🔑아이디"
            value={sign.loginId}
          ></Input>
          <Button type="button" onClick={CheckIdClickHandler}>
            아이디중복확인
          </Button>
        </StCheckbox>

        {nickname ? (
          <div style={{ color: "red" }}>아이디형식을 맞춰주세요!</div>
        ) : null}
        <label>비밀번호</label>
        <Input
          value={sign.password}
          name="password"
          type="password"
          placeholder="🔒 비밀번호"
          onChange={onchangeHandler}
          onBlur={() => {
            passwordonBlurHandler(sign.password);
          }}
        ></Input>
        {password ? (
          <div style={{ color: "red" }}>비밀번호형식을 맞춰주세요!</div>
        ) : null}
        <label>비밀번호체크 </label>
        <Input
          value={sign.confirm}
          type="password"
          name="confirm"
          onChange={onchangeHandler}
          placeholder="🔒 비밀번호 확인"
        ></Input>
        {sign.password !== sign.confirm ? (
          <div style={{ color: "red" }}>
            비밀번호와 비밀번호 재확인 틀립니다
          </div>
        ) : null}

        <Button>회원가입완료!</Button>
      </form>
    </div>
  );
};
export default SignForm;
const StCheckbox = styled.div`
  display: flex;
  flex-direction: row;
`;
