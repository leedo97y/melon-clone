import { async } from "regenerator-runtime";

const API_KEY = process.env.API_KEY;

const US_CHART = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=united%20states&api_key=${API_KEY}&format=json`;
const CANADA_CHART = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=canada&api_key=${API_KEY}&format=json`;
const UK_CHART = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=united%20kingdom&api_key=${API_KEY}&format=json`;
const ITALY_CHART = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=italy&api_key=${API_KEY}&format=json`;
const FRANCE_CHART = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=france&api_key=${API_KEY}&format=json`;
const DENMARK_CHART = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=denmark&api_key=${API_KEY}&format=json`;

const trackListUs = document.querySelector("#trackListUs");
const trackListUk = document.querySelector("#trackListUk");
const trackListCanada = document.querySelector("#trackListCanada");
const trackListItaly = document.querySelector("#trackListItaly");
const trackListFrance = document.querySelector("#trackListFrance");
const trackListDenmark = document.querySelector("#trackListDenmark");

const usChart = async () => {
  await fetch(US_CHART)
    .then((res) => res.json())
    .then((datas) => {
      const trackDatas = [
        datas.tracks.track[0],
        datas.tracks.track[1],
        datas.tracks.track[2],
        datas.tracks.track[3],
        datas.tracks.track[4],
      ];

      let countUs = 0;

      trackDatas.forEach((data) => {
        const liUs = document.createElement("li");
        const rankUs = document.createElement("span");
        const imgUs = document.createElement("img");
        const textDivUs = document.createElement("div");
        const titleUs = document.createElement("a");
        const artistUs = document.createElement("a");

        textDivUs.id = "textDiv";
        titleUs.id = "title";
        rankUs.id = "rank";
        rankUs.innerHTML = `${(countUs += 1)}`;
        titleUs.innerHTML = `${data.name}`;
        titleUs.href = `${data.url}`;
        artistUs.innerHTML = `${data.artist.name}`;
        artistUs.href = `${data.artist.url}`;
        imgUs.src = "/static/images/redLP.jpeg";

        trackListUs.appendChild(liUs);
        liUs.appendChild(rankUs);
        liUs.appendChild(imgUs);
        liUs.appendChild(textDivUs);
        textDivUs.appendChild(titleUs);
        textDivUs.appendChild(artistUs);
      });
    })
    .catch((err) => console.error(err));
};

const ukChart = async () => {
  await fetch(UK_CHART)
    .then((res) => res.json())
    .then((datas) => {
      const trackDatas = [
        datas.tracks.track[0],
        datas.tracks.track[1],
        datas.tracks.track[2],
        datas.tracks.track[3],
        datas.tracks.track[4],
      ];

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

        trackListUk.appendChild(li);
        li.appendChild(rank);
        li.appendChild(img);
        li.appendChild(textDiv);
        textDiv.appendChild(title);
        textDiv.appendChild(artist);
      });
    })
    .catch((err) => console.error(err));
};

const canadaChart = async () => {
  await fetch(CANADA_CHART)
    .then((res) => res.json())
    .then((datas) => {
      const trackDatas = [
        datas.tracks.track[0],
        datas.tracks.track[1],
        datas.tracks.track[2],
        datas.tracks.track[3],
        datas.tracks.track[4],
      ];

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

        trackListCanada.appendChild(li);
        li.appendChild(rank);
        li.appendChild(img);
        li.appendChild(textDiv);
        textDiv.appendChild(title);
        textDiv.appendChild(artist);
      });
    })
    .catch((err) => console.error(err));
};

const italyChart = async () => {
  await fetch(ITALY_CHART)
    .then((res) => res.json())
    .then((datas) => {
      const trackDatas = [
        datas.tracks.track[0],
        datas.tracks.track[1],
        datas.tracks.track[2],
        datas.tracks.track[3],
        datas.tracks.track[4],
      ];

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

        trackListItaly.appendChild(li);
        li.appendChild(rank);
        li.appendChild(img);
        li.appendChild(textDiv);
        textDiv.appendChild(title);
        textDiv.appendChild(artist);
      });
    })
    .catch((err) => console.error(err));
};

const franceChart = async () => {
  await fetch(FRANCE_CHART)
    .then((res) => res.json())
    .then((datas) => {
      const trackDatas = [
        datas.tracks.track[0],
        datas.tracks.track[1],
        datas.tracks.track[2],
        datas.tracks.track[3],
        datas.tracks.track[4],
      ];

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

        trackListFrance.appendChild(li);
        li.appendChild(rank);
        li.appendChild(img);
        li.appendChild(textDiv);
        textDiv.appendChild(title);
        textDiv.appendChild(artist);
      });
    })
    .catch((err) => console.error(err));
};

const denmarkChart = async () => {
  await fetch(DENMARK_CHART)
    .then((res) => res.json())
    .then((datas) => {
      const trackDatas = [
        datas.tracks.track[0],
        datas.tracks.track[1],
        datas.tracks.track[2],
        datas.tracks.track[3],
        datas.tracks.track[4],
      ];

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

        trackListDenmark.appendChild(li);
        li.appendChild(rank);
        li.appendChild(img);
        li.appendChild(textDiv);
        textDiv.appendChild(title);
        textDiv.appendChild(artist);
      });
    })
    .catch((err) => console.error(err));
};

const getDataForWorldChart = async () => {
  await usChart();
  await canadaChart();
  await ukChart();
  await italyChart();
  await franceChart();
  await denmarkChart();
};

getDataForWorldChart();
