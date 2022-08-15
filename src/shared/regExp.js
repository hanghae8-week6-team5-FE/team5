export const idCheck = (id) => {
  let regExp = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{2,10}$/;
  return regExp.test(id);
}; ///닉네임 정규식

export const passwordCheck = (passward) => {
  let passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
  return passwordRegEx.test(passward);
}; //비밀번호 정규식
