_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{PexC:function(e,t,n){e.exports={admin_header:"AdminLayout_admin_header__1M9-n",header_img_security:"AdminLayout_header_img_security__2e6Ir",title_container:"AdminLayout_title_container__2_7ca",title_text:"AdminLayout_title_text__pHpGp",main_container:"AdminLayout_main_container__1uDqi",sidemenu:"AdminLayout_sidemenu__1YG3I",main:"AdminLayout_main__1E4YY"}},Tqk9:function(e,t,n){"use strict";n.r(t);var i=n("nKUr"),r=(n("q1tI"),n("YFqc"),n("PexC")),a=n.n(r);var c=function(e){var t=e.children;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:a.a.admin_header,children:[Object(i.jsxs)("div",{className:a.a.title_container,children:[Object(i.jsx)("img",{className:a.a.header_img_security,src:"/security.svg"}),Object(i.jsx)("div",{className:a.a.title_text,children:"SAKA ARMOR ADMIN"})]}),Object(i.jsx)("div",{})]}),Object(i.jsxs)("div",{className:a.a.main_container,children:[Object(i.jsxs)("div",{className:a.a.sidemenu,children:[Object(i.jsxs)("div",{style:{display:"flex",height:"60px"},children:[Object(i.jsx)("div",{style:{width:"5px",backgroundColor:"#87bd40",height:"60px"}}),Object(i.jsx)("div",{style:{position:"relative",width:"100%",margin:"auto",left:"-5px",color:"white"},children:"Dashboard"})]}),Object(i.jsxs)("div",{style:{display:"flex",height:"60px"},children:[Object(i.jsx)("div",{}),Object(i.jsx)("div",{style:{position:"relative",width:"100%",margin:"auto"},children:"Dashboard"})]}),Object(i.jsxs)("div",{style:{display:"flex",height:"60px"},children:[Object(i.jsx)("div",{}),Object(i.jsx)("div",{style:{position:"relative",width:"100%",margin:"auto"},children:"Dashboard"})]})]}),Object(i.jsx)("div",{className:a.a.main,children:t})]})]})};t.default=function(){return Object(i.jsx)(c,{children:Object(i.jsx)("div",{style:{width:"100%"},children:"a"})})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var i=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var a=r(n("q1tI")),c=n("elyg"),o=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,i){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),r=n&&n.asPath||"/",d=a.default.useMemo((function(){var t=(0,c.resolveHref)(r,e.href,!0),n=i(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,c.resolveHref)(r,e.as):o||a}}),[r,e.href,e.as]),f=d.href,h=d.as,v=e.children,p=e.replace,_=e.shallow,m=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var j=a.Children.only(v),b=j&&"object"===typeof j&&j.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),g=i(x,2),O=g[0],w=g[1],L=a.default.useCallback((function(e){O(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,O]);(0,a.useEffect)((function(){var e=w&&t&&(0,c.isLocalURL)(f),i="undefined"!==typeof y?y:n&&n.locale,r=l[f+"%"+h+(i?"%"+i:"")];e&&!r&&u(n,f,h,{locale:i})}),[h,f,w,y,t,n]);var N={ref:L,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,a,o,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=i.indexOf("#")<0),t[r?"replace":"push"](n,i,{shallow:a,locale:s,scroll:o}))}(e,n,f,h,p,_,m,y)},onMouseEnter:function(e){(0,c.isLocalURL)(f)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),u(n,f,h,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var E="undefined"!==typeof y?y:n&&n.locale,M=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(h,E,n&&n.locales,n&&n.domainLocales);N.href=M||(0,c.addBasePath)((0,c.addLocale)(h,E,n&&n.defaultLocale))}return a.default.cloneElement(j,N)};t.default=d},vNVm:function(e,t,n){"use strict";var i=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=(0,r.useRef)(),l=(0,r.useState)(!1),u=i(l,2),d=u[0],f=u[1],h=(0,r.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,a=i.observer,c=i.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),o.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,r.useEffect)((function(){if(!c&&!d){var e=(0,a.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[d]),[h,d]};var r=n("q1tI"),a=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var o=new Map},yGyf:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-dashboard",function(){return n("Tqk9")}])}},[["yGyf",0,2,1]]]);