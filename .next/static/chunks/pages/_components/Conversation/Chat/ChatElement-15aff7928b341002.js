(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4714],{14948:function(r,t,e){"use strict";e.d(t,{Z:function(){return R}});var n=e(63366),o=e(87462),i=e(67294),a=e(90512),l=r=>{let t=i.useRef({});return i.useEffect(()=>{t.current=r}),t.current},s=e(94780),c=e(62690),u=e(90948),d=e(71657),g=e(98216),h=e(1588),p=e(34867);function f(r){return(0,p.Z)("MuiBadge",r)}let m=(0,h.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]);var v=e(85893);let x=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],b=r=>{let{color:t,anchorOrigin:e,invisible:n,overlap:o,variant:i,classes:a={}}=r,l={root:["root"],badge:["badge",i,n&&"invisible",`anchorOrigin${(0,g.Z)(e.vertical)}${(0,g.Z)(e.horizontal)}`,`anchorOrigin${(0,g.Z)(e.vertical)}${(0,g.Z)(e.horizontal)}${(0,g.Z)(o)}`,`overlap${(0,g.Z)(o)}`,"default"!==t&&`color${(0,g.Z)(t)}`]};return(0,s.Z)(l,f,a)},Z=(0,u.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),y=(0,u.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,t)=>{let{ownerState:e}=r;return[t.badge,t[e.variant],t[`anchorOrigin${(0,g.Z)(e.anchorOrigin.vertical)}${(0,g.Z)(e.anchorOrigin.horizontal)}${(0,g.Z)(e.overlap)}`],"default"!==e.color&&t[`color${(0,g.Z)(e.color)}`],e.invisible&&t.invisible]}})(({theme:r,ownerState:t})=>(0,o.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen})},"default"!==t.color&&{backgroundColor:(r.vars||r).palette[t.color].main,color:(r.vars||r).palette[t.color].contrastText},"dot"===t.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${m.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${m.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${m.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${m.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${m.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${m.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${m.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${m.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},t.invisible&&{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})})),O=i.forwardRef(function(r,t){var e,i,s,u,g,h;let p=(0,d.Z)({props:r,name:"MuiBadge"}),{anchorOrigin:f={vertical:"top",horizontal:"right"},className:m,component:O,components:R={},componentsProps:w={},children:C,overlap:P="rectangular",color:N="default",invisible:j=!1,max:F=99,badgeContent:k,slots:$,slotProps:S,showZero:z=!1,variant:B="standard"}=p,M=(0,n.Z)(p,x),{badgeContent:T,invisible:_,max:A,displayValue:E}=function(r){let{badgeContent:t,invisible:e=!1,max:n=99,showZero:o=!1}=r,i=l({badgeContent:t,max:n}),a=e;!1!==e||0!==t||o||(a=!0);let{badgeContent:s,max:c=n}=a?i:r,u=s&&Number(s)>c?`${c}+`:s;return{badgeContent:s,invisible:a,max:c,displayValue:u}}({max:F,invisible:j,badgeContent:k,showZero:z}),I=l({anchorOrigin:f,color:N,overlap:P,variant:B,badgeContent:k}),W=_||null==T&&"dot"!==B,{color:L=N,overlap:H=P,anchorOrigin:D=f,variant:G=B}=W?I:p,U="dot"!==G?E:void 0,X=(0,o.Z)({},p,{badgeContent:T,invisible:W,max:A,displayValue:U,showZero:z,anchorOrigin:D,color:L,overlap:H,variant:G}),V=b(X),q=null!=(e=null!=(i=null==$?void 0:$.root)?i:R.Root)?e:Z,J=null!=(s=null!=(u=null==$?void 0:$.badge)?u:R.Badge)?s:y,K=null!=(g=null==S?void 0:S.root)?g:w.root,Q=null!=(h=null==S?void 0:S.badge)?h:w.badge,Y=(0,c.y)({elementType:q,externalSlotProps:K,externalForwardedProps:M,additionalProps:{ref:t,as:O},ownerState:X,className:(0,a.Z)(null==K?void 0:K.className,V.root,m)}),rr=(0,c.y)({elementType:J,externalSlotProps:Q,ownerState:X,className:(0,a.Z)(V.badge,null==Q?void 0:Q.className)});return(0,v.jsxs)(q,(0,o.Z)({},Y,{children:[C,(0,v.jsx)(J,(0,o.Z)({},rr,{children:U}))]}))});var R=O},87357:function(r,t,e){"use strict";e.d(t,{Z:function(){return x}});var n=e(87462),o=e(63366),i=e(67294),a=e(90512),l=e(78883),s=e(86523),c=e(39707),u=e(79718),d=e(85893);let g=["className","component"];var h=e(37078),p=e(68239),f=e(10606);let m=(0,p.Z)(),v=function(r={}){let{themeId:t,defaultTheme:e,defaultClassName:h="MuiBox-root",generateClassName:p}=r,f=(0,l.ZP)("div",{shouldForwardProp:r=>"theme"!==r&&"sx"!==r&&"as"!==r})(s.Z),m=i.forwardRef(function(r,i){let l=(0,u.Z)(e),s=(0,c.Z)(r),{className:m,component:v="div"}=s,x=(0,o.Z)(s,g);return(0,d.jsx)(f,(0,n.Z)({as:v,ref:i,className:(0,a.Z)(m,p?p(h):h),theme:t&&l[t]||l},x))});return m}({themeId:f.Z,defaultTheme:m,defaultClassName:"MuiBox-root",generateClassName:h.Z.generate});var x=v},31536:function(r,t,e){"use strict";e.d(t,{Z:function(){return N}});var n=e(63366),o=e(87462),i=e(67294),a=e(90512),l=e(59766),s=e(94780),c=e(34867),u=e(70182);let d=(0,u.ZP)();var g=e(39214),h=e(39707),p=e(66500),f=e(95408),m=e(98700),v=e(85893);let x=["component","direction","spacing","divider","children","className","useFlexGap"],b=(0,p.Z)(),Z=d("div",{name:"MuiStack",slot:"Root",overridesResolver:(r,t)=>t.root});function y(r){return(0,g.Z)({props:r,name:"MuiStack",defaultTheme:b})}let O=r=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[r],R=({ownerState:r,theme:t})=>{let e=(0,o.Z)({display:"flex",flexDirection:"column"},(0,f.k9)({theme:t},(0,f.P$)({values:r.direction,breakpoints:t.breakpoints.values}),r=>({flexDirection:r})));if(r.spacing){let n=(0,m.hB)(t),o=Object.keys(t.breakpoints.values).reduce((t,e)=>(("object"==typeof r.spacing&&null!=r.spacing[e]||"object"==typeof r.direction&&null!=r.direction[e])&&(t[e]=!0),t),{}),i=(0,f.P$)({values:r.direction,base:o}),a=(0,f.P$)({values:r.spacing,base:o});"object"==typeof i&&Object.keys(i).forEach((r,t,e)=>{let n=i[r];if(!n){let n=t>0?i[e[t-1]]:"column";i[r]=n}}),e=(0,l.Z)(e,(0,f.k9)({theme:t},a,(t,e)=>r.useFlexGap?{gap:(0,m.NA)(n,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${O(e?i[e]:r.direction)}`]:(0,m.NA)(n,t)}}))}return(0,f.dt)(t.breakpoints,e)};var w=e(90948),C=e(71657);let P=function(r={}){let{createStyledComponent:t=Z,useThemeProps:e=y,componentName:l="MuiStack"}=r,u=()=>(0,s.Z)({root:["root"]},r=>(0,c.Z)(l,r),{}),d=t(R),g=i.forwardRef(function(r,t){let l=e(r),s=(0,h.Z)(l),{component:c="div",direction:g="column",spacing:p=0,divider:f,children:m,className:b,useFlexGap:Z=!1}=s,y=(0,n.Z)(s,x),O=u();return(0,v.jsx)(d,(0,o.Z)({as:c,ownerState:{direction:g,spacing:p,useFlexGap:Z},ref:t,className:(0,a.Z)(O.root,b)},y,{children:f?function(r,t){let e=i.Children.toArray(r).filter(Boolean);return e.reduce((r,n,o)=>(r.push(n),o<e.length-1&&r.push(i.cloneElement(t,{key:`separator-${o}`})),r),[])}(m,f):m}))});return g}({createStyledComponent:(0,w.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(r,t)=>t.root}),useThemeProps:r=>(0,C.Z)({props:r,name:"MuiStack"})});var N=P},98216:function(r,t,e){"use strict";var n=e(14142);t.Z=n.Z},39707:function(r,t,e){"use strict";e.d(t,{Z:function(){return c}});var n=e(87462),o=e(63366),i=e(59766),a=e(44920);let l=["sx"],s=r=>{var t,e;let n={systemProps:{},otherProps:{}},o=null!=(t=null==r||null==(e=r.theme)?void 0:e.unstable_sxConfig)?t:a.Z;return Object.keys(r).forEach(t=>{o[t]?n.systemProps[t]=r[t]:n.otherProps[t]=r[t]}),n};function c(r){let t;let{sx:e}=r,a=(0,o.Z)(r,l),{systemProps:c,otherProps:u}=s(a);return t=Array.isArray(e)?[c,...e]:"function"==typeof e?(...r)=>{let t=e(...r);return(0,i.P)(t)?(0,n.Z)({},c,t):c}:(0,n.Z)({},c,e),(0,n.Z)({},u,{sx:t})}},86742:function(r,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_components/Conversation/Chat/ChatElement",function(){return e(52419)}])},16609:function(r,t,e){"use strict";var n=e(5867),o=e(14948);let i=(0,n.Z)(o.Z)(()=>({"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",height:"10px",width:"10px",borderRadius:"50%","&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}));t.Z=i},52419:function(r,t,e){"use strict";e.r(t);var n=e(85893),o=e(87357),i=e(31536),a=e(25675),l=e.n(a),s=e(67294),c=e(53941),u=e(16609);t.default=r=>{let{toggleInnerDrawer:t,isUserActive:e,id:a,_id:d,name:g,profilePic:h}=r,{userData:p,updateUser:f}=(0,s.useContext)(c.S),[m,v]=(0,s.useState)("");return(0,s.useEffect)(()=>{let r=a||d;v(r)},[p,f,m,v]),(0,n.jsx)(o.Z,{sx:{width:"100%",borderRadius:1},children:(0,n.jsx)(i.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:(0,n.jsx)(i.Z,{direction:"row",spacing:0,children:(0,n.jsxs)("div",{style:{borderRadius:"40.5px"},onClick:()=>{if(t){let r={userName:g,profilePic:h,ActiveUser:e,id:a||d};v(r.id),t(),f(r)}else{let r={userName:g,profilePic:h,ActiveUser:e,id:a||d};v(r.id),f(r)}},className:"".concat((null==p?void 0:p.id)==m?"bg-[#F4F9FF]":""," z-100  hover:bg-[#F4F9FF] cursor-pointer p-[10px] rounded-[10px] w-[278px] flex space-x-[19px]  items-center"),children:[h?(0,n.jsx)(u.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",invisible:!e,children:(0,n.jsx)(l(),{alt:"img",width:47,height:47,className:" w-[47px] h-[47px] 2xl:w-[47px] 2xl:h-[47px] xl:w-[40px] xl:h-[40px]",style:{objectFit:"cover",borderRadius:"50%"},src:h,loading:"lazy"})}):(0,n.jsx)(u.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",invisible:!e,children:(0,n.jsxs)("div",{className:"bg-[#F8FBFF] grid place-items-center",style:{height:"44px",width:"44px",borderRadius:"50%",objectFit:"cover"},children:[(0,n.jsx)(l(),{loading:"lazy",alt:"not-found",width:16,height:16,src:"/assests/dashboard/icon/NotFound-img.svg"}),(0,n.jsx)("h1",{className:"relative top-[-5px]",style:{color:"#B3CBF1",textAlign:"center",fontFamily:"Poppins",fontSize:"6px",fontStyle:"normal",fontWeight:"500",lineHeight:"normal"},children:"No Image"})]})}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("h1",{style:{fontFamily:"Poppins",fontStyle:"normal",fontWeight:"600",lineHeight:"normal"},children:[g," ",(0,n.jsx)("span",{style:{fontFamily:"Poppins",fontSize:"8px",fontStyle:"normal",fontWeight:"500",lineHeight:"normal"},className:"text-[#A7A7A7] ml-[5px]",children:"1h ago"})]}),(0,n.jsx)("p",{style:{fontFamily:"Poppins",fontStyle:"normal",fontWeight:"400",lineHeight:"normal"},className:"text-[12px] 2xl:text-[11px] xl:text-[10px]",children:" Hi, I am busy now. Can I talk..."})]})]})})})})}}},function(r){r.O(0,[5675,5260,2502,1908,9774,2888,179],function(){return r(r.s=86742)}),_N_E=r.O()}]);