_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[60],{HZxw:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work-visit/history/[id]",function(){return n("VE2a")}])},VE2a:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var i=n("nKUr"),a=n("q1tI"),c=(n("YFqc"),n("20a2")),s=n.n(c),r=n("29p6"),o=n.n(r),d=n("kQFM"),j=n("JkA1"),l=n("5PhN"),u=n("fj1f"),b=(n("es2X"),n("UV+Q"),n("Yue9"),n("ECGM"));function h(){var e=Object(a.useContext)(d.b),t=(e.state,e.dispatch,e.actions,Object(a.useState)(!0)),n=t[0],r=t[1],h=Object(a.useState)([]),x=h[0],O=h[1],p=Object(a.useState)([]),f=p[0],v=p[1],_=Object(a.useState)(!0),m=_[0],w=_[1],N=Object(a.useState)(!1),k=(N[0],N[1],Object(c.useRouter)());new Date;Object(a.useEffect)((function(){if(k.query.id){var e=JSON.parse(localStorage.getItem("user"));Object(b.B)(e).then((function(e){var t=e.filter((function(e){return e.idWorkVisit===k.query.id}));O(t),r(!1)})).catch((function(e){console.log(e)})),Object(b.C)(k.query.id).then((function(e){v(e),w(!1)})).catch((function(e){console.log(e)}))}}),[k.query.id]);var g=function(){var e=x[0];if(e)return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(l.a,{style:{borderRadius:"5px",padding:"16px"},shadow:!0,children:[Object(i.jsxs)("div",{className:o.a.data_container,children:[Object(i.jsx)("div",{children:e.namaSMR}),Object(i.jsx)("div",{style:{textAlign:"right"},children:Object(i.jsx)("span",{className:o.a.rayon_container,children:e.kodeRayon})})]}),Object(i.jsxs)("div",{style:{fontSize:"12px",fontWeight:"400",margin:"8px 0 0 0 "},children:["Produk Fokus:"," ",Object(i.jsx)("span",{className:o.a.produk_fokus_container,children:e.produkFokus})]})]}),f.map((function(e,t){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:o.a.penilaian_top_container,children:e.namaKonten}),Object(i.jsxs)("div",{className:o.a.penilaian_bot_container,children:[Object(i.jsxs)("div",{className:o.a.nilai_container,children:[Object(i.jsx)("div",{children:"Nilai"}),Object(i.jsx)("div",{children:e.rating})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:"Catatan"}),Object(i.jsx)("textarea",{disabled:!0,style:{width:"100%",height:"80px",fontSize:"12px",border:"1px solid #e9ecf2",borderRadius:"5px"},value:e.catatan})]})]})]})}))]})};return n||m?Object(i.jsx)(u.a,{}):Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:o.a.container,children:Object(i.jsxs)("div",{className:o.a.wrapper,children:[Object(i.jsx)(j.a,{title:"Work Visit",color:"white",action:"Submit",backAction:function(){s.a.push("/work-visit/history")}}),Object(i.jsx)("div",{className:o.a.main,children:g()})]})})})}}},[["HZxw",0,2,1,3,4,14]]]);