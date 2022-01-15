(this["webpackJsonpnote-taker-client"]=this["webpackJsonpnote-taker-client"]||[]).push([[0],{1338:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),s=n(16),o=n.n(s),i=(n(25),n(20)),r=n(5),l=n.n(r),d=n(9),u=n(8),p=n(14),j=n(6),f=n(4),h=["_id","updatedDate","creationDate"];var x=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(p.a)(s,2),r=o[0],x=o[1],b="https://e6ttla0udc.execute-api.us-east-1.amazonaws.com/test/api/v1/notes/";function O(){return(O=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching notes..."),e.next=3,fetch(b,{headers:{Accept:"application/json","Force-Preflight":"Foo"},mode:"cors"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log(n),a(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){var t={};(t=Object.assign(t,e)).updatedDate=e.updatedDate;var c=n.findIndex((function(e){return e._id===t._id})),s=Object(d.a)(n);s[c]=t,a(s)}function v(e,t,c){var s={};s=Object.assign(s,t),"title"===c.toLowerCase()?s.title=e.target.value:"content"===c.toLowerCase()&&(s.content=e.target.value);var o=n.findIndex((function(e){return e._id===s._id})),i=Object(d.a)(n);i[o]=s,a(i)}function m(){return(m=Object(u.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t._id===r){e.next=2;break}return e.abrupt("return");case 2:return t._id,t.updatedDate,t.creationDate,n=Object(i.a)(t,h),console.log(t),console.log(n),e.next=7,fetch(b+t._id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 7:return c=e.sent,e.next=10,c.json();case 10:g(a=e.sent),console.log("Saved note "+JSON.stringify(a,null,4));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(u.a)(l.a.mark((function e(t){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t._id===r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch(b+t._id,{method:"DELETE"});case 4:c=n.findIndex((function(e){return e._id===t._id})),(s=Object(d.a)(n)).splice(c,1),console.log(s),a(s),console.log("Removed note "+t._id);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(u.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:"Title",content:"Content"},e.next=3,fetch(b,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,t=c,a((function(e){return[t].concat(Object(d.a)(e))})),x(t._id);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){O.apply(this,arguments)}()}),[]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{className:"title",children:"Note Taker 1.0"}),Object(f.jsx)("div",{className:"button-area",children:Object(f.jsx)(j.AddCircle,{color:"rgb(253, 253, 253);",title:"add a note",height:"45px",width:"45px",cssClasses:"add",onClick:function(){return w.apply(this,arguments)}})}),Object(f.jsx)("ul",{className:"notes-list",children:n.map((function(e){return Object(f.jsxs)("li",{id:e._id,className:e._id===r?"note note-selected no-pointer":"note",children:[Object(f.jsxs)("div",{className:"note-main",children:[Object(f.jsxs)("div",{className:"note-top",children:[Object(f.jsx)("input",{className:"note-title",type:"text",defaultValue:e.title,onKeyPress:function(t){v(t,e,"title")}}),Object(f.jsx)(j.Save,{color:"#00000",height:"25px",width:"25px",title:"Save",cssClasses:"save",onClick:function(){!function(e){m.apply(this,arguments)}(e)}}),Object(f.jsx)(j.CloseCircle,{color:"#00000",height:"25px",width:"25px",title:"Delete",cssClasses:"delete",onClick:function(){!function(e){C.apply(this,arguments)}(e)}}),Object(f.jsx)(j.ArrowForward,{color:"#00000",height:"25px",width:"25px",title:"Back",cssClasses:"back",onClick:function(){x("")}})]}),Object(f.jsx)("textarea",{className:"note-content",defaultValue:e.content,onKeyPress:function(t){v(t,e,"content")}})]}),Object(f.jsxs)("div",{className:"note-footer",children:[Object(f.jsxs)("p",{className:"note-created",children:["Created ",new Date(e.creationDate).toLocaleString()]}),Object(f.jsxs)("p",{className:"note-updated",children:["Last modified ",new Date(e.updatedDate).toLocaleString()]}),Object(f.jsx)(j.Create,{color:"#00000",height:"35px",width:"35px",title:"Edit",cssClasses:"edit",onClick:function(){x(e._id)}})]})]},e._id)}))})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1339)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root")),b()},25:function(e,t,n){}},[[1338,1,2]]]);
//# sourceMappingURL=main.fa19431b.chunk.js.map