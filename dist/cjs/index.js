"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),t=function(){return t=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},t.apply(this,arguments)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("button {\n  padding: 0.75rem 1.1rem;\n  background-color: #eee;\n  font-size: 1.02em;\n  border: 0;\n}\n");exports.Button=function(r){var n=r.label;r.styling;var o=r.func,d=r.size,i=r.bg,s=r.textColor,c=r.roundness,u=function(e){return"sm"===e?"0.5rem 0.75rem":"md"===e?"0.75rem 1.2rem":"lg"===e?"1rem 2rem":"xl"===e?"1.5rem 3rem":"0"}(d),l=i,a=s,m=function(e){return"sm"===e?"4px":"md"===e?"8px":"lg"===e?"12px":"xl"===e?"20px":"".concat(e,"px")}(c);return e.jsx("button",t({onClick:o,style:{padding:u?"0.75rem 1.1rem":"0",color:a,backgroundColor:l,borderRadius:m}},{children:n}),void 0)};
//# sourceMappingURL=index.js.map
