_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[40],{"49sf":function(n,t,e){n.exports={container:"Unplan_container__1bCTl",wrapper:"Unplan_wrapper__3TVdZ",main:"Unplan_main__1ucXb",title_container:"Unplan_title_container__3MJWa",title:"Unplan_title__38xId",input:"Unplan_input__1eNGo",view_history:"Unplan_view_history__zcrLX",bottom_container:"Unplan_bottom_container__19oX-",subtitle:"Unplan_subtitle__37g4s",unplan_grid2:"Unplan_unplan_grid2__2w3Og",add_unplan:"Unplan_add_unplan__3f7OC"}},GKTS:function(n,t,e){n.exports={container:"Button_container__37SWQ",container_white:"Button_container_white__zoABs"}},JkA1:function(n,t,e){"use strict";var i=e("nKUr"),a=(e("q1tI"),e("YFqc")),c=e.n(a),s=e("mPD6"),o=e.n(s);t.a=function(n){var t=n.backHref,e=n.title,a=n.action,s=n.color,r=n.onClick,l=n.backAction,u=n.noBack,j=n.disable;return Object(i.jsxs)("div",{className:"green"==s?"".concat(o.a.nav_green," ").concat(o.a.nav_container):"white"==s?"".concat(o.a.nav_white," ").concat(o.a.nav_container):o.a.nav_container,children:[t?Object(i.jsx)(c.a,{href:t||"/",children:Object(i.jsx)("a",{children:Object(i.jsx)("img",{style:{width:"24px"},src:"/arrow-left.svg"})})}):u?Object(i.jsx)("div",{}):Object(i.jsx)("img",{onClick:function(){l()},style:{width:"24px"},src:"/arrow-left.svg"}),Object(i.jsx)("div",{style:{textAlign:"center"},className:o.a.title,children:e}),a&&!1===j?Object(i.jsx)("div",{onClick:r,style:{fontSize:"14px",margin:"auto",color:"#41867A",cursor:"pointer"},children:a}):a&&!0===j?Object(i.jsx)("div",{onClick:r,style:{fontSize:"14px",margin:"auto",color:"#c4c4c4",cursor:"pointer"},children:a}):null]})}},aCWS:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/visit/unplan",function(){return e("vFYC")}])},dVq6:function(n,t,e){n.exports={container:"Spinner_container__3N6EY",spinner:"Spinner_spinner__3goiz","ball-spin-clockwise":"Spinner_ball-spin-clockwise__YJ_C3"}},es2X:function(n,t,e){"use strict";var i=e("nKUr"),a=(e("q1tI"),e("YFqc"),e("GKTS")),c=e.n(a);t.a=function(n){var t=n.onClick,e=n.text,a=n.submit,s=n.color;return Object(i.jsx)("button",{type:a?"submit":"",className:"white"===s?c.a.container_white:c.a.container,onClick:t,children:e})}},fj1f:function(n,t,e){"use strict";var i=e("nKUr"),a=e("dVq6"),c=e.n(a);t.a=function(){return Object(i.jsx)("div",{className:c.a.container,children:Object(i.jsxs)("div",{className:c.a.spinner,children:[Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{})]})})}},mPD6:function(n,t,e){n.exports={nav_container:"Nav_nav_container__7SMgK",title:"Nav_title__21aLL",nav_green:"Nav_nav_green__1_B--",nav_white:"Nav_nav_white__1ml4-",white:"Nav_white__2liqq"}},vFYC:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return h}));var i=e("nKUr"),a=e("q1tI"),c=e("YFqc"),s=e.n(c),o=e("20a2"),r=e.n(o),l=e("kQFM"),u=e("49sf"),j=e.n(u),_=e("JkA1"),d=e("fj1f"),b=e("es2X"),p=e("ECGM");function h(){var n=Object(a.useContext)(l.b),t=(n.state,n.dispatch,n.actions),e=Object(a.useState)([]),c=(e[0],e[1],Object(a.useState)("")),o=c[0],u=c[1],h=Object(a.useState)([]),v=h[0],x=h[1],O=Object(a.useState)(!1),f=O[0],m=O[1],w=Object(a.useState)({}),g=w[0],N=w[1],C=Object(a.useState)(""),S=C[0],k=C[1],U=Object(a.useState)([]),y=U[0],q=U[1],J=Object(a.useState)(!1),T=J[0],B=J[1],Y=Object(a.useState)({}),E=Y[0],F=Y[1],z=Object(a.useState)(!1),K=z[0],X=(z[1],Object(a.useState)(null)),A=(X[0],X[1],function(n){m(!0),u(n),n?Object(p.q)(n).then((function(n){x(n)})).catch((function(n){console.log(n)})):x([])}),I=function(n){B(!0),k(n)};Object(a.useEffect)((function(){var n=setTimeout((function(){S?Object(p.r)(S).then((function(n){q(n)})).catch((function(n){console.log(n)})):q([])}),1e3);return function(){return clearTimeout(n)}}),[S]);return K?Object(i.jsx)(d.a,{}):Object(i.jsx)("div",{className:j.a.container,children:Object(i.jsxs)("div",{className:j.a.wrapper,children:[Object(i.jsx)(_.a,{backHref:"/"}),Object(i.jsx)("div",{className:j.a.title_container,children:Object(i.jsxs)("div",{className:j.a.title,children:["Unplan ",Object(i.jsx)("div",{children:"Visit"})]})}),Object(i.jsxs)("div",{className:j.a.main,children:[Object(i.jsx)("div",{className:j.a.subtitle,children:"Jenis Channel"}),Object(i.jsx)("input",{onChange:function(n){A(n.target.value)},value:o,placeholder:"Search",className:j.a.input,onBlur:function(){setTimeout((function(){m(!1)}),200)},onFocus:function(n){return A(n.target.value)}}),f?Object(i.jsx)("div",{style:{position:"absolute",maxHeight:"180px",backgroundColor:"white",overflowY:"scroll",maxWidth:"400px",padding:"0 4px",zIndex:999999},children:v.map((function(n,t){return Object(i.jsx)("div",{onClick:function(){N(n),u(n.namaJenisChannel),x([])},style:{borderBottom:".5px solid #f0f0f0",width:"350px"},children:n.namaJenisChannel},t)}))}):null,Object(i.jsx)("div",{className:j.a.subtitle,children:"Outlet"}),Object(i.jsx)("input",{onChange:function(n){I(n.target.value)},value:S,placeholder:"Search",className:j.a.input,onBlur:function(){setTimeout((function(){B(!1)}),200)},onFocus:function(n){return I(n.target.value)}}),T?Object(i.jsx)("div",{style:{position:"absolute",maxHeight:"180px",backgroundColor:"white",overflowY:"scroll",maxWidth:"400px",padding:"0 4px",zIndex:999999},children:y.map((function(n,t){return Object(i.jsx)("div",{onClick:function(){F(n),k(n.namaOutlet),q([])},style:{borderBottom:".5px solid #f0f0f0",width:"350px"},children:n.namaOutlet},t)}))}):null,Object(i.jsxs)("div",{className:j.a.bottom_container,children:[Object(i.jsx)(b.a,{text:"Submit",onClick:function(){g.namaJenisChannel&&E.namaOutlet&&(t.setUnplanOutlet(E),t.setUnplanJenisChannel(g),r.a.push("/visit/unplan/submit"))}}),Object(i.jsx)(s.a,{href:"/visit/unplan/history",children:Object(i.jsx)("a",{children:Object(i.jsx)("div",{className:j.a.view_history,children:"View History"})})}),Object(i.jsx)(s.a,{href:"/visit/unplan/nearme",children:Object(i.jsx)("a",{children:Object(i.jsx)("div",{className:j.a.view_history,children:"Near Me"})})})]})]})]})})}}},[["aCWS",0,2,1,4,3]]]);