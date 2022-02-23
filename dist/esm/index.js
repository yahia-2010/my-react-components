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
***************************************************************************** */var n=function(){return n=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},n.apply(this,arguments)},r=function(e){return{backgroundColor:e}},t=function(e){return{color:e}},o=function(e){return{boxShadow:"0 5px 10px ".concat("sm"===(null==e?void 0:e.size)?"-2.5px":"md"===(null==e?void 0:e.size)?"-1px":"lg"===(null==e?void 0:e.size)?"1px":"xl"===(null==e?void 0:e.size)?"12.5px":""," ").concat(null==e?void 0:e.color," ")}},i=function(e){return{border:"".concat("sm"===(null==e?void 0:e.size)?1:"md"===(null==e?void 0:e.size)?2:"lg"===(null==e?void 0:e.size)?4:"xl"===(null==e?void 0:e.size)?7.5:null==e?void 0:e.size,"px ").concat(null==e?void 0:e.color," ").concat(null==e?void 0:e.style)}};function l(e,n){void 0===n&&(n={});var r=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}l("button {\n  padding: 0.75rem 1.1rem;\n  background-color: #eee;\n  font-size: 1.02em;\n  border: 0;\n}\n");var d=function(l){var d=l.children;l.styling;var c=l.func,u=l.size,s=l.bg,a=l.textColor,m=l.roundness,p=l.shadow,v=l.border,f=function(e){return{padding:"sm"===e?"0.5rem 0.75rem":"md"===e?"0.75rem 1.2rem":"lg"===e?"1rem 2rem":"xl"===e?"1.5rem 3rem":"0.75rem 1.2rem"}}(u),x=r(s),g=t(a),h=function(e){return{borderRadius:"sm"===e?"4px":"md"===e?"8px":"lg"===e?"12px":"xl"===e?"20px":"".concat(e,"px")}}(m),b=o(p),y=i(v);return e("button",n({onClick:c,style:n(n(n(n(n(n({},f),g),x),h),b),y)},{children:d}),void 0)};l("button {\n  border-radius: 50%;\n  background-color: #eee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n");var c=function(l){var d=l.icon,c=l.func,u=l.size,s=l.bg,a=l.shadow,m=l.border,p=l.textColor;l.styling;var v=r(s),f=o(a),x=i(m),g=function(e){var n="sm"===e?"2.1rem":"md"===e?"2.75rem":"lg"===e?"3.25rem":"xl"===e?"4rem":"2.75rem";return{width:n,height:n}}(u),h=t(p);return e("button",n({onClick:c,style:n(n(n(n(n({},v),x),f),g),h)},{children:d}),void 0)};export{d as Button,c as IconButton};
//# sourceMappingURL=index.js.map
