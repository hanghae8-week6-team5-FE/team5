import React, { useEffect } from "react";
import styled from "styled-components";
import Text from "../ele/Text";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../redux/modules/loginSlice";

const Header = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigation = useNavigate();
  const logOut = () => {
    alert("정상 로그아웃 되었습니다.");
    localStorage.removeItem("token");
    dispatch(logOutUser());
    navigation("/login");
  };

  return (
    <StHeader>
      <Text size="25" color="#ee6705">
        Memorable
      </Text>
      {token ? (
        <Buttonbox>
          <Text
            onClick={() => {
              navigation("/writepage");
            }}
          >
            글쓰기 |
          </Text>
          <Text onClick={logOut}>로그아웃</Text>
        </Buttonbox>
      ) : (
        <Buttonbox>
          <Text
            onClick={() => {
              navigation("/sign");
            }}
          >
            회원가입 |
          </Text>
          <Text
            onClick={() => {
              navigation("/login");
            }}
          >
            로그인
          </Text>
        </Buttonbox>
      )}
    </StHeader>
  );
};
const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 45px;
  padding: 15px 8px;
`;
const Buttonbox = styled.div`
  display: flex;
  margin: 10px;
`;
export default Header;
