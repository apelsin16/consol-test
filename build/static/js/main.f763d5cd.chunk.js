(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{20:function(t,e,a){t.exports={textarea:"textarea_textarea__2HQAe"}},25:function(t,e,a){t.exports=a(37)},30:function(t,e,a){},36:function(t,e,a){},37:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),l=a(17),o=a.n(l),r=(a(30),a(18)),i=a(19),u=a(23),s=a(24),m=a(10),h=a(6),g=a(20),b=a.n(g),p=function(t){var e=t.name,a=t.text,n=t.onHandleChange,l=t.width;return c.a.createElement("textarea",{className:b.a.textarea,style:{minWidth:"".concat(l,"%")},name:e,value:a,onChange:function(t){n(t)}})},x=a(8),d=a(5),v=a.n(d),f=a(11),E=a.n(f),w=function(t){var e=t.split(" ");return{part1:e.slice(0,Math.ceil(e.length/2)),part2:e.slice(Math.ceil(e.length/2))}},_=function(t){var e=t.split(" ");return{part1:e.slice(0,Math.ceil(e.length/3)),part2:e.slice(Math.ceil(e.length/3),Math.ceil(e.length/3)+Math.ceil(e.length/3)),part3:e.slice(Math.ceil(e.length/3)+Math.ceil(e.length/3))}},C=function(t){return t.join(" ")},j=function(t){var e=t.text,a=t.onHandleChange,l=Object(n.useState)(!0),o=Object(x.a)(l,2),r=o[0],i=o[1],u=Object(n.useState)(!1),s=Object(x.a)(u,2),h=s[0],g=s[1],b=Object(n.useState)(!1),d=Object(x.a)(b,2),f=d[0],j=d[1],O=Object(n.useState)(e),y=Object(x.a)(O,2),H=y[0],N=y[1],S=Object(n.useState)(""),M=Object(x.a)(S,2),k=M[0],B=M[1],L=Object(n.useState)(""),T=Object(x.a)(L,2),W=T[0],A=T[1],I=function(){N(k+" "+W),a(H),a(k+" "+W)},J=function(t){t.preventDefault(),t.target.classList.contains("active")||(t.target.classList.contains("button1")?(i(!0),g(!1),j(!1),I()):t.target.classList.contains("button2")?(g(!0),j(!1),i(!1),I()):(j(!0),i(!1),g(!1),I()))},D=function(t){N(t.target.value),a(H)},F=function(t){"textarea1"===t.target.name&&B(t.target.value),"textarea2"===t.target.name&&A(t.target.value)};return c.a.createElement("form",{className:v.a.view},r&&c.a.createElement(p,{name:"text",style:{minWidth:"90%"},onHandleChange:D,text:H}),h&&c.a.createElement("div",{className:v.a.two},c.a.createElement(p,{name:"textarea1",width:40,onHandleChange:F,text:C(w(H).part1)}),c.a.createElement(p,{name:"textarea2",width:40,onHandleChange:F,text:C(w(H).part2)})),f&&c.a.createElement("div",{className:v.a.tree},c.a.createElement(p,{name:"textarea3",width:30,onHandleChange:D,text:C(_(H).part1)}),c.a.createElement(p,{name:"textarea4",width:30,onHandleChange:D,text:C(_(H).part2)}),c.a.createElement(p,{name:"textarea5",width:30,onHandleChange:D,text:C(_(H).part3)})),c.a.createElement("div",{className:v.a.buttons},c.a.createElement("button",{className:E()({active:r},v.a.columnButton,"button1"),onClick:J},"One"),c.a.createElement("button",{className:E()(v.a.columnButton,{active:h},"button2"),onClick:J},"Two"),c.a.createElement("button",{className:E()(v.a.columnButton,{active:f},"button3"),onClick:J},"Tree")),c.a.createElement(m.b,{to:"/",className:v.a.button},"Home"))},O=(a(36),function(t){Object(s.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))).state={text:""},t.handleChange=function(e){t.setState({text:e.target.value})},t.changeText=function(e){t.setState({text:e})},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this.state.text;return(c.a.createElement("div",{className:"App"},c.a.createElement("h2",null,"Some Title"),c.a.createElement(m.a,null,c.a.createElement(h.c,null,c.a.createElement(h.a,{path:"/layout"},c.a.createElement(j,{text:t,onHandleChange:this.changeText})),c.a.createElement(h.a,{path:"/"},c.a.createElement(p,{onHandleChange:this.handleChange,name:"name",text:t}),c.a.createElement(m.b,{to:"/layout",className:"button"},"Layout"))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},5:function(t,e,a){t.exports={button:"page-layout_button__2lCFR",buttons:"page-layout_buttons__3S3sx",columnButton:"page-layout_columnButton__3IJIg",two:"page-layout_two__fcVnh",tree:"page-layout_tree__37ZGL",view:"page-layout_view__oxBc1"}}},[[25,1,2]]]);
//# sourceMappingURL=main.f763d5cd.chunk.js.map