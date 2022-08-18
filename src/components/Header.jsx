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
    <StyledDiv>
      <StyledDivHeader>
        {token ? (
          <Buttonbox>
            <Text style={{ margin: '0 auto' }}
              onClick={() => {
                navigation("/");
              }}
            >
              처음으로
            </Text>
            <Text style={{ margin: '0 auto' }}
              onClick={() => {
                navigation("/writepage");
              }}
            >
              글쓰기
            </Text>
            <Text style={{ margin: '0 auto' }} onClick={logOut}>로그아웃</Text>
          </Buttonbox>
        ) : (
          <Buttonbox>
            <Text style={{ margin: '0 auto' }}
              onClick={() => {
                navigation("/");
              }}
            >
              처음으로
            </Text>
            <Text style={{ margin: '0 auto' }}
              onClick={() => {
                navigation("/sign");
              }}
            >
              회원가입
            </Text>
            <Text style={{ margin: '0 auto' }}
              onClick={() => {
                navigation("/login");
              }}
            >
              로그인
            </Text>
          </Buttonbox>
        )}
      </StyledDivHeader>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
    box-sizing: border-box;
    padding: 0;
    outline : none;

`;
const StyledDivHeader = styled.div`
  /* background-image:url("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2e53557e-b7ba-4413-a83c-2c154ee196a0/01header.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220817T162059Z&X-Amz-Expires=86400&X-Amz-Signature=4f9611641a2f69169ead9e3c98ed7505455a70b2a551be3d1b065bfe62a8e1b9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2201header.jpeg%22&x-id=GetObject"); */
  background-image:url("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/81cf5940-582b-4571-85f1-5c11b8ab80d4/02header.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220817T163550Z&X-Amz-Expires=86400&X-Amz-Signature=82d5424f129dae108961a199eacccecfd0cae5d6179fb6e3edadc04aad332177&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2202header.jpeg%22&x-id=GetObject");
  height: 200px;  
  background-size: cover;
  background-position: center;
`;


const Buttonbox = styled.div`
  display: flex;
  margin: 10px;
  border: 20px;
  margin-left: auto;
  width: 300px;
  height:30px;
  text-align: center;
  cursor: pointer;
`;

export default Header;
