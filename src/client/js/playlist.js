const musicImg = document.querySelector("#musicImg");
const title = document.querySelector("#musicTitle");
const artist = document.querySelector("#musicArtist");

const musicData = [
  {
    title: "Edge of Desire",
    artist: "John Mayer",
    image: "/static/images/John-Mayer-2.jpg",
    source: "/static/audios/Edge of Desire-John Mayer.mp3",
  },
  {
    title: "Gravity",
    artist: "John Mayer",
    image: "/static/images/John-Mayer.jpg",
    source: "/static/audios/Gravity-John Mayer.mp3",
  },
  {
    title: "In Your Atmospher",
    artist: "John Mayer",
    image: "/static/images/John-Mayer-4.jpeg",
    source: "/static/audios/In Your Atmosphere-John Mayer.mp3",
  },
  {
    title: "Free Fallin' ",
    artist: "John Mayer",
    image: "/static/images/John-Mayer-4.jpeg",
    source: "/static/audios/Free Fallin'.mp3",
  },
  {
    title: "Last Train Home",
    artist: "John Mayer",
    image: "/static/images/John-Mayer-3.jpeg",
    source: "/static/audios/Last Train Home.mp3",
  },
  {
    title: "The Age of Worry",
    artist: "John Mayer",
    image: "/static/images/John-Mayer-2.jpg",
    source: "/static/audios/The Age of Worry.mp3",
  },
];

const audio = new Audio(musicData);

// const musicIndex = 0;
let musicIndex = 0;

const loadMusic = () => {
  audio.src = musicData[musicIndex].source;
  title.innerHTML = musicData[musicIndex].title;
  artist.innerHTML = musicData[musicIndex].artist;
  musicImg.src = musicData[musicIndex].image;
};

const playlist = document.querySelector("#musiclistDiv");
const prev = document.querySelector("#prev");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const next = document.querySelector("#next");
const mute = document.querySelector("#mute");
const volume = document.querySelector("#volume");

const ul = document.createElement("ul");
ul.id = "musiclistUl";

const hidden = "hidden";

const showPlaylist = () => {
  musicData.forEach((song) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const span = document.createElement("span");

    // each song title and artist
    p.id = "songTitle";
    p.innerHTML = song.title;
    span.id = "songArtist";
    span.innerHTML = song.artist;

    li.append(p);
    li.append(span);
    ul.append(li);

    const playMusic = () => {
      audio.src = song.source;
      title.innerHTML = song.title;
      artist.innerHTML = song.artist;
      musicImg.src = song.image;

      play.classList.add(hidden);
      pause.classList.remove(hidden);

      audio.play();
    };

    const pauseMusic = () => {
      play.classList.remove(hidden);
      pause.classList.add(hidden);

      audio.pause();
    };

    li.addEventListener("click", playMusic);
    pause.addEventListener("click", pauseMusic);
  });

  playlist.append(ul);
};

const onPlay = () => {
  play.classList.add(hidden);
  pause.classList.remove(hidden);

  audio.play();
};

const onPause = () => {
  play.classList.remove(hidden);
  pause.classList.add(hidden);

  audio.pause();
};

const onPrev = () => {
  musicIndex--;

  if (musicIndex < 0) {
    musicIndex = musicData.length - 1;
  }

  loadMusic(musicData[musicIndex]);
  onPlay();
};

const onNext = () => {
  musicIndex++;

  if (musicIndex > musicData.length - 1) {
    musicIndex = 0;
  }

  loadMusic(musicData[musicIndex]);
  onPlay();
};

const onMute = () => {
  mute.classList.add(hidden);
  volume.classList.remove(hidden);

  audio.volume = 0;
};

const onVolume = () => {
  mute.classList.remove(hidden);
  volume.classList.add(hidden);

  audio.volume = 1;
};

window.addEventListener("load", loadMusic);
play.addEventListener("click", onPlay);
pause.addEventListener("click", onPause);
prev.addEventListener("click", onPrev);
next.addEventListener("click", onNext);
mute.addEventListener("click", onMute);
volume.addEventListener("click", onVolume);

showPlaylist();
