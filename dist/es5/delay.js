!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((e=e||self).delay=e.delay||{},e.delay.js=t())}(this,function(){"use strict";return function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,e=Number(t);if(Number.isNaN(e)){var o=Object.prototype.toString.call(t);throw new TypeError("delay: expected [Number] but got ".concat(o))}return new Promise(function(e){setTimeout(e,t)})}});
