(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{116:function(e,t,n){},143:function(e,t,n){},192:function(e,t,n){},214:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var c,a=n(0),i=n.n(a),s=n(56),r=n.n(s),o=(n(172),n(6)),l=n(150),d=n.n(l),j=n(7),b=n(8),u=(b.a.div(c||(c=Object(j.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  overflow: hidden;\n  white-space: nowrap;\n  background: bisque;\n  border-radius: 8px;\n  width: 95%;\n  background-color: transparent;\n  margin-top: .1rem;\n  font-size: 1.1rem;\n  border-style:solid;\n  border-color: #ff7f0e;\n  border-width: .12rem;\n"]))),n(1));function h(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],s=n[1];function r(e,t){var n=[];e.forEach((function(e){n.push({projectIdea:e.projectIdea,projectAudience:e.targetAudience,timeCreated:e.timestamp,tags:e.tags})})),console.log(n),s(n)}return i.a.useEffect((function(){d.a.init({key:"https://docs.google.com/spreadsheets/d/16RglFZM0lMvsGUmSV3QKti_cMsXSIFp6j7zMvTVxDlA/edit?usp=sharing",callback:r,simpleSheet:!0}).then((function(e){console.log(e)})).catch((function(e){console.warn(e)}))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{children:c.map((function(e){var t=e.projectIdea;e.projectAudience;return Object(u.jsxs)("div",{children:[t,Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]},"".concat(t))}))})})}var p,x,O,m,g,f,v,y,C,w,S,N=n(83),k=(n(192),n(24)),_=n(13),I=n(119),F=n.n(I),D=n(153),A=n(21),P=n.n(A),L=(n(143),{envType:"PROD",API_URL:"https://api.devlaunchers.org",STRAPI_URL:"https://api.devlaunchers.org",GOOGLE_AUTH_URL:"https://api.devlaunchers.org/connect/google",DISCORD_AUTH_URL:"https://discord.com/api/oauth2/authorize?client_id=709889509864636496&redirect_uri=https%3A%2F%2Fapi.devlaunchers.com%2Fusers%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify"}),R={envType:"STAGING",API_URL:"https://api-staging.devlaunchers.org",STRAPI_URL:"https://api-staging.devlaunchers.org",GOOGLE_AUTH_URL:"https://api-staging.devlaunchers.org/connect/google",DISCORD_AUTH_URL:"https://discord.com/api/oauth2/authorize?client_id=815294711983112194&redirect_uri=https%3A%2F%2Fapi-staging.devlaunchers.com%2Fusers%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify"},W=function(){if("undefined"!==typeof window){var e=window.location.href;if(-1!==e.indexOf("staging")||-1!==e.indexOf("localhost"))return R}return L},T=b.a.div(p||(p=Object(j.a)(["\n  background-color: #30363E;\n  border-radius: 40px;\n  width: 50%;\n\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),z=b.a.h3(x||(x=Object(j.a)(["\n  font-size: 40px;\n  color: #D3D4D6;\n  margin-top:40px;\n"]))),U=b.a.div(O||(O=Object(j.a)(["\n  padding: 116px;\n"]))),M=b.a.button(m||(m=Object(j.a)(["\n  width: 550px;\n  height: 90px;\n\tbackground: #C4C4C4;\n\tfont-weight: bold;\n\tcolor: #000000;\n\tborder: 0 none;\n\tborder-radius: 30px;\n\tcursor: pointer;\n\tpadding: 30px 5px;\n  margin: 10px 5px;\n  font-size:20px;\n"]))),H=b.a.p(g||(g=Object(j.a)(["\n  color: #F1F4F5;\n"]))),q=b.a.div(f||(f=Object(j.a)(["\n  margin-left: 10px;\n\n  & p {\n   display: inline-block;\n   color: #ffffff;\n   font-size: 15px;\n   text-align: left ;\n   float: left;\n   width: 100%;\n   margin-top: 5px;\n   margin-bottom: 5px;\n   margin-left: 10px;\n  }\n  & input {\n    display: inline-block;\n    float: left;\n    width: 70%;\n    height: 30px;\n    background-color: #c4c4c4;\n    border: none;\n    border-radius: 20px;\n  }\n"]))),E=b.a.div(v||(v=Object(j.a)(["\n\n\n  & p {\n   display: inline-block;\n   color: #ffffff;\n   font-size: 15px;\n   text-align: left ;\n   float: left;\n   width: 100%;\n   margin-top: 30px;\n   margin-bottom: 5px;\n   margin-left: 20px;\n  }\n  & input {\n    display: inline-block;\n    float: left;\n    width: 100%;\n    height: 100px;\n    background-color: #c4c4c4;\n    border: none;\n    border-radius: 20px;\n  }\n"]))),G=b.a.div(y||(y=Object(j.a)(["\n  clear: both;\n\n  & p {\n   display: inline-block;\n   color: #ffffff;\n   font-size: 20px;\n   text-align: left ;\n   float: right;\n\n  }\n  & input {\n    display: inline-block;\n    float: left;\n    width: 235px;\n    height: 30px;\n    background-color: #c4c4c4;\n    border: none;\n    border-radius: 20px;\n  }\n"]))),B=b.a.button(C||(C=Object(j.a)(["\n  width: 130px;\n\tbackground: #C4C4C4;\n\tfont-weight: bold;\n\tcolor: #000000;\n\tborder: 0 none;\n\tborder-radius: 15px;\n\tcursor: pointer;\n\tpadding: 7px 5px;\n  margin-top: 80px;\n  margin-bottom: 20px;\n  font-size:20px;\n  float: right;\n"]))),X=b.a.div(w||(w=Object(j.a)(["\n  width: 535px;\n  margin: 0 auto;\n  padding-top: 30px;\n"]))),Y=b.a.div(S||(S=Object(j.a)(["\n  background-color: #C9CACC;\n  height: 300px;\n  border-radius: 30px;\n  width: 80%; \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  & p {\n    font-size: 30px;\n    font-weight: bold;\n    padding: 0 15% 0 15%; \n  }\n\n  & button {\n   width: 100px;\n   margin: 0 auto;\n   background: #89969F;\n\t font-weight: bold;\n\t color: #000000;\n\t border: 0 none;\n\t border-radius: 30px;\n\t cursor: pointer;\n\t padding: 10px 5px;\n   font-size:20px;\n    }\n  "])));var J=function(){var e=Object(a.useState)("form"),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),r=s[0],l=s[1],d=Object(a.useState)(""),j=Object(o.a)(d,2),b=j[0],h=j[1],p=Object(a.useState)(""),x=Object(o.a)(p,2),O=x[0],m=x[1],g=Object(a.useState)(""),f=Object(o.a)(g,2),v=f[0],y=f[1],C=Object(a.useState)(""),w=Object(o.a)(C,2),S=w[0],N=w[1],_=Object(a.useState)(0),I=Object(o.a)(_,2),A=I[0],L=(I[1],Object(a.useState)(0)),R=Object(o.a)(L,2),G=R[0],J=R[1],V=Object(a.useState)([{skill:"Web Developer"},{skill:"AI / ML"}]),K=Object(o.a)(V,2),Q=K[0],Z=(K[1],Object(a.useState)([{title:"Developer, UX/UX",description:"Lots of programing",isHidden:!1}])),$=Object(o.a)(Z,2),ee=$[0],te=($[1],Object(a.useState)("1")),ne=Object(o.a)(te,2),ce=ne[0],ae=(ne[1],Object(a.useState)("Beginner")),ie=Object(o.a)(ae,2),se=ie[0],re=(ie[1],Object(a.useState)("")),oe=Object(o.a)(re,2),le=oe[0],de=oe[1],je=Object(a.useState)(""),be=Object(o.a)(je,2),ue=be[0],he=be[1],pe=Object(a.useState)(""),xe=Object(o.a)(pe,2),Oe=xe[0],me=xe[1],ge=Object(a.useState)(""),fe=Object(o.a)(ge,2),ve=fe[0],ye=fe[1],Ce=Object(a.useState)(""),we=Object(o.a)(Ce,2),Se=we[0],Ne=we[1],ke=function(){var e=Object(D.a)(F.a.mark((function e(t){var n,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={ideaName:b,tagline:O,description:v,targetAudience:S,hourCommitmentMin:A,hourCommitmentMax:G,skills:Q,openPositions:ee,author:ce,difficultyLevel:se,discord:le,email:ue,calendly:Oe,features:ve,experience:Se},e.next=4,P.a.post("".concat(W().STRAPI_URL,"/idea-cards/"),n);case 4:200===(a=e.sent).status&&(l(a.data.id),h(""),N(""),y(""),m(""),c("submited"),de(""),he(""),me(""),ye(""),Ne(""));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();console.log(n);var _e=function(e,t){J(e),c(t)};return""===n?Object(u.jsx)(T,{children:Object(u.jsxs)(U,{children:[Object(u.jsx)(z,{children:"Dev Ideas"}),Object(u.jsxs)(H,{children:["Have an idea for a development project?",Object(u.jsx)("br",{}),"Want to help develop an idea?",Object(u.jsx)("br",{}),"Let\u2019s get started!"]}),Object(u.jsx)(M,{onClick:function(){return _e(1,"PSI")},children:"Solving a Problem"}),Object(u.jsxs)(M,{onClick:function(){return _e(2,"Non-PSI")},children:["I want to workshop someone else\u2019s idea!",Object(u.jsx)("p",{className:"coming_soon",children:"(Coming Soon)"})]})]})}):"form"===n?Object(u.jsx)(T,{children:Object(u.jsxs)(X,{children:[Object(u.jsx)(z,{children:"Dev Ideas"}),Object(u.jsxs)(H,{children:["Have an idea for a development project?",Object(u.jsx)("br",{}),"Share your idea with us!",Object(u.jsx)("br",{})]}),Object(u.jsxs)("form",{onSubmit:ke,children:[Object(u.jsx)("div",{className:"test",children:Object(u.jsxs)("div",{className:"progress_bar",children:[Object(u.jsxs)("div",{className:"circule",children:[Object(u.jsx)("div",{className:"completed"}),Object(u.jsx)("p",{children:"Idea Form"})]}),Object(u.jsxs)("div",{className:"circule",children:[Object(u.jsx)("div",{className:""}),Object(u.jsx)("p",{children:"Review"})]}),Object(u.jsxs)("div",{className:"circule",children:[Object(u.jsx)("div",{className:""}),Object(u.jsx)("p",{children:"Workshopping"})]}),Object(u.jsxs)("div",{className:"circule",children:[Object(u.jsx)("div",{className:""}),Object(u.jsx)("p",{children:"Recruitment"})]}),Object(u.jsxs)("div",{className:"circule",children:[Object(u.jsx)("div",{className:""}),Object(u.jsx)("p",{children:"Project"})]})]})}),Object(u.jsxs)(q,{children:[Object(u.jsx)("p",{children:"Idea Name"}),Object(u.jsx)("input",{required:!0,type:"text",name:"ideaName",value:b,onChange:function(e){return h(e.target.value)}})]}),Object(u.jsxs)(q,{children:[Object(u.jsx)("p",{children:"Your Discord Name"}),Object(u.jsx)("input",{required:!0,type:"text",name:"discord",value:le,onChange:function(e){return de(e.target.value)}})]}),Object(u.jsxs)(q,{children:[Object(u.jsx)("p",{children:"Your Email"}),Object(u.jsx)("input",{required:!0,type:"text",name:"email",value:ue,onChange:function(e){return he(e.target.value)}})]}),Object(u.jsxs)(q,{children:[Object(u.jsx)("p",{children:"Do you have a Calendly? If so add a link here, if not it\u2019s okay!"}),Object(u.jsx)("input",{required:!0,type:"text",name:"calendly",value:Oe,onChange:function(e){return me(e.target.value)}})]}),Object(u.jsxs)(E,{children:[Object(u.jsx)("p",{children:"What is your experience with development?"}),Object(u.jsx)("input",{type:"text",name:"experience",value:Se,onChange:function(e){return Ne(e.target.value)}})]}),Object(u.jsxs)(E,{children:[Object(u.jsx)("p",{children:"What is your idea?"}),Object(u.jsx)("input",{type:"text",name:"description",value:v,onChange:function(e){return y(e.target.value)}})]}),Object(u.jsxs)(E,{children:[Object(u.jsx)("p",{children:"Why do you think your idea is helpful or would be fun?"}),Object(u.jsx)("input",{type:"text",name:"targetAudience",value:S,onChange:function(e){return N(e.target.value)}})]}),Object(u.jsxs)(E,{children:[Object(u.jsx)("p",{children:"What features would your idea have?"}),Object(u.jsx)("input",{type:"text",name:"features",value:ve,onChange:function(e){return ye(e.target.value)}})]}),Object(u.jsxs)(E,{children:[Object(u.jsx)("p",{children:"Anything else you want to share with us?"}),Object(u.jsx)("input",{type:"text",name:"tagline",value:O,onChange:function(e){return m(e.target.value)}})]}),Object(u.jsx)("p",{className:"text",children:"After submitting your idea will be reviewed and enter the workshopping stage !"}),Object(u.jsx)(B,{type:"submit",children:"Submit"})]})]})}):"submited"===n?Object(u.jsx)(T,{children:Object(u.jsxs)(Y,{children:[Object(u.jsx)("p",{children:"Thank you for submitting your idea! Next your idea will move on to the workshopping phase. "}),Object(u.jsx)(k.b,{to:"/workshopping/".concat(r),children:Object(u.jsx)("button",{children:"Next"})})]})}):void 0};var V=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),r=(s[0],s[1],Object(a.useState)("")),l=Object(o.a)(r,2),d=l[0],j=l[1],b=Object(a.useState)(""),h=Object(o.a)(b,2),p=h[0],x=h[1],O=Object(a.useState)(""),m=Object(o.a)(O,2),g=m[0],f=m[1],v=Object(a.useState)(""),y=Object(o.a)(v,2),C=y[0],w=y[1],S=Object(a.useState)(0),N=Object(o.a)(S,2),_=N[0],I=(N[1],Object(a.useState)(0)),F=Object(o.a)(I,2),D=F[0],A=F[1],L=Object(a.useState)([{skill:"Web Developer"},{skill:"AI / ML"}]),R=Object(o.a)(L,2),W=R[0],J=(R[1],Object(a.useState)([{title:"Developer, UX/UX",description:"Lots of programing",isHidden:!1}])),V=Object(o.a)(J,2),K=V[0],Q=(V[1],Object(a.useState)("1")),Z=Object(o.a)(Q,2),$=Z[0],ee=(Z[1],Object(a.useState)("Beginner")),te=Object(o.a)(ee,2),ne=te[0],ce=(te[1],Object(a.useState)("")),ae=Object(o.a)(ce,2),ie=ae[0],se=ae[1],re=Object(a.useState)(""),oe=Object(o.a)(re,2),le=oe[0],de=oe[1],je=Object(a.useState)(""),be=Object(o.a)(je,2),ue=be[0],he=be[1],pe=Object(a.useState)(""),xe=Object(o.a)(pe,2),Oe=xe[0],me=xe[1],ge=Object(a.useState)(""),fe=Object(o.a)(ge,2),ve=fe[0],ye=fe[1],Ce=function(e){e.preventDefault();var t={ideaName:d,tagline:p,description:g,targetAudience:C,hourCommitmentMin:_,hourCommitmentMax:D,skills:W,openPositions:K,author:$,difficultyLevel:ne,discord:ie,email:le,calendly:ue,features:Oe,experience:ve};P.a.post("https://api-staging.devlaunchers.org/idea-cards/",t).then((function(e){console.log(e)})),j(""),w(""),f(""),x(""),c("submited"),se(""),de(""),he(""),me(""),ye("")};console.log(D);var we=function(e,t){A(e),c(t)};return""===n?Object(u.jsx)(T,{children:Object(u.jsxs)(U,{children:[Object(u.jsx)(z,{children:"Dev Ideas"}),Object(u.jsxs)(H,{children:["Have an idea for a development project?",Object(u.jsx)("br",{}),"Want to help develop an idea?",Object(u.jsx)("br",{}),"Let\u2019s get started!"]}),Object(u.jsx)(k.b,{to:"/form",children:Object(u.jsx)(M,{onClick:function(){return we(1,"PSI")},children:"Solving a Problem"})}),Object(u.jsx)(k.b,{to:"/cards",children:Object(u.jsxs)(M,{onClick:function(){return we(2,"Non-PSI")},children:["I want to workshop someone else\u2019s idea!",Object(u.jsx)("p",{className:"coming_soon",children:"(Coming Soon)"})]})})]})}):"PSI"===n?Object(u.jsx)(T,{children:Object(u.jsxs)(X,{children:[Object(u.jsx)(z,{children:"Dev Ideas"}),Object(u.jsxs)(H,{children:["Have an idea for a development project?",Object(u.jsx)("br",{}),"Share your idea with us!",Object(u.jsx)("br",{})]}),Object(u.jsxs)("form",{onSubmit:Ce,children:[Object(u.jsx)("div",{className:"test",children:Object(u.jsxs)("div",{className:"progress_bar",children:[Object(u.jsxs)("div",{className:"circule",children:[Object(u.jsx)("div",{className:"completed"}),Object(u.jsx)("p",{children:"Idea Form"})]}),Object(u.jsxs)("div",{className:"circule",children:[Object(u.jsx)("div",{className:""}),Object(u.jsx)("p",{children:"Review"})]}),Object(u.jsxs)("div",{className:"circule",children:[Object(u.jsx)("div",{className:""}),Object(u.jsx)("p",{children:"Workshopping"})]}),Object(u.jsxs)("div",{className:"circule",children:[Object(u.jsx)("div",{className:""}),Object(u.jsx)("p",{children:"Recruitment"})]}),Object(u.jsxs)("div",{className:"circule",children:[Object(u.jsx)("div",{className:""}),Object(u.jsx)("p",{children:"Project"})]})]})}),Object(u.jsxs)(q,{children:[Object(u.jsx)("p",{children:"Idea Name"}),Object(u.jsx)("input",{required:!0,type:"text",name:"ideaName",value:d,onChange:function(e){return j(e.target.value)}})]}),Object(u.jsxs)(q,{children:[Object(u.jsx)("p",{children:"Your Discord Name"}),Object(u.jsx)("input",{required:!0,type:"text",name:"discord",value:ie,onChange:function(e){return se(e.target.value)}})]}),Object(u.jsxs)(q,{children:[Object(u.jsx)("p",{children:"Your Email"}),Object(u.jsx)("input",{required:!0,type:"text",name:"email",value:le,onChange:function(e){return de(e.target.value)}})]}),Object(u.jsxs)(q,{children:[Object(u.jsx)("p",{children:"Do you have a Calendly? If so add a link here, if not it\u2019s okay!"}),Object(u.jsx)("input",{required:!0,type:"text",name:"calendly",value:ue,onChange:function(e){return he(e.target.value)}})]}),Object(u.jsxs)(E,{children:[Object(u.jsx)("p",{children:"What is your experience with development?"}),Object(u.jsx)("input",{type:"text",name:"experience",value:ve,onChange:function(e){return ye(e.target.value)}})]}),Object(u.jsxs)(E,{children:[Object(u.jsx)("p",{children:"What is your idea?"}),Object(u.jsx)("input",{type:"text",name:"description",value:g,onChange:function(e){return f(e.target.value)}})]}),Object(u.jsxs)(E,{children:[Object(u.jsx)("p",{children:"Why do you think your idea is helpful or would be fun?"}),Object(u.jsx)("input",{type:"text",name:"targetAudience",value:C,onChange:function(e){return w(e.target.value)}})]}),Object(u.jsxs)(E,{children:[Object(u.jsx)("p",{children:"What features would your idea have?"}),Object(u.jsx)("input",{type:"text",name:"features",value:Oe,onChange:function(e){return me(e.target.value)}})]}),Object(u.jsxs)(E,{children:[Object(u.jsx)("p",{children:"Anything else you want to share with us?"}),Object(u.jsx)("input",{type:"text",name:"tagline",value:p,onChange:function(e){return x(e.target.value)}})]}),Object(u.jsx)("p",{className:"text",children:"After submitting your idea will be reviewed and enter the workshopping stage !"}),Object(u.jsx)(B,{type:"submit",children:"Submit"})]})]})}):"Non-PSI"===n?Object(u.jsx)(T,{children:Object(u.jsx)(X,{children:Object(u.jsxs)("form",{onSubmit:Ce,children:[Object(u.jsx)(z,{children:"I have an idea about"}),Object(u.jsxs)(q,{children:[Object(u.jsx)("p",{children:"My idea is"}),Object(u.jsx)("input",{required:!0,type:"text",name:"ideaName",value:d,onChange:function(e){return j(e.target.value)}})]}),Object(u.jsxs)(q,{children:[Object(u.jsx)("p",{children:"I will achive this by"}),Object(u.jsx)("input",{type:"text",name:"description",value:g,onChange:function(e){return f(e.target.value)}})]}),Object(u.jsxs)(q,{children:[Object(u.jsx)("p",{children:"People would use this because"}),Object(u.jsx)("input",{type:"text",name:"targetAudience",value:C,onChange:function(e){return w(e.target.value)}})]}),Object(u.jsxs)(G,{children:[Object(u.jsx)("input",{type:"text",name:"tagline",value:p,onChange:function(e){return x(e.target.value)}}),Object(u.jsx)("p",{children:"Is something I need help with"})]}),Object(u.jsx)(B,{type:"submit",children:"Submit"})]})})}):"submited"===n?Object(u.jsx)(T,{children:Object(u.jsxs)(Y,{children:[Object(u.jsx)("p",{children:"Thank you for submitting your idea! Next your idea will move on to the workshopping phase. "}),Object(u.jsx)("button",{children:"Next"})]})}):void 0};function K(){return Object(u.jsxs)("div",{id:"welcomeWrapper",children:[Object(u.jsx)("h1",{children:"DL-edu"}),Object(u.jsx)("h2",{children:"Welcome to the project"}),Object(u.jsx)("h2",{children:"GG WP"}),Object(u.jsx)(V,{})]})}var Q=function(e){return Object(u.jsxs)("div",{className:"singleComment",children:[Object(u.jsx)("img",{alt:"user_image",className:"userImage",src:"https://picsum.photos/70?random=".concat(e.id)}),Object(u.jsxs)("div",{className:"textContent",children:[Object(u.jsxs)("div",{className:"singleCommentContent",children:[Object(u.jsx)("h3",{children:e.author}),Object(u.jsx)("div",{source:e.children,children:Object(u.jsx)("p",{children:e.children})})]}),Object(u.jsx)("div",{className:"singleCommentButtons"})]})]})};var Z=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],i=n[1];Object(a.useEffect)((function(){P.a.get("https://api-staging.devlaunchers.org/idea-cards/".concat(e.selectedCard.id,"/")).then((function(e){i(e.data.comments)}))}));var s=c.map((function(e){return Object(u.jsx)(Q,{author:e.author,id:e._id,children:e.text},e._id)}));return Object(u.jsx)("div",{children:s})},$=n(73),ee=["selectedCard"];var te=function(e){return e.selectedCard,Object($.a)(e,ee),Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={author:e.handleChange,text:e.handleTextChange};P.a.post("https://api-staging.devlaunchers.org/idea-cards/".concat(e.selectedCard.id,"/comment"),n).then((function(t){200===t.status&&(e.setHandleChange(""),e.setHandleTextChange(""))}))},children:[Object(u.jsx)("div",{className:"user_name_comment_box",children:Object(u.jsx)("input",{className:"user_name_comment",type:"text",name:"author",placeholder:"Your name...",value:e.handleChange,onChange:function(t){e.setHandleChange(t.target.value)}})}),Object(u.jsxs)("div",{className:"user_comment",children:[Object(u.jsx)("img",{alt:"user_image",className:"userImageOne",src:"https://picsum.photos/70?random=".concat(e.id)}),Object(u.jsx)("input",{type:"text",name:"text",placeholder:"What are your thoughts?",value:e.handleTextChange,onChange:function(t){e.setHandleTextChange(t.target.value)}})]}),Object(u.jsx)("button",{type:"submit",children:"Submit"})]})})},ne=(n(116),["selectedCard"]);var ce=function(e){return e.selectedCard,Object($.a)(e,ne),Object(u.jsxs)("div",{className:"idea",children:[Object(u.jsxs)("div",{className:"idea_name",children:[Object(u.jsx)("h2",{children:e.selectedCard.ideaName}),Object(u.jsx)("p",{children:e.selectedCard.tagline}),Object(u.jsx)("div",{className:"idea_progress",children:Object(u.jsxs)("div",{className:"workshop_progress_bar",children:[Object(u.jsxs)("div",{className:"workshop_circule",children:[Object(u.jsx)("div",{className:"workshop_completed"}),Object(u.jsx)("p",{children:"Idea Form"})]}),Object(u.jsxs)("div",{className:"workshop_circule",children:[Object(u.jsx)("div",{className:"workshop_completed"}),Object(u.jsx)("p",{children:"Review"})]}),Object(u.jsxs)("div",{className:"workshop_circule",children:[Object(u.jsx)("div",{className:"workshop_completed"}),Object(u.jsx)("p",{children:"Workshopping"})]}),Object(u.jsxs)("div",{className:"workshop_circule",children:[Object(u.jsx)("div",{className:"workshop_incomplete"}),Object(u.jsx)("p",{children:"Recruitment"})]}),Object(u.jsxs)("div",{className:"workshop_circule",children:[Object(u.jsx)("div",{className:"workshop_incomplete"}),Object(u.jsx)("p",{children:"Project"})]})]})})]}),Object(u.jsxs)("div",{className:"description",children:[Object(u.jsx)("h4",{children:"Description"}),Object(u.jsx)("p",{children:e.selectedCard.description})]})]})},ae=["selectedCard"];var ie=function(e){var t;return e.selectedCard,Object($.a)(e,ae),Object(u.jsx)("div",{className:"leader",children:Object(u.jsxs)("div",{className:"leader_info",align:"right",children:[Object(u.jsxs)("div",{className:"leader_name",align:"right",children:[Object(u.jsx)("img",{alt:"user_image",className:"leader_image",src:"https://picsum.photos/70?random=".concat(e.id)}),e.selectedCard.discord]}),Object(u.jsxs)("h6",{children:[Object(u.jsxs)("p",{children:["Submitted: ",(t=e.selectedCard.created_at,new Date(t).toLocaleDateString([],{year:"numeric",month:"long",day:"numeric"}))]}),Object(u.jsx)("p",{children:"Contact"}),Object(u.jsxs)("p",{children:["email: ",e.selectedCard.email]}),Object(u.jsxs)("p",{children:["discord: ",e.selectedCard.discord]})]})]})})};var se=function(e){var t=Object(a.useState)({ideaName:"",discord:"",description:"",email:"",created_at:"",comments:[""]}),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(_.f)().pathname.slice(14,19),r=Object(a.useState)(""),l=Object(o.a)(r,2),d=l[0],j=l[1],b=Object(a.useState)(""),h=Object(o.a)(b,2),p=h[0],x=h[1];return Object(a.useEffect)((function(){P.a.get("https://api-staging.devlaunchers.org/idea-cards/".concat(s)).then((function(e){200===e.status&&i(e.data)}))}),[]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)(ce,{selectedCard:c})}),Object(u.jsx)("div",{className:"form",children:Object(u.jsx)(te,{setHandleChange:j,data:c,setData:i,handleChange:d,setHandleTextChange:x,handleTextChange:p,selectedCard:c})}),Object(u.jsx)("div",{className:"comments",children:Object(u.jsx)(Z,{data:c,selectedCard:c})})]}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)(ie,{selectedCard:c})})})]})},re=(n(214),function(e){return Object(u.jsxs)("div",{className:"nav",children:[Object(u.jsx)(k.b,{to:"/",children:Object(u.jsx)("h3",{children:"Home"})}),Object(u.jsx)(k.b,{to:"/form",children:Object(u.jsx)("h3",{children:"Submit an Idea"})}),Object(u.jsx)(k.b,{to:"/cards",children:Object(u.jsx)("h3",{children:"Potential Projects"})})]})}),oe=n(231),le=n(234),de=n(232),je=n(233);var be,ue,he,pe,xe,Oe,me,ge,fe,ve,ye,Ce,we,Se,Ne,ke,_e,Ie,Fe,De=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),r=s[0],l=s[1],d=Object(a.useState)(""),j=Object(o.a)(d,2),b=j[0],h=j[1],p=Object(a.useState)(""),x=Object(o.a)(p,2),O=x[0],m=x[1],g=Object(a.useState)(0),f=Object(o.a)(g,2),v=f[0],y=(f[1],Object(a.useState)(0)),C=Object(o.a)(y,2),w=C[0],S=(C[1],Object(a.useState)([{skill:"Web Developer"},{skill:"AI / ML"}])),N=Object(o.a)(S,2),k=N[0],_=(N[1],Object(a.useState)([{title:"Developer, UX/UX",description:"Lots of programing",isHidden:!1}])),I=Object(o.a)(_,2),F=I[0],D=(I[1],Object(a.useState)("1")),A=Object(o.a)(D,2),L=A[0],R=(A[1],Object(a.useState)("Beginner")),W=Object(o.a)(R,2),T=W[0];return W[1],Object(u.jsxs)(oe.a,{fluid:!0,className:"container",id:"formWrapper",children:[Object(u.jsx)(le.a,{as:"h1",children:"Submit your idea!!!"}),Object(u.jsxs)(de.a,{id:"survey-form",className:"form",method:"post",onSubmit:function(e){e.preventDefault();var t={ideaName:n,tagline:r,description:b,targetAudience:O,hourCommitmentMin:v,hourCommitmentMax:w,skills:k,openPositions:F,author:L,difficultyLevel:T};P.a.post("https://api.devlaunchers.org/idea-cards",t).then((function(e){console.log(e)})),c(""),m(""),h(""),l("")},children:[Object(u.jsxs)(de.a.Field,{children:[Object(u.jsx)("label",{children:"What project idea?"}),Object(u.jsx)("input",{required:!0,type:"text",name:"ideaName",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(u.jsxs)(de.a.Field,{children:[Object(u.jsx)("label",{children:"Who's is the target audience for your idea?"}),Object(u.jsx)("input",{required:!0,type:"text",name:"targetAudience",value:O,onChange:function(e){return m(e.target.value)}})]}),Object(u.jsxs)(de.a.Field,{children:[Object(u.jsx)("label",{children:"Notes"}),Object(u.jsx)("input",{type:"text",name:"description",value:b,onChange:function(e){return h(e.target.value)}})]}),Object(u.jsxs)(de.a.Field,{children:[Object(u.jsx)("label",{children:"Tags"}),Object(u.jsx)("input",{type:"text",name:"tagline",value:r,onChange:function(e){return l(e.target.value)}})]}),Object(u.jsx)(je.a,{color:"blue",type:"submit",children:"Submit"})]})]})},Ae=b.a.section(be||(be=Object(j.a)(["\n  background-color: #30363E;\n  padding: 58px 0 21px 0;\n"]))),Pe=b.a.ul(ue||(ue=Object(j.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  width: 1280px;\n  padding: 0;\n  margin: 0 auto;\n"]))),Le=b.a.li(he||(he=Object(j.a)(["\n  width: 568px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: 0 42px 50px 0;\n\n  :last-of-type {\n    margin: 0;\n  }\n"]))),Re=b.a.div(pe||(pe=Object(j.a)(["\n  position: absolute;\n  right: 0;\n  top: -32px;\n  background-color: #D3D4D6;\n  border-top-left-radius: 10px;\n  display: flex;\n  align-items: center;\n  height: 32px;\n  width: 203px;\n"]))),We=b.a.div(xe||(xe=Object(j.a)(["\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 21px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: #454D58;\n  margin: 0 0 0 10px;\n"]))),Te=n.p+"static/media/star.af1a0016.svg",ze=b.a.div(Oe||(Oe=Object(j.a)(["\n  background: center / contain no-repeat url(",");\n  width: 18px;\n  height: 18px;\n  margin-left: 16px;\n"])),Te),Ue=n.p+"static/media/AddIconLight.74265fb4.svg",Me=b.a.div(me||(me=Object(j.a)(["\n  position: absolute;\n  left: 32px;\n  top: 0;\n  width: 34.37px;\n  height: 26.73px;\n  background: center / contain no-repeat url(",");\n"])),Ue),He=b.a.div(ge||(ge=Object(j.a)(["\n  background-color: #59687B;\n  padding: 19px 21.46px 8px 29.85px;\n  height: 122px;\n"]))),qe=b.a.div(fe||(fe=Object(j.a)(["\n  width: 516.60px;\n"]))),Ee=b.a.h3(ve||(ve=Object(j.a)(["\n  margin: 0;\n  height: px;\n  font-size: 36px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 42px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: #FFFFFF;\n"]))),Ge=b.a.p(ye||(ye=Object(j.a)(["\n  margin: 6px 0 0 0;\n  font-size: 18px;\n  font-style: italic;\n  font-weight: 500;\n  line-height: 21px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: #FFFFFF\n"]))),Be=b.a.div(Ce||(Ce=Object(j.a)(["\n  background-color: #59687B;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 0;\n"]))),Xe=b.a.a(we||(we=Object(j.a)(["\n  text-decoration: none;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0.21666669845581055px;\n  text-align: center;\n  color: #FFF;\n"]))),Ye=b.a.div(Se||(Se=Object(j.a)(["\n  background-color: #C4C4C4;\n  padding: 10px 0;\n  margin: 0;\n"]))),Je=b.a.ul(Ne||(Ne=Object(j.a)(["\n  display: flex;\n  justify-content: space-around;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n"]))),Ve=b.a.li(ke||(ke=Object(j.a)(["\n  height: 113px;\n  padding-top: 10px;\n  box-sizing: border-box;\n  width: 140px;\n"]))),Ke=b.a.li(_e||(_e=Object(j.a)(["\n  width: 272px;\n  border-right: 1px solid rgba(69, 77, 88, 0.58);\n  border-left: 1px solid rgba(69, 77, 88, 0.58);\n  height: 113px;\n  padding-top: 10px;\n  box-sizing: border-box;\n"]))),Qe=b.a.h4(Ie||(Ie=Object(j.a)(["\n  margin: 0;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 21px;\n  letter-spacing: 0em;\n  text-align: center;\n"]))),Ze=b.a.p(Fe||(Fe=Object(j.a)(["\n  margin: 18px 0 0 0;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 23px;\n  letter-spacing: 0em;\n  text-align: center;\n"])));var $e=function(e){var t=e.cards,n=e.setSelectedCard;return console.log(t.id),Object(u.jsxs)(Le,{children:[Object(u.jsx)(Me,{}),Object(u.jsxs)(Re,{children:[Object(u.jsx)(ze,{}),Object(u.jsx)(We,{children:"Most Recent"})]}),Object(u.jsx)(He,{children:Object(u.jsxs)(qe,{children:[Object(u.jsx)(Ee,{children:t.ideaName}),Object(u.jsx)(Ge,{children:t.description})]})}),Object(u.jsx)(Ye,{children:Object(u.jsxs)(Je,{children:[Object(u.jsxs)(Ve,{children:[Object(u.jsx)(Qe,{children:"Project Type"}),Object(u.jsx)(Ze,{children:t.skills.map((function(e,n){return n===t.skills.length-1?e.skill:e.skill+" / "}))})]}),Object(u.jsxs)(Ke,{children:[Object(u.jsx)(Qe,{children:"Positions Available"}),Object(u.jsx)(Ze,{children:t.openPositions.map((function(e,n){return n===t.openPositions.length-1?e.title:e.title+" "}))})]}),Object(u.jsxs)(Ve,{children:[Object(u.jsx)(Qe,{children:"Time Commitment"}),Object(u.jsxs)(Ze,{children:["".concat(t.hourCommitmentMin," - ").concat(t.hourCommitmentMax)," hrs"]})]})]})}),Object(u.jsx)(Be,{children:Object(u.jsx)(Xe,{children:Object(u.jsx)(k.b,{onClick:function(){n(t)},to:"/workshopping/".concat(t.id),children:"See More >"})})})]})};function et(){var e,t,n=i.a.useState([]),c=Object(o.a)(n,2),s=c[0],r=c[1],l=Object(a.useState)({}),d=Object(o.a)(l,2),j=d[0],b=d[1];return i.a.useEffect((function(){P.a.get("https://api-staging.devlaunchers.org/idea-cards",{withCredentials:!0}).then((function(e){var t=e.data.map((function(e){return e}));r(t)}))}),[]),console.log(j),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(k.a,{children:[Object(u.jsx)(re,{}),Object(u.jsxs)(_.c,{children:[Object(u.jsx)(_.a,(e={exact:!0,path:"/"},Object(N.a)(e,"exact",!0),Object(N.a)(e,"component",K),e)),Object(u.jsx)(_.a,(t={exact:!0,path:"/form"},Object(N.a)(t,"exact",!0),Object(N.a)(t,"component",J),Object(N.a)(t,"children",Object(u.jsx)(J,{})),t)),Object(u.jsx)(_.a,{exact:!0,path:"/test",component:De,children:Object(u.jsx)(De,{})}),Object(u.jsx)(_.a,{exact:!0,path:"/cards",children:Object(u.jsx)(Ae,{children:Object(u.jsx)(Pe,{children:s.map((function(e){return Object(u.jsx)($e,{cards:e,setSelectedCard:b},e.id)}))})})}),Object(u.jsx)(_.a,{exact:!0,path:"/workshopping/:id",children:Object(u.jsx)(se,{ideaName:j.ideaName,selectedCard:j})})]})]})})}var tt=document.getElementById("root");r.a.render(Object(u.jsxs)(a.StrictMode,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(et,{})]}),tt)}},[[217,1,2]]]);
//# sourceMappingURL=main.52299fdc.chunk.js.map