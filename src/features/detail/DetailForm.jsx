<<<<<<< HEAD
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components";


const DetailForm = () => {

  const nav = useNavigate();
  const dispatch = useDispatch();


  return (
    <div>
      <StyledDivWarp>
        <StyledCard>
          <StyledWrapImg src="https://picsum.photos/300/450" />
          <StyledDesc>
            <StyledTitle>
              <StyledTitleH2>피자 </StyledTitleH2>
              <p>
                피자 설명을 기재. 피자 설명! 피자가 너무 맛있어요 냐미냐미
                어쩌구 저쩌구 dolor sit amet consectetur adipisicing elit. Iure
                repellendus libero blanditiis inventore. Aspernatur sit rddderum
                perspiciatis maxime amet libero, molestiae nam cum adipisci
                alias inventore soluta ipsum magni? Voluptate.
              </p>
            </StyledTitle>
            <div>
              <StyledBtn>수정하기</StyledBtn>
              <StyledBtn>삭제하기</StyledBtn>
            </div>
          </StyledDesc>
        </StyledCard>
      </StyledDivWarp>
    </div>
  );
}

export default DetailForm;

const StyledDivPrev = Styled.div`
display: flex;
justify-content: flex-end;
margin-bottom: 20px;
padding: 20px 30px;
`;

const StyledDivWarp = Styled.div`
padding: 0 10px;
width: 500px;
margin: 0 auto;
`;

//이미지 물어보기
const StyledWrapImg = Styled.img`
border-radius: 20px 0 0 20px;
`;

const StyledCard = Styled.div`
background: rgba( 255, 255, 255, 0.01 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.20 );
backdrop-filter: blur( 2.5px );
-webkit-backdrop-filter: blur( 2.5px );
border-radius: 20px;
border: 1px solid rgba(255, 255, 255, 0.18);

display: flex;
justify-content: space-between;
margin-bottom: 20px;
`;

const StyledDesc = Styled.div`
margin-left: 20px;
`;

const StyledTitle = Styled.div`
margin-bottom: 20px;
`;

const StyledTitleH2 = Styled.div`
font-size: 50px;
`;

const StyledWriteBox = Styled.div`
width: 100%;
`;

const StyledInputBox = Styled.input`
color: rgb(144, 200, 247);
width: 80%;
padding: 10px;
border-radius: 20px;
border: 2px solid rgb(144, 200, 247);
background-color: white;

&:focus{
outline: none;
}
`;

const StyledInputBox_Li = Styled.li`
list-style-type: none;
margin-top: 10px;
margin-bottom: 10px;
`;

const StyledBtn = Styled.button`
color: white;
border: solid 2px transparent;
padding: 5px;
border-radius: 10px;
margin : 1px;
background-color: rgb(144, 200, 247);

&:hover{
cursor: pointer;
background-color: transparent;
color: grey;
border: solid 2px rgb(144, 200, 247);
}
=======
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
>>>>>>> 4b9c9f225fbc03a7fdf9e90ebd76286ce3f939b6
`;
