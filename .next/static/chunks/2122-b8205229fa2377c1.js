"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2122],{2122:function(e,t,s){s.r(t),s.d(t,{default:function(){return y}});var a=s(85893),r=s(25675),i=s.n(r),o=s(67294),l=s(2664),n=s(31649),c=s(99419),d=s(84037),p=s(86606),u=s.n(p),m=s(11163),f=s(47041),x=s(71508),h=()=>{let[e,t]=(0,o.useState)(""),r=(0,m.useRouter)();return(0,o.useEffect)(()=>{let e=async()=>{let e=s(97218);try{let s=await e.post("".concat("https://stag.mntech.website/api","/v1/user/auth/generate-qr")),{channel:a,token:i}=s.data.data;t(JSON.stringify({channel:a,token:i})),u().logToConsole=!0;let o=new(u())("46b85f99650ffbce8c4d",{cluster:"ap2"}),l=o.subscribe(a);return l.bind("login-event",function(e){(function(e){var t;let s=null==e?void 0:null===(t=e.authToken)||void 0===t?void 0:t.replace("Bearer ","");localStorage.setItem("personal",JSON.stringify(null==e?void 0:e.user));let a={userid:e.user.id,token:s,refreshToken:s,user:e.user.email,email:e.user.email,fullName:"".concat(e.user.firstName," ").concat(e.user.lastName),tokens:e.tokens};localStorage.setItem("authdata",JSON.stringify(a)),(0,f.setCookie)("userid",e.user.id,{secure:!0}),localStorage.setItem("token",null==e?void 0:e.authToken),localStorage.setItem("refoken",null==e?void 0:e.authToken),localStorage.setItem("user",e.user.email,{secure:!0}),localStorage.setItem("email",e.user.email),localStorage.setItem("mobilenumber",e.user.mobileNumber),localStorage.setItem("flName","".concat(e.user.firstName," ").concat(e.user.lastName)),(0,f.setCookie)("jwtToken",s,{secure:!0}),(0,f.setCookie)("authtoken",s,{secure:!0}),(0,f.setCookie)("email",e.user.email,{secure:!0}),(0,f.setCookie)("userName",e.user.name,{secure:!0}),(0,f.setCookie)("data",JSON.stringify(e.tokens),{secure:!0})})(e),setTimeout(()=>{r.push("/longterm/dashboard")},1e3)}),()=>{l.unbind_all(),l.unsubscribe(a),o.disconnect()}}catch(e){console.error("Error generating QR code:",e)}};e()},[]),(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:e?(0,a.jsx)(x.Q,{value:e,size:120}):(0,a.jsx)("p",{children:"Loading...."})})})},g=s(86501),y=function(){let[e,t]=(0,o.useState)({email:"",password:""}),s=(0,l.I0)(),{status:r,error:p,handleError:u}=(0,l.v9)(e=>e.login);(0,o.useEffect)(()=>{p&&(g.ZP.error(p),s((0,n.q$)()))},[p,s]);let m=async t=>{t.preventDefault();let{email:a,password:r}=e;(a.trim()||r.trim())&&await s((0,n.Jz)(e))},f={color:"#000",textAlign:"center",fontFamily:"Poppins",fontSize:"10px",fontStyle:"normal",fontWeight:"400",lineHeight:"normal"},x={color:"#000",fontFamily:"Poppins",fontSize:"10px",fontStyle:"normal",fontWeight:"400",lineHeight:"normal"},[y,b]=(0,o.useState)(!0),[v,j]=(0,o.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[y?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"mt-[30px] space-y-[45px] h-full flex flex-col items-center justify-evenly",children:[(0,a.jsxs)("div",{className:"w-full flex flex-col items-center space-y-[30px]",children:[(0,a.jsxs)("ul",{className:"space-y-[17px]",children:[(0,a.jsxs)("li",{className:"flex",children:[(0,a.jsx)(i(),{src:"/assests/login/user-icon.svg",alt:"user",width:16,height:14,className:"absolute mt-[18px] ml-[20px]"}),(0,a.jsx)("input",{type:"email",placeholder:"Email or Mobile",value:null==e?void 0:e.email,onChange:s=>t({...e,email:s.target.value}),className:"pl-[50px] w-[300px] h-[50px] border-[1px] border-[#E6E6E6] rounded-[25px] hover:border-[#000] focus:border-[#000] outline-none"})]}),(0,a.jsxs)("li",{className:"flex",children:[(0,a.jsx)(i(),{onClick:()=>j(!v),width:18,height:18,alt:"password",className:"absolute left-[auto] ml-[260px] mt-[15px]",src:v?"/assests/login/view-pass.png":"/assests/login/hide-pass.png"}),(0,a.jsx)(i(),{src:"/assests/login/email-icon.svg",alt:"user",width:18,height:14,className:"absolute mt-[17px] ml-[20px] inline"}),(0,a.jsx)("input",{type:v?"text":"password",placeholder:"Enter Password",value:null==e?void 0:e.password,onChange:s=>t({...e,password:s.target.value}),className:"pl-[50px] w-[300px] h-[50px] border-[1px] border-[#E6E6E6] rounded-[25px] hover:border-[#000] focus:border-[#000] outline-none  pr-[50px]"})]})]}),(0,a.jsx)("div",{className:"relative top-[-2px]",children:(0,a.jsx)("button",{onClick:m,id:"grad-button",className:"w-[300px] h-[50px] rounded-[25px]",children:r==c.n$.LOADING?(0,a.jsx)(i(),{loading:"lazy",alt:"loader",width:25,height:25,className:"animate-spin inline relative left-[0px]",src:"/assests/animation/loaderIcon.svg"}):"Login"})})]}),(0,a.jsx)("div",{className:"w-full relative top-[-10px]",children:(0,a.jsxs)("ul",{className:"w-full flex justify-evenly",children:[(0,a.jsx)("li",{children:(0,a.jsx)(d.default,{})}),(0,a.jsxs)("li",{onClick:()=>b(!1),className:"flex space-x-[11px] cursor-pointer",children:[(0,a.jsx)("p",{style:{color:"#000",fontFamily:"Poppins",fontSize:"14px",fontStyle:"normal",fontWeight:"400",lineHeight:"normal"},className:"select-none",children:"Use QR Code"}),(0,a.jsx)(i(),{width:20,height:20,alt:"qr",src:"/assests/login/qr-icon.svg"})]})]})})]})}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"mt-[52px] space-y-[47px] h-full flex flex-col items-center justify-evenly",children:[(0,a.jsxs)("div",{className:"pl-[20px] pr-[20px] w-full flex justify-evenly items-center space-x-[47px]",children:[(0,a.jsxs)("div",{className:" space-y-[30px]",children:[(0,a.jsx)("div",{children:(0,a.jsx)("p",{style:{color:"#000",fontFamily:"Poppins",fontSize:"14px",fontStyle:"normal",fontWeight:"600",lineHeight:"normal"},children:"How to Scan?"})}),(0,a.jsxs)("ul",{className:"space-y-[14px]",children:[(0,a.jsxs)("li",{className:"flex space-x-[13px]",children:[(0,a.jsx)("div",{className:"p-[3px] w-[15px] h-[15px] grid place-items-center bg-[#EEEEEE] rounded-full",children:(0,a.jsx)("p",{style:f,children:"1"})}),(0,a.jsx)("span",{style:x,children:"Open App"})]}),(0,a.jsxs)("li",{className:"flex space-x-[13px]",children:[(0,a.jsx)("div",{className:"p-[3px] w-[15px] h-[15px] grid place-items-center bg-[#EEEEEE] rounded-full",children:(0,a.jsx)("p",{style:f,children:"2"})}),(0,a.jsx)("span",{style:x,children:"Go to Profile"})]}),(0,a.jsxs)("li",{className:"flex space-x-[13px]",children:[(0,a.jsx)("div",{className:"p-[3px] w-[15px] h-[15px] grid place-items-center bg-[#EEEEEE] rounded-full",children:(0,a.jsx)("p",{style:f,children:"3"})}),(0,a.jsx)("span",{style:x,children:"Click on “Connect” to Log in"})]})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)(h,{})})})]}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"w-[340px] h-[1px] bg-[#E6E6E6]"})}),(0,a.jsx)("div",{onClick:()=>b(!0),className:"relative top-[-10px]",children:(0,a.jsx)("p",{className:"select-none",children:"Use Password"})})]})}),(0,a.jsx)(g.x7,{position:"top-center",reverseOrder:!1})]})}},86501:function(e,t,s){let a,r;s.d(t,{x7:function(){return er},ZP:function(){return ei}});var i,o=s(67294);let l={data:""},n=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||l,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,u=(e,t)=>{let s="",a="",r="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+o+";":a+="f"==i[1]?u(o,i):i+"{"+u(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=u(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=u.p?u.p(i,o):i+":"+o+";")}return s+(t&&r?t+"{"+r+"}":r)+a},m={},f=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+f(e[s]);return t}return e},x=(e,t,s,a,r)=>{var i;let o=f(e),l=m[o]||(m[o]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(o));if(!m[l]){let t=o!==e?e:(e=>{let t,s,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(s=t[3].replace(p," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(p," ").trim();return a[0]})(e);m[l]=u(r?{["@keyframes "+l]:t}:t,s?"":"."+l)}let n=s&&m.g?m.g:null;return s&&(m.g=m[l]),i=m[l],n?t.data=t.data.replace(n,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),l},h=(e,t,s)=>e.reduce((e,a,r)=>{let i=t[r];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function g(e){let t=this||{},s=e.call?e(t.p):e;return x(s.unshift?s.raw?h(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,n(t.target),t.g,t.o,t.k)}g.bind({g:1});let y,b,v,j=g.bind({k:1});function w(e,t){let s=this||{};return function(){let a=arguments;function r(i,o){let l=Object.assign({},i),n=l.className||r.className;s.p=Object.assign({theme:b&&b()},l),s.o=/ *go\d+/.test(n),l.className=g.apply(s,a)+(n?" "+n:""),t&&(l.ref=o);let c=e;return e[0]&&(c=l.as||e,delete l.as),v&&c[0]&&v(l),y(c,l)}return t?t(r):r}}var E=e=>"function"==typeof e,N=(e,t)=>E(e)?e(t):e,k=(a=0,()=>(++a).toString()),C=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},S=new Map,$=e=>{if(S.has(e))return;let t=setTimeout(()=>{S.delete(e),T({type:4,toastId:e})},1e3);S.set(e,t)},O=e=>{let t=S.get(e);t&&clearTimeout(t)},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&O(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return e.toasts.find(e=>e.id===s.id)?I(e,{type:1,toast:s}):I(e,{type:0,toast:s});case 3:let{toastId:a}=t;return a?$(a):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},z=[],P={toasts:[],pausedAt:void 0},T=e=>{P=I(P,e),z.forEach(e=>{e(P)})},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},F=(e={})=>{let[t,s]=(0,o.useState)(P);(0,o.useEffect)(()=>(z.push(s),()=>{let e=z.indexOf(s);e>-1&&z.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var s,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},D=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||k()}),H=e=>(t,s)=>{let a=D(t,e,s);return T({type:2,toast:a}),a.id},L=(e,t)=>H("blank")(e,t);L.error=H("error"),L.success=H("success"),L.loading=H("loading"),L.custom=H("custom"),L.dismiss=e=>{T({type:3,toastId:e})},L.remove=e=>T({type:4,toastId:e}),L.promise=(e,t,s)=>{let a=L.loading(t.loading,{...s,...null==s?void 0:s.loading});return e.then(e=>(L.success(N(t.success,e),{id:a,...s,...null==s?void 0:s.success}),e)).catch(e=>{L.error(N(t.error,e),{id:a,...s,...null==s?void 0:s.error})}),e};var _=(e,t)=>{T({type:1,toast:{id:e,height:t}})},M=()=>{T({type:5,time:Date.now()})},q=e=>{let{toasts:t,pausedAt:s}=F(e);(0,o.useEffect)(()=>{if(s)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let s=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(s<0){t.visible&&L.dismiss(t.id);return}return setTimeout(()=>L.dismiss(t.id),s)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,s]);let a=(0,o.useCallback)(()=>{s&&T({type:6,time:Date.now()})},[s]),r=(0,o.useCallback)((e,s)=>{let{reverseOrder:a=!1,gutter:r=8,defaultPosition:i}=s||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),l=o.findIndex(t=>t.id===e.id),n=o.filter((e,t)=>t<l&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+r,0)},[t]);return{toasts:t,handlers:{updateHeight:_,startPause:M,endPause:a,calculateOffset:r}}},J=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,R=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,U=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${j`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,W=w("div")`
  position: absolute;
`,Q=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Z=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,B=({toast:e})=>{let{icon:t,type:s,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(Z,null,t):t:"blank"===s?null:o.createElement(Q,null,o.createElement(R,{...a}),"loading"!==s&&o.createElement(W,null,"error"===s?o.createElement(J,{...a}):o.createElement(U,{...a})))},G=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Y=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,V=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let s=e.includes("top")?1:-1,[a,r]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(s),Y(s)];return{animation:t?`${j(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:s,children:a})=>{let r=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(B,{toast:e}),l=o.createElement(V,{...e.ariaProps},N(e.message,e));return o.createElement(K,{className:e.className,style:{...r,...s,...e.style}},"function"==typeof a?a({icon:i,message:l}):o.createElement(o.Fragment,null,i,l))});i=o.createElement,u.p=void 0,y=i,b=void 0,v=void 0;var et=({id:e,className:t,style:s,onHeightUpdate:a,children:r})=>{let i=o.useCallback(t=>{if(t){let s=()=>{a(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:i,className:t,style:s},r)},es=(e,t)=>{let s=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...s?{top:0}:{bottom:0},...a}},ea=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,er=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:a,children:r,containerStyle:i,containerClassName:l})=>{let{toasts:n,handlers:c}=q(s);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},n.map(s=>{let i=s.position||t,l=es(i,c.calculateOffset(s,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(et,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?ea:"",style:l},"custom"===s.type?N(s.message,s):r?r(s):o.createElement(ee,{toast:s,position:i}))}))},ei=L}}]);