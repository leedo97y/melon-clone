import * as Api from "./api.js";
import { async } from "regenerator-runtime";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
// const nicknameInput = document.querySelector("#nickname");
const submitBtn = document.querySelector("#submitBtn");

// 원래 회원가입 form 이어서 nickname을 입력하도록 되어 있었음.
const onSubmitForm = async (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  // const nickname = nicknameInput.value;

  // vaildation test
  const emailValidationCheck = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
  };

  // const nicknameValidationCheck = (nickname) => {
  //   return String(nickname).length >= 2;
  // };

  const emailValid = emailValidationCheck(email);
  // const nicknameValid = nicknameValidationCheck(nickname);

  // if (!nicknameValid) {
  //   return alert("닉네임은 2자 이상이어야 합니다.");
  // }

  if (!emailValid) {
    return alert("이메일 형식을 확인해주세요.");
  }

  try {
    const data = {
      email,
      password,
      // nickname,
    };

    await Api.post("/apis/register", data);

    alert("로그인이 완료되었습니다.");
    // 세션스토리지에 토큰 값으로 쿠키 시크릿 값을 세팅해준다.
    sessionStorage.setItem("token", process.env.COOKIE_SECRET);
    window.location.href = "/";
  } catch (err) {
    console.log(err);
  }
};

submitBtn.addEventListener("click", onSubmitForm);
