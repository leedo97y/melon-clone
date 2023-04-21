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
    title: "Golden Hour",
    artist: "JVKE",
    image: "/static/images/jvke1.jpeg",
    source: "/static/audios/Golden Hour.mp3",
  },
  {
    title: "Gravity",
    artist: "John Mayer",
    image: "/static/images/John-Mayer.jpg",
    source: "/static/audios/Gravity-John Mayer.mp3",
  },
  {
    title: "One Call Away",
    artist: "Charlie Puth",
    image: "/static/images/charlie puth.png",
    source: "/static/audios/One Call Away.mp3",
  },
  {
    title: "Free Fallin' ",
    artist: "John Mayer",
    image: "/static/images/John-Mayer-4.jpeg",
    source: "/static/audios/Free Fallin'.mp3",
  },
  {
    title: "The Age of Worry",
    artist: "John Mayer",
    image: "/static/images/John-Mayer-2.jpg",
    source: "/static/audios/The Age of Worry.mp3",
  },
];

const wholePlaylistData = [
  {
    title: "I AM",
    artist: "IVE",
    image: "/static/images/ive.jpg",
    source: "/static/audios/I AM.mp3",
  },
  {
    title: "After Like",
    artist: "IVE",
    image: "/static/images/ive1.png",
    source: "/static/audios/After LIKE.mp3",
  },
  {
    title: "Kitsch",
    artist: "IVE",
    image: "/static/images/ive2.png",
    source: "/static/audios/Kitsch.mp3",
  },
  {
    title: "Blue Blood",
    artist: "IVE",
    image: "/static/images/ive.jpg",
    source: "/static/audios/Blue Blood.mp3",
  },
  {
    title: "Golden Hour",
    artist: "JVKE",
    image: "/static/images/jvke1.jpeg",
    source: "/static/audios/Golden Hour.mp3",
  },
  {
    title: "Upside Down (feat. Charlie Puth)",
    artist: "JVKE",
    image: "/static/images/jvke.jpeg",
    source: "/static/audios/Upside Down (feat. Charlie Puth).mp3",
  },
  {
    title: "One Call Away",
    artist: "Charlie Puth",
    image: "/static/images/charlie puth.png",
    source: "/static/audios/One Call Away.mp3",
  },
  {
    title: "Light Switch",
    artist: "Charlie Puth",
    image: "/static/images/charlie puth1.jpeg",
    source: "/static/audios/Light Switch.mp3",
  },
  {
    title: "Good Parts",
    artist: "LESSERAFIM",
    image: "/static/images/lesserafim.jpg",
    source: "/static/audios/good parts.mp3",
  },
  {
    title: "Impurities",
    artist: "LESSERAFIM",
    image: "/static/images/lesserafim.jpg",
    source: "/static/audios/impurities.mp3",
  },
  {
    title: "Blue Flame",
    artist: "LESSERAFIM",
    image: "/static/images/lesserafim.jpg",
    source: "/static/audios/Blue Flame.mp3",
  },
  {
    title: "No Celestial",
    artist: "LESSERAFIM",
    image: "/static/images/lesserafim.jpg",
    source: "/static/audios/no celestial.mp3",
  },
  {
    title: "Hype Boy",
    artist: "Newjeans",
    image: "/static/images/newjeans.jpeg",
    source: "/static/audios/Hype Boy.mp3",
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

const prev = document.querySelector("#prev");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const next = document.querySelector("#next");
const mute = document.querySelector("#mute");
const volume = document.querySelector("#volume");

const hidden = "hidden";

const showPlaylist = () => {
  wholePlaylistData.forEach((music) => {
    const playlistol = document.getElementById("playlistol");
    const wholeMusiclistol = document.getElementById("wholeMusiclistol");
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const plus = document.createElement("img");

    // each song title and artist
    div.id = "infoDiv";
    p.id = "musicPlayTitle";
    p.innerHTML = music.title;
    span.id = "musicPlayArtist";
    span.innerHTML = music.artist;
    plus.id = "plus";
    plus.src = "/static/images/plus.png";

    div.append(p);
    div.append(span);
    li.append(div);
    li.append(plus);
    wholeMusiclistol.append(li);

    const playMusic = () => {
      audio.src = music.source;
      title.innerHTML = music.title;
      artist.innerHTML = music.artist;
      musicImg.src = music.image;

      play.classList.add(hidden);
      pause.classList.remove(hidden);

      // 플레이리스트에 li를 추가해준다. + id도 추가해준다.
      // 영구적이진 않음 = 추후에 DB에 넣어줘야할거 같음.
      // 이어서 재생 가능하게 만들기 위해 리스트에 push 해준다.
      albumData.push({
        title: music.title,
        artist: music.artist,
        image: music.image,
        source: music.source,
      });
      playlistol.append(li);
      li.id = "musicli";
      li.removeChild(plus);

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

  albumData.forEach((song) => {
    const playlistol = document.getElementById("playlistol");
    const li = document.createElement("li");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const div = document.createElement("div");
    const plus = document.createElement("img");

    // each song title and artist
    div.id = "musicInfoDiv";
    p.id = "songTitle";
    p.innerHTML = song.title;
    span.id = "songArtist";
    span.innerHTML = song.artist;

    div.append(p);
    div.append(span);
    li.append(div);
    playlistol.append(li);

    const playMusic = () => {
      audio.src = song.source;
      title.innerHTML = song.title;
      artist.innerHTML = song.artist;
      musicImg.src = song.image;

      play.classList.add(hidden);
      pause.classList.remove(hidden);

      // 플레이리스트에 li를 추가해준다. + id도 추가해준다.
      // 영구적이진 않음 = 추후에 DB에 넣어줘야할거 같음.
      wholePlaylistData.push({
        title: song.title,
        artist: song.artist,
        image: song.image,
        source: song.source,
      });
      wholeMusiclistol.append(li);
      li.id = "songli";
      plus.id = "plus";
      plus.src = "/static/images/plus.png";
      li.append(plus);

      audio.play();
    };

    const pauseMusic = () => {
      play.classList.remove(hidden);
      pause.classList.add(hidden);

      audio.pause();
    };

    // 음악 추가랑 같은 click으로 이뤄져야함.
    li.addEventListener("click", playMusic);
    pause.addEventListener("click", pauseMusic);
  });
};

const onPlay = () => {
  // 끝났을때 다음 곡 재생
  // if (audio.ended) {
  //   musicIndex++;

  //   if (musicIndex > albumData.length - 1) {
  //     musicIndex = 0;
  //   }
  //   loadMusic(albumData[musicIndex]);
  // }

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
