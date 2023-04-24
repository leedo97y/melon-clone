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

// favicon, logo
import("../images/tomato_favicon.png");
import("../images/tomato_logo.png");

// album cover images
import("../images/redLP.jpeg");
import("../images/John-Mayer.jpg");
import("../images/John-Mayer-2.jpg");
import("../images/John-Mayer-4.jpeg");
import("../images/jvke.jpeg");
import("../images/jvke1.jpeg");
import("../images/ive.jpg");
import("../images/ive2.png");
import("../images/charlie puth.png");
import("../images/charlie puth1.jpeg");
import("../images/lesserafim.jpg");
import("../images/newjeans.jpeg");

// card cover images
import("../images/us.jpg");
import("../images/uk.jpg");
import("../images/canada.jpg");
import("../images/italy.jpg");
import("../images/france.jpg");
import("../images/denmark.jpg");

// audios
import("../audios/Edge of Desire-John Mayer.mp3");
import("../audios/Gravity-John Mayer.mp3");
import("../audios/The Age of Worry.mp3");
import("../audios/Free Fallin'.mp3");
import("../audios/I AM.mp3");
import("../audios/Kitsch.mp3");
import("../audios/Blue Blood.mp3");
import("../audios/Light Switch.mp3");
import("../audios/One Call Away.mp3");
import("../audios/Golden Hour.mp3");
import("../audios/Upside Down (feat. Charlie Puth).mp3");
import("../audios/impurities.mp3");
import("../audios/Hype Boy.mp3");
import("../audios/Blue Flame.mp3");
import("../audios/no celestial.mp3");
import("../audios/good parts.mp3");

// home chart part
const API_KEY = process.env.API_KEY;

const CHART_API = `https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=${API_KEY}&format=json`;

const trackList = document.querySelector("#trackList");

const getDataForChart = async () => {
  await fetch(CHART_API)
    .then((res) => res.json())
    .then((datas) => {
      const trackDatas = datas.albums.album;

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
        img.src = data.image[2]["#text"];

        trackList.append(li);
        li.append(rank);
        li.append(img);
        li.append(textDiv);
        textDiv.append(title);
        textDiv.append(artist);
      });
    })
    .catch((err) => console.error(err));
};

getDataForChart();
