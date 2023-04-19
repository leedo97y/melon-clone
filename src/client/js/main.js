// scss & other
import "../scss/styles.scss";
import { async } from "regenerator-runtime";
// button images
import "../images/mute.png";
import "../images/volume.png";
import "../images/play.png";
import "../images/prev.png";
import "../images/pause.png";
import "../images/next.png";
import "../images/plus.png";

// album cover images
import("../images/redLP.jpeg");
import("../images/John-Mayer.jpg");
import("../images/John-Mayer-2.jpg");
import("../images/John-Mayer-4.jpeg");
import("../images/jvke.jpeg");
import("../images/jvke1.jpeg");
import("../images/ive.jpg");
import("../images/ive1.png");
import("../images/ive2.png");
import("../images/charlie puth.png");
import("../images/charlie puth1.jpeg");

// card cover images
import("../images/us.jpg");
import("../images/uk.jpg");
import("../images/canada.jpg");
import("../images/italy.jpg");
import("../images/france.jpg");

// audios
import("../audios/Edge of Desire-John Mayer.mp3");
import("../audios/Gravity-John Mayer.mp3");
import("../audios/The Age of Worry.mp3");
import("../audios/Free Fallin'.mp3");
import("../audios/I AM.mp3");
import("../audios/Kitsch.mp3");
import("../audios/After LIKE.mp3");
import("../audios/Blue Blood.mp3");
import("../audios/Light Switch.mp3");
import("../audios/One Call Away.mp3");
import("../audios/Golden Hour.mp3");
import("../audios/Upside Down (feat. Charlie Puth).mp3");

const API_KEY = process.env.API_KEY;
// const TOP_ARTIST_API = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=KOREA,%20REPUBLIC%20OF&api_key=${API_KEY}&format=json`;
// const TOP_SONG_API = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=KOREA,%20REPUBLIC%20OF&api_key=${API_KEY}&format=json`;
const CHART_API = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`;

const trackList = document.querySelector("ul");

const getDataForChart = async () => {
  await fetch(CHART_API)
    .then((res) => res.json())
    .then((datas) => {
      // console.log(datas.tracks.track);
      const trackDatas = datas.tracks.track;

      let count = 0;

      trackDatas.forEach((data) => {
        const li = document.createElement("li");
        const rank = document.createElement("span");
        const img = document.createElement("img");
        const textDiv = document.createElement("div");
        const title = document.createElement("a");
        const artist = document.createElement("a");

        textDiv.id = "textDiv";
        title.id = "title";
        rank.id = "rank";
        rank.innerHTML = `${(count += 1)}`;
        title.innerHTML = `${data.name}`;
        title.href = `${data.url}`;
        artist.innerHTML = `${data.artist.name}`;
        artist.href = `${data.artist.url}`;
        img.src = "/static/images/redLP.jpeg";

        trackList.appendChild(li);
        li.appendChild(rank);
        li.appendChild(img);
        li.appendChild(textDiv);
        textDiv.appendChild(title);
        textDiv.appendChild(artist);
      });
    })
    .catch((err) => console.error(err));
};

getDataForChart();
