(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2159],{80008:function(e,t,n){(e.exports=n(85177)).tz.load(n(91128))},85177:function(e,t,n){var o,i,r;r=function(e){"use strict";void 0===e.version&&e.default&&(e=e.default);var t,n,o={},i={},r={},a={},s={};e&&"string"==typeof e.version||R("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");var h=e.version.split("."),d=+h[0],l=+h[1];function c(e){return e>96?e-87:e>64?e-29:e-48}function u(e){var t,n=0,o=e.split("."),i=o[0],r=o[1]||"",a=1,s=0,h=1;for(45===e.charCodeAt(0)&&(n=1,h=-1);n<i.length;n++)s=60*s+(t=c(i.charCodeAt(n)));for(n=0;n<r.length;n++)a/=60,s+=(t=c(r.charCodeAt(n)))*a;return s*h}function p(e){for(var t=0;t<e.length;t++)e[t]=u(e[t])}function f(e,t){var n,o=[];for(n=0;n<t.length;n++)o[n]=e[t[n]];return o}function w(e){var t=e.split("|"),n=t[2].split(" "),o=t[3].split(""),i=t[4].split(" ");return p(n),p(o),p(i),function(e,t){for(var n=0;n<t;n++)e[n]=Math.round((e[n-1]||0)+6e4*e[n]);e[t-1]=1/0}(i,o.length),{name:t[0],abbrs:f(t[1].split(" "),o),offsets:f(n,o),untils:i,population:0|t[5]}}function g(e){e&&this._set(w(e))}function m(e,t){this.name=e,this.zones=t}function v(e){var t=e.toTimeString(),n=t.match(/\([a-z ]+\)/i);"GMT"===(n=n&&n[0]?(n=n[0].match(/[A-Z]/g))?n.join(""):void 0:(n=t.match(/[A-Z]{3,5}/g))?n[0]:void 0)&&(n=void 0),this.at=+e,this.abbr=n,this.offset=e.getTimezoneOffset()}function y(e){this.zone=e,this.offsetScore=0,this.abbrScore=0}function x(e,t){return e.offsetScore!==t.offsetScore?e.offsetScore-t.offsetScore:e.abbrScore!==t.abbrScore?e.abbrScore-t.abbrScore:e.zone.population!==t.zone.population?t.zone.population-e.zone.population:t.zone.name.localeCompare(e.zone.name)}function C(e){return(e||"").toLowerCase().replace(/\//g,"_")}function b(e){var t,n,i,r;for("string"==typeof e&&(e=[e]),t=0;t<e.length;t++)o[r=C(n=(i=e[t].split("|"))[0])]=e[t],a[r]=n,function(e,t){var n,o;for(p(t),n=0;n<t.length;n++)s[o=t[n]]=s[o]||{},s[o][e]=!0}(r,i[2].split(" "))}function D(e,t){var n,r=o[e=C(e)];return r instanceof g?r:"string"==typeof r?(r=new g(r),o[e]=r,r):i[e]&&t!==D&&(n=D(i[e],D))?((r=o[e]=new g)._set(n),r.name=a[e],r):null}function _(e){var t,n,o,r;for("string"==typeof e&&(e=[e]),t=0;t<e.length;t++)o=C((n=e[t].split("|"))[0]),r=C(n[1]),i[o]=r,a[o]=n[0],i[r]=o,a[r]=n[1]}function z(e){return z.didShowError||(z.didShowError=!0,R("moment.tz.zoneExists('"+e+"') has been deprecated in favor of !moment.tz.zone('"+e+"')")),!!D(e)}function M(e){var t="X"===e._f||"x"===e._f;return!!(e._a&&void 0===e._tzm&&!t)}function R(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e)}function S(t){var n,o=Array.prototype.slice.call(arguments,0,-1),i=arguments[arguments.length-1],r=e.utc.apply(null,o);return!e.isMoment(t)&&M(r)&&(n=D(i))&&r.add(n.parse(r),"minutes"),r.tz(i),r}(d<2||2===d&&l<6)&&R("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+e.version+". See momentjs.com"),g.prototype={_set:function(e){this.name=e.name,this.abbrs=e.abbrs,this.untils=e.untils,this.offsets=e.offsets,this.population=e.population},_index:function(e){var t;if((t=function(e,t){var n,o=t.length;if(e<t[0])return 0;if(o>1&&t[o-1]===1/0&&e>=t[o-2])return o-1;if(e>=t[o-1])return -1;for(var i=0,r=o-1;r-i>1;)t[n=Math.floor((i+r)/2)]<=e?i=n:r=n;return r}(+e,this.untils))>=0)return t},countries:function(){var e=this.name;return Object.keys(r).filter(function(t){return -1!==r[t].zones.indexOf(e)})},parse:function(e){var t,n,o,i,r=+e,a=this.offsets,s=this.untils,h=s.length-1;for(i=0;i<h;i++)if(t=a[i],n=a[i+1],o=a[i?i-1:i],t<n&&S.moveAmbiguousForward?t=n:t>o&&S.moveInvalidForward&&(t=o),r<s[i]-6e4*t)return a[i];return a[h]},abbr:function(e){return this.abbrs[this._index(e)]},offset:function(e){return R("zone.offset has been deprecated in favor of zone.utcOffset"),this.offsets[this._index(e)]},utcOffset:function(e){return this.offsets[this._index(e)]}},y.prototype.scoreOffsetAt=function(e){this.offsetScore+=Math.abs(this.zone.utcOffset(e.at)-e.offset),this.zone.abbr(e.at).replace(/[^A-Z]/g,"")!==e.abbr&&this.abbrScore++},S.version="0.5.46",S.dataVersion="",S._zones=o,S._links=i,S._names=a,S._countries=r,S.add=b,S.link=_,S.load=function(e){b(e.zones),_(e.links),function(e){var t,n,o,i;if(e&&e.length)for(t=0;t<e.length;t++)n=(i=e[t].split("|"))[0].toUpperCase(),o=i[1].split(" "),r[n]=new m(n,o)}(e.countries),S.dataVersion=e.version},S.zone=D,S.zoneExists=z,S.guess=function(e){return(!n||e)&&(n=function(){try{var e=Intl.DateTimeFormat().resolvedOptions().timeZone;if(e&&e.length>3){var t=a[C(e)];if(t)return t;R("Moment Timezone found "+e+" from the Intl api, but did not have that data loaded.")}}catch(e){}var n,o,i,r=function(){var e,t,n,o,i=new Date().getFullYear()-2,r=new v(new Date(i,0,1)),a=r.offset,s=[r];for(o=1;o<48;o++)(n=new Date(i,o,1).getTimezoneOffset())!==a&&(s.push(e=function(e,t){for(var n,o;o=((t.at-e.at)/12e4|0)*6e4;)(n=new v(new Date(e.at+o))).offset===e.offset?e=n:t=n;return e}(r,t=new v(new Date(i,o,1)))),s.push(new v(new Date(e.at+6e4))),r=t,a=n);for(o=0;o<4;o++)s.push(new v(new Date(i+o,0,1))),s.push(new v(new Date(i+o,6,1)));return s}(),h=r.length,d=function(e){var t,n,o,i,r=e.length,h={},d=[],l={};for(t=0;t<r;t++)if(o=e[t].offset,!l.hasOwnProperty(o)){for(n in i=s[o]||{})i.hasOwnProperty(n)&&(h[n]=!0);l[o]=!0}for(t in h)h.hasOwnProperty(t)&&d.push(a[t]);return d}(r),l=[];for(o=0;o<d.length;o++){for(i=0,n=new y(D(d[o]),h);i<h;i++)n.scoreOffsetAt(r[i]);l.push(n)}return l.sort(x),l.length>0?l[0].zone.name:void 0}()),n},S.names=function(){var e,t=[];for(e in a)a.hasOwnProperty(e)&&(o[e]||o[i[e]])&&a[e]&&t.push(a[e]);return t.sort()},S.Zone=g,S.unpack=w,S.unpackBase60=u,S.needsOffset=M,S.moveInvalidForward=!0,S.moveAmbiguousForward=!1,S.countries=function(){return Object.keys(r)},S.zonesForCountry=function(e,t){if(!(e=r[e.toUpperCase()]||null))return null;var n=e.zones.sort();return t?n.map(function(e){var t=D(e);return{name:e,offset:t.utcOffset(new Date)}}):n};var O=e.fn;function k(e){return function(){return this._z?this._z.abbr(this):e.call(this)}}function A(e){return function(){return this._z=null,e.apply(this,arguments)}}e.tz=S,e.defaultZone=null,e.updateOffset=function(t,n){var o,i=e.defaultZone;if(void 0===t._z&&(i&&M(t)&&!t._isUTC&&t.isValid()&&(t._d=e.utc(t._a)._d,t.utc().add(i.parse(t),"minutes")),t._z=i),t._z){if(16>Math.abs(o=t._z.utcOffset(t))&&(o/=60),void 0!==t.utcOffset){var r=t._z;t.utcOffset(-o,n),t._z=r}else t.zone(o,n)}},O.tz=function(t,n){if(t){if("string"!=typeof t)throw Error("Time zone name must be a string, got "+t+" ["+typeof t+"]");return this._z=D(t),this._z?e.updateOffset(this,n):R("Moment Timezone has no data for "+t+". See http://momentjs.com/timezone/docs/#/data-loading/."),this}if(this._z)return this._z.name},O.zoneName=k(O.zoneName),O.zoneAbbr=k(O.zoneAbbr),O.utc=A(O.utc),O.local=A(O.local),O.utcOffset=(t=O.utcOffset,function(){return arguments.length>0&&(this._z=null),t.apply(this,arguments)}),e.tz.setDefault=function(t){return(d<2||2===d&&l<9)&&R("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+e.version+"."),e.defaultZone=t?D(t):null,e};var E=e.momentProperties;return"[object Array]"===Object.prototype.toString.call(E)?(E.push("_z"),E.push("_a")):E&&(E._z=null),e},e.exports?e.exports=r(n(30381)):(o=[n(30381)],void 0===(i=r.apply(t,o))||(e.exports=i))},77929:function(){},82084:function(e,t,n){"use strict";n.d(t,{BB:function(){return c},YG:function(){return h},ZP:function(){return w},_H:function(){return d}});var o=n(67294);let i={x:0,y:0,width:0,height:0,unit:"px"},r=(e,t,n)=>Math.min(Math.max(e,t),n),a=(...e)=>e.filter(e=>e&&"string"==typeof e).join(" "),s=(e,t)=>e===t||e.width===t.width&&e.height===t.height&&e.x===t.x&&e.y===t.y&&e.unit===t.unit;function h(e,t,n,o){let i=c(e,n,o);return e.width&&(i.height=i.width/t),e.height&&(i.width=i.height*t),i.y+i.height>o&&(i.height=o-i.y,i.width=i.height*t),i.x+i.width>n&&(i.width=n-i.x,i.height=i.width/t),"%"===e.unit?l(i,n,o):i}function d(e,t,n){let o=c(e,t,n);return o.x=(t-o.width)/2,o.y=(n-o.height)/2,"%"===e.unit?l(o,t,n):o}function l(e,t,n){return"%"===e.unit?{...i,...e,unit:"%"}:{unit:"%",x:e.x?e.x/t*100:0,y:e.y?e.y/n*100:0,width:e.width?e.width/t*100:0,height:e.height?e.height/n*100:0}}function c(e,t,n){return e.unit?"px"===e.unit?{...i,...e,unit:"px"}:{unit:"px",x:e.x?e.x*t/100:0,y:e.y?e.y*n/100:0,width:e.width?e.width*t/100:0,height:e.height?e.height*n/100:0}:{...i,...e,unit:"px"}}function u(e,t,n,o,i,r=0,a=0,s=o,h=i){let d={...e},l=Math.min(r,o),c=Math.min(a,i),u=Math.min(s,o),p=Math.min(h,i);t&&(t>1?(c=(l=a?a*t:l)/t,u=s*t):(l=(c=r?r/t:c)*t,p=h/t)),d.y<0&&(d.height=Math.max(d.height+d.y,c),d.y=0),d.x<0&&(d.width=Math.max(d.width+d.x,l),d.x=0);let f=o-(d.x+d.width);f<0&&(d.x=Math.min(d.x,o-l),d.width+=f);let w=i-(d.y+d.height);if(w<0&&(d.y=Math.min(d.y,i-c),d.height+=w),d.width<l&&(("sw"===n||"nw"==n)&&(d.x-=l-d.width),d.width=l),d.height<c&&(("nw"===n||"ne"==n)&&(d.y-=c-d.height),d.height=c),d.width>u&&(("sw"===n||"nw"==n)&&(d.x-=u-d.width),d.width=u),d.height>p&&(("nw"===n||"ne"==n)&&(d.y-=p-d.height),d.height=p),t){let e=d.width/d.height;if(e<t){let e=Math.max(d.width/t,c);("nw"===n||"ne"==n)&&(d.y-=e-d.height),d.height=e}else if(e>t){let e=Math.max(d.height*t,l);("sw"===n||"nw"==n)&&(d.x-=e-d.width),d.width=e}}return d}let p={capture:!0,passive:!1},f=class e extends o.PureComponent{constructor(){super(...arguments),this.docMoveBound=!1,this.mouseDownOnCrop=!1,this.dragStarted=!1,this.evData={startClientX:0,startClientY:0,startCropX:0,startCropY:0,clientX:0,clientY:0,isResize:!0},this.componentRef=(0,o.createRef)(),this.mediaRef=(0,o.createRef)(),this.initChangeCalled=!1,this.state={cropIsActive:!1,newCropIsBeingDrawn:!1},this.onCropPointerDown=e=>{let{crop:t,disabled:n}=this.props,o=this.getBox();if(!t)return;let i=c(t,o.width,o.height);if(n)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let r=e.target.dataset.ord,a=e.clientX,s=e.clientY,h=i.x,d=i.y;if(r){let t=e.clientX-o.x,n=e.clientY-o.y,l=0,c=0;"ne"===r||"e"==r?(l=t-(i.x+i.width),c=n-i.y,h=i.x,d=i.y+i.height):"se"===r||"s"===r?(l=t-(i.x+i.width),c=n-(i.y+i.height),h=i.x,d=i.y):"sw"===r||"w"==r?(l=t-i.x,c=n-(i.y+i.height),h=i.x+i.width,d=i.y):("nw"===r||"n"==r)&&(l=t-i.x,c=n-i.y,h=i.x+i.width,d=i.y+i.height),a=h+o.x+l,s=d+o.y+c}this.evData={startClientX:a,startClientY:s,startCropX:h,startCropY:d,clientX:e.clientX,clientY:e.clientY,isResize:!!r,ord:r},this.mouseDownOnCrop=!0,this.setState({cropIsActive:!0})},this.onComponentPointerDown=e=>{let{crop:t,disabled:n,locked:o,keepSelection:i,onChange:r}=this.props,a=this.getBox();if(n||o||i&&t)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let s=e.clientX-a.x,h=e.clientY-a.y,d={unit:"px",x:s,y:h,width:0,height:0};this.evData={startClientX:e.clientX,startClientY:e.clientY,startCropX:s,startCropY:h,clientX:e.clientX,clientY:e.clientY,isResize:!0},this.mouseDownOnCrop=!0,r(c(d,a.width,a.height),l(d,a.width,a.height)),this.setState({cropIsActive:!0,newCropIsBeingDrawn:!0})},this.onDocPointerMove=e=>{let t;let{crop:n,disabled:o,onChange:i,onDragStart:r}=this.props,a=this.getBox();if(o||!n||!this.mouseDownOnCrop)return;e.cancelable&&e.preventDefault(),this.dragStarted||(this.dragStarted=!0,r&&r(e));let{evData:h}=this;h.clientX=e.clientX,h.clientY=e.clientY,s(n,t=h.isResize?this.resizeCrop():this.dragCrop())||i(c(t,a.width,a.height),l(t,a.width,a.height))},this.onComponentKeyDown=t=>{let{crop:n,disabled:o,onChange:i,onComplete:a}=this.props;if(o)return;let s=t.key,h=!1;if(!n)return;let d=this.getBox(),u=this.makePixelCrop(d),p=(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)?e.nudgeStepLarge:t.shiftKey?e.nudgeStepMedium:e.nudgeStep;if("ArrowLeft"===s?(u.x-=p,h=!0):"ArrowRight"===s?(u.x+=p,h=!0):"ArrowUp"===s?(u.y-=p,h=!0):"ArrowDown"===s&&(u.y+=p,h=!0),h){t.cancelable&&t.preventDefault(),u.x=r(u.x,0,d.width-u.width),u.y=r(u.y,0,d.height-u.height);let e=c(u,d.width,d.height),n=l(u,d.width,d.height);i(e,n),a&&a(e,n)}},this.onHandlerKeyDown=(t,n)=>{let{aspect:o=0,crop:i,disabled:r,minWidth:a=0,minHeight:h=0,maxWidth:d,maxHeight:p,onChange:f,onComplete:w}=this.props,g=this.getBox();if(r||!i||"ArrowUp"!==t.key&&"ArrowDown"!==t.key&&"ArrowLeft"!==t.key&&"ArrowRight"!==t.key)return;t.stopPropagation(),t.preventDefault();let m=(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)?e.nudgeStepLarge:t.shiftKey?e.nudgeStepMedium:e.nudgeStep,v=c(i,g.width,g.height),y=function(e,t,n,o){let i={...e};return"ArrowLeft"===t?"nw"===o?(i.x-=n,i.y-=n,i.width+=n,i.height+=n):"w"===o?(i.x-=n,i.width+=n):"sw"===o?(i.x-=n,i.width+=n,i.height+=n):"ne"===o?(i.y+=n,i.width-=n,i.height-=n):"e"===o?i.width-=n:"se"===o&&(i.width-=n,i.height-=n):"ArrowRight"===t&&("nw"===o?(i.x+=n,i.y+=n,i.width-=n,i.height-=n):"w"===o?(i.x+=n,i.width-=n):"sw"===o?(i.x+=n,i.width-=n,i.height-=n):"ne"===o?(i.y-=n,i.width+=n,i.height+=n):"e"===o?i.width+=n:"se"===o&&(i.width+=n,i.height+=n)),"ArrowUp"===t?"nw"===o?(i.x-=n,i.y-=n,i.width+=n,i.height+=n):"n"===o?(i.y-=n,i.height+=n):"ne"===o?(i.y-=n,i.width+=n,i.height+=n):"sw"===o?(i.x+=n,i.width-=n,i.height-=n):"s"===o?i.height-=n:"se"===o&&(i.width-=n,i.height-=n):"ArrowDown"===t&&("nw"===o?(i.x+=n,i.y+=n,i.width-=n,i.height-=n):"n"===o?(i.y+=n,i.height-=n):"ne"===o?(i.y+=n,i.width-=n,i.height-=n):"sw"===o?(i.x-=n,i.width+=n,i.height+=n):"s"===o?i.height+=n:"se"===o&&(i.width+=n,i.height+=n)),i}(v,t.key,m,n),x=u(y,o,n,g.width,g.height,a,h,d,p);if(!s(i,x)){let e=l(x,g.width,g.height);f(x,e),w&&w(x,e)}},this.onDocPointerDone=e=>{let{crop:t,disabled:n,onComplete:o,onDragEnd:i}=this.props,r=this.getBox();this.unbindDocMove(),!(n||!t)&&this.mouseDownOnCrop&&(this.mouseDownOnCrop=!1,this.dragStarted=!1,i&&i(e),o&&o(c(t,r.width,r.height),l(t,r.width,r.height)),this.setState({cropIsActive:!1,newCropIsBeingDrawn:!1}))},this.onDragFocus=e=>{var t;null==(t=this.componentRef.current)||t.scrollTo(0,0)}}get document(){return document}getBox(){let e=this.mediaRef.current;if(!e)return{x:0,y:0,width:0,height:0};let{x:t,y:n,width:o,height:i}=e.getBoundingClientRect();return{x:t,y:n,width:o,height:i}}componentDidUpdate(e){let{crop:t,onComplete:n}=this.props;if(n&&!e.crop&&t){let{width:e,height:o}=this.getBox();e&&o&&n(c(t,e,o),l(t,e,o))}}componentWillUnmount(){this.resizeObserver&&this.resizeObserver.disconnect()}bindDocMove(){this.docMoveBound||(this.document.addEventListener("pointermove",this.onDocPointerMove,p),this.document.addEventListener("pointerup",this.onDocPointerDone,p),this.document.addEventListener("pointercancel",this.onDocPointerDone,p),this.docMoveBound=!0)}unbindDocMove(){this.docMoveBound&&(this.document.removeEventListener("pointermove",this.onDocPointerMove,p),this.document.removeEventListener("pointerup",this.onDocPointerDone,p),this.document.removeEventListener("pointercancel",this.onDocPointerDone,p),this.docMoveBound=!1)}getCropStyle(){let{crop:e}=this.props;if(e)return{top:`${e.y}${e.unit}`,left:`${e.x}${e.unit}`,width:`${e.width}${e.unit}`,height:`${e.height}${e.unit}`}}dragCrop(){let{evData:e}=this,t=this.getBox(),n=this.makePixelCrop(t),o=e.clientX-e.startClientX,i=e.clientY-e.startClientY;return n.x=r(e.startCropX+o,0,t.width-n.width),n.y=r(e.startCropY+i,0,t.height-n.height),n}getPointRegion(e,t,n,o){let i;let{evData:r}=this,a=r.clientX-e.x,s=r.clientY-e.y;return i=o&&t?"nw"===t||"n"===t||"ne"===t:s<r.startCropY,(n&&t?"nw"===t||"w"===t||"sw"===t:a<r.startCropX)?i?"nw":"sw":i?"ne":"se"}resolveMinDimensions(e,t,n=0,o=0){let i=Math.min(n,e.width),r=Math.min(o,e.height);return t&&(i||r)?t>1?i?[i,i/t]:[r*t,r]:r?[r*t,r]:[i,i/t]:[i,r]}resizeCrop(){let{evData:t}=this,{aspect:n=0,maxWidth:o,maxHeight:i}=this.props,a=this.getBox(),[s,h]=this.resolveMinDimensions(a,n,this.props.minWidth,this.props.minHeight),d=this.makePixelCrop(a),l=this.getPointRegion(a,t.ord,s,h),c=t.ord||l,p=t.clientX-t.startClientX,f=t.clientY-t.startClientY;(s&&"nw"===c||"w"===c||"sw"===c)&&(p=Math.min(p,-s)),(h&&"nw"===c||"n"===c||"ne"===c)&&(f=Math.min(f,-h));let w={unit:"px",x:0,y:0,width:0,height:0};"ne"===l?(w.x=t.startCropX,w.width=p,n?w.height=w.width/n:w.height=Math.abs(f),w.y=t.startCropY-w.height):"se"===l?(w.x=t.startCropX,w.y=t.startCropY,w.width=p,n?w.height=w.width/n:w.height=f):"sw"===l?(w.x=t.startCropX+p,w.y=t.startCropY,w.width=Math.abs(p),n?w.height=w.width/n:w.height=f):"nw"===l&&(w.x=t.startCropX+p,w.width=Math.abs(p),n?(w.height=w.width/n,w.y=t.startCropY-w.height):(w.height=Math.abs(f),w.y=t.startCropY+f));let g=u(w,n,l,a.width,a.height,s,h,o,i);return n||e.xyOrds.indexOf(c)>-1?d=g:e.xOrds.indexOf(c)>-1?(d.x=g.x,d.width=g.width):e.yOrds.indexOf(c)>-1&&(d.y=g.y,d.height=g.height),d.x=r(d.x,0,a.width-d.width),d.y=r(d.y,0,a.height-d.height),d}createCropSelection(){let{ariaLabels:t=e.defaultProps.ariaLabels,disabled:n,locked:i,renderSelectionAddon:r,ruleOfThirds:a,crop:s}=this.props,h=this.getCropStyle();if(s)return o.createElement("div",{style:h,className:"ReactCrop__crop-selection",onPointerDown:this.onCropPointerDown,"aria-label":t.cropArea,tabIndex:0,onKeyDown:this.onComponentKeyDown,role:"group"},!n&&!i&&o.createElement("div",{className:"ReactCrop__drag-elements",onFocus:this.onDragFocus},o.createElement("div",{className:"ReactCrop__drag-bar ord-n","data-ord":"n"}),o.createElement("div",{className:"ReactCrop__drag-bar ord-e","data-ord":"e"}),o.createElement("div",{className:"ReactCrop__drag-bar ord-s","data-ord":"s"}),o.createElement("div",{className:"ReactCrop__drag-bar ord-w","data-ord":"w"}),o.createElement("div",{className:"ReactCrop__drag-handle ord-nw","data-ord":"nw",tabIndex:0,"aria-label":t.nwDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"nw"),role:"button"}),o.createElement("div",{className:"ReactCrop__drag-handle ord-n","data-ord":"n",tabIndex:0,"aria-label":t.nDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"n"),role:"button"}),o.createElement("div",{className:"ReactCrop__drag-handle ord-ne","data-ord":"ne",tabIndex:0,"aria-label":t.neDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"ne"),role:"button"}),o.createElement("div",{className:"ReactCrop__drag-handle ord-e","data-ord":"e",tabIndex:0,"aria-label":t.eDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"e"),role:"button"}),o.createElement("div",{className:"ReactCrop__drag-handle ord-se","data-ord":"se",tabIndex:0,"aria-label":t.seDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"se"),role:"button"}),o.createElement("div",{className:"ReactCrop__drag-handle ord-s","data-ord":"s",tabIndex:0,"aria-label":t.sDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"s"),role:"button"}),o.createElement("div",{className:"ReactCrop__drag-handle ord-sw","data-ord":"sw",tabIndex:0,"aria-label":t.swDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"sw"),role:"button"}),o.createElement("div",{className:"ReactCrop__drag-handle ord-w","data-ord":"w",tabIndex:0,"aria-label":t.wDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"w"),role:"button"})),r&&o.createElement("div",{className:"ReactCrop__selection-addon",onMouseDown:e=>e.stopPropagation()},r(this.state)),a&&o.createElement(o.Fragment,null,o.createElement("div",{className:"ReactCrop__rule-of-thirds-hz"}),o.createElement("div",{className:"ReactCrop__rule-of-thirds-vt"})))}makePixelCrop(e){let t={...i,...this.props.crop||{}};return c(t,e.width,e.height)}render(){let{aspect:e,children:t,circularCrop:n,className:i,crop:r,disabled:s,locked:h,style:d,ruleOfThirds:l}=this.props,{cropIsActive:c,newCropIsBeingDrawn:u}=this.state,p=r?this.createCropSelection():null,f=a("ReactCrop",i,c&&"ReactCrop--active",s&&"ReactCrop--disabled",h&&"ReactCrop--locked",u&&"ReactCrop--new-crop",r&&e&&"ReactCrop--fixed-aspect",r&&n&&"ReactCrop--circular-crop",r&&l&&"ReactCrop--rule-of-thirds",!this.dragStarted&&r&&!r.width&&!r.height&&"ReactCrop--invisible-crop",n&&"ReactCrop--no-animate");return o.createElement("div",{ref:this.componentRef,className:f,style:d},o.createElement("div",{ref:this.mediaRef,className:"ReactCrop__child-wrapper",onPointerDown:this.onComponentPointerDown},t),p)}};f.xOrds=["e","w"],f.yOrds=["n","s"],f.xyOrds=["nw","ne","se","sw"],f.nudgeStep=1,f.nudgeStepMedium=10,f.nudgeStepLarge=100,f.defaultProps={ariaLabels:{cropArea:"Use the arrow keys to move the crop selection area",nwDragHandle:"Use the arrow keys to move the north west drag handle to change the crop selection area",nDragHandle:"Use the up and down arrow keys to move the north drag handle to change the crop selection area",neDragHandle:"Use the arrow keys to move the north east drag handle to change the crop selection area",eDragHandle:"Use the up and down arrow keys to move the east drag handle to change the crop selection area",seDragHandle:"Use the arrow keys to move the south east drag handle to change the crop selection area",sDragHandle:"Use the up and down arrow keys to move the south drag handle to change the crop selection area",swDragHandle:"Use the arrow keys to move the south west drag handle to change the crop selection area",wDragHandle:"Use the up and down arrow keys to move the west drag handle to change the crop selection area"}};let w=f}}]);