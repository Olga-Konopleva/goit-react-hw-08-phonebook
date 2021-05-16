(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{104:function(n,t,e){"use strict";e.r(t);var r=e(16),c=e(17),a=e(19),o=e(18),i=e(0),u=e(9);var b=e(61);function s(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,c=!1,a=void 0;try{for(var o,i=n[Symbol.iterator]();!(r=(o=i.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(u){c=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(c)throw a}}return e}}(n,t)||Object(b.a)(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d,l,j,f,O,h,p,m=e(49),x=e(50),g=e(24),v=e.n(g),y=e(11),C=e(35),k=function(n){return n.contacts.items},w=Object(C.a)([k,function(n){return n.contacts.filter}],(function(n,t){var e=t.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),A=e(1),S=x.a.form(d||(d=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),z=x.a.button(l||(l=Object(m.a)(["\n  background: transparent;\n  border-radius: 6px;\n  border: 2px solid green;\n  color: green;\n  width: 200px;\n  margin-left: 1em;\n  padding: 0.25em 1em;\n  &:hover {\n    background: LemonChiffon;\n  }\n"]))),L=x.a.span(j||(j=Object(m.a)(["\n  margin-right: 10px;\n  display: inline-block;\n"]))),D=x.a.label(f||(f=Object(m.a)(["\n  margin-bottom: 15px;\n"]))),J=function(){var n=Object(u.c)(),t=Object(u.d)(k),e=s(Object(i.useState)(""),2),r=e[0],c=e[1],a=s(Object(i.useState)(""),2),o=a[0],b=a[1];console.log(t);return Object(A.jsxs)(S,{onSubmit:function(e){var a;(e.preventDefault(),t.some((function(n){return n.name===r})))?alert("".concat(r," is already in contacts")):(n((a={name:r,number:o},function(n){console.log(a),n(Object(y.b)()),v.a.post("/contacts",a).then((function(t){var e=t.data;return n(Object(y.c)(e))})).catch((function(t){return n(Object(y.a)(t.message))}))})),c(""),b(""))},children:[Object(A.jsxs)(D,{children:[Object(A.jsx)(L,{children:"Name"}),Object(A.jsx)("input",{type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(n){return c(n.target.value)}})]}),Object(A.jsxs)(D,{children:[Object(A.jsx)(L,{children:"Number"}),Object(A.jsx)("input",{type:"tel",name:"number",value:o,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(n){return b(n.target.value)}})]}),Object(A.jsx)(z,{type:"submit",children:"Add contact"})]})},N=x.a.button(O||(O=Object(m.a)(["\n  background: transparent;\n  border-radius: 6px;\n  border: 2px solid red;\n  color: red;\n  width: 80px;\n  margin-left: 1em;\n  padding: 0.25em 1em;\n  &:hover {\n    background: LemonChiffon;\n  }\n"]))),Z=x.a.li(h||(h=Object(m.a)(["\n  margin-bottom: 10px;\n"]))),q=function(n){var t=n.id,e=Object(u.d)(function(n){return Object(C.a)([k],(function(t){return t.find((function(t){return t.id===n}))}))}(t)),r=e.name,c=e.number,a=Object(u.c)();return Object(A.jsxs)(Z,{children:[r,": ",c,Object(A.jsx)(N,{type:"button",onClick:function(){return a(function(n){return function(t){t(Object(y.e)()),v.a.delete("/contacts/".concat(n)).then((function(){return t(Object(y.f)(n))})).catch((function(n){return t(Object(y.d)(n.message))}))}}(t))},children:"Delete"})]})},I=x.a.ul(p||(p=Object(m.a)(["\n  list-style: none;\n  padding-left: 5px;\n"]))),M=function(){var n=Object(u.d)(w);return Object(A.jsx)(I,{children:n.map((function(n){var t=n.id;return Object(A.jsx)(q,{id:t},t)}))})},B=function(){var n=Object(u.c)();return Object(A.jsxs)("div",{children:[Object(A.jsx)("p",{children:"Find contacts by name"}),Object(A.jsx)("input",{type:"text",onChange:function(t){return n(Object(y.j)(t.target.value))}})]})},E=function(n){Object(a.a)(e,n);var t=Object(o.a)(e);function e(){return Object(r.a)(this,e),t.apply(this,arguments)}return Object(c.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)("h1",{children:"Phonebook"}),Object(A.jsx)(J,{}),Object(A.jsx)("h2",{children:"Contacts"}),Object(A.jsx)(B,{}),Object(A.jsx)(M,{})]})}}]),e}(i.Component);t.default=Object(u.b)(null,(function(n){return{fetchContacts:function(){return n((function(n){n(Object(y.h)()),v.a.get("/contacts").then((function(t){var e=t.data;return n(Object(y.i)(e))})).catch((function(t){return n(Object(y.g)(t))}))}))}}}))(E)}}]);
//# sourceMappingURL=contacts-page.c06e2cc1.chunk.js.map