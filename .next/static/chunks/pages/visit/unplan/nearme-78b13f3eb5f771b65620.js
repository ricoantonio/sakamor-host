_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{GKTS:function(t,e,n){t.exports={container:"Button_container__37SWQ",container_white:"Button_container_white__zoABs"}},HWlg:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var i=n("nKUr"),a=n("q1tI"),c=n("20a2"),r=n.n(c),o=n("kQFM"),s=n("fIWe"),l=n.n(s),d=n("JkA1"),j=n("fj1f"),_=n("es2X"),u=(n("n6sP"),n("YFqc")),h=n.n(u),x=n("5PhN"),p=n("ECGM");n("srvB");function v(t){var e=t.type,n=Object(a.useContext)(o.b),c=(n.state,n.dispatch),s=n.actions,u=Object(a.useState)([]),v=u[0],b=u[1],O=Object(a.useState)(""),f=O[0],g=O[1],m=Object(a.useState)(!0),w=m[0],y=m[1],N=Object(a.useState)({}),S=(N[0],N[1]),k=Object(a.useState)(""),P=(k[0],k[1]);Object(a.useEffect)((function(){var t=navigator.geolocation;if(t){var e=t.watchPosition((function(t){var e=t.coords;S({latitude:e.latitude,longitude:e.longitude})}),(function(t){P(t.message)}));return function(){return t.clearWatch(e)}}P("Geolocation is not supported")}),[]),Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user")),n=JSON.parse(localStorage.getItem("menu"));t?Object(p.a)(t).then((function(t){var i=t.filter((function(t){return t.moduleCode===e})),a=n.filter((function(t){return t.moduleCode===e}));i&&a||r.a.push("/")})).catch((function(t){console.log(t)})):r.a.push("/")}),[c]),Object(a.useEffect)((function(){Object(p.s)().then((function(t){b(t),console.log(t),y(!1)})).catch((function(t){console.log(t)}))}),[c]);var C=function(){var t=v.filter((function(t){if(null!==t.namaOutlet)return t.namaOutlet.toLowerCase().includes(f.toLowerCase())||t.alamatOutlet.toLowerCase().includes(f.toLowerCase())})),e=t.map((function(t,e){return Object(i.jsx)(x.a,{style:{marginTop:"22px",borderRadius:"5px"},children:Object(i.jsx)("div",{style:{padding:"21px 18px"},children:Object(i.jsx)("div",{className:l.a.top_grid,children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{style:{fontSize:"18px",fontWeight:"500"},children:t.namaOutlet}),Object(i.jsx)("div",{style:{fontSize:"12px",fontWeight:"400"},children:t.alamatOutlet}),Object(i.jsx)(h.a,{href:"/visit/unplan/nearme/".concat(t.outletID),children:Object(i.jsx)("a",{children:Object(i.jsx)("div",{style:{textAlign:"center",margin:"10px 0",paddingTop:"14px"},children:Object(i.jsx)(_.a,{color:"white",text:"More",onClick:function(){s.setUnplanOutlet(t)}})})})})]})})})})}));return 0==t.length?Object(i.jsx)("div",{style:{textAlign:"center",marginTop:"150px",color:"#d0d0d0"},children:"No Item"}):e};return w?Object(i.jsx)(j.a,{}):Object(i.jsx)("div",{className:l.a.container,children:Object(i.jsxs)("div",{className:l.a.wrapper,children:[Object(i.jsx)(d.a,{title:"Near Me",backAction:function(){return r.a.back()},color:"white"}),Object(i.jsxs)("div",{className:l.a.main,children:[Object(i.jsx)("div",{className:l.a.search_fixed,children:Object(i.jsx)("input",{onChange:function(t){g(t.target.value)},placeholder:"Search",className:l.a.input,style:{marginTop:"0"}})}),Object(i.jsx)("div",{style:{margin:"60px 0"},children:C()})]})]})})}},JkA1:function(t,e,n){"use strict";var i=n("nKUr"),a=(n("q1tI"),n("YFqc")),c=n.n(a),r=n("mPD6"),o=n.n(r);e.a=function(t){var e=t.backHref,n=t.title,a=t.action,r=t.color,s=t.onClick,l=t.backAction,d=t.noBack,j=t.disable;return Object(i.jsxs)("div",{className:"green"==r?"".concat(o.a.nav_green," ").concat(o.a.nav_container):"white"==r?"".concat(o.a.nav_white," ").concat(o.a.nav_container):o.a.nav_container,children:[e?Object(i.jsx)(c.a,{href:e||"/",children:Object(i.jsx)("a",{children:Object(i.jsx)("img",{style:{width:"24px"},src:"/arrow-left.svg"})})}):d?Object(i.jsx)("div",{}):Object(i.jsx)("img",{onClick:function(){l()},style:{width:"24px"},src:"/arrow-left.svg"}),Object(i.jsx)("div",{style:{textAlign:"center"},className:o.a.title,children:n}),a&&!1===j?Object(i.jsx)("div",{onClick:s,style:{fontSize:"14px",margin:"auto",color:"#41867A",cursor:"pointer"},children:a}):a&&!0===j?Object(i.jsx)("div",{style:{fontSize:"14px",margin:"auto",color:"#c4c4c4",cursor:"pointer"},children:a}):null]})}},es2X:function(t,e,n){"use strict";var i=n("nKUr"),a=(n("q1tI"),n("YFqc"),n("GKTS")),c=n.n(a);e.a=function(t){var e=t.onClick,n=t.text,a=t.submit,r=t.color;return Object(i.jsx)("button",{type:a?"submit":"",className:"white"===r?c.a.container_white:c.a.container,onClick:e,children:n})}},fIWe:function(t,e,n){t.exports={container:"History_container__3-bqa",wrapper:"History_wrapper__1AWq1",main:"History_main__-kPJM",input:"History_input__1imqt",title_container:"History_title_container__1kcHZ",title:"History_title__33ObH",search_fixed:"History_search_fixed__cqTN-",view_history:"History_view_history__1pleh",bottom_container:"History_bottom_container__22kXP"}},hgnT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/visit/unplan/nearme",function(){return n("HWlg")}])},mPD6:function(t,e,n){t.exports={nav_container:"Nav_nav_container__7SMgK",title:"Nav_title__21aLL",nav_green:"Nav_nav_green__1_B--",nav_white:"Nav_nav_white__1ml4-",white:"Nav_white__2liqq"}},n6sP:function(t,e,n){"use strict";var i=n("nKUr"),a=(n("q1tI"),n("v5PU")),c=n.n(a),r=n("5PhN"),o=n("es2X"),s=n("YFqc"),l=n.n(s),d=n("wd/R"),j=n.n(d);e.a=function(t){var e=t.data,n=t.history,a=t.onClick;return Object(i.jsx)(r.a,{style:{marginTop:"22px",borderRadius:"5px"},children:Object(i.jsxs)("div",{style:{padding:"21px 18px"},onClick:n?a:null,children:[n?Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:c.a.top_grid,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{className:c.a.date,children:j()(e.tanggal).format("D / MMM / YYYY")}),Object(i.jsx)("div",{style:{fontSize:"18px",fontWeight:"500",marginTop:"10px"},children:e.namaOutlet}),Object(i.jsx)("div",{style:{fontSize:"12px",fontWeight:"400"},children:e.alamatOutlet})]}),Object(i.jsx)("div",{style:{textAlign:"right"},children:Object(i.jsx)("img",{src:"/done.svg",style:{height:"60px"}})})]})}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{style:{fontSize:"18px",fontWeight:"500"},children:e.namaOutlet}),Object(i.jsx)("div",{style:{fontSize:"12px",fontWeight:"400"},children:e.alamatOutlet})]}),Object(i.jsxs)("div",{className:c.a.grid_container,children:[Object(i.jsxs)("div",{className:c.a.container,children:[Object(i.jsx)("div",{className:c.a.container_title,children:"Target"}),Object(i.jsx)("div",{className:c.a.container_value,children:"Rp.".concat(e.target.toLocaleString("id-ID"))})]}),Object(i.jsxs)("div",{className:c.a.container,children:[Object(i.jsx)("div",{className:c.a.container_title,children:"Sales"}),Object(i.jsx)("div",{className:c.a.container_value,children:"Rp.".concat(e.sales.toLocaleString("id-ID"))})]})]}),n?"":Object(i.jsx)(l.a,{href:"/visit/plan/".concat(e.idMasterPlan),children:Object(i.jsx)("a",{children:Object(i.jsx)("div",{style:{textAlign:"center",margin:"10px 0",paddingTop:"14px"},children:Object(i.jsx)(o.a,{color:"white",text:"More"})})})})]})})}},v5PU:function(t,e,n){t.exports={grid_container:"DetailPlan_grid_container__3KAOn",top_grid:"DetailPlan_top_grid__2maNZ",container:"DetailPlan_container__eXIyJ",container_title:"DetailPlan_container_title__1cgVG",container_value:"DetailPlan_container_value__2WYRv",date:"DetailPlan_date__1zDoe"}}},[["hgnT",0,2,5,1,3,4,6]]]);