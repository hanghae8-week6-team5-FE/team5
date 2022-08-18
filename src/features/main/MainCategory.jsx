import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __goodUser } from "../../redux/modules/goodSilce";
import { __GetList } from "../../redux/modules/mainSlice";
import Button from "../../ele/Button";

const MainCategory = ({ list }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goodHandler = () => {
    dispatch(__goodUser(list.postId));
  };

  console.log(list);

  const { title, images, postId, loginId } = list;
  console.log(title);
  return (
    <StListOutline>
      <StList>
        <StPostImg
          onClick={() => {
            navigate(`/detail/${postId}`);
          }}
          src={images}
          alt="사진"
        ></StPostImg>

        <h2 style={{ margin: "auto" }}>✨리뷰 : {list.title}</h2>
        <p style={{ margin: "auto" }}  >🎉작성자 : {list.loginId}</p>
        <h3 style={{ margin: "auto" }} onClick={goodHandler}>👍🏻{list.likes}개</h3>
      </StList >
    </StListOutline >
  );
};

const StButtonLike = styled.button`
  display: flex;
  justify-content: flex-end;
  &:hover {
    background-color: white;
  }
  color: black;
  border: 1px;
  border-radius: 5px;
  cursor: pointer;

  margin: auto;
  /* border: 1px solid black; */
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

const StInnerText = styled.div`
  font-family: "BMHANNAPro";
  font-size: 30px;
  width: 100%;
  color: black;
  text-align: left;
  margin-left: 24px;
`;
export default MainCategory;