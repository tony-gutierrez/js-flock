!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):((t=t||self).rerun=t.rerun||{},t.rerun.js=n())}(this,function(){"use strict";var r,c=(r="rerun",function(t,n){var e=Object.prototype.toString.call(n);if("Function"===t?"function"!=typeof n:"[object ".concat(t,"]")!==e)throw new TypeError("".concat(r,": expected [").concat(t,"] but got ").concat(e))});return function(t){c("Function",t);var n,e,r,o,i=0;function u(){if(!n&&(!o||o(i))&&(i+=1,!1!==t()))return void setTimeout(u,r);e&&e(i)}return{every:function(t){if(t=Number(t),c("Number",t),!(0<=t))throw Error("rerun: every() need to be called with positive number");return r=t,this},asLongAs:function(t){return c("Function",t),o=t,this},start:function(){if(void 0===r)throw Error("rerun: every() is required before calling start()");return n=!1,u(),this},stop:function(){return n=!0,this},onStop:function(t){return c("Function",t),e=t,this}}}});
