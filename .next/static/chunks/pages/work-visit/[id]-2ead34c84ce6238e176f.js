_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58],{bGjZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work-visit/[id]",function(){return n("dadD")}])},dadD:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n("nKUr"),i=n("rePB"),r=n("q1tI"),c=(n("YFqc"),n("20a2")),s=n.n(c),o=n("29p6"),u=n.n(o),d=n("kQFM"),l=n("JkA1"),j=n("5PhN"),b=n("fj1f"),O=n("es2X"),p=n("UV+Q"),f=n("Yue9"),h=n("ECGM");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(){var e=Object(r.useContext)(d.b),t=(e.state,e.dispatch),n=e.actions,i=Object(r.useState)(!0),o=i[0],m=i[1],g=Object(r.useState)([]),k=g[0],y=g[1],v=Object(r.useState)([]),w=v[0],S=v[1],_=Object(r.useState)(!0),N=_[0],P=_[1],E=Object(r.useState)(!1),R=E[0],M=E[1],V=Object(c.useRouter)(),D=new Date;Object(r.useEffect)((function(){if(V.query.id){var e=JSON.parse(localStorage.getItem("user"));Object(h.b)(e).then((function(e){var t=e.filter((function(e){return e.idMasterPlan===V.query.id}));y(t),m(!1)})).catch((function(e){console.log(e)}))}}),[V.query.id]),Object(r.useEffect)((function(){Object(h.m)().then((function(e){S(e),P(!1)})).catch((function(e){console.log(e)}))}),[t]);var F=function(){var e=k[0];if(e)return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(j.a,{style:{borderRadius:"5px",padding:"16px"},shadow:!0,children:[Object(a.jsxs)("div",{className:u.a.data_container,children:[Object(a.jsx)("div",{children:e.namaSMR}),Object(a.jsx)("div",{style:{textAlign:"right"},children:Object(a.jsx)("span",{className:u.a.rayon_container,children:e.kodeRayon})})]}),Object(a.jsxs)("div",{style:{fontSize:"12px",fontWeight:"400",margin:"8px 0 0 0 "},children:["Produk Fokus:"," ",Object(a.jsx)("span",{className:u.a.produk_fokus_container,children:e.produkFokus})]})]}),w.map((function(e,t){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:u.a.penilaian_top_container,children:e.namaKonten}),Object(a.jsxs)("div",{className:u.a.penilaian_bot_container,children:[Object(a.jsxs)("div",{className:u.a.nilai_container,children:[Object(a.jsx)("div",{children:"Nilai"}),Object(a.jsx)(f.a,{options:["SELECT",1,2,3,4,5],type:"NILAI_WORKVISIT",onChange:function(e){w.splice(t,1,x(x({},w[t]),{},{nilai:parseInt(e.target.value)}))}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:"Catatan"}),Object(a.jsx)("textarea",{style:{width:"100%",height:"80px",fontSize:"12px",border:"1px solid #e9ecf2",borderRadius:"5px"},onChange:function(e){w.splice(t,1,x(x({},w[t]),{},{catatan:e.target.value}))}})]})]})]})}))]})};return o||N?Object(a.jsx)(b.a,{}):Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:u.a.container,children:[R?Object(a.jsx)(p.a,{children:Object(a.jsx)(b.a,{})}):null,Object(a.jsxs)("div",{className:u.a.wrapper,children:[Object(a.jsx)(l.a,{title:"Work Visit",color:"white",action:"Submit",backAction:function(){confirm("Data will be lost if you leave the page, are you sure?")&&(n.setDefaultVisitUnplan(),s.a.push("/work-visit"))}}),Object(a.jsx)("div",{className:u.a.main,children:F()}),Object(a.jsx)("div",{className:u.a.bottom_container,children:Object(a.jsx)(O.a,{onClick:function(){!function(){if(w.filter((function(e){return e.nilai})).length===w.length){M(!0);var e=JSON.parse(localStorage.getItem("user")),t=k[0],n=w.map((function(n){return{id:n.id,idActivityWorkVisit:t.idWorkVisit,idMasterKontenWorkVisit:n.id,rating:n.nilai,catatan:n.catatan?n.catatan:"",createdby:e.username,updatedBy:e.username,namaKonten:n.namaKonten}})),a={workVisit:{id:t.idWorkVisit,idMasterPlanWorkVisit:t.idMasterPlan,namaSMR:t.namaSMR,usernameSMR:t.usernameSMR,kodeRayon:t.kodeRayon,rayon:t.rayon,kodeProduk:t.kodeProduk,produkFokus:t.produkFokus,isPenilaian:!0,tanggalPenilaian:D.toISOString(),createdBy:e.username,updatedBy:e.username},rating:n}}Object(h.K)(a).then((function(e){M(!1),s.a.push("/")})).catch((function(e){console.log(e)}))}()},text:"Submit"})})]})]})})}}},[["bGjZ",0,2,1,3,4,14]]]);