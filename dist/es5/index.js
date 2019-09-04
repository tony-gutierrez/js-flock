!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t=t||self)["js-flock"]={})}(this,function(t){"use strict";var o=Object.freeze({isStrangled:!0,message:"Promise have timed out"});function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t){return!(!t||"object"!==r(t)&&"function"!=typeof t||!Object.prototype.hasOwnProperty.call(t,"constructor")||"function"!=typeof t.constructor||!Function.prototype.toString.call(t.constructor).includes("[native code]"))}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(e,n,o,t){var i=3<arguments.length&&void 0!==t?t:new Set;if(i.has(n))return n;if(o=o||{},Object[e](n),i.add(n),n===Function.prototype)return n;var r=Object.getOwnPropertyNames(n);if(Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n))),r.forEach(function(t){var r=n[t];!r||"object"!==c(r)&&"function"!=typeof r||"undefined"==typeof ArrayBuffer||ArrayBuffer.isView(r)||"function"==typeof o.exclude&&o.exclude(t,n)||a(e,r,o,i)}),o.proto){var u=Object.getPrototypeOf(n);u&&!f(u)&&a(e,u,o,i)}return n}function n(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(n){return function(t,r){var e=Object.prototype.toString.call(r);if("Function"===t?"function"!=typeof r:"[object ".concat(t,"]")!==e)throw new TypeError("".concat(n,": expected [").concat(t,"] but got ").concat(e))}}function s(n,o){return y("Function",n),function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return function(t,r,u){var e=this;return new Promise(function(o,i){r.push(function(t){if(t)return i(t);for(var r=arguments.length,e=new Array(1<r?r-1:0),n=1;n<r;n++)e[n-1]=arguments[n];return o(u&&u.multiArgs?e:e[0])}),t.apply(e,r)})}.call(this,n,r,o)}}var i=function(){function r(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).startFrom;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),this._currentNumber=Number(t)||0}return function(t,r,e){r&&n(t.prototype,r),e&&n(t,e)}(r,[{key:"next",value:function(){if(this._currentNumber>=Number.MAX_SAFE_INTEGER)throw Error("Number iterator exhausted");return this._currentNumber++,this._currentNumber}},{key:"current",value:function(){return this._currentNumber}}]),r}(),y=e("promisify"),l=Symbol("promisified");s.all=function(e,n){y("Object",e);var t=n||{},o=t.suffix,i=t.exclude,u=t.include,r=t.proto;if(o="string"==typeof o?o:"Async",i=Array.isArray(i)?i:void 0,u=Array.isArray(u)?u:void 0,Object.getOwnPropertyNames(e).forEach(function(t){if(function(r,t,e){return"function"==typeof r&&!0!==r[l]&&(!e||e.some(function(t){return t===r.name}))&&(!t||t.every(function(t){return t!==r.name}))}(e[t],i,u)){for(var r="".concat(t).concat(o);r in e;){if(!0===e[r][l])return;r="".concat(r,"Promisified")}e[r]=s(e[t],n),e[r][l]=!0}}),r){var c=Object.getPrototypeOf(e);c&&!f(c)&&s.all(c,n)}return e};var u=s,p=e("rerun");function b(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=[],n=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(n=(u=c.next()).done)&&(e.push(u.value),!r||e.length!==r);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return e}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,r,e){return r===e?0:r<e?-t:null==r?1:null==e?-1:t}function d(t,r,e,n,o,i){return A(t(o),t(i),r,e,n,o,i)}function h(t,r,e,n,o,i){return A(o[t],i[t],r,e,n,o,i)}function g(t,r,e,n,o,i){var u=t.asc||t.desc,c=t.asc?1:-1;if(!u)throw Error("sort: Invalid 'by' sorting configuration.\n      Expecting object with 'asc' or 'desc' key");return w(u)(u,r,e,c,o,i)}function S(t,r,e){return Array.isArray(r)?(Array.isArray(e)&&e.length<2&&(e=b(e,1)[0]),n=e?"string"==typeof e?function(t,r,e,n){return v(t,e[r],n[r])}.bind(void 0,t,e):"function"==typeof e?function(t,r,e,n){return v(t,r(e),r(n))}.bind(void 0,t,e):w(e[0]).bind(void 0,e.shift(),e,0,t):v.bind(void 0,t),r.sort(n)):r;var n}var w=function(t){var r=m(t);return"string"===r?h:"function"===r?d:g},A=function(t,r,e,n,o,i,u){return t===r||null==t&&null==r?e.length>n?w(e[n])(e[n],e,n+1,o,i,u):0:v(o,t,r)};function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,r){var e=t[r];"function"!=typeof e||function(t){return/^class /.test(Function.prototype.toString.call(t))}(e)||(t[r]=e.bind(t))}var O=e("waitFor"),N={castBoolean:function(t){return!0===t||"true"===t},collar:function(t,r){var e=1<arguments.length&&void 0!==r?r:5e3,n=new Promise(function(t,r){setTimeout(r,e,o)});return Promise.race([n,t])},deepFreeze:function(t,r){return a("freeze",t,r)},deepPreventExtensions:function(t,r){return a("preventExtensions",t,r)},deepSeal:function(t,r){return a("seal",t,r)},delay:function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=Number(r);if(Number.isNaN(t)){var e=Object.prototype.toString.call(r);throw new TypeError("delay: expected [Number] but got ".concat(e))}return new Promise(function(t){setTimeout(t,r)})},empty:function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return r.forEach(function(t){Array.isArray(t)&&t.splice(0,t.length)}),1===r.length?r[0]:r},last:function(t,r){var e=Array.isArray(t)?t.length:0;if(e){if("function"!=typeof r)return t[e-1];for(;--e;)if(r(t[e]))return t[e]}},NumberIterator:i,promiseAll:function(r){if(Array.isArray(r))return Promise.all(r);var n=Object.keys(r),t=n.map(function(t){return r[t]});return Promise.all(t).then(function(t){var e={};return t.forEach(function(t,r){e[n[r]]=t}),e})},promisify:u,rerun:function(t){p("Function",t);var r,e,n,o,i=0;function u(){if(!r&&(!o||o(i))&&(i+=1,!1!==t()))return void setTimeout(u,n);e&&e(i)}return{every:function(t){if(t=Number(t),p("Number",t),!(0<=t))throw Error("rerun: every() need to be called with positive number");return n=t,this},asLongAs:function(t){return p("Function",t),o=t,this},start:function(){if(void 0===n)throw Error("rerun: every() is required before calling start()");return r=!1,u(),this},stop:function(){return r=!0,this},onStop:function(t){return p("Function",t),e=t,this}}},singular:function(n){function o(){return i=!1}var i=!1;return function(){if(!i){i=!0;for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];r.unshift(o),n.apply(this,r)}}},sort:function(o){return{asc:function(t){return S(1,o,t)},desc:function(t){return S(-1,o,t)},by:function(t){if(!Array.isArray(o))return o;if(!Array.isArray(t))throw Error("sort: Invalid usage of 'by' sorter. Array syntax is required.\n          Did you mean to use 'asc' or 'desc' sorter instead?");if(1===t.length){var r=t[0].asc?1:-1,e=t[0].asc||t[0].desc;if(!e)throw Error("sort: Invalid 'by' sorting configuration.\n            Expecting object with 'asc' or 'desc' key");return S(r,o,e)}var n=g.bind(void 0,t.shift(),t,0,void 0);return o.sort(n)}}},toEnum:function(t){var r=function(t){if(Array.isArray(t)){var r={};return t.forEach(function(t){r[t]=Symbol(t)}),r}return"object"===E(t)?Object.assign({},t):{}}(t),e=Object.keys(r).filter(function(t){return"function"!=typeof r[t]}),n=e.map(function(t){return r[t]});if(new Set(n).size!==n.length)throw new TypeError("toEnum: Duplicate values detected");Object.freeze(e),Object.freeze(n),Object.keys(r).forEach(function(t){return j(r,t)});var o={keySet:void 0,valueSet:void 0};return r.keys=function(){return e},r.values=function(){return n},r.haveKey=function(t){return o.keySet=o.keySet||new Set(e),o.keySet.has(t)},r.exists=function(t){return o.valueSet=o.valueSet||new Set(n),o.valueSet.has(t)},Object.freeze(r)},waitFor:function(u,t){O("Function",u);var c=Number(t&&t.interval)||50,f=Date.now()+(Number(t&&t.timeout)||5e3);return new Promise(function(e,n){function o(){return i=!0}var i=!1;!function t(){var r=u(o);if(!i)return r?e(r):Date.now()>f?n(new Error("Timed out!")):void setTimeout(t,c)}()})}},P=N.castBoolean,x=N.collar,F=N.deepFreeze,k=N.deepPreventExtensions,T=N.deepSeal,z=N.delay,_=N.empty,I=N.last,B=N.NumberIterator,D=N.promiseAll,q=N.promisify,M=N.rerun,C=N.singular,G=N.sort,K=N.toEnum,L=N.waitFor;t.NumberIterator=B,t.castBoolean=P,t.collar=x,t.deepFreeze=F,t.deepPreventExtensions=k,t.deepSeal=T,t.default=N,t.delay=z,t.empty=_,t.last=I,t.promiseAll=D,t.promisify=q,t.rerun=M,t.singular=C,t.sort=G,t.toEnum=K,t.waitFor=L,Object.defineProperty(t,"__esModule",{value:!0})});
