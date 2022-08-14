import React from "react";
import Input from "../../ele/Input";
import Button from "../../ele/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __postUser } from "../../redux/modules/signSlice";

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
  // const [confrim, Setconfrim] = useState(false);
  function is_nickname(asValue) {
    let regExp = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{2,10}$/;
    return regExp.test(asValue);
  } ///닉네임 정규식

  const passwordCheck = (passward) => {
    let passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
    return passwordRegEx.test(passward);
  }; //비밀번호 정규식
  const onchangeHandler = (event) => {
    const { value, name } = event.target;
    Setsign({ ...sign, [name]: value });
  };
  const nickonBlurHandler = (id) => {
    if (!is_nickname(id)) {
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
      is_nickname(sign.loginId) &&
      passwordCheck(sign.password) &&
      sign.password === sign.confirm
    ) {
      // dispatch(__postUser(signData));
      dispatch(__postUser(sign));
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
        <Input
          onBlur={() => {
            nickonBlurHandler(sign.loginId);
          }}
          name="loginId"
          onChange={onchangeHandler}
        ></Input>
        {nickname ? (
          <div style={{ color: "red" }}>아이디형식을 맞춰주세요!</div>
        ) : null}
        <label>비밀번호</label>
        <Input
          name="password"
          type="password"
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
          type="password"
          name="confirm"
          onChange={onchangeHandler}
        ></Input>
        {sign.password !== sign.confirm ? (
          <div style={{ color: "red" }}>비밀번호가 틀립니다</div>
        ) : null}

        <Button>회원가입완료!</Button>
      </form>
    </div>
  );
};
export default SignForm;
