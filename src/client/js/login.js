import { loginData } from "./loginData";
import { async } from "regenerator-runtime";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

const onLoginClick = (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  // const emailValidationCheck = (email) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
  // };

  // const emailValid = emailValidationCheck(email);

  // if (!emailValid) {
  //   return alert("이메일 형식을 확인해주세요.");
  // }

  // loginData.forEach((data) => {
  //   if (String(email) === data.email && String(password) === data.password) {
  //     return localStorage.setItem("nickname", data.nickname);
  //   } else {
  //     alert("이메일이나 비밀번호를 확인해주세요.");
  //   }
  // });

  window.location.href = "http://localhost:4000";
};

// document.addEventListener("DOMContentLoaded", async () => {
//   const res = await fetch("/api/datas");
//   console.log(res);
// });

loginBtn.addEventListener("click", onLoginClick);
