_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[53],{"29p6":function(n,t,e){n.exports={container:"WorkVisitDetail_container__1XrY3",wrapper:"WorkVisitDetail_wrapper__24vWh",main:"WorkVisitDetail_main__1UDRz",produk_fokus_container:"WorkVisitDetail_produk_fokus_container__2VgVG",rayon_container:"WorkVisitDetail_rayon_container__2yuFk",data_container:"WorkVisitDetail_data_container__11hnF",bottom_container:"WorkVisitDetail_bottom_container__3GRy7",nilai_container:"WorkVisitDetail_nilai_container__2ugbs",penilaian_top_container:"WorkVisitDetail_penilaian_top_container__1DdcU",penilaian_bot_container:"WorkVisitDetail_penilaian_bot_container__3JlnR"}},"4lBl":function(n,t,e){n.exports={modal:"Modal_modal__2IoMM"}},"5PhN":function(n,t,e){"use strict";var i=e("nKUr"),a=(e("q1tI"),e("M7ZG")),r=e.n(a);t.a=function(n){var t=n.children,e=n.style,a=n.shadow;return Object(i.jsx)("div",{className:"".concat(r.a.container," ").concat(a?r.a.shadow:""),style:e||{},children:t})}},GKTS:function(n,t,e){n.exports={container:"Button_container__37SWQ",container_white:"Button_container_white__zoABs"}},JFGI:function(n,t,e){n.exports={container:"Dropdown_container__3dbP-"}},JkA1:function(n,t,e){"use strict";var i=e("nKUr"),a=(e("q1tI"),e("YFqc")),r=e.n(a),c=e("mPD6"),o=e.n(c);t.a=function(n){var t=n.backHref,e=n.title,a=n.action,c=n.color,s=n.onClick,l=n.backAction,d=n.noBack,u=n.disable;return Object(i.jsxs)("div",{className:"green"==c?"".concat(o.a.nav_green," ").concat(o.a.nav_container):"white"==c?"".concat(o.a.nav_white," ").concat(o.a.nav_container):o.a.nav_container,children:[t?Object(i.jsx)(r.a,{href:t||"/",children:Object(i.jsx)("a",{children:Object(i.jsx)("img",{style:{width:"24px"},src:"/arrow-left.svg"})})}):d?Object(i.jsx)("div",{}):Object(i.jsx)("img",{onClick:function(){l()},style:{width:"24px"},src:"/arrow-left.svg"}),Object(i.jsx)("div",{style:{textAlign:"center"},className:o.a.title,children:e}),a&&!1===u?Object(i.jsx)("div",{onClick:s,style:{fontSize:"14px",margin:"auto",color:"#41867A",cursor:"pointer"},children:a}):a&&!0===u?Object(i.jsx)("div",{onClick:s,style:{fontSize:"14px",margin:"auto",color:"#c4c4c4",cursor:"pointer"},children:a}):null]})}},KQm4:function(n,t,e){"use strict";function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function a(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(t,"a",(function(){return a}))},M7ZG:function(n,t,e){n.exports={container:"Card_container__2ez1c",shadow:"Card_shadow__Tq5_x"}},"UV+Q":function(n,t,e){"use strict";var i=e("nKUr"),a=(e("q1tI"),e("YFqc"),e("4lBl")),r=e.n(a);e("20a2");t.a=function(n){var t=n.children,e=n.onClick;return Object(i.jsx)("div",{onClick:e,className:r.a.modal,children:t})}},Yue9:function(n,t,e){"use strict";var i=e("nKUr"),a=e("KQm4"),r=(e("q1tI"),e("JFGI")),c=e.n(r);t.a=function(n){var t=n.options,e=void 0===t?[]:t,r=n.onChange,o=n.value,s=n.type;if("POSM"===s)var l=o?{program:o,value:o}:{program:"SELECT TYPE",value:{}};else if("BRAND"===s)l=o?{namaBrand:o,value:o}:{namaBrand:"SELECT BRAND",value:{}};return Object(i.jsx)("select",{className:c.a.container,onChange:function(n){return r(n)},children:[l].concat(Object(a.a)(e)).map((function(n,t){return n&&Object(i.jsx)("option",{value:n.value,children:"POSM"==s?n.program:"BRAND"===s?n.namaBrand:"NILAI_WORKVISIT"===s?n:""},t)}))})}},bGjZ:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work-visit/[id]",function(){return e("dadD")}])},dVq6:function(n,t,e){n.exports={container:"Spinner_container__3N6EY",spinner:"Spinner_spinner__3goiz","ball-spin-clockwise":"Spinner_ball-spin-clockwise__YJ_C3"}},dadD:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return h}));var i=e("nKUr"),a=e("q1tI"),r=(e("YFqc"),e("20a2")),c=e.n(r),o=e("29p6"),s=e.n(o),l=e("kQFM"),d=e("JkA1"),u=e("5PhN"),_=e("fj1f"),j=e("es2X"),b=e("UV+Q"),v=e("Yue9"),p=e("ECGM");function h(){var n=Object(a.useContext)(l.b),t=n.state,e=(n.dispatch,n.actions),o=Object(a.useState)(!0),h=o[0],f=o[1],x=Object(a.useState)([]),O=x[0],m=x[1],k=Object(a.useState)(!1),w=k[0],g=(k[1],Object(r.useRouter)());new Date;Object(a.useEffect)((function(){g.query.id&&Object(p.a)().then((function(n){var t=n.filter((function(n){return n.id===g.query.id}));m(t),f(!1)})).catch((function(n){console.log(n)}))}),[g.query.id]);var y=function(){var n=O[0];return console.log(n),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(u.a,{style:{borderRadius:"5px",padding:"16px"},shadow:!0,children:[Object(i.jsxs)("div",{className:s.a.data_container,children:[Object(i.jsx)("div",{children:n.namaSMR}),Object(i.jsx)("div",{style:{textAlign:"right"},children:Object(i.jsx)("span",{className:s.a.rayon_container,children:n.kodeRayon})})]}),Object(i.jsxs)("div",{style:{fontSize:"12px",fontWeight:"400"},children:["Produk Fokus:"," ",Object(i.jsx)("span",{className:s.a.produk_fokus_container,children:n.produkFokus})]})]}),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:s.a.penilaian_top_container,children:"Komunikasi"}),Object(i.jsxs)("div",{className:s.a.penilaian_bot_container,children:[Object(i.jsxs)("div",{className:s.a.nilai_container,children:[Object(i.jsx)("div",{children:"Nilai"}),Object(i.jsx)(v.a,{options:["1","2","3","4","5"],type:"NILAI_WORKVISIT",onChange:function(n){}})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:"Catatan"}),Object(i.jsx)("textarea",{style:{width:"100%",height:"80px",fontSize:"12px",border:"1px solid #e9ecf2",borderRadius:"5px"},onChange:function(n){},value:t.visitSpreadingReducer.catatan})]})]})]})]})};return h?Object(i.jsx)(_.a,{}):Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:s.a.container,children:[w?Object(i.jsx)(b.a,{children:Object(i.jsx)(_.a,{})}):null,Object(i.jsxs)("div",{className:s.a.wrapper,children:[Object(i.jsx)(d.a,{title:"Work Visit",color:"white",action:"Submit",backAction:function(){confirm("Data will be lost if you leave the page, are you sure?")&&(e.setDefaultVisitUnplan(),c.a.push("/work-visit"))}}),Object(i.jsx)("div",{className:s.a.main,children:y()}),Object(i.jsx)("div",{className:s.a.bottom_container,children:Object(i.jsx)(j.a,{text:"Submit"})})]})]})})}},es2X:function(n,t,e){"use strict";var i=e("nKUr"),a=(e("q1tI"),e("YFqc"),e("GKTS")),r=e.n(a);t.a=function(n){var t=n.onClick,e=n.text,a=n.submit,c=n.color;return Object(i.jsx)("button",{type:a?"submit":"",className:"white"===c?r.a.container_white:r.a.container,onClick:t,children:e})}},fj1f:function(n,t,e){"use strict";var i=e("nKUr"),a=e("dVq6"),r=e.n(a);t.a=function(){return Object(i.jsx)("div",{className:r.a.container,children:Object(i.jsxs)("div",{className:r.a.spinner,children:[Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{})]})})}},mPD6:function(n,t,e){n.exports={nav_container:"Nav_nav_container__7SMgK",title:"Nav_title__21aLL",nav_green:"Nav_nav_green__1_B--",nav_white:"Nav_nav_white__1ml4-",white:"Nav_white__2liqq"}}},[["bGjZ",0,1,2,4,3]]]);