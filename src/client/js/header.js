const link = document.querySelector("a");
const button = document.querySelector("#loginBtn");
const home = document.querySelector("#homeTitle");
const topTracks = document.querySelector("#topTracks");
const popstar = document.querySelector("#popstar");
const kPop = document.querySelector("#kPop");

// button event
const location = window.location.pathname.split("/")[1];

if (location === "") {
  link.innerHTML = "Login";
  link.href = "/register";

  if (sessionStorage.getItem("token") === "doylee") {
    link.innerHTML = "My Playlist";
    link.href = "/myplaylist";
  }
}

if (location === "register") {
  button.style.display = "none";
  link.style.display = "none";
}

if (location === "myplaylist") {
  link.innerHTML = "Logout";

  link.href = "/";
  sessionStorage.removeItem("token");
}

if (
  location === "toptracks" ||
  location === "popstar" ||
  location === "kpop" ||
  location === "kpop/myplaylist"
) {
  link.innerHTML = "My Playlist";
  link.href = "/myplaylist";
}

// click title event
const onClickHomeTitle = () => {
  window.location.href = "/";
};

const onClickChannelTopTracks = () => {
  window.location.href = "/toptracks";
};

const onClickChannelPopstar = () => {
  window.location.href = "/popstar";
};

const onClickChannelKpop = () => {
  window.location.href = "/kpop";
};

home.addEventListener("click", onClickHomeTitle);
topTracks.addEventListener("click", onClickChannelTopTracks);
popstar.addEventListener("click", onClickChannelPopstar);
kPop.addEventListener("click", onClickChannelKpop);
