# Tomato Music

## 프로젝트 소개

![Tomato](https://user-images.githubusercontent.com/99410440/234023508-44304561-7e7f-4bd6-8b8a-e6ac8f196dec.png)

🔗 [Welcome to Tomato Music !](https://tomato-music.fly.dev/)
<br>
<br>
노마드코더에서 진행한 melon 이라는 스트리밍 사이트를 클론코딩한 프로젝트입니다.
<br> 
Tomato를 좋아해서 토마토를 모티브로 뮤직 플레이어 사이트를 만들어보았습니다.
<br> 
<br> 
<br>

## 기술 스택 소개

### Front-End
<br>
<div align=left>
<img src="https://img.shields.io/badge/pug-A86454?style=for-the-badge&logo=pug&logoColor=white"/> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> 


### Back-End
<br>
<img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=mongoDB&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>


### other
<br>
<img src="https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white"/> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/> <img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white"/> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/babel-FFFF09?style=for-the-badge&logo=babel&logoColor=black"/>
  
<div>
  
<br>
<br>
<br>

## 기능 소개
  
> ### #0 메인 페이지
  
<img width="800" height="500" alt="스크린샷 2023-04-22 오전 4 04 04" src="https://user-images.githubusercontent.com/99410440/234168703-ffa7fb91-2a0e-4ee3-8e0b-2dc69df4838a.png">

<br>

* last.fm API를 사용하여 pop top 50 인기 차트를 구현하였습니다.
* 또, 저장된 오디오를 이용하여 미니 플레이리스트를 구현하였습니다.
* 로그인 되지 않은 상태이면, 상단 헤더의 버튼이 로그인 버튼으로 바뀝니다.
<br>
(🍅 리팩토링 예정입니다.)

<br>
<br>
<br>

> ### #1 로그인 페이지

<img width="800" height="500" alt="login page" src="https://user-images.githubusercontent.com/99410440/234161306-729dbd33-c489-417a-80a4-0e210567b6cf.png">

* 이메일과 비밀번호를 입력하여 로그인 할 수 있으며, dbTestHandler 파일에 작성된 정보로 로그인이 가능합니다.
* 아래의 아이디와 비밀번호로 로그인 해주세요.
<br>

```txt
id: doy@gmail.com
pw: 12341234
```
<br>

* 정보를 맞게 입력하면, alert 창으로 로그인 성공을 알려줍니다.
<br>

<img width="800" alt="login success" src="https://user-images.githubusercontent.com/99410440/234161675-6363660a-e1c6-453f-92b0-08f76521c44b.png">



* 로그인 후 메인페이지 상단 부분이 My Playlist 로 이동할 수 있도록 바뀌며, my playlist를 아용할 수 있습니다.
  
<br>
<br>
<br>
  
> ### #2 my playlist 페이지

<img width="800" height="500" alt="myplaylist" src="https://user-images.githubusercontent.com/99410440/234161993-a56a310d-76e0-4708-a9fb-4b4681d11fb1.png">


* 음악을 재생할 수 있는 플레이리스트 페이지 입니다. 
* 현재는 저장된 음악에 한해서만 재생목록에 추가가 가능하며, 따로 상태가 저장되는 처리를 해주지 않아 새로고침시 초기화됩니다. 
<br>
(🍅 데이터베이스를 사용하는 쪽으로 리팩토링 할 예정입니다.)
  
<br>
<br>
<br>

> ### #3 top tracks 페이지

<img width="800" height="500" alt="toptracks_img" src="https://user-images.githubusercontent.com/99410440/234162276-5164a704-c73e-4046-b13e-b9402bba727f.png">

<br>

* last.fm API를 사용하여 구현한 세계 차트입니다.
* 차트는 각 5위 까지 구현했으며, 세계 카드에 hover 시 차트가 보이도록 구현했습니다.
<br>

(hover 시)

<img width="800" height="500" alt="스크린샷 2023-04-25 오전 11 31 19" src="https://user-images.githubusercontent.com/99410440/234162591-c72296ef-d73d-45da-bf1a-bd6b2033f852.png">

<br>
<br>
<br>

> ### #4 pop star 페이지

<img width="800" height="500" alt="pop star page" src="https://user-images.githubusercontent.com/99410440/234162750-31269861-c4e8-440d-8113-9b48ea2607c9.png">

<br>

* last.fm API를 사용하여 구현한 pop 아티스트에 대한 소개 페이지 입니다. 
* 1위 부터 3위 아티스트를 확인할 수 있습니다. 아직 2, 3위 순위 아티스트에 해당하는 소개 페이지는 만들지 않은 상태입니다.
<br>
(🍅 추가 구현 예정)
  
<br>
<br>
<br>

> ### #5 k-pop 페이지

<img width="800" height="500" alt="kpop star page" src="https://user-images.githubusercontent.com/99410440/234162829-c3015014-31ad-4fb5-a1cd-970e8ba9b7fe.png">
<br>

* last.fm API를 사용하여 구현한 k-pop 차트와 k-pop 아티스트에 대한 소개 페이지 입니다.
* k-pop 아티스트 소개 페이지에서 아티스트의 앨범을 상위 10위까지 볼 수 있습니다.
  
<br>
<br>
<br>



