(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,a){e.exports=a(55)},31:function(e,t,a){},32:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(23),r=a.n(l),o=(a(31),a(6)),i=a(1),s=(a(32),a(5)),u=a(24),m=a.n(u),d=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_ENV||"production",p=m.a.create({baseURL:{development:"http://localhost:5000",production:"https://todorial.herokuapp.com"}[d]}),v=a(9);var E=function(e){var t=e.taskData,a=t._id,n=t.title,l=t.description,r=t.createdAt;v.DateTime.local().setLocale("pt-br");var i=v.DateTime.fromISO(r);return c.a.createElement(o.b,{className:"task-card",to:"/".concat(a,"/edit")},c.a.createElement("h4",{className:"task-title"},n),c.a.createElement("div",{className:"row space-between word-break-all"},c.a.createElement("p",{className:"task-description"},l),c.a.createElement("p",{className:"task-updated-at-date"},i.toFormat("ff"))))};var f=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){p.get("/tasks").then((function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.results;l(a)}))}),[]),c.a.createElement("div",{className:"screen-route home-screen"},a&&c.a.createElement("ul",{className:"todo-list"},a.map((function(e,t){return c.a.createElement(E,{taskData:e,key:t})}))))};var b=function(){var e=Object(i.g)().id,t=Object(i.f)(),a=Object(n.useState)(),l=Object(s.a)(a,2),r=l[0],o=l[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),d=m[0],v=m[1],f=Object(n.useState)(""),b=Object(s.a)(f,2),O=b[0],N=b[1];return Object(n.useEffect)((function(){p.get("/tasks/".concat(e)).then((function(e){var t=e.data;o(t),v(t.title),N((null===t||void 0===t?void 0:t.description)||"")})).catch((function(e){t.push("/")}))}),[e,t]),Object(n.useEffect)((function(){o((function(e){return{_id:null===e||void 0===e?void 0:e._id,title:d,description:O,createdAt:null===e||void 0===e?void 0:e.createdAt,updatedAt:null===e||void 0===e?void 0:e.updatedAt}}))}),[d,O]),c.a.createElement("div",{className:"screen-route edit-screen"},r&&c.a.createElement(E,{taskData:r}),c.a.createElement("form",{className:"col"},c.a.createElement("label",{className:"col"},"T\xedtulo",c.a.createElement("input",{className:"input-text",type:"text",value:d,onChange:function(e){return v(e.target.value)}})),c.a.createElement("label",{className:"col"},"Descri\xe7\xe3o",c.a.createElement("input",{className:"input-text",type:"text",value:O,onChange:function(e){return N(e.target.value)}})),c.a.createElement("input",{className:"create-task-button",type:"submit",value:"Salvar",onClick:function(e){e.preventDefault();var a={title:d,description:O};p.patch("/tasks/".concat(null===r||void 0===r?void 0:r._id,"/edit"),a).then((function(){t.push("/")}))}}),c.a.createElement("input",{className:"delete-task-button",type:"submit",value:"Excluir",onClick:function(e){e.preventDefault(),p.delete("/tasks/".concat(null===r||void 0===r?void 0:r._id,"/delete")).then((function(){t.push("/")}))}})))};var O=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(),o=Object(s.a)(r,2),u=o[0],m=o[1],d=Object(i.f)();return c.a.createElement("div",{className:"screen-route create-screen"},c.a.createElement("form",{className:"col"},c.a.createElement("label",{className:"col"},"T\xedtulo",c.a.createElement("input",{className:"input-text",type:"text",value:a,onChange:function(e){return l(e.target.value)}})),c.a.createElement("label",{className:"col"},"Descri\xe7\xe3o",c.a.createElement("input",{className:"input-text",type:"text",value:u,onChange:function(e){return m(e.target.value)}})),c.a.createElement("input",{className:"create-task-button",type:"submit",value:"Criar",onClick:function(e){e.preventDefault(),p.post("/tasks/create",{title:a,description:u}).then((function(){d.push("/")}))}})))},N=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_ENV||"production";console.log(N);var h=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(o.a,null,"production"!==N&&c.a.createElement("span",null,"dev-mode"),c.a.createElement("h1",{className:"app-title"},"TODOrial"),c.a.createElement("div",{className:"navbar"},c.a.createElement(o.b,{to:"/"},"Home"),c.a.createElement(o.b,{to:"/create"},"Criar")),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/create"},c.a.createElement(O,null)),c.a.createElement(i.a,{path:"/:id/edit"},c.a.createElement(b,null)),c.a.createElement(i.a,{path:"/"},c.a.createElement(f,null)))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.63e9d10e.chunk.js.map