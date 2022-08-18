import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __putComment, __deleteComment } from "../../redux/modules/DetailSlice";
import { useParams } from "react-router-dom";

const Comment = ({ comment }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [edit, Setedit] = useState(false);
  const [comments, Setcomments] = useState({
    comment: "",
  });
  const commentid = comment.commentId;

  const onEditHandler = () => {
    Setedit((prev) => !prev);
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    Setcomments({ ...comments, [name]: value });
    console.log(comments);
  };
  const onSubmtHandler = (event) => {
    dispatch(__putComment({ commentid, comments }));

    Setcomments({
      comment: "",
    });
  };
  const onDeleteHandelr = () => {
    dispatch(__deleteComment(comment.commentId));
  };
  return (
    <div>
      {edit ? (
        <div style={{ width: "55vw", display: "Flex", flexDirection: "column", margin: "auto" }}>
          <StyledWriteBox>
            <div style={{ width: "55vw", display: "flex", flexDirection: "row", gap: "20px" }}>
              <StyledInputBox
                defaultValue={comment.comment}
                name="comment"
                onChange={onChangeHandler}
              ></StyledInputBox>
              <StyledBtn
                onClick={() => {
                  onEditHandler();
                  onSubmtHandler();
                }}
              >
                수정완료!
              </StyledBtn>
            </div>
          </StyledWriteBox>
        </div>
      ) : (
        <div>
          <ul>
            <StyledInputBox_Li></StyledInputBox_Li>
            <StyledInputBox_Li>✨ID: {comment.loginId} ✨Data: {comment.date} </StyledInputBox_Li>
            <StyledInputBox_Li>🐾댓글: {comment.comment} </StyledInputBox_Li>
          </ul>

          <StyledBtn
            onClick={() => {
              onEditHandler();
            }}
          >
            수정하기
          </StyledBtn>
          <StyledBtn onClick={onDeleteHandelr}>삭제하기</StyledBtn>
        </div>
      )}
    </div>
  );
};
export default Comment;



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
