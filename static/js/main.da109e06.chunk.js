(this.webpackJsonpcool_chat=this.webpackJsonpcool_chat||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(4),a=c.n(r),i=c(14),s=c.n(i),o=(c(23),c(13)),u=c.n(o),j=c(15),l=c(10),d=(c(25),c(9)),b=(c(30),c(27),c(16)),h=c(17);d.a.initializeApp({apiKey:"AIzaSyA9N72liY0tkJX2_S6Acc5v7H3YiI0cvu0",authDomain:"cool-chat-a6d35.firebaseapp.com",projectId:"cool-chat-a6d35",storageBucket:"cool-chat-a6d35.appspot.com",messagingSenderId:"749064420129",appId:"1:749064420129:web:f0cb0bc445b947a2395c60",measurementId:"G-6ZBTN5S12R"});var p=d.a.auth(),O=d.a.firestore();function m(){return Object(n.jsx)("button",{onClick:function(){var e=new d.a.auth.GoogleAuthProvider;p.signInWithPopup(e)},children:"Sign in with Google"})}function f(){return p.currentUser&&Object(n.jsx)("button",{onClick:function(){return p.signOut()},children:"Sign Out"})}function x(){var e=Object(r.useRef)(),t=O.collection("messages"),c=t.orderBy("createdAt").limit(25),a=Object(h.a)(c,{idField:"id"}),i=Object(l.a)(a,1)[0],s=Object(r.useState)(""),o=Object(l.a)(s,2),b=o[0],m=o[1],f=function(){var c=Object(j.a)(u.a.mark((function c(n){var r,a,i;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),r=p.currentUser,a=r.uid,i=r.photoURL,c.next=4,t.add({text:b,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:a,photoURL:i});case 4:m(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("main",{children:[i&&i.map((function(e){return Object(n.jsx)(g,{message:e},e.id)})),Object(n.jsx)("span",{ref:e})]}),Object(n.jsx)("form",{onSubmit:f,children:Object(n.jsx)("input",{value:b,onChange:function(e){return m(e.target.value)},placeholder:"CoolChat"})})]})}function g(e){var t=e.message,c=t.text,r=t.uid,a=t.photoURL,i=r===p.currentUser.uid?"sent":"received";return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"message ".concat(i),children:[Object(n.jsx)("div",{className:"left",children:Object(n.jsx)("img",{src:a||"https://api.adorable.io/avatars/23/abott@adorable.png"})}),Object(n.jsxs)("div",{className:"right",children:[Object(n.jsx)("p",{className:"userName",children:"Bob Smith"}),Object(n.jsx)("p",{className:"textContent",children:c})]})]})})}var v=function(){var e=Object(b.a)(p),t=Object(l.a)(e,1)[0];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:"Cool Chat!"}),Object(n.jsx)(f,{})]}),Object(n.jsx)("section",{children:t?Object(n.jsx)(x,{}):Object(n.jsx)(m,{})})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),C()}},[[29,1,2]]]);
//# sourceMappingURL=main.da109e06.chunk.js.map