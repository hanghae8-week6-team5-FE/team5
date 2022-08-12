import React from "react";
import styled from "styled-components";
import Text from "../ele/Text";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  return (
    <StHeader>
      <Text size="25" color="#ee6705">
        Memorable
      </Text>
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
          navigation={"/login"}
        >
          로그인
        </Text>
      </Buttonbox>
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
