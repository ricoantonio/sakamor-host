_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"7gZn":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("nKUr"),r=n("q1tI"),i=n("kLXx"),c=n.n(i),o=n("JkA1"),s=n("kQFM"),l=n("pClE");function d(){var e=Object(r.useContext)(s.b),t=(e.state,e.dispatch),n=e.actions;Object(r.useEffect)((function(){n.keepState()}),[t]);var i=Object(r.useState)([{date:"21/03/2020",time:"10:30",detail:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"},{date:"21/03/2020",time:"10:30",detail:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"},{date:"21/03/2020",time:"10:30",detail:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"},{date:"21/03/2020",time:"10:30",detail:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"},{date:"21/03/2020",time:"10:30",detail:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"},{date:"21/03/2020",time:"10:30",detail:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"}]),d=i[0];i[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:c.a.wrapper,children:[Object(a.jsx)(o.a,{title:"Announcement",backHref:"/"}),Object(a.jsx)("div",{className:c.a.main,children:d.map((function(e){return Object(a.jsxs)("div",{className:c.a.list_container,children:[Object(a.jsxs)("div",{className:c.a.list_date_container,children:[Object(a.jsx)("div",{className:c.a.date_text,children:e.date}),Object(a.jsx)("div",{className:c.a.dot_container,children:Object(a.jsx)("div",{className:c.a.dot})}),Object(a.jsx)("div",{className:c.a.time_text,children:e.time})]}),Object(a.jsx)("div",{className:c.a.list_detail_container,children:e.detail})]})}))}),Object(a.jsx)("div",{})]}),Object(a.jsx)(l.a,{focus:"profile"})]})}},AM3T:function(e,t,n){e.exports={nav_container:"BotNav_nav_container__1kQb5",nav_box:"BotNav_nav_box__1SPyV",nav_img:"BotNav_nav_img__3PT9U"}},JkA1:function(e,t,n){"use strict";var a=n("nKUr"),r=(n("q1tI"),n("YFqc")),i=n.n(r),c=n("mPD6"),o=n.n(c);t.a=function(e){var t=e.backHref,n=e.title,r=e.action,c=e.color,s=e.onClick,l=e.backAction,d=e.noBack,u=e.disable;return Object(a.jsxs)("div",{className:"green"==c?"".concat(o.a.nav_green," ").concat(o.a.nav_container):"white"==c?"".concat(o.a.nav_white," ").concat(o.a.nav_container):o.a.nav_container,children:[t?Object(a.jsx)(i.a,{href:t||"/",children:Object(a.jsx)("a",{children:Object(a.jsx)("img",{style:{width:"24px"},src:"/arrow-left.svg"})})}):d?Object(a.jsx)("div",{}):Object(a.jsx)("img",{onClick:function(){l()},style:{width:"24px"},src:"/arrow-left.svg"}),Object(a.jsx)("div",{style:{textAlign:"center"},className:o.a.title,children:n}),r&&!1===u?Object(a.jsx)("div",{onClick:s,style:{fontSize:"14px",margin:"auto",color:"#41867A",cursor:"pointer"},children:r}):r&&!0===u?Object(a.jsx)("div",{onClick:s,style:{fontSize:"14px",margin:"auto",color:"#c4c4c4",cursor:"pointer"},children:r}):null]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var i=r(n("q1tI")),c=n("elyg"),o=n("nOHt"),s=n("vNVm"),l={};function d(e,t,n,a){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),r=n&&n.pathname||"/",u=i.default.useMemo((function(){var t=(0,c.resolveHref)(r,e.href,!0),n=a(t,2),i=n[0],o=n[1];return{href:i,as:e.as?(0,c.resolveHref)(r,e.as):o||i}}),[r,e.href,e.as]),v=u.href,m=u.as,f=e.children,_=e.replace,p=e.shallow,j=e.scroll,h=e.locale;"string"===typeof f&&(f=i.default.createElement("a",null,f));var b=i.Children.only(f),x=b&&"object"===typeof b&&b.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),O=a(g,2),w=O[0],y=O[1],N=i.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);(0,i.useEffect)((function(){var e=y&&t&&(0,c.isLocalURL)(v),a="undefined"!==typeof h?h:n&&n.locale,r=l[v+"%"+m+(a?"%"+a:"")];e&&!r&&d(n,v,m,{locale:a})}),[m,v,y,h,t,n]);var k={ref:N,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,i,o,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:i,locale:s,scroll:o}))}(e,n,v,m,_,p,j,h)},onMouseEnter:function(e){(0,c.isLocalURL)(v)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),d(n,v,m,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var L="undefined"!==typeof h?h:n&&n.locale,A=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(m,L,n&&n.locales,n&&n.domainLocales);k.href=A||(0,c.addBasePath)((0,c.addLocale)(m,L,n&&n.defaultLocale))}return i.default.cloneElement(b,k)};t.default=u},kLXx:function(e,t,n){e.exports={wrapper:"Announcement_wrapper__MjOYY",main:"Announcement_main__2Xa5b",list_container:"Announcement_list_container__10dc8",list_date_container:"Announcement_list_date_container__2i6MK",list_detail_container:"Announcement_list_detail_container__3Y156",date_text:"Announcement_date_text__36Lsh",time_text:"Announcement_time_text__2bx5f",dot:"Announcement_dot__2emHR",dot_container:"Announcement_dot_container__rtSrb"}},mPD6:function(e,t,n){e.exports={nav_container:"Nav_nav_container__7SMgK",title:"Nav_title__21aLL",nav_green:"Nav_nav_green__1_B--",nav_white:"Nav_nav_white__1ml4-",white:"Nav_white__2liqq"}},pClE:function(e,t,n){"use strict";var a=n("nKUr"),r=(n("q1tI"),n("YFqc")),i=n.n(r),c=n("AM3T"),o=n.n(c),s=n("20a2");t.a=function(e){var t=e.focus,n=Object(s.useRouter)(),r=Object(a.jsx)("div",{style:{width:"5px",height:"5px",backgroundColor:"#feb800",margin:"5px auto",borderRadius:"50px"}});return Object(a.jsx)("div",{className:o.a.nav_container,children:Object(a.jsxs)("div",{className:o.a.nav_box,children:[Object(a.jsx)(i.a,{href:"/",children:Object(a.jsx)("a",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"/"===n.pathname?"/home-nav.svg":"/home-nav1.svg"}),"/"===n.pathname?r:""]})})}),Object(a.jsx)(i.a,{href:"/",children:Object(a.jsx)("a",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"/calendar"===n.pathname?"/calendar-nav.svg":"/calendar-nav1.svg"}),"/calendar"===n.pathname?r:""]})})}),Object(a.jsx)(i.a,{href:"/",children:Object(a.jsx)("a",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"rewards"===t?"/rewards-nav.svg":"/rewards-nav1.svg"}),"rewards"===t?r:""]})})}),Object(a.jsx)(i.a,{href:"/",children:Object(a.jsx)("a",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"profile"===t?"/profile-nav.svg":"/profile-nav1.svg"}),"profile"===t?r:""]})})})]})})}},v7t3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/announcement",function(){return n("7gZn")}])},vNVm:function(e,t,n){"use strict";var a=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=(0,r.useRef)(),l=(0,r.useState)(!1),d=a(l,2),u=d[0],v=d[1],m=(0,r.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,i=a.observer,c=a.elements;return c.set(e,t),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),o.delete(r))}}(e,(function(e){return e&&v(e)}),{rootMargin:t}))}),[n,t,u]);return(0,r.useEffect)((function(){if(!c&&!u){var e=(0,i.requestIdleCallback)((function(){return v(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[u]),[m,u]};var r=n("q1tI"),i=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var o=new Map}},[["v7t3",0,1,2,4]]]);