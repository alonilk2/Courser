(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),c=a.n(n),s=a(19),i=a.n(s),o=(a(79),a(8)),l=a(9),d=a(11),j=a(10),u=(a(80),a(58),a(127)),b=a(126),h=(a(81),a.p+"static/media/logo.23f3f658.png"),p=a(25),O=Object(p.a)(),m=a(12),f=(a(88),a.p+"static/media/avatar.5fedd648.png"),x=a(22),v=a.n(x),g=a(24),y=a.n(g),N=a(36),w=a(32),S=a.n(w),C="USER_SIGNIN_FAILED",A="USER_SIGNUP_FAILED";var P=a(37);var k=function(e){var t=v.a.get("userInstance"),a=Object(m.b)();if(t){var n=JSON.parse(t);return console.log(n),Object(r.jsxs)(P.a,{className:"user-instance",children:[Object(r.jsx)("img",{className:"avatar",src:f,alt:"profile picture"}),Object(r.jsxs)(P.a.Toggle,{id:"dropdown-basic",children:["Hello ",n.data.user.first_name]}),Object(r.jsxs)(P.a.Menu,{children:[Object(r.jsx)(P.a.Item,{href:"/profile",children:"My Profile"}),Object(r.jsx)(P.a.Item,{href:"/",onClick:function(){a((function(e){v.a.remove("userInstance"),e({type:"USER_SIGNOUT_SUCCESS"})}))},children:"Logout"})]})]})}return Object(r.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(r.jsx)("a",{href:"/Signin",className:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",children:"Sign In"}),Object(r.jsx)("a",{href:"/Signup",className:"btn btn-secondary btn-lg active",role:"button","aria-pressed":"true",children:"Sign Up"})]})},E=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"navbar-parent",children:Object(r.jsxs)(u.a,{expand:"lg",children:[Object(r.jsx)(u.a.Brand,{href:"/",children:Object(r.jsx)("img",{src:h,height:"",alt:"logo",className:"d-inline-block align-top logoc"})}),Object(r.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsxs)(u.a.Collapse,{id:"basic-navbar-nav",children:[Object(r.jsx)(b.a,{className:"mr-auto"}),Object(r.jsx)(k,{})]})]})})}}]),a}(n.Component),U=(a(111),a(38));var _=function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)(U.a,{style:{width:"18rem"},children:[Object(r.jsx)(U.a.Img,{variant:"top",src:"./"+e.imagePath}),Object(r.jsxs)(U.a.Body,{children:[Object(r.jsx)(U.a.Title,{children:e.title}),Object(r.jsxs)(U.a.Text,{children:["Click here to see more ",e.title]}),Object(r.jsx)("a",{href:"/Constraction",className:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",children:"Find out more"})]})]})})},I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).categoryList=function(){if(n.state.categories)return n.state.categories.map((function(e){return Object(r.jsx)(_,{title:e.Name,imagePath:e.imagePath},e.Name)}))},n.state={categories:[]},n}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=Object(N.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.categoryList=this.categoryList.bind(this),e.prev=1,e.next=4,S.a.post("https://techstar12.herokuapp.com/fetch_categories");case 4:(t=e.sent).data.success?(this.setState({categories:t.data.result}),console.log(this.state.categories)):console.log("Error: could not fetch category list from server."),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(r.jsx)("div",{className:"HomePagecontainer",children:Object(r.jsx)("div",{className:"row",children:this.categoryList()})})}}]),a}(n.Component),T=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{}),Object(r.jsx)(I,{})]})}}]),a}(n.Component),R=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(T,{})})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(113),Z=a(35),F=a(72),L="USER_SIGNIN_ATTEMPT",G="USER_SIGNIN_SUCCESS",D="USER_SIGNIN_FAILED",q="USER_SIGNUP_ATTEMPT",$="USER_SIGNUP_SUCCESS",B="USER_SIGNUP_FAILED",M="USER_SIGNOUT_SUCCESS";var W=v.a.getJSON("userInstance")||null,J=0;J=W?{loggedin:!0,user:W}:{};var Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.c,V=Object(Z.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{logging:!0};case G:return{logging:!1,loggedin:!0,user:t.payload};case D:return{logging:!1,loggedin:!1,error:t.payload};case q:return{registering:!0};case $:return{registering:!1,loggedin:!0,user:t.payload};case B:return{registering:!1,loggedin:!1,error:t.payload};case M:return{loggedin:!1,user:null,error:null};default:return e}}),J,Y(Object(Z.a)(F.a))),X=a(7),H=(a(112),a(34)),K=a(50);var Q=function(e){var t=Object(n.useState)(""),a=Object(X.a)(t,2),s=a[0],i=a[1],o=Object(n.useState)(""),l=Object(X.a)(o,2),d=l[0],j=l[1],u=Object(n.useState)("[empty]"),b=Object(X.a)(u,2),h=b[0],p=b[1],f=Object(n.useState)("false"),x=Object(X.a)(f,2),g=(x[0],x[1]),y=Object(m.b)(),N=Object(m.c)((function(e){return e.error})),w=c.a.createRef();return Object(z.e)(),Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"SignIncontainer",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{id:"SignIn",children:Object(r.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!function(e){if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;return alert("You have entered an invalid email address!"),!1}(s)||!function(e){if(e.length<6)return alert("Too short"),!1;if(-1===e.search(/\d/))return alert("No num"),!1;if(-1===e.search(/[a-zA-Z]/))return alert("no chars"),!1;return!0}(d)||"[empty]"==h)return alert("You have to verify the Recaptcha !"),!1;y(function(e,t){return function(a){a({type:"USER_SIGNIN_ATTEMPT",payload:{}}),S.a.post("https://techstar12.herokuapp.com/signin",{email:e,password:t}).then((function(e){e.data.success?(a({type:"USER_SIGNIN_SUCCESS",payload:e}),v.a.set("userInstance",JSON.stringify(e)),O.push("/")):0===e.data.error?a({type:C,payload:0}):1===e.data.error&&a({type:C,payload:1})})).catch((function(e){a({type:C,payload:e})}))}}(s,d))},autocomplete:"on",children:[0===N&&Object(r.jsx)(K.a,{variant:"danger",children:"Email and\\or password are incorrect!"}),Object(r.jsx)("p",{id:"title",children:"Sign In To Your Account"}),Object(r.jsxs)("div",{className:"email-field",children:[Object(r.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"user name or email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."})]}),Object(r.jsxs)("div",{className:"password-field",children:[Object(r.jsx)("input",{id:"pass",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"password:","aria-label":"password:",onChange:function(e){return j(e.target.value)},"aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."})]}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("a",{id:"forgot",href:"/ForgotPass",children:"Forgot password?"})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"SignInButton",type:"submit",children:"Sign-In"})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"need-acc-txt",children:["Need an account? ",Object(r.jsx)("a",{href:"/SignUp",children:"Sign-Up"})," "]})}),Object(r.jsx)(H.a,{ref:w,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e),p(e),null==e&&g(!0)}})]})})})})})},ee=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{}),Object(r.jsx)(Q,{})]})}}]),a}(n.Component);a(117);var te=function(e){var t=Object(n.useState)(""),a=Object(X.a)(t,2),s=a[0],i=a[1],o=Object(n.useState)(""),l=Object(X.a)(o,2),d=l[0],j=l[1],u=Object(n.useState)(""),b=Object(X.a)(u,2),h=b[0],p=b[1],f=Object(n.useState)(""),x=Object(X.a)(f,2),g=x[0],w=x[1],C=Object(n.useState)(""),P=Object(X.a)(C,2),k=P[0],E=P[1],U=Object(n.useState)("not fired"),_=Object(X.a)(U,2),I=(_[0],_[1],Object(n.useState)("[empty]")),T=Object(X.a)(I,2),R=T[0],z=T[1],Z=Object(n.useState)(!1),F=Object(X.a)(Z,2),L=(F[0],F[1],Object(n.useState)("false")),G=Object(X.a)(L,2),D=(G[0],G[1]),q=c.a.createRef(),$=Object(m.c)((function(e){return e.error})),B=Object(m.b)();function M(e){return e.length<1?(alert("Too short"),!1):-1===e.search(/[a-zA-Z]/)?(alert("no chars"),!1):-1===e.search(/[0-9]/)||(alert("you cannot write number at your name"),!1)}return Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"SignUpcontainer",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{id:"SignUp",children:Object(r.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),function(e){if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;return alert("You have entered an invalid email address!"),!1}(s)&&function(e){if(e.length<6)return alert("Too short"),!1;if(-1===e.search(/\d/))return alert("No num"),!1;if(-1===e.search(/[a-zA-Z]/))return alert("no chars"),!1;return!0}(d)&&M(g)&&M(k)){if("[empty]"==R)return alert("You have to verify the Recaptcha!"),!1;if(d!==h)return alert("The passwords do not match"),!1;B(function(e,t,a,r){return function(){var n=Object(N.a)(y.a.mark((function n(c){var s;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c({type:"USER_SIGNUP_ATTEMPT",payload:{}}),n.prev=1,n.next=4,S.a.post("https://techstar12.herokuapp.com/signup",{email:e,password:t,firstname:a,lastname:r});case 4:(s=n.sent).data.success?(c({type:"USER_SIGNUP_SUCCESS",payload:s}),v.a.set("userInstance",JSON.stringify(s)),O.push("/")):0===s.data.error?c({type:A,payload:0}):1===s.data.error&&c({type:A,payload:1}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),c({type:A,payload:n.t0});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()}(s,d,g,k)),alert("We sent you an email about your sign-up")}},children:[0===$&&Object(r.jsx)(K.a,{variant:"danger",children:"Email is already used. Please write another email address."}),Object(r.jsx)("p",{id:"title",children:"Sign Up"}),Object(r.jsx)("input",{id:"Firstname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return w(e.target.value)},placeholder:"Enter Firstname","aria-label":"Fullname","aria-describedby":"basic-addon1"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please choose a Firstname."}),Object(r.jsx)("input",{id:"Lastname",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return E(e.target.value)},placeholder:"Enter Lastname","aria-label":"Lastname","aria-describedby":"basic-addon1"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(r.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return i(e.target.value)},placeholder:"Enter Email","aria-label":"user name or email","aria-describedby":"basic-addon1"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please choose a email."}),Object(r.jsx)("input",{id:"password2",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return j(e.target.value)},placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(r.jsx)("input",{id:"password3",type:"password",className:"form-control fix-rounded-right",required:!0,onChange:function(e){return p(e.target.value)},placeholder:"ReEnter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"Signup-btn",type:"submit",children:"Signup"})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"need-acc-txt",children:[" Have an account? ",Object(r.jsx)("a",{href:"/SignIn",children:"Sign-In"})]})}),Object(r.jsx)(H.a,{ref:q,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e),z(e),null==e&&D(!0)},id:"my_captcha_form"})]})})})})})},ae=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{}),Object(r.jsx)(te,{})]})}}]),a}(n.Component);a(118);var re=function(e){var t=Object(n.useState)(""),a=Object(X.a)(t,2),c=(a[0],a[1],Object(n.useState)("")),s=Object(X.a)(c,2);return s[0],s[1],Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"UpdatePasswordcontainer",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{id:"UpdatePassword",children:Object(r.jsxs)("form",{className:"UpdatePasswordForm",action:"#",method:"post",autocomplete:"off",children:[Object(r.jsx)("p",{id:"title",children:"Update Password"}),Object(r.jsx)("input",{id:"pass1",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(r.jsx)("input",{id:"pass2",type:"password",className:"form-control fix-rounded-right",required:!0,placeholder:"Re-enter Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"Signup-btn",type:"submit",onClick:function(){var e=document.getElementById("password").value,t=document.getElementById("password1").value;return function(e){e.length<6?alert("Too short"):-1==e.search(/\d/)?alert("No num"):-1==e.search(/[a-zA-Z]/)&&alert("no chars")}(e),t==e?(alert("We sent you an email about this update"),!0):(alert("The passwords do not match"),!1)},children:"Update Password"})})]})})})})})},ne=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{}),Object(r.jsx)(re,{})]})}}]),a}(n.Component);a(119);var ce=function(e){var t=Object(n.useState)(""),a=Object(X.a)(t,2),s=a[0],i=a[1],o=c.a.createRef(),l=Object(m.b)(),d=Object(n.useState)("[empty]"),j=Object(X.a)(d,2),u=j[0],b=j[1],h=Object(n.useState)("false"),p=Object(X.a)(h,2),O=(p[0],p[1]);return Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"ForgotContainer",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{id:"Forgot",children:Object(r.jsx)("div",{className:"col login-left",children:Object(r.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!function(e){if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;if(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(e))return!0;return alert("You have entered an invalid email address!"),!1}(s)||"[empty]"==u)return alert("You have to verify the Recaptcha!"),!1;var t,a,r;l((t=s,a="Reset Password",r="Please enter this URL to change password: https://techstar12.herokuapp.com/updatepass",function(){var e=Object(N.a)(y.a.mark((function e(n){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.post("https://techstar12.herokuapp.com/sendMail",{email:t,subject:a,text:r});case 3:(c=e.sent).data.error&&console.log(c.data.status),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),alert("We sent you an email to update your password")},children:[Object(r.jsx)("p",{id:"title",children:"Reset Password"}),Object(r.jsx)("input",{id:"email",type:"text",className:"form-control fix-rounded-right",onChange:function(e){return i(e.target.value)},required:!0,placeholder:"Enter Email Address","aria-label":"email Address","aria-describedby":"basic-addon1"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"Signup-btn",type:"submit",children:"Reset Password"})}),Object(r.jsx)(H.a,{ref:o,sitekey:"6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn",onChange:function(e){console.log("Captcha value:",e),b(e),null==e&&O(!0)}})]})})})})})})},se=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{}),Object(r.jsx)(ce,{})]})}}]),a}(n.Component),ie=(a(53),a.p+"static/media/FinalTask.17e43989.pdf");var oe=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"AboutContainer",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{id:"About",children:Object(r.jsx)("div",{className:"col login-left",children:Object(r.jsxs)("form",{className:"AboutForm",action:"#",method:"post",autocomplete:"off",children:[Object(r.jsx)("p",{id:"title",children:"About"}),Object(r.jsx)("p",{id:"subTitle",children:"Our Office Address"}),Object(r.jsx)("p",{id:"myAnswer",children:"Ort Braude"}),Object(r.jsx)("p",{id:"subTitle",children:"E-mail"}),Object(r.jsx)("a",{id:"myAnswer",href:"mailto:nimnimaor@gmail.com",children:"nimnimaor@gmail.com"}),Object(r.jsx)("p",{id:"subTitle",children:"Website"}),Object(r.jsx)("a",{id:"myAnswer",href:"https://www.w3schools.com/",children:"Visit W3Schools.com!"}),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("a",{href:ie,target:"_blank",children:"Privacy Policy & Terms"})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"login-btn facebook-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://facebook.com/"},children:"Facebook"})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"login-btn Twitter-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://twitter.com/?lang=en"},children:"Twitter"})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"login-btn Telegram-login-btn",onClick:function(e){e.preventDefault(),window.location.href="https://telegram.org/"},children:"Telegram"})})]})})})})})})},le=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{}),Object(r.jsx)(oe,{})]})}}]),a}(n.Component);a(43);var de=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"ConstractionContainer",children:Object(r.jsx)("div",{id:"Constractionform",children:Object(r.jsx)("div",{className:"col login-left-Constraction",children:Object(r.jsxs)("form",{className:"login-form-Constraction",action:"#",method:"post",autocomplete:"off",children:[Object(r.jsx)("p",{id:"title",children:"This page under constraction. "}),Object(r.jsxs)("div",{className:"constract",children:["Return to ",Object(r.jsx)("a",{href:"/",children:"Dashboard"})]})]})})})})})},je=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{}),Object(r.jsx)(de,{})]})}}]),a}(n.Component);var ue=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"ConstractionContainer",children:Object(r.jsx)("div",{id:"Constractionform",children:Object(r.jsx)("div",{className:"col login-left-Constraction",children:Object(r.jsxs)("form",{className:"login-form-Constraction",action:"#",method:"post",autocomplete:"off",children:[Object(r.jsx)("p",{id:"title",children:"404 page"}),Object(r.jsxs)("div",{className:"constract",children:["Return to ",Object(r.jsx)("a",{href:"/",children:"Home Page"})]})]})})})})})},be=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{}),Object(r.jsx)(ue,{})]})}}]),a}(n.Component);a(120);var he=function(e){var t=v.a.get("userInstance"),a=Object(n.useState)(""),c=Object(X.a)(a,2),s=(c[0],c[1]),i=Object(n.useState)(""),o=Object(X.a)(i,2),l=(o[0],o[1]),d=Object(n.useState)(""),j=Object(X.a)(d,2),u=(j[0],j[1]);if(Object(m.b)(),t){var b=JSON.parse(t);return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{id:"main-section",children:[Object(r.jsx)("h1",{children:"My Profile"}),Object(r.jsx)("div",{className:"upDetails",children:Object(r.jsx)("a",{href:"/",children:"Edit yous details on"})}),Object(r.jsxs)("div",{className:"content-section",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("p",{className:"col subtitle",children:" First name: "}),Object(r.jsx)("p",{className:"col subtitle",children:" Phone: "}),Object(r.jsx)("p",{className:"col subtitle",children:" Country: "})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("p",{className:"col subtitle",children:[" ",b.data.user.first_name," "]}),Object(r.jsxs)("p",{className:"col subtitle",children:[" ",b.data.user.phonenumber?b.data.user.phonenumber:"-------"]}),Object(r.jsxs)("p",{className:"col subtitle",children:[" ",b.data.user.country?b.data.user.country:"-------"]})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("p",{className:"col subtitle",children:" Last name: "}),Object(r.jsx)("p",{className:"col subtitle",children:" Email: "}),Object(r.jsx)("p",{className:"col subtitle",children:" City: "})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("p",{className:"col subtitle",children:[" ",b.data.user.last_name]}),Object(r.jsxs)("p",{className:"col subtitle",children:[" ",b.data.user.email]}),Object(r.jsxs)("p",{className:"col subtitle",children:[" ",b.data.user.city?b.data.user.city:"-------"]})]})]}),Object(r.jsx)("h2",{children:"Update Password"}),Object(r.jsxs)("div",{className:"updatepass-section",children:[Object(r.jsxs)("div",{className:"col",children:[Object(r.jsx)("input",{id:"password0",type:"password",onChange:function(e){return s(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:"Enter Old Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(r.jsx)("input",{id:"password",type:"password",onChange:function(e){return l(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:"Enter New Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."}),Object(r.jsx)("input",{id:"password1",type:"password",onChange:function(e){return u(e.target.value)},className:"form-control fix-rounded-right",required:!0,placeholder:"Re-enter New Password","aria-label":"password:","aria-describedby":"basic-addon2"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please enter your password."})]}),Object(r.jsxs)("div",{className:"col",children:[Object(r.jsx)("p",{children:"* Both Password must match"}),Object(r.jsx)("p",{children:"* The password must contain at least one number"}),Object(r.jsx)("p",{children:"* The password must contain at least 6 characters"})]})]}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("button",{className:"Signup-btn",type:"submit",children:"Update Password"})})]})})}return Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"main-section",children:Object(r.jsx)("h1",{children:" My Profile "})})})},pe=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{}),Object(r.jsx)(he,{})]})}}]),a}(n.Component);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(m.a,{store:V,children:Object(r.jsx)(z.c,{history:O,children:Object(r.jsxs)(z.d,{children:[Object(r.jsx)(z.b,{exact:!0,path:"/",component:R}),Object(r.jsx)(z.b,{path:"/SignIn",component:ee}),Object(r.jsx)(z.b,{path:"/SignUp",component:ae}),Object(r.jsx)(z.b,{path:"/UpdatePass",component:ne}),Object(r.jsx)(z.b,{path:"/ForgotPass",component:se}),Object(r.jsx)(z.b,{path:"/About",component:le}),Object(r.jsx)(z.b,{path:"/Constraction",component:je}),Object(r.jsx)(z.b,{path:"/profile",component:pe}),Object(r.jsx)(z.b,{path:"/404",component:be}),Object(r.jsx)(z.a,{from:"*",to:"/404"})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t,a){},53:function(e,t,a){},58:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},88:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.ad15aba6.chunk.js.map