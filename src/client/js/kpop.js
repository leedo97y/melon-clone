import { async } from "regenerator-runtime";

const API_KEY = process.env.API_KEY;

const KPOP_CHART_API = `https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=k-pop&api_key=${API_KEY}&format=json`;
const KPOP_ARTIST_API = `https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=k-pop&api_key=${API_KEY}&format=json`;

const kpopChartUl = document.getElementById("kpopChartUl");

// k-pop chart part
const getKpopChart = async () => {
  await fetch(KPOP_CHART_API)
    .then((res) => res.json())
    .then((datas) => {
      const kpopDatas = datas.albums.album;

      let count = 0;
      // 순위를 표시하기 위해 사용

      kpopDatas.forEach((data) => {
        const musicLi = document.createElement("li");
        const musicRank = document.createElement("span");
        const musicImg = document.createElement("img");
        const musicTextDiv = document.createElement("div");
        const musicTitle = document.createElement("a");
        const musicArtist = document.createElement("a");

        musicLi.id = "kpopChartLl";
        musicTextDiv.id = "kpopChartMusicDiv";
        musicTitle.id = "kpopChartMusicName";
        musicArtist.id = "kpopChartMusicArtist";
        musicRank.id = "kpopChartRank";
        musicRank.innerHTML = `${(count += 1)}`;
        musicTitle.innerHTML = `${data.name}`;
        musicTitle.href = `${data.url}`;
        musicArtist.innerHTML = `${data.artist.name}`;
        musicArtist.href = `${data.artist.url}`;
        musicImg.src = data.image[1]["#text"];

        kpopChartUl.append(musicLi);
        musicLi.append(musicRank);
        musicLi.append(musicImg);
        musicLi.append(musicTextDiv);
        musicTextDiv.append(musicTitle);
        musicTextDiv.append(musicArtist);
      });
    })
    .catch((err) => console.error(err));
};

const artistName = document.getElementById("kpopArtistName");
const artistImg = document.getElementById("kpopArtistImg");

const artistAlbumUl = document.getElementById("kpopArtistAlbumUl");

const artistTagUl = document.getElementById("kpopArtistTagUl");
const artistDesc = document.getElementById("kpopArtistDesc");

const getArtistInfo = async () => {
  await fetch(KPOP_ARTIST_API)
    .then((res) => res.json())
    .then((datas) => {
      const artistData = datas.topartists.artist[0];

      artistName.innerHTML = "#1 " + "&nbsp;" + artistData.name;
      artistImg.src =
        "https://lastfm.freetls.fastly.net/i/u/300x300/fa611766f2f59b9f48d7122cb81c1f9c.png";

      // top 10 album part
      const ARTIST_TOP_ALBUM_API = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistData.name}&api_key=${API_KEY}&format=json`;
      fetch(ARTIST_TOP_ALBUM_API)
        .then((res) => res.json())
        .then((datas) => {
          const allAlbums = datas.topalbums.album;

          let albumCount = 0;
          // 순위를 보여주기 위해 사용

          for (let i = 0; i < 10; i++) {
            const albumLi = document.createElement("li");
            const albumImg = document.createElement("img");
            const albumTitle = document.createElement("p");
            albumLi.id = "artistAlbumLl";
            albumImg.id = "artistAlbumImg";
            albumTitle.id = "artistAlbumName";
            albumImg.src = allAlbums[i].image[1]["#text"];
            albumTitle.innerHTML =
              `#${(albumCount += 1)} ` + "&nbsp;" + allAlbums[i].name;
            artistAlbumUl.append(albumLi);
            albumLi.append(albumImg);
            albumLi.append(albumTitle);
            allAlbums[i];
          }
        });

      // tag and description part
      const ARTIST_DESC_TAG_API = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistData.name}&api_key=${API_KEY}&format=json`;

      fetch(ARTIST_DESC_TAG_API)
        .then((res) => res.json())
        .then((datas) => {
          artistDesc.innerHTML = datas.artist.bio.summary;
          const artistTagData = datas.artist.tags.tag;

          artistTagData.forEach((item) => {
            const artistTagLi = document.createElement("li");

            artistTagLi.id = "kpopArtistTagLl";
            artistTagLi.innerHTML = item.name;
            artistTagUl.append(artistTagLi);
          });
        });
    });
};

// 함수 한번에 모아서 관리
const getAllAPIs = async () => {
  await getKpopChart();
  await getArtistInfo();
};

getAllAPIs();
