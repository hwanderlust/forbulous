!function(t){var o={};function r(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/",r(r.s=7)}([function(n,e,t){var o=t(1);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(5)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){e=n.exports=t(2)(!1);var o=t(3)(t(4));e.push([n.i,'@charset "UTF-8";\n.heading__container .banner__wrapper .heading__banner .heading__banner__text, .search__container .search__form, .heading__container, .footer .about,\n.footer .extra, .search__container, .images__container .images__pagination__container, .footer .social, .footer .about ul,\n.footer .extra ul {\n  display: flex;\n  justify-content: center; }\n\n.heading__container .banner__wrapper .heading__banner .heading__banner__text, .search__container .search__form, .heading__container, .footer .about,\n.footer .extra {\n  align-items: center; }\n\n.heading__container .banner__wrapper .heading__banner .heading__banner__text, .search__container .search__form {\n  flex-direction: column; }\n\n.heading__container {\n  position: relative;\n  height: 30rem;\n  overflow: hidden; }\n  .heading__container .banner__wrapper {\n    width: 100%;\n    height: 100%;\n    margin: 0; }\n    .heading__container .banner__wrapper .heading__banner {\n      background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('+o+');\n      background-size: cover;\n      background-position-y: center;\n      width: 100%;\n      height: 100%;\n      display: flex;\n      justify-content: flex-start;\n      align-items: flex-end; }\n      .heading__container .banner__wrapper .heading__banner .heading__banner__text {\n        padding-left: 5rem;\n        height: 10rem;\n        background-color: lightseagreen;\n        width: 20rem;\n        font-size: 3rem;\n        font-family: "Bowlby One", cursive;\n        opacity: 0.8; }\n  .heading__container:hover:after, .heading__container:active:after {\n    content: "Photo by A L L E F . V I N I C I U S Δ";\n    position: absolute;\n    top: 7rem;\n    right: 0;\n    padding: 0.5rem;\n    margin-left: 3rem;\n    background-color: black;\n    color: peachpuff;\n    -webkit-transform: translateX(7rem) rotate(90deg);\n            transform: translateX(7rem) rotate(90deg); }\n\n.search__container {\n  padding: 2.5rem;\n  box-sizing: border-box;\n  width: 100%;\n  background-color: peachpuff; }\n  .search__container .search__form {\n    height: 10rem; }\n    .search__container .search__form .search__form__label {\n      font-size: 2rem; }\n    .search__container .search__form .search__form__input {\n      width: 100%;\n      font-family: "Open Sans", sans-serif;\n      font-size: 1rem;\n      line-height: 2rem;\n      text-align: center; }\n\n.images__container {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem; }\n  .images__container .images__wrapper {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap; }\n  .images__container .image__container {\n    -o-object-fit: cover;\n       object-fit: cover;\n    margin: 0;\n    width: calc((100% - 1rem) / 2);\n    margin-bottom: 1rem;\n    height: 15rem;\n    overflow: hidden;\n    cursor: pointer;\n    transition: 100ms ease-out; }\n    .images__container .image__container:active {\n      -webkit-transform: scale(0.9);\n              transform: scale(0.9); }\n    .images__container .image__container:focus {\n      outline: 5px double orangered; }\n  .images__container .images__pagination__container {\n    margin: 2rem; }\n    .images__container .images__pagination__container .pagination__wrapper {\n      width: 50%;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      height: 5rem; }\n      .images__container .images__pagination__container .pagination__wrapper .pagination__circle {\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background-color: lightgray;\n        padding: 1rem;\n        box-sizing: border-box;\n        cursor: pointer;\n        margin: 1rem;\n        transition: 250ms ease-out; }\n        .images__container .images__pagination__container .pagination__wrapper .pagination__circle:hover {\n          border: 1px solid black; }\n        .images__container .images__pagination__container .pagination__wrapper .pagination__circle:active {\n          -webkit-transform: scale(0.9);\n                  transform: scale(0.9); }\n      .images__container .images__pagination__container .pagination__wrapper .active {\n        background-color: grey; }\n    .images__container .images__pagination__container .hide {\n      display: none; }\n\n.footer {\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto auto;\n  height: 12rem;\n  background-color: lightslategrey; }\n  .footer .social {\n    grid-area: 1/1/2/3; }\n    .footer .social ul {\n      list-style-type: none;\n      display: flex;\n      justify-content: space-evenly;\n      align-items: center;\n      width: 100%;\n      margin: 0;\n      padding: 0;\n      font-size: 2rem; }\n  .footer .about,\n  .footer .extra {\n    font-size: 0.8rem; }\n    .footer .about ul,\n    .footer .extra ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      width: 100%; }\n  .footer .social ul li,\n  .footer .about ul li,\n  .footer .extra ul li {\n    padding: 0.5rem 1rem;\n    cursor: pointer; }\n    .footer .social ul li a,\n    .footer .about ul li a,\n    .footer .extra ul li a {\n      color: black;\n      text-transform: uppercase;\n      text-decoration: none;\n      transition: 250ms ease-out; }\n      .footer .social ul li a:focus,\n      .footer .about ul li a:focus,\n      .footer .extra ul li a:focus {\n        color: white; }\n    .footer .social ul li:hover,\n    .footer .about ul li:hover,\n    .footer .extra ul li:hover {\n      text-decoration: underline; }\n      .footer .social ul li:hover a,\n      .footer .about ul li:hover a,\n      .footer .extra ul li:hover a {\n        color: white; }\n    .footer .social ul li:active,\n    .footer .about ul li:active,\n    .footer .extra ul li:active {\n      -webkit-transform: scale(0.9);\n              transform: scale(0.9); }\n  .footer .social ul li a {\n    text-transform: lowercase; }\n\n.modal {\n  position: absolute;\n  opacity: 0;\n  transition: all 500ms ease-out, -webkit-transform-origin 1ms;\n  transition: all 500ms ease-out, transform-origin 1ms;\n  transition: all 500ms ease-out, transform-origin 1ms, -webkit-transform-origin 1ms; }\n  .modal .modal__contents {\n    background-color: rgba(0, 0, 0, 0.9);\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start; }\n    .modal .modal__contents .modal__image {\n      width: 100%;\n      max-height: 70vh;\n      -o-object-fit: contain;\n         object-fit: contain; }\n    .modal .modal__contents .preview {\n      -webkit-filter: blur(2vw);\n              filter: blur(2vw);\n      -webkit-transform: scale(1.05);\n              transform: scale(1.05); }\n    .modal .modal__contents .reveal {\n      position: absolute;\n      will-change: transform,\r opacity;\n      -webkit-animation: reveal 1s ease-out;\n              animation: reveal 1s ease-out; }\n    .modal .modal__contents .modal__image__desc {\n      display: none;\n      width: 100%;\n      max-height: 5rem;\n      overflow-y: hidden;\n      margin: 0;\n      padding: 0.5rem 0;\n      border-bottom: 1px solid rgba(100, 100, 100, 0.5);\n      background-color: floralwhite;\n      font-size: 2rem;\n      text-align: center; }\n    .modal .modal__contents .modal__image__details {\n      display: none;\n      grid-template-columns: auto auto auto;\n      width: 100%;\n      height: 3rem;\n      background-color: floralwhite; }\n      .modal .modal__contents .modal__image__details * {\n        width: 100%;\n        text-align: center;\n        margin: auto;\n        border-right: 1px solid rgba(100, 100, 100, 0.5); }\n      .modal .modal__contents .modal__image__details span:last-of-type {\n        border-right: none; }\n  .modal .modal__button {\n    border: none;\n    padding: 0;\n    border-radius: 50%;\n    background-color: grey;\n    box-shadow: inset 0 0 0 1px rgba(50, 50, 50, 0.5);\n    color: floralwhite;\n    width: 3rem;\n    height: 3rem;\n    z-index: 5;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: "Bowlby One", cursive;\n    cursor: pointer;\n    transition: 250ms ease-out; }\n    .modal .modal__button:hover {\n      background-color: floralwhite;\n      color: black; }\n    .modal .modal__button:active {\n      -webkit-transform: scale(0.9);\n              transform: scale(0.9); }\n  .modal .modal__button--close {\n    position: absolute;\n    top: -1rem;\n    right: -1rem; }\n  .modal .modal__button--prev {\n    position: absolute;\n    top: 50%;\n    left: 0; }\n  .modal .modal__button--next {\n    position: absolute;\n    top: 50%;\n    right: 0; }\n\n@-webkit-keyframes appear {\n  0% {\n    position: absolute;\n    z-index: 100;\n    display: flex;\n    -webkit-transform: scale(0.1);\n            transform: scale(0.1);\n    transition: all 500ms ease-out,\r -webkit-transform-origin 1ms;\n    transition: all 500ms ease-out,\r transform-origin 1ms;\n    transition: all 500ms ease-out,\r transform-origin 1ms,\r -webkit-transform-origin 1ms; }\n  100% {\n    position: fixed;\n    z-index: 100;\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    top: 1rem;\n    left: 1rem;\n    right: 1rem;\n    bottom: 1rem;\n    box-shadow: 0 0 0 1rem rgba(0, 0, 0, 0.8);\n    background-color: rgba(0, 0, 0, 0.9); } }\n\n@keyframes appear {\n  0% {\n    position: absolute;\n    z-index: 100;\n    display: flex;\n    -webkit-transform: scale(0.1);\n            transform: scale(0.1);\n    transition: all 500ms ease-out,\r -webkit-transform-origin 1ms;\n    transition: all 500ms ease-out,\r transform-origin 1ms;\n    transition: all 500ms ease-out,\r transform-origin 1ms,\r -webkit-transform-origin 1ms; }\n  100% {\n    position: fixed;\n    z-index: 100;\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    top: 1rem;\n    left: 1rem;\n    right: 1rem;\n    bottom: 1rem;\n    box-shadow: 0 0 0 1rem rgba(0, 0, 0, 0.8);\n    background-color: rgba(0, 0, 0, 0.9); } }\n\n@-webkit-keyframes slideDown {\n  0% {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    opacity: 1; }\n  100% {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 100%;\n    opacity: 0; } }\n\n@keyframes slideDown {\n  0% {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    opacity: 1; }\n  100% {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 100%;\n    opacity: 0; } }\n\n@-webkit-keyframes reveal {\n  0% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@keyframes reveal {\n  0% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    opacity: 0; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@media (max-width: 768px) {\n  .images__container {\n    padding: 0; }\n    .images__container .images__wrapper {\n      justify-content: center; }\n      .images__container .images__wrapper .image__container {\n        width: 100%;\n        height: 20rem;\n        background-position-y: unset;\n        margin-bottom: 0; }\n      .images__container .images__wrapper .image__container:focus {\n        outline: initial;\n        border: 5px double orangered; }\n    .images__container .images__pagination__container {\n      margin: 0; }\n      .images__container .images__pagination__container .pagination__wrapper {\n        width: 100%;\n        height: 2rem;\n        margin: 1rem 0;\n        display: flex;\n        justify-content: space-evenly; }\n        .images__container .images__pagination__container .pagination__wrapper .pagination__circle {\n          padding: 0.7rem;\n          margin: 0; }\n      .images__container .images__pagination__container .hide {\n        display: none; }\n  .modal {\n    display: none; }\n    .modal .modal__button--close {\n      font-size: 1.5rem; }\n    .modal .modal__contents {\n      height: unset; } }\n\n@media (max-width: 500px) {\n  .footer {\n    grid-template-columns: auto;\n    grid-template-rows: auto auto auto; }\n    .footer .social {\n      grid-area: 1/1/2/2; }\n    .footer .about {\n      grid-area: 2/1/3/2; }\n    .footer .extra {\n      grid-area: 3/1/4/2; } }\n\n@media (max-width: 400px) {\n  .heading__container {\n    height: 20rem; }\n    .heading__container .banner__wrapper .heading__banner .heading__banner__text {\n      padding-left: 2rem;\n      width: 15rem;\n      font-size: 2rem; }\n  .search__container {\n    padding: 1rem; }\n    .search__container .search__form .search__form__label {\n      font-size: 1rem; }\n  .footer section ul {\n    font-size: 0.6rem; }\n  .footer .social ul {\n    font-size: 1.5rem; } }\n\n@media (max-width: 300px) {\n  .footer .social ul {\n    font-size: 1rem; } }\n\nbody {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  font-family: "Open Sans", sans-serif; }\n\n.noscroll {\n  overflow: hidden; }\n\n.hide {\n  display: none; }\n',""])},function(n,e,t){"use strict";n.exports=function(t){var i=[];return i.toString=function(){return this.map(function(n){var e=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(i=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[t].concat(a).concat([r]).join("\n")}var i;return[t].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},i.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(t[r]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&t[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),i.push(a))}},i}},function(n,e,t){"use strict";n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e,t){n.exports=t.p+"2914b20770cfe3f560b6da4fbbfe0b16.jpg"},function(n,e,o){var t,r,a,l={},c=(t=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=t.apply(this,arguments)),r}),i=(a={},function(n,e){if("function"==typeof n)return n();if(void 0===a[n]){var t=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}a[n]=t}return a[n]}),d=null,m=0,s=[],u=o(6);function f(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=l[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(b(o.parts[a],e))}else{var i=[];for(a=0;a<o.parts.length;a++)i.push(b(o.parts[a],e));l[o.id]={id:o.id,refs:1,parts:i}}}}function p(n,e){for(var t=[],o={},r=0;r<n.length;r++){var a=n[r],i=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(s):t.push(o[i]={id:i,parts:[s]})}return t}function g(n,e){var t=i(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=s[s.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),s.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(n.insertAt.before,t);t.insertBefore(e,r)}}function _(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=s.indexOf(n);0<=e&&s.splice(e,1)}function h(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=function(){0;return o.nc}();t&&(n.attrs.nonce=t)}return v(e,n.attrs),g(n,e),e}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,n){var t,o,r,a,i,s;if(n.transform&&e.css){if(!(a="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=a}if(n.singleton){var l=m++;t=d||(d=h(n)),o=x.bind(null,t,l,!1),r=x.bind(null,t,l,!0)}else r=e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=n,s=document.createElement("link"),void 0===i.attrs.type&&(i.attrs.type="text/css"),i.attrs.rel="stylesheet",v(s,i.attrs),g(i,s),o=function(n,e,t){var o=t.css,r=t.sourceMap,a=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||a)&&(o=u(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,t=s,n),function(){_(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(n),o=function(n,e){var t=e.css,o=e.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),function(){_(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}n.exports=function(n,i){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(i=i||{}).attrs="object"==typeof i.attrs?i.attrs:{},i.singleton||"boolean"==typeof i.singleton||(i.singleton=c()),i.insertInto||(i.insertInto="head"),i.insertAt||(i.insertAt="bottom");var s=p(n,i);return f(s,i),function(n){for(var e=[],t=0;t<s.length;t++){var o=s[t];(r=l[o.id]).refs--,e.push(r)}n&&f(p(n,i),i);for(t=0;t<e.length;t++){var r;if(0===(r=e[t]).refs){for(var a=0;a<r.parts.length;a++)r.parts[a]();delete l[r.id]}}}};var y,w=(y=[],function(n,e){return y[n]=e,y.filter(Boolean).join("\n")});function x(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=w(e,r);else{var a=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var r=e.protocol+"//"+e.host,a=r+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var t,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(t=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:a+o.replace(/^\.\//,""),"url("+JSON.stringify(t)+")")})}},function(n,e,t){"use strict";t.r(e);t(0);var l,o,c,d=document.getElementById("searchForm"),m=document.getElementById("searchInput"),u=document.getElementById("imagesWrapper"),f=document.getElementById("paginationWrapper"),p=document.getElementById("modal"),g=Array.from(f.querySelectorAll(".pagination__circle")),_=document.getElementById("modalPrevBtn"),h=document.getElementById("modalNextBtn"),r=document.getElementById("imagesContainer"),a=document.getElementById("modalContents"),i=document.getElementById("modalImgDesc"),s=document.getElementById("modalImgDate"),v=document.getElementById("modalImgLikes"),b=document.getElementById("modalImgUsername"),y=document.getElementById("modalCloseBtn"),w=document.getElementById("modalImageDetails"),x={left:0,originalOffset:0,velocity:0,timeOfLastDragEvent:0,touchStartX:0,prevTouchX:0,beingTouched:!1,intervalId:null,imageId:null},k=function(n){var e=modal.dataset.id;x.imageId!==e&&(x.imageId=+e),E(n.targetTouches[0].clientX)},E=function(n){null!==x.intervalId&&window.clearInterval(x.intervalId),x.originalOffset=x.left,x.velocity=0,x.timeOfLastDragEvent=Date.now(),x.touchStartX=n,x.beingTouched=!0,x.intervalId=null},I=function(n){var e=n.targetTouches[0].clientX;if(x.beingTouched){var t=Date.now(),o=t-x.timeOfLastDragEvent,r=20*(e-x.prevTouchX)/o,a=e-x.touchStartX+x.originalOffset;x.left=a,x.velocity=r,x.timeOfLastDragEvent=t,x.prevTouchX=e;var i=document.getElementById("modalImage");i.style.position="relative",i.style.left="".concat(x.left,"px")}},L=function(n){x.velocity=x.velocity,x.touchStartX=0,x.beingTouched=!1,x.intervalId=window.setInterval(O,33)},O=function(n){var e=x.left,t=x.velocity,o=x.beingTouched,r=x.prevTouchX,a=!o&&r&&.01<e;t+=.33,!o&&r&&e<-.01&&(e+=t),a&&(e-=t),e<-50&&j("forward"),50<e&&j("backward"),window.clearInterval(x.intervalId)},j=function(n){"forward"===n&&C("next"),"backward"===n&&C("prev"),window.clearInterval(x.intervalId),x.left=0,x.velocity=0,x.intervalId=null,x.originalOffset=0,x.timeOfLastDragEvent=0,x.touchStartX=0,x.prevTouchX=0},B=function(n){p.dataset.id=n.dataset.id;var e=A(n);M(n.dataset),X(),P(e)},T=function(){var e=p.dataset.id;Array.from(u.children).find(function(n){return n.dataset.id===e}).focus(),p.dataset.id="",H(),R(),S()},C=function(n){var t,e,o=Array.from(u.children),r=p.dataset.id,a=o.length-1;S(),o.find(function(n,e){return t=e,n.dataset.id===r}),"next"===n&&(e=t!==a?t+1:0),"prev"===n&&(e=0!==t?t-1:a);var i=o[e];B(i),z()},S=function(n){var e=document.getElementById("modalImage");document.getElementById("previewImage").src="",e.src=""},N=function(n){27===n.keyCode&&(y.focus(),T())},A=function(n){var e=document.createElement("img");e.className="modal__image",e.classList.add("preview"),e.id="previewImage",e.src=n.src;var t=document.getElementById("previewImage");a.replaceChild(e,t);var o=document.createElement("img");o.className="modal__image",o.classList.add("reveal"),o.id="modalImage",o.src=n.dataset.url,o.complete?(U(),o.addEventListener("animationend",function(n){o.classList.remove("reveal"),D()})):o.addEventListener("load",U);var r=document.getElementById("modalImage");return a.replaceChild(o,r),o},U=function n(e){var t=document.getElementById("previewImage"),o=document.getElementById("modalImage");D(),t.style.display="none",o.classList.remove("reveal"),o.removeEventListener("load",n)},M=function(n){var e=n.description,t=n.user_username,o=n.likes,r=n.date;i.innerHTML=e,s.innerHTML='<i class="fa fa-calendar" aria-hidden="true"></i>'.concat(new Date(r).toDateString()),v.innerHTML='<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>'.concat(o),b.innerHTML='<i class="fa fa-user" aria-hidden="true"></i>'.concat(t)},z=function(){i.style.display="none",w.style.display="none"},D=function(n){i.innerHTML?i.style.display="block":i.style.display="none",w.style.display="grid"},P=function(n){n.addEventListener("touchstart",k),n.addEventListener("touchmove",I),n.addEventListener("touchend",L)},R=function(n){var e=document.getElementById("modalImage");e.removeEventListener("touchstart",k),e.removeEventListener("touchmove",I),e.removeEventListener("touchend",L)},X=function(n){p.style.width="calc(100% - 2rem)",p.style.animation="appear 500ms ease-out forwards",document.body.classList.add("noscroll"),document.addEventListener("keydown",N)},H=function(n){p.style.animation="slideDown 500ms ease-out",document.body.classList.remove("noscroll"),document.removeEventListener("keydown",N),p.style.width="0",z()},F={},$=function(n,e){o=e;var t=Q(n);if(t)return l=t,W(),void J(c);q(n)},q=function(e){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pageNum:o,searchQuery:e})};fetch("https://forbulous-api.herokuapp.com/search",n).then(function(n){return n.json()}).then(function(n){console.log(n),n.error?alert(error):n.photos.length?(l=n.photos,c=n.numOfPages,G(e,n.numOfPages),console.log(F),W(),J(n.numOfPages)):alert("Sorry, I'm getting nada for '".concat(e,"'"))})},J=function(n){if(5<=n){var e=g.filter(function(n){return Array.from(n.classList).includes("hide")});e&&e.forEach(function(n){n.classList.remove("hide")})}if(1<=n&&n<5)for(var t=n;t<=5;t++)g[t-1].classList.add("hide");Array.from(f.classList).includes("hide")&&f.classList.remove("hide")},W=function(n){var e;l&&(u.innerHTML="",l.forEach(function(n){var e,t;u.appendChild((e=n,(t=document.createElement("img")).src=e.urls.small,t.classList.add("image__container"),t.setAttribute("class","image__container"),t.setAttribute("tabIndex","0"),t.dataset.type="pic",t.dataset.id=e.id,t.dataset.date=e.date||"Sometime",t.dataset.description=e.description||"",t.dataset.url=e.urls.full,t.dataset.likes=e.likes||0,t.dataset.user_id=e.user.id,t.dataset.user_username=e.user.username||"bobsyouruncle123",t.dataset.user_bio=e.user.bio,t))}),n||((e=Array.from(document.getElementById("imagesWrapper").children))&&e[0]?e[0].focus():m.focus(),window.scroll({top:r.offsetTop,behavior:"smooth"})))},G=function(n,e){var t={pageNum:o,photos:l,numOfPages:e};(F[n]||(F[n]=[t]),F[n])&&(F[n].find(function(n){return n.pageNum===o})||F[n].push(t))},Q=function(n){if(F[n]){var e=F[n].find(function(n){return n.pageNum===o});if(e)return e.photos}return null};document.addEventListener("DOMContentLoaded",function(){var r;console.log("loaded!");var a=!0,i=!1;fetch("https://forbulous-api.herokuapp.com/initial-load",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(n){return n.json()}).then(function(n){console.log(n),o=1,F.initial50=[{pageNum:1,photos:n.photos.slice(0,10),numOfPages:5},{pageNum:2,photos:n.photos.slice(10,20),numOfPages:5},{pageNum:3,photos:n.photos.slice(20,30),numOfPages:5},{pageNum:4,photos:n.photos.slice(30,40),numOfPages:5},{pageNum:5,photos:n.photos.slice(40,50),numOfPages:5}],console.log(F),c=5,l=F.initial50[0].photos,W("initial"),J(n.numOfPages)}),d.addEventListener("submit",function(n){n.preventDefault(),S(),i=!(a=!1),r=m.value,$(r,1),m.blur(),s()}),m.addEventListener("focus",function(n){m.value&&(m.value="")}),f.addEventListener("click",function(n){t(n.target)}),u.addEventListener("click",function(n){if("pic"===n.target.dataset.type){S();var e=n.target;if(p.style.width="calc(100% - 2rem)",768<window.innerWidth)return p.style.transformOrigin="".concat(n.clientX,"px ").concat(n.clientY,"px"),void p.addEventListener("transitionend",function(n){return function n(e,t){"transform-origin"===e.propertyName&&(B(t),p.removeEventListener("transitionend",n))}(n,e)});p.style.display="flex",B(e)}}),p.addEventListener("click",function(n){var e=n.target;switch(e.id){case"modalCloseBtn":return void T();case"modalPrevBtn":return e.blur(),void C("prev");case"modalNextBtn":return e.blur(),void C("next");default:return}}),document.addEventListener("keydown",function(n){var e=!!p.dataset.id;if(13===n.keyCode||37===n.keyCode||39===n.keyCode)return 37===n.keyCode&&e?(_.focus(),void C("prev")):39===n.keyCode&&e?(h.focus(),void C("next")):void(13!==n.keyCode||"pagination__circle"!==document.activeElement.className?13!==n.keyCode||"image__container"!==document.activeElement.className||B(document.activeElement):t(document.activeElement))});var t=function(n){S(),i=!1;var e,t=n.dataset.class,o=+n.dataset.id;"circle"===t&&(a||($(r,o),s()),a&&(e=o,l=F.initial50[e-1].photos,W(),J(F.initial50.length)),s(n))},s=function(n){if(!a&&i||n){if(g.find(function(n){return Array.from(n.classList).includes("active")}).classList.remove("active"),n)return void n.classList.add("active");g[0].classList.add("active")}}})}]);