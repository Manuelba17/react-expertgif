(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(8),c=n.n(r),i=n(2),s=n(10),u=n(0);function o(e){var t=e.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>0&&(t((function(e){return[c].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){o(e.target.value)},placeholder:"Busca tu categoria favorita",required:!0})})}var j=n(7),l=n(6),d=n.n(l),b=n(9),p=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"C0UHCJVMqnzF9UbwTSNZ9ZC19a26XTIS",n="https://api.giphy.com/v1/gifs/search?limit=15&g=&q=".concat(encodeURI(t),"&api_key=").concat("C0UHCJVMqnzF9UbwTSNZ9ZC19a26XTIS"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,titulo:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_large.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function f(e){var t=e.titulo,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn animate__slow\t ",children:[Object(u.jsx)("p",{children:t}),Object(u.jsx)("img",{src:n,alt:t})]})}function O(e){var t=e.categories,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){p(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"animate__animated animate__zoomIn",children:t}),c&&Object(u.jsx)("p",{className:"loader"}),Object(u.jsx)("ol",{className:"card-grid",children:r.map((function(e){return Object(a.createElement)(f,Object(j.a)(Object(j.a)({},e),{},{key:e.id}))}))})]})}function m(e){var t=e.defaultCategories,n=void 0===t?["Cats"]:t,r=Object(a.useState)(n),c=Object(i.a)(r,2),s=c[0],j=c[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{children:Object(u.jsx)("h2",{children:" Gif Expert App"})}),Object(u.jsx)(o,{setCategories:j}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:s.map((function(e){return Object(u.jsx)(O,{categories:e},e)}))})]})}n(17);c.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.fedafb38.chunk.js.map