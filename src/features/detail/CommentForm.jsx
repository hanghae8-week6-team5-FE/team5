import React, { useEffect, useState } from "react";
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
  console.log(comments);

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
    const postcomment = { comment, id };
    dispatch(__postComment(postcomment));
  };
  useEffect(() => {
    dispatch(__getComment);
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
      <ul>
        <StyledInputBox_Li>
          댓글이 적혀있습니니다. 댓글을 적었습니다!
          <StyledBtn>수정하기</StyledBtn>
          <StyledBtn>삭제하기</StyledBtn>
        </StyledInputBox_Li>
        <StyledInputBox_Li>
          Test Commit Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          In blanditiis culpa mollitia, numquam repudiandae, modi perferendis
          quam quidem molestiae exercitationem incidunt facilis minima velit
          rerum voluptas magnam quod. Odit, assumenda.
          <StyledBtn>수정하기</StyledBtn>
          <StyledBtn>삭제하기</StyledBtn>
        </StyledInputBox_Li>
      </ul>
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
