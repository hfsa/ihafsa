(this.webpackJsonpihafsa=this.webpackJsonpihafsa||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(8),l=n.n(o),r=(n(14),n(4)),i=n(3),u=n(1);n(5);function s(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),o=n[0],l=n[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),s=i[0],m=i[1],d=e.id,f=e.done,h=e.text,E=e.onChange,b=e.onDelete,g=e.onTextChanged,p=[];f&&p.push("completed"),o&&p.push("editing");return c.a.createElement("li",{onDoubleClick:function(){l(!0),m(h)},className:p.join(" ")},c.a.createElement("div",{className:"view"},c.a.createElement("input",{id:"todo-".concat(d),className:"toggle",type:"checkbox",checked:f,onChange:E}),c.a.createElement("label",{htmlFor:"todo-".concat(d),className:"label-text"},h),c.a.createElement("button",{className:"destroy",onClick:b})),o&&c.a.createElement("input",{onKeyPress:function(e){"Enter"===e.key&&(g(s),m(""),l(!1))},value:s,onChange:function(e){return m(e.target.value)},type:"text",className:"edit"}))}function m(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(""),m=Object(u.a)(l,2),d=m[0],f=m[1],h=Object(a.useState)([]),E=Object(u.a)(h,2),b=E[0],g=E[1],p=b.filter((function(e){return!e.done})),v=function(e){if(0!==e.length){var t={id:"".concat(+new Date),done:!1,text:e};o([].concat(Object(i.a)(n),[t])),g([].concat(Object(i.a)(b),[t])),f("")}};return c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:"",value:d,onChange:function(e){f(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&v(d)}})),c.a.createElement("section",{className:"main"},c.a.createElement("input",{id:"toggle-all",className:"toggle-all",type:"checkbox"}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),c.a.createElement("ul",{className:"todo-list"},n.map((function(e){return c.a.createElement(s,{key:e.id,id:e.id,text:e.text,done:e.done,onChange:function(){return function(e){var t=n.indexOf(e),a=Object(i.a)(n);a[t]=Object(r.a)(Object(r.a)({},e),{},{done:!e.done}),o(a),g(a)}(e)},onDelete:function(){return function(e){o(n.filter((function(t){return t!==e}))),g(b.filter((function(t){return t!==e})))}(e)},onTextChanged:function(t){return function(e,t){var a=n.indexOf(e),c=Object(i.a)(n);c[a]=Object(r.a)(Object(r.a)({},e),{},{text:t}),o(c),g(c)}(e,t)}})})))),c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},c.a.createElement("strong",null,p.length)," item left"),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){o(b)},className:"selected"},"All")),c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){var e=b.filter((function(e){return!e.done}));console.log(e,"inside active items"),o(e)}},"Active")),c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){var e=b.filter((function(e){return e.done}));o(e)}},"Completed"))),c.a.createElement("button",{onClick:function(){o(n.filter((function(e){return!e.done}))),g(b.filter((function(e){return!e.done})))},className:"clear-completed"},"Clear completed")))}var d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.e19e2a98.chunk.js.map