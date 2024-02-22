/*! For license information please see modalia.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ModalComponent=t():e.ModalComponent=t()}(self,(()=>(()=>{"use strict";var e={452:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,'.modal {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(7px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal.hide {\n  animation: modal-disappear 1s;\n}\n\n.modal.top {\n  align-items: flex-start;\n}\n\n.modal.bottom {\n  align-items: flex-end;\n}\n\n.modal.corner-top-left {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n\n.modal.corner-top-right {\n  align-items: flex-start;\n  justify-content: flex-end;\n}\n\n.modal.corner-bottom-left {\n  align-items: flex-end;\n  justify-content: flex-start;\n}\n\n.modal.corner-bottom-right {\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n\n.modal-content.top {\n  animation: modal-slide-up-to-down 1s;\n}\n\n.modal-content.bottom {\n  animation: modal-slide-down-to-up 1s;\n}\n\n.modal-content.corner-top-left {\n  animation: modal-slide-left-to-right 1s;\n}\n\n.modal-content.corner-top-right {\n  animation: modal-slide-right-to-left 1s;\n}\n\n.modal-content.corner-bottom-left {\n  animation: modal-slide-left-to-right 1s;\n}\n\n.modal-content.corner-bottom-right {\n  animation: modal-slide-right-to-left 1s;\n}\n\n@keyframes modal-disappear {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes modal-appear {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes modal-slide-up-to-down {\n  0% {\n    transform: translateY(-500px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@keyframes modal-slide-down-to-up {\n  0% {\n    transform: translateY(500px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@keyframes modal-slide-left-to-right {\n  0% {\n    transform: translateX(-500px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes modal-slide-right-to-left {\n  0% {\n    transform: translateX(500px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n\n.modal-content {\n  background-color: #282828;\n  padding: 5px 25px;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 25px;\n  position: relative;\n  overflow: hidden;\n  margin: 20px;\n  animation: modal-appear 1s;\n}\n\n.modal-content span {\n  cursor: pointer;\n  margin-left: auto;\n  font-size: 25px;\n  font-weight: bold;\n  top: 5px;\n  right: 15px;\n  position: absolute;\n  color: white;\n}\n\n.title {\n  all: unset;\n  font-size: 1.3rem;\n  color: white;\n  font-family: "Raleway";\n  padding-top: 20px;\n  font-weight: bold;\n}\n\n.commentary {\n  all: unset;\n  font-size: 1.1rem;\n  color: rgba(255, 255, 255, 0.8);\n  padding: 5px 0 20px 0;\n  font-family: "Inter";\n}\n\n.timer-bar {\n  width: 100%;\n  height: 10px;\n  background: #383838;\n  border-radius: 5px;\n  position: absolute;\n  bottom: 0;\n}\n\n.timer-bar-fill {\n  width: 0;\n  height: 100%;\n  background: #ffd6ff;\n  background: linear-gradient(\n    90deg,\n    rgba(255, 214, 255, 1) 0%,\n    rgba(200, 182, 255, 1) 50%,\n    rgba(187, 208, 255, 1) 100%\n  );\n  border-radius: 5px;\n  position: absolute;\n  bottom: 0;\n  filter: blur(0.5px);\n}\n',""]);const u=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},287:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function h(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}function v(){}function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var x=g.prototype=new v;x.constructor=g,y(x,h.prototype),x.isPureReactComponent=!0;var w=Array.isArray,_=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,a={},i=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,o)&&!j.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:i,ref:u,props:a,_owner:S.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return i=i(c=e),e=""===a?"."+O(c,0):a,w(i)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),P(i,t,o,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",w(e))for(var l=0;l<e.length;l++){var s=a+O(u=e[l],l);c+=P(u,t,o,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(u=e.next()).done;)c+=P(u=u.value,t,o,s=a+O(u,l++),i);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function R(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},A={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=h,t.Fragment=o,t.Profiler=i,t.PureComponent=g,t.StrictMode=a,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)_.call(t,l)&&!j.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},540:(e,t,n)=>{e.exports=n(287)},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],u=0;u<e.length;u++){var c=e[u],l=r.base?c[0]+r.base:c[0],s=a[l]||0,f="".concat(l," ").concat(s);a[l]=s+1;var p=n(f),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var m=o(d,r);r.byIndex=u,t.splice(u,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var u=n(a[i]);t[u].references--}for(var c=r(e,o),l=0;l<a.length;l++){var s=n(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},159:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r={};return(()=>{n.r(r),n.d(r,{default:()=>j});var e=n(540),t=n(72),o=n.n(t),a=n(825),i=n.n(a),u=n(659),c=n.n(u),l=n(56),s=n.n(l),f=n(159),p=n.n(f),d=n(113),m=n.n(d),y=n(452),b={};function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}function g(e){var t=function(e,t){if("object"!=h(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==h(t)?t:String(t)}function x(e,t,n){return t=_(t),function(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,w()?Reflect.construct(t,n||[],_(e).constructor):t.apply(e,n))}function w(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(w=function(){return!!e})()}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}b.styleTagTransform=m(),b.setAttributes=s(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),o()(y.A,b),y.A&&y.A.locals&&y.A.locals;const j=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),x(this,n,arguments)}var r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(n,t),r=n,(o=[{key:"render",value:function(){var t=this.props,n=t.show,r=t.position,o=t.title,a=t.commentary,i=t.backgroundColor,u=t.titleColor,c=t.commentaryColor,l="modal-content ".concat(r),s="modal ".concat(r||"center");return e.createElement(e.Fragment,null,n?e.createElement("div",{className:s},e.createElement("div",{className:l,style:{background:i||"#282828"}},e.createElement("p",{style:{color:u||"#fff"},className:"title"},o),a?e.createElement("p",{className:"commentary",style:{color:c||"rgba(255, 255, 255, 0.8)"}},a):null,e.createElement("span",{className:"close",onClick:function(){return window.dispatchEvent(new CustomEvent("modalClose"))}},"×"))):null)}}])&&v(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}(e.Component)})(),r})()));