"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8568],{65308:function(e,s,t){var l=t(85893),n=t(25675),i=t.n(n),r=t(67294);s.Z=function(e){let{title:s,children:t}=e,[n,a]=(0,r.useState)(!1);return(0,l.jsx)("div",{onClick:()=>a(!n),className:"list-none group w-[full] h-[full] border-[1px] hover:border-[#000] border-[#ECECEC] rounded-[18px] pr-[20px] pl-[20px]",children:(0,l.jsxs)("div",{className:"py-[20px]",children:[(0,l.jsxs)("button",{onClick:()=>a(!n),className:"flex justify-between w-full items-center",children:[(0,l.jsx)("span",{children:s}),n?(0,l.jsx)(i(),{className:"opacity-50  group-hover:opacity-100 transform origin-center transition duration-200 ease-out ".concat(n&&"!rotate-180"),width:14,height:14,alt:"plus",src:"/assests/animation/minus-img.png"}):(0,l.jsx)(i(),{className:"opacity-50 group-hover:opacity-100 transform origin-center transition duration-200 ease-out ".concat(n&&"!rotate-180"),width:14,height:14,alt:"plus",src:"/assests/animation/plus-img.png"})]}),(0,l.jsx)("div",{className:"grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ".concat(n?"grid-rows-[1fr] opacity-100 mt-[30px]":"grid-rows-[0fr] opacity-0"),children:(0,l.jsx)("div",{className:"overflow-hidden",children:t})})]})})}},88568:function(e,s,t){t.r(s),t.d(s,{default:function(){return T}});var l=t(82729),n=t(85893),i=t(25675),r=t.n(i),a=t(67294),c=t(4002),o=t(48828),x=t(31846),p=e=>{let{from:s,to:t,duration:l=6}=e,[i,r]=(0,a.useState)(!1),p=(0,a.useRef)(),d=(0,c.q)(s,{duration:1e3*l,stiffness:300,damping:30});(0,a.useEffect)(()=>{let e=new IntersectionObserver(s=>{let[l]=s;l.isIntersecting&&!i&&(d.set(t),r(!0),e.unobserve(l.target))},{threshold:.1});return e.observe(p.current),()=>e.disconnect()},[d,t,i]);let h=(0,o.H)(d,e=>Math.round(e));return(0,n.jsx)(x.E.div,{ref:p,style:{fontSize:"2rem",fontWeight:"bold"},children:h})},d=t(50066);function h(){let e=(0,l._)(["\n  color: #000000;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return h=function(){return e},e}function m(){let e=(0,l._)(["\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]);return m=function(){return e},e}function f(){let e=(0,l._)(["\n  display: flex;\n  width: 100vw;\n  overflow: hidden;\n  user-select: none;\n\n  mask-image: linear-gradient(\n    to right,\n    hsl(0 0% 0% / 0),\n    hsl(0 0% 0% / 1) 10%,\n    hsl(0 0% 0% / 1) 90%,\n    hsl(0 0% 0% / 0)\n  );\n"]);return f=function(){return e},e}function u(){let e=(0,l._)(["\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n"]);return u=function(){return e},e}function j(){let e=(0,l._)(["\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  white-space: nowrap;\n  width: 100%;\n  animation: "," 30s linear infinite;\n"]);return j=function(){return e},e}function g(){let e=(0,l._)(["\n  ","\n  animation-direction: reverse;\n  animation-delay: -3s;\n"]);return g=function(){return e},e}function y(){let e=(0,l._)(["\n  display: grid;\n  place-items: center;\n"]);return y=function(){return e},e}function v(){let e=(0,l._)(["\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n  aspect-ratio: 16/9;\n"]);return v=function(){return e},e}var w=function(){let[e,s]=(0,a.useState)(0);(0,a.useEffect)(()=>{s(e=>e+1)},[]);let t=["/heroSec/slider/upi-logo.svg","/heroSec/slider/phonepe-logo.svg","/heroSec/slider/visa-logo.svg","/heroSec/slider/g-pay-logo.svg","/heroSec/slider/master-card-logo.svg"];return(0,n.jsx)(N,{children:(0,n.jsx)(b,{children:(0,n.jsxs)(F,{children:[(0,n.jsx)(C,{children:t.map((e,s)=>(0,n.jsx)(E,{children:(0,n.jsx)(k,{src:e})},s))}),(0,n.jsx)(C,{children:t.map((e,s)=>(0,n.jsx)(E,{children:(0,n.jsx)(k,{src:e})},s))})]})})},e)};let N=d.ZP.div(h()),b=d.ZP.div(m()),F=d.ZP.div(f()),S=(0,d.F4)(u()),A=(0,d.iv)(j(),S),C=d.ZP.div(g(),A),E=d.ZP.div(y()),k=d.ZP.img(v());var P=t(47041),B=t(11163),z=t(65308),W=t(43307);function H(){let e=(0,l._)(["\n     fontFamily: \"Poppins\",\n        fontSize: \"44px\",\n        fontStyle: \"normal\",\n        fontWeight: \"700\",\n        lineHeight: \"70px\", /* 159.091% */\n        background: 'linear-gradient(98deg, #0F52BA -6.94%, #8225AF 63.93%)',\n        backgroundClip: 'text',\n        WebkitBackgroundClip: 'text',\n        WebkitTextFillColor: 'transparent',\n        color: 'transparent', // Ensure text color is transparent\n    "]);return H=function(){return e},e}function M(){let e=(0,l._)(["\n    color: #000;\n    font-family: 'Poppins', sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n"]);return M=function(){return e},e}var T=function(){let[e,s]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=()=>{window.pageYOffset>500?s(!0):s(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),d.ZP.li(H());let t={color:"#FFF",fontFamily:"Poppins",fontStyle:"normal",fontWeight:"600",lineHeight:"normal"},l={fontFamily:"Poppins",fontStyle:"normal",fontWeight:"400",lineHeight:"normal"},i={color:"#000",textAlign:"center",fontFamily:"Poppins",fontSize:"18px",fontStyle:"normal",fontWeight:"400",lineHeight:"normal"},c={color:"#000",fontFamily:"Poppins",fontSize:"34px",fontStyle:"normal",fontWeight:"700",lineHeight:"normal"},o={color:"#000",fontFamily:"Poppins",fontSize:"30px",fontStyle:"normal",fontWeight:"700",lineHeight:"normal"},x={color:"#000",fontFamily:"Poppins",fontSize:"16px",fontStyle:"normal",fontWeight:"400",lineHeight:"14px"},h=d.ZP.ul(M()),m=[{id:1,name:"long-term",title:"Long Term",content:"By creating this profile, you can find compatible partners for marriage and lifelong companionship",image:"/heroSec/longTerm-img.jpg"},{id:2,name:"dating",title:"Dating",content:"By creating this profile, you can discover profiles for casual relationships",image:"/heroSec/profiles/dating-img.jpg"},{id:3,name:"friendship",title:"Friendship",content:"By creating this profile, you can find friends and connect with groups for trips and activities.",image:"/heroSec/profiles/friendship-img.jpg"}],[f,u]=(0,a.useState)(m[0]),[j,g]=(0,a.useState)(0),y=e=>{e>=0&&e<m.length&&(g(e),u(m[e]))};(0,a.useEffect)(()=>{let e=setInterval(()=>{g(e=>{let s=(e+1)%m.length;return u(m[s]),s})},4e3);return()=>clearInterval(e)},[]);let[v,N]=(0,a.useState)(""),[b,F]=(0,a.useState)("");(0,a.useEffect)(()=>{N((0,P.getCookie)("jwtToken")),F((0,P.getCookie)("UserProfile"))},[]);let S=(0,B.useRouter)(),A=()=>{v?"dating"==b?S.push("/dating/dashboard"):S.push("/longterm/dashboard"):S.push("/login")};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"".concat(e?"fixed":"hidden"," bottom-10 right-10"),children:(0,n.jsxs)("button",{id:"grad-button",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"Scroll-Top-Btn",children:[(0,n.jsx)("svg",{height:"1.2em",className:"Scroll-top-arrow",viewBox:"0 0 512 512",children:(0,n.jsx)("path",{d:"M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"})}),(0,n.jsx)("p",{className:"Scroll-Top-text",children:"Back to Top"})]})}),(0,n.jsx)("div",{className:"mt-[100px] w-full h-full bg-[#FFF]",children:(0,n.jsxs)("div",{className:"space-y-[40px] 2xl:space-y-[40px] xl:space-y-[20px]",children:[(0,n.jsxs)("div",{className:"space-y-[55px] 2xl:space-y-[55px] xl:space-y-[45px]",children:[(0,n.jsx)("h1",{className:"text-black text-center font-poppins font-bold leading-[50px] 2xl:text-[54px] xl:text-[40px] text-[40px]",children:"Single App, Multiple Choices. "}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{className:"flex justify-center space-x-[20px]",children:m.map((e,s)=>(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick:()=>y(s),name:null==e?void 0:e.name,className:"text-center font-poppins font-normal leading-normal 2xl:w-[134px] 2xl:h-[50px] xl:w-[120px] xl:h-[40px] w-[134px] h-[50px] 2xl:text-[16px] xl:text-[14px] text-[16px]  rounded-[32px]  border-[1px] border-[#000] ".concat(s==j?"bg-[#000] text-[#FFF]":" text-[#000] bg-[#FFF] hover:bg-[#EFF5FF] hover:text-[#000]"),children:null==e?void 0:e.title})}))})})]}),(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("div",{className:"flex justify-between pr-[0px] 2xl:pl-[200px] xl:pl-[160px]",children:[(0,n.jsx)("div",{className:"mt-[20px]",children:(0,n.jsxs)("ul",{className:"w-full space-y-[23px]",children:[(0,n.jsx)("li",{style:{fontFamily:"Poppins",fontSize:"44px",fontStyle:"normal",fontWeight:"700",lineHeight:"70px",background:"linear-gradient(98deg, #0F52BA -6.94%, #8225AF 63.93%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",color:"transparent"},children:null==f?void 0:f.title}),(0,n.jsx)("li",{className:"w-[483px]",style:{color:"#000",fontFamily:"Poppins",fontSize:"18px",fontStyle:"normal",fontWeight:"400",lineHeight:"normal"},children:null==f?void 0:f.content}),(0,n.jsxs)("li",{className:"space-x-[25px]",children:[(0,n.jsx)("button",{onClick:A,id:"grad-button",className:"w-[158px] h-[50px] rounded-[32px]",children:v?"Explore Now":"Create Profile"}),(0,n.jsx)("button",{onClick:()=>S.push("/longterm/features"),className:"w-[158px] h-[50px] rounded-[32px] border-[1px] border-[#8225AF] hover:bg-[#EFF5FF]",children:"Learn More"})]})]})}),(0,n.jsx)("div",{className:"",children:(0,n.jsx)(r(),{width:0,height:0,alt:"img-1",src:null==f?void 0:f.image,loading:"lazy",className:"w-[auto] 2xl:h-[385px] xl:h-[330px] h-[300px] relative right-[80px]"})})]}),(0,n.jsx)("div",{style:{background:"linear-gradient(285deg, #8225AF -2.3%, #0F52BA 106.84%)"},className:"w-[100%] h-[553px]",children:(0,n.jsxs)("div",{className:"flex justify-evenly items-center pt-[115px]",children:[(0,n.jsx)("div",{className:"",children:(0,n.jsxs)("ul",{className:"space-y-[26px]",children:[(0,n.jsxs)("li",{className:"w-[400px] 2xl:text-[54px] xl:text-[40px] text-[40px]",style:{color:"#FFF",fontFamily:"Poppins",fontStyle:"normal",fontWeight:"700",lineWeight:"70px"},children:["India’s ",(0,n.jsx)("br",{}),"  Most Secured Social Site"]}),(0,n.jsx)("li",{className:"w-[468px] text-[18px] text-[#FFF]",style:l,children:"Connect with your chosen profiles and build stronger relationships"})]})}),(0,n.jsx)("div",{children:(0,n.jsxs)("ul",{className:"space-y-[60px]",children:[(0,n.jsxs)("li",{className:"flex space-x-[63px]",children:[(0,n.jsx)("div",{children:(0,n.jsx)(r(),{width:0,height:0,alt:"privacy",loading:"lazy",src:"/heroSec/icon/icon-1.svg",className:"w-[33.827px] h-[38px]"})}),(0,n.jsx)("div",{style:t,className:"2xl:text-[28px] xl:text-[22px] text-[24px]",children:"100% Privacy"})]}),(0,n.jsxs)("li",{className:"flex space-x-[63px]",children:[(0,n.jsx)("div",{children:(0,n.jsx)(r(),{width:0,height:0,alt:"privacy",loading:"lazy",src:"/heroSec/icon/icon-3.svg",className:"w-[33.827px] h-[38px]"})}),(0,n.jsx)("div",{style:t,className:"2xl:text-[28px] xl:text-[22px] text-[24px]",children:"Zero Fake Profiles"})]}),(0,n.jsxs)("li",{className:"flex space-x-[63px]",children:[(0,n.jsx)("div",{children:(0,n.jsx)(r(),{width:0,height:0,alt:"privacy",loading:"lazy",src:"/heroSec/icon/icon-2.svg",className:"w-[33.827px] h-[38px]"})}),(0,n.jsx)("div",{style:t,className:"2xl:text-[28px] xl:text-[22px] text-[24px]",children:"Fully Secured"})]}),(0,n.jsxs)("li",{className:"flex space-x-[63px]",children:[(0,n.jsx)("div",{children:(0,n.jsx)(r(),{width:0,height:0,alt:"privacy",loading:"lazy",src:"/heroSec/icon/icon-4.svg",className:"w-[33.827px] h-[38px]"})}),(0,n.jsx)("div",{style:t,className:"2xl:text-[28px] xl:text-[22px] text-[24px]",children:"Verified Profiles"})]})]})})]})})]}),(0,n.jsx)("div",{className:"w-full h-full pb-[20px] pt-[80px]",children:(0,n.jsxs)("div",{className:"flex w-full justify-evenly items-center",children:[(0,n.jsxs)("div",{className:"ml-[40px] w-[400px] space-y-[40px]",children:[(0,n.jsx)("h1",{id:"gradient-Text-style",style:{fontFamily:"Poppins",fontStyle:"normal",fontWeight:"700",lineHeight:"70px",background:"linear-gradient(98deg, #0F52BA -6.94%, #8225AF 63.93%)",backgroundClip:"text",webkitBackgroundClip:"text",webkitTextFillColor:"transparent"},className:"2xl:text-[54px] xl:text-[45px] lg:text-[40px]",children:"Chat anytime you want"}),(0,n.jsx)("p",{style:l,className:"text-[#000] 2xl:text-[18px] xl:text-[16px] lg:text-[18px] text-[18px]",children:"Connect with your chosen profiles and build stronger relationships"}),(0,n.jsxs)("ul",{className:"flex space-x-[70px]",children:[(0,n.jsxs)("li",{className:"space-y-[8px] flex flex-col justify-center items-center",children:[(0,n.jsx)(r(),{width:0,height:0,alt:"emoji",src:"/heroSec/icon/emoji-icon.svg",loading:"lazy",className:"w-[30px] h-[30px]"}),(0,n.jsx)("p",{className:"text-[14px] text-center text-[#000]",style:l,children:"Emoji"})]}),(0,n.jsxs)("li",{className:"space-y-[8px] flex flex-col justify-center items-center",children:[(0,n.jsx)(r(),{width:0,height:0,alt:"img",src:"/heroSec/icon/img-icon.svg",loading:"lazy",className:"w-[30px] h-[30px]"}),(0,n.jsx)("p",{className:"text-[14px] text-center text-[#000]",style:l,children:"Image"})]}),(0,n.jsxs)("li",{className:"space-y-[8px] flex flex-col justify-center items-center",children:[(0,n.jsx)(r(),{width:0,height:0,alt:"mic",src:"/heroSec/icon/mic-icon.svg",loading:"lazy",className:"w-[30px] h-[30px]"}),(0,n.jsx)("p",{className:"text-[14px] text-center text-[#000]",style:l,children:"Audio"})]}),(0,n.jsxs)("li",{className:"space-y-[8px] flex flex-col justify-center items-center",children:[(0,n.jsx)(r(),{width:0,height:0,alt:"video-call",src:"/heroSec/icon/video-call-icon.svg",loading:"lazy",className:"w-[30px] h-[30px]"}),(0,n.jsx)("p",{className:"text-[14px] text-center text-[#000]",style:l,children:"Video"})]})]}),(0,n.jsxs)("ul",{className:"flex space-x-[25px]",children:[(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick:A,className:"text-center font-poppins font-normal leading-normal w-[158px] h-[50px] rounded-[32px] bg-[#000] text-[#FFF]",children:"Start Chat"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{className:"text-center font-poppins font-normal leading-normal w-[158px] h-[50px] rounded-[32px] border-[1px] border-[#000] text-[#000] hover:bg-[#EFF5FF]",onClick:()=>S.push("/chat-features"),children:"Learn More"})})]})]}),(0,n.jsx)("div",{children:(0,n.jsx)(r(),{width:0,height:0,alt:"chat-ui",loading:"lazy",src:"/heroSec/assests/chat-img-1.svg",className:"2xl:w-[530px] 2xl:h-[530px] xl:w-[490px] xl:h-[490px] lg:w-[530px] lg:h-[530px] w-[530px] h-[530px]"})})]})}),(0,n.jsxs)("div",{className:"bg-[#FDF8FF] pt-[50px] w-full h-[774px] flex flex-col justify-evenly items-center",children:[(0,n.jsxs)("div",{className:"text-center space-y-[12px]",children:[(0,n.jsx)("h1",{className:"2xl:text-[50px] xl:text-[50px] text-[40px]",style:{color:"#000",textAlign:"center",fontFamily:"Poppins",fontStyle:"normal",fontWeight:"700",lineHeight:"70px"},children:"We offered most affordable plans"}),(0,n.jsx)("p",{className:"text-[18px] text-[#000]",style:l,children:"Connect with your chosen profiles and build stronger relationships"})]}),(0,n.jsxs)("div",{className:"w-[80%] text-center space-y-[90px]",children:[(0,n.jsxs)("ul",{className:"flex justify-evenly w-full",children:[(0,n.jsx)("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{style:i,children:"One Month Plan"}),(0,n.jsxs)("ul",{className:"flex items-center justify-center space-x-[5px]",children:[(0,n.jsx)("li",{style:c,children:"Rs."}),(0,n.jsx)("li",{children:(0,n.jsx)(p,{from:0,to:399,duration:6})})]})]})}),(0,n.jsx)("li",{className:"w-[1px] h-[72px] bg-[#ADADAD]"}),(0,n.jsx)("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{style:i,children:"Two Month Plan"}),(0,n.jsxs)("ul",{className:"flex items-center justify-center space-x-[5px]",children:[(0,n.jsx)("li",{style:c,children:"Rs."}),(0,n.jsx)("li",{children:(0,n.jsx)(p,{from:0,to:599,duration:6})})]})]})}),(0,n.jsx)("li",{className:"w-[1px] h-[72px] bg-[#ADADAD]"}),(0,n.jsx)("li",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{style:i,children:"Three Month Plan"}),(0,n.jsxs)("ul",{className:"flex items-center justify-center space-x-[5px]",children:[(0,n.jsx)("li",{style:c,children:"Rs."}),(0,n.jsx)("li",{children:(0,n.jsx)(p,{from:0,to:799,duration:6})})]})]})})]}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{onClick:()=>v?S.push("/longterm/dashboard/upgrade"):S.push("/login"),className:"text-center font-poppins font-normal leading-normal w-[212px] h-[50px] rounded-[32px] border-[1px] border-[#8225AF] hover:bg-[#EFF5FF]",children:"Discover More Plans"})})]}),(0,n.jsxs)("div",{className:"w-full text-center space-y-[40px]",children:[(0,n.jsx)("div",{children:(0,n.jsx)("p",{style:{color:"#000",fontFamily:"Poppins",fontSize:"18px",fontStyle:"normal",fontWeight:"400",lineHeight:"normal"},children:"We accept"})}),(0,n.jsx)("div",{className:"w-full flex justify-center",children:(0,n.jsx)(w,{})})]})]}),(0,n.jsxs)("div",{className:"border-b-[1px] border-b-[#E9E9E9] pb-[60px]",children:[(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("h1",{className:"2xl:text-[50px] xl:text-[40px] text-[60px] text-black font-poppins  font-bold leading-[70px]",children:"Frequently Asked Questions"})}),(0,n.jsxs)("ul",{className:"flex flex-col items-center space-y-[13px] mt-[80px]",children:[(0,n.jsx)("li",{className:"w-[70%]",children:(0,n.jsx)(z.Z,{title:"How do I create an account on HappyMilan?",children:(0,n.jsxs)(h,{children:[(0,n.jsxs)("li",{children:["Step 1: Click on"," ",(0,n.jsx)("span",{className:"text-[#0F52BA]",children:" “Sign up.”"})]}),(0,n.jsxs)("li",{children:["Step 2: Enter your"," ",(0,n.jsxs)("span",{className:"text-[#0F52BA]",children:[" ","“Email or mobile number.”"]})]}),(0,n.jsx)("li",{children:"Step 3: Choose a password."}),(0,n.jsxs)("li",{children:["Step 4: Select the registration type, either"," ",(0,n.jsxs)("span",{className:"text-[#0F52BA]",children:[" ","“Marriage or Dating”"]})]}),(0,n.jsx)("li",{className:"mt-[30px]",children:"after selection of registration type , you’ll be redirecting to your own dashboard and at this stage you’ll have successfully registered on HappyMilan. But you’ll be restricted to send request until you don’t complete the registration form. Once we’ve all the information, we’ll be able to give you perfect suggestion matches based on your information."}),(0,n.jsx)("li",{className:"mt-[21px]",children:"Wish you’ll have great experience on HappyMilan.com"})]})})}),(0,n.jsx)("li",{className:"w-[70%]",children:(0,n.jsx)(z.Z,{title:"Is HappyMilan for Long Term, Dating and Friendship?",children:"HappyMilan is a social networking website that caters to both categories: matrimony and dating. Users can select either option when registering"})}),(0,n.jsxs)("li",{className:"w-[70%] h-[64px] border-[1px] border-[#ECECEC] rounded-[18px] flex justify-between pl-[20px] pr-[20px] items-center",children:[(0,n.jsx)("p",{children:"What are top features of HappyMilan?"}),(0,n.jsx)(r(),{className:"opacity-50 transform origin-center transition duration-200 ease-out",width:14,height:14,alt:"plus",src:"/assests/animation/plus-img.png"})]}),(0,n.jsxs)("li",{className:"w-[70%] h-[64px] border-[1px] border-[#ECECEC] rounded-[18px] flex justify-between pl-[20px] pr-[20px] items-center",children:[(0,n.jsx)("p",{children:"How can I manage my profile?"}),(0,n.jsx)(r(),{className:"opacity-50 transform origin-center transition duration-200 ease-out",width:14,height:14,alt:"plus",src:"/assests/animation/plus-img.png"})]}),(0,n.jsxs)("li",{className:"w-[70%] h-[64px] border-[1px] border-[#ECECEC] rounded-[18px] flex justify-between pl-[20px] pr-[20px] items-center",children:[(0,n.jsx)("p",{children:"Can I cancel the membership?"}),(0,n.jsx)(r(),{className:"opacity-50 transform origin-center transition duration-200 ease-out",width:14,height:14,alt:"plus",src:"/assests/animation/plus-img.png"})]}),(0,n.jsxs)("li",{className:"w-[70%] h-[64px] border-[1px] border-[#ECECEC] rounded-[18px] flex justify-between pl-[20px] pr-[20px] items-center",children:[(0,n.jsx)("p",{children:"Can I delete my account?"}),(0,n.jsx)(r(),{className:"opacity-50 transform origin-center transition duration-200 ease-out",width:14,height:14,alt:"plus",src:"/assests/animation/plus-img.png"})]})]}),(0,n.jsx)("div",{className:"pt-[65px] text-center",children:(0,n.jsx)("button",{onClick:()=>S.push("/faq"),className:"w-[158px] h-[50px] rounded-[32px] border-[1px] border-[#8225AF] hover:bg-[#EFF5FF] text-center font-poppins font-normal leading-normal",children:"Learn More"})})]}),(0,n.jsxs)("div",{className:"space-y-[80px]",children:[(0,n.jsx)("div",{className:"text-center pt-[80px]",children:(0,n.jsx)("h1",{className:"2xl:text-[50px] xl:text-[40px] text-[60px] text-black font-poppins  font-bold leading-[70px]",children:"Discover more apps"})}),(0,n.jsxs)("ul",{className:"flex justify-evenly ",children:[(0,n.jsx)("li",{className:"cursor-pointer 2xl:w-[335px] 2xl:h-[335px] xl:w-[290px] xl:h-[290px] w-[323px] h-[323px] border-[1px]  border-[#E1E1E1] hover:border-[#8225AF] rounded-[24px] pl-[40px]",children:(0,n.jsxs)("div",{className:"flex flex-col justify-evenly w-full h-full",children:[(0,n.jsx)("div",{children:(0,n.jsx)(r(),{width:0,height:0,alt:"proffers",src:"/assests/product-assests/proffers.svg",className:"w-[50.702px] h-[44px]"})}),(0,n.jsxs)("div",{className:"space-y-[20px]",children:[(0,n.jsx)("h1",{style:o,children:"Proxale"}),(0,n.jsx)("p",{style:x,children:"Explore Nearby Services"})]}),(0,n.jsx)("div",{className:"flex justify-end pr-[31px]",children:(0,n.jsx)(r(),{width:25.667,height:26.341,alt:"arrow-icon",src:"/heroSec/icon/arrow-icon.svg"})})]})}),(0,n.jsx)("li",{className:"cursor-pointer 2xl:w-[335px] 2xl:h-[335px] xl:w-[290px] xl:h-[290px] w-[323px] h-[323px] border-[1px]  border-[#E1E1E1] hover:border-[#8225AF] rounded-[24px] pl-[40px]",children:(0,n.jsxs)("div",{className:"flex flex-col justify-evenly w-full h-full",children:[(0,n.jsx)("div",{children:(0,n.jsx)(r(),{width:0,height:0,alt:"Trendigo",src:"/assests/product-assests/Trendigo.svg",className:"w-[33.885px] h-[44px]"})}),(0,n.jsxs)("div",{className:"space-y-[20px]",children:[(0,n.jsx)("h1",{style:o,children:"Trendigo"}),(0,n.jsx)("p",{style:x,children:"Shop for Men & Women"})]}),(0,n.jsx)("div",{className:"flex justify-end pr-[31px]",children:(0,n.jsx)(r(),{width:25.667,height:26.341,alt:"arrow-icon",src:"/heroSec/icon/arrow-icon.svg"})})]})}),(0,n.jsx)("li",{className:"cursor-pointer 2xl:w-[335px] 2xl:h-[335px] xl:w-[290px] xl:h-[290px] w-[323px] h-[323px] border-[1px]  border-[#E1E1E1] hover:border-[#8225AF] rounded-[24px] pl-[40px]",children:(0,n.jsxs)("div",{className:"flex flex-col justify-evenly w-full h-full",children:[(0,n.jsx)("div",{children:(0,n.jsx)(r(),{width:0,height:0,alt:"proffers",src:"/assests/product-assests/adskaro.svg",className:"w-[57.538px] h-[44px]"})}),(0,n.jsxs)("div",{className:"space-y-[20px]",children:[(0,n.jsx)("h1",{style:o,children:"AdsKaro"}),(0,n.jsx)("p",{style:x,children:"Daily Ads Services"})]}),(0,n.jsx)("div",{className:"flex justify-end pr-[31px]",children:(0,n.jsx)(r(),{width:25.667,height:26.341,alt:"arrow-icon",src:"/heroSec/icon/arrow-icon.svg"})})]})})]})]}),(0,n.jsx)("div",{className:"w-full h-full pt-[100px]",children:(0,n.jsx)("div",{className:"w-full h-[229px] bg-[#FDF8FF]",children:(0,n.jsxs)("div",{className:"flex justify-between items-center pr-[100px] pl-[100px]",children:[(0,n.jsxs)("div",{className:" space-y-[37px]",children:[(0,n.jsx)("p",{className:"text-[24px] text-[#000]",style:l,children:"Your gateway to the limitless potentials, Download App"}),(0,n.jsxs)("ul",{className:"flex space-x-[40px]",children:[(0,n.jsx)("li",{children:(0,n.jsx)(r(),{width:0,height:0,alt:"google-play",loading:"lazy",className:"w-[148.5px] h-[44px]",src:"/heroSec/assests/play-store.svg"})}),(0,n.jsx)("li",{children:(0,n.jsx)(r(),{width:0,height:0,alt:"google-play",loading:"lazy",className:"w-[148.5px] h-[44px]",src:"/heroSec/assests/app-store.svg"})})]})]}),(0,n.jsx)("div",{className:"relative top-[30px]",children:(0,n.jsx)(r(),{width:0,height:0,alt:"app",loading:"lazy",src:"https://happymilan.vercel.app/heroSec/assests/app-frame.svg",className:"w-[160.043px] h-[auto]"})})]})})}),(0,n.jsx)(W.default,{})]})})]})}},43307:function(e,s,t){t.r(s);var l=t(85893),n=t(25675),i=t.n(n),r=t(41664),a=t.n(r),c=t(11163);t(67294),s.default=function(){let e={cursor:"pointer",fontFamily:"Poppins",fontSize:"14px",fontStyle:"normal",fontWeight:"400",lineHeight:"14px"},s={color:"#959595",fontFamily:"Poppins",fontSize:"14px",fontStyle:"normal",fontWeight:"400",lineHeight:"normal"},t=(0,c.useRouter)();return(0,l.jsxs)("footer",{className:"pt-[40px]",children:[(0,l.jsxs)("div",{className:"flex justify-between pl-[100px] pr-[100px]",children:[(0,l.jsxs)("ul",{className:"space-y-[15px]",children:[(0,l.jsx)("li",{style:e,className:"".concat("/aboutus"==t.pathname?"text-[#0F52BA]":"text-[#000] hover:text-[#0F52BA]"),children:(0,l.jsx)(a(),{href:"/aboutus",children:"About"})}),(0,l.jsx)("li",{style:e,className:"".concat(t.pathname.startsWith("/successstories")?"text-[#0F52BA]":"text-[#000] hover:text-[#0F52BA]"),children:(0,l.jsx)(a(),{href:"/successstories",children:"Success  Stories"})}),(0,l.jsx)("li",{style:e,className:"".concat("/faq"==t.pathname?"text-[#0F52BA]":"text-[#000] hover:text-[#0F52BA]"),children:(0,l.jsx)(a(),{href:"/faq",children:"FAQs"})})]}),(0,l.jsxs)("ul",{className:"space-y-[15px]",children:[(0,l.jsx)("li",{style:e,className:"".concat("/career"==t.pathname?"text-[#0F52BA]":"text-[#000] hover:text-[#0F52BA]"),children:(0,l.jsx)(a(),{href:"/career",children:"Hiring"})}),(0,l.jsx)("li",{style:e,className:"hover:text-[#0F52BA] text-[#000]",children:"Contact us"}),(0,l.jsx)("li",{style:e,className:"hover:text-[#0F52BA] text-[#000]",children:"Sitemap"})]}),(0,l.jsxs)("ul",{className:"space-y-[15px]",children:[(0,l.jsx)("li",{style:e,className:"".concat("/termsofuse"==t.pathname?"text-[#0F52BA]":"text-[#000] hover:text-[#0F52BA]"),children:(0,l.jsx)(a(),{href:"/termsofuse",children:"Term of Use"})}),(0,l.jsx)("li",{style:e,className:"".concat("/privacypolicy"==t.pathname?"text-[#0F52BA]":"text-[#000] hover:text-[#0F52BA]"),children:(0,l.jsx)(a(),{href:"/privacypolicy",children:"Privacy Policy"})}),(0,l.jsx)("li",{style:e,className:"".concat(t.pathname.startsWith("/blog")?"text-[#0F52BA]":"text-[#000] hover:text-[#0F52BA]"),children:"Blogs"})]}),(0,l.jsxs)("ul",{className:"flex justify-between w-[131.551px]",children:[(0,l.jsx)("li",{children:(0,l.jsx)(i(),{width:16,height:16,alt:"instgarm",loading:"lazy",src:"/heroSec/icon/instagram-icon.svg"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i(),{width:8.31,height:16,alt:"facebook",loading:"lazy",src:"/heroSec/icon/facebook-icon.svg"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i(),{width:16,height:16,alt:"yotube",loading:"lazy",src:"/heroSec/icon/youtube-icon.svg"})})]})]}),(0,l.jsx)("div",{className:"pt-[40px] pb-[40px]",children:(0,l.jsx)("div",{className:"",children:(0,l.jsxs)("div",{className:"flex justify-between pl-[100px] pr-[100px]",children:[(0,l.jsx)("div",{className:"",children:(0,l.jsx)("h1",{style:s,children:"\xa92023 -2024 HappyMilan.com"})}),(0,l.jsx)("div",{className:"",children:(0,l.jsx)("h1",{style:s,children:"A Product by MN Techgroup"})})]})})})]})}}}]);