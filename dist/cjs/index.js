"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var o=require("react/jsx-runtime"),n=function(){return n=Object.assign||function(o){for(var n,e=1,r=arguments.length;e<r;e++)for(var t in n=arguments[e])Object.prototype.hasOwnProperty.call(n,t)&&(o[t]=n[t]);return o},n.apply(this,arguments)},e=function(o){return{backgroundColor:o?o:"#eee"}},r=function(o){return{color:o||"#000"}},t=function(o){return{borderRadius:"string"==typeof o?{sm:"4px",md:"8px",lg:"12px",xl:"20px",full:"50%"}[o]:"".concat(o,"px")}},l=function(o){var n="0 5px 10px ".concat({sm:"-2.5px",md:"-1px",lg:"1px",xl:"2.5px"}[(null==o?void 0:o.size)||"md"]," ").concat((null==o?void 0:o.color)?null==o?void 0:o.color:"#eee"," ");return{boxShadow:o?n:""}},i=function(o){return{border:"".concat("string"==typeof(null==o?void 0:o.size)?{sm:1,md:2,lg:4,xl:6}[(null==o?void 0:o.size)||"sm"]:null==o?void 0:o.size,"px ").concat((null==o?void 0:o.color)?null==o?void 0:o.color:"#000"," ").concat((null==o?void 0:o.style)?null==o?void 0:o.style:"solid")}},d=function(o){return{width:o?"string"==typeof o?{sm:"5rem",md:"15rem",lg:"25rem",xl:"35rem",full:"100%"}[o]:"".concat(o,"px"):"auto"}},u=function(o){return n({},o?{alignItems:"center",justifyContent:"center"}:{})},s=function(o){return{gap:"sm"===o?"0.5rem":"md"===o?"1.25rem":"lg"===o?"2.5rem":"xl"===o?"4rem":"number"==typeof o?"".concat(o,"px"):"1.25rem"}},a=function(o,a,c){var m=(null==a?void 0:a.includes("bgColor"))?{}:(null==c?void 0:c.bgColor)?e(null==c?void 0:c.bgColor):e(null==o?void 0:o.bgColor),g=(null==a?void 0:a.includes("border"))?{}:(null==c?void 0:c.border)?i(null==c?void 0:c.border):i(null==o?void 0:o.border),p=(null==a?void 0:a.includes("textColor"))?{}:(null==c?void 0:c.textColor)?r(null==c?void 0:c.textColor):r(null==o?void 0:o.textColor),f=(null==a?void 0:a.includes("roundness"))?{}:(null==c?void 0:c.roundness)?t(null==c?void 0:c.roundness):t(null==o?void 0:o.roundness),v=(null==a?void 0:a.includes("shadow"))?{}:(null==c?void 0:c.shadow)?l(null==c?void 0:c.shadow):l(null==o?void 0:o.shadow),x=(null==a?void 0:a.includes("width"))?{}:(null==c?void 0:c.width)?d(null==c?void 0:c.width):d(null==o?void 0:o.width),h=(null==a?void 0:a.includes("centering"))?{}:(null==c?void 0:c.centering)?u(null==c?void 0:c.centering):u(null==o?void 0:o.centering),b=(null==a?void 0:a.includes("gap"))?{}:(null==c?void 0:c.gap)?s(null==c?void 0:c.gap):s(null==o?void 0:o.gap);return n(n(n(n(n(n(n(n({},m),g),p),f),v),x),h),b)};
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
***************************************************************************** */function c(o,n){void 0===n&&(n={});var e=n.insertAt;if(o&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css","top"===e&&r.firstChild?r.insertBefore(t,r.firstChild):r.appendChild(t),t.styleSheet?t.styleSheet.cssText=o:t.appendChild(document.createTextNode(o))}}c(".Button {\n  font-size: 1.02em;\n  border: 0;\n}\n");c(".IconButton {\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  font-size: 1.02em;\n}\n");c(".floatingButton {\n  position: absolute;\n  font-size: 1.02em;\n  border: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n");c(".stack {\n  display: flex;\n  background-color: #fff;\n}\n");c(".Box {\n  display: grid;\n  place-items: center;\n  place-content: center;\n  border-radius: 10px;\n  width: fit-content;\n  background-color: #eee;\n}\n");var m=function(o){for(var n="",e=0;e<=(o||1);e++)n+="auto ";return n};c(".grid {\n  display: grid;\n}\n");c('@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");\n\n*,\n*::before,\n*::after {\n  font-family: "Roboto", sans-serif;\n}\n\nbutton {\n  cursor: pointer;\n}\n'),exports.Box=function(e){var r=e.children,t=e.border,l=e.size,i=e.roundness,d=e.shadow,u=e.bgColor,s={border:t,textColor:e.textColor,bgColor:u,roundness:i,shadow:d},c=function(o){return{padding:"sm"===o?"1rem":"md"===o?"1.5rem":"lg"===o?"2rem":"xl"===o?"2.5rem":"1.5rem"}}(l),m=a(s,["width","centering","gap"]);return o.jsx("div",n({style:n(n({},c),m),className:"Box"},{children:r}),void 0)},exports.Button=function(e){var r=e.children,t=e.border,l=e.size,i=e.roundness,d=e.shadow,u=e.bgColor,s=e.textColor,c=e.func,m={border:t,textColor:s,bgColor:u,roundness:i,shadow:d},g=function(o){return{padding:"sm"===o?"0.5rem 0.75rem":"md"===o?"0.75rem 1.2rem":"lg"===o?"1rem 2rem":"xl"===o?"1.5rem 3rem":"0.75rem 1.2rem"}}(l),p=a(m,["width","centering","gap"]);return o.jsx("button",n({onClick:c,style:n(n({},g),p),className:"Button"},{children:r}),void 0)},exports.FloatingButton=function(e){var r=e.position,t=e.children,l=e.border,i=e.size,d=e.roundness,u=e.shadow,s=e.bgColor,c=e.textColor,m=e.func,g={roundness:d,shadow:u,bgColor:s,textColor:c,border:l},p=function(o){return{padding:"sm"===o?"0.5rem 0.75rem":"md"===o?"0.75rem 1.2rem":"lg"===o?"1rem 2rem":"xl"===o?"1.5rem 3rem":"0.75rem 1.2rem"}}(i),f=a(g,["width","centering","gap"]),v=function(o){return n({},"top left"===o?{top:"auto",left:"auto",bottom:"auto",right:"auto"}:"top right"===o?{top:"auto",left:"auto",bottom:"auto",right:"30px"}:"bottom left"===o?{top:"auto",left:"auto",bottom:"30px",right:"auto"}:"bottom right"===o?{top:"auto",left:"auto",bottom:"30px",right:"30px"}:"string"!=typeof o?o:{top:"auto",left:"auto",bottom:"30px",right:"30px"})}(r);return o.jsx("button",n({className:"floatingButton",onClick:m,style:n(n(n({},v),f),p)},{children:t}),void 0)},exports.Grid=function(e){var r=e.children,t=e.gap,l=e.border,i=e.roundness,d=e.shadow,u=e.bgColor,s=e.textColor,c=e.width,g=e.centering,p=e.cells,f=e.columns,v=e.rows,x=a({border:l,textColor:s,bgColor:u,roundness:i,shadow:d,width:c,centering:g,gap:t},[],{bgColor:"transparent"}),h=function(o){var e={gridTemplateColumns:m(o),gridTemplateRows:m(o)};return n({},e)}(p||Math.floor(Math.sqrt(Array(r).length))),b=function(o){var e={gridTemplateColumns:m(o)};return n({},e)}(f),C=function(o){var e={gridTemplateRows:m(o)};return n({},e)}(v);return console.log("cells",h),console.log("columns",b),console.log("rows",C),o.jsx("div",n({className:"grid",style:n(n(n(n({},x),h),b),C)},{children:r}),void 0)},exports.IconButton=function(e){var r=e.icon,t=e.func,l=e.border,i=e.size,d={border:l,roundness:e.roundness,shadow:e.shadow,bgColor:e.bgColor,textColor:e.textColor},u=function(o){var n="sm"===o?"2.1rem":"md"===o?"2.75rem":"lg"===o?"3.25rem":"xl"===o?"4rem":"2.75rem";return{width:n,height:n}}(i),s=a(d,["width","centering","gap"]);return o.jsx("button",n({onClick:t,style:n(n({},s),u),className:"IconButton"},{children:r}),void 0)},exports.Stack=function(e){var r=e.children,t=e.direction,l=e.wrap,i=e.gap,d=e.border,u=e.roundness,s=e.shadow,c=e.bgColor,m={border:d,textColor:e.textColor,bgColor:c,roundness:u,shadow:s,width:e.width,centering:e.centering,gap:i},g=function(o){return{flexDirection:"horizontal"===o?"row":"vertical"===o?"column":"row"}}(t),p=function(o){return{flexWrap:o?"wrap":"no-wrap"}}(l),f=a(m,[],{bgColor:"transparent"});return o.jsx("div",n({className:"stack",style:n(n(n({},g),p),f)},{children:r}),void 0)};
//# sourceMappingURL=index.js.map
