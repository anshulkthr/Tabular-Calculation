(this["webpackJsonptable-formation"]=this["webpackJsonptable-formation"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),l=(a(13),a(14),a(7)),i=a(1),s=a(2),u=a(4),m=a(3),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("table",{className:"dataContainer"},r.a.createElement("tbody",null,this.props.data.map((function(t,a){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{className:"dataContainerColumn"},t.value_first),r.a.createElement("td",{className:"dataContainerColumn"},t.value_second),r.a.createElement("td",{className:"dataContainerManipulate"},r.a.createElement("div",{className:"submitButton"},r.a.createElement("button",{"data-key":t.id,onClick:e.props.action},"ADD"))),r.a.createElement("td",{className:"dataContainerColumn"},t.sum))}))))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).calculateSum=function(e){var t=Object(l.a)(n.state.data),a=Number(e.target.getAttribute("data-key"));t[a].sum=t[a].value_first+t[a].value_second,n.setState({dataCopy:t})},n.state={data:[{id:0,value_first:20,value_second:65,sum:""},{id:1,value_first:30,value_second:15,sum:""},{id:2,value_first:67,value_second:75,sum:""},{id:3,value_first:17,value_second:32,sum:""}]},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{action:this.calculateSum,data:this.state.data}))}}]),a}(n.Component);var f=function(){return r.a.createElement("div",{className:"AppContainer"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.7949e594.chunk.js.map