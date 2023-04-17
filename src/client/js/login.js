import * as Api from "./api.js";
import { async } from "regenerator-runtime";

const loginEmailInput = document.querySelector("#loginEmail");
const loginPasswordInput = document.querySelector("#loginPassword");
const loginBtn = document.querySelector("#loginBtn");

const onLoginClick = async (e) => {
  e.preventDefault();

  const loginEmail = loginEmailInput.value;
  const loginPassword = loginPasswordInput.value;

  const emailValidationCheck = (loginEmail) => {
    return String(loginEmail)
      .toLowerCase()
      .match(/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
  };

  const emailValid = emailValidationCheck(loginEmail);
  const passwordValid = loginPassword.length >= 4;

  if (!emailValid || !passwordValid) {
    return alert("이메일 형식이나 비밀번호를 확인해주세요.");
  }

  try {
    const loginData = {
      loginEmail,
      loginPassword,
    };

    const res = await Api.post("/apis/login", loginData);
    const token = res.token;

    sessionStorage.setItem("token", token);

    alert("로그인이 완료되었습니다.");

    window.location.href = "/";
  } catch (err) {
    console.error(err);
  }
};

loginBtn.addEventListener("click", onLoginClick);
