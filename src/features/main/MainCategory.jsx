import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __goodUser } from "../../redux/modules/goodSlice";
const MainCategory = ({ list }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goodHandler = () => {
    dispatch(__goodUser(list.postId));
  };

  const { title, images, postId, loginId } = list;
  // console.log(title);
  // console.log(images);
  return (
    <StListOutline>
      <StList
        onClick={() => {
          navigate(`/detail/${postId}`);
        }}
      >
        <StPostImg
          onClick={() => {
            navigate(`/detail/${postId}`);
          }}
          src={images}
          alt="사진"
        />
        <StTextBox>
          <StInnerText>{title}</StInnerText>
          <StNickname>{loginId}</StNickname>
        </StTextBox>
      </StList>
    </StListOutline>
  );
};

const StListOutline = styled.div`
  width: 90%;
  height: 90%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  margin: 30px 20px 30px;
  flex-direction: column;
  align-items: flex-end;
  box-shadow: 0px 5px 10px #00000020;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 5px 20px #00000040;
  }
`;

const StList = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 10px;
  background-color: white;
  border-radius: 20px;
  /* cursor: pointer;
  &:hover {
    border: 5px solid transparent;
  } */
`;

const StPostImg = styled.img`
  width: 100%;
  height: 70%;
  background-color: #ddd;
  border-radius: 20px 20px 0px 0px;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ),
    url(${(props) => props.postImage});
  background-position: center 30%;
  background-size: cover;
`;

const StInnerText = styled.div`
  font-family: "BMHANNAPro";
  font-size: 30px;
  width: 100%;
  color: black;
  text-align: left;
  margin-left: 24px;
`;

const StNickname = styled.span`
  color: #e2e2e2;
  font-size: 14px;
  text-align: left;
  margin-left: 24px;
  font-weight: bold;
`;

const StImage = styled.div`
  /* width: 100%;
  height: 200px;
  border: 1px solid black; */
  width: 100%;
  height: 70%;
  background-color: black;
  border-radius: 20px 20px 0px 0px;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ),
    url(${(props) => props.postImage});
  background-position: center 30%;
  background-size: cover;
`;

const StTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  background-color: white;
  width: 300px;
`;

const StlikeBtn = styled.img`
  width: 20px;
  height: auto;
  opacity: 0.6;
  background-color: red;
  justify-content: right;
`;

export default MainCategory;