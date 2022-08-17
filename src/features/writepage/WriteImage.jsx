import React, { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import Input from "../../ele/Input";
import Button from "../../ele/Button";
import { __postWrite } from "../../redux/modules/writeSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import s3Upload from "react-aws-s3";

window.Buffer = window.Buffer || require("buffer").Buffer;

const WriteImage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imgvalue = useRef(null);
  const [write, Setwrite] = useState({
    title: "",
    images: "",
    category: "",
    content: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    Setwrite({ ...write, [name]: value });
  };
  const onChangeImg = (event) => {
    const imgFile = event.target.files[0];
    const { name } = event.target;
    const imageUrl = URL.createObjectURL(imgFile);
    Setwrite({ ...write, [name]: imageUrl });
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let file = imgvalue.current.files[0];
    let newFileName = imgvalue.current.files[0].name;
    console.log(file, newFileName);
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
        console.log(imgUrl);
        const newstate = { ...write, images: imgUrl };
        dispatch(__postWrite(newstate));
        Setwrite({
          title: "",
          images: "",
          category: "",
          content: "",
        });
        navigate("/");
      }
    });
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <Stwrite>
          <Stselect onChange={onChangeHandler} name="category">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Stselect>
          <Input onChange={onChangeHandler} name="title"></Input>
          <Stimgbox>
            <Stimg>
              <img src={write.images} alt="등록한이미지"></img>
            </Stimg>
            <div>
              <Input
                accept="image/*"
                onChange={onChangeImg}
                name="images"
                type="file"
                id="foodImage"
                ref={imgvalue}
              />
            </div>
          </Stimgbox>
          <StFormBox>
            <Stform>
              <StTextarea
                onChange={onChangeHandler}
                name="content"
              ></StTextarea>
              <Button>댓글작성</Button>
            </Stform>
          </StFormBox>
        </Stwrite>
      </form>
    </div>
  );
};
const Stwrite = styled.div`
  width: 100vw;
  margin-top: 50px;
  padding: 50px;
`;
const Stselect = styled.select`
  width: 250px;
  height: 30px;
`;
// const Sttitle = styled.div`
//   height: 100px;
//   border: 1px solid black;
// `;
const Stimgbox = styled.div`
  height: 300px;
  display: flex;
`;
const Stimg = styled.div`
  width: 350px;
  height: 200px;
  border: 1px solid black;
  margin-right: 50px;
  & > img {
    width: 350px;
    height: 200px;
  }
`;
const StFormBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 50px;
`;
const Stform = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const StTextarea = styled.textarea`
  width: 70%;
  height: 100px;
`;
export default WriteImage;
