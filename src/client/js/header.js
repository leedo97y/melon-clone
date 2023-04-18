const link = document.querySelector("a");
const button = document.querySelector("#loginBtn");
const home = document.querySelector("#homeTitle");
const topTracks = document.querySelector("#topTracks");
const pop = document.querySelector("#pop");
const kPop = document.querySelector("#kPop");

// button event
const location = window.location.pathname.split("/")[1];

if (
  location === "" ||
  location === "toptracks" ||
  location === "pop" ||
  location === "kpop"
) {
  link.innerHTML = "myplaylist";
  link.href = "/myplaylist";
}

if (location === "register") {
  button.style.display = "none";
  link.style.display = "none";
}

if (location === "myplaylist") {
  button.style.display = "none";
  link.style.display = "none";
}

// click title event
const onClickHomeTitle = () => {
  window.location.href = "/";
};

const onClickChannelTopTracks = () => {
  window.location.href = "/toptracks";
};

const onClickChannelPop = () => {
  window.location.href = "/pop";
};

const onClickChannelKpop = () => {
  window.location.href = "/kpop";
};

home.addEventListener("click", onClickHomeTitle);
topTracks.addEventListener("click", onClickChannelTopTracks);
pop.addEventListener("click", onClickChannelPop);
kPop.addEventListener("click", onClickChannelKpop);
