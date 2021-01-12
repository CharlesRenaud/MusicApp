(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var c=a(0),o=a(2),n=a.n(o),r=a(13),i=a.n(r),s=a(7),p=a.n(s),l=a(10),d=a(3),h=a(4),u=(a(20),a(6)),m=a(5),b=function(e,t){if(e){var a=t.current.play();void 0!==a&&a.then((function(e){t.current.play()})).catch((function(e){return console.log(e)}))}},j=function(e){var t=e.isPlaying,a=e.setIsPlaying,n=e.audioRef,r=e.songInfo,i=e.setSongInfo,s=e.currentSong,j=e.songs,v=e.setCurrentSong,f=e.setSongs,g=e.isRandom,O=e.setIsRandom,x=e.isDark,k=Object(o.useState)(!1),y=Object(h.a)(k,2),S=y[0],w=y[1],D=function(e){console.log(e);var t=j.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{active:!0}):Object(d.a)(Object(d.a)({},t),{},{active:!1})}));f(t)},C={transform:"translateX(".concat(r.animationPercentage,"%)")};function N(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)}var E=function(){var e=Object(l.a)(p.a.mark((function e(a){var c,o,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=j.findIndex((function(e){return e.id===s.id})),console.log(c),"skip-forward"!==a){e.next=14;break}if(!g){e.next=11;break}return o=j[Math.floor(Math.random()*j.length)],e.next=7,v(o);case 7:D(o),b(t,n),e.next=14;break;case 11:return e.next=13,v(j[(c+1)%j.length]);case 13:D(j[(c+1)%j.length]);case 14:if("skip-back"!==a){e.next=24;break}if((c-1)%j.length!==-1){e.next=21;break}return e.next=18,v(j[j.length-1]);case 18:return D(j[j.length-1]),b(t,n),e.abrupt("return");case 21:return e.next=23,v(j[(c-1)%j.length]);case 23:D(j[(c-1)%j.length]);case 24:if("random"!==a){e.next=33;break}if(r=j[Math.floor(Math.random()*j.length)],g){e.next=31;break}return e.next=29,v(r);case 29:D(r),b(t,n);case 31:return g?(O(!1),console.log(g),console.log(s.id)):(O(!0),console.log(g)),e.abrupt("return");case 33:t&&n.current.play();case 34:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"player",children:[Object(c.jsxs)("div",{className:" ".concat(x?"time-control-dark":"time-control"),children:[Object(c.jsx)("p",{children:N(r.currentTime)}),Object(c.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(s.color[0],",").concat(s.color[1],")")},className:"track",children:[Object(c.jsx)("input",{value:r.currentTime,type:"range",max:r.duration||0,min:0,onChange:function(e){n.current.currentTime=e.target.value,i(Object(d.a)(Object(d.a)({},r),{},{currentTime:e.target.value}))}}),Object(c.jsx)("div",{style:C,className:" ".concat(x?"animate-track-dark":"animate-track")})]}),Object(c.jsx)("p",{children:r.duration?N(r.duration):"0:00"})]}),Object(c.jsxs)("div",{className:"play-control",children:[Object(c.jsx)(u.a,{onClick:function(){return E("skip-back")},className:" ".concat(x?"skip-back-dark":"skip-back"),size:"2x",icon:m.a}),Object(c.jsx)(u.a,{onClick:function(){t?(n.current.pause(),a(!t)):(n.current.play(),a(!t))},className:" ".concat(x?"play-dark":"play"),size:"2x",icon:t?m.d:m.e}),Object(c.jsx)(u.a,{className:" ".concat(x?"skip-forward-dark":"skip-forward"),size:"2x",icon:m.b,onClick:function(){return E("skip-forward")}}),Object(c.jsx)(u.a,{className:"".concat(x?"random-dark":"random"," ").concat(g?"".concat(x?"animate-flicker-dark":"animate-flicker"):""," "),size:"2x",icon:m.f,onClick:function(){return E("random")},title:"Random"}),Object(c.jsx)(u.a,{size:"2x",onClick:function(){return w(!S)},icon:m.g,className:" ".concat(x?"volume-dark":"volume")}),S&&Object(c.jsx)("input",{onChange:function(e){var t=e.target.value;n.current.volume=t,i(Object(d.a)(Object(d.a)({},r),{},{volume:t}))},value:r.volume,max:"1",min:"0",step:"0.01",type:"range",className:" ".concat(x?"range-dark":"range")})]})]})},v=function(e){var t=e.currentSong,a=e.isDark;return Object(c.jsxs)("div",{className:"".concat(a?"song-container-dark":"song-container "," "),children:[Object(c.jsx)("img",{alt:t.name,src:t.cover}),Object(c.jsx)("h2",{children:t.name}),Object(c.jsx)("h3",{children:t.artist})]})},f=function(e){var t=e.name,a=e.artist,o=e.cover,n=e.id,r=e.setCurrentSong,i=e.songs,s=e.audioRef,p=e.isPlaying,l=e.setSongs,h=e.active,u=e.isDark;return console.log(u),Object(c.jsxs)("div",{onClick:function(){var e=i.filter((function(e){return e.id===n}));r(Object(d.a)({},e[0]));var t=i.map((function(e){return e.id===n?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})}));l(t),b(p,s)},className:" ".concat(u?"library-song-dark":"library-song"," library-song ").concat(h?"".concat(u?"selected-dark":"selected"):""," "),children:[Object(c.jsx)("img",{src:o,alt:""}),Object(c.jsxs)("div",{className:"".concat(u?"song-description-dark":"song-description "," "),children:[Object(c.jsx)("h3",{children:t}),Object(c.jsx)("h4",{children:a})]})]})},g=function(e){var t=e.songs,a=e.setCurrentSong,o=e.audioRef,n=e.isPlaying,r=e.setSongs,i=e.libraryStatus,s=e.isDark;return Object(c.jsxs)("div",{className:"".concat(s?"library-dark":"library ","  ").concat(i?"active-library":" "),children:[Object(c.jsx)("h2",{children:"Playlist"}),Object(c.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(c.jsx)(f,{songs:t,cover:e.cover,name:e.name,artist:e.artist,active:e.active,id:e.id,setCurrentSong:a,audioRef:o,isPlaying:n,setSongs:r,isDark:s},e.id)}))})]})},O=a(8),x=function(e){var t,a=e.setLibraryStatus,o=e.libraryStatus,n=e.isDark,r=e.setIsDark;return Object(c.jsxs)("nav",{children:[Object(c.jsx)("h1",{onClick:function(){r(!n),document.body.classList.toggle("body-dark")},title:"Dark Theme",className:n?"site-name-dark":"site-name",children:"DevCarl"}),Object(c.jsxs)("button",(t={className:o?"library-active":"",onClick:function(){a(!o)}},Object(O.a)(t,"className",n?"playlist-btn-dark":"playlist-btn"),Object(O.a)(t,"children",["Playlist",Object(c.jsx)(u.a,{icon:m.c})]),t))]})},k=a(28);var y=function(){return[{name:"Cloud Dance",cover:"https://chillhop.com/wp-content/uploads/2020/07/58028b4ad62050072228e4c833916e5512772399-1024x1024.jpg",artist:"Blue Wednesday, Ian Ewing",audio:"https://mp3.chillhop.com/serve.php/?mp3=8930",color:["#3c3955","#e08c95"],id:Object(k.a)(),active:!0},{name:"Mother Nature",cover:"https://chillhop.com/wp-content/uploads/2020/07/58028b4ad62050072228e4c833916e5512772399-1024x1024.jpg",artist:"Blue Wednesday, Yasper",audio:"https://mp3.chillhop.com/serve.php/?mp3=9045",color:["#3c3955","#e08c95"],id:Object(k.a)(),active:!1},{name:"Dusk",cover:"https://chillhop.com/wp-content/uploads/2020/07/58028b4ad62050072228e4c833916e5512772399-1024x1024.jpg",artist:"Blue Wednesday, Soul Food Horns",audio:"https://mp3.chillhop.com/serve.php/?mp3=8131",color:["#3c3955","#e08c95"],id:Object(k.a)(),active:!1},{name:"Embers",cover:"https://chillhop.com/wp-content/uploads/2020/07/58028b4ad62050072228e4c833916e5512772399-1024x1024.jpg",artist:"Blue Wednesday, Aso",audio:"https://mp3.chillhop.com/serve.php/?mp3=9048",color:["#3c3955","#e08c95"],id:Object(k.a)(),active:!1},{name:"Noisy World",cover:"https://chillhop.com/wp-content/uploads/2020/07/0b601886865a922eb60035bc92f123f425806ca6-1024x1024.jpg",artist:"less.people",audio:"https://mp3.chillhop.com/serve.php/?mp3=7969",color:["#B7B895","#818455"],id:Object(k.a)(),active:!1},{name:"Oh Badu",cover:"https://chillhop.com/wp-content/uploads/2020/07/0b601886865a922eb60035bc92f123f425806ca6-1024x1024.jpg",artist:"less.people",audio:"https://mp3.chillhop.com/serve.php/?mp3=7962",color:["#B7B895","#818455"],id:Object(k.a)(),active:!1},{name:"Eternal Now",cover:"https://chillhop.com/wp-content/uploads/2020/07/0b601886865a922eb60035bc92f123f425806ca6-1024x1024.jpg",artist:"less.people",audio:"https://mp3.chillhop.com/serve.php/?mp3=7965",color:["#B7B895","#818455"],id:Object(k.a)(),active:!1},{name:"What will you do ?",cover:"https://chillhop.com/wp-content/uploads/2020/07/0b601886865a922eb60035bc92f123f425806ca6-1024x1024.jpg",artist:"less.people",audio:"https://mp3.chillhop.com/serve.php/?mp3=7957",color:["#B7B895","#818455"],id:Object(k.a)(),active:!1},{name:"Flke",cover:"https://chillhop.com/wp-content/uploads/2020/07/f9ad13db0a7c6e6a086a3a17a15ff92cd69b2d7e-1024x1024.jpg",artist:"Philanthrope",audio:"https://mp3.chillhop.com/serve.php/?mp3=8780",color:["#C1C1C1","#111111"],id:Object(k.a)(),active:!1},{name:"Frameworks, Pt.2",cover:"https://chillhop.com/wp-content/uploads/2020/07/f9ad13db0a7c6e6a086a3a17a15ff92cd69b2d7e-1024x1024.jpg",artist:"Philanthrope",audio:"https://mp3.chillhop.com/serve.php/?mp3=9146",color:["#C1C1C1","#111111"],id:Object(k.a)(),active:!1},{name:"Sodium",cover:"https://chillhop.com/wp-content/uploads/2020/07/f9ad13db0a7c6e6a086a3a17a15ff92cd69b2d7e-1024x1024.jpg",artist:"Philanthrope, Tesk",audio:"https://mp3.chillhop.com/serve.php/?mp3=9149",color:["#C1C1C1","#111111"],id:Object(k.a)(),active:!1},{name:"The End",cover:"https://chillhop.com/wp-content/uploads/2020/07/f9ad13db0a7c6e6a086a3a17a15ff92cd69b2d7e-1024x1024.jpg",artist:"Philanthrope, Fujitsu",audio:"https://mp3.chillhop.com/serve.php/?mp3=8518",color:["#C1C1C1","#111111"],id:Object(k.a)(),active:!1},{name:"Spring Vale",cover:"https://chillhop.com/wp-content/uploads/2020/06/2437a8a3496248e57dc5d83fc93ec6b266dcc4e2-1024x1024.jpg",artist:"Fujitsu",audio:"https://mp3.chillhop.com/serve.php/?mp3=8990",color:["#BD9E99","#A9D9CE"],id:Object(k.a)(),active:!1},{name:"One Last Call",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",artist:"Nymano, Kanisan, Mau",audio:"https://mp3.chillhop.com/serve.php/?mp3=10134",color:["#99687F","#565080"],id:Object(k.a)(),active:!1},{name:"Sleepover",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",artist:"Nymano, JK the Sage",audio:"https://mp3.chillhop.com/serve.php/?mp3=10130",color:["#99687F","#565080"],id:Object(k.a)(),active:!1},{name:"Train Ride",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",artist:"Nymano, Philanthrope",audio:"https://mp3.chillhop.com/serve.php/?mp3=10140",color:["#99687F","#565080"],id:Object(k.a)(),active:!1},{name:"False Hope",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",artist:"Nymano, Pandrezz",audio:"https://mp3.chillhop.com/serve.php/?mp3=10148",color:["#99687F","#565080"],id:Object(k.a)(),active:!1},{name:"Sunday Mornings",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",artist:"Nymano, JK the Sage",audio:"https://mp3.chillhop.com/serve.php/?mp3=10139",color:["#99687F","#565080"],id:Object(k.a)(),active:!1},{name:"Distance",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",artist:"Nymano, Ouska, Anetta Morozova",audio:"https://mp3.chillhop.com/serve.php/?mp3=10152",color:["#99687F","#565080"],id:Object(k.a)(),active:!1},{name:"Cold Outside",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",artist:"Nymano",audio:"https://mp3.chillhop.com/serve.php/?mp3=10150",color:["#99687F","#565080"],id:Object(k.a)(),active:!1},{name:"A Day at the Beach",cover:"https://chillhop.com/wp-content/uploads/2020/07/46e61c111732cc3d72966225a1121a00bc693266-1024x1024.jpg",artist:"j'san, Pandrezz",audio:"https://mp3.chillhop.com/serve.php/?mp3=8078",color:["#ED6344","#591E0E"],id:Object(k.a)(),active:!1},{name:"This is Love",cover:"https://chillhop.com/wp-content/uploads/2020/07/46e61c111732cc3d72966225a1121a00bc693266-1024x1024.jpg",artist:"Pandrezz, Nyamano, Namuuna",audio:"https://mp3.chillhop.com/serve.php/?mp3=8151",color:["#ED6344","#591E0E"],id:Object(k.a)(),active:!1},{name:"Gone Again",cover:"https://chillhop.com/wp-content/uploads/2020/07/46e61c111732cc3d72966225a1121a00bc693266-1024x1024.jpg",artist:"Pandrezz, Nyamano",audio:"https://mp3.chillhop.com/serve.php/?mp3=8494",color:["#ED6344","#591E0E"],id:Object(k.a)(),active:!1},{name:"Lilo",cover:"https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",artist:"Midldle School, The Field Tapes",audio:"https://mp3.chillhop.com/serve.php/?mp3=11244",color:["#CDEEDD","#8DA16E"],id:Object(k.a)(),active:!1},{name:"Harbor",cover:"https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",artist:"Stan Forebee, The Field Tapes, azula, Francis",audio:"https://mp3.chillhop.com/serve.php/?mp3=11245",color:["#CDEEDD","#8DA16E"],id:Object(k.a)(),active:!1},{name:"Loving Someone You Lost",cover:"https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",artist:"The Field Tapes, tender spring, Nuum",audio:"https://mp3.chillhop.com/serve.php/?mp3=11247",color:["#CDEEDD","#8DA16E"],id:Object(k.a)(),active:!1},{name:"Cloud Carpets",cover:"https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",artist:"The Field Tapes, Ezzy, Wowflower",audio:"https://mp3.chillhop.com/serve.php/?mp3=11248",color:["#CDEEDD","#8DA16E"],id:Object(k.a)(),active:!1},{name:"Soulful",cover:"https://chillhop.com/wp-content/uploads/2020/07/1f3f4b923f3877c4c2da054eb5b3b53f009866a9-1024x1024.jpg",artist:"L'ind\xe9cis",audio:"https://mp3.chillhop.com/serve.php/?mp3=8092",color:["#DFD9BF","#AB7777"],id:Object(k.a)(),active:!1},{name:"Blind",cover:"https://chillhop.com/wp-content/uploads/2020/07/1f3f4b923f3877c4c2da054eb5b3b53f009866a9-1024x1024.jpg",artist:"L'ind\xe9cis",audio:"https://mp3.chillhop.com/serve.php/?mp3=8453",color:["#DFD9BF","#AB7777"],id:Object(k.a)(),active:!1},{name:"Le Sud",cover:"https://chillhop.com/wp-content/uploads/2020/07/1f3f4b923f3877c4c2da054eb5b3b53f009866a9-1024x1024.jpg",artist:"L'ind\xe9cis",audio:"https://mp3.chillhop.com/serve.php/?mp3=8746",color:["#DFD9BF","#AB7777"],id:Object(k.a)(),active:!1},{name:"Namaste",cover:"https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/98/11/a5/9811a5bc-af97-6dcc-59b4-e0fd11673355/artwork.jpg/1000x1000bb.webp",artist:"Joe James",audio:"https://media1.vocaroo.com/mp3/1jeMOFa7UeVj",color:["#fecedc","#85667A"],id:Object(k.a)(),active:!1}]};var S=function(){var e=Object(o.useState)(!1),t=Object(h.a)(e,2),a=t[0],n=t[1],r=Object(o.useRef)(null),i=Object(o.useState)(!1),s=Object(h.a)(i,2),u=s[0],m=s[1],f=Object(o.useState)(y()),O=Object(h.a)(f,2),k=O[0],S=O[1],w=Object(o.useState)(k[0]),D=Object(h.a)(w,2),C=D[0],N=D[1],E=Object(o.useState)(!1),F=Object(h.a)(E,2),P=F[0],B=F[1],T=Object(o.useState)({currentTime:0,duration:0,animationPercentage:0,volume:0}),M=Object(h.a)(T,2),z=M[0],L=M[1],A=Object(o.useState)(!1),I=Object(h.a)(A,2),R=I[0],W=I[1],J=Object(o.useState)({id:0}),H=Object(h.a)(J,2),K=H[0],U=H[1],V=function(e){var t=e.target.currentTime,a=e.target.duration,c=Math.round(t),o=Math.round(a),n=Math.round(c/o*100);L(Object(d.a)(Object(d.a)({},z),{},{currentTime:t,duration:a,animationPercentage:n,volume:e.target.volume}))},Y=function(e){var t=k.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{active:!0}):Object(d.a)(Object(d.a)({},t),{},{active:!1})}));S(t)},G=function(){var e=Object(l.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=k.findIndex((function(e){return e.id===C.id})),a=k[Math.floor(Math.random()*k.length)],!u){e.next=8;break}return e.next=5,N(a);case 5:Y(a),e.next=11;break;case 8:return e.next=10,N(k[(t+1)%k.length]);case 10:Y(k[(t+1)%k.length]);case 11:return b(P,r),e.abrupt("return");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"".concat(a?"App-dark":"App ","  ").concat(R?"library-active":""),children:[Object(c.jsx)(x,{libraryStatus:R,setLibraryStatus:W,isDark:a,setIsDark:n}),Object(c.jsx)(v,{isPlaying:P,currentSong:C,isDark:a}),Object(c.jsx)(j,{audioRef:r,setIsPlaying:B,currentSong:C,isPlaying:P,songInfo:z,setSongInfo:L,songs:k,setSongs:S,setCurrentSong:N,isRandom:u,setIsRandom:m,lastSong:K,setLastSong:U,isDark:a}),Object(c.jsx)(g,{songs:k,setCurrentSong:N,audioRef:r,isPlaying:P,setSongs:S,libraryStatus:R,isDark:a}),Object(c.jsx)("audio",{onLoadedMetadata:V,onTimeUpdate:V,ref:r,src:C.audio,onEnded:G})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),o(e),n(e),r(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),w()}},[[26,1,2]]]);
//# sourceMappingURL=main.5534f0f4.chunk.js.map