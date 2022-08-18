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
        <StyledBtn
          onClick={() => {
            navigate("/");
          }}
        >
          이전페이지
        </StyledBtn>
      </StyledDivPrev>
      {edit ? (
        <StyledDivWarp>
          <StyledCard>
            <form>
              <StyledWrapImg src={editForm.images} />
              <StyledInputBox
                accept="image/*"
                ref={imgvalue}
                onChange={onChangeImg}
                type="file"
                name="images"
              ></StyledInputBox>
              <label>title 수정</label>
              <StyledInputBox type="text" name="title" onChange={onChangeHandler}>

              </StyledInputBox>
              <textarea onChange={onChangeHandler} name="content"></textarea>
              <StyledBtn
                onClick={() => {
                  EditClickHander();
                  onSubmitHandler();
                }}
              >
                수정완료!!
              </StyledBtn>
            </form>
          </StyledCard>
        </StyledDivWarp>
      ) : (
        <StyledDivWarp>
          <StyledCard>
            <div style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              marginLeft: "20px"
            }}>
              <StyledWrapImg src={posts.images} />
            </div>
            <StyledDesc>
              <StyledTitle>
                <StyledTitleH2>{posts.title} </StyledTitleH2>
                <p>{posts.content}</p>
              </StyledTitle>
              <StyledBtnWarp>
                <StyledBtn1 onClick={EditClickHander}>수정하기</StyledBtn1>
                <StyledBtn1 onClick={ondeleteHandler}>삭제하기</StyledBtn1>
              </StyledBtnWarp>
            </StyledDesc>
          </StyledCard>
        </StyledDivWarp>
      )}
    </div>
  );
};

export default DetailForm;


const StyledBtn = styled.button`
  color: white;
  border: solid 2px ;
  padding: 5px;
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


const StyledTxt = styled.textarea`
  display: flex;
  flex-direction: column;
  margin-top: 20vm;
`;


const StyledBtn1 = styled.button`
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-weight:bold;
	padding:6px 10px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;

  &:hover {
    cursor: pointer;
	background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
	background-color:#f6f6f6;
  }
  &:active {
	position:relative;
	top:1px;
  }
`;




const StyledInputBox = styled.input`
  color: rgb(215, 98, 115);//폰트색
  width: 80%;
  padding: 10px;
  border-radius: 20px;
  border: 2px solid rgb(215, 98, 115); //댓입력 보더
  background-color: white;

  &:focus {
    outline: none;
  }
`;


const StyledDivPrev = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  padding: 20px 30px;
`;


const StyledDivWarp = styled.div`
padding: 0 40px;
width: 55vw;
margin: 0 auto;
`;

const StyledBtnWarp = styled.div`
    display: flex;
    margin-right:15px;
    margin-left: auto;
    flex-direction: row;
    gap: 15px;
`;


const StyledWrapImg = styled.img`
  width: initial;
  height:30vh;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  border-radius: 20px 20px 20px 20px;

`;

const StyledForm = styled.form`
width: 30vw;
    backdrop-filter: blur(23px) saturate(59%);
    -webkit-backdrop-filter: blur(23px) saturate(59%);
    background-color: rgba(255, 200, 200, 0.68);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
`;


const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;

const StyledDesc = styled.div`
  margin-left: 20px;
  width: 30vw;
  height: 40vh;
  display:flex;
  flex-direction: column;
`;

const StyledTitle = styled.div`
  margin-bottom: 20px;
  height: 33vh;
`;

const StyledTitleH2 = styled.div`
  margin-top: 30px;
  font-size: 30px;
`;
