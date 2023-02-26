"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[8],{18:function(n,e,t){t.d(e,{GO:function(){return l},T8:function(){return c},du:function(){return s},iP:function(){return a},t1:function(){return d}});var i=t(243),r="https://api.themoviedb.org/3",o="9f3449ca8495a13b6d35e887839f0061",c=function(){return i.Z.get("".concat(r,"/trending/all/day?api_key=").concat(o))},a=function(n){return i.Z.get("".concat(r,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"))},s=function(n){return i.Z.get("".concat(r,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"))},l=function(n){return i.Z.get("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"))},d=function(n){return i.Z.get("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))}},476:function(n,e,t){t.d(e,{Z:function(){return p}});var i,r,o=t(821),c=t(168),a=t(87),s=t(444),l=(0,s.ZP)(a.OL)(i||(i=(0,c.Z)(["\n  color: black;\n  text-decoration: none;\n  &.active {\n    color: red;\n  }\n"]))),d=(0,s.ZP)("ul")(r||(r=(0,c.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 20px;\n  font-size: 18px;\n  align-items: center;\n  justify-self: center;\n  line-height: 1.14;\n  letter-spacing: 0.02em;\n"]))),u=t(184),p=function(){return(0,u.jsxs)(d,{children:[(0,u.jsx)("li",{children:(0,u.jsx)(l,{to:o._.home,children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l,{to:o._.movies,children:"Movies"})})]})}},960:function(n,e,t){t.d(e,{F:function(){return o}});var i,r=t(168),o=(0,t(444).ZP)("header")(i||(i=(0,r.Z)(["\n  border-bottom: 1px solid #ececec;\n  -webkit-box-shadow: -4px 15px 26px -11px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: -4px 15px 26px -11px rgba(0, 0, 0, 0.75);\n  box-shadow: -4px 15px 26px -11px rgba(0, 0, 0, 0.75);\n  margin-bottom: 20px;\n"])))},8:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var i,r,o,c,a=t(439),s=t(791),l=t(18),d=t(87),u=t(689),p=t(168),x=t(444),h=(0,x.ZP)("div")(i||(i=(0,p.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),f=(0,x.ZP)("ul")(r||(r=(0,p.Z)(["\n  display: flex;\n  padding-left: 0px;\n  list-style: none;\n  gap: 10px;\n"]))),g=t(184),v=function(n){var e=n.photo,t=n.title,i=n.score,r=n.overview,o=n.genres,c=n.data;return(0,g.jsxs)(h,{children:[(0,g.jsx)("div",{children:null===e?(0,g.jsx)("img",{src:"https://emojis.wiki/thumbs/emojis/cross-mark.webp",alt:"img",width:"350px",heigh:"250px"}):(0,g.jsx)("img",{src:"http://image.tmdb.org/t/p/w500".concat(e),alt:"img",width:"350px",height:"250px"})}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("h1",{children:[t," (",c,")"]}),(0,g.jsxs)("p",{children:["User Score: ",Math.round(i),"%"]}),(0,g.jsx)("h2",{children:"Overview"}),(0,g.jsx)("p",{children:r}),(0,g.jsx)("h3",{children:"Genres"}),(0,g.jsx)(f,{children:o.map((function(n){var e=n.name,t=n.id;return(0,g.jsx)("li",{children:(0,g.jsx)("p",{children:e})},t)}))})]})]})},m=t(476),j=(0,x.ZP)("div")(o||(o=(0,p.Z)(["\n  border: 2px solid black;\n  padding: 10px;\n"]))),b=(0,x.ZP)("button")(c||(c=(0,p.Z)(["\n  display: block;\n"]))),Z=t(960),k=t(821),w=function(){var n=(0,u.s0)(),e=(0,s.useState)([]),t=(0,a.Z)(e,2),i=t[0],r=t[1],o=(0,u.UO)().movieId,c=(0,u.TH)();if((0,s.useEffect)((function(){(0,l.du)(o).then((function(n){var e=n.data,t=e.overview,i=e.title,o=e.genres,c=e.popularity,a=e.backdrop_path,s=e.release_date;return r([i,c,t,o,a,s])}))}),[o]),void 0!==i[2]){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Z.F,{children:(0,g.jsx)(m.Z,{})}),(0,g.jsx)(b,{onClick:function(){var e,t;n(null!==(e=null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==e?e:k._.home)},type:"Button",children:"Go back"}),(0,g.jsx)(v,{photo:i[4],title:i[0],score:Math.round(i[1]),overview:i[2],genres:i[3],data:Number.parseInt(i[5])}),(0,g.jsxs)(j,{children:[(0,g.jsx)("h3",{children:"Additional information"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)(d.rU,{state:c.state,to:"cast",children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(d.rU,{state:c.state,to:"reviews",children:"Reviews"})})]})]}),(0,g.jsx)(u.j3,{})]})}}}}]);
//# sourceMappingURL=8.06fbb990.chunk.js.map