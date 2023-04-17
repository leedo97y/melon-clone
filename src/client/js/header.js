const link = document.querySelector("a");
const button = document.querySelector("#loginBtn");
const home = document.querySelector("#homeTitle");

// button event
const location = window.location.pathname.split("/")[1];

// if (location === "") {
//   link.innerHTML = "register";
//   link.href = "/register";
// }

// if (location === "register") {
//   link.innerHTML = "login";
//   link.href = "/login";
// }

// if (location === "myplaylist") {
//   button.style.display = "none";
//   link.style.display = "none";
// }

// click title event
const onClickHomeTitle = () => {
  window.location.href = "/";
};

home.addEventListener("click", onClickHomeTitle);
