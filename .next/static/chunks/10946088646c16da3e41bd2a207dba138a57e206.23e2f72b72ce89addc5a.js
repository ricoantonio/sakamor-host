(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"4lBl":function(e,t,n){e.exports={modal:"Modal_modal__2IoMM"}},"5PhN":function(e,t,n){"use strict";var i=n("nKUr"),a=(n("q1tI"),n("M7ZG")),l=n.n(a);t.a=function(e){var t=e.children,n=e.style,a=e.shadow;return Object(i.jsx)("div",{className:"".concat(l.a.container," ").concat(a?l.a.shadow:""),style:n||{},children:t})}},AWCw:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var i=n("nKUr"),a=n("rePB"),l=n("KQm4"),r=n("q1tI"),c=n("20a2"),o=n.n(c),s=n("Dfhs"),u=n.n(s),d=n("kQFM"),_=n("JkA1"),b=n("fj1f"),f=n("UV+Q"),p=n("Yue9"),v=n("ECGM"),j=n("5PhN");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=e.type,n=Object(r.useContext)(d.b),a=n.state,s=n.dispatch,h=n.actions,O=Object(r.useState)(!0),g=O[0],m=O[1],x=Object(r.useState)(!0),P=x[0],w=x[1],N=Object(r.useState)(!0),S=N[0],D=N[1],R=Object(r.useState)([]),V=R[0],A=R[1],I=Object(r.useState)([]),k=I[0],C=I[1],E=Object(r.useState)([]),L=E[0],U=E[1],M=Object(r.useState)([]),q=(M[0],M[1]),B=Object(r.useState)(!1),T=B[0],Y=B[1],K=Object(r.useState)(null),G=K[0],H=K[1],z=Object(r.useState)(0),J=z[0],F=z[1],W=Object(r.useState)(!1),Q=W[0],Z=W[1],X=Object(r.useState)([{file:null,type:null,brand:null},{file:null,type:null,brand:null},{file:null,type:null,brand:null},{file:null,type:null,brand:null},{file:null,type:null,brand:null},{file:null,type:null,brand:null},{file:null,type:null,brand:null},{file:null,type:null,brand:null}]),$=X[0],ee=X[1],te=Object(c.useRouter)(),ne=[{file:null,type:null,brand:null},{file:null,type:null,brand:null},{file:null,type:null,brand:null},{file:null,type:null,brand:null},{file:null,type:null,brand:null},{file:null,type:null,brand:null},{file:null,type:null,brand:null},{file:null,type:null,brand:null}];Object(r.useEffect)((function(){$.filter((function(e){return null!==e.file&&null!==e.type})).length>0&&(window.onbeforeunload=function(){return"Data will be lost if you leave the page, are you sure?"})})),Object(r.useEffect)((function(){"PLAN"===t?a.visitPlanReducer.visibility.length>0&&ee(Object(l.a)(a.visitPlanReducer.visibility)):"UNPLAN"===t?a.visitUnplanReducer.visibility.length>0&&ee(Object(l.a)(a.visitUnplanReducer.visibility)):"SPREADING"===t&&a.visitSpreadingReducer.visibility.length>0&&ee(Object(l.a)(a.visitSpreadingReducer.visibility))}),[s]),Object(r.useEffect)((function(){te.query.new?Z(!0):"UNPLAN"===t?a.visitUnplanReducer.jenisChannel.namaJenisChannel&&a.visitUnplanReducer.outlet.namaOutlet||o.a.push("/visit/unplan"):"SPREADING"===t&&(a.visitSpreadingReducer.jenisChannel.namaJenisChannel&&a.visitSpreadingReducer.outlet.namaOutlet||o.a.push("/visit/spreading?new=true"))}),[]),Object(r.useEffect)((function(){te.query.id&&("PLAN"===t?Object(v.r)(te.query.id).then((function(e){var t=e.samePlan,n=e.data;0==t.length?o.a.push("/visit/plan"):(q(n),m(!1),a.visitPlanReducer.checkIn||h.setPlanCheckIn(now))})).catch((function(e){console.log(e)})):"UNPLAN"===t||"SPREADING"===t||("HISTORY_PLAN"===t?Object(v.h)(te.query.id).then((function(e){U(e),console.log(e),m(!1)})).catch((function(e){console.log(e)})):"HISTORY_UNPLAN"===t?Object(v.j)(te.query.id).then((function(e){U(e),console.log(e),m(!1)})).catch((function(e){console.log(e)})):"HISTORY_SPREADING"===t&&Object(v.i)(te.query.id).then((function(e){U(e),m(!1)})).catch((function(e){console.log(e)}))))}),[te.query.id]),Object(r.useEffect)((function(){Object(v.u)().then((function(e){A(e),m(!1)})).catch((function(e){console.log(e)})),Object(v.d)().then((function(e){C(e),w(!1)})).catch((function(e){console.log(e)}))}),[s]);var ie=function(){var e=L.map((function(e,n){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{style:{fontSize:"12px",color:"#b9b9c3"},children:["POSM ",n+1]}),Object(i.jsx)("div",{className:u.a.visibility_grid_history,children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:u.a.grid_50,children:[Object(i.jsx)(j.a,{style:{height:"32px",border:"1px solid #e9ecf2",padding:"6px 10px",borderRadius:"5px"},children:e.tipe}),Object(i.jsx)(j.a,{style:{height:"32px",border:"1px solid #e9ecf2",padding:"6px 10px",borderRadius:"5px"},children:e.namaBrand})]}),Object(i.jsx)("span",{style:{fontSize:"10px",color:"#41867A",fontWeight:"500"},onClick:function(){!function(e){Y(!0),D(!0),"HISTORY_PLAN"===t?Object(v.M)(e.id).then((function(e){H(e),D(!1)})).catch((function(e){console.log(e)})):"HISTORY_UNPLAN"===t?Object(v.O)(e.id).then((function(e){H(e),D(!1)})).catch((function(e){console.log(e)})):"HISTORY_SPREADING"===t&&Object(v.N)(e.id).then((function(e){H(e),D(!1)})).catch((function(e){console.log(e)}))}(e)},children:e.namaFile})]})},n)]})}));return g||P?Object(i.jsx)(b.a,{}):e};return g||P?Object(i.jsx)(b.a,{}):Object(i.jsxs)("div",{className:u.a.container,children:[T?Object(i.jsx)(f.a,{onClick:function(){H(null),Y(!1)},children:Object(i.jsx)("div",{style:{maxHeight:"100%",overflow:"auto"},children:Object(i.jsx)("div",{style:{width:"400px",maxHeight:"100%",margin:"20px auto"},children:S?Object(i.jsx)(b.a,{}):Object(i.jsx)("img",{style:{width:"380px",margin:"0 10px"},src:G})})})}):null,Object(i.jsxs)("div",{className:u.a.wrapper,children:[t.includes("HISTORY")?Object(i.jsx)(_.a,{title:"Visibility",color:"white",backAction:function(){o.a.back()}}):Object(i.jsx)(_.a,{title:"Visibility",color:"white",action:"Save",onClick:function(){console.log($),Q?(h.setSpreadingVisibility($),o.a.push("/visit/spreading/submit?new=true")):"PLAN"===t?(h.setPlanVisibility($),o.a.push("/visit/plan/".concat(te.query.id))):"UNPLAN"===t?(h.setUnplanVisibility($),o.a.push("/visit/unplan/submit")):"SPREADING"===t&&(h.setSpreadingVisibility($),o.a.push("/visit/spreading/submit"))},backAction:function(){"PLAN"===t&&(a.visitPlanReducer.visibility.length>0?ee(Object(l.a)(a.visitPlanReducer.visibility)):ee([].concat(ne))),"UNPLAN"===t&&(a.visitUnplanReducer.visibility.length>0?ee(Object(l.a)(a.visitUnplanReducer.visibility)):ee([].concat(ne))),"SPREADING"===t&&(a.visitSpreadingReducer.visibility.length>0?ee(Object(l.a)(a.visitSpreadingReducer.visibility)):ee([].concat(ne))),o.a.back()},disable:!1}),Object(i.jsx)("div",{className:u.a.main,children:t.includes("HISTORY")?ie():$.map((function(e,t){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{style:{fontSize:"12px",color:"#b9b9c3"},children:["POSM ",t+1]}),Object(i.jsxs)("div",{className:u.a.visibility_grid,children:[Object(i.jsxs)("div",{className:u.a.visibility_dropdown,children:[Object(i.jsxs)("div",{className:u.a.grid_50,children:[Object(i.jsx)(p.a,{options:V,type:"POSM",onChange:function(e){var n=V.filter((function(t){return t.program==e.target.value}));$.splice(t,1,y(y({},$[t]),{},{type:n[0]})),F(J+1)},value:null!=e.type?e.type.program:""}),Object(i.jsx)(p.a,{options:k,type:"BRAND",onChange:function(e){var n=k.filter((function(t){return t.namaBrand==e.target.value}));$.splice(t,1,y(y({},$[t]),{},{brand:n[0]})),F(J+1)},value:null!=e.brand?e.brand.namaBrand:""})]}),Object(i.jsx)("span",{style:{fontSize:"10px",color:"#41867A",fontWeight:"500"},children:null!=e.file?e.file.name:null})]}),Object(i.jsx)("div",{children:Object(i.jsxs)("label",{className:u.a.new_button,htmlFor:"upload".concat(t),children:[Object(i.jsx)("img",{src:"/camera.svg",style:{width:"18px",verticalAlign:"baseline"}}),Object(i.jsx)("input",{className:u.a.input_file,onChange:function(e){$.splice(t,1,y(y({},$[t]),{},{file:e.target.files[0]})),F(J+1)},id:"upload".concat(t),type:"file",accept:"image/*",capture:"environment"})]})})]},t)]})}))})]})]})}},Dfhs:function(e,t,n){e.exports={container:"VisitPlanDetail_container__2jr6z",wrapper:"VisitPlanDetail_wrapper__1k2PA",main:"VisitPlanDetail_main__2JVTk",render_data:"VisitPlanDetail_render_data__UG0Yf",avability_modal_subtitle:"VisitPlanDetail_avability_modal_subtitle__cImGw",render_value:"VisitPlanDetail_render_value__2U7Gk",input:"VisitPlanDetail_input__3EeAf",input_order_search:"VisitPlanDetail_input_order_search__3uxsM",input_order:"VisitPlanDetail_input_order__1WXcP",visibility_grid:"VisitPlanDetail_visibility_grid__eKqRB",grid_50:"VisitPlanDetail_grid_50__xScpT",visibility_grid_history:"VisitPlanDetail_visibility_grid_history__3RjRi",visibility_dropdown:"VisitPlanDetail_visibility_dropdown__1NliU",new_button:"VisitPlanDetail_new_button__3zBx9",input_file:"VisitPlanDetail_input_file__2mLHX",progress_bar:"VisitPlanDetail_progress_bar__Cz8_8",progress_bar_now:"VisitPlanDetail_progress_bar_now__3w_Ar",avability_bot_container:"VisitPlanDetail_avability_bot_container__1vyIh",avability_modal_container:"VisitPlanDetail_avability_modal_container__1BVd4",avability_modal_main:"VisitPlanDetail_avability_modal_main__isfSW",modal_avability:"VisitPlanDetail_modal_avability__3bVY8",hidden_overflow:"VisitPlanDetail_hidden_overflow__35jOV",add_title:"VisitPlanDetail_add_title__20KUY",stock_order_container:"VisitPlanDetail_stock_order_container__1-0Au",avg_sales_container:"VisitPlanDetail_avg_sales_container__2ZL8F",avabilitylist_title:"VisitPlanDetail_avabilitylist_title__3iIBI",avabilitylist_stock_container:"VisitPlanDetail_avabilitylist_stock_container__1iSbF",avabilitylist_container:"VisitPlanDetail_avabilitylist_container__WpqI9",avabilitylist_subtitle:"VisitPlanDetail_avabilitylist_subtitle__2LI2L",avabilitylist_value:"VisitPlanDetail_avabilitylist_value__21-Yx",search_fixed:"VisitPlanDetail_search_fixed__3uZmj",nav_box:"VisitPlanDetail_nav_box__2aVI9"}},JFGI:function(e,t,n){e.exports={container:"Dropdown_container__3dbP-"}},JkA1:function(e,t,n){"use strict";var i=n("nKUr"),a=(n("q1tI"),n("YFqc")),l=n.n(a),r=n("mPD6"),c=n.n(r);t.a=function(e){var t=e.backHref,n=e.title,a=e.action,r=e.color,o=e.onClick,s=e.backAction,u=e.noBack,d=e.disable;return Object(i.jsxs)("div",{className:"green"==r?"".concat(c.a.nav_green," ").concat(c.a.nav_container):"white"==r?"".concat(c.a.nav_white," ").concat(c.a.nav_container):c.a.nav_container,children:[t?Object(i.jsx)(l.a,{href:t||"/",children:Object(i.jsx)("a",{children:Object(i.jsx)("img",{style:{width:"24px"},src:"/arrow-left.svg"})})}):u?Object(i.jsx)("div",{}):Object(i.jsx)("img",{onClick:function(){s()},style:{width:"24px"},src:"/arrow-left.svg"}),Object(i.jsx)("div",{style:{textAlign:"center"},className:c.a.title,children:n}),a&&!1===d?Object(i.jsx)("div",{onClick:o,style:{fontSize:"14px",margin:"auto",color:"#41867A",cursor:"pointer"},children:a}):a&&!0===d?Object(i.jsx)("div",{onClick:o,style:{fontSize:"14px",margin:"auto",color:"#c4c4c4",cursor:"pointer"},children:a}):null]})}},KQm4:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},M7ZG:function(e,t,n){e.exports={container:"Card_container__2ez1c",shadow:"Card_shadow__Tq5_x"}},"UV+Q":function(e,t,n){"use strict";var i=n("nKUr"),a=(n("q1tI"),n("YFqc"),n("4lBl")),l=n.n(a);n("20a2");t.a=function(e){var t=e.children,n=e.onClick;return Object(i.jsx)("div",{onClick:n,className:l.a.modal,children:t})}},YFqc:function(e,t,n){e.exports=n("cTJO")},Yue9:function(e,t,n){"use strict";var i=n("nKUr"),a=n("KQm4"),l=(n("q1tI"),n("JFGI")),r=n.n(l);t.a=function(e){var t=e.options,n=void 0===t?[]:t,l=e.onChange,c=e.value,o=e.type;if("POSM"===o)var s=c?{program:c,value:c}:{program:"SELECT TYPE",value:{}};else if("BRAND"===o)s=c?{namaBrand:c,value:c}:{namaBrand:"SELECT BRAND",value:{}};return Object(i.jsx)("select",{className:r.a.container,onChange:function(e){return l(e)},children:[s].concat(Object(a.a)(n)).map((function(e,t){return e&&Object(i.jsx)("option",{value:e.value,children:"POSM"==o?e.program:"BRAND"===o?e.namaBrand:"NILAI_WORKVISIT"===o?e:""},t)}))})}},cTJO:function(e,t,n){"use strict";var i=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var l=a(n("q1tI")),r=n("elyg"),c=n("nOHt"),o=n("vNVm"),s={};function u(e,t,n,i){if(e&&(0,r.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var a=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),a=n&&n.asPath||"/",d=l.default.useMemo((function(){var t=(0,r.resolveHref)(a,e.href,!0),n=i(t,2),l=n[0],c=n[1];return{href:l,as:e.as?(0,r.resolveHref)(a,e.as):c||l}}),[a,e.href,e.as]),_=d.href,b=d.as,f=e.children,p=e.replace,v=e.shallow,j=e.scroll,h=e.locale;"string"===typeof f&&(f=l.default.createElement("a",null,f));var y=l.Children.only(f),O=y&&"object"===typeof y&&y.ref,g=(0,o.useIntersection)({rootMargin:"200px"}),m=i(g,2),x=m[0],P=m[1],w=l.default.useCallback((function(e){x(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,x]);(0,l.useEffect)((function(){var e=P&&t&&(0,r.isLocalURL)(_),i="undefined"!==typeof h?h:n&&n.locale,a=s[_+"%"+b+(i?"%"+i:"")];e&&!a&&u(n,_,b,{locale:i})}),[b,_,P,h,t,n]);var N={ref:w,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,i,a,l,c,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,r.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=i.indexOf("#")<0),t[a?"replace":"push"](n,i,{shallow:l,locale:o,scroll:c}))}(e,n,_,b,p,v,j,h)},onMouseEnter:function(e){(0,r.isLocalURL)(_)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,_,b,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var S="undefined"!==typeof h?h:n&&n.locale,D=n&&n.isLocaleDomain&&(0,r.getDomainLocale)(b,S,n&&n.locales,n&&n.domainLocales);N.href=D||(0,r.addBasePath)((0,r.addLocale)(b,S,n&&n.defaultLocale))}return l.default.cloneElement(y,N)};t.default=d},dVq6:function(e,t,n){e.exports={container:"Spinner_container__3N6EY",spinner:"Spinner_spinner__3goiz","ball-spin-clockwise":"Spinner_ball-spin-clockwise__YJ_C3"}},fj1f:function(e,t,n){"use strict";var i=n("nKUr"),a=n("dVq6"),l=n.n(a);t.a=function(){return Object(i.jsx)("div",{className:l.a.container,children:Object(i.jsxs)("div",{className:l.a.spinner,children:[Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{})]})})}},mPD6:function(e,t,n){e.exports={nav_container:"Nav_nav_container__7SMgK",title:"Nav_title__21aLL",nav_green:"Nav_nav_green__1_B--",nav_white:"Nav_nav_white__1ml4-",white:"Nav_white__2liqq"}},vNVm:function(e,t,n){"use strict";var i=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!r,o=(0,a.useRef)(),s=(0,a.useState)(!1),u=i(s,2),d=u[0],_=u[1],b=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||d||e&&e.tagName&&(o.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var i=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:i}),n}(n),a=i.id,l=i.observer,r=i.elements;return r.set(e,t),l.observe(e),function(){r.delete(e),l.unobserve(e),0===r.size&&(l.disconnect(),c.delete(a))}}(e,(function(e){return e&&_(e)}),{rootMargin:t}))}),[n,t,d]);return(0,a.useEffect)((function(){if(!r&&!d){var e=(0,l.requestIdleCallback)((function(){return _(!0)}));return function(){return(0,l.cancelIdleCallback)(e)}}}),[d]),[b,d]};var a=n("q1tI"),l=n("0G5g"),r="undefined"!==typeof IntersectionObserver;var c=new Map}}]);