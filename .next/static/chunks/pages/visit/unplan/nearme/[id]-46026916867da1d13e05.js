_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[46],{"1LGx":function(i,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/visit/unplan/nearme/[id]",function(){return e("1iwh")}])},"1iwh":function(i,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return x}));var n=e("nKUr"),a=e("q1tI"),l=e("YFqc"),r=e.n(l),s=e("20a2"),c=e.n(s),o=e("Dfhs"),_=e.n(o),d=e("kQFM"),u=e("JkA1"),b=e("5PhN"),v=e("fj1f"),j=e("es2X"),h=e("ECGM"),p=e("UV+Q");function x(){var i=Object(a.useContext)(d.b),t=i.state,e=(i.dispatch,i.actions),l=Object(a.useState)(!0),o=l[0],x=l[1],m=Object(a.useState)(!1),f=m[0],O=m[1],y=Object(a.useState)(""),g=y[0],w=y[1],P=Object(a.useState)(!1),D=P[0],V=P[1],k=Object(a.useState)([]),C=k[0],N=k[1],I=Object(a.useState)({}),S=(I[0],I[1]),A=Object(a.useState)([]),R=A[0],U=A[1],q=Object(a.useState)(!1),B=q[0],J=q[1],F=Object(s.useRouter)(),T=new Date;Object(a.useEffect)((function(){F.query.id&&Object(h.u)().then((function(i){var t=i.filter((function(i){return i.outletID===F.query.id}));console.log(t),U(t),x(!1)})).catch((function(i){console.log(i)}))}),[F.query.id]);var K=function(i){V(!0),w(i),i?Object(h.q)(i).then((function(i){N(i)})).catch((function(i){console.log(i)})):N([])},M=function(i,a){var l=t.visitPlanReducer.visibility.filter((function(i){return null!==i.file&&null!==i.type&&null!==i.brand})),s=t.visitPlanReducer.avability;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:_.a.render_data,children:[i,Object(n.jsx)("div",{style:{textAlign:"right"},children:"Visibility"===i?"".concat(l.length,"/8"):"Avability"===i?"".concat(s.length,"/25"):""})]}),"Jenis Channel"===i?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{onChange:function(i){K(i.target.value)},value:t.visitUnplanReducer.jenisChannel.namaJenisChannel?t.visitUnplanReducer.jenisChannel.namaJenisChannel:g,placeholder:"Search",className:_.a.input,onBlur:function(){setTimeout((function(){V(!1)}),200)},onFocus:function(i){return K(i.target.value)}}),D?Object(n.jsx)("div",{style:{position:"absolute",maxHeight:"180px",backgroundColor:"white",overflowY:"scroll",maxWidth:"400px",padding:"0 4px",zIndex:999999,marginTop:"-10px"},children:C.map((function(i,t){return Object(n.jsx)("div",{onClick:function(){S(i),e.setUnplanJenisChannel(i),w(i.namaJenisChannel),N([])},style:{borderBottom:".5px solid #f0f0f0",width:"350px"},children:i.namaJenisChannel},t)}))}):null]}):"Outlet"===i||"Alamat"===i?Object(n.jsx)(b.a,{style:{marginTop:"6px",borderRadius:"5px"},children:Object(n.jsx)("div",{className:_.a.render_value,children:a})}):"Catatan"===i?Object(n.jsx)(b.a,{style:{marginTop:"6px",borderRadius:"5px"},children:Object(n.jsx)("div",{className:_.a.render_value,children:Object(n.jsx)("textarea",{style:{width:"100%",border:"none",height:"70px"},onChange:function(i){e.setUnplanCatatan(i.target.value)},value:t.visitUnplanReducer.catatan})})}):"Visibility"===i||"Avability"===i?Object(n.jsx)(b.a,{style:{marginTop:"6px",borderRadius:"5px"},children:Object(n.jsxs)("div",{className:_.a.render_value,children:[Object(n.jsx)("div",{children:"Visibility"===i?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:_.a.progress_bar}),Object(n.jsx)("div",{className:_.a.progress_bar_now,style:{width:"".concat(l.length/8*100,"%")}})]}):"Avability"===i?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:_.a.progress_bar}),Object(n.jsx)("div",{className:_.a.progress_bar_now,style:{width:"".concat(s.length/25*100,"%")}})]}):""}),"Avability"===i?t.visitUnplanReducer.jenisChannel.namaJenisChannel?Object(n.jsx)(r.a,{href:"/visit/unplan/nearme/".concat(R[0].outletID,"/avability"),children:Object(n.jsx)("a",{children:Object(n.jsx)(j.a,{text:"Add"})})}):Object(n.jsx)(j.a,{text:"Add"}):"Visibility"===i?t.visitUnplanReducer.jenisChannel.namaJenisChannel?Object(n.jsx)(r.a,{href:"/visit/unplan/nearme/".concat(R[0].outletID,"/visibility"),children:Object(n.jsx)("a",{children:Object(n.jsx)(j.a,{text:"Add"})})}):Object(n.jsx)(j.a,{text:"Add"}):null]})}):Object(n.jsx)(b.a,{style:{marginTop:"6px",borderRadius:"5px"},children:Object(n.jsx)("div",{className:_.a.render_value,children:Object(n.jsx)(n.Fragment,{children:a})})})]})};return function(){var i=t.visitUnplanReducer.visibility.filter((function(i){return null!==i.file&&null!==i.type&&null!==i.brand}));return o?Object(n.jsx)(v.a,{}):Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:_.a.container,children:[f?Object(n.jsx)(p.a,{children:Object(n.jsx)(v.a,{})}):null,Object(n.jsxs)("div",{className:_.a.wrapper,children:[Object(n.jsx)(u.a,{title:"Near Me",color:"white",action:"Submit",onClick:function(){!function(){if(8===t.visitPlanReducer.visibility.filter((function(i){return null!==i.file&&null!==i.type&&null!==i.brand})).length){O(!0),J(!1);var i=JSON.parse(localStorage.getItem("user")),n={id:R.id,idMasterPlanVisit:R.id,nomorDokumen:R.nomorDokumen,catatan:t.visitPlanReducer.catatan,isCheckIn:!0,checkInDate:t.visitPlanReducer.checkIn.toISOString(),isCheckOut:!0,checkOutDate:T.toISOString(),createdBy:i.username,updatedBy:i.username},a=t.visitPlanReducer.visibility.map((function(i,t){return i.file})),l={avp:n,dProductList:t.visitPlanReducer.avability.map((function(t,e){return{id:R.id,activityVisitPlanId:R.id,nomorDokumen:R.nomorDokumen,nomor:e,kodeProduk:t.productFocus.produkID,namaProduk:t.productFocus.namaProduk,stok:parseInt(t.stock),saranOrder:parseInt(t.saranOrder),jumlahOrder:parseInt(t.order),createdBy:i.username,updatedBy:i.username,harga:parseInt(t.harga),total:parseInt(t.harga)*parseInt(t.order),keterangan:t.ket}}))};Object(h.w)(l).then((function(n){for(var l=t.visitPlanReducer.visibility.map((function(t,e){return{id:R.id,activityVisitPlanId:n.avp.id,nomorDokumen:R.nomorDokumen,nomor:e,tipe:t.type.program,namaFile:t.file.name,createdBy:i.username,updatedBy:i.username}})),r=function(i){Object(h.x)(l[i],a[i]).then((function(t){7===i&&(O(!1),c.a.push("/"),e.setDefaultVisitPlan())})).catch((function(i){console.log(i)}))},s=0;s<a.length;s++)r(s)})).catch((function(i){console.log(i)}))}else J(!0)}()},disable:8!==i.length,backAction:function(){confirm("Data will be lost if you leave the page, are you sure?")&&(e.setDefaultVisitUnplan(),c.a.push("/visit/unplan/nearme"))}}),Object(n.jsxs)("div",{className:_.a.main,children:[B?Object(n.jsx)("div",{style:{color:"red",fontSize:"13px",textAlign:"center"},children:"Please complete visibility data"}):"",Object(n.jsxs)("div",{children:[M("Jenis Channel",t.visitUnplanReducer.jenisChannel.namaJenisChannel),M("Outlet",R[0].namaOutlet),M("Alamat",R[0].alamatOutlet),M("Catatan",t.visitUnplanReducer.catatan),M("Visibility"),M("Avability")]})]})]})]})})}()}},"4lBl":function(i,t,e){i.exports={modal:"Modal_modal__2IoMM"}},"5PhN":function(i,t,e){"use strict";var n=e("nKUr"),a=(e("q1tI"),e("M7ZG")),l=e.n(a);t.a=function(i){var t=i.children,e=i.style,a=i.shadow;return Object(n.jsx)("div",{className:"".concat(l.a.container," ").concat(a?l.a.shadow:""),style:e||{},children:t})}},Dfhs:function(i,t,e){i.exports={container:"VisitPlanDetail_container__2jr6z",wrapper:"VisitPlanDetail_wrapper__1k2PA",main:"VisitPlanDetail_main__2JVTk",render_data:"VisitPlanDetail_render_data__UG0Yf",avability_modal_subtitle:"VisitPlanDetail_avability_modal_subtitle__cImGw",render_value:"VisitPlanDetail_render_value__2U7Gk",input:"VisitPlanDetail_input__3EeAf",input_order_search:"VisitPlanDetail_input_order_search__3uxsM",input_order:"VisitPlanDetail_input_order__1WXcP",visibility_grid:"VisitPlanDetail_visibility_grid__eKqRB",grid_50:"VisitPlanDetail_grid_50__xScpT",visibility_grid_history:"VisitPlanDetail_visibility_grid_history__3RjRi",visibility_dropdown:"VisitPlanDetail_visibility_dropdown__1NliU",new_button:"VisitPlanDetail_new_button__3zBx9",input_file:"VisitPlanDetail_input_file__2mLHX",progress_bar:"VisitPlanDetail_progress_bar__Cz8_8",progress_bar_now:"VisitPlanDetail_progress_bar_now__3w_Ar",avability_bot_container:"VisitPlanDetail_avability_bot_container__1vyIh",avability_modal_container:"VisitPlanDetail_avability_modal_container__1BVd4",avability_modal_main:"VisitPlanDetail_avability_modal_main__isfSW",modal_avability:"VisitPlanDetail_modal_avability__3bVY8",hidden_overflow:"VisitPlanDetail_hidden_overflow__35jOV",add_title:"VisitPlanDetail_add_title__20KUY",stock_order_container:"VisitPlanDetail_stock_order_container__1-0Au",avg_sales_container:"VisitPlanDetail_avg_sales_container__2ZL8F",avabilitylist_title:"VisitPlanDetail_avabilitylist_title__3iIBI",avabilitylist_stock_container:"VisitPlanDetail_avabilitylist_stock_container__1iSbF",avabilitylist_container:"VisitPlanDetail_avabilitylist_container__WpqI9",avabilitylist_subtitle:"VisitPlanDetail_avabilitylist_subtitle__2LI2L",avabilitylist_value:"VisitPlanDetail_avabilitylist_value__21-Yx",search_fixed:"VisitPlanDetail_search_fixed__3uZmj",nav_box:"VisitPlanDetail_nav_box__2aVI9"}},GKTS:function(i,t,e){i.exports={container:"Button_container__37SWQ",container_white:"Button_container_white__zoABs"}},JkA1:function(i,t,e){"use strict";var n=e("nKUr"),a=(e("q1tI"),e("YFqc")),l=e.n(a),r=e("mPD6"),s=e.n(r);t.a=function(i){var t=i.backHref,e=i.title,a=i.action,r=i.color,c=i.onClick,o=i.backAction,_=i.noBack,d=i.disable;return Object(n.jsxs)("div",{className:"green"==r?"".concat(s.a.nav_green," ").concat(s.a.nav_container):"white"==r?"".concat(s.a.nav_white," ").concat(s.a.nav_container):s.a.nav_container,children:[t?Object(n.jsx)(l.a,{href:t||"/",children:Object(n.jsx)("a",{children:Object(n.jsx)("img",{style:{width:"24px"},src:"/arrow-left.svg"})})}):_?Object(n.jsx)("div",{}):Object(n.jsx)("img",{onClick:function(){o()},style:{width:"24px"},src:"/arrow-left.svg"}),Object(n.jsx)("div",{style:{textAlign:"center"},className:s.a.title,children:e}),a&&!1===d?Object(n.jsx)("div",{onClick:c,style:{fontSize:"14px",margin:"auto",color:"#41867A",cursor:"pointer"},children:a}):a&&!0===d?Object(n.jsx)("div",{onClick:c,style:{fontSize:"14px",margin:"auto",color:"#c4c4c4",cursor:"pointer"},children:a}):null]})}},M7ZG:function(i,t,e){i.exports={container:"Card_container__2ez1c",shadow:"Card_shadow__Tq5_x"}},"UV+Q":function(i,t,e){"use strict";var n=e("nKUr"),a=(e("q1tI"),e("YFqc"),e("4lBl")),l=e.n(a);e("20a2");t.a=function(i){var t=i.children,e=i.onClick;return Object(n.jsx)("div",{onClick:e,className:l.a.modal,children:t})}},dVq6:function(i,t,e){i.exports={container:"Spinner_container__3N6EY",spinner:"Spinner_spinner__3goiz","ball-spin-clockwise":"Spinner_ball-spin-clockwise__YJ_C3"}},es2X:function(i,t,e){"use strict";var n=e("nKUr"),a=(e("q1tI"),e("YFqc"),e("GKTS")),l=e.n(a);t.a=function(i){var t=i.onClick,e=i.text,a=i.submit,r=i.color;return Object(n.jsx)("button",{type:a?"submit":"",className:"white"===r?l.a.container_white:l.a.container,onClick:t,children:e})}},fj1f:function(i,t,e){"use strict";var n=e("nKUr"),a=e("dVq6"),l=e.n(a);t.a=function(){return Object(n.jsx)("div",{className:l.a.container,children:Object(n.jsxs)("div",{className:l.a.spinner,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})}},mPD6:function(i,t,e){i.exports={nav_container:"Nav_nav_container__7SMgK",title:"Nav_title__21aLL",nav_green:"Nav_nav_green__1_B--",nav_white:"Nav_nav_white__1ml4-",white:"Nav_white__2liqq"}}},[["1LGx",0,2,1,4,3]]]);