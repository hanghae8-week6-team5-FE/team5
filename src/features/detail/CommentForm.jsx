import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __postComment, __getComment } from "../../redux/modules/DetailSlice";
import Button from "../../ele/Button";
import { useParams } from "react-router-dom";

const CommentForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.detail);
  const [newcomment, Setnewcomment] = useState(comments);
  console.log(newcomment);

  const [comment, Setcomment] = useState({
    comment: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    Setcomment({ ...comment, [name]: value });
    // console.log(comment);
  };

  const onSubmitHandlr = (event) => {
    event.preventDefault();
    dispatch(__postComment({ comment, id }));
  };

  useEffect(() => {
    dispatch(__getComment(id));
  }, []);
  useEffect(() => {
    Setcomment(comments.comment);
  }, []);

  return (
    <div style={{ width: "55vw", display: "Flex", flexDirection: "column", margin: "auto" }}>
      <StyledWriteBox>
        <form style={{ width: "55vw", display: "flex", flexDirection: "row", gap: "20px" }} onSubmit={onSubmitHandlr}>
          <StyledInputBox
            type="text"
            spellcheck="false"
            name="comment"
            onChange={onChangeHandler}
          />
          <StyledBtn>추가하기</StyledBtn>
        </form>
      </StyledWriteBox>
      <StyledInputBox_Li>
        {comments.map((comment, idx) => {
          return <Comment key={idx} comment={comment}></Comment>;
        })}</StyledInputBox_Li>
    </div>
  );
};

export default CommentForm;

const StyledWriteBox = styled.div`
  width: 100%;
`;

const StyledInputBox = styled.input`
  color: rgb(215, 98, 115);//폰트색
  width: 47vw;
  padding: 10px;
  border-radius: 20px;
 border: 2px solid rgba(215, 98, 115, 30%) ;//댓입력 보더
  background-color: white;

  &:focus {
    outline: none;
    border: 2px solid rgb(215, 98, 115) ;
  }
`;

const StyledInputBox_Li = styled.li`
  list-style-type: none;
  margin-top: 20px;
  margin-bottom: 20px;
`;


const StyledBtn = styled.button`
  color: white;
  border: solid 2px ;
  padding: px;
  border-radius: 10px;
  margin: 1px;
  background-color: rgb(215, 98, 115);

  &:hover {
    cursor: pointer;
    border: solid 2px transparent;
    background-color: white;
    color: rgb(215, 98, 115);
    border: solid 2px white;
    }
`;
