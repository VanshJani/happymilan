(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3527],{5128:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_components/Container/View/SignUp/NewUser",function(){return a(26377)}])},80635:function(e,t,a){"use strict";a.r(t);var n=a(85893),o=a(67294);t.default=e=>{let{length:t=4,onOtpSubmit:a=()=>{}}=e,[s,r]=(0,o.useState)(Array(t).fill("")),i=(0,o.useRef)([]),l={color:"#000",fontFamily:"Poppins",fontSize:"20px",fontStyle:"normal",fontWeight:"600",lineHeight:"normal"};(0,o.useEffect)(()=>{i.current[0]&&i.current[0].focus()},[]);let c=(e,n)=>{let o=n.target.value;if(isNaN(o))return;let l=[...s];l[e]=o.substring(o.length-1),r(l);let c=l.join("");c.length===t&&a(c),o&&e<t-1&&i.current[e+1]&&i.current[e+1].focus()},u=e=>{i.current[e].setSelectionRange(1,1),e>0&&!s[e-1]&&i.current[s.indexOf("")].focus()},p=(e,t)=>{"Backspace"===t.key&&!s[e]&&e>0&&i.current[e-1]&&i.current[e-1].focus()};return(0,n.jsx)("div",{children:s.map((e,t)=>(0,n.jsx)("input",{type:"text",ref:e=>i.current[t]=e,value:e,onChange:e=>c(t,e),onClick:()=>u(t),onKeyDown:e=>p(t,e),placeholder:"0",style:l,className:"border-b-[1px] ".concat(e?"border-b-[black]":"border-b-[#DCDCDC]"," outline-none  w-[58px] pb-[10px] ml-[10px] text-center")},t))})}},9844:function(e,t,a){"use strict";a.d(t,{HG:function(){return h},Ir:function(){return u},K6:function(){return r},Ln:function(){return d},NM:function(){return l},bV:function(){return p},eT:function(){return s},iR:function(){return m}});var n=a(47041),o=a(77484);let s=e=>async t=>{t({type:o.Mm_});let s=a(97218);s.request({method:"post",maxBodyLength:1/0,url:"".concat("https://stag.mntech.website/api","/v1/user/auth/register"),headers:{"Content-Type":"application/json"},data:e}).then(a=>{console.log(JSON.stringify(a.data)),(0,n.setCookie)("email",e.email),(0,n.setCookie)("uname",null==e?void 0:e.name),t({type:o.kgb,payload:{step:1,data:a.data,message:a.data.data}})}).catch(e=>{t({type:o.qOB,payload:{step:0,message:e}}),console.log(e)})},r=e=>async t=>{t({type:o.zaV});let s=a(97218),r=(0,n.getCookie)("email"),l=(0,n.getCookie)("fcmToken");s.request({method:"post",maxBodyLength:1/0,url:"".concat("https://stag.mntech.website/api","/v1/user/auth/verify-otp-email"),headers:{"Content-Type":"application/json"},data:{email:r,otp:e,deviceToken:l}}).then(e=>{console.log(JSON.stringify(e.data)),i(e),t({type:o.Teg,payload:{step:2,data:e.data,message:e.data.message}})}).catch(e=>{t({type:o.OjU,payload:{step:1,message:e}}),console.log(e)})},i=e=>{let t=e.data.data;localStorage.setItem("token",t.tokens.access.token),localStorage.setItem("refoken",t.tokens.refresh.token),localStorage.setItem("modal","open"),localStorage.setItem("platform-choose",!0),(0,n.setCookie)("jwtToken",t.tokens.access.token),(0,n.setCookie)("authtoken",t.tokens.refresh.token),(0,n.setCookie)("email",t.user.email)},l=e=>async t=>{t({type:o.AV9});let s=a(97218),r=(0,n.getCookie)("authtoken"),i=JSON.stringify({password:e.password});s.request({method:"put",maxBodyLength:1/0,url:"".concat("https://stag.mntech.website/api","/v1/user/auth/update-user"),headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json"},data:i}).then(e=>{console.log(JSON.stringify(e.data)),t({type:o.V1q,payload:{step:3,data:e.data.data,message:"Signin Successfully"}}),c(e)}).catch(e=>{console.log(e),t({type:o.QbK,payload:{error:e,message:"Something Went Wrong"}})})},c=e=>{var t;(0,n.setCookie)("userName",e.data.userData.name),console.log("userInfo : ",null==e?void 0:e.data),localStorage.setItem("personal",JSON.stringify(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.userData)),(0,n.setCookie)("userid",e.data.userData.id),localStorage.setItem("UserRegister",!0)},u=()=>async e=>{e({type:o.A_O,payload:{step:0}})},p=()=>async e=>{e({type:o.xjj});let t=a(97218),s=(0,n.getCookie)("email"),r=JSON.stringify({email:s});t.request({method:"post",maxBodyLength:1/0,url:"".concat("https://stag.mntech.website/api","/v1/user/auth/send-verify-otp-email"),headers:{"Content-Type":"application/json"},data:r}).then(t=>{console.log(JSON.stringify(t.data)),e({type:o.J3l})}).catch(t=>{console.log(t),e({type:o.Nr9})})},d=e=>async t=>{t({type:o.Ul$});let n=a(97218),s=JSON.stringify({email:e});n.request({method:"post",maxBodyLength:1/0,url:"".concat("https://stag.mntech.website/api","/v1/user/auth/forgot-password"),headers:{"Content-Type":"application/json"},data:s}).then(e=>{console.log(JSON.stringify(e.data)),t({type:o.AGU})}).catch(e=>{console.log(e),t({type:o.AMR})})},m=e=>async t=>{t({type:o.DLd});let n=a(97218),s=JSON.stringify({email:null==e?void 0:e.email,otp:null==e?void 0:e.otp});n.request({method:"post",maxBodyLength:1/0,url:"".concat("https://stag.mntech.website/api","/v1/user/auth/verify-reset-otp"),headers:{"Content-Type":"application/json"},data:s}).then(e=>{console.log(JSON.stringify(e.data)),t({type:o.R9$})}).catch(e=>{console.log(e),t({type:o.fTE})})},h=e=>async t=>{t({type:o.t9z});let n=a(97218),s=JSON.stringify({password:null==e?void 0:e.password,email:null==e?void 0:e.email,otp:null==e?void 0:e.otp});n.request({method:"post",maxBodyLength:1/0,url:"".concat("https://stag.mntech.website/api","/v1/user/auth/reset-password"),headers:{"Content-Type":"application/json"},data:s}).then(e=>{console.log(JSON.stringify(e.data)),t({type:o.F_P})}).catch(e=>{console.log(e),t({type:o.Gei})})}},20438:function(e,t,a){"use strict";a.d(t,{I:function(){return o},b:function(){return s}});var n=a(16310);let o=n.Ry({name:n.Z_().min(2,"Name must be at least 2 characters").max(25,"Name cannot be more than 25 characters").matches(/^[a-zA-Z\s]*$/,"Name can only contain letters and spaces").required("Please Enter Your Name"),email:n.Z_().email("Invalid email address").required("Please Enter your Email")}),s=n.Ry({password:n.Z_().min(6,"Password must be at least 6 characters").max(8,"Password must be at most 8 characters").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,8}$/,"Must include letters and numbers").required("Please Enter your Password"),confirmPassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match").required("Please confirm your Password")})},95962:function(e,t){"use strict";t.Z=function(e){let[t,a]=null==e?void 0:e.split("@"),n=t.length-6;if(!(n>0))return e;{let e="*".repeat(n),o="".concat(t.substring(0,3)).concat(e).concat(t.substring(t.length-3),"@").concat(a);return o}}},10261:function(e,t,a){"use strict";var n=a(67294),o=a(2664),s=a(9844);t.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,[t,a]=(0,n.useState)(e),[r,i]=(0,n.useState)(!1),l=(0,o.I0)(),c=(0,n.useCallback)(()=>{i(!0),a(e),l((0,s.bV)())},[e]);return(0,n.useEffect)(()=>{if(!r)return;if(0===t){i(!1),console.log("Countdown finished");return}if(!r||t<=0)return;let e=setTimeout(()=>{a(e=>e-1)},1e3);return 0===t&&i(!1),()=>clearTimeout(e)},[r,t]),{countdown:t,isCounting:r,startCountdown:c}}}},function(e){e.O(0,[5675,8997,6377,9774,2888,179],function(){return e(e.s=5128)}),_N_E=e.O()}]);