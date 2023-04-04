import "../scss/styles.scss";
import { async } from "regenerator-runtime";

const API_KEY = process.env.API_KEY;
const TOP_ARTIST_API = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=KOREA,%20REPUBLIC%20OF&api_key=${API_KEY}&format=json`;
const TOP_SONG_API = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=KOREA,%20REPUBLIC%20OF&api_key=${API_KEY}&format=json`;
const CHART_API = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`;

const getDataForChart = async () => {
  await fetch(CHART_API)
    .then((res) => res.json())
    .then((datas) => {
      console.log(datas.tracks.track);
      const trackDatas = datas.tracks.track;
      let count = 0;
      trackDatas.forEach((data) => {
        const trackList = document.querySelector("ul");
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
        img.src = `${data.image[1]["#text"]}`;
        trackList.appendChild(li);
        li.appendChild(rank);
        li.appendChild(img);
        li.appendChild(textDiv);
        textDiv.appendChild(title);
        textDiv.appendChild(artist);
      });
    })
    .catch((err) => console.log(err));
};

getDataForChart();
