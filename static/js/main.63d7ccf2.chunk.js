(this.webpackJsonpcalculatorreactapp=this.webpackJsonpcalculatorreactapp||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r);a(13),a(3),a(14);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(4),i=a(5),u=a(7),s=a(6),m=(a(15),a(16),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.styles={},e.inputRef=l.a.createRef(),e.operation="",e.val1=0,e.val2=0,e.additions=function(){e.val1=Number(e.inputRef.current.value),e.inputRef.current.value="",e.operation="+"},e.subtractions=function(){e.val1=Number(e.inputRef.current.value),e.inputRef.current.value="",e.operation="-"},e.deletions=function(){e.val1=Number(e.inputRef.current.value),e.inputRef.current.value="",e.operation="/"},e.multiplications=function(){e.val1=Number(e.inputRef.current.value),e.inputRef.current.value="",e.operation="*"},e.equals=function(){e.val2=Number(e.inputRef.current.value);var t=e.operation;e.inputRef.current.value="+"===t?e.val1+e.val2:"-"===t?e.val1-e.val2:"/"===t?e.val1/e.val2:"*"===t?e.val1*e.val2:e.val1},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"verticalcenter"})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"}),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("table",{className:"table table-dark tablealign"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{colspan:"3",align:"center"},l.a.createElement("h1",null,"Calculator"))),l.a.createElement("tr",null,l.a.createElement("td",{colspan:"3",align:"center"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"value"}),l.a.createElement("input",{type:"text",className:"form-control",id:"value",placeholder:"enter value",ref:this.inputRef})))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-primary btn-lg",onClick:this.additions},"+")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-primary btn-lg",onClick:this.subtractions},"-")),l.a.createElement("td",{rowspan:"2"},l.a.createElement("button",{type:"button",class:"btn btn-primary tdalign btn-lg",onClick:this.equals},"="))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-primary btn-lg",onClick:this.multiplications},"*")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-primary btn-lg",onClick:this.deletions},"/")))))),l.a.createElement("div",{className:"col-sm-4"})))}}]),a}(n.Component));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.63d7ccf2.chunk.js.map