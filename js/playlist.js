(()=>{var e=document.querySelector("#musicImg"),t=document.querySelector("#musicTitle"),i=document.querySelector("#musicArtist"),n=[{title:"Golden Hour",artist:"JVKE",image:"/static/images/jvke1.jpeg",source:"/static/audios/Golden hour.mp3"},{title:"Edge of Desire",artist:"John Mayer",image:"/static/images/John-Mayer-2.jpg",source:"/static/audios/Edge of Desire-John Mayer.mp3"},{title:"Gravity",artist:"John Mayer",image:"/static/images/John-Mayer.jpg",source:"/static/audios/Gravity-John Mayer.mp3"},{title:"Hype Boy",artist:"Newjeans",image:"/static/images/newjeans.jpeg",source:"/static/audios/Hype Boy.mp3"},{title:"Free Fallin' ",artist:"John Mayer",image:"/static/images/John-Mayer-4.jpeg",source:"/static/audios/Free Fallin'.mp3"},{title:"I AM",artist:"IVE",image:"/static/images/ive.jpg",source:"/static/audios/I AM.mp3"},{title:"The Age of Worry",artist:"John Mayer",image:"/static/images/John-Mayer-2.jpg",source:"/static/audios/The Age of Worry.mp3"}],a=new Audio(n);a.preload="auto",a.loop="false";var c,s=document.getElementById("elapsed"),r=document.getElementById("slider"),o=document.getElementById("starttime"),d=document.getElementById("endtime");o.innerHTML="0:00",d.innerHTML="-:--";var l=r.offsetWidth-s.offsetWidth;a.addEventListener("timeupdate",(function(){o.innerHTML="0:00",d.innerHTML="0:00";var e=Math.floor(c),t=Math.floor(a.currentTime),i=l*(t/e);if(s.style.width=i+"px",e<=9)d.innerHTML="0:0".concat(e);else if(e>=10&&e<=59)d.innerHTML="0:".concat(e);else if(e>=60){var n=Math.floor(e/60),r=e-60*n;d.innerHTML=r<=9?"".concat(n,":0").concat(r):"".concat(n,":").concat(r)}if(t<=9)o.innerHTML="0:0".concat(t);else if(t>=10&&t<=59)o.innerHTML="0:".concat(t);else if(t>=60){var u=Math.floor(t/60),m=t-60*u;o.innerHTML=m<=9?"".concat(u,":0").concat(m):"".concat(u,":").concat(m)}}),!1);var u=0,m=function(){a.src=n[u].source,t.innerHTML=n[u].title,i.innerHTML=n[u].artist,e.src=n[u].image},p=document.querySelector("#musiclistDiv"),L=document.querySelector("#prev"),g=document.querySelector("#play"),y=document.querySelector("#pause"),v=document.querySelector("#next"),f=document.querySelector("#mute"),M=document.querySelector("#volume"),h=document.createElement("ul");h.id="musiclistUl";var E="hidden",T=function e(){a.ended&&(++u>n.length-1&&(u=0),m(n[u]),e()),g.classList.add(E),y.classList.remove(E),a.play()};a.addEventListener("canplaythrough",(function(){c=a.duration}),!1),window.addEventListener("load",m),g.addEventListener("click",T),y.addEventListener("click",(function(){g.classList.remove(E),y.classList.add(E),a.pause()})),L.addEventListener("click",(function(){--u<0&&(u=n.length-1),m(n[u]),T()})),v.addEventListener("click",(function(){++u>n.length-1&&(u=0),m(n[u]),T()})),f.addEventListener("click",(function(){f.classList.add(E),M.classList.remove(E),a.volume=0})),M.addEventListener("click",(function(){f.classList.remove(E),M.classList.add(E),a.volume=1})),n.forEach((function(n){var c=document.createElement("li"),s=document.createElement("p"),r=document.createElement("span");s.id="songTitle",s.innerHTML=n.title,r.id="songArtist",r.innerHTML=n.artist,c.append(s),c.append(r),h.append(c),c.addEventListener("click",(function(){a.src=n.source,t.innerHTML=n.title,i.innerHTML=n.artist,e.src=n.image,g.classList.add(E),y.classList.remove(E),a.play()})),y.addEventListener("click",(function(){g.classList.remove(E),y.classList.add(E),a.pause()}))})),p.append(h)})();