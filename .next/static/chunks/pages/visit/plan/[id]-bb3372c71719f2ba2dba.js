_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"2aOB":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return j}));var n=i("nKUr"),a=i("q1tI"),r=i("YFqc"),l=i.n(r),c=i("20a2"),s=i.n(c),o=i("Dfhs"),u=i.n(o),_=i("kQFM"),d=i("JkA1"),v=i("5PhN"),b=i("fj1f"),f=i("es2X"),p=i("ECGM"),h=i("UV+Q");function j(){var e=Object(a.useContext)(_.b),t=e.state,i=(e.dispatch,e.actions),r=Object(a.useState)(!0),o=r[0],j=r[1],m=Object(a.useState)(!1),y=m[0],x=m[1],O=Object(a.useState)([]),g=O[0],P=O[1],w=Object(a.useState)(!1),k=w[0],V=w[1],D=Object(c.useRouter)(),I=new Date;Object(a.useEffect)((function(){D.query.id&&Object(p.r)(D.query.id).then((function(e){var n=e.samePlan,a=e.data;0==n.length?s.a.push("/visit/plan"):(console.log(a),P(a),j(!1),t.visitPlanReducer.checkIn||i.setPlanCheckIn(I))})).catch((function(e){console.log(e)}))}),[D.query.id]);var N=function(e,a){var r=t.visitPlanReducer.visibility.filter((function(e){return null!==e.file&&null!==e.type&&null!==e.brand})),c=t.visitPlanReducer.avability;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:u.a.render_data,children:[e,Object(n.jsx)("div",{style:{textAlign:"right"},children:"Visibility"===e?"".concat(r.length,"/8"):"Avability"===e?"".concat(c.length,"/25"):""})]}),Object(n.jsx)(v.a,{style:{marginTop:"6px",borderRadius:"5px"},children:Object(n.jsx)("div",{className:u.a.render_value,children:"Catatan"===e?Object(n.jsx)("textarea",{style:{width:"100%",border:"none",height:"70px"},onChange:function(e){i.setPlanCatatan(e.target.value)},value:t.visitPlanReducer.catatan}):"Visibility"===e||"Avability"===e?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:"Visibility"===e?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:u.a.progress_bar}),Object(n.jsx)("div",{className:u.a.progress_bar_now,style:{width:"".concat(r.length/8*100,"%")}})]}):"Avability"===e?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:u.a.progress_bar}),Object(n.jsx)("div",{className:u.a.progress_bar_now,style:{width:"".concat(c.length/25*100,"%")}})]}):""}),Object(n.jsx)(l.a,{href:"Visibility"===e?"/visit/plan/".concat(g.id,"/visibility"):"Avability"===e?"/visit/plan/".concat(g.id,"/avability"):"",children:Object(n.jsx)("a",{children:Object(n.jsx)(f.a,{text:"Add"})})})]}):Object(n.jsx)(n.Fragment,{children:a})})})]})};return function(){var e=t.visitPlanReducer.visibility.filter((function(e){return null!==e.file&&null!==e.type&&null!==e.brand}));return o?Object(n.jsx)(b.a,{}):Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:u.a.container,children:[y?Object(n.jsx)(h.a,{children:Object(n.jsx)(b.a,{})}):null,Object(n.jsxs)("div",{className:u.a.wrapper,children:[Object(n.jsx)(d.a,{title:"Plan",color:"white",action:"Submit",onClick:function(){!function(){if(8===t.visitPlanReducer.visibility.filter((function(e){return null!==e.file&&null!==e.type&&null!==e.brand})).length){x(!0),V(!1);var e=JSON.parse(localStorage.getItem("user")),n={id:g.id,idMasterPlanVisit:g.id,nomorDokumen:g.nomorDokumen,catatan:t.visitPlanReducer.catatan,isCheckIn:!0,checkInDate:t.visitPlanReducer.checkIn.toISOString(),isCheckOut:!0,checkOutDate:I.toISOString(),createdBy:e.username,updatedBy:e.username},a=t.visitPlanReducer.visibility.map((function(e,t){return e.file})),r={avp:n,dProductList:t.visitPlanReducer.avability.map((function(t,i){return{id:g.id,activityVisitPlanId:g.id,nomorDokumen:g.nomorDokumen,nomor:i,kodeProduk:t.productFocus.produkID,namaProduk:t.productFocus.namaProduk,stok:parseInt(t.stock),saranOrder:parseInt(t.saranOrder),jumlahOrder:parseInt(t.order),createdBy:e.username,updatedBy:e.username,harga:parseInt(t.harga),total:parseInt(t.harga)*parseInt(t.order),keterangan:t.ket}}))};Object(p.E)(r).then((function(n){for(var r=t.visitPlanReducer.visibility.map((function(t,i){return{id:g.id,activityVisitPlanId:n.avp.id,nomorDokumen:g.nomorDokumen,nomor:i,tipe:t.type.program,namaFile:t.file.name,createdBy:e.username,updatedBy:e.username,brandId:t.brand.id,namaBrand:t.brand.namaBrand}})),l=function(e){Object(p.F)(r[e],a[e]).then((function(t){7===e&&(x(!1),s.a.push("/"),i.setDefaultVisitPlan())})).catch((function(e){console.log(e)}))},c=0;c<a.length;c++)l(c)})).catch((function(e){console.log(e)}))}else V(!0)}()},disable:8!==e.length,backAction:function(){confirm("Data will be lost if you leave the page, are you sure?")&&(i.setDefaultVisitPlan(),s.a.push("/visit/plan"))}}),Object(n.jsxs)("div",{className:u.a.main,children:[k?Object(n.jsx)("div",{style:{color:"red",fontSize:"13px",textAlign:"center"},children:"Please complete visibility data"}):"",Object(n.jsxs)("div",{children:[N("Jenis Channel",g.jenisChannel),N("Outlet",g.namaOutlet),N("Alamat",g.alamatOutlet),N("Catatan",g.catatan),N("Visibility"),N("Avability")]})]})]})]})})}()}},"4lBl":function(e,t,i){e.exports={modal:"Modal_modal__2IoMM"}},"5PhN":function(e,t,i){"use strict";var n=i("nKUr"),a=(i("q1tI"),i("M7ZG")),r=i.n(a);t.a=function(e){var t=e.children,i=e.style,a=e.shadow;return Object(n.jsx)("div",{className:"".concat(r.a.container," ").concat(a?r.a.shadow:""),style:i||{},children:t})}},Dfhs:function(e,t,i){e.exports={container:"VisitPlanDetail_container__2jr6z",wrapper:"VisitPlanDetail_wrapper__1k2PA",main:"VisitPlanDetail_main__2JVTk",render_data:"VisitPlanDetail_render_data__UG0Yf",avability_modal_subtitle:"VisitPlanDetail_avability_modal_subtitle__cImGw",render_value:"VisitPlanDetail_render_value__2U7Gk",input:"VisitPlanDetail_input__3EeAf",input_order_search:"VisitPlanDetail_input_order_search__3uxsM",input_order:"VisitPlanDetail_input_order__1WXcP",visibility_grid:"VisitPlanDetail_visibility_grid__eKqRB",grid_50:"VisitPlanDetail_grid_50__xScpT",visibility_grid_history:"VisitPlanDetail_visibility_grid_history__3RjRi",visibility_dropdown:"VisitPlanDetail_visibility_dropdown__1NliU",new_button:"VisitPlanDetail_new_button__3zBx9",input_file:"VisitPlanDetail_input_file__2mLHX",progress_bar:"VisitPlanDetail_progress_bar__Cz8_8",progress_bar_now:"VisitPlanDetail_progress_bar_now__3w_Ar",avability_bot_container:"VisitPlanDetail_avability_bot_container__1vyIh",avability_modal_container:"VisitPlanDetail_avability_modal_container__1BVd4",avability_modal_main:"VisitPlanDetail_avability_modal_main__isfSW",modal_avability:"VisitPlanDetail_modal_avability__3bVY8",hidden_overflow:"VisitPlanDetail_hidden_overflow__35jOV",add_title:"VisitPlanDetail_add_title__20KUY",stock_order_container:"VisitPlanDetail_stock_order_container__1-0Au",avg_sales_container:"VisitPlanDetail_avg_sales_container__2ZL8F",avabilitylist_title:"VisitPlanDetail_avabilitylist_title__3iIBI",avabilitylist_stock_container:"VisitPlanDetail_avabilitylist_stock_container__1iSbF",avabilitylist_container:"VisitPlanDetail_avabilitylist_container__WpqI9",avabilitylist_subtitle:"VisitPlanDetail_avabilitylist_subtitle__2LI2L",avabilitylist_value:"VisitPlanDetail_avabilitylist_value__21-Yx",search_fixed:"VisitPlanDetail_search_fixed__3uZmj",nav_box:"VisitPlanDetail_nav_box__2aVI9"}},GKTS:function(e,t,i){e.exports={container:"Button_container__37SWQ",container_white:"Button_container_white__zoABs"}},JkA1:function(e,t,i){"use strict";var n=i("nKUr"),a=(i("q1tI"),i("YFqc")),r=i.n(a),l=i("mPD6"),c=i.n(l);t.a=function(e){var t=e.backHref,i=e.title,a=e.action,l=e.color,s=e.onClick,o=e.backAction,u=e.noBack,_=e.disable;return Object(n.jsxs)("div",{className:"green"==l?"".concat(c.a.nav_green," ").concat(c.a.nav_container):"white"==l?"".concat(c.a.nav_white," ").concat(c.a.nav_container):c.a.nav_container,children:[t?Object(n.jsx)(r.a,{href:t||"/",children:Object(n.jsx)("a",{children:Object(n.jsx)("img",{style:{width:"24px"},src:"/arrow-left.svg"})})}):u?Object(n.jsx)("div",{}):Object(n.jsx)("img",{onClick:function(){o()},style:{width:"24px"},src:"/arrow-left.svg"}),Object(n.jsx)("div",{style:{textAlign:"center"},className:c.a.title,children:i}),a&&!1===_?Object(n.jsx)("div",{onClick:s,style:{fontSize:"14px",margin:"auto",color:"#41867A",cursor:"pointer"},children:a}):a&&!0===_?Object(n.jsx)("div",{onClick:s,style:{fontSize:"14px",margin:"auto",color:"#c4c4c4",cursor:"pointer"},children:a}):null]})}},M7ZG:function(e,t,i){e.exports={container:"Card_container__2ez1c",shadow:"Card_shadow__Tq5_x"}},"UV+Q":function(e,t,i){"use strict";var n=i("nKUr"),a=(i("q1tI"),i("YFqc"),i("4lBl")),r=i.n(a);i("20a2");t.a=function(e){var t=e.children,i=e.onClick;return Object(n.jsx)("div",{onClick:i,className:r.a.modal,children:t})}},YFqc:function(e,t,i){e.exports=i("cTJO")},cTJO:function(e,t,i){"use strict";var n=i("J4zp"),a=i("284h");t.__esModule=!0,t.default=void 0;var r=a(i("q1tI")),l=i("elyg"),c=i("nOHt"),s=i("vNVm"),o={};function u(e,t,i,n){if(e&&(0,l.isLocalURL)(t)){e.prefetch(t,i,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;o[t+"%"+i+(a?"%"+a:"")]=!0}}var _=function(e){var t=!1!==e.prefetch,i=(0,c.useRouter)(),a=i&&i.asPath||"/",_=r.default.useMemo((function(){var t=(0,l.resolveHref)(a,e.href,!0),i=n(t,2),r=i[0],c=i[1];return{href:r,as:e.as?(0,l.resolveHref)(a,e.as):c||r}}),[a,e.href,e.as]),d=_.href,v=_.as,b=e.children,f=e.replace,p=e.shallow,h=e.scroll,j=e.locale;"string"===typeof b&&(b=r.default.createElement("a",null,b));var m=r.Children.only(b),y=m&&"object"===typeof m&&m.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),O=n(x,2),g=O[0],P=O[1],w=r.default.useCallback((function(e){g(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,g]);(0,r.useEffect)((function(){var e=P&&t&&(0,l.isLocalURL)(d),n="undefined"!==typeof j?j:i&&i.locale,a=o[d+"%"+v+(n?"%"+n:"")];e&&!a&&u(i,d,v,{locale:n})}),[v,d,P,j,t,i]);var k={ref:w,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,i,n,a,r,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(i))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[a?"replace":"push"](i,n,{shallow:r,locale:s,scroll:c}))}(e,i,d,v,f,p,h,j)},onMouseEnter:function(e){(0,l.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),u(i,d,v,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var V="undefined"!==typeof j?j:i&&i.locale,D=i&&i.isLocaleDomain&&(0,l.getDomainLocale)(v,V,i&&i.locales,i&&i.domainLocales);k.href=D||(0,l.addBasePath)((0,l.addLocale)(v,V,i&&i.defaultLocale))}return r.default.cloneElement(m,k)};t.default=_},dVq6:function(e,t,i){e.exports={container:"Spinner_container__3N6EY",spinner:"Spinner_spinner__3goiz","ball-spin-clockwise":"Spinner_ball-spin-clockwise__YJ_C3"}},es2X:function(e,t,i){"use strict";var n=i("nKUr"),a=(i("q1tI"),i("YFqc"),i("GKTS")),r=i.n(a);t.a=function(e){var t=e.onClick,i=e.text,a=e.submit,l=e.color;return Object(n.jsx)("button",{type:a?"submit":"",className:"white"===l?r.a.container_white:r.a.container,onClick:t,children:i})}},fj1f:function(e,t,i){"use strict";var n=i("nKUr"),a=i("dVq6"),r=i.n(a);t.a=function(){return Object(n.jsx)("div",{className:r.a.container,children:Object(n.jsxs)("div",{className:r.a.spinner,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})}},mPD6:function(e,t,i){e.exports={nav_container:"Nav_nav_container__7SMgK",title:"Nav_title__21aLL",nav_green:"Nav_nav_green__1_B--",nav_white:"Nav_nav_white__1ml4-",white:"Nav_white__2liqq"}},vNVm:function(e,t,i){"use strict";var n=i("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,i=e.disabled||!l,s=(0,a.useRef)(),o=(0,a.useState)(!1),u=n(o,2),_=u[0],d=u[1],v=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),i||_||e&&e.tagName&&(s.current=function(e,t,i){var n=function(e){var t=e.rootMargin||"",i=c.get(t);if(i)return i;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return c.set(t,i={id:t,observer:a,elements:n}),i}(i),a=n.id,r=n.observer,l=n.elements;return l.set(e,t),r.observe(e),function(){l.delete(e),r.unobserve(e),0===l.size&&(r.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[i,t,_]);return(0,a.useEffect)((function(){if(!l&&!_){var e=(0,r.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,r.cancelIdleCallback)(e)}}}),[_]),[v,_]};var a=i("q1tI"),r=i("0G5g"),l="undefined"!==typeof IntersectionObserver;var c=new Map},vocd:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/visit/plan/[id]",function(){return i("2aOB")}])}},[["vocd",0,2,1,3,4]]]);