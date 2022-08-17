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
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    Setcomment({ ...comment, [name]: value });
  };

  const [comment, Setcomment] = useState({
    comment: "",
  });

  const onSubmitHandlr = (event) => {
    event.preventDefault();
    dispatch(__postComment({ comment, id }));
  };

  useEffect(() => {
    dispatch(__getComment(id));
  }, []);

  return (
    <div>
      <StyledWriteBox>
        <form onSubmit={onSubmitHandlr}>
          <StyledInputBox
            type="text"
            spellcheck="false"
            name="comment"
            onChange={onChangeHandler}
          />
          <Button>추가하기</Button>
        </form>
      </StyledWriteBox>

      {comments.map((comment, idx) => {
        return <Comment key={idx} comment={comment}></Comment>;
      })}
    </div>
  );
};
export default CommentForm;

const StyledWriteBox = styled.div`
  width: 100%;
`;

const StyledInputBox = styled.input`
  color: rgb(144, 200, 247);
  width: 80%;
  padding: 10px;
  border-radius: 20px;
  border: 2px solid rgb(144, 200, 247);
  background-color: white;

  &:focus {
    outline: none;
  }
`;

const StyledInputBox_Li = styled.li`
  list-style-type: none;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledBtn = styled.button`
  color: white;
  border: solid 2px transparent;
  padding: 5px;
  border-radius: 10px;
  margin: 1px;
  background-color: rgb(144, 200, 247);

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: grey;
    border: solid 2px rgb(144, 200, 247);
  }
`;
