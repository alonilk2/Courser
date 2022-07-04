(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{257:function(e,t,n){},258:function(e,t,n){},259:function(e,t,n){},281:function(e,t,n){},282:function(e,t,n){},288:function(e,t,n){},304:function(e,t,n){},306:function(e,t,n){},307:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),s=n(33),i=n.n(s),d=(n(257),n(258),n(6)),o=n(109),u=n.n(o),l=n(222),j=n.n(l),b=n(384),f=n(369),h=(n(259),n(15)),v=n.n(h),O=n(17),p=n(19),m=n(32),x=n.n(m),g=n(211),S=Object(g.a)(),y="COURSE_ADD_SUCCESS",E="COURSE_ADD_FAILED",C="GRADE_ADD_SUCCESS",w="GRADE_ADD_FAILED",N="GRADE_REMOVE_SUCCESS",k="GRADE_REMOVE_FAILED",_="STUDENT_ADD_SUCCESS",A="STUDENT_ADD_FAILED",I="STUDENT_REMOVE_SUCCESS",T="STUDENT_REMOVE_FAILED",U="COURSE_REMOVE_SUCCESS",D="COURSE_REMOVE_FAILED",R="TASK_REMOVE_SUCCESS",F="TASK_REMOVE_FAILED",G="COURSE_FETCH_SUCCESS",P="STUDENTS_FETCH_SUCCESS",L="GRADES_FETCH_SUCCESS",z="TASKS_FETCH_SUCCESS",Z="TASK_ADD_SUCCESS",M="TASK_ADD_FAILED",V="https://coursemanagement-braude.herokuapp.com";function W(e,t){return function(n){x.a.post(V+"/course",{name:e,teacher:t}).then((function(e){return!0===e.data.success?n({type:y,payload:e}):n({type:E,payload:e})})).catch((function(e){n({type:E,payload:e})}))}}function $(e){return function(t){x.a.delete(V+"/course/"+e).then((function(e){return!0===e.data.success?t({type:U,payload:e}):t({type:D,payload:e})})).catch((function(e){t({type:D,payload:e})}))}}function q(e){var t=Object(p.c)((function(e){return e.course.courses})),n=Object(p.b)(),a=function(){var t;n((t=e,function(e){x.a.get(V+"/course/"+t).then((function(t){return e({type:G,payload:t.data.course})})).catch((function(e){console.log(e)}))}))},c=function(){var e=Object(O.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n($(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){a()}),[]),{list:t,refresh:a,remove:c}}var H=n(376),K=n(385),B=n(389),J=n(386),X=n(387),Y=n(362),Q=n(380),ee=n(90),te=n.n(ee),ne="USER_SIGNIN_SUCCESS",ae="USER_SIGNIN_FAILED",re="USER_SIGNUP_FAILED";function ce(){var e=Object(p.c)((function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.user})),t=Object(p.b)();return Object(r.useEffect)((function(){!function(){var e=te.a.get("userInstance");e&&(e=JSON.parse(e),t({type:ne,payload:e}))}()}),[]),e}var se=n(374);function ie(e){var t=Object(r.useState)(),n=Object(d.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(),o=Object(d.a)(i,2),u=o[0],l=o[1],j=Object(p.b)(),b=ce(),f=function(){e.setOpen(!1)},h=function(){var t=Object(O.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c){t.next=6;break}return t.next=3,j(W(c,null===b||void 0===b?void 0:b.id));case 3:e.setOpen(!1),t.next=7;break;case 6:l(!0);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)(K.a,{open:e.open,onClose:f,children:[u&&Object(a.jsx)(se.a,{severity:"error",children:"Some details are missing."}),Object(a.jsx)(Y.a,{children:"Add Course"}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(X.a,{children:"Enter course name and click 'Submit':"}),Object(a.jsx)(H.a,{autoFocus:!0,margin:"dense",id:"name",label:"Course Name",type:"text",fullWidth:!0,variant:"standard",onChange:function(e){return s(e.target.value)}})]}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(Q.a,{onClick:f,children:"Cancel"}),Object(a.jsx)(Q.a,{onClick:h,children:"Submit"})]})]})}var de=n(40),oe=n(45),ue=n(106),le=n(105),je=n(375),be=n(373),fe=(n(281),n.p,n(111));n(282);var he=n.p+"static/media/avatar.ecffce2f.png";var ve=function(e){var t=te.a.get("userInstance"),n=Object(p.b)();if(t){var r=JSON.parse(t);return Object(a.jsxs)("div",{className:"newDiv",children:[Object(a.jsx)("img",{className:"avatar",src:he,alt:"profile picture"}),Object(a.jsxs)(fe.a,{className:"user-instance",children:[Object(a.jsxs)(fe.a.Toggle,{id:"dropdown-basic",children:["Hello ",r.first_name]}),Object(a.jsxs)(fe.a.Menu,{children:[Object(a.jsx)(fe.a.Item,{href:"/profile",children:"My Profile"}),Object(a.jsx)(fe.a.Item,{href:"/",onClick:function(){n((function(e){te.a.remove("userInstance"),e({type:"USER_SIGNOUT_SUCCESS"})}))},children:"Logout"})]})]})]})}return Object(a.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(a.jsx)("a",{href:"/Signin",className:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",children:"Sign In"}),Object(a.jsx)("a",{href:"/Signup",className:"btn btn-secondary btn-lg active",role:"button","aria-pressed":"true",children:"Sign Up"})]})},Oe=function(e){Object(ue.a)(n,e);var t=Object(le.a)(n);function n(){return Object(de.a)(this,n),t.apply(this,arguments)}return Object(oe.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"navbar-parent",children:Object(a.jsxs)(je.a,{expand:"lg",children:[Object(a.jsx)(je.a.Brand,{href:"/",children:Object(a.jsx)("h1",{children:"Courser"})}),Object(a.jsx)(je.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsxs)(je.a.Collapse,{id:"basic-navbar-nav",children:[Object(a.jsx)(be.a,{className:"mr-auto"}),Object(a.jsx)(ve,{})]})]})})}}]),n}(r.Component),pe=n(392),me=n(394),xe=n(393),ge=n(125),Se=n(379),ye=n(381);function Ee(){return Object(a.jsx)("div",{role:"presentation",children:Object(a.jsxs)(Se.a,{"aria-label":"breadcrumb",children:[Object(a.jsx)(ye.a,{underline:"hover",color:"inherit",href:"/",children:"Home"}),Object(a.jsx)(ge.a,{color:"text.primary",children:"Course"})]})})}var Ce=n(388),we=n(391),Ne=n(368),ke=n(390),_e=n(367);n(288);function Ae(e){var t;return Object(a.jsx)("div",{className:"menu-container",children:Object(a.jsxs)(Ce.a,{sx:{width:"100%",minWidth:150,bgcolor:"background.paper"},component:"nav","aria-labelledby":"nested-list-subheader",subheader:Object(a.jsx)(ke.a,{component:"div",id:"nested-list-subheader",children:"Course: "+e.course.name}),children:[Object(a.jsx)(_e.a,{}),(null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.admin)&&Object(a.jsx)(we.a,{onClick:function(){return e.setView(0)},children:Object(a.jsx)(Ne.a,{primary:"Students"})}),Object(a.jsx)(we.a,{onClick:function(){return e.setView(1)},children:Object(a.jsx)(Ne.a,{primary:"Grades"})}),Object(a.jsx)(we.a,{onClick:function(){return e.setView(2)},children:Object(a.jsx)(Ne.a,{primary:"Tasks"})})]})})}var Ie=n(370);function Te(e){var t;return Object(a.jsxs)(pe.a,{sx:Ue.card,children:[Object(a.jsx)(xe.a,{action:function(){if(null===e||void 0===e?void 0:e.btnText)return Object(a.jsx)(Q.a,{variant:"contained",sx:Ue.btn,onClick:e.handleAdd,children:e.btnText})}(),title:e.title}),Object(a.jsx)(me.a,{sx:{height:"90%"},children:(null===(t=e.rows)||void 0===t?void 0:t.length)>0&&Object(a.jsx)(Ie.a,{rows:e.rows,columns:e.columns,pageSize:5,rowsPerPageOptions:[5]})})]})}var Ue={btn:{width:"150px",fontWeight:"400",textTransform:"inherit"},card:{height:"100%"}};function De(e,t,n){return function(a){x.a.post(V+"/grade",{courseId:e,id:t,grade:n}).then((function(e){return!0===e.data.success?a({type:C,payload:e}):a({type:w,payload:e})})).catch((function(e){a({type:w,payload:e})}))}}function Re(e){return function(t){x.a.delete(V+"/grade/"+e).then((function(e){return!0===e.data.success?t({type:N,payload:e}):t({type:k,payload:e})})).catch((function(e){t({type:k,payload:e})}))}}var Fe=n(378),Ge=n(382),Pe=n(398),Le=n(371);function ze(e){var t,n=Object(r.useState)(),c=Object(d.a)(n,2),s=c[0],i=c[1],o=Object(r.useState)(),u=Object(d.a)(o,2),l=u[0],j=u[1],b=Object(r.useState)(),f=Object(d.a)(b,2),h=f[0],m=f[1],x=Object(p.b)(),g=null===e||void 0===e||null===(t=e.students)||void 0===t?void 0:t.list;Object(r.useEffect)((function(){var t;(null===e||void 0===e||null===(t=e.students)||void 0===t?void 0:t.length)>0&&j(null===e||void 0===e?void 0:e.students[0].idnumber)}),[]);var S=function(){e.setOpen(!1)},y=function(){var t=Object(O.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!s||!l){t.next=6;break}return t.next=3,x(De(e.course.id,l,s));case 3:e.setOpen(!1),t.next=7;break;case 6:m(!0);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=null===g||void 0===g?void 0:g.map((function(e){return Object(a.jsx)(Ge.a,{value:e.idnumber,children:e.idnumber})}));return Object(a.jsxs)(K.a,{open:e.open,onClose:S,children:[h&&Object(a.jsx)(se.a,{severity:"error",children:"Some details are missing."}),Object(a.jsx)(Y.a,{children:"Add Grade"}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(X.a,{children:"Fill the form and click 'Submit':"}),Object(a.jsxs)(Pe.a,{fullWidth:!0,children:[Object(a.jsx)(Fe.a,{id:"demo-simple-select-label",children:"Student ID"}),Object(a.jsx)(Le.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:l,label:"Student ID",onChange:function(e){return j(e.target.value)},children:E})]}),Object(a.jsx)(H.a,{autoFocus:!0,margin:"dense",id:"name",label:"Grade",type:"number",fullWidth:!0,variant:"standard",onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(Q.a,{onClick:S,children:"Cancel"}),Object(a.jsx)(Q.a,{onClick:y,children:"Submit"})]})]})}function Ze(e,t,n){return function(a){x.a.post(V+"/student",{id:e,name:t,courseId:n}).then((function(e){return!0===e.data.success?a({type:_,payload:e}):a({type:A,payload:e})})).catch((function(e){a({type:A,payload:e})}))}}function Me(e){return function(t){x.a.delete(V+"/student/"+e).then((function(e){return!0===e.data.success?t({type:I,payload:e}):t({type:T,payload:e})})).catch((function(e){t({type:T,payload:e})}))}}function Ve(e){var t=Object(r.useState)(),n=Object(d.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(),o=Object(d.a)(i,2),u=o[0],l=o[1],j=Object(r.useState)(),b=Object(d.a)(j,2),f=b[0],h=b[1],m=Object(p.b)(),x=function(){e.setOpen(!1)},g=function(){var t=Object(O.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c||!u){t.next=6;break}return t.next=3,m(Ze(u,c,null===e||void 0===e||null===(n=e.course)||void 0===n?void 0:n.id));case 3:e.setOpen(!1),t.next=7;break;case 6:h(!0);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)(K.a,{open:e.open,onClose:x,children:[f&&Object(a.jsx)(se.a,{severity:"error",children:"Some details are missing."}),Object(a.jsx)(Y.a,{children:"Add name"}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(X.a,{children:"Fill the form and click 'Submit':"}),Object(a.jsx)(H.a,{autoFocus:!0,margin:"dense",id:"name",label:"Student ID",type:"text",fullWidth:!0,variant:"standard",onChange:function(e){return l(e.target.value)}}),Object(a.jsx)(H.a,{autoFocus:!0,margin:"dense",id:"name",label:"Student Name",type:"text",fullWidth:!0,variant:"standard",onChange:function(e){return s(e.target.value)}})]}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(Q.a,{onClick:x,children:"Cancel"}),Object(a.jsx)(Q.a,{onClick:g,children:"Submit"})]})]})}function We(e){var t=Object(p.c)((function(e){return e.course.students})),n=Object(p.c)((function(e){return e.course.added})),a=Object(p.c)((function(e){return e.course.deletedStudent})),c=Object(p.b)(),s=function(){c(function(e){return function(t){x.a.get(V+"/student/"+e).then((function(e){return t({type:P,payload:e.data.students})})).catch((function(e){console.log(e)}))}}(e))},i=function(){var e=Object(O.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(Me(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){s()}),[]),Object(r.useEffect)((function(){s()}),[n,a]),{list:t,remove:i}}function $e(e){var t=Object(p.c)((function(e){return e.course.grades})),n=Object(p.c)((function(e){return e.course.added})),a=Object(p.c)((function(e){return e.course.deletedGrade})),c=Object(p.b)(),s=function(){c(function(e){return function(t){x.a.get(V+"/grade/"+e).then((function(e){return t({type:L,payload:e.data.grades})})).catch((function(e){console.log(e)}))}}(e))},i=function(){var e=Object(O.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(Re(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){s()}),[]),Object(r.useEffect)((function(){s()}),[n,a]),{list:t,remove:i}}function qe(e,t,n){return function(){var a=Object(O.a)(v.a.mark((function a(r){var c;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,x.a.post(V+"/tasks",{file:n,courseId:e,name:t});case 3:if(!0!==(c=a.sent).data.success){a.next=6;break}return a.abrupt("return",r({type:Z,payload:c}));case 6:return a.abrupt("return",r({type:M,payload:c}));case 9:a.prev=9,a.t0=a.catch(0),r({type:M,payload:a.t0});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}function He(e){return function(t){x.a.delete(V+"/tasks/"+e).then((function(e){return!0===e.data.success?t({type:R,payload:e}):t({type:F,payload:e})})).catch((function(e){t({type:F,payload:e})}))}}function Ke(e){var t=Object(p.c)((function(e){return e.course.tasks})),n=Object(p.c)((function(e){return e.course.added})),a=Object(p.b)(),c=function(){a(function(e){return function(t){x.a.get(V+"/tasks/"+e).then((function(e){return t({type:z,payload:e.data.tasks})})).catch((function(e){console.log(e)}))}}(e))},s=function(){var e=Object(O.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(He(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c()}),[]),Object(r.useEffect)((function(){c()}),[n]),{list:t,remove:s,refresh:c}}var Be=n(218);function Je(e){var t=Object(r.useState)(),n=Object(d.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(),o=Object(d.a)(i,2),u=o[0],l=o[1],j=Object(r.useState)(),b=Object(d.a)(j,2),f=b[0],h=b[1],m=Object(p.b)(),x=function(){e.setOpen(!1)},g=function(){var t=Object(O.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c||!f){t.next=6;break}return t.next=3,m(qe(e.course.id,c,f));case 3:e.setOpen(!1),t.next=7;break;case 6:l(!0);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)(K.a,{open:e.open,onClose:x,children:[u&&Object(a.jsx)(se.a,{severity:"error",children:"Some details are missing."}),Object(a.jsx)(Y.a,{children:"Add Tasks"}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(X.a,{children:"Fill the form, drag a file and click 'Submit':"}),Object(a.jsx)(H.a,{autoFocus:!0,margin:"dense",id:"name",label:"Task Name",type:"text",fullWidth:!0,variant:"standard",onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:Object(a.jsx)(Be.a,{apiKey:"9cdd9705c3027e652fccc937143932d8",onSuccess:function(e){h(e)}})})]}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(Q.a,{onClick:x,children:"Cancel"}),Object(a.jsx)(Q.a,{onClick:g,children:"Submit"})]})]})}var Xe=n(221),Ye=n.n(Xe);function Qe(e){var t,n,c,s,i,o,l=Object(r.useState)(1),j=Object(d.a)(l,2),h=j[0],v=j[1],O=Object(r.useState)(!1),m=Object(d.a)(O,2),x=m[0],g=m[1],S=Object(r.useState)(!1),y=Object(d.a)(S,2),E=y[0],C=y[1],w=Object(r.useState)(!1),N=Object(d.a)(w,2),k=N[0],_=N[1],A=Object(r.useState)(),I=Object(d.a)(A,2),T=I[0],U=I[1],D=Object(p.c)((function(e){return e.course.deletedTask})),R=e.course,F=We(R.id),G=$e(R.id),P=Ke(R.id),L=function(e){F.remove(e.value.id)},z=function(e){G.remove(e.value.id)},Z=[{field:"id",headerName:"ID",width:80},{field:"idnumber",headerName:"ID Number",width:200},{field:"name",headerName:"Student Name",width:250},{field:"actions",headerName:"Actions",width:280,renderCell:function(e){return Object(a.jsx)(f.a,{direction:"row",spacing:1,children:Object(a.jsx)(b.a,{"aria-label":"delete",color:"error",onClick:function(){return L(e)},children:Object(a.jsx)(u.a,{})})})}}],M=[{field:"id",headerName:"ID",width:80},{field:"studentid",headerName:"Student ID",width:130},{field:"courseid",headerName:"Course ID",width:130},{field:"grade",headerName:"Grade",width:250},(null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.admin)&&{field:"actions",headerName:"Actions",width:280,renderCell:function(e){return Object(a.jsx)(f.a,{direction:"row",spacing:1,children:Object(a.jsx)(b.a,{"aria-label":"delete",color:"error",onClick:function(){return z(e)},children:Object(a.jsx)(u.a,{})})})}}];Object(r.useEffect)((function(){P.refresh()}),[D]);var V=[{field:"id",headerName:"ID",width:60},{field:"name",headerName:"Task Name",width:200},{field:"filename",headerName:"Task's File Name",width:350},{field:"actions",headerName:"Actions",width:100,renderCell:function(t){var n,r;return Object(a.jsxs)(f.a,{direction:"row",spacing:1,children:[(null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.admin)&&Object(a.jsx)(b.a,{"aria-label":"delete",color:"error",onClick:function(){return W(t)},children:Object(a.jsx)(u.a,{})}),Object(a.jsx)("a",{href:null===t||void 0===t||null===(r=t.value)||void 0===r?void 0:r.filename,children:Object(a.jsx)(b.a,{"aria-label":"View",children:Object(a.jsx)(Ye.a,{})})})]})}}],W=function(e){P.remove(e.value.id)};Object(r.useEffect)((function(){D&&U(!0)}),[D]);var $=null===F||void 0===F||null===(n=F.list)||void 0===n?void 0:n.map((function(e){return{id:null===e||void 0===e?void 0:e.id,name:e.name,idnumber:e.idnumber,actions:e}})),q=null===G||void 0===G||null===(c=G.list)||void 0===c?void 0:c.map((function(t,n){var a,r;return(null===e||void 0===e||null===(a=e.user)||void 0===a?void 0:a.id)===t.studentId?{id:t.id,studentid:null===(r=t.student)||void 0===r?void 0:r.idnumber,courseid:t.courseId,grade:t.grade,actions:t}:{id:n+1}})),H=null===P||void 0===P||null===(s=P.list)||void 0===s?void 0:s.map((function(e){var t=e.filename.substring(e.filename.lastIndexOf("/")+1,e.filename.length);return{id:e.id,name:e.name,filename:t,actions:e}})),K=Object(a.jsxs)(pe.a,{sx:et.card,children:[Object(a.jsx)(xe.a,{action:Object(a.jsx)(Ee,{})}),Object(a.jsx)(me.a,{sx:{height:"90%"},children:Object(a.jsx)(Te,{handleAdd:function(){C(!E)},btnText:"Add Student",title:"Students List",columns:Z,rows:$})})]}),B=Object(a.jsxs)(pe.a,{sx:et.card,children:[Object(a.jsx)(xe.a,{action:Object(a.jsx)(Ee,{})}),Object(a.jsx)(me.a,{sx:{height:"90%"},children:Object(a.jsx)(Te,{handleAdd:function(){g(!x)},btnText:(null===e||void 0===e||null===(i=e.user)||void 0===i?void 0:i.admin)&&"Add Grade",title:"Grades List",columns:M,rows:q})})]}),J=Object(a.jsxs)(pe.a,{sx:et.card,children:[Object(a.jsx)(xe.a,{action:Object(a.jsx)(Ee,{})}),Object(a.jsxs)(me.a,{sx:{height:"90%"},children:[T&&Object(a.jsx)(se.a,{severity:"success",children:"Task has been deleted successfully"}),Object(a.jsx)(Te,{handleAdd:function(){_(!k)},btnText:(null===e||void 0===e||null===(o=e.user)||void 0===o?void 0:o.admin)&&"Add Task",title:"Task List",columns:V,rows:H})]})]});return Object(a.jsxs)("div",{className:"course-container",children:[Object(a.jsx)(ze,{course:R,students:F,open:x,setOpen:g}),Object(a.jsx)(Ve,{course:R,open:E,setOpen:C}),Object(a.jsx)(Je,{course:R,open:k,setOpen:_}),Object(a.jsx)(Ae,{course:R,setView:v,user:null===e||void 0===e?void 0:e.user}),0===h&&K,1===h&&B,2===h&&J]})}var et={btn:{width:"150px",fontWeight:"400",textTransform:"inherit"},card:{height:"100%",flex:"6"}};function tt(){var e,t=Object(r.useState)(!1),n=Object(d.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(),o=Object(d.a)(i,2),l=o[0],h=o[1],v=Object(p.c)((function(e){return e.course.deleted})),O=ce(),m=q(null===O||void 0===O?void 0:O.id),x=[{field:"id",headerName:"ID",width:80},{field:"name",headerName:"Course name",width:250},{field:"count",headerName:"Students count",width:250,type:"number"},{field:"actions",headerName:"Actions",width:280,renderCell:function(e){return Object(a.jsxs)(f.a,{direction:"row",spacing:1,children:[Object(a.jsx)(b.a,{"aria-label":"delete",color:"error",onClick:function(){return t=e,void m.remove(t.value.id);var t},children:Object(a.jsx)(u.a,{})}),Object(a.jsx)(b.a,{"aria-label":"View",onClick:function(){h(e.value)},children:Object(a.jsx)(j.a,{})})]})}}],g=null===m||void 0===m||null===(e=m.list)||void 0===e?void 0:e.map((function(e){return{id:e.id,name:e.name,actions:e}}));return Object(r.useEffect)((function(){setTimeout((function(){m.refresh()}),[2e3])}),[c,v]),Object(a.jsxs)("div",{className:"home-container",children:[Object(a.jsx)(ie,{open:c,setOpen:s}),Object(a.jsx)(Oe,{}),Object(a.jsx)("div",{className:"datagrid-container",children:l?Object(a.jsx)(Qe,{course:l,user:O}):Object(a.jsx)(Te,{handleAdd:function(){s(!c)},rows:g,columns:x,title:"Course List",btnText:(null===O||void 0===O?void 0:O.admin)&&"Add Course"})})]})}n(304);var nt=n(383),at=n(158);var rt=function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(""),o=Object(d.a)(i,2),u=o[0],l=o[1],j=Object(p.b)(),b=Object(p.c)((function(e){return e.user.error}));return Object(nt.e)(),Object(a.jsx)("div",{children:Object(a.jsx)("div",{id:"SignIncontainer",children:Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsx)("div",{id:"SignIn",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;return alert("You have entered an invalid email address!"),!1}(c.toLowerCase())&&function(e){if(e.length<6)return alert("Too short"),!1;if(-1===e.search(/\d/))return alert("No num"),!1;if(-1===e.search(/[a-zA-Z]/))return alert("no chars"),!1;return!0}(u)&&j(function(e,t){return function(n){n({type:"USER_SIGNIN_ATTEMPT",payload:{}}),x.a.post(V+"/signin",{email:e,password:t}).then((function(e){!0===e.data.success?(n({type:ne,payload:e.data.user}),te.a.set("userInstance",JSON.stringify(e.data.user)),S.push("/")):n({type:ae,payload:0})})).catch((function(e){n({type:ae,payload:e})}))}}(c.toLowerCase(),u))},autocomplete:"on",children:[0===b&&Object(a.jsx)(at.a,{variant:"danger",children:"Email and\\or password are incorrect!"}),Object(a.jsx)("p",{id:"title",children:"Sign In"}),Object(a.jsxs)("div",{className:"email-field",children:[Object(a.jsx)("input",{id:"email-signin",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return s(e.target.value)},placeholder:"user name or email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."})]}),Object(a.jsxs)("div",{className:"password-field",children:[Object(a.jsx)("input",{id:"pass-signin",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"password:","aria-label":"password:",onChange:function(e){return l(e.target.value)},"aria-describedby":"basic-addon2"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("a",{id:"forgot",href:"/ForgotPass",children:"Forgot password?"})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("button",{className:"SignInButton",type:"submit",children:"Signin"})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"need-acc-txt",children:["Need an account? ",Object(a.jsx)("a",{href:"/SignUp",children:"Sign-Up"})," "]})})]})})})})})};function ct(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(Oe,{}),Object(a.jsx)(rt,{})]})}var st=function(){var e=ce();return e&&Object.keys(e).length>0?Object(a.jsx)(tt,{}):Object(a.jsx)(ct,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var it=n(92),dt=n(223),ot="USER_SIGNIN_ATTEMPT",ut="USER_SIGNIN_SUCCESS",lt="USER_SIGNIN_FAILED",jt="USER_SIGNUP_ATTEMPT",bt="USER_SIGNUP_SUCCESS",ft="USER_SIGNUP_FAILED",ht="USER_SIGNOUT_SUCCESS";var vt=Object(it.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ot:return{logging:!0};case ut:return{logging:!1,loggedin:!0,user:t.payload};case lt:return{logging:!1,loggedin:!1,error:t.payload};case jt:return{registering:!0};case bt:return{registering:!1,loggedin:!1,user:null};case ft:return{registering:!1,loggedin:!1,error:t.payload};case ht:return{loggedin:!1,user:null,error:null};default:return e}},course:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{deleted:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return{courses:t.payload,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,added:!1};case y:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,added:!0};case P:return{grades:null===e||void 0===e?void 0:e.grades,students:t.payload,courses:null===e||void 0===e?void 0:e.courses,tasks:null===e||void 0===e?void 0:e.tasks,added:!1};case _:case C:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,added:!0};case L:return{grades:t.payload,students:null===e||void 0===e?void 0:e.students,courses:null===e||void 0===e?void 0:e.courses,tasks:null===e||void 0===e?void 0:e.tasks,added:!1};case z:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:t.payload,added:!1};case U:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,deleted:!0,added:!1};case Z:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,added:!0};case R:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,deletedTask:!0,added:!1};case I:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,deletedStudent:!0,added:!1};case N:return{courses:null===e||void 0===e?void 0:e.courses,students:null===e||void 0===e?void 0:e.students,grades:null===e||void 0===e?void 0:e.grades,tasks:null===e||void 0===e?void 0:e.tasks,deletedGrade:!0,added:!1};default:return e}}}),Ot=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||it.d,pt=Object(it.e)(vt,{},Ot(Object(it.a)(dt.a)));n(306);var mt=function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(""),o=Object(d.a)(i,2),u=o[0],l=o[1],j=Object(r.useState)(""),b=Object(d.a)(j,2),f=b[0],h=b[1],m=Object(r.useState)(""),g=Object(d.a)(m,2),y=g[0],E=g[1],C=Object(r.useState)(""),w=Object(d.a)(C,2),N=w[0],k=w[1],_=Object(r.useState)(""),A=Object(d.a)(_,2),I=A[0],T=A[1],U=Object(p.c)((function(e){return e.user.error})),D=Object(p.b)(),R=Object(nt.e)();function F(e){return e.length<1?(alert("Too short"),!1):-1===e.search(/[a-zA-Z]/)?(alert("no chars"),!1):-1===e.search(/[0-9]/)||(alert("you cannot write number at your name"),!1)}return Object(a.jsx)("div",{children:Object(a.jsx)("div",{id:"SignUpcontainer",children:Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsx)("div",{id:"SignUp",children:Object(a.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),function(e){if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;return alert("You have entered an invalid email address!"),!1}(c.toLowerCase())&&function(e){if(e.length<6)return alert("Too short"),!1;if(-1===e.search(/\d/))return alert("No num"),!1;if(-1===e.search(/[a-zA-Z]/))return alert("no chars"),!1;return!0}(u)&&F(y)&&F(N)&&I){if(u!==f)return alert("The passwords do not match"),!1;D(function(e,t,n,a,r){return function(){var c=Object(O.a)(v.a.mark((function c(s){var i;return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s({type:"USER_SIGNUP_ATTEMPT",payload:{}}),c.prev=1,c.next=4,x.a.post(V+"/signup",{email:e,password:t,firstname:n,lastname:a,ID:r});case 4:(i=c.sent).data.success?(s({type:"USER_SIGNUP_SUCCESS",payload:i}),S.push("/")):0===i.data.error?s({type:re,payload:0}):1===i.data.error&&s({type:re,payload:1}),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(1),s({type:re,payload:c.t0});case 11:case"end":return c.stop()}}),c,null,[[1,8]])})));return function(e){return c.apply(this,arguments)}}()}(c.toLowerCase(),u,y,N,I)),alert("Account signed up successfully, please login."),R.push("/signin")}},children:[0===U&&Object(a.jsx)(at.a,{variant:"danger",children:"Email is already used. Please write another email address."}),Object(a.jsx)("p",{id:"title",children:"Sign Up"}),Object(a.jsx)("input",{id:"Firstname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return E(e.target.value)},placeholder:"Enter Firstname","aria-label":"Fullname","aria-describedby":"basic-addon1"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please choose a Firstname."}),Object(a.jsx)("input",{id:"Lastname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return k(e.target.value)},placeholder:"Enter Lastname","aria-label":"Lastname","aria-describedby":"basic-addon1"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(a.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return s(e.target.value)},placeholder:"Enter Email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please choose a email."}),Object(a.jsx)("input",{id:"password2",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return l(e.target.value)},placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(a.jsx)("input",{id:"password3",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return h(e.target.value)},placeholder:"Reenter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(a.jsx)("input",{id:"ID",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return T(e.target.value)},placeholder:"ID Number"}),Object(a.jsx)("div",{className:"invalid-feedback",children:"Please enter your ID number."}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("button",{className:"SignInButton",type:"submit",children:"Signup"})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"need-acc-txt",children:["Have an account? ",Object(a.jsx)("a",{href:"/SignIn",children:"Signin"})]})})]})})})})})},xt=function(e){Object(ue.a)(n,e);var t=Object(le.a)(n);function n(){return Object(de.a)(this,n),t.apply(this,arguments)}return Object(oe.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(Oe,{}),Object(a.jsx)(mt,{})]})}}]),n}(r.Component);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(p.a,{store:pt,children:Object(a.jsx)(nt.c,{history:S,children:Object(a.jsxs)(nt.d,{children:[Object(a.jsx)(nt.b,{exact:!0,path:"/",component:st}),Object(a.jsx)(nt.b,{path:"/SignIn",component:ct}),Object(a.jsx)(nt.b,{path:"/SignUp",component:xt}),Object(a.jsx)(nt.a,{from:"*",to:"/404"})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[307,1,2]]]);
//# sourceMappingURL=main.5284bee5.chunk.js.map