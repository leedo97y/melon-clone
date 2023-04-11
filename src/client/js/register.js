import * as Api from "./api.js";
import { async } from "regenerator-runtime";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const nicknameInput = document.querySelector("#nickname");
const submitBtn = document.querySelector("#submitBtn");

const onSubmitForm = async (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const nickname = nicknameInput.value;

  // vaildation test
  const emailValidationCheck = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
  };

  const nicknameValidationCheck = (nickname) => {
    return nickname.length >= 2;
  };

  const emailValid = emailValidationCheck(email);
  const nicknameValid = nicknameValidationCheck(nickname);

  if (!nicknameValid) {
    return alert("닉네임은 2자 이상이어야 합니다.");
  }

  if (!emailValid) {
    return alert("이메일 형식을 확인해주세요.");
  }

  try {
    const data = {
      email,
      password,
      nickname,
    };

    await Api.post("/apis/register", data);

    alert("회원가입이 완료되었습니다.");
    window.location.href = "/login";
  } catch (err) {
    console.log(err);
  }
};

submitBtn.addEventListener("click", onSubmitForm);
