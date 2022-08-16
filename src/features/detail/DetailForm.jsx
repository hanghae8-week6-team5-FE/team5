import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  __getDetailUser,
  __putDetailUser,
  __deleteDetailUser,
} from "../../redux/modules/DetailSlice";
import Button from "../../ele/Button";
import { useParams } from "react-router-dom";
import s3Upload from "react-aws-s3";

window.Buffer = window.Buffer || require("buffer").Buffer;
const DetailForm = () => {
  const { posts } = useSelector((state) => state.detail);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, Setcount] = useState(true);
  const [edit, Setedit] = useState(false);
  const [btn, Setbtn] = useState(false);
  const imgvalue = useRef(null);
  const [editForm, SetForm] = useState({
    title: "",
    content: "",
    images: "",
  });
  const EditClickHander = () => {
    Setcount((prev) => !prev);
    Setedit((prev) => !prev);
    Setbtn((prev) => !prev);
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    SetForm({ ...editForm, [name]: value });
  };
  const onChangeImg = (event) => {
    const imgFile = event.target.files[0];
    const { name } = event.target;
    const imageUrl = URL.createObjectURL(imgFile);
    SetForm({ ...editForm, [name]: imageUrl });
    // console.log(editForm);
  };
  const onSubmitHandler = async (event) => {
    if (count === true) {
    } else {
      let file = imgvalue.current.files[0];
      let newFileName = imgvalue.current.files[0].name;
      const config = {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
        bucketName: process.env.REACT_APP_BUCKET_NAME,
        region: process.env.REACT_APP_REGION,
      };
      //aws 서버에 등록함(DB저장 X)
      const s3Client = new s3Upload(config);
      s3Client.uploadFile(file, newFileName).then(async (data) => {
        if (data.status === 204) {
          let imgUrl = data.location;
          const newstate = { ...editForm, images: imgUrl };
          const edits = { newstate, id };
          dispatch(__putDetailUser(edits));
          SetForm({
            title: "",
            images: "",
            content: "",
          });
        }
      });
    }
  };
  const ondeleteHandler = () => {
    dispatch(__deleteDetailUser(id));
  };
  useEffect(() => {
    dispatch(__getDetailUser(id));
  }, []);
  return (
    <div>
      <StyledDivPrev>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          이전페이지이동
        </Button>
      </StyledDivPrev>
      {edit ? (
        <div>
          <form>
            <StImg src={editForm.images}></StImg>
            <input
              accept="image/*"
              ref={imgvalue}
              onChange={onChangeImg}
              type="file"
              name="images"
            ></input>
            <label>title 수정</label>
            <input type="text" name="title" onChange={onChangeHandler}></input>
            <textarea onChange={onChangeHandler} name="content"></textarea>
            <Button
              onClick={() => {
                EditClickHander();
                onSubmitHandler();
              }}
            >
              수정완료!!
            </Button>
          </form>
        </div>
      ) : (
        <StyledCard>
          <StyledWrapImg src={posts.images} />

          <StyledDesc>
            <StyledTitle>
              <StyledTitleH2>{posts.title} </StyledTitleH2>
              <p>{posts.content}</p>
            </StyledTitle>
          </StyledDesc>
          <Button onClick={EditClickHander}>수정하기!!</Button>
          <Button onClick={ondeleteHandler}>삭제하기!</Button>
        </StyledCard>
      )}
    </div>
  );
};
export default DetailForm;

const StyledDivPrev = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  padding: 20px 30px;
`;

//이미지 물어보기
const StyledWrapImg = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 20px 0 0 20px;
`;
const StImg = styled.img`
  width: 200px;
  height: 200px;
`;

const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledDesc = styled.div`
  margin-left: 20px;
`;

const StyledTitle = styled.div`
  margin-bottom: 20px;
`;

const StyledTitleH2 = styled.div`
  font-size: 50px;
`;
