(this.webpackJsonpphomtoshop=this.webpackJsonpphomtoshop||[]).push([[0],{10:function(e,a,n){},11:function(e,a,n){},13:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),i=n(5),c=n.n(i),u=(n(10),n(4)),s=n(3),m=(n(11),n(0)),o=function(e){var a=e.min,n=e.max,t=e.value,r=e.handleChange;return Object(m.jsx)("div",{className:"slider-container",children:Object(m.jsx)("input",{min:a,max:n,value:t,onChange:r,type:"range",className:"slider"})})},l=function(e){var a=e.name,n=e.active,t=e.handleClick;return Object(m.jsx)("button",{onClick:t,className:"sidebar-item ".concat(n?"active":""),children:a})},p=[{name:"Brightness",property:"brightness",value:100,range:{min:0,max:200},unit:"%"},{name:"Contrast",property:"contrast",value:100,range:{min:0,max:200},unit:"%"},{name:"Saturation",property:"saturate",value:100,range:{min:0,max:200},unit:"%"},{name:"Grayscale",property:"grayscale",value:0,range:{min:0,max:100},unit:"%"},{name:"Sepia",property:"sepia",value:0,range:{min:0,max:100},unit:"%"},{name:"Hue Rotate",property:"hue-rotate",value:0,range:{min:0,max:360},unit:"deg"},{name:"Blur",property:"blur",value:0,range:{min:0,max:20},unit:"px"}];var j=function(){var e=Object(t.useState)(p),a=Object(s.a)(e,2),n=a[0],r=a[1],i=Object(t.useState)(0),c=Object(s.a)(i,2),j=c[0],v=c[1],b=n[j];return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"main-image",style:{filter:n.map((function(e){return"".concat(e.property,"(").concat(e.value).concat(e.unit,")")})).join("")}}),Object(m.jsx)("div",{className:"sidebar",children:n.map((function(e,a){return Object(m.jsx)(l,{name:e.name,active:a===j,handleClick:function(){return v(a)}},a)}))}),Object(m.jsx)(o,{min:b.range.min,max:b.range.max,value:b.value,handleChange:function(e){var a=e.target;r((function(e){return e.map((function(e,n){return n!==j?e:Object(u.a)(Object(u.a)({},e),{},{value:a.value})}))}))}})]})};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(j,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a694b6a5.chunk.js.map