_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"2aOB":function(i,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return m}));var a=e("nKUr"),n=e("q1tI"),l=e("YFqc"),r=e.n(l),s=e("20a2"),c=e.n(s),o=e("Dfhs"),_=e.n(o),d=e("kQFM"),u=e("JkA1"),b=e("5PhN"),v=e("fj1f"),j=e("es2X"),h=e("ECGM"),p=e("UV+Q");function m(){var i=Object(n.useContext)(d.b),t=i.state,e=(i.dispatch,i.actions),l=Object(n.useState)(!0),o=l[0],m=l[1],f=Object(n.useState)(!1),x=f[0],y=f[1],O=Object(n.useState)([]),P=O[0],g=O[1],w=Object(n.useState)(!1),V=w[0],D=w[1],k=Object(s.useRouter)(),I=new Date;Object(n.useEffect)((function(){k.query.id&&Object(h.q)(k.query.id).then((function(i){var a=i.samePlan,n=i.data;0==a.length?c.a.push("/visit/plan"):(console.log(n),g(n),m(!1),t.visitPlanReducer.checkIn||e.setPlanCheckIn(I))})).catch((function(i){console.log(i)}))}),[k.query.id]);var N=function(i,n){var l=t.visitPlanReducer.visibility.filter((function(i){return null!==i.file&&null!==i.type&&null!==i.brand})),s=t.visitPlanReducer.avability;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:_.a.render_data,children:[i,Object(a.jsx)("div",{style:{textAlign:"right"},children:"Visibility"===i?"".concat(l.length,"/8"):"Avability"===i?"".concat(s.length,"/25"):""})]}),Object(a.jsx)(b.a,{style:{marginTop:"6px",borderRadius:"5px"},children:Object(a.jsx)("div",{className:_.a.render_value,children:"Catatan"===i?Object(a.jsx)("textarea",{style:{width:"100%",border:"none",height:"70px"},onChange:function(i){e.setPlanCatatan(i.target.value)},value:t.visitPlanReducer.catatan}):"Visibility"===i||"Avability"===i?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:"Visibility"===i?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:_.a.progress_bar}),Object(a.jsx)("div",{className:_.a.progress_bar_now,style:{width:"".concat(l.length/8*100,"%")}})]}):"Avability"===i?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:_.a.progress_bar}),Object(a.jsx)("div",{className:_.a.progress_bar_now,style:{width:"".concat(s.length/25*100,"%")}})]}):""}),Object(a.jsx)(r.a,{href:"Visibility"===i?"/visit/plan/".concat(P.id,"/visibility"):"Avability"===i?"/visit/plan/".concat(P.id,"/avability"):"",children:Object(a.jsx)("a",{children:Object(a.jsx)(j.a,{text:"Add"})})})]}):Object(a.jsx)(a.Fragment,{children:n})})})]})};return function(){var i=t.visitPlanReducer.visibility.filter((function(i){return null!==i.file&&null!==i.type&&null!==i.brand}));return o?Object(a.jsx)(v.a,{}):Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:_.a.container,children:[x?Object(a.jsx)(p.a,{children:Object(a.jsx)(v.a,{})}):null,Object(a.jsxs)("div",{className:_.a.wrapper,children:[Object(a.jsx)(u.a,{title:"Plan",color:"white",action:"Submit",onClick:function(){!function(){if(8===t.visitPlanReducer.visibility.filter((function(i){return null!==i.file&&null!==i.type&&null!==i.brand})).length){y(!0),D(!1);var i=JSON.parse(localStorage.getItem("user")),a={id:P.id,idMasterPlanVisit:P.id,nomorDokumen:P.nomorDokumen,catatan:t.visitPlanReducer.catatan,isCheckIn:!0,checkInDate:t.visitPlanReducer.checkIn.toISOString(),isCheckOut:!0,checkOutDate:I.toISOString(),createdBy:i.username,updatedBy:i.username},n=t.visitPlanReducer.visibility.map((function(i,t){return i.file})),l={avp:a,dProductList:t.visitPlanReducer.avability.map((function(t,e){return{id:P.id,activityVisitPlanId:P.id,nomorDokumen:P.nomorDokumen,nomor:e,kodeProduk:t.productFocus.produkID,namaProduk:t.productFocus.namaProduk,stok:parseInt(t.stock),saranOrder:parseInt(t.saranOrder),jumlahOrder:parseInt(t.order),createdBy:i.username,updatedBy:i.username,harga:parseInt(t.harga),total:parseInt(t.harga)*parseInt(t.order),keterangan:t.ket}}))};Object(h.D)(l).then((function(a){for(var l=t.visitPlanReducer.visibility.map((function(t,e){return{id:P.id,activityVisitPlanId:a.avp.id,nomorDokumen:P.nomorDokumen,nomor:e,tipe:t.type.program,namaFile:t.file.name,createdBy:i.username,updatedBy:i.username,brandId:t.brand.id,namaBrand:t.brand.namaBrand}})),r=function(i){Object(h.E)(l[i],n[i]).then((function(t){7===i&&(y(!1),c.a.push("/"),e.setDefaultVisitPlan())})).catch((function(i){console.log(i)}))},s=0;s<n.length;s++)r(s)})).catch((function(i){console.log(i)}))}else D(!0)}()},disable:8!==i.length,backAction:function(){confirm("Data will be lost if you leave the page, are you sure?")&&(e.setDefaultVisitPlan(),c.a.push("/visit/plan"))}}),Object(a.jsxs)("div",{className:_.a.main,children:[V?Object(a.jsx)("div",{style:{color:"red",fontSize:"13px",textAlign:"center"},children:"Please complete visibility data"}):"",Object(a.jsxs)("div",{children:[N("Jenis Channel",P.jenisChannel),N("Outlet",P.namaOutlet),N("Alamat",P.alamatOutlet),N("Catatan",P.catatan),N("Visibility"),N("Avability")]})]})]})]})})}()}},"4lBl":function(i,t,e){i.exports={modal:"Modal_modal__2IoMM"}},"5PhN":function(i,t,e){"use strict";var a=e("nKUr"),n=(e("q1tI"),e("M7ZG")),l=e.n(n);t.a=function(i){var t=i.children,e=i.style,n=i.shadow;return Object(a.jsx)("div",{className:"".concat(l.a.container," ").concat(n?l.a.shadow:""),style:e||{},children:t})}},Dfhs:function(i,t,e){i.exports={container:"VisitPlanDetail_container__2jr6z",wrapper:"VisitPlanDetail_wrapper__1k2PA",main:"VisitPlanDetail_main__2JVTk",render_data:"VisitPlanDetail_render_data__UG0Yf",avability_modal_subtitle:"VisitPlanDetail_avability_modal_subtitle__cImGw",render_value:"VisitPlanDetail_render_value__2U7Gk",input:"VisitPlanDetail_input__3EeAf",input_order_search:"VisitPlanDetail_input_order_search__3uxsM",input_order:"VisitPlanDetail_input_order__1WXcP",visibility_grid:"VisitPlanDetail_visibility_grid__eKqRB",grid_50:"VisitPlanDetail_grid_50__xScpT",visibility_grid_history:"VisitPlanDetail_visibility_grid_history__3RjRi",visibility_dropdown:"VisitPlanDetail_visibility_dropdown__1NliU",new_button:"VisitPlanDetail_new_button__3zBx9",input_file:"VisitPlanDetail_input_file__2mLHX",progress_bar:"VisitPlanDetail_progress_bar__Cz8_8",progress_bar_now:"VisitPlanDetail_progress_bar_now__3w_Ar",avability_bot_container:"VisitPlanDetail_avability_bot_container__1vyIh",avability_modal_container:"VisitPlanDetail_avability_modal_container__1BVd4",avability_modal_main:"VisitPlanDetail_avability_modal_main__isfSW",modal_avability:"VisitPlanDetail_modal_avability__3bVY8",hidden_overflow:"VisitPlanDetail_hidden_overflow__35jOV",add_title:"VisitPlanDetail_add_title__20KUY",stock_order_container:"VisitPlanDetail_stock_order_container__1-0Au",avg_sales_container:"VisitPlanDetail_avg_sales_container__2ZL8F",avabilitylist_title:"VisitPlanDetail_avabilitylist_title__3iIBI",avabilitylist_stock_container:"VisitPlanDetail_avabilitylist_stock_container__1iSbF",avabilitylist_container:"VisitPlanDetail_avabilitylist_container__WpqI9",avabilitylist_subtitle:"VisitPlanDetail_avabilitylist_subtitle__2LI2L",avabilitylist_value:"VisitPlanDetail_avabilitylist_value__21-Yx",search_fixed:"VisitPlanDetail_search_fixed__3uZmj",nav_box:"VisitPlanDetail_nav_box__2aVI9"}},GKTS:function(i,t,e){i.exports={container:"Button_container__37SWQ",container_white:"Button_container_white__zoABs"}},JkA1:function(i,t,e){"use strict";var a=e("nKUr"),n=(e("q1tI"),e("YFqc")),l=e.n(n),r=e("mPD6"),s=e.n(r);t.a=function(i){var t=i.backHref,e=i.title,n=i.action,r=i.color,c=i.onClick,o=i.backAction,_=i.noBack,d=i.disable;return Object(a.jsxs)("div",{className:"green"==r?"".concat(s.a.nav_green," ").concat(s.a.nav_container):"white"==r?"".concat(s.a.nav_white," ").concat(s.a.nav_container):s.a.nav_container,children:[t?Object(a.jsx)(l.a,{href:t||"/",children:Object(a.jsx)("a",{children:Object(a.jsx)("img",{style:{width:"24px"},src:"/arrow-left.svg"})})}):_?Object(a.jsx)("div",{}):Object(a.jsx)("img",{onClick:function(){o()},style:{width:"24px"},src:"/arrow-left.svg"}),Object(a.jsx)("div",{style:{textAlign:"center"},className:s.a.title,children:e}),n&&!1===d?Object(a.jsx)("div",{onClick:c,style:{fontSize:"14px",margin:"auto",color:"#41867A",cursor:"pointer"},children:n}):n&&!0===d?Object(a.jsx)("div",{onClick:c,style:{fontSize:"14px",margin:"auto",color:"#c4c4c4",cursor:"pointer"},children:n}):null]})}},M7ZG:function(i,t,e){i.exports={container:"Card_container__2ez1c",shadow:"Card_shadow__Tq5_x"}},"UV+Q":function(i,t,e){"use strict";var a=e("nKUr"),n=(e("q1tI"),e("YFqc"),e("4lBl")),l=e.n(n);e("20a2");t.a=function(i){var t=i.children,e=i.onClick;return Object(a.jsx)("div",{onClick:e,className:l.a.modal,children:t})}},dVq6:function(i,t,e){i.exports={container:"Spinner_container__3N6EY",spinner:"Spinner_spinner__3goiz","ball-spin-clockwise":"Spinner_ball-spin-clockwise__YJ_C3"}},es2X:function(i,t,e){"use strict";var a=e("nKUr"),n=(e("q1tI"),e("YFqc"),e("GKTS")),l=e.n(n);t.a=function(i){var t=i.onClick,e=i.text,n=i.submit,r=i.color;return Object(a.jsx)("button",{type:n?"submit":"",className:"white"===r?l.a.container_white:l.a.container,onClick:t,children:e})}},fj1f:function(i,t,e){"use strict";var a=e("nKUr"),n=e("dVq6"),l=e.n(n);t.a=function(){return Object(a.jsx)("div",{className:l.a.container,children:Object(a.jsxs)("div",{className:l.a.spinner,children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})})}},mPD6:function(i,t,e){i.exports={nav_container:"Nav_nav_container__7SMgK",title:"Nav_title__21aLL",nav_green:"Nav_nav_green__1_B--",nav_white:"Nav_nav_white__1ml4-",white:"Nav_white__2liqq"}},vocd:function(i,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/visit/plan/[id]",function(){return e("2aOB")}])}},[["vocd",0,2,1,3,4]]]);