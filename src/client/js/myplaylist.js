const musicImg = document.querySelector("#albumImg");
const title = document.querySelector("#albumTitle");
const artist = document.querySelector("#albumArtist");

const albumData = [
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

const audio = new Audio(albumData);

const playtime = document.getElementById("myelapsed");
const timeline = document.getElementById("myslider");
const starttime = document.getElementById("mystarttime");
const endtime = document.getElementById("myendtime");
let duration;

starttime.innerHTML = "0:00";
endtime.innerHTML = "-:--";

// starttime 부분에 명시해야할 것 = 총 길이

// timelineWidth 는 timeline - playtime이며, 재생시간 말고 남은 길이를 뜻함.
let timelineWidth = timeline.offsetWidth - playtime.offsetWidth;

function timeUpdate() {
  starttime.innerHTML = "0:00";
  endtime.innerHTML = "0:00";

  let durationTime = Math.floor(duration);
  let seconds = Math.floor(audio.currentTime);
  let playPercent = timelineWidth * (seconds / durationTime);
  playtime.style.width = playPercent + "px";

  // 시작시간이 늘어나게 만들 예정

  if (durationTime <= 9) {
    endtime.innerHTML = `0:0${durationTime}`;
  } else if (durationTime >= 10 && durationTime <= 59) {
    endtime.innerHTML = `0:${durationTime}`;
  } else if (durationTime >= 60) {
    let endtimeMin = Math.floor(durationTime / 60);
    let endtimeSec = durationTime - 60 * endtimeMin;
    if (endtimeSec <= 9) {
      endtime.innerHTML = `${endtimeMin}:0${endtimeSec}`;
    } else {
      endtime.innerHTML = `${endtimeMin}:${endtimeSec}`;
    }
  }

  // 시간표현 부분 하면 됨.
  if (seconds <= 9) {
    starttime.innerHTML = `0:0${seconds}`;
  } else if (seconds >= 10 && seconds <= 59) {
    starttime.innerHTML = `0:${seconds}`;
  } else if (seconds >= 60) {
    let min = Math.floor(seconds / 60);
    let sec = seconds - 60 * min;
    sec <= 9
      ? (starttime.innerHTML = `${min}:0${sec}`)
      : (starttime.innerHTML = `${min}:${sec}`);
  }
}

audio.addEventListener("timeupdate", timeUpdate, false);

let musicIndex = 0;

const loadMusic = () => {
  audio.src = albumData[musicIndex].source;
  title.innerHTML = albumData[musicIndex].title;
  artist.innerHTML = albumData[musicIndex].artist;
  musicImg.src = albumData[musicIndex].image;
};

const playlist = document.querySelector("#musiclistDiv");
const prev = document.querySelector("#prev");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const next = document.querySelector("#next");
const mute = document.querySelector("#mute");
const volume = document.querySelector("#volume");

const hidden = "hidden";

const showPlaylist = () => {
  albumData.forEach((song) => {
    const playlistol = document.getElementById("playlistol");
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
    playlistol.append(li);

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
  if (audio.ended) {
    musicIndex++;

    if (musicIndex > albumData.length - 1) {
      musicIndex = 0;
    }
    loadMusic(albumData[musicIndex]);
    audio.play();
  }

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
    musicIndex = albumData.length - 1;
  }

  loadMusic(albumData[musicIndex]);
  onPlay();
};

const onNext = () => {
  musicIndex++;

  if (musicIndex > albumData.length - 1) {
    musicIndex = 0;
  }

  loadMusic(albumData[musicIndex]);
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

audio.addEventListener(
  "canplaythrough",
  function () {
    duration = audio.duration;
  },
  false
);

window.addEventListener("load", loadMusic);
play.addEventListener("click", onPlay);
pause.addEventListener("click", onPause);
prev.addEventListener("click", onPrev);
next.addEventListener("click", onNext);
mute.addEventListener("click", onMute);
volume.addEventListener("click", onVolume);

showPlaylist();
