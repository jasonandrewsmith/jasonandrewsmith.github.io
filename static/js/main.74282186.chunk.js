(this["webpackJsonpnote-taker-client"]=this["webpackJsonpnote-taker-client"]||[]).push([[0],{1338:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),s=n(16),o=n.n(s),i=(n(25),n(20)),r=n(5),l=n.n(r),d=n(9),u=n(8),p=n(14),h=n(6),j=n(4),f=["_id","updatedDate","creationDate"];var b=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(p.a)(s,2),r=o[0],b=o[1];function x(){return(x=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching notes..."),e.next=3,fetch("http://localhost:3001/api/v1/notes",{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log(n),a(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){var t={};(t=Object.assign(t,e)).updatedDate=e.updatedDate;var c=n.findIndex((function(e){return e._id===t._id})),s=Object(d.a)(n);s[c]=t,a(s)}function v(e,t,c){var s={};s=Object.assign(s,t),"title"===c.toLowerCase()?s.title=e.target.value:"content"===c.toLowerCase()&&(s.content=e.target.value);var o=n.findIndex((function(e){return e._id===s._id})),i=Object(d.a)(n);i[o]=s,a(i)}function g(){return(g=Object(u.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t._id===r){e.next=2;break}return e.abrupt("return");case 2:return t._id,t.updatedDate,t.creationDate,n=Object(i.a)(t,f),console.log(t),console.log(n),e.next=7,fetch("http://localhost:3001/api/v1/notes/"+t._id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 7:return c=e.sent,e.next=10,c.json();case 10:O(a=e.sent),console.log("Saved note "+JSON.stringify(a,null,4));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(u.a)(l.a.mark((function e(t){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t._id===r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("http://localhost:3001/api/v1/notes/"+t._id,{method:"DELETE"});case 4:c=n.findIndex((function(e){return e._id===t._id})),(s=Object(d.a)(n)).splice(c,1),console.log(s),a(s),console.log("Removed note "+t._id);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(u.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:"Title",content:"Content"},e.next=3,fetch("http://localhost:3001/api/v1/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,t=c,a((function(e){return[t].concat(Object(d.a)(e))})),b(t._id);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"title",children:"Note Taker 1.0"}),Object(j.jsx)("div",{className:"button-area",children:Object(j.jsx)(h.AddCircle,{color:"rgb(253, 253, 253);",title:"add a note",height:"45px",width:"45px",cssClasses:"add",onClick:function(){return C.apply(this,arguments)}})}),Object(j.jsx)("ul",{className:"notes-list",children:n.map((function(e){return Object(j.jsxs)("li",{id:e._id,className:e._id===r?"note note-selected no-pointer":"note",children:[Object(j.jsxs)("div",{className:"note-main",children:[Object(j.jsxs)("div",{className:"note-top",children:[Object(j.jsx)("input",{className:"note-title",type:"text",defaultValue:e.title,onKeyPress:function(t){v(t,e,"title")}}),Object(j.jsx)(h.Save,{color:"#00000",height:"25px",width:"25px",title:"Save",cssClasses:"save",onClick:function(){!function(e){g.apply(this,arguments)}(e)}}),Object(j.jsx)(h.CloseCircle,{color:"#00000",height:"25px",width:"25px",title:"Delete",cssClasses:"delete",onClick:function(){!function(e){m.apply(this,arguments)}(e)}}),Object(j.jsx)(h.ArrowForward,{color:"#00000",height:"25px",width:"25px",title:"Back",cssClasses:"back",onClick:function(){b("")}})]}),Object(j.jsx)("textarea",{className:"note-content",defaultValue:e.content,onKeyPress:function(t){v(t,e,"content")}})]}),Object(j.jsxs)("div",{className:"note-footer",children:[Object(j.jsxs)("p",{className:"note-created",children:["Created ",new Date(e.creationDate).toLocaleString()]}),Object(j.jsxs)("p",{className:"note-updated",children:["Last modified ",new Date(e.updatedDate).toLocaleString()]}),Object(j.jsx)(h.Create,{color:"#00000",height:"35px",width:"35px",title:"Edit",cssClasses:"edit",onClick:function(){b(e._id)}})]})]},e._id)}))})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1339)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),x()},25:function(e,t,n){}},[[1338,1,2]]]);
//# sourceMappingURL=main.74282186.chunk.js.map