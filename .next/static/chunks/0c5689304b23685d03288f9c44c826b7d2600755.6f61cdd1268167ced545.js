(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"4lBl":function(t,i,e){t.exports={modal:"Modal_modal__2IoMM"}},Dfhs:function(t,i,e){t.exports={container:"VisitPlanDetail_container__2jr6z",wrapper:"VisitPlanDetail_wrapper__1k2PA",main:"VisitPlanDetail_main__2JVTk",render_data:"VisitPlanDetail_render_data__UG0Yf",avability_modal_subtitle:"VisitPlanDetail_avability_modal_subtitle__cImGw",render_value:"VisitPlanDetail_render_value__2U7Gk",input:"VisitPlanDetail_input__3EeAf",input_order_search:"VisitPlanDetail_input_order_search__3uxsM",input_order:"VisitPlanDetail_input_order__1WXcP",visibility_grid:"VisitPlanDetail_visibility_grid__eKqRB",grid_50:"VisitPlanDetail_grid_50__xScpT",visibility_grid_history:"VisitPlanDetail_visibility_grid_history__3RjRi",visibility_dropdown:"VisitPlanDetail_visibility_dropdown__1NliU",new_button:"VisitPlanDetail_new_button__3zBx9",input_file:"VisitPlanDetail_input_file__2mLHX",progress_bar:"VisitPlanDetail_progress_bar__Cz8_8",progress_bar_now:"VisitPlanDetail_progress_bar_now__3w_Ar",avability_bot_container:"VisitPlanDetail_avability_bot_container__1vyIh",avability_modal_container:"VisitPlanDetail_avability_modal_container__1BVd4",avability_modal_main:"VisitPlanDetail_avability_modal_main__isfSW",modal_avability:"VisitPlanDetail_modal_avability__3bVY8",hidden_overflow:"VisitPlanDetail_hidden_overflow__35jOV",add_title:"VisitPlanDetail_add_title__20KUY",stock_order_container:"VisitPlanDetail_stock_order_container__1-0Au",avg_sales_container:"VisitPlanDetail_avg_sales_container__2ZL8F",avabilitylist_title:"VisitPlanDetail_avabilitylist_title__3iIBI",avabilitylist_stock_container:"VisitPlanDetail_avabilitylist_stock_container__1iSbF",avabilitylist_container:"VisitPlanDetail_avabilitylist_container__WpqI9",avabilitylist_subtitle:"VisitPlanDetail_avabilitylist_subtitle__2LI2L",avabilitylist_value:"VisitPlanDetail_avabilitylist_value__21-Yx",search_fixed:"VisitPlanDetail_search_fixed__3uZmj",nav_box:"VisitPlanDetail_nav_box__2aVI9"}},GKTS:function(t,i,e){t.exports={container:"Button_container__37SWQ",container_white:"Button_container_white__zoABs"}},JkA1:function(t,i,e){"use strict";var a=e("nKUr"),n=(e("q1tI"),e("YFqc")),l=e.n(n),c=e("mPD6"),r=e.n(c);i.a=function(t){var i=t.backHref,e=t.title,n=t.action,c=t.color,s=t.onClick,o=t.backAction,d=t.noBack,b=t.disable;return Object(a.jsxs)("div",{className:"green"==c?"".concat(r.a.nav_green," ").concat(r.a.nav_container):"white"==c?"".concat(r.a.nav_white," ").concat(r.a.nav_container):r.a.nav_container,children:[i?Object(a.jsx)(l.a,{href:i||"/",children:Object(a.jsx)("a",{children:Object(a.jsx)("img",{style:{width:"24px"},src:"/arrow-left.svg"})})}):d?Object(a.jsx)("div",{}):Object(a.jsx)("img",{onClick:function(){o()},style:{width:"24px"},src:"/arrow-left.svg"}),Object(a.jsx)("div",{style:{textAlign:"center"},className:r.a.title,children:e}),n&&!1===b?Object(a.jsx)("div",{onClick:s,style:{fontSize:"14px",margin:"auto",color:"#41867A",cursor:"pointer"},children:n}):n&&!0===b?Object(a.jsx)("div",{onClick:s,style:{fontSize:"14px",margin:"auto",color:"#c4c4c4",cursor:"pointer"},children:n}):null]})}},"UV+Q":function(t,i,e){"use strict";var a=e("nKUr"),n=(e("q1tI"),e("YFqc"),e("4lBl")),l=e.n(n);e("20a2");i.a=function(t){var i=t.children,e=t.onClick;return Object(a.jsx)("div",{onClick:e,className:l.a.modal,children:i})}},es2X:function(t,i,e){"use strict";var a=e("nKUr"),n=(e("q1tI"),e("YFqc"),e("GKTS")),l=e.n(n);i.a=function(t){var i=t.onClick,e=t.text,n=t.submit,c=t.color;return Object(a.jsx)("button",{type:n?"submit":"",className:"white"===c?l.a.container_white:l.a.container,onClick:i,children:e})}},mPD6:function(t,i,e){t.exports={nav_container:"Nav_nav_container__7SMgK",title:"Nav_title__21aLL",nav_green:"Nav_nav_green__1_B--",nav_white:"Nav_nav_white__1ml4-",white:"Nav_white__2liqq"}},p8Pn:function(t,i,e){"use strict";e.d(i,"a",(function(){return f}));var a=e("nKUr"),n=e("q1tI"),l=e("YFqc"),c=e.n(l),r=e("20a2"),s=e.n(r),o=e("Dfhs"),d=e.n(o),b=e("JkA1"),_=e("5PhN"),h=e("fj1f"),j=e("es2X"),x=e("wOnQ"),u=e.n(x),v=e("ECGM"),g=e("wd/R"),p=e.n(g),y=function(t){var i=t.data,e=t.plan,n=0;console.log(i);return Object(a.jsxs)("div",{id:"invoice",style:{color:"black",fontSize:"10px",backgroundColor:"white",padding:"10px"},children:[Object(a.jsx)("div",{style:{borderBottom:"1px solid black",textAlign:"center",fontWeight:"bold"},children:"Surat Pesanan"}),Object(a.jsxs)("div",{style:{fontSize:"6px",margin:"5px"},children:[Object(a.jsx)("div",{style:{textAlign:"right",margin:"0 10px"},children:p()(e[0].tanggal).format("D MMMM YYYY")}),Object(a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"12% 88%"},children:[Object(a.jsx)("div",{children:"Nama Outlet"}),Object(a.jsx)("div",{children:e[0].namaOutlet})]}),Object(a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"12% 88%"},children:[Object(a.jsx)("div",{children:"Alamat"}),Object(a.jsx)("div",{children:e[0].alamatOutlet})]}),Object(a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"12% 88%"},children:[Object(a.jsx)("div",{children:"No. Sp"}),Object(a.jsx)("div",{})]}),Object(a.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"12% 88%"},children:[Object(a.jsx)("div",{children:"To"}),Object(a.jsx)("div",{})]})]}),Object(a.jsx)("div",{style:{fontSize:"6px",margin:"-2px"},children:Object(a.jsxs)("table",{style:{width:"100%",textAlign:"center",borderTop:"1px solid black",borderLeft:"1px solid black"},children:[Object(a.jsx)("thead",{style:{borderBottom:"1px solid black"},children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{width:"5%",style:{borderRight:"1px solid black"},children:"No."}),Object(a.jsx)("th",{width:"35%",style:{borderRight:"1px solid black"},children:"Nama Produk"}),Object(a.jsx)("th",{width:"5%",style:{borderRight:"1px solid black"},children:"Qty"}),Object(a.jsx)("th",{width:"10%",style:{borderRight:"1px solid black"},children:"Harga"}),Object(a.jsx)("th",{width:"10%",style:{borderRight:"1px solid black"},children:"Total"}),Object(a.jsx)("th",{width:"35%",style:{borderRight:"1px solid black"},children:"Ket"})]})}),Object(a.jsxs)("tbody",{children:[i.map((function(t,i){return n+=t.totalHarga,Object(a.jsxs)("tr",{style:{borderBottom:"1px solid black"},children:[Object(a.jsx)("td",{style:{borderRight:"1px solid black"},children:i+1}),Object(a.jsx)("td",{style:{borderRight:"1px solid black",textAlign:"left",paddingLeft:"2px"},children:t.namaProduk}),Object(a.jsx)("td",{style:{borderRight:"1px solid black",textAlign:"right",padding:"0 4px 0 0"},children:t.jumlah}),Object(a.jsx)("td",{style:{borderRight:"1px solid black",textAlign:"right",padding:"0 4px 0 0"},children:t.harga.toLocaleString("id-ID")}),Object(a.jsx)("td",{style:{borderRight:"1px solid black",textAlign:"right",padding:"0 4px 0 0"},children:t.totalHarga.toLocaleString("id-ID")}),Object(a.jsx)("td",{style:{borderRight:"1px solid black"},children:t.keterangan})]})})),Object(a.jsxs)("tr",{style:{borderBottom:"1px solid black"},children:[Object(a.jsx)("td",{style:{borderRight:"1px solid black",textAlign:"right",padding:"0 4px 0 0"},colSpan:2,children:"Grand Total"}),Object(a.jsx)("td",{style:{borderRight:"1px solid black",textAlign:"right",padding:"0 4px 0 4px"},colSpan:3,children:n.toLocaleString("id-ID")}),Object(a.jsx)("td",{style:{borderRight:"1px solid black",textAlign:"right",padding:"0 4px 0 4px"},children:" "})]})]})]})})]})},O=e("UV+Q");function f(t){var i=t.type,l=Object(n.useState)(!0),o=l[0],x=l[1],g=Object(n.useState)([]),p=g[0],f=g[1],m=Object(n.useState)([]),w=m[0],k=m[1],P=Object(n.useState)([]),V=P[0],D=P[1],A=Object(n.useState)(!1),N=A[0],S=A[1],C=Object(r.useRouter)(),R=(new Date,null);Object(n.useEffect)((function(){Promise.all([e.e(15),e.e(59)]).then(e.bind(null,"i680")).then((function(t){R=t.default}))})),Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));C.query.id&&("PLAN"===i?(Object(v.s)(t).then((function(t){f(t.filter((function(t){return t.idVisitPlan===C.query.id}))),x(!1)})).catch((function(t){console.log(t)})),Object(v.f)(C.query.id).then((function(t){k(t)})).catch((function(t){console.log(t)})),Object(v.g)(C.query.id).then((function(t){D(t)})).catch((function(t){console.log(t)}))):"UNPLAN"===i?(Object(v.y)(t).then((function(t){f(t.filter((function(t){return t.id===C.query.id}))),x(!1)})).catch((function(t){console.log(t)})),Object(v.k)(C.query.id).then((function(t){k(t)})).catch((function(t){console.log(t)})),Object(v.i)(C.query.id).then((function(t){D(t)})).catch((function(t){console.log(t)}))):"SPREADING"===i&&(Object(v.x)(t).then((function(t){f(t.filter((function(t){return t.id===C.query.id}))),x(!1)})).catch((function(t){console.log(t)})),Object(v.j)(C.query.id).then((function(t){k(t)})).catch((function(t){console.log(t)})),Object(v.h)(C.query.id).then((function(t){D(t)})).catch((function(t){console.log(t)}))))}),[C.query.id]);var q=function(t,e){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:d.a.render_data,children:[t,Object(a.jsx)("div",{style:{textAlign:"right"},children:"Visibility"===t?"".concat(V.length,"/8"):"Avability"===t?"".concat(w.length,"/25"):""})]}),Object(a.jsx)(_.a,{style:{marginTop:"6px",borderRadius:"5px"},children:Object(a.jsx)("div",{className:d.a.render_value,children:"Catatan"===t?Object(a.jsx)("div",{style:{width:"100%",border:"none",height:"70px"},children:e}):"Visibility"===t||"Avability"===t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:"Visibility"===t?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:d.a.progress_bar}),Object(a.jsx)("div",{className:d.a.progress_bar_now,style:{width:"".concat(V.length/8*100,"%")}})]}):"Avability"===t?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:d.a.progress_bar}),Object(a.jsx)("div",{className:d.a.progress_bar_now,style:{width:"".concat(w.length/25*100,"%")}})]}):""}),"PLAN"===i?Object(a.jsx)(c.a,{href:"Visibility"===t?"/visit/plan/history/".concat(p[0].idVisitPlan,"/visibility"):"Avability"===t?"/visit/plan/history/".concat(p[0].idVisitPlan,"/avability"):"",children:Object(a.jsx)("a",{children:Object(a.jsx)(j.a,{text:"View"})})}):"UNPLAN"===i?Object(a.jsx)(c.a,{href:"Visibility"===t?"/visit/unplan/history/".concat(p[0].id,"/visibility"):"Avability"===t?"/visit/unplan/history/".concat(p[0].id,"/avability"):"",children:Object(a.jsx)("a",{children:Object(a.jsx)(j.a,{text:"View"})})}):"SPREADING"===i?Object(a.jsx)(c.a,{href:"Visibility"===t?"/visit/spreading/history/".concat(p[0].id,"/visibility"):"Avability"===t?"/visit/spreading/history/".concat(p[0].id,"/avability"):"",children:Object(a.jsx)("a",{children:Object(a.jsx)(j.a,{text:"View"})})}):null]}):Object(a.jsx)(a.Fragment,{children:e})})})]})};return function(){var t=w.sort((function(t,i){return t.namaProduk.localeCompare(i.namaProduk)}));return o?Object(a.jsx)(h.a,{}):Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:d.a.container,children:[N?Object(a.jsx)(O.a,{onClick:function(){S(!1)},children:Object(a.jsx)("div",{style:{maxHeight:"100%",overflow:"auto",overflowX:"hidden",overflowY:"hidden"},children:Object(a.jsxs)("div",{style:{width:"400px",maxHeight:"100%",margin:"100px auto"},children:[Object(a.jsx)(y,{data:t,plan:p}),Object(a.jsx)("div",{style:{padding:"10px",backgroundColor:"white"},children:Object(a.jsx)(j.a,{onClick:function(){!function(){var t=document.getElementById("invoice");u()(t,{scale:5}).then((function(t){var i="jpeg",e=.98,a=[.5,.5],n=8.5-2*a[0],l=(o=11)-2*a[1],c=t.height,r=Math.floor(t.width*(o/8.5)),s=Math.ceil(c/r),o=l,d=document.createElement("canvas"),b=d.getContext("2d");d.width=t.width,d.height=r;for(var _=new R("p","in",[8.5,11]),h=0;h<s;h++){h===s-1&&c%r!==0&&(d.height=c%r,o=d.height*n/d.width);var j=d.width,x=d.height;b.fillStyle="white",b.fillRect(0,0,j,x),b.drawImage(t,0,h*r,j,x,0,0,j,x),h>0&&_.addPage();var u=d.toDataURL("image/"+i,e);_.addImage(u,i,a[1],a[0],n,o)}_.save("file".concat(".pdf"))}))}()},text:"Download PDF"})})]})})}):null,Object(a.jsxs)("div",{className:d.a.wrapper,children:[Object(a.jsx)(b.a,{title:"History",color:"white",action:"Download",backAction:function(){s.a.back()},onClick:function(){S(!0)},disable:!1}),Object(a.jsx)("div",{className:d.a.main,children:Object(a.jsxs)("div",{children:[q("Jenis Channel",p[0].jenisChannel),q("Outlet",p[0].namaOutlet),q("Alamat",p[0].alamatOutlet),q("Catatan",p[0].catatan),q("Visibility"),q("Avability")]})})]})]})})}()}}}]);