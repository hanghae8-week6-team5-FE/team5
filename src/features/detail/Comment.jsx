import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Button from "../../ele/Button";
import Input from "../../ele/Input";
import { __putComment, __deleteComment } from "../../redux/modules/DetailSlice";
import { useParams } from "react-router-dom";

const Comment = ({ comment }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [edit, Setedit] = useState(false);
  const [comments, Setcomments] = useState({
    comment: "",
  });
  const onEditHandler = () => {
    Setedit((prev) => !prev);
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    Setcomments({ ...comment, [name]: value });
  };
  const onSubmtHandler = (event) => {
    const putcomment = { id, comments };
    dispatch(__putComment(putcomment));
    Setcomments({
      comment: "",
    });
  };
  const onDeleteHandelr = () => {
    dispatch(__deleteComment(id));
  };
  return (
    <div>
      {edit ? (
        <div>
          <div>
            <Input
              defaultValue={comment.comment}
              name="comment"
              onChange={onChangeHandler}
            ></Input>
            <Button
              onClick={() => {
                onEditHandler();
                onSubmtHandler();
              }}
            >
              수정완료!
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <p>{comment.comment}</p>
          <p>{comment.loginId}</p>
          <p>{comment.date}</p>
          <Button
            onClick={() => {
              onEditHandler();
            }}
          >
            수정하기
          </Button>
          <Button onClick={onDeleteHandelr}>삭제하기</Button>
        </div>
      )}
    </div>
  );
};
export default Comment;
