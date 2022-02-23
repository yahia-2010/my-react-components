import{jsx as e}from"react/jsx-runtime";
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
***************************************************************************** */var r=function(){return r=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},r.apply(this,arguments)};!function(e,r){void 0===r&&(r={});var t=r.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("button {\n  padding: 0.75rem 1.1rem;\n  background-color: #eee;\n  font-size: 1.02em;\n  border: 0;\n}\n");var t=function(t){var n=t.label;t.styling;var o=t.func,d=t.size,i=t.bg,a=t.textColor,c=t.roundness,m=function(e){return"sm"===e?"0.5rem 0.75rem":"md"===e?"0.75rem 1.2rem":"lg"===e?"1rem 2rem":"xl"===e?"1.5rem 3rem":"0"}(d),l=i,s=a,u=function(e){return"sm"===e?"4px":"md"===e?"8px":"lg"===e?"12px":"xl"===e?"20px":"".concat(e,"px")}(c);return e("button",r({onClick:o,style:{padding:m?"0.75rem 1.1rem":"0",color:s,backgroundColor:l,borderRadius:u}},{children:n}),void 0)};export{t as Button};
//# sourceMappingURL=index.js.map
