import React, { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import Input from "../../ele/Input";
import Button from "../../ele/Button";
import { __postWrite } from "../../redux/modules/writeSlice";
import { useDispatch } from "react-redux";
import s3Upload from "react-aws-s3";

window.Buffer = window.Buffer || require("buffer").Buffer;

const WriteImage = () => {
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
      }
    });
  };
  const main_list = ["ALL", "1", "2", "3", "4", "5"];
  const [mainList, setMainList] = useState(main_list);

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <Stwrite>
          <StCategoryButtonOutline>
            {mainList.map((x, index) => {
              return (
                <Button
                  bgColor="sliver"
                  size="medium"
                  id={x}
                  key={index}
                  // onClick={handFilterData}
                >
                  {x}
                </Button>
              );
            })}
          </StCategoryButtonOutline>
          <StimgboxTitle>
            <StLabel>제목입력</StLabel>
            <StInput
              type="text"
              placeholder="제목입력"
              onChange={onChangeHandler}
              name="title"
            />
          </StimgboxTitle>
          <Stimgbox>
            <StLabel>사진선택</StLabel>
            <div>
              <StFileBtn
                accept="image/*"
                onChange={onChangeImg}
                name="images"
                type="file"
                id="foodImage"
                ref={imgvalue}
              />
              <Stimg>
                <img src={write.images} alt="등록한이미지"></img>
              </Stimg>
            </div>
          </Stimgbox>
          <StFormBox>
            <StLabel>내용작성</StLabel>
            <Stform>
              <StTextarea
                onChange={onChangeHandler}
                name="content"
              ></StTextarea>
            </Stform>
          </StFormBox>
          <Button>작성완료</Button>
        </Stwrite>
      </form>
    </div>
  );
};
const StOne = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-content: center;
  justify-content: center;
  flex-direction: auto;
  overflow-x: hidden;
  overflow-y: auto;
  flex-wrap: wrap;
  background-color: white;

  /* position: relative; */
`;
const Stwrite = styled.div`
  max-width: 650px;
  width: 90%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  background-position: center;
`;

const StLabel = styled.label`
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 10px;
  align-items: flex-start;
  width: 100px;
`;
const Stselect = styled.select`
  width: 250px;
  height: 30px;
`;

const StCategoryButtonOutline = styled.div`
  display: flex;
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* background-color: blue; */
  margin-top: 10px;
  margin-bottom: 10px;
  width: 500px;
`;

const StInput = styled.input`
  box-sizing: border-box;
  margin-left: 10px;
  height: 46px;
  width: 500px;
  outline: none;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #eee;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
`;
// const Sttitle = styled.div`
//   height: 100px;
//   border: 1px solid black;
// `;
const Stimgbox = styled.div`
  height: 200px;
  display: flex;
  margin: 20px;
`;

const StimgboxTitle = styled.div`
  height: 50px;
  display: flex;
  margin: 20px;
  padding: 5px;
`;

const Stimg = styled.div`
  width: 300px;
  height: 150px;
  background-color: #e2e2e2;
  border: 1px solid #c7c7c7;
  border-radius: 15px;
  color: #c7c7c7;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  & > img {
    width: 300px;
    height: 150px;
    border-radius: 15px;
    background-color: #e2e2e2;
  }
`;

const StFileBtn = styled.input`
  position: relative;
  width: 100px;
  height: 40px;
  background-color: white;
  color: white;
  border: none;
  font-size: 14px;
  margin-left: 16px;
  font-weight: bold;
  align-self: flex-start;
  padding-bottom: 5px;
  &:hover {
    opacity: 0.7;
  }
`;
const StFormBox = styled.div`
  width: 60vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
`;
const Stform = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const StTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-right: 500px;
`;
export default WriteImage;
