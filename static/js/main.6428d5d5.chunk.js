(this.webpackJsonpihafsa=this.webpackJsonpihafsa||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(8),o=n.n(l),r=n(4),i=n(3),u=n(1);n(5);function s(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),l=n[0],o=n[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),s=i[0],m=i[1],d=e.id,f=e.done,b=e.text,E=e.onChange,p=e.onDelete,h=e.onTextChanged,g=[];f&&g.push("completed"),l&&g.push("editing");return c.a.createElement("li",{onDoubleClick:function(){o(!0),m(b)},className:g.join(" ")},c.a.createElement("div",{className:"view"},c.a.createElement("input",{id:"todo-".concat(d),className:"toggle",type:"checkbox",checked:f,onChange:E}),c.a.createElement("label",{htmlFor:"todo-".concat(d),className:"label-text"},b),c.a.createElement("button",{className:"destroy",onClick:p})),l&&c.a.createElement("input",{onKeyPress:function(e){"Enter"===e.key&&(h(s),m(""),o(!1))},value:s,onChange:function(e){return m(e.target.value)},type:"text",className:"edit"}))}function m(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(""),m=Object(u.a)(o,2),d=m[0],f=m[1],b=Object(a.useState)([]),E=Object(u.a)(b,2),p=E[0],h=E[1],g=p.filter((function(e){return!e.done})),O=function(e){if(0!==e.length){var t={id:"".concat(+new Date),done:!1,text:e};l([].concat(Object(i.a)(n),[t])),h([].concat(Object(i.a)(p),[t])),f("")}};return c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:"",value:d,onChange:function(e){f(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&O(d)}})),c.a.createElement("section",{className:"main"},c.a.createElement("input",{id:"toggle-all",className:"toggle-all",type:"checkbox"}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),c.a.createElement("ul",{className:"todo-list"},n.map((function(e){return c.a.createElement(s,{key:e.id,id:e.id,text:e.text,done:e.done,onChange:function(){return function(e){var t=n.indexOf(e),a=Object(i.a)(n);a[t]=Object(r.a)(Object(r.a)({},e),{},{done:!e.done}),l(a),h(a)}(e)},onDelete:function(){return function(e){l(n.filter((function(t){return t!==e}))),h(p.filter((function(t){return t!==e})))}(e)},onTextChanged:function(t){return function(e,t){var a=n.indexOf(e),c=Object(i.a)(n);c[a]=Object(r.a)(Object(r.a)({},e),{},{text:t}),l(c),h(c)}(e,t)}})})))),c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},c.a.createElement("strong",null,g.length)," item left"),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){l(p)},className:"selected"},"All")),c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){var e=p.filter((function(e){return!e.done}));console.log(e,"inside active items"),l(e)}},"Active")),c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){var e=p.filter((function(e){return e.done}));l(e)}},"Completed"))),c.a.createElement("button",{onClick:function(){l(n.filter((function(e){return!e.done}))),h(p.filter((function(e){return!e.done})))},className:"clear-completed"},"Clear completed")))}var d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null))},f=document.getElementById("root");o.a.render(c.a.createElement(d,null),f)},5:function(e,t,n){},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.6428d5d5.chunk.js.map