(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),s=a(20),i=a.n(s),o=(a(84),a(7)),d=a(8),l=a(10),j=a(9),b=(a(85),a(59),a(127)),u=a(128),h=a(126),O=(a(86),a.p+"static/media/logo.23f3f658.png"),p=a(71),m=Object(p.a)(),f=a(14),x=(a(91),a.p+"static/media/avatar.5fedd648.png"),v=a(27),g=a.n(v),y=a(56),w=a.n(y),N=a(73),S=a(36),C=a.n(S),E="USER_SIGNIN_FAILED",k="USER_SIGNUP_FAILED";var I=a(17);var A=function(e){var t=g.a.get("userInstance"),a=Object(f.b)();if(t){var r=JSON.parse(t);return console.log(r),Object(n.jsxs)(I.a,{className:"user-instance",children:[Object(n.jsx)("img",{className:"avatar",src:x,alt:"profile picture"}),Object(n.jsxs)(I.a.Toggle,{id:"dropdown-basic",children:["Hello ",r.data.user.first_name]}),Object(n.jsxs)(I.a.Menu,{children:[Object(n.jsx)(I.a.Item,{href:"#/action-1",children:"My Profile"}),Object(n.jsx)(I.a.Item,{href:"/",onClick:function(){a((function(e){g.a.remove("userInstance"),e({type:"USER_SIGNOUT_SUCCESS"})}))},children:"Logout"})]})]})}return Object(n.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(n.jsx)("a",{href:"/Signin",className:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",children:"Login"}),Object(n.jsx)("a",{href:"/Signup",className:"btn btn-secondary btn-lg active",role:"button","aria-pressed":"true",children:"Sign Up"})]})},P=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"navbar-parent",children:Object(n.jsxs)(b.a,{expand:"lg",children:[Object(n.jsx)(b.a.Brand,{href:"#home",children:Object(n.jsx)("img",{src:O,height:"",alt:"logo",className:"d-inline-block align-top logoc"})}),Object(n.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(b.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsxs)(u.a,{className:"mr-auto",children:[Object(n.jsx)("a",{href:"/",children:"Home  "}),Object(n.jsx)("a",{href:"/Signin",children:"  Login  "}),Object(n.jsxs)(h.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(n.jsx)(h.a.Item,{href:"#action/3.1",children:"Action"}),Object(n.jsx)(h.a.Item,{href:"#action/3.2",children:"Another action"}),Object(n.jsx)(h.a.Item,{href:"#action/3.3",children:"Something"}),Object(n.jsx)(h.a.Divider,{}),Object(n.jsx)(h.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),Object(n.jsx)(A,{})]})]})})}}]),a}(r.Component),_=a(13),U=a(76),T=(a(114),a(34));var R=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(T.a,{style:{width:"18rem"},children:[Object(n.jsx)(T.a.Img,{variant:"top",src:e.imagePath}),Object(n.jsxs)(T.a.Body,{children:[Object(n.jsx)(T.a.Title,{children:e.title}),Object(n.jsxs)(T.a.Text,{children:["Click here to see more ",e.title]}),Object(n.jsx)(U.a,{variant:"primary",children:"Find out more"})]})]})})};var F=function(e){var t=Object(r.useState)(),a=Object(_.a)(t,2),c=a[0],s=a[1];return Object(r.useEffect)((function(){return function(){C.a.get("https://techstar12.herokuapp.com/fetch-categories").then((function(e){e.data.success?(s(e.data.categories),console.log(c)):console.log("Error: could not fetch category list from server.")})).catch((function(e){console.log(e)}))}})),Object(n.jsxs)("div",{className:"HomePagecontainer",children:[Object(n.jsx)(R,{title:"Phones",imagePath:""}),Object(n.jsx)(R,{title:"Computer",imagePath:""}),Object(n.jsx)(R,{title:"Tablet",imagePath:""})]})},B=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(F,{})]})}}]),a}(r.Component),L=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(B,{})})}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(121),G=a(33),M=a(77),q="USER_SIGNIN_ATTEMPT",Z="USER_SIGNIN_SUCCESS",W="USER_SIGNIN_FAILED",z="USER_SIGNUP_ATTEMPT",J="USER_SIGNUP_SUCCESS",H="USER_SIGNUP_FAILED",$="USER_SIGNOUT_SUCCESS";var V=g.a.getJSON("userInstance")||null,X=0;X=V?{loggedin:!0,user:V}:{};var Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.c,K=Object(G.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return{logging:!0};case Z:return{logging:!1,loggedin:!0,user:t.payload};case W:return{logging:!1,loggedin:!1,error:t.payload};case z:return{registering:!0};case J:return{registering:!1,loggedin:!0,user:t.payload};case H:return{registering:!1,loggedin:!1,error:t.payload};case $:return{loggedin:!1,user:null,error:null};default:return e}}),X,Y(Object(G.a)(M.a))),Q=(a(115),a(32)),ee=a(50);var te=function(e){var t=Object(r.useState)(""),a=Object(_.a)(t,2),s=a[0],i=a[1],o=Object(r.useState)(""),d=Object(_.a)(o,2),l=d[0],j=d[1],b=Object(f.b)(),u=Object(f.c)((function(e){return e.error})),h=c.a.createRef();return Object(D.e)(),Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"SignIncontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"SignIn",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b(function(e,t){return function(a){a({type:"USER_SIGNIN_ATTEMPT",payload:{}}),C.a.post("https://techstar12.herokuapp.com/signin",{email:e,password:t}).then((function(e){e.data.success?(a({type:"USER_SIGNIN_SUCCESS",payload:e}),g.a.set("userInstance",JSON.stringify(e)),m.push("/")):0===e.data.error?a({type:E,payload:0}):1===e.data.error&&a({type:E,payload:1})})).catch((function(e){a({type:E,payload:e})}))}}(s,l))},children:[0===u&&Object(n.jsx)(ee.a,{variant:"danger",children:"Email and\\or password are incorrect!"}),Object(n.jsx)("p",{id:"title",children:"Sign In To Your Account"}),Object(n.jsxs)("div",{className:"email-field",children:[Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"user name or email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."})]}),Object(n.jsxs)("div",{className:"password-field",children:[Object(n.jsx)("input",{id:"password",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"password:","aria-label":"password:",onChange:function(e){return j(e.target.value)},"aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("a",{id:"forgot",href:"/ResetPass",children:"Forgot password?"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"SignInButton",type:"submit",href:"/",children:"Login"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"need-acc-txt",children:["Need an account? ",Object(n.jsx)("a",{href:"/Signup",children:"Sign-Up"})," "]})}),Object(n.jsx)(Q.a,{ref:h,sitekey:"6LcZtBoaAAAAAF3eCScaWwdsdv4y6CR_BMoM5i1B",onChange:function(e){console.log("Captcha value:",e)}})]})})})})})},ae=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(te,{})]})}}]),a}(r.Component);a(117);var ne=function(e){var t=Object(r.useState)(""),a=Object(_.a)(t,2),s=a[0],i=a[1],o=Object(r.useState)(""),d=Object(_.a)(o,2),l=d[0],j=d[1],b=Object(r.useState)(""),u=Object(_.a)(b,2),h=u[0],O=u[1],p=Object(r.useState)(""),x=Object(_.a)(p,2),v=x[0],y=x[1],S=Object(r.useState)(""),E=Object(_.a)(S,2),I=E[0],A=E[1],P=c.a.createRef(),U=Object(f.c)((function(e){return e.error})),T=Object(f.b)();function R(e){return e.length<1?(alert("Too short"),!1):-1===e.search(/[a-zA-Z]/)?(alert("no chars"),!1):-1===e.search(/[0-9]/)||(alert("you cannot write number at your name"),!1)}return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"SignUpcontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"SignUp",children:Object(n.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(s)||(alert("You have entered an invalid email address!"),0))&&function(e){if(e.length<6)return alert("Too short"),!1;if(-1===e.search(/\d/))return alert("No num"),!1;if(-1===e.search(/[a-zA-Z]/))return alert("no chars"),!1;return!0}(l)&&R(v)&&R(I)){if(l!==h)return alert("The passwords do not match"),!1;T(function(e,t,a,n){return function(){var r=Object(N.a)(w.a.mark((function r(c){var s;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c({type:"USER_SIGNUP_ATTEMPT",payload:{}}),r.prev=1,r.next=4,C.a.post("https://techstar12.herokuapp.com/signup",{email:e,password:t,firstname:a,lastname:n});case 4:(s=r.sent).data.success?(c({type:"USER_SIGNUP_SUCCESS",payload:s}),g.a.set("userInstance",JSON.stringify(s)),m.push("/")):0===s.data.error?c({type:k,payload:0}):1===s.data.error&&c({type:k,payload:1}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),c({type:k,payload:r.t0});case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}()}(s,l,v,I))}},children:[0===U&&Object(n.jsx)(ee.a,{variant:"danger",children:"Email is already used. Please write another email address."}),Object(n.jsx)("p",{id:"title",children:"Sign Up"}),Object(n.jsx)("input",{id:"Firstname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return y(e.target.value)},placeholder:"Enter Firstname","aria-label":"Fullname","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a Firstname."}),Object(n.jsx)("input",{id:"Lastname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return A(e.target.value)},placeholder:"Enter Lastname","aria-label":"Lastname","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"Enter Email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a email."}),Object(n.jsx)("input",{id:"password",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return j(e.target.value)},placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"password1",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return O(e.target.value)},placeholder:"ReEnter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",children:"Signup"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"need-acc-txt",children:[" Have an account? ",Object(n.jsx)("a",{href:"/signin",children:"Sign-In"})," "]})}),Object(n.jsx)(Q.a,{ref:P,sitekey:"6LcZtBoaAAAAAF3eCScaWwdsdv4y6CR_BMoM5i1B",onChange:function(e){console.log("Captcha value:",e)}})]})})})})})},re=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(ne,{})]})}}]),a}(r.Component);a(118);var ce=function(e){var t=Object(r.useState)(""),a=Object(_.a)(t,2),c=(a[0],a[1],Object(r.useState)("")),s=Object(_.a)(c,2);return s[0],s[1],Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"UpdatePasswordcontainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"UpdatePassword",children:Object(n.jsxs)("form",{className:"UpdatePasswordForm",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"Update Password"}),Object(n.jsx)("input",{id:"password",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("input",{id:"password1",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"Re-enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",onClick:function(){var e=document.getElementById("password").value,t=document.getElementById("password1").value;return function(e){e.length<6?alert("Too short"):-1==e.search(/\d/)?alert("No num"):-1==e.search(/[a-zA-Z]/)&&alert("no chars")}(e),t==e||(alert("The passwords do not match"),!1)},children:"Update Password"})})]})})})})})},se=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(ce,{})]})}}]),a}(r.Component);a(119);var ie=function(e){var t=Object(r.useState)(""),a=Object(_.a)(t,2),s=(a[0],a[1],Object(r.useState)("")),i=Object(_.a)(s,2),o=(i[0],i[1],c.a.createRef());return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"ForgotContainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"Forgot",children:Object(n.jsx)("div",{className:"col login-left",children:Object(n.jsxs)("form",{className:"ForgotForm",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"Reset Password"}),Object(n.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Email Address","aria-label":"email Address","aria-describedby":"basic-addon1"}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"Signup-btn",type:"submit",onClick:"onClickReset()",children:"Reset Password"})}),Object(n.jsx)(Q.a,{ref:o,sitekey:"6LcZtBoaAAAAAF3eCScaWwdsdv4y6CR_BMoM5i1B",onChange:function(e){console.log("Captcha value:",e)}})]})})})})})})},oe=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(ie,{})]})}}]),a}(r.Component),de=(a(69),a.p+"static/media/FinalTask.17e43989.pdf");var le=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"AboutContainer",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{id:"About",children:Object(n.jsx)("div",{className:"col login-left",children:Object(n.jsxs)("form",{className:"AboutForm",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"About"}),Object(n.jsx)("p",{id:"subTitle",children:"Our Office Address"}),Object(n.jsx)("p",{id:"myAnswer",children:"Ort Braude"}),Object(n.jsx)("p",{id:"subTitle",children:"E-mail"}),Object(n.jsx)("a",{id:"myAnswer",href:"mailto:nimnimaor@gmail.com",children:"nimnimaor@gmail.com"}),Object(n.jsx)("p",{id:"subTitle",children:"Website"}),Object(n.jsx)("a",{id:"myAnswer",href:"https://www.w3schools.com/",children:"Visit W3Schools.com!"}),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("a",{href:de,target:"_blank",children:"Privacy Policy & Terms"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn facebook-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://facebook.com/"},children:"Facebook"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn Twitter-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://twitter.com/?lang=en"},children:"Twitter"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"login-btn Telegram-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://telegram.org/"},children:"Telegram"})})]})})})})})})},je=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(le,{})]})}}]),a}(r.Component);a(70);var be=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{id:"ConstractionContainer",children:Object(n.jsx)("div",{id:"Constractionform",children:Object(n.jsx)("div",{className:"col login-left-Constraction",children:Object(n.jsxs)("form",{className:"login-form-Constraction",action:"#",method:"post",autocomplete:"off",children:[Object(n.jsx)("p",{id:"title",children:"This page under constraction. "}),Object(n.jsxs)("div",{className:"constract",children:["Return to ",Object(n.jsx)("a",{href:"/",children:"Dashboard"})]})]})})})})})},ue=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(be,{})]})}}]),a}(r.Component);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(f.a,{store:K,children:Object(n.jsx)(D.c,{history:m,children:Object(n.jsxs)(D.d,{children:[Object(n.jsx)(D.b,{exact:!0,path:"/",component:L}),Object(n.jsx)(D.b,{path:"/SignIn",component:ae}),Object(n.jsx)(D.b,{path:"/Signup",component:re}),Object(n.jsx)(D.b,{path:"/Updatepass",component:se}),Object(n.jsx)(D.b,{path:"/Forgotpass",component:oe}),Object(n.jsx)(D.b,{path:"/About",component:je}),Object(n.jsx)(D.b,{path:"/Constraction",component:ue}),Object(n.jsx)(D.a,{from:"*",to:"/"})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},91:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.0575e560.chunk.js.map