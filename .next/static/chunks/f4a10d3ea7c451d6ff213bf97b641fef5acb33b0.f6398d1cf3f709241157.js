(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"5PhN":function(e,t,i){"use strict";var a=i("nKUr"),n=(i("q1tI"),i("M7ZG")),c=i.n(n);t.a=function(e){var t=e.children,i=e.style,n=e.shadow;return Object(a.jsx)("div",{className:"".concat(c.a.container," ").concat(n?c.a.shadow:""),style:i||{},children:t})}},"8RbG":function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var a=i("nKUr"),n=i("KQm4"),c=i("q1tI"),r=i("20a2"),s=i.n(r),l=i("Dfhs"),o=i.n(l),u=i("kQFM"),d=i("JkA1"),_=i("fj1f"),b=i("es2X"),v=i("5PhN"),j=i("ECGM");function p(e){var t=e.type,i=Object(c.useContext)(u.b),l=i.state,p=i.dispatch,f=i.actions,h=Object(c.useState)(!0),m=h[0],O=h[1],x=Object(c.useState)(!1),y=x[0],g=x[1],N=Object(c.useState)(!1),P=N[0],k=N[1],w=Object(c.useState)(""),S=w[0],A=w[1],D=Object(c.useState)(""),I=D[0],C=D[1],R=Object(c.useState)([]),V=R[0],L=R[1],E=Object(c.useState)({}),U=E[0],q=E[1],T=Object(c.useState)([]),K=T[0],M=T[1],F=Object(c.useState)(""),G=F[0],Y=F[1],H=Object(c.useState)(""),J=H[0],z=H[1],B=Object(c.useState)(""),W=B[0],Q=B[1],X=Object(c.useState)(""),Z=X[0],$=X[1],ee=Object(c.useState)(""),te=ee[0],ie=ee[1],ae=Object(c.useState)(""),ne=ae[0],ce=ae[1],re=Object(c.useState)(""),se=re[0],le=re[1],oe=Object(c.useState)(""),ue=oe[0],de=oe[1],_e=Object(c.useState)([]),be=_e[0],ve=_e[1],je=Object(c.useState)(!1),pe=je[0],fe=je[1],he=Object(r.useRouter)();Object(c.useEffect)((function(){"HISTORY"!==t&&(K.length>0>0&&(window.onbeforeunload=function(){return"Data will be lost if you leave the page, are you sure?"}))})),Object(c.useEffect)((function(){"PLAN"===t?l.visitPlanReducer.avability.length>0&&M(Object(n.a)(l.visitPlanReducer.avability)):"UNPLAN"===t?l.visitUnplanReducer.avability.length>0&&M(Object(n.a)(l.visitUnplanReducer.avability)):"SPREADING"===t&&l.visitSpreadingReducer.avability.length>0&&M(Object(n.a)(l.visitSpreadingReducer.avability))}),[p]),Object(c.useEffect)((function(){}),[]),Object(c.useEffect)((function(){he.query.new?fe(!0):"UNPLAN"===t?l.visitUnplanReducer.jenisChannel.namaJenisChannel&&l.visitUnplanReducer.outlet.namaOutlet||s.a.push("/visit/unplan"):"SPREADING"===t&&(l.visitSpreadingReducer.jenisChannel.namaJenisChannel&&l.visitSpreadingReducer.outlet.namaOutlet||s.a.push("/visit/spreading"))}),[]),Object(c.useEffect)((function(){U.produkID&&("PLAN"===t?(Q(10),$(5e3)):"UNPLAN"===t?(Q(10),$(5e3),console.log(U.produkID,l.visitUnplanReducer.outlet.outletID)):"SPREADING"===t&&(Q(10),$(5e3)))}),[U]),Object(c.useEffect)((function(){U.produkID&&ne&&("PLAN"===t||"UNPLAN"===t||"SPREADING"===t)&&(parseInt(W)>parseInt(ne)?(ie(parseInt(W)-parseInt(ne)),de("Understock")):(ie(0),de("Overstock")))}),[ne]),Object(c.useEffect)((function(){he.query.id&&("PLAN"===t?Object(j.r)(he.query.id).then((function(e){var t=e.samePlan,i=e.data;0==t.length?s.a.push("/visit/plan"):(ve(i),l.visitPlanReducer.checkIn||f.setPlanCheckIn(now))})).catch((function(e){console.log(e)})):"UNPLAN"===t||"SPREADING"===t||("HISTORY_PLAN"===t?Object(j.g)(he.query.id).then((function(e){M(e),O(!1)})).catch((function(e){console.log(e)})):"HISTORY_UNPLAN"===t?Object(j.l)(he.query.id).then((function(e){M(e),O(!1)})).catch((function(e){console.log(e)})):"HISTORY_SPREADING"===t&&Object(j.k)(he.query.id).then((function(e){M(e),O(!1)})).catch((function(e){console.log(e)}))))}),[he.query.id]),Object(c.useEffect)((function(){"PLAN"===t?Object(j.v)(be.idJenisChannel).then((function(e){L(e),O(!1)})).catch((function(e){console.log(e)})):"UNPLAN"===t?Object(j.v)(l.visitUnplanReducer.jenisChannel.jenisChannelID).then((function(e){L(e),O(!1)})).catch((function(e){console.log(e)})):"SPREADING"===t&&Object(j.v)(l.visitSpreadingReducer.jenisChannel.jenisChannelID).then((function(e){L(e),O(!1)})).catch((function(e){console.log(e)}))}),[be]);var me=function(){if(y)return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:o.a.modal_avability,onClick:function(){g(!1)}}),Object(a.jsx)("div",{className:o.a.wrapper,children:Object(a.jsxs)("div",{className:o.a.avability_modal_container,children:[Object(a.jsx)("div",{className:o.a.add_title,children:"Add Product"}),Object(a.jsx)("div",{className:o.a.avability_modal_subtitle,children:"Product"}),Object(a.jsx)("input",{onChange:function(e){!function(e){C(e)}(e.target.value)},placeholder:"Search",value:I,className:o.a.input_order_search,onFocus:function(){return k(!0)}}),P?Object(a.jsx)("div",{style:{position:"absolute",maxHeight:"180px",backgroundColor:"white",overflowY:"scroll",maxWidth:"400px",padding:"0 4px",zIndex:999999},children:V.map((function(e,t){if(e.namaProduk.includes(I.toUpperCase()))return Object(a.jsx)("div",{onClick:function(){console.log(e),q(e),C(e.namaProduk),k(!1)},style:{borderBottom:".5px solid #f0f0f0",width:"356px"},children:e.namaProduk},t)}))}):null,Object(a.jsx)("div",{className:o.a.avability_modal_subtitle,children:"Stock (pcs)"}),Object(a.jsx)("input",{onChange:function(e){ce(e.target.value)},placeholder:"0",type:"number",min:0,className:o.a.input_order,value:ne}),Object(a.jsxs)("div",{className:o.a.avg_sales_container,children:[Object(a.jsxs)("div",{style:{paddingRight:"5px"},children:[Object(a.jsx)("div",{className:o.a.avability_modal_subtitle,children:"Avg Sales (pcs)"}),Object(a.jsx)("input",{onChange:function(e){Q(e.target.value)},placeholder:"0",type:"number",min:0,className:o.a.input_order,value:W,disabled:!0})]}),Object(a.jsxs)("div",{style:{paddingLeft:"5px"},children:[Object(a.jsx)("div",{className:o.a.avability_modal_subtitle,children:"Saran Order (pcs)"}),Object(a.jsx)("input",{onChange:function(e){ie(e.target.value)},placeholder:"0",type:"number",min:0,className:o.a.input_order,value:te,disabled:!0})]})]}),Object(a.jsx)("div",{className:o.a.avability_modal_subtitle,children:"Order (pcs)"}),Object(a.jsx)("input",{onChange:function(e){Y(e.target.value)},placeholder:"0",type:"number",min:0,className:o.a.input_order,value:G}),Object(a.jsx)("div",{className:o.a.avability_modal_subtitle,children:"Keterangan"}),Object(a.jsx)("div",{style:{height:"24px"},children:ue}),Object(a.jsx)("div",{style:{marginTop:"20px"},children:Object(a.jsx)(b.a,{text:"Add",onClick:function(){var e=new RegExp(/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/g);if(U.namaProduk&&G.match(e)&&0!=G)if(K.length>0){var t=K.findIndex((function(e){return e.productFocus.namaProduk===U.namaProduk}));t+1?(K.splice(t,1),K.push({productFocus:U,stock:ne,saranOrder:te,order:G,ket:ue,pengiriman:J,minor:se,harga:Z}),g(!1),ce(""),ie(""),Y(""),de(""),$("")):(K.push({productFocus:U,stock:ne,saranOrder:te,order:G,ket:ue,pengiriman:J,minor:se,harga:Z}),g(!1),ce(""),ie(""),Y(""),de(""),$(""))}else K.push({productFocus:U,stock:ne,saranOrder:te,order:G,ket:ue,pengiriman:J,minor:se,harga:Z}),g(!1),ce(""),ie(""),Y(""),de(""),$("")}})})]})})]})},Oe=function(){if(t.includes("HISTORY")){K.sort((function(e,t){return e.namaProduk.localeCompare(t.namaProduk)}));var e=K.filter((function(e){return e.namaProduk.toLowerCase().includes(S.toLowerCase())})),i=e.map((function(e,t){return Object(a.jsx)(v.a,{style:{borderRadius:"5px",padding:"30px",marginTop:"14px"},children:Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:o.a.avabilitylist_title,children:e.namaProduk}),Object(a.jsxs)("div",{className:o.a.avabilitylist_container,children:[Object(a.jsx)("div",{className:o.a.avabilitylist_subtitle,children:"Order"}),Object(a.jsxs)("div",{className:o.a.avabilitylist_value,children:[e.jumlah," pcs"]})]}),e.keterangan?Object(a.jsxs)("div",{className:o.a.avabilitylist_container,children:[Object(a.jsx)("div",{className:o.a.avabilitylist_subtitle,children:"Keterangan"}),Object(a.jsx)("div",{className:o.a.avabilitylist_value,children:e.keterangan})]}):null]})},t)}));return 0==e.length?Object(a.jsx)("div",{style:{textAlign:"center",marginTop:"150px",color:"#d0d0d0"},children:"No Item"}):i}K.sort((function(e,t){return e.productFocus.namaProduk.localeCompare(t.productFocus.namaProduk)}));var n=K.filter((function(e){return e.productFocus.namaProduk.toLowerCase().includes(S.toLowerCase())})),c=n.map((function(e,t){return Object(a.jsx)(v.a,{style:{borderRadius:"5px",padding:"30px",marginTop:"14px"},children:Object(a.jsxs)("div",{onClick:function(){q(e.productFocus),ce(e.stock),ie(e.saranOrder),Y(e.order),de(e.ket),g(!0),z(e.pengiriman),le(e.minor),$(e.harga)},children:[Object(a.jsx)("div",{className:o.a.avabilitylist_title,children:e.productFocus.namaProduk}),Object(a.jsxs)("div",{className:o.a.avabilitylist_stock_container,children:[Object(a.jsxs)("div",{className:o.a.avabilitylist_container,style:{marginRight:"5px"},children:[Object(a.jsx)("div",{className:o.a.avabilitylist_subtitle,children:"Stock"}),Object(a.jsxs)("div",{div:!0,className:o.a.avabilitylist_value,children:[e.stock," pcs"]})]}),Object(a.jsxs)("div",{className:o.a.avabilitylist_container,style:{marginLeft:"5px"},children:[Object(a.jsx)("div",{className:o.a.avabilitylist_subtitle,children:"Saran Order"}),Object(a.jsxs)("div",{div:!0,className:o.a.avabilitylist_value,children:[e.saranOrder," pcs"]})]})]}),Object(a.jsxs)("div",{className:o.a.avabilitylist_container,children:[Object(a.jsx)("div",{className:o.a.avabilitylist_subtitle,children:"Order"}),Object(a.jsxs)("div",{className:o.a.avabilitylist_value,children:[e.order," pcs"]})]}),e.ket?Object(a.jsxs)("div",{className:o.a.avabilitylist_container,children:[Object(a.jsx)("div",{className:o.a.avabilitylist_subtitle,children:"Keterangan"}),Object(a.jsx)("div",{className:o.a.avabilitylist_value,children:e.ket})]}):null]})},t)}));return 0==n.length?Object(a.jsx)("div",{style:{textAlign:"center",marginTop:"150px",color:"#d0d0d0"},children:"No Item"}):c};return m?Object(a.jsx)(_.a,{}):Object(a.jsxs)(a.Fragment,{children:[me(),Object(a.jsx)("div",{className:o.a.container,children:Object(a.jsxs)("div",{className:o.a.wrapper,children:[t.includes("HISTORY")?Object(a.jsx)(d.a,{title:"Avability",color:"white",backAction:function(){s.a.back()}}):Object(a.jsx)(d.a,{title:"Avability",color:"white",action:"Save",onClick:function(){pe?(f.setSpreadingAvability(K),s.a.push("/visit/spreading/submit?new=true")):"PLAN"===t?(f.setPlanAvability(K),s.a.push("/visit/plan/".concat(he.query.id))):"UNPLAN"===t?(f.setUnplanAvability(K),s.a.push("/visit/unplan/submit")):"SPREADING"===t&&(f.setSpreadingAvability(K),s.a.push("/visit/spreading/submit"))},backAction:function(){s.a.back()},disable:!1}),Object(a.jsxs)("div",{className:o.a.main,children:[Object(a.jsxs)("div",{className:o.a.search_fixed,children:[Object(a.jsxs)("div",{style:{margin:"10px 0 0 0"},children:[Object(a.jsx)("div",{className:o.a.progress_bar}),Object(a.jsx)("div",{className:o.a.progress_bar_now,style:{width:"".concat(K.length/25*100,"%")}})]}),Object(a.jsx)("input",{onChange:function(e){A(e.target.value)},placeholder:"Search",className:o.a.input,style:{marginTop:"0"}})]}),Object(a.jsxs)("div",{style:{paddingTop:"60px"},children:[Oe(),Object(a.jsx)("div",{style:{marginBottom:"100px"}})]})]}),t.includes("HISTORY")?null:Object(a.jsx)("div",{className:o.a.avability_bot_container,children:Object(a.jsx)(b.a,{text:"Add",onClick:function(){g(!0),q(""),Q(""),ce(""),z(""),Y(""),ie(""),de(""),le(""),$(""),C("")}})})]})})]})}},Dfhs:function(e,t,i){e.exports={container:"VisitPlanDetail_container__2jr6z",wrapper:"VisitPlanDetail_wrapper__1k2PA",main:"VisitPlanDetail_main__2JVTk",render_data:"VisitPlanDetail_render_data__UG0Yf",avability_modal_subtitle:"VisitPlanDetail_avability_modal_subtitle__cImGw",render_value:"VisitPlanDetail_render_value__2U7Gk",input:"VisitPlanDetail_input__3EeAf",input_order_search:"VisitPlanDetail_input_order_search__3uxsM",input_order:"VisitPlanDetail_input_order__1WXcP",visibility_grid:"VisitPlanDetail_visibility_grid__eKqRB",grid_50:"VisitPlanDetail_grid_50__xScpT",visibility_grid_history:"VisitPlanDetail_visibility_grid_history__3RjRi",visibility_dropdown:"VisitPlanDetail_visibility_dropdown__1NliU",new_button:"VisitPlanDetail_new_button__3zBx9",input_file:"VisitPlanDetail_input_file__2mLHX",progress_bar:"VisitPlanDetail_progress_bar__Cz8_8",progress_bar_now:"VisitPlanDetail_progress_bar_now__3w_Ar",avability_bot_container:"VisitPlanDetail_avability_bot_container__1vyIh",avability_modal_container:"VisitPlanDetail_avability_modal_container__1BVd4",avability_modal_main:"VisitPlanDetail_avability_modal_main__isfSW",modal_avability:"VisitPlanDetail_modal_avability__3bVY8",hidden_overflow:"VisitPlanDetail_hidden_overflow__35jOV",add_title:"VisitPlanDetail_add_title__20KUY",stock_order_container:"VisitPlanDetail_stock_order_container__1-0Au",avg_sales_container:"VisitPlanDetail_avg_sales_container__2ZL8F",avabilitylist_title:"VisitPlanDetail_avabilitylist_title__3iIBI",avabilitylist_stock_container:"VisitPlanDetail_avabilitylist_stock_container__1iSbF",avabilitylist_container:"VisitPlanDetail_avabilitylist_container__WpqI9",avabilitylist_subtitle:"VisitPlanDetail_avabilitylist_subtitle__2LI2L",avabilitylist_value:"VisitPlanDetail_avabilitylist_value__21-Yx",search_fixed:"VisitPlanDetail_search_fixed__3uZmj",nav_box:"VisitPlanDetail_nav_box__2aVI9"}},GKTS:function(e,t,i){e.exports={container:"Button_container__37SWQ",container_white:"Button_container_white__zoABs"}},JkA1:function(e,t,i){"use strict";var a=i("nKUr"),n=(i("q1tI"),i("YFqc")),c=i.n(n),r=i("mPD6"),s=i.n(r);t.a=function(e){var t=e.backHref,i=e.title,n=e.action,r=e.color,l=e.onClick,o=e.backAction,u=e.noBack,d=e.disable;return Object(a.jsxs)("div",{className:"green"==r?"".concat(s.a.nav_green," ").concat(s.a.nav_container):"white"==r?"".concat(s.a.nav_white," ").concat(s.a.nav_container):s.a.nav_container,children:[t?Object(a.jsx)(c.a,{href:t||"/",children:Object(a.jsx)("a",{children:Object(a.jsx)("img",{style:{width:"24px"},src:"/arrow-left.svg"})})}):u?Object(a.jsx)("div",{}):Object(a.jsx)("img",{onClick:function(){o()},style:{width:"24px"},src:"/arrow-left.svg"}),Object(a.jsx)("div",{style:{textAlign:"center"},className:s.a.title,children:i}),n&&!1===d?Object(a.jsx)("div",{onClick:l,style:{fontSize:"14px",margin:"auto",color:"#41867A",cursor:"pointer"},children:n}):n&&!0===d?Object(a.jsx)("div",{onClick:l,style:{fontSize:"14px",margin:"auto",color:"#c4c4c4",cursor:"pointer"},children:n}):null]})}},KQm4:function(e,t,i){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function n(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i.d(t,"a",(function(){return n}))},M7ZG:function(e,t,i){e.exports={container:"Card_container__2ez1c",shadow:"Card_shadow__Tq5_x"}},YFqc:function(e,t,i){e.exports=i("cTJO")},cTJO:function(e,t,i){"use strict";var a=i("J4zp"),n=i("284h");t.__esModule=!0,t.default=void 0;var c=n(i("q1tI")),r=i("elyg"),s=i("nOHt"),l=i("vNVm"),o={};function u(e,t,i,a){if(e&&(0,r.isLocalURL)(t)){e.prefetch(t,i,a).catch((function(e){0}));var n=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;o[t+"%"+i+(n?"%"+n:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,i=(0,s.useRouter)(),n=i&&i.asPath||"/",d=c.default.useMemo((function(){var t=(0,r.resolveHref)(n,e.href,!0),i=a(t,2),c=i[0],s=i[1];return{href:c,as:e.as?(0,r.resolveHref)(n,e.as):s||c}}),[n,e.href,e.as]),_=d.href,b=d.as,v=e.children,j=e.replace,p=e.shallow,f=e.scroll,h=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var m=c.Children.only(v),O=m&&"object"===typeof m&&m.ref,x=(0,l.useIntersection)({rootMargin:"200px"}),y=a(x,2),g=y[0],N=y[1],P=c.default.useCallback((function(e){g(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,g]);(0,c.useEffect)((function(){var e=N&&t&&(0,r.isLocalURL)(_),a="undefined"!==typeof h?h:i&&i.locale,n=o[_+"%"+b+(a?"%"+a:"")];e&&!n&&u(i,_,b,{locale:a})}),[b,_,N,h,t,i]);var k={ref:P,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,i,a,n,c,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,r.isLocalURL)(i))&&(e.preventDefault(),null==s&&(s=a.indexOf("#")<0),t[n?"replace":"push"](i,a,{shallow:c,locale:l,scroll:s}))}(e,i,_,b,j,p,f,h)},onMouseEnter:function(e){(0,r.isLocalURL)(_)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),u(i,_,b,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var w="undefined"!==typeof h?h:i&&i.locale,S=i&&i.isLocaleDomain&&(0,r.getDomainLocale)(b,w,i&&i.locales,i&&i.domainLocales);k.href=S||(0,r.addBasePath)((0,r.addLocale)(b,w,i&&i.defaultLocale))}return c.default.cloneElement(m,k)};t.default=d},dVq6:function(e,t,i){e.exports={container:"Spinner_container__3N6EY",spinner:"Spinner_spinner__3goiz","ball-spin-clockwise":"Spinner_ball-spin-clockwise__YJ_C3"}},es2X:function(e,t,i){"use strict";var a=i("nKUr"),n=(i("q1tI"),i("YFqc"),i("GKTS")),c=i.n(n);t.a=function(e){var t=e.onClick,i=e.text,n=e.submit,r=e.color;return Object(a.jsx)("button",{type:n?"submit":"",className:"white"===r?c.a.container_white:c.a.container,onClick:t,children:i})}},fj1f:function(e,t,i){"use strict";var a=i("nKUr"),n=i("dVq6"),c=i.n(n);t.a=function(){return Object(a.jsx)("div",{className:c.a.container,children:Object(a.jsxs)("div",{className:c.a.spinner,children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})})}},mPD6:function(e,t,i){e.exports={nav_container:"Nav_nav_container__7SMgK",title:"Nav_title__21aLL",nav_green:"Nav_nav_green__1_B--",nav_white:"Nav_nav_white__1ml4-",white:"Nav_white__2liqq"}},vNVm:function(e,t,i){"use strict";var a=i("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,i=e.disabled||!r,l=(0,n.useRef)(),o=(0,n.useState)(!1),u=a(o,2),d=u[0],_=u[1],b=(0,n.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),i||d||e&&e.tagName&&(l.current=function(e,t,i){var a=function(e){var t=e.rootMargin||"",i=s.get(t);if(i)return i;var a=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return s.set(t,i={id:t,observer:n,elements:a}),i}(i),n=a.id,c=a.observer,r=a.elements;return r.set(e,t),c.observe(e),function(){r.delete(e),c.unobserve(e),0===r.size&&(c.disconnect(),s.delete(n))}}(e,(function(e){return e&&_(e)}),{rootMargin:t}))}),[i,t,d]);return(0,n.useEffect)((function(){if(!r&&!d){var e=(0,c.requestIdleCallback)((function(){return _(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[d]),[b,d]};var n=i("q1tI"),c=i("0G5g"),r="undefined"!==typeof IntersectionObserver;var s=new Map}}]);