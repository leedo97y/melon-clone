import { async } from "regenerator-runtime";

const API_KEY = process.env.API_KEY;

const ARTIST_API = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;

const starImage = document.getElementById("starImage");
const starName = document.getElementById("starName");
const starUl = document.getElementById("starUl");

// tag
const tagUl = document.getElementById("tagUl");

// use desc api
const starDesc = document.getElementById("starDesc");

const getTopStar = async () => {
  await fetch(ARTIST_API)
    .then((res) => res.json())
    .then((datas) => {
      const firstStarData = datas.artists.artist[0];
      const starDatas = [datas.artists.artist[1], datas.artists.artist[2]];

      let count = 1;

      // first star
      starName.innerHTML = "#1 " + "&nbsp;" + firstStarData.name;
      starImage.src =
        "https://lastfm.freetls.fastly.net/i/u/300x300/f6cc13e4fc99e35d2b4f3f21052727d9";

      // second, third star
      starDatas.forEach((datas) => {
        const liStar = document.createElement("li");
        const smallStarP = document.createElement("p");
        const smallStarImg = document.createElement("img");

        liStar.id = "liStar";
        smallStarP.id = "smallStarName";
        smallStarImg.id = "smallStarImg";
        smallStarP.innerHTML = `#${(count += 1)} ` + "&nbsp;" + datas.name;
        if (datas.name === "Taylor Swift") {
          smallStarImg.src =
            "https://lastfm.freetls.fastly.net/i/u/300x300/526ec444a5d8398434be3249fa3e9d50.png";
        } else if (datas.name === "Lana Del Rey") {
          smallStarImg.src =
            "https://lastfm.freetls.fastly.net/i/u/300x300/dfd9c5b802bc1d61fa0d0baf1315d304.png";
        } else {
          smallStarImg.src = datas.image[2]["#text"];
        }

        starUl.append(liStar);
        liStar.append(smallStarImg);
        liStar.append(smallStarP);
      });

      // desciption API
      const DESC_API = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${firstStarData.name}&api_key=${API_KEY}&format=json`;

      fetch(DESC_API)
        .then((res) => res.json())
        .then((data) => {
          starDesc.innerHTML = data.artist.bio.summary;

          let allTags = data.artist.tags.tag;

          allTags.forEach((item) => {
            const tagLi = document.createElement("li");

            tagLi.id = "tagLi";
            tagLi.innerHTML = item.name;
            tagUl.append(tagLi);

            // console.log(item.name);
          });
        });
    })
    .catch((err) => console.error(err));
};

getTopStar();
