(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5101],{57243:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_components/Conversation/Chat/ChatHeader",function(){return i(6576)}])},16609:function(e,t,i){"use strict";var o=i(5867),n=i(14948);let r=(0,o.Z)(n.Z)(()=>({"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",height:"10px",width:"10px",borderRadius:"50%","&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}));t.Z=r},6576:function(e,t,i){"use strict";i.r(t);var o=i(85893),n=i(93419),r=i(31536),l=i(23599),a=i(87357),s=i(67720),c=i(25675),d=i.n(c),p=i(67294),h=i(47041),u=i(53941),x=i(11163),g=i(37069),m=i(79118),f=i(16609);let b=e=>{let{userData:t,HandleOpenProfile:i,OpenReportModal:a}=e,[s,c]=p.useState(null),h=!!s,u=e=>{switch(e.name){case"viewprofile":i();break;case"block":console.log("block profile");break;case"report":a();break;default:return null}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d(),{id:"basic-button","aria-controls":h?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":h?"true":void 0,onClick:e=>{c(e.currentTarget)},alt:"img",width:4,height:16,className:"cursor-pointer 2xl:w-auto 2xl:h-auto xl:w-[5px] xl:h-[14px]",src:"/assests/dashboard/chats/chat-more-icon.svg"}),(0,o.jsx)(n.Z,{id:"basic-menu",anchorEl:s,open:h,onClose:()=>{c(null)},MenuListProps:{"aria-labelledby":"basic-button"},style:{marginLeft:"-25px"},children:(0,o.jsx)(r.Z,{sx:{borderRadius:"20px",padding:"10px"},spacing:1,px:1,children:[{title:"View Profile",name:"viewprofile"},{title:"Report User",name:"report"}].map(e=>(0,o.jsx)(l.Z,{name:null==e?void 0:e.name,onClick:()=>u(e),children:e.title}))})})]})};t.default=()=>{let e=(0,m.s)(),t=(0,x.useRouter)(),{userData:i,updateUser:n}=(0,p.useContext)(u.S),[l,c]=(0,p.useState)(!1),v=(0,h.getCookie)("authtoken");null==e||e.on("typing",e=>{e.from!=v&&c(!0)}),null==e||e.on("stopTyping",e=>{c(!1)});let j=()=>{t.push("/longterm/dashboard/".concat(null==i?void 0:i.id))},[w,y]=(0,p.useState)(!1),[k,C]=(0,p.useState)({});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{p:2,sx:{width:"100%",backgroundColor:"#FFF",boxShadow:"0px 0px 2px rgba(0,0,0,0.25)"},children:(0,o.jsx)(r.Z,{alignItems:"center",direction:"row",style:{marginLeft:"5px"},justifyContent:"space-between",sx:{width:"100%",height:"100%"},children:(0,o.jsxs)(r.Z,{direction:"row",spacing:2,children:[(0,o.jsx)(a.Z,{className:"cursor-pointer",onClick:j,children:(null==i?void 0:i.profilePic)?(0,o.jsx)(f.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",invisible:!(null==i?void 0:i.ActiveUser),children:(0,o.jsx)(d(),{loading:"lazy",width:47,height:47,alt:"profile-image",style:{objectFit:"cover",borderRadius:"50%"},className:"w-[47px] h-[47px]",src:null==i?void 0:i.profilePic})}):(0,o.jsx)(f.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",invisible:!(null==i?void 0:i.ActiveUser),children:(0,o.jsxs)("div",{className:"bg-[#F8FBFF] grid place-items-center",style:{height:"47px",width:"47px",borderRadius:"50%",objectFit:"cover"},children:[(0,o.jsx)(d(),{loading:"lazy",alt:"not-found",width:16,height:16,src:"/assests/dashboard/icon/NotFound-img.svg"}),(0,o.jsx)("h1",{className:"relative top-[-5px]",style:{color:"#B3CBF1",textAlign:"center",fontFamily:"Poppins",fontSize:"6px",fontStyle:"normal",fontWeight:"500",lineHeight:"normal"},children:"No Image"})]})})}),(0,o.jsxs)(r.Z,{spacing:0,style:{position:"relative",top:"1px"},children:[(0,o.jsx)("h1",{style:{color:"#000",fontFamily:"Poppins",fontSize:"14px",fontStyle:"normal",fontWeight:"600",lineHeight:"normal"},children:null==i?void 0:i.userName}),(0,o.jsx)("p",{style:{color:"#0091FF",fontFamily:"Poppins",fontSize:"8px",fontStyle:"normal",fontWeight:"500",lineHeight:"normal"},children:l?"Typing...":(null==i?void 0:i.ActiveUser)?"Online":(0,o.jsx)("span",{className:"text-[#a6a6a6]",children:"Offline"})})]}),(0,o.jsx)(r.Z,{className:"",children:(0,o.jsx)("div",{className:"absolute right-10 mt-[10px]",children:(0,o.jsx)(b,{OpenReportModal:()=>{y(!0)},HandleOpenProfile:j,userData:i})})})]})})}),(0,o.jsx)(s.Z,{className:"mt-[0px] bg-[#e3e3e3]",sx:{backgroundColor:"#e3e3e3"}}),(0,o.jsx)(g.default,{title:"helo",isOpen:w,onClose:()=>{y(!1)}})]})}}},function(e){e.O(0,[5675,5260,2502,1908,5277,5724,104,8553,5115,6490,7069,9774,2888,179],function(){return e(e.s=57243)}),_N_E=e.O()}]);