(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"20a2":function(n,t,e){n.exports=e("nOHt")},ECGM:function(n,t,e){"use strict";e.d(t,"h",(function(){return u})),e.d(t,"a",(function(){return l})),e.d(t,"t",(function(){return s})),e.d(t,"p",(function(){return p})),e.d(t,"n",(function(){return d})),e.d(t,"q",(function(){return y})),e.d(t,"o",(function(){return h})),e.d(t,"k",(function(){return b})),e.d(t,"j",(function(){return m})),e.d(t,"m",(function(){return f})),e.d(t,"i",(function(){return v})),e.d(t,"u",(function(){return g})),e.d(t,"v",(function(){return I})),e.d(t,"c",(function(){return S})),e.d(t,"b",(function(){return V})),e.d(t,"l",(function(){return J})),e.d(t,"A",(function(){return j})),e.d(t,"y",(function(){return W})),e.d(t,"z",(function(){return Z})),e.d(t,"g",(function(){return O})),e.d(t,"e",(function(){return P})),e.d(t,"s",(function(){return C})),e.d(t,"C",(function(){return w})),e.d(t,"w",(function(){return G})),e.d(t,"x",(function(){return L})),e.d(t,"f",(function(){return F})),e.d(t,"d",(function(){return k})),e.d(t,"B",(function(){return N})),e.d(t,"r",(function(){return Y}));var i=e("JdxD"),c=new Date,o=c.getDate(),r=c.getMonth()+1,a=c.getFullYear(),u=function(n){return fetch(i.b+i.c+"/User/GetMenu?username=".concat(n.email),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n)}))},l=function(n){return fetch(i.b+i.c+"/User/GetAuthorize?username=".concat(n.username),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n)}))},s=function(n){return fetch(i.b+i.c+"/User/Login?username=".concat(n.username,"&&password=").concat(n.password),{method:"POST",headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n),setWrongUser(!0)}))},f=function(){return fetch(i.b+i.a+"/MasterDataLokal/GetAllDisplayProgram",{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n)}))},h=function(n){return fetch(i.b+i.a+"/MasterDataLokal/GetProdukJenisChannelBy/".concat(n),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n)}))},d=function(n,t){return fetch(i.b+i.a+"/MasterData/GetAvgSales30DaysByOutletAndProduct?productCode=".concat(n,"&outletCode=").concat(t),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n)}))},p=function(n){return fetch(i.b+i.a+"/MasterData/GetJenisChannelLike?teks=".concat(n),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n)}))},y=function(n){return fetch(i.b+i.a+"/MasterData/GetOutletLike?teks=".concat(n),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n)}))},b=function(n){return fetch(i.b+i.d+"/ActivityVisitPlan/GetActivityVisitPlanBy?username=".concat(n.username),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n.filter((function(n){return!1===n.isCheckOut}))})).catch((function(n){console.log(n)}))},m=function(n){return fetch(i.b+i.d+"/MasterVisitPlan/GetMasterVisitPlanBy?parameter=".concat(a,"-").concat(r,"-").concat(o),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(t){return 0!=t.length?fetch(i.b+i.d+"/MasterVisitPlan/GetMasterVisitPlanById/".concat(n),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return{samePlan:t.filter((function(t){return t.id===n.id})),data:n}})).catch((function(n){console.log(n)})):t})).catch((function(n){console.log(n)}))},v=function(n){return fetch(i.b+i.d+"/ActivityVisitPlan/GetActivityVisitPlanBy?username=".concat(n.username),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n.filter((function(n){return!0===n.isCheckOut}))})).catch((function(n){console.log(n)}))},g=function(n){return fetch(i.b+i.d+"/ActivityVisitPlan/SaveAllActivityVisitPlan",{method:"POST",headers:{apiKey:i.g,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).then((function(n){return console.log("baikan saveall",n),n})).catch((function(n){console.log(n)}))},I=function(n,t){var e=new FormData;return fetch(i.b+i.d+"/ActivityVisitPlanDPOSM/SaveActivityVisitPlanDposm",{method:"POST",headers:{apiKey:i.g,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).then((function(n){return e.append("file",t),fetch(i.b+i.d+"/ActivityVisitPlanDPOSM/InsertFileBy?id=".concat(n.id,"&namaFile=").concat(n.namaFile),{method:"POST",headers:{apiKey:i.g},body:e}).then((function(n){return n.json()})).then((function(n){return console.log("balikan inserfile",n),n})).catch((function(n){console.log(n)}))})).catch((function(n){console.log(n)}))},V=function(n){return fetch(i.b+i.d+"/ActivityVisitPlan/GetProdukSuratPesanan/".concat(n),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n)}))},S=function(n){return fetch(i.b+i.d+"/ActivityVisitPlanDPOSM/GetActivityVisitPlanDPosmBy/".concat(n),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n)}))},j=function(n){return fetch(i.b+i.d+"/ActivityVisitPlanDPOSM/ViewFile/".concat(n),{headers:{apiKey:i.g}}).then((function(n){return n.blob()})).then((function(n){return URL.createObjectURL(n)})).catch((function(n){console.log(n)}))},J=function(n){return fetch(i.b+i.d+"/ActivityVisitPlan/GetHistoryActivityVisitPlanBy?username=".concat(n.username),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n.sort((function(n,t){var e=new Date(n.tanggal);return new Date(t.tanggal)-e})),n})).catch((function(n){console.log(n)}))},W=function(n){return fetch(i.b+i.f+"/SakamorActivityVisitUnPlan/SaveAllActivityVisitUnPlan",{method:"POST",headers:{apiKey:i.g,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).then((function(n){return console.log("baikan saveall",n),n})).catch((function(n){console.log(n)}))},Z=function(n,t){var e=new FormData;return fetch(i.b+i.f+"/SakamorActivityVisitUnPlanDPOSM/SaveActivityVisitUnPlanDposm",{method:"POST",headers:{apiKey:i.g,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).then((function(n){return console.log("balikan psom",n),e.append("file",t),fetch(i.b+i.f+"/SakamorActivityVisitUnPlanDPOSM/InsertFileBy?id=".concat(n.id,"&namaFile=").concat(n.namaFile),{method:"POST",headers:{apiKey:i.g},body:e}).then((function(n){return n.json()})).then((function(n){return console.log("balikan inserfile",n),n})).catch((function(n){console.log(n)}))})).catch((function(n){console.log(n)}))},O=function(n){return fetch(i.b+i.f+"/SakamorActivityVisitUnPlan/GetProdukSuratPesanan/".concat(n),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n)}))},P=function(n){return fetch(i.b+i.f+"/SakamorActivityVisitUnPlanDPOSM/GetActivityVisitUnPlanDPosmBy/".concat(n),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n)}))},w=function(n){return console.log(n),fetch(i.b+i.f+"/SakamorActivityVisitUnPlanDPOSM/ViewFile/".concat(n),{headers:{apiKey:i.g}}).then((function(n){return n.blob()})).then((function(n){return URL.createObjectURL(n)})).catch((function(n){console.log(n)}))},C=function(n){return fetch(i.b+i.f+"/SakamorActivityVisitUnPlan/GetHistoryActivityVisitUnPlanBy?username=".concat(n.username),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n.sort((function(n,t){var e=new Date(n.tanggal);return new Date(t.tanggal)-e})),n})).catch((function(n){console.log(n)}))},G=function(n){return fetch(i.b+i.e+"/ActivitySpreading/SaveAllActivitySpreading",{method:"POST",headers:{apiKey:i.g,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).then((function(n){return console.log("baikan saveall",n),n})).catch((function(n){console.log(n)}))},L=function(n,t){var e=new FormData;return fetch(i.b+i.e+"/ActivitySpreadingDPOSM/SaveActivitySpreadingDposm",{method:"POST",headers:{apiKey:i.g,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).then((function(n){return console.log("balikan psom",n),e.append("file",t),fetch(i.b+i.e+"/ActivitySpreadingDPOSM/InsertFileBy?id=".concat(n.id,"&namaFile=").concat(n.namaFile),{method:"POST",headers:{apiKey:i.g},body:e}).then((function(n){return n.json()})).then((function(n){return console.log("balikan inserfile",n),n})).catch((function(n){console.log(n)}))})).catch((function(n){console.log(n)}))},F=function(n){return fetch(i.b+i.e+"/ActivitySpreading/GetProdukSuratPesanan/".concat(n),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n)}))},k=function(n){return fetch(i.b+i.e+"/ActivitySpreadingDPOSM/GetActivityVisitUnPlanDPosmBy/".concat(n),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.log(n)}))},N=function(n){return console.log(n),fetch(i.b+i.e+"/ActivitySpreadingDPOSM/ViewFile/".concat(n),{headers:{apiKey:i.g}}).then((function(n){return n.blob()})).then((function(n){return URL.createObjectURL(n)})).catch((function(n){console.log(n)}))},Y=function(n){return fetch(i.b+i.e+"/ActivitySpreading/GetHistoryActivitySpreadingBy?username=".concat(n.username),{headers:{apiKey:i.g}}).then((function(n){return n.json()})).then((function(n){return n.sort((function(n,t){var e=new Date(n.tanggal);return new Date(t.tanggal)-e})),n})).catch((function(n){console.log(n)}))}},JdxD:function(n,t,e){"use strict";e.d(t,"g",(function(){return l})),e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return o})),e.d(t,"d",(function(){return r})),e.d(t,"f",(function(){return a})),e.d(t,"e",(function(){return u}));var i="https://m-one.kalbe.co.id:8243/t/kalbe.co.id",c="/UserProfileExternal/v1/api",o="/SakamorMasterData/v1/api",r="/SakamorActivityVisitPlan/v1/api",a="/SakamorActivityVisitUnPlan/v1/api",u="/SakamorActivitySpreading/v1/api",l="eyJ4NXQiOiJZamt5WkRVM05tRTRZbVZqT1RjeE4yRTRNbVZrT1dSak1XVmhZVGhoWWpjeE9UZzJNemt4WVE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJub2Jvbi5hbmRyYUBrYWxiZS5jby5pZCIsImFwcGxpY2F0aW9uIjp7Im93bmVyIjoibm9ib24uYW5kcmFAa2FsYmUuY28uaWQiLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6IlNha2Ftb3IgMi4wIiwiaWQiOjE5LCJ1dWlkIjoiMTQ5ZWU0NmUtZDE3Ni00NWQxLWE3NmEtOTAzM2RhNzc4OTU4In0sImlzcyI6Imh0dHBzOlwvXC9tLW9uZS5rYWxiZS5jby5pZDo5NDQzXC9vYXV0aDJcL3Rva2VuIiwidGllckluZm8iOnsiVW5saW1pdGVkIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOm51bGx9fSwia2V5dHlwZSI6IlNBTkRCT1giLCJwZXJtaXR0ZWRSZWZlcmVyIjoiIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJTYWthbW9yQWN0aXZpdHlWaXNpdFBsYW4iLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvU2FrYW1vckFjdGl2aXR5VmlzaXRQbGFuXC92MSIsInB1Ymxpc2hlciI6Im5vYm9uLmFuZHJhQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlVzZXJQcm9maWxlRXh0ZXJuYWwiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvVXNlclByb2ZpbGVFeHRlcm5hbFwvdjEiLCJwdWJsaXNoZXIiOiJub2Jvbi5hbmRyYUBrYWxiZS5jby5pZCIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJTYWthbW9yTWFzdGVyRGF0YSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9TYWthbW9yTWFzdGVyRGF0YVwvdjEiLCJwdWJsaXNoZXIiOiJub2Jvbi5hbmRyYUBrYWxiZS5jby5pZCIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJTYWthbW9yQWN0aXZpdHlTcHJlYWRpbmciLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvU2FrYW1vckFjdGl2aXR5U3ByZWFkaW5nXC92MSIsInB1Ymxpc2hlciI6Im5vYm9uLmFuZHJhQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlNha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuIiwiY29udGV4dCI6IlwvdFwva2FsYmUuY28uaWRcL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuXC92MSIsInB1Ymxpc2hlciI6Im5vYm9uLmFuZHJhQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9XSwicGVybWl0dGVkSVAiOiIiLCJpYXQiOjE2MTg5OTEzODIsImp0aSI6ImM4NGViYzdmLTZkYTEtNDYzMS1iM2VkLTMyOGQ5ZGEwNjM0OSJ9.ZTN6TtUHwmLCeNgweKbOvwLwZmtTPDoc0-HV9qYQnBQGVOU7qU9-Xe2qjH3ac3wfcaFlxE40Szq4PxzYxT75h-oUdrXtFDmRO_bUZk-zBO7y8fCoXmO1ZLXUSPHCo9HwolwGZoTtkCyEUYU0EnxfSYb3nCwPz24visNzLC3CHhplKZxcXZ1LPYJSazpqWXjMbbrnl-MoCcF47FpzKbCtMuHLUi8H___ytWqjSvP0zEECTM3QDJdiKjusigSdtkai982Uafu5iFAOx6nwjpfLTe3rbL2mbC7DjkC3sJ-yntClxwdX9HYvuVblEcNXMInstm6sMtZDlEXaMK9-942Lfw=="},YFqc:function(n,t,e){n.exports=e("cTJO")},cTJO:function(n,t,e){"use strict";var i=e("J4zp"),c=e("284h");t.__esModule=!0,t.default=void 0;var o=c(e("q1tI")),r=e("elyg"),a=e("nOHt"),u=e("vNVm"),l={};function s(n,t,e,i){if(n&&(0,r.isLocalURL)(t)){n.prefetch(t,e,i).catch((function(n){0}));var c=i&&"undefined"!==typeof i.locale?i.locale:n&&n.locale;l[t+"%"+e+(c?"%"+c:"")]=!0}}var f=function(n){var t=!1!==n.prefetch,e=(0,a.useRouter)(),c=e&&e.pathname||"/",f=o.default.useMemo((function(){var t=(0,r.resolveHref)(c,n.href,!0),e=i(t,2),o=e[0],a=e[1];return{href:o,as:n.as?(0,r.resolveHref)(c,n.as):a||o}}),[c,n.href,n.as]),h=f.href,d=f.as,p=n.children,y=n.replace,b=n.shallow,m=n.scroll,v=n.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var g=o.Children.only(p),I=g&&"object"===typeof g&&g.ref,V=(0,u.useIntersection)({rootMargin:"200px"}),S=i(V,2),j=S[0],J=S[1],W=o.default.useCallback((function(n){j(n),I&&("function"===typeof I?I(n):"object"===typeof I&&(I.current=n))}),[I,j]);(0,o.useEffect)((function(){var n=J&&t&&(0,r.isLocalURL)(h),i="undefined"!==typeof v?v:e&&e.locale,c=l[h+"%"+d+(i?"%"+i:"")];n&&!c&&s(e,h,d,{locale:i})}),[d,h,J,v,t,e]);var Z={ref:W,onClick:function(n){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(n),n.defaultPrevented||function(n,t,e,i,c,o,a,u){("A"!==n.currentTarget.nodeName||!function(n){var t=n.currentTarget.target;return t&&"_self"!==t||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.nativeEvent&&2===n.nativeEvent.which}(n)&&(0,r.isLocalURL)(e))&&(n.preventDefault(),null==a&&(a=i.indexOf("#")<0),t[c?"replace":"push"](e,i,{shallow:o,locale:u,scroll:a}))}(n,e,h,d,y,b,m,v)},onMouseEnter:function(n){(0,r.isLocalURL)(h)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(n),s(e,h,d,{priority:!0}))}};if(n.passHref||"a"===g.type&&!("href"in g.props)){var O="undefined"!==typeof v?v:e&&e.locale,P=e&&e.isLocaleDomain&&(0,r.getDomainLocale)(d,O,e&&e.locales,e&&e.domainLocales);Z.href=P||(0,r.addBasePath)((0,r.addLocale)(d,O,e&&e.defaultLocale))}return o.default.cloneElement(g,Z)};t.default=f},vNVm:function(n,t,e){"use strict";var i=e("J4zp");t.__esModule=!0,t.useIntersection=function(n){var t=n.rootMargin,e=n.disabled||!r,u=(0,c.useRef)(),l=(0,c.useState)(!1),s=i(l,2),f=s[0],h=s[1],d=(0,c.useCallback)((function(n){u.current&&(u.current(),u.current=void 0),e||f||n&&n.tagName&&(u.current=function(n,t,e){var i=function(n){var t=n.rootMargin||"",e=a.get(t);if(e)return e;var i=new Map,c=new IntersectionObserver((function(n){n.forEach((function(n){var t=i.get(n.target),e=n.isIntersecting||n.intersectionRatio>0;t&&e&&t(e)}))}),n);return a.set(t,e={id:t,observer:c,elements:i}),e}(e),c=i.id,o=i.observer,r=i.elements;return r.set(n,t),o.observe(n),function(){r.delete(n),o.unobserve(n),0===r.size&&(o.disconnect(),a.delete(c))}}(n,(function(n){return n&&h(n)}),{rootMargin:t}))}),[e,t,f]);return(0,c.useEffect)((function(){if(!r&&!f){var n=(0,o.requestIdleCallback)((function(){return h(!0)}));return function(){return(0,o.cancelIdleCallback)(n)}}}),[f]),[d,f]};var c=e("q1tI"),o=e("0G5g"),r="undefined"!==typeof IntersectionObserver;var a=new Map}}]);