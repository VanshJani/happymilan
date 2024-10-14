"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8078],{70917:function(t,e,r){r.d(e,{F4:function(){return l},iv:function(){return s},tZ:function(){return o}});var a=r(75260),n=r(67294);r(27278);var i=r(5352);r(8417),r(8679);var o=function(t,e){var r=arguments;if(null==e||!a.h.call(e,"css"))return n.createElement.apply(void 0,r);var i=r.length,o=Array(i);o[0]=a.E,o[1]=(0,a.c)(t,e);for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)};function s(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return(0,i.O)(e)}var l=function(){var t=s.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},88078:function(t,e,r){r.d(e,{Z:function(){return x}});var a=r(63366),n=r(87462),i=r(67294),o=r(90512),s=r(70917),l=r(94780),h=r(41796),u=r(90948),d=r(71657),c=r(1588),f=r(34867);function p(t){return(0,f.Z)("MuiSkeleton",t)}(0,c.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var m=r(85893);let v=["animation","className","component","height","style","variant","width"],g=t=>t,b,y,w,k,C=t=>{let{classes:e,variant:r,animation:a,hasChildren:n,width:i,height:o}=t;return(0,l.Z)({root:["root",r,a,n&&"withChildren",n&&!i&&"fitContent",n&&!o&&"heightAuto"]},p,e)},Z=(0,s.F4)(b||(b=g`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),_=(0,s.F4)(y||(y=g`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),R=(0,u.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,e[r.variant],!1!==r.animation&&e[r.animation],r.hasChildren&&e.withChildren,r.hasChildren&&!r.width&&e.fitContent,r.hasChildren&&!r.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{let r=String(t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",a=parseFloat(t.shape.borderRadius);return(0,n.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${r}/${Math.round(a/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>"pulse"===t.animation&&(0,s.iv)(w||(w=g`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Z),({ownerState:t,theme:e})=>"wave"===t.animation&&(0,s.iv)(k||(k=g`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),_,(e.vars||e).palette.action.hover)),S=i.forwardRef(function(t,e){let r=(0,d.Z)({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:s,component:l="span",height:h,style:u,variant:c="text",width:f}=r,p=(0,a.Z)(r,v),g=(0,n.Z)({},r,{animation:i,component:l,variant:c,hasChildren:!!p.children}),b=C(g);return(0,m.jsx)(R,(0,n.Z)({as:l,ref:e,className:(0,o.Z)(b.root,s),ownerState:g},p,{style:(0,n.Z)({width:f,height:h},u)}))});var x=S}}]);