(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{444:function(e,t,n){},445:function(e,t,n){},446:function(e,t,n){},468:function(e,t,n){},469:function(e,t,n){},475:function(e,t,n){},520:function(e,t){},522:function(e,t){},532:function(e,t){},534:function(e,t){},559:function(e,t){},561:function(e,t){},562:function(e,t){},567:function(e,t){},569:function(e,t){},588:function(e,t){},600:function(e,t){},603:function(e,t){},608:function(e,t){},610:function(e,t){},633:function(e,t){},727:function(e,t,n){},729:function(e,t,n){},730:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(45),s=n.n(i),o=(n(444),n(445),n(6)),d=n(149),u=n.n(d),l=n(409),j=n.n(l),b=n(807),f=n(792),v=(n(446),n(14)),h=n.n(v),O=n(18),p=n(20),x=n(41),m=n.n(x),g=n(397),S=Object(g.a)(),y="COURSE_ADD_SUCCESS",C="COURSE_ADD_FAILED",w="GRADE_ADD_SUCCESS",E="GRADE_ADD_FAILED",k="GRADE_REMOVE_SUCCESS",N="GRADE_REMOVE_FAILED",_="STUDENT_ADD_SUCCESS",A="STUDENT_ADD_FAILED",I="STUDENT_REMOVE_SUCCESS",T="STUDENT_REMOVE_FAILED",U="COURSE_REMOVE_SUCCESS",D="COURSE_REMOVE_FAILED",R="TASK_REMOVE_SUCCESS",F="TASK_REMOVE_FAILED",G="COURSE_FETCH_SUCCESS",L="STUDENTS_FETCH_SUCCESS",P="GRADES_FETCH_SUCCESS",z="TASKS_FETCH_SUCCESS",Z="TASK_ADD_SUCCESS",M="TASK_ADD_FAILED",V="https://coursemanagement-braude.herokuapp.com";function W(e,t){return function(n){m.a.post(V+"/course",{name:e,teacher:t}).then((function(e){return!0===e.data.success?n({type:y,payload:e}):n({type:C,payload:e})})).catch((function(e){n({type:C,payload:e})}))}}function $(e){return function(t){m.a.delete(V+"/course/"+e).then((function(e){return!0===e.data.success?t({type:U,payload:e}):t({type:D,payload:e})})).catch((function(e){t({type:D,payload:e})}))}}function q(e){var t=Object(p.c)((function(e){return e.course.courses})),n=Object(p.b)(),a=function(){var t;n((t=e,function(e){m.a.get(V+"/course/"+t).then((function(t){return e({type:G,payload:t.data.course})})).catch((function(e){console.log(e)}))}))},c=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n($(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){a()}),[]),{list:t,refresh:a,remove:c}}var H=n(799),K=n(808),B=n(812),J=n(809),X=n(810),Y=n(785),Q=n(803),ee=n(122),te=n.n(ee),ne="USER_SIGNIN_SUCCESS",ae="USER_SIGNIN_FAILED",re="USER_SIGNUP_FAILED";function ce(){var e=Object(p.c)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.user})),t=Object(p.b)();return Object(r.useEffect)((function(){!function(){var e=te.a.get("userInstance");e&&(e=JSON.parse(e),t({type:ne,payload:e}))}()}),[]),e}var ie=n(797);function se(e){var t=Object(r.useState)(),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(),d=Object(o.a)(s,2),u=d[0],l=d[1],j=Object(p.b)(),b=ce(),f=function(){e.setOpen(!1)},v=function(){var t=Object(O.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c){t.next=6;break}return t.next=3,j(W(c,null===b||void 0===b?void 0:b.id));case 3:e.setOpen(!1),t.next=7;break;case 6:l(!0);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)(K.a,{open:e.open,onClose:f,children:[u&&Object(a.jsx)(ie.a,{severity:"error",children:"Some details are missing."}),Object(a.jsx)(Y.a,{children:"Add Course"}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(X.a,{children:"Enter course name and click 'Submit':"}),Object(a.jsx)(H.a,{autoFocus:!0,margin:"dense",id:"name",label:"Course Name",type:"text",fullWidth:!0,variant:"standard",onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(Q.a,{onClick:f,children:"Cancel"}),Object(a.jsx)(Q.a,{onClick:v,children:"Submit"})]})]})}var oe=n(53),de=n(58),ue=n(146),le=n(145),je=n(798),be=n(796),fe=(n(468),n.p,n(151));n(469);var ve=n.p+"static/media/avatar.ecffce2f.png";var he=function(e){var t=te.a.get("userInstance"),n=Object(p.b)();if(t){var r=JSON.parse(t);return Object(a.jsxs)("div",{className:"newDiv",children:[Object(a.jsx)("img",{className:"avatar",src:ve,alt:"profile picture"}),Object(a.jsxs)(fe.a,{className:"user-instance",children:[Object(a.jsxs)(fe.a.Toggle,{id:"dropdown-basic",children:["Hello ",r.first_name]}),Object(a.jsxs)(fe.a.Menu,{children:[Object(a.jsx)(fe.a.Item,{href:"/profile",children:"My Profile"}),Object(a.jsx)(fe.a.Item,{href:"/",onClick:function(){n((function(e){te.a.remove("userInstance"),e({type:"USER_SIGNOUT_SUCCESS"})}))},children:"Logout"})]})]})]})}return Object(a.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(a.jsx)("a",{href:"/Signin",className:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",children:"Sign In"}),Object(a.jsx)("a",{href:"/Signup",className:"btn btn-secondary btn-lg active",role:"button","aria-pressed":"true",children:"Sign Up"})]})},Oe=function(e){Object(ue.a)(n,e);var t=Object(le.a)(n);function n(){return Object(oe.a)(this,n),t.apply(this,arguments)}return Object(de.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"navbar-parent",children:Object(a.jsxs)(je.a,{expand:"lg",children:[Object(a.jsx)(je.a.Brand,{href:"/",children:Object(a.jsx)("h1",{children:"Courser"})}),Object(a.jsx)(je.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsxs)(je.a.Collapse,{id:"basic-navbar-nav",children:[Object(a.jsx)(be.a,{className:"mr-auto"}),Object(a.jsx)(he,{})]})]})})}}]),n}(r.Component),pe=n(815),xe=n(817),me=n(816),ge=n(178),Se=n(802),ye=n(804);function Ce(){return Object(a.jsx)("div",{role:"presentation",children:Object(a.jsxs)(Se.a,{"aria-label":"breadcrumb",children:[Object(a.jsx)(ye.a,{underline:"hover",color:"inherit",href:"/",children:"Home"}),Object(a.jsx)(ge.a,{color:"text.primary",children:"Course"})]})})}var we=n(811),Ee=n(814),ke=n(791),Ne=n(813),_e=n(790);n(475);function Ae(e){var t;return Object(a.jsx)("div",{className:"menu-container",children:Object(a.jsxs)(we.a,{sx:{width:"100%",minWidth:150,bgcolor:"background.paper"},component:"nav","aria-labelledby":"nested-list-subheader",subheader:Object(a.jsx)(Ne.a,{component:"div",id:"nested-list-subheader",children:"Course: "+e.course.name}),children:[Object(a.jsx)(_e.a,{}),(null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.admin)&&Object(a.jsx)(Ee.a,{onClick:function(){return e.setView(0)},children:Object(a.jsx)(ke.a,{primary:"Students"})}),Object(a.jsx)(Ee.a,{onClick:function(){return e.setView(1)},children:Object(a.jsx)(ke.a,{primary:"Grades"})}),Object(a.jsx)(Ee.a,{onClick:function(){return e.setView(2)},children:Object(a.jsx)(ke.a,{primary:"Tasks"})})]})})}var Ie=n(793);function Te(e){var t;return Object(a.jsxs)(pe.a,{sx:Ue.card,children:[Object(a.jsx)(me.a,{action:function(){if(null===e||void 0===e?void 0:e.btnText)return Object(a.jsx)(Q.a,{variant:"contained",sx:Ue.btn,onClick:e.handleAdd,children:e.btnText})}(),title:e.title}),Object(a.jsx)(xe.a,{sx:{height:"90%"},children:(null===(t=e.rows)||void 0===t?void 0:t.length)>0&&Object(a.jsx)(Ie.a,{rows:e.rows,columns:e.columns,pageSize:5,rowsPerPageOptions:[5]})})]})}var Ue={btn:{width:"150px",fontWeight:"400",textTransform:"inherit"},card:{height:"100%"}};function De(e,t,n){return function(a){m.a.post(V+"/grade",{courseId:e,id:t,grade:n}).then((function(e){return!0===e.data.success?a({type:w,payload:e}):a({type:E,payload:e})})).catch((function(e){a({type:E,payload:e})}))}}function Re(e){return function(t){m.a.delete(V+"/grade/"+e).then((function(e){return!0===e.data.success?t({type:k,payload:e}):t({type:N,payload:e})})).catch((function(e){t({type:N,payload:e})}))}}var Fe=n(801),Ge=n(805),Le=n(821),Pe=n(794);function ze(e){var t,n=Object(r.useState)(),c=Object(o.a)(n,2),i=c[0],s=c[1],d=Object(r.useState)(),u=Object(o.a)(d,2),l=u[0],j=u[1],b=Object(r.useState)(),f=Object(o.a)(b,2),v=f[0],x=f[1],m=Object(p.b)(),g=null===e||void 0===e||null===(t=e.students)||void 0===t?void 0:t.list;Object(r.useEffect)((function(){var t;(null===e||void 0===e||null===(t=e.students)||void 0===t?void 0:t.length)>0&&j(null===e||void 0===e?void 0:e.students[0].idnumber)}),[]);var S=function(){e.setOpen(!1)},y=function(){var t=Object(O.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i||!l){t.next=6;break}return t.next=3,m(De(e.course.id,l,i));case 3:e.setOpen(!1),t.next=7;break;case 6:x(!0);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=null===g||void 0===g?void 0:g.map((function(e){return Object(a.jsx)(Ge.a,{value:e.idnumber,children:e.idnumber})}));return Object(a.jsxs)(K.a,{open:e.open,onClose:S,children:[v&&Object(a.jsx)(ie.a,{severity:"error",children:"Some details are missing."}),Object(a.jsx)(Y.a,{children:"Add Grade"}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(X.a,{children:"Fill the form and click 'Submit':"}),Object(a.jsxs)(Le.a,{fullWidth:!0,children:[Object(a.jsx)(Fe.a,{id:"demo-simple-select-label",children:"Student ID"}),Object(a.jsx)(Pe.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:l,label:"Student ID",onChange:function(e){return j(e.target.value)},children:C})]}),Object(a.jsx)(H.a,{autoFocus:!0,margin:"dense",id:"name",label:"Grade",type:"number",fullWidth:!0,variant:"standard",onChange:function(e){return s(e.target.value)}})]}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(Q.a,{onClick:S,children:"Cancel"}),Object(a.jsx)(Q.a,{onClick:y,children:"Submit"})]})]})}function Ze(e,t,n){return function(a){m.a.post(V+"/student",{id:e,name:t,courseId:n}).then((function(e){return!0===e.data.success?a({type:_,payload:e}):a({type:A,payload:e})})).catch((function(e){a({type:A,payload:e})}))}}function Me(e){return function(t){m.a.delete(V+"/student/"+e).then((function(e){return!0===e.data.success?t({type:I,payload:e}):t({type:T,payload:e})})).catch((function(e){t({type:T,payload:e})}))}}function Ve(e){var t=Object(r.useState)(),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(),d=Object(o.a)(s,2),u=d[0],l=d[1],j=Object(r.useState)(),b=Object(o.a)(j,2),f=b[0],v=b[1],x=Object(p.b)(),m=function(){e.setOpen(!1)},g=function(){var t=Object(O.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c||!u){t.next=6;break}return t.next=3,x(Ze(u,c,null===e||void 0===e||null===(n=e.course)||void 0===n?void 0:n.id));case 3:e.setOpen(!1),t.next=7;break;case 6:v(!0);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)(K.a,{open:e.open,onClose:m,children:[f&&Object(a.jsx)(ie.a,{severity:"error",children:"Some details are missing."}),Object(a.jsx)(Y.a,{children:"Add name"}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(X.a,{children:"Fill the form and click 'Submit':"}),Object(a.jsx)(H.a,{autoFocus:!0,margin:"dense",id:"name",label:"Student ID",type:"text",fullWidth:!0,variant:"standard",onChange:function(e){return l(e.target.value)}}),Object(a.jsx)(H.a,{autoFocus:!0,margin:"dense",id:"name",label:"Student Name",type:"text",fullWidth:!0,variant:"standard",onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(Q.a,{onClick:m,children:"Cancel"}),Object(a.jsx)(Q.a,{onClick:g,children:"Submit"})]})]})}function We(e){var t=Object(p.c)((function(e){return e.course.students})),n=Object(p.c)((function(e){return e.course.added})),a=Object(p.c)((function(e){return e.course.deletedStudent})),c=Object(p.b)(),i=function(){c(function(e){return function(t){m.a.get(V+"/student/"+e).then((function(e){return t({type:L,payload:e.data.students})})).catch((function(e){console.log(e)}))}}(e))},s=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(Me(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){i()}),[]),Object(r.useEffect)((function(){i()}),[n,a]),{list:t,remove:s}}function $e(e){var t=Object(p.c)((function(e){return e.course.grades})),n=Object(p.c)((function(e){return e.course.added})),a=Object(p.c)((function(e){return e.course.deletedGrade})),c=Object(p.b)(),i=function(){c(function(e){return function(t){m.a.get(V+"/grade/"+e).then((function(e){return t({type:P,payload:e.data.grades})})).catch((function(e){console.log(e)}))}}(e))},s=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(Re(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){i()}),[]),Object(r.useEffect)((function(){i()}),[n,a]),{list:t,remove:s}}function qe(e,t,n){return function(){var a=Object(O.a)(h.a.mark((function a(r){var c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m.a.post(V+"/tasks",{file:n,courseId:e,name:t});case 3:if(!0!==(c=a.sent).data.success){a.next=6;break}return a.abrupt("return",r({type:Z,payload:c}));case 6:return a.abrupt("return",r({type:M,payload:c}));case 9:a.prev=9,a.t0=a.catch(0),r({type:M,payload:a.t0});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}function He(e,t){return function(){var n=Object(O.a)(h.a.mark((function n(a){var r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.a.post(V+"/tasks/solution",{filesolutions:t,courseId:e});case 3:if(!0!==(r=n.sent).data.success){n.next=6;break}return n.abrupt("return",a({type:Z,payload:r}));case 6:return n.abrupt("return",a({type:M,payload:r}));case 9:n.prev=9,n.t0=n.catch(0),a({type:M,payload:n.t0});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}function Ke(e){return function(t){m.a.delete(V+"/tasks/"+e).then((function(e){return!0===e.data.success?t({type:R,payload:e}):t({type:F,payload:e})})).catch((function(e){t({type:F,payload:e})}))}}function Be(e){var t=Object(p.c)((function(e){return e.course.tasks})),n=Object(p.c)((function(e){return e.course.added})),a=Object(p.b)(),c=function(){a(function(e){return function(t){m.a.get(V+"/tasks/"+e).then((function(e){return t({type:z,payload:e.data.tasks})})).catch((function(e){console.log(e)}))}}(e))},i=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(Ke(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c()}),[]),Object(r.useEffect)((function(){c()}),[n]),{list:t,remove:i,refresh:c}}var Je=n(227);function Xe(e){var t=Object(r.useState)(),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(),d=Object(o.a)(s,2),u=d[0],l=d[1],j=Object(r.useState)(),b=Object(o.a)(j,2),f=b[0],v=b[1],x=Object(p.b)(),m=function(){e.setOpen(!1)},g=function(){var t=Object(O.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c||!f){t.next=6;break}return t.next=3,x(qe(e.course.id,c,f));case 3:e.setOpen(!1),t.next=7;break;case 6:l(!0);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)(K.a,{open:e.open,onClose:m,children:[u&&Object(a.jsx)(ie.a,{severity:"error",children:"Some details are missing."}),Object(a.jsx)(Y.a,{children:"Add Tasks"}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(X.a,{children:"Fill the form, drag a file and click 'Submit':"}),Object(a.jsx)(H.a,{autoFocus:!0,margin:"dense",id:"name",label:"Task Name",type:"text",fullWidth:!0,variant:"standard",onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:Object(a.jsx)(Je.a,{apiKey:"9cdd9705c3027e652fccc937143932d8",onSuccess:function(e){v(e)}})})]}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(Q.a,{onClick:m,children:"Cancel"}),Object(a.jsx)(Q.a,{onClick:g,children:"Submit"})]})]})}var Ye=n(408),Qe=n.n(Ye),et=n(407),tt=n.n(et),nt=new(n(406).BitlyClient)("ea21da991353fc3f950da00eb1c540f0556d3bee",{});function at(e){var t,n,c,i,s=Object(r.useState)(),d=Object(o.a)(s,2),u=d[0],l=d[1],j=Object(r.useState)(),b=Object(o.a)(j,2),f=b[0],v=b[1],x=Object(p.b)(),m=(null===e||void 0===e||null===(t=e.open)||void 0===t||null===(n=t.value)||void 0===n?void 0:n.filesolutions)?null===e||void 0===e||null===(c=e.open)||void 0===c||null===(i=c.value)||void 0===i?void 0:i.filesolutions.split(","):[];console.log();var g=function(){e.setOpen(!1)},S=function(){var t=Object(O.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!f){t.next=10;break}return t.next=3,nt.shorten(f);case 3:return n=t.sent,m.push(n.url),t.next=7,x(He(e.course.id,m));case 7:e.setOpen(!1),t.next=11;break;case 10:l(!0);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)(K.a,{open:!1!==e.open,onClose:g,children:[u&&Object(a.jsx)(ie.a,{severity:"error",children:"Some details are missing."}),Object(a.jsx)(Y.a,{children:"Add Tasks"}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(X.a,{children:"Drag a file and click 'Submit':"}),Object(a.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:Object(a.jsx)(Je.a,{apiKey:"9cdd9705c3027e652fccc937143932d8",onSuccess:function(e){v(e)}})})]}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(Q.a,{onClick:g,children:"Cancel"}),Object(a.jsx)(Q.a,{onClick:S,children:"Submit"})]})]})}function rt(e){var t,n,c,i,s,d,l=Object(r.useState)(1),j=Object(o.a)(l,2),v=j[0],h=j[1],O=Object(r.useState)(!1),x=Object(o.a)(O,2),m=x[0],g=x[1],S=Object(r.useState)(!1),y=Object(o.a)(S,2),C=y[0],w=y[1],E=Object(r.useState)(!1),k=Object(o.a)(E,2),N=k[0],_=k[1],A=Object(r.useState)(!1),I=Object(o.a)(A,2),T=I[0],U=I[1],D=Object(r.useState)(),R=Object(o.a)(D,2),F=R[0],G=R[1],L=Object(p.c)((function(e){return e.course.deletedTask})),P=e.course,z=We(P.id),Z=$e(P.id),M=Be(P.id),V=function(e){z.remove(e.value.id)},W=function(e){Z.remove(e.value.id)},$=[{field:"id",headerName:"ID",width:80},{field:"idnumber",headerName:"ID Number",width:200},{field:"name",headerName:"Student Name",width:250},{field:"actions",headerName:"Actions",width:280,renderCell:function(e){return Object(a.jsx)(f.a,{direction:"row",spacing:1,children:Object(a.jsx)(b.a,{"aria-label":"delete",color:"error",onClick:function(){return V(e)},children:Object(a.jsx)(u.a,{})})})}}],q=[{field:"id",headerName:"ID",width:80},{field:"studentid",headerName:"Student ID",width:130},{field:"courseid",headerName:"Course ID",width:130},{field:"grade",headerName:"Grade",width:250},(null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.admin)&&{field:"actions",headerName:"Actions",width:280,renderCell:function(e){return Object(a.jsx)(f.a,{direction:"row",spacing:1,children:Object(a.jsx)(b.a,{"aria-label":"delete",color:"error",onClick:function(){return W(e)},children:Object(a.jsx)(u.a,{})})})}}];Object(r.useEffect)((function(){M.refresh()}),[L]);var H=[{field:"id",headerName:"ID",width:60},{field:"name",headerName:"Task Name",width:150},{field:"filename",headerName:"Task's File Name",width:200},(null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.admin)&&{field:"solutions",headerName:"Solutions URL's",minWidth:350,flex:1},{field:"actions",headerName:"Actions",width:100,renderCell:function(t){var n,r,c;return Object(a.jsxs)(f.a,{direction:"row",spacing:1,children:[(null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.admin)&&Object(a.jsx)(b.a,{"aria-label":"delete",color:"error",onClick:function(){return K(t)},children:Object(a.jsx)(u.a,{})}),!(null===e||void 0===e||null===(r=e.user)||void 0===r?void 0:r.admin)&&Object(a.jsx)(b.a,{"aria-label":"delete",color:"error",onClick:function(){return B(t)},children:Object(a.jsx)(tt.a,{})}),Object(a.jsx)("a",{href:null===t||void 0===t||null===(c=t.value)||void 0===c?void 0:c.filename,children:Object(a.jsx)(b.a,{"aria-label":"View",children:Object(a.jsx)(Qe.a,{})})})]})}}],K=function(e){M.remove(e.value.id)},B=function(e){U(e)};Object(r.useEffect)((function(){L&&G(!0)}),[L]);var J=null===z||void 0===z||null===(c=z.list)||void 0===c?void 0:c.map((function(e){return{id:null===e||void 0===e?void 0:e.id,name:e.name,idnumber:e.idnumber,actions:e}})),X=null===M||void 0===M||null===(i=M.list)||void 0===i?void 0:i.map((function(e){var t=e.filename.substring(e.filename.lastIndexOf("/")+1,e.filename.length);return{id:e.id,name:e.name,filename:t,solutions:e.filesolutions,actions:e}})),Y=Object(a.jsxs)(pe.a,{sx:ct.card,children:[Object(a.jsx)(me.a,{action:Object(a.jsx)(Ce,{})}),Object(a.jsx)(xe.a,{sx:{height:"90%"},children:Object(a.jsx)(Te,{handleAdd:function(){w(!C)},btnText:"Add Student",title:"Students List",columns:$,rows:J})})]}),Q=Object(a.jsxs)(pe.a,{sx:ct.card,children:[Object(a.jsx)(me.a,{action:Object(a.jsx)(Ce,{})}),Object(a.jsx)(xe.a,{sx:{height:"90%"},children:Object(a.jsx)(Te,{handleAdd:function(){g(!m)},btnText:(null===e||void 0===e||null===(s=e.user)||void 0===s?void 0:s.admin)&&"Add Grade",title:"Grades List",columns:q,rows:function(){var t,n;return(null===e||void 0===e?void 0:e.user.admin)?null===Z||void 0===Z||null===(n=Z.list)||void 0===n?void 0:n.map((function(e){var t;return{id:e.id,studentid:null===(t=e.student)||void 0===t?void 0:t.idnumber,courseid:e.courseId,grade:e.grade,actions:e}})):null===Z||void 0===Z||null===(t=Z.list)||void 0===t?void 0:t.filter((function(t){var n;return t.student.idnumber==(null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.idnumber)})).map((function(e){var t;return{id:e.id,studentid:null===(t=e.student)||void 0===t?void 0:t.idnumber,courseid:e.courseId,grade:e.grade,actions:e}}))}()})})]}),ee=Object(a.jsxs)(pe.a,{sx:ct.card,children:[Object(a.jsx)(me.a,{action:Object(a.jsx)(Ce,{})}),Object(a.jsxs)(xe.a,{sx:{height:"90%"},children:[F&&Object(a.jsx)(ie.a,{severity:"success",children:"Task has been deleted successfully"}),Object(a.jsx)(Te,{handleAdd:function(){_(!N)},btnText:(null===e||void 0===e||null===(d=e.user)||void 0===d?void 0:d.admin)&&"Add Task",title:"Task List",columns:H,rows:X})]})]});return Object(a.jsxs)("div",{className:"course-container",children:[Object(a.jsx)(ze,{course:P,students:z,open:m,setOpen:g}),Object(a.jsx)(Ve,{course:P,open:C,setOpen:w}),Object(a.jsx)(Xe,{course:P,open:N,setOpen:_}),Object(a.jsx)(at,{course:P,open:T,setOpen:U}),Object(a.jsx)(Ae,{course:P,setView:h,user:null===e||void 0===e?void 0:e.user}),0===v&&Y,1===v&&Q,2===v&&ee]})}var ct={btn:{width:"150px",fontWeight:"400",textTransform:"inherit"},card:{height:"100%",flex:"6"}};function it(){var e,t=Object(r.useState)(!1),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(),d=Object(o.a)(s,2),l=d[0],v=d[1],h=Object(p.c)((function(e){return e.course.deleted})),O=ce(),x=q(null===O||void 0===O?void 0:O.id),m=[{field:"id",headerName:"ID",width:80},{field:"name",headerName:"Course name",width:250},{field:"count",headerName:"Students count",width:250,type:"number"},{field:"actions",headerName:"Actions",width:280,renderCell:function(e){return Object(a.jsxs)(f.a,{direction:"row",spacing:1,children:[(null===O||void 0===O?void 0:O.admin)&&Object(a.jsx)(b.a,{"aria-label":"delete",color:"error",onClick:function(){return t=e,void x.remove(t.value.id);var t},children:Object(a.jsx)(u.a,{})}),Object(a.jsx)(b.a,{"aria-label":"View",onClick:function(){v(e.value)},children:Object(a.jsx)(j.a,{})})]})}}],g=null===x||void 0===x||null===(e=x.list)||void 0===e?void 0:e.map((function(e){return{id:e.id,name:e.name,actions:e}}));return Object(r.useEffect)((function(){setTimeout((function(){x.refresh()}),[2e3])}),[c,h]),Object(a.jsxs)("div",{className:"home-container",children:[Object(a.jsx)(se,{open:c,setOpen:i}),Object(a.jsx)(Oe,{}),Object(a.jsx)("div",{className:"datagrid-container",children:l?Object(a.jsx)(rt,{course:l,user:O}):Object(a.jsx)(Te,{handleAdd:function(){i(!c)},rows:g,columns:m,title:"Course List",btnText:(null===O||void 0===O?void 0:O.admin)&&"Add Course"})})]})}n(727);var st=n(806),ot=n(229);var dt=function(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(""),d=Object(o.a)(s,2),u=d[0],l=d[1],j=Object(p.b)(),b=Object(p.c)((function(e){return e.user.error}));return Object(st.e)(),Object(a.jsx)("div",{children:Object(a.jsx)("div",{id:"SignIncontainer",children:Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsx)("div",{id:"SignIn",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;return alert("You have entered an invalid email address!"),!1}(c.toLowerCase())&&function(e){if(e.length<6)return alert("Too short"),!1;if(-1===e.search(/\d/))return alert("No num"),!1;if(-1===e.search(/[a-zA-Z]/))return alert("no chars"),!1;return!0}(u)&&j(function(e,t){return function(n){n({type:"USER_SIGNIN_ATTEMPT",payload:{}}),m.a.post(V+"/signin",{email:e,password:t}).then((function(e){!0===e.data.success?(n({type:ne,payload:e.data.user}),te.a.set("userInstance",JSON.stringify(e.data.user)),S.push("/")):n({type:ae,payload:0})})).catch((function(e){n({type:ae,payload:e})}))}}(c.toLowerCase(),u))},autocomplete:"on",children:[0===b&&Object(a.jsx)(ot.a,{variant:"danger",children:"Email and\\or password are incorrect!"}),Object(a.jsx)("p",{id:"title",children:"Sign In"}),Object(a.jsxs)("div",{className:"email-field",children:[Object(a.jsx)("input",{id:"email-signin",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"user name or email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."})]}),Object(a.jsxs)("div",{className:"password-field",children:[Object(a.jsx)("input",{id:"pass-signin",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"password:","aria-label":"password:",onChange:function(e){return l(e.target.value)},"aria-describedby":"basic-addon2"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("a",{id:"forgot",href:"/ForgotPass",children:"Forgot password?"})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("button",{className:"SignInButton",type:"submit",children:"Signin"})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"need-acc-txt",children:["Need an account? ",Object(a.jsx)("a",{href:"/SignUp",children:"Sign-Up"})," "]})})]})})})})})};function ut(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(Oe,{}),Object(a.jsx)(dt,{})]})}var lt=function(){var e=ce();return e&&Object.keys(e).length>0?Object(a.jsx)(it,{}):Object(a.jsx)(ut,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var jt=n(124),bt=n(410),ft="USER_SIGNIN_ATTEMPT",vt="USER_SIGNIN_SUCCESS",ht="USER_SIGNIN_FAILED",Ot="USER_SIGNUP_ATTEMPT",pt="USER_SIGNUP_SUCCESS",xt="USER_SIGNUP_FAILED",mt="USER_SIGNOUT_SUCCESS";var gt=Object(jt.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ft:return{logging:!0};case vt:return{logging:!1,loggedin:!0,user:t.payload};case ht:return{logging:!1,loggedin:!1,error:t.payload};case Ot:return{registering:!0};case pt:return{registering:!1,loggedin:!1,user:null};case xt:return{registering:!1,loggedin:!1,error:t.payload};case mt:return{loggedin:!1,user:null,error:null};default:return e}},course:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{deleted:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return{courses:t.payload,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,added:!1};case y:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,added:!0};case L:return{grades:null===e||void 0===e?void 0:e.grades,students:t.payload,courses:null===e||void 0===e?void 0:e.courses,tasks:null===e||void 0===e?void 0:e.tasks,added:!1};case _:case w:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,added:!0};case P:return{grades:t.payload,students:null===e||void 0===e?void 0:e.students,courses:null===e||void 0===e?void 0:e.courses,tasks:null===e||void 0===e?void 0:e.tasks,added:!1};case z:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:t.payload,added:!1};case U:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,deleted:!0,added:!1};case Z:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,added:!0};case R:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,deletedTask:!0,added:!1};case I:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,deletedStudent:!0,added:!1};case k:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,deletedGrade:!0,added:!1};default:return e}}}),St=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||jt.d,yt=Object(jt.e)(gt,{},St(Object(jt.a)(bt.a)));n(729);var Ct=function(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(""),d=Object(o.a)(s,2),u=d[0],l=d[1],j=Object(r.useState)(""),b=Object(o.a)(j,2),f=b[0],v=b[1],x=Object(r.useState)(""),g=Object(o.a)(x,2),y=g[0],C=g[1],w=Object(r.useState)(""),E=Object(o.a)(w,2),k=E[0],N=E[1],_=Object(r.useState)(""),A=Object(o.a)(_,2),I=A[0],T=A[1],U=Object(p.c)((function(e){return e.user.error})),D=Object(p.b)(),R=Object(st.e)();function F(e){return e.length<1?(alert("Too short"),!1):-1===e.search(/[a-zA-Z]/)?(alert("no chars"),!1):-1===e.search(/[0-9]/)||(alert("you cannot write number at your name"),!1)}return Object(a.jsx)("div",{children:Object(a.jsx)("div",{id:"SignUpcontainer",children:Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsx)("div",{id:"SignUp",children:Object(a.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),function(e){if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;return alert("You have entered an invalid email address!"),!1}(c.toLowerCase())&&function(e){if(e.length<6)return alert("Too short"),!1;if(-1===e.search(/\d/))return alert("No num"),!1;if(-1===e.search(/[a-zA-Z]/))return alert("no chars"),!1;return!0}(u)&&F(y)&&F(k)&&I){if(u!==f)return alert("The passwords do not match"),!1;D(function(e,t,n,a,r){return function(){var c=Object(O.a)(h.a.mark((function c(i){var s;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i({type:"USER_SIGNUP_ATTEMPT",payload:{}}),c.prev=1,c.next=4,m.a.post(V+"/signup",{email:e,password:t,firstname:n,lastname:a,ID:r});case 4:(s=c.sent).data.success?(i({type:"USER_SIGNUP_SUCCESS",payload:s}),S.push("/")):0===s.data.error?i({type:re,payload:0}):1===s.data.error&&i({type:re,payload:1}),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(1),i({type:re,payload:c.t0});case 11:case"end":return c.stop()}}),c,null,[[1,8]])})));return function(e){return c.apply(this,arguments)}}()}(c.toLowerCase(),u,y,k,I)),alert("Account signed up successfully, please login."),R.push("/signin")}},children:[0===U&&Object(a.jsx)(ot.a,{variant:"danger",children:"Email is already used. Please write another email address."}),Object(a.jsx)("p",{id:"title",children:"Sign Up"}),Object(a.jsx)("input",{id:"Firstname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return C(e.target.value)},placeholder:"Enter Firstname","aria-label":"Fullname","aria-describedby":"basic-addon1"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please choose a Firstname."}),Object(a.jsx)("input",{id:"Lastname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return N(e.target.value)},placeholder:"Enter Lastname","aria-label":"Lastname","aria-describedby":"basic-addon1"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(a.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"Enter Email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please choose a email."}),Object(a.jsx)("input",{id:"password2",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return l(e.target.value)},placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(a.jsx)("input",{id:"password3",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return v(e.target.value)},placeholder:"Reenter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(a.jsx)("input",{id:"ID",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return T(e.target.value)},placeholder:"ID Number"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please enter your ID number."}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("button",{className:"SignInButton",type:"submit",children:"Signup"})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"need-acc-txt",children:["Have an account? ",Object(a.jsx)("a",{href:"/SignIn",children:"Signin"})]})})]})})})})})},wt=function(e){Object(ue.a)(n,e);var t=Object(le.a)(n);function n(){return Object(oe.a)(this,n),t.apply(this,arguments)}return Object(de.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(Oe,{}),Object(a.jsx)(Ct,{})]})}}]),n}(r.Component);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(p.a,{store:yt,children:Object(a.jsx)(st.c,{history:S,children:Object(a.jsxs)(st.d,{children:[Object(a.jsx)(st.b,{exact:!0,path:"/",component:lt}),Object(a.jsx)(st.b,{path:"/SignIn",component:ut}),Object(a.jsx)(st.b,{path:"/SignUp",component:wt}),Object(a.jsx)(st.a,{from:"*",to:"/404"})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[730,1,2]]]);
//# sourceMappingURL=main.57db286c.chunk.js.map