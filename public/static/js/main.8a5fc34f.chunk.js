(this.webpackJsonppresentation=this.webpackJsonppresentation||[]).push([[0],{127:function(e,t,a){e.exports=a(232)},132:function(e,t,a){},139:function(e,t){},141:function(e,t){},152:function(e,t){},154:function(e,t){},179:function(e,t){},181:function(e,t){},182:function(e,t){},188:function(e,t){},19:function(e,t){var a=window.sessionStorage;e.exports={setItem:function(e,t){a.setItem(e,t)},getItem:function(e){return a.getItem(e)}}},190:function(e,t){},208:function(e,t){},210:function(e,t){},222:function(e,t){},225:function(e,t){},232:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(121),l=a.n(r),o=(a(132),a(122)),s=a(123),i=a(13),d=a.n(i),m=a(22),u=a(3),p=a(65),h=a.n(p),E=a(37),v=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),i=s[0],p=s[1],v=Object(n.useState)(!1),b=Object(u.a)(v,2),f=b[0],g=b[1],y=Object(n.useState)(""),w=Object(u.a)(y,2),N=w[0],O=w[1],j=Object(n.useState)(""),x=Object(u.a)(j,2),k=x[0],S=x[1],C=Object(n.useState)(!0),D=Object(u.a)(C,2),M=D[0],I=D[1],W=Object(n.useState)(!0),T=Object(u.a)(W,2),A=T[0],F=T[1],q=Object(n.useState)(!0),P=Object(u.a)(q,2),R=P[0],J=P[1],U=Object(n.useState)(!1),Y=Object(u.a)(U,2),L=Y[0],X=Y[1],_=Object(n.useState)(!1),H=Object(u.a)(_,2),B=H[0],V=H[1],K=Object(n.useState)(""),z=Object(u.a)(K,2),G=z[0],Q=z[1],Z=Object(n.useState)(""),$=Object(u.a)(Z,2),ee=$[0],te=$[1],ae=Object(n.useState)(!0),ne=Object(u.a)(ae,2),ce=ne[0],re=ne[1],le=h.a.genSaltSync(10),oe=function(){var t=Object(m.a)(d.a.mark((function t(a){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),N===k){t.next=4;break}return I(!1),t.abrupt("return");case 4:if(!(""===r||""===i||""===N?(X(!0),1):/@/.test(i)?void 0:(V(!0),1))){t.next=6;break}return t.abrupt("return");case 6:return X(!1),I(!0),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,email:i,password:h.a.hashSync(N,le),events:[]})},t.next=11,fetch("".concat("/api","/users/register"),n);case 11:401===(c=t.sent).status?g(!0):(g(!1),R&&Object(E.setItem)("auth",c.headers.get("auth")),e.handleSuccessfulAuth(c.headers.get("auth")));case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),se=function(){var t=Object(m.a)(d.a.mark((function t(a){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:G,password:ee})},t.next=4,fetch("".concat("/api","/users/login"),n);case 4:401===(c=t.sent).status?re(!1):(R&&Object(E.setItem)("auth",c.headers.get("auth")),e.handleSuccessfulAuth(c.headers.get("auth")));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ie=function(){J(!R)};return c.a.createElement("div",{className:"signup"}," ",A?c.a.createElement("form",null,c.a.createElement("div",null,c.a.createElement("h2",{className:"signup-login-title"},"Sign up")),c.a.createElement("hr",null),c.a.createElement("div",{className:"form-group",style:{marginTop:"35px"}},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",value:r,onChange:function(e){var t=e.target;return l(t.value)},required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:i,onChange:function(e){var t=e.target;return p(t.value)},required:!0}),f?c.a.createElement("small",{className:"bright-red"},"Email already in use"):c.a.createElement(c.a.Fragment,null),B?c.a.createElement("small",{className:"bright-red"},"Email invalid"):c.a.createElement(c.a.Fragment,null)),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:N,onChange:function(e){var t=e.target;return O(t.value)},required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm password",value:k,onChange:function(e){var t=e.target;return S(t.value)},required:!0}),M?c.a.createElement(c.a.Fragment,null):c.a.createElement("small",{className:"bright-red"},"Passwords do not match"),L?c.a.createElement("small",{className:"bright-red"},"All fields are required"):c.a.createElement(c.a.Fragment,null)),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",checked:R,onChange:ie})," "," Keep me signed in"),c.a.createElement("hr",null),c.a.createElement("div",{className:"signup-login-btn"},c.a.createElement("button",{className:"btn btn-primary",onClick:oe},"Sign up"),c.a.createElement("p",{className:"login-register",onClick:function(){l(""),p(""),O(""),S(""),I(!0),F(!1)}},"Already have an account?"))):c.a.createElement("form",null,c.a.createElement("div",null,c.a.createElement("h2",{className:"signup-login-title"},"Log in")),c.a.createElement("hr",null),c.a.createElement("div",{className:"form-group",style:{marginTop:"35px"}},c.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:G,onChange:function(e){var t=e.target;return Q(t.value)},required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:ee,onChange:function(e){var t=e.target;return te(t.value)},required:!0}),ce?c.a.createElement(c.a.Fragment,null):c.a.createElement("small",{className:"bright-red"},"Email and password not valid")),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",checked:R,onChange:ie})," "," Keep me signed in"),c.a.createElement("hr",null),c.a.createElement("div",{className:"signup-login-btn"},c.a.createElement("button",{className:"btn btn-primary",onClick:se},"Log in"),c.a.createElement("p",{className:"login-register",onClick:function(){Q(""),re(!0),te(""),F(!0)}},"Sign up here"))))},b=a(19),f=function(e){var t=function(t){Object(b.setItem)("auth",t),e.history.push("/calendar")};e.token&&t(e.token);var a=Object(n.useRef)(null),r=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=a.current;e.width=window.innerWidth,e.height=window.innerHeight,e.style.width="".concat(window.innerWidth,"px"),e.style.height="".concat(window.innerHeight,"px");var t=e.getContext("2d"),n=function(){function a(e,t,n,c,r,l){Object(o.a)(this,a),this.x=e,this.y=t,this.radius=n,this.color=c,this.velocityX=r,this.velocityY=l}return Object(s.a)(a,[{key:"draw",value:function(a){t.beginPath(),t.arc(this.x+=this.velocityX,this.y+=this.velocityY,this.radius,0,2*Math.PI,!1),t.fillStyle=this.color,t.fill(),t.closePath(),this.y>e.height&&(this.velocityY=-this.velocityY),this.y<0&&(this.velocityY=-this.velocityY),this.x>e.width&&(this.velocityX=-this.velocityX),this.x<0&&(this.velocityX=-this.velocityX);for(var n=0;n<a.length;n++)this.x-a[n].x<50&&this.x-a[n].x>-50&&this.y-a[n].y<50&&this.y-a[n].y>-50&&(t.beginPath(),t.strokeStyle="#5e5e5c",t.moveTo(this.x,this.y),t.lineTo(a[n].x,a[n].y),t.stroke(),t.closePath())}},{key:"update",value:function(){this.draw()}}]),a}(),c=[];!function(){for(var t=0;t<200;t++){var a=Math.random()*e.width,r=Math.random()*e.height,l=2*(Math.random()-.5),o=2*(Math.random()-.5);c.push(new n(a,r,.5,"black",l,o))}}(),function a(){requestAnimationFrame(a),t.clearRect(0,0,e.width,e.height),e.width=window.innerWidth,e.height=window.innerHeight,e.style.width="".concat(window.innerWidth,"px"),e.style.height="".concat(window.innerHeight,"px"),t.fillStyle="#121212",t.fillRect(0,0,e.width,e.height),c.forEach((function(e){return e.draw(c)}))}(),r.current=t}),[]),c.a.createElement("div",{style:{position:"relative",margin:"0 auto"}},c.a.createElement("canvas",{style:{position:"absolute"},ref:a}),c.a.createElement(v,{handleSuccessfulAuth:t}))},g=a(20),y=a(126),w=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),i=s[0],d=s[1],m=Object(n.useState)(""),p=Object(u.a)(m,2),h=p[0],E=p[1],v=Object(n.useState)(!1),b=Object(u.a)(v,2),f=b[0],g=b[1],y=Object(n.useState)(""),w=Object(u.a)(y,2),N=w[0],O=w[1];Object(n.useEffect)((function(){l(e.name),d(e.time),E(e.type),g(e.completed),O("Appointment"===e.type?"#F45B69":"Meeting"===e.type?"#456990":"#028090")}),[]);var j=function(t){var a=f;t&&g(a=!a),""!==r&&""!==i&&""!==h?e.updateEvent(e.id,r,i,h,a):window.alert("Unable to save changes. Name and time must be filled.")};return c.a.createElement(c.a.Fragment,null,e.monthView?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{background:"".concat(e.past?"grey":N),color:"#f3f3f3",border:"1px solid #efefef",padding:"4px"},"data-toggle":"modal","data-target":"#updateEventModal".concat(r.replace(/\W/g,"")).concat(e.day)},c.a.createElement("span",{style:{fontSize:"small"}},+i.substr(0,2)>=12?+i.substr(0,2)<13?"".concat(i," p.m."):"".concat(i.substr(0,2)-12).concat(i.substr(2)," p.m."):"".concat(i," a.m."))," "," ",c.a.createElement("span",{className:f?"completed":""},r)),c.a.createElement("div",{className:"modal fade",id:"updateEventModal".concat(r.replace(/\W/g,"")).concat(e.day),tabIndex:"-1","aria-labelledby":"updateEventModalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-event"},c.a.createElement("h5",{className:"modal-title"},"Update Event"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{className:"modal-body"},c.a.createElement("form",{className:"add-event"},c.a.createElement("div",{className:"name-time"},c.a.createElement("input",{type:"text",placeholder:"Event name",value:r,onChange:function(e){var t=e.target;return l(t.value)},required:!0}),c.a.createElement("input",{type:"time",value:i,onChange:function(e){var t=e.target;return d(t.value)},required:!0})),c.a.createElement("div",{class:"dropdown"},c.a.createElement("button",{class:"btn btn-outline-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Event type"),c.a.createElement("div",{class:"dropdown-menu"},c.a.createElement("p",{class:"dropdown-item",onClick:function(){E("Appointment"),O("#F45B69")}},"Appointment"),c.a.createElement("p",{class:"dropdown-item",onClick:function(){E("Meeting"),O("#456990")}},"Meeting"),c.a.createElement("p",{class:"dropdown-item",onClick:function(){E("Reminder"),O("#028090")}},"Reminder"))))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-outline-secondary","data-dismiss":"modal"},"Close"),c.a.createElement("button",{type:"button",className:"btn btn-warning","data-dismiss":"modal",onClick:function(){return j(!1)}},"Update"),c.a.createElement("button",{className:"btn btn-success","data-dismiss":"modal",onClick:function(){return j(!0)}},f?"Mark Incomplete":"Mark Completed"),c.a.createElement("button",{className:"btn btn-danger","data-dismiss":"modal",onClick:function(){return e.deleteEvent(e.id)}},"Delete")))))):c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{style:{background:"".concat(e.past?"grey":N),color:"#f3f3f3"}},c.a.createElement("td",{className:f?"completed":""},r),c.a.createElement("td",null,e.date.toString().substr(0,15)),c.a.createElement("td",null,+i.substr(0,2)>=12?+i.substr(0,2)<13?"".concat(i," p.m."):"".concat(i.substr(0,2)-12).concat(i.substr(2)," p.m."):"".concat(i," a.m.")),c.a.createElement("td",null,h),c.a.createElement("td",null,c.a.createElement("button",{style:{color:"#f3f3f3"},"data-toggle":"modal","data-target":"#updateEventModal".concat(r.replace(/\W/g,"")).concat(e.id),className:"btn btn-outline-secondary"},"Update"))),c.a.createElement("div",{className:"modal fade",id:"updateEventModal".concat(r.replace(/\W/g,"")).concat(e.id),tabIndex:"-1","aria-labelledby":"updateEventModalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-event"},c.a.createElement("h5",{className:"modal-title"},"Update Event"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{className:"modal-body"},c.a.createElement("form",{className:"add-event"},c.a.createElement("div",{className:"name-time"},c.a.createElement("input",{type:"text",placeholder:"Event name",value:r,onChange:function(e){var t=e.target;return l(t.value)},required:!0}),c.a.createElement("input",{type:"time",value:i,onChange:function(e){var t=e.target;return d(t.value)},required:!0})),c.a.createElement("div",{class:"dropdown"},c.a.createElement("button",{class:"btn btn-outline-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Event type"),c.a.createElement("div",{class:"dropdown-menu"},c.a.createElement("p",{class:"dropdown-item",onClick:function(){E("Appointment"),O("#F45B69")}},"Appointment"),c.a.createElement("p",{class:"dropdown-item",onClick:function(){E("Meeting"),O("#456990")}},"Meeting"),c.a.createElement("p",{class:"dropdown-item",onClick:function(){E("Reminder"),O("#028090")}},"Reminder"))))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-outline-secondary","data-dismiss":"modal"},"Close"),c.a.createElement("button",{type:"button",className:"btn btn-warning","data-dismiss":"modal",onClick:function(){return j(!1)}},"Update"),c.a.createElement("button",{className:"btn btn-success","data-dismiss":"modal",onClick:function(){return j(!0)}},f?"Mark Incomplete":"Mark Completed"),c.a.createElement("button",{className:"btn btn-danger","data-dismiss":"modal",onClick:function(){return e.deleteEvent(e.id)}},"Delete")))))))},N=function e(t){if(t.length<2)return t;for(var a=t[t.length-1],n=[],c=[],r=0;r<t.length-1;r++)+a.time.substr(0,2)>+t[r].time.substr(0,2)?n.push(t[r]):+a.time.substr(0,2)<+t[r].time.substr(0,2)?c.push(t[r]):+a.time.substr(3,2)>=+t[r].time.substr(3,2)?n.push(t[r]):c.push(t[r]);return n.length>0&&c.length>0?[].concat(Object(g.a)(e(n)),[a],Object(g.a)(e(c))):n.length>0?[].concat(Object(g.a)(e(n)),[a]):[a].concat(Object(g.a)(e(c)))},O=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),i=s[0],d=s[1],m=Object(n.useState)(""),p=Object(u.a)(m,2),h=p[0],E=p[1],v=Object(n.useState)([]),b=Object(u.a)(v,2),f=b[0],g=b[1];Object(n.useEffect)((function(){for(var t=[],a=11===e.month?new Date("".concat(e.month-10," ").concat(e.day," ").concat(e.year)):new Date("".concat(e.month+2," ").concat(e.day," ").concat(e.year)),n=0;n<e.events.length;n++)new Date(e.events[n].date).toString()===a.toString()&&t.push(e.events[n]);console.log("rerender"),g(N(t))}),[e.events]);var y=function(t,a,n,c,r){e.updateEvent(t,a,n,c,r)};return c.a.createElement(c.a.Fragment,null,e.day>0&&e.day<=e.monthDays?c.a.createElement("td",null,c.a.createElement("div",{className:"container-flush"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-1"},e.day),c.a.createElement("div",{className:"col-4 offset-6 text-right"},c.a.createElement("i",{className:"fa fa-plus-circle",style:{color:"#00b533"},"data-toggle":"modal","data-target":"#addEventModal".concat(e.day)})))),c.a.createElement("div",{className:"modal fade",id:"addEventModal".concat(e.day),tabIndex:"-1","aria-labelledby":"addEventModalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-day"},c.a.createElement("h5",{className:"modal-title"},"Add event"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{className:"modal-body"},c.a.createElement("form",{className:"add-event"},c.a.createElement("div",{className:"name-time"},c.a.createElement("input",{type:"text",placeholder:"Event name",value:r,onChange:function(e){var t=e.target;return l(t.value)},required:!0}),c.a.createElement("input",{type:"time",value:i,onChange:function(e){var t=e.target;return d(t.value)},required:!0})),c.a.createElement("div",{class:"dropdown"},c.a.createElement("button",{class:"btn btn-outline-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Event type"),c.a.createElement("div",{class:"dropdown-menu"},c.a.createElement("p",{class:"dropdown-item",onClick:function(){return E("Appointment")}},"Appointment"),c.a.createElement("p",{class:"dropdown-item",onClick:function(){return E("Meeting")}},"Meeting"),c.a.createElement("p",{class:"dropdown-item",onClick:function(){return E("Reminder")}},"Reminder"))))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-outline-secondary","data-dismiss":"modal"},"Close"),c.a.createElement("button",{type:"button",className:"btn btn-success","data-dismiss":"modal",onClick:function(){if(""!==r&&""!==i&&""!==h){var t={name:r,time:i,type:h,date:11===e.month?new Date("".concat(e.month-10," ").concat(e.day," ").concat(e.year)):new Date("".concat(e.month+2," ").concat(e.day," ").concat(e.year)),completed:!1};console.log(t),e.addEvent(t),l(""),d(""),E("")}else window.alert("Unable to save changes. All fields must be filled.")}},"Save changes"))))),function(){var t=[],a=new Date;a.setDate(a.getDate()-1);var n=11===e.month?new Date("".concat(e.month-10," ").concat(e.day," ").concat(e.year)):new Date("".concat(e.month+2," ").concat(e.day," ").concat(e.year));console.log(f);for(var r=0;r<f.length;r++){var l=!1;n<a&&(l=!0),t.push(c.a.createElement(w,{past:l,type:f[r].type,time:f[r].time,name:f[r].name,key:f[r]._id,id:f[r]._id,updateEvent:y,completed:f[r].completed,deleteEvent:e.deleteEvent,monthView:!0}))}return t}()):c.a.createElement("td",null))},j=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{style:{height:"120px"}},function(){var t=[],a=e.day;if(e.last)for(var n=e.num;n>=0;n--)t.unshift(c.a.createElement(O,{key:"".concat(e.year,"-").concat(e.month,"-").concat(a),day:a,monthDays:e.monthDays,events:e.events,month:e.month,year:e.year,addEvent:e.addEvent,updateEvent:e.updateEvent,deleteEvent:e.deleteEvent})),a--;else for(var r=0;r<7;r++)t.push(c.a.createElement(O,{key:"".concat(e.year,"-").concat(e.month,"-").concat(a),day:a,monthDays:e.monthDays,events:e.events,month:e.month,year:e.year,addEvent:e.addEvent,updateEvent:e.updateEvent,deleteEvent:e.deleteEvent})),a++;return t}()))},x=function(e){Object(b.getItem)("auth")||e.history.push("/");var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(!0),s=Object(u.a)(o,2),i=s[0],p=s[1],h=Object(n.useState)([]),E=Object(u.a)(h,2),v=E[0],f=E[1];Object(n.useEffect)((function(){var e={headers:{auth:Object(b.getItem)("auth")}};fetch("".concat("/api","/events"),e).then((function(e){return e.json()})).then((function(e){return f(e)}))}),[]);var N=function(){var e=Object(m.a)(d.a.mark((function e(t){var a,n,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json",auth:Object(b.getItem)("auth")},body:JSON.stringify(t)},e.next=3,fetch("".concat("/api","/events"),a);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,200===n.status&&((r=JSON.parse(JSON.stringify(v))).push(c),f(r));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(d.a.mark((function e(t,a,n,c,r){var l,o,s,i,m,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=v.findIndex((function(e){return e._id===t})),(o=Object(y.a)({},v[l])).name=a,o.time=n,o.type=c,o.completed=r,s={method:"PATCH",headers:{"Content-Type":"application/json",auth:Object(b.getItem)("auth")},body:JSON.stringify(o)},e.next=9,fetch("".concat("/api","/events"),s);case 9:return i=e.sent,e.next=12,i.json();case 12:m=e.sent,200===i.status&&((u=Object(g.a)(v)).splice(l,1,m),f(u));case 14:case"end":return e.stop()}}),e)})));return function(t,a,n,c,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(d.a.mark((function e(t){var a,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"DELETE",headers:{auth:Object(b.getItem)("auth"),id:t}},e.next=3,fetch("".concat("/api","/events"),a);case 3:200===e.sent.status&&(n=v.findIndex((function(e){return e._id===t})),(c=Object(g.a)(v)).splice(n,1),f(c));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=[28,31,30,31,30,31,31,30,31,30,31,31];return c.a.createElement("div",null,c.a.createElement("nav",{className:"my-nav container-flush"},c.a.createElement("div",{className:"row",style:{paddingTop:"20px"}},c.a.createElement("div",{className:"col-4 offset-4 text-center"},c.a.createElement("input",{type:"month",value:r,onChange:function(e){var t=e.target;return l(t.value)}})," "," "),c.a.createElement("div",{className:"col-4 text-center"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){p((function(e){return!e}))}},"Toggle Event View")))),i?c.a.createElement("div",null,c.a.createElement("table",{className:"table table-bordered"},c.a.createElement("thead",null,c.a.createElement("tr",{className:"table-head"},c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/7,"px")}},"Mon"),c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/7,"px")}},"Tue"),c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/7,"px")}},"Wed"),c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/7,"px")}},"Thu"),c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/7,"px")}},"Fri"),c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/7,"px")}},"Sat"),c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/7,"px")}},"Sun"))),c.a.createElement("tbody",null,function(){var e,t,a;if(""!==r){var n=new Date(r);e=n.getMonth(),t=n.getDay(),((a=n.getFullYear())%400===0||a%4===0&&a%100!==0)&&(k[0]=29);for(var l=[],o=1,s=0;s<42;s++)o<=k[e]&&(6===s?l.push(c.a.createElement(j,{key:s,last:!0,num:s,day:o,monthDays:k[e],year:a,month:e,events:v,addEvent:N,updateEvent:O,deleteEvent:x})):s%7===0&&s>6&&l.push(c.a.createElement(j,{key:s,last:!1,num:s,day:o,monthDays:k[e],year:a,month:e,events:v,addEvent:N,updateEvent:O,deleteEvent:x})),s>=t&&o++);return l}}()))):c.a.createElement("div",null,c.a.createElement("table",{className:"table table-bordered"},c.a.createElement("thead",null,c.a.createElement("tr",{className:"table-head"},c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/5,"px")}},"Event"),c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/5,"px")}},"Date"),c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/5,"px")}},"Time"),c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/5,"px")}},"Type"),c.a.createElement("th",{scope:"col",style:{width:"".concat(window.innerWidth/5,"px")}},"Configure"))),c.a.createElement("tbody",null,function(){var e=v.filter((function(e,t){return new Date(e.date).getMonth()+1===+r.substr(5,2)}));if(0!==e.length)return e.sort((function(e,t){return new Date(e.date)<new Date(t.date)?-1:new Date(e.date)>new Date(t.date)?1:+e.time.substr(0,2)-+t.time.substr(0,2)})),e.map((function(e,t){var a=new Date;return a.setDate(a.getDate()-1),c.a.createElement(w,{type:e.type,time:e.time,name:e.name,key:e._id,id:e._id,updateEvent:O,completed:e.completed,deleteEvent:x,monthView:!1,date:new Date(e.date),past:new Date(e.date)<a})}))}()))))},k=a(124),S=a(4);var C=function(e){var t=Object(E.getItem)("auth");return c.a.createElement(k.a,null,c.a.createElement(S.c,null,c.a.createElement(S.a,{exact:!0,path:"/",render:function(e){return c.a.createElement(f,Object.assign({},e,{token:t}))}}),c.a.createElement(S.a,{exact:!0,path:"/calendar",render:function(e){return c.a.createElement(x,e)}})))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root"))},37:function(e,t){var a=window.localStorage;e.exports={getItem:function(e){return a.getItem(e)},setItem:function(e,t){a.setItem(e,t)}}}},[[127,1,2]]]);
//# sourceMappingURL=main.8a5fc34f.chunk.js.map