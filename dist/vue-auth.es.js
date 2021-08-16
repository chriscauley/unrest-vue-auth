var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,i=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&a(e,r,t[r]);if(n)for(var r of n(t))s.call(t,r)&&a(e,r,t[r]);return e};import{resolveComponent as u,openBlock as c,createBlock as f,createVNode as l,toDisplayString as d,createCommentVNode as p,resolveDynamicComponent as h,withDirectives as m,withCtx as g,createTextVNode as y,vShow as v,Fragment as b,renderList as w,reactive as E}from"vue";import S from"querystring";const x={AUTH_START:"/auth/login/",AUTH_REDIRECT:"/",enabled:!0,modes:[{slug:"login",form_name:"schema/LoginForm",title:"Login"},{slug:"sign-up",form_name:"schema/SignUpForm",title:"Sign Up"},{slug:"reset-password",form_name:"schema/ResetPassword",title:"Reset Password"}]},R={modal:{outer:e=>`modal ${e}`,content:e=>`modal-content ${e}`}},A={__route:{meta:{authRedirect:!0}},data:()=>({css:R}),computed:{mode(){return x.modes.find((e=>e.slug===this.$route.params.auth_mode))}},methods:{onError(e){var t;null==(t=x.onError)||t.call(x,e)},success(){this.$auth.markStale();const e=this.mode.next||this.$route.query.next||"/";this.$auth.fetch().then((()=>this.$router.replace(e)))}}},O={key:0};A.render=function(e,t,r,n,o,s){const a=u("unrest-schema-form"),i=u("unrest-auth-social-links");return c(),f("div",{class:o.css.modal.outer("-relative unrest-auth")},[l("div",{class:o.css.modal.content("-auto")},[l("h2",null,d(s.mode.title),1),s.mode.text?(c(),f("p",O,d(s.mode.text),1)):p("",!0),l(a,{form_name:s.mode.form_name,success:s.success,onError:s.onError},null,8,["form_name","success","onError"]),l(i),s.mode.extra?(c(),f(h(s.mode.extra),{key:1})):p("",!0)],2)],2)};const U={props:{items:{type:Array,default:()=>[]}},computed:{enabled:()=>x.enabled,dropdown_items(){const{AUTH_START:e}=x;return[...this.items,{text:"Logout",click:()=>this.$auth.logout().then((()=>this.$router.push(e)))}]}}},j={key:0,class:"unrest-auth-menu"},C={class:"unrest-auth-menu__trigger"},T={key:0,class:"avatar"},k={key:1,class:"fa fa-user"},P={key:1},_=y(" Log In "),N=y(" Sign Up ");U.render=function(e,t,r,n,o,s){const a=u("unrest-dropdown"),i=u("router-link");return s.enabled?m((c(),f("div",j,[e.$auth.user?(c(),f(a,{key:0,items:s.dropdown_items,offset:"16,7",placement:"bottom-end"},{default:g((()=>[l("div",C,[e.$auth.user.avatar_url?(c(),f("div",T,[l("img",{src:e.$auth.user.avatar_url},null,8,["src"])])):(c(),f("i",k)),y(" "+d(e.$auth.user.username),1)])])),_:1},8,["items"])):(c(),f("div",P,[l(i,{to:"/auth/login/",class:"btn -link"},{default:g((()=>[_])),_:1}),l(i,{to:"/auth/sign-up/",class:"btn -link"},{default:g((()=>[N])),_:1})]))],512)),[[v,e.$auth.ready]]):p("",!0)};const L={computed:{providers(){var e;return null==(e=x.oauth_providers)?void 0:e.map(this.processProvider)}},methods:{processProvider(e){const t=S.stringify({next:this.$route.next});"string"==typeof e&&(e={slug:e});const{slug:r}=e;return i({title:r[0].toUpperCase()+r.slice(1),href:`/login/${r}/?${t}`,class:`btn btn-${r}`},e)}}},B={key:0,class:"unrest-auth-social"},q=l("div",{className:"unrest-auth-social__or"},"-- Or Connect With --",-1),$={className:"unrest-auth-social__buttons"};L.render=function(e,t,r,n,o,s){return s.providers?(c(),f("div",B,[q,l("div",$,[(c(!0),f(b,null,w(s.providers,(e=>(c(),f("a",{href:e.href,class:e.class,key:e.slug},d(e.title),11,["href"])))),128))])])):p("",!0)};var D={exports:{}},F=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},H=F,I=Object.prototype.toString;function M(e){return"[object Array]"===I.call(e)}function z(e){return void 0===e}function X(e){return null!==e&&"object"==typeof e}function J(e){if("[object Object]"!==I.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function V(e){return"[object Function]"===I.call(e)}function K(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),M(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var G={isArray:M,isArrayBuffer:function(e){return"[object ArrayBuffer]"===I.call(e)},isBuffer:function(e){return null!==e&&!z(e)&&null!==e.constructor&&!z(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:X,isPlainObject:J,isUndefined:z,isDate:function(e){return"[object Date]"===I.call(e)},isFile:function(e){return"[object File]"===I.call(e)},isBlob:function(e){return"[object Blob]"===I.call(e)},isFunction:V,isStream:function(e){return X(e)&&V(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:K,merge:function e(){var t={};function r(r,n){J(t[n])&&J(r)?t[n]=e(t[n],r):J(r)?t[n]=e({},r):M(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)K(arguments[n],r);return t},extend:function(e,t,r){return K(t,(function(t,n){e[n]=r&&"function"==typeof t?H(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},W=G;function Q(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Y=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(W.isURLSearchParams(t))n=t.toString();else{var o=[];W.forEach(t,(function(e,t){null!=e&&(W.isArray(e)?t+="[]":e=[e],W.forEach(e,(function(e){W.isDate(e)?e=e.toISOString():W.isObject(e)&&(e=JSON.stringify(e)),o.push(Q(t)+"="+Q(e))})))})),n=o.join("&")}if(n){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},Z=G;function ee(){this.handlers=[]}ee.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},ee.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},ee.prototype.forEach=function(e){Z.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var te=ee,re=G,ne=function(e){return!(!e||!e.__CANCEL__)},oe=G,se=function(e,t,r,n,o){return function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,r,n,o)},ae=se,ie=G,ue=ie.isStandardBrowserEnv()?{write:function(e,t,r,n,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),ie.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),ie.isString(n)&&a.push("path="+n),ie.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},ce=G,fe=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],le=G,de=le.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=le.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},pe=G,he=ue,me=Y,ge=de,ye=se,ve=G,be=function(e,t){oe.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},we={"Content-Type":"application/x-www-form-urlencoded"};function Ee(e,t){!ve.isUndefined(e)&&ve.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Se,xe={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Se=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;pe.isFormData(n)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",i=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(a+":"+i)}var u=function(e,t){return e&&!function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}(e.baseURL,e.url);if(s.open(e.method.toUpperCase(),me(u,e.params,e.paramsSerializer),!0),s.timeout=e.timeout,s.onreadystatechange=function(){if(s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in s?function(e){var t,r,n,o={};return e?(ce.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=ce.trim(e.substr(0,n)).toLowerCase(),r=ce.trim(e.substr(n+1)),t){if(o[t]&&fe.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o}(s.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:n,config:e,request:s};(function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(ae("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)})(t,r,o),s=null}},s.onabort=function(){s&&(r(ye("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){r(ye("Network Error",e,null,s)),s=null},s.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(ye(t,e,"ECONNABORTED",s)),s=null},pe.isStandardBrowserEnv()){var c=(e.withCredentials||ge(u))&&e.xsrfCookieName?he.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}if("setRequestHeader"in s&&pe.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:s.setRequestHeader(t,e)})),pe.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),e.responseType)try{s.responseType=e.responseType}catch(f){if("json"!==e.responseType)throw f}"function"==typeof e.onDownloadProgress&&s.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){s&&(s.abort(),r(e),s=null)})),n||(n=null),s.send(n)}))}),Se),transformRequest:[function(e,t){return be(t,"Accept"),be(t,"Content-Type"),ve.isFormData(e)||ve.isArrayBuffer(e)||ve.isBuffer(e)||ve.isStream(e)||ve.isFile(e)||ve.isBlob(e)?e:ve.isArrayBufferView(e)?e.buffer:ve.isURLSearchParams(e)?(Ee(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):ve.isObject(e)?(Ee(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ve.forEach(["delete","get","head"],(function(e){xe.headers[e]={}})),ve.forEach(["post","put","patch"],(function(e){xe.headers[e]=ve.merge(we)}));var Re=xe,Ae=G,Oe=function(e,t,r){return re.forEach(r,(function(r){e=r(e,t)})),e},Ue=ne,je=Re;function Ce(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var Te=G,ke=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function i(e,t){return Te.isPlainObject(e)&&Te.isPlainObject(t)?Te.merge(e,t):Te.isPlainObject(t)?Te.merge({},t):Te.isArray(t)?t.slice():t}function u(n){Te.isUndefined(t[n])?Te.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(e[n],t[n])}Te.forEach(n,(function(e){Te.isUndefined(t[e])||(r[e]=i(void 0,t[e]))})),Te.forEach(o,u),Te.forEach(s,(function(n){Te.isUndefined(t[n])?Te.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(void 0,t[n])})),Te.forEach(a,(function(n){n in t?r[n]=i(e[n],t[n]):n in e&&(r[n]=i(void 0,e[n]))}));var c=n.concat(o).concat(s).concat(a),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return Te.forEach(f,u),r},Pe=G,_e=Y,Ne=te,Le=function(e){return Ce(e),e.headers=e.headers||{},e.data=Oe(e.data,e.headers,e.transformRequest),e.headers=Ae.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ae.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||je.adapter)(e).then((function(t){return Ce(e),t.data=Oe(t.data,t.headers,e.transformResponse),t}),(function(t){return Ue(t)||(Ce(e),t&&t.response&&(t.response.data=Oe(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Be=ke;function qe(e){this.defaults=e,this.interceptors={request:new Ne,response:new Ne}}qe.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=Be(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[Le,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},qe.prototype.getUri=function(e){return e=Be(this.defaults,e),_e(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Pe.forEach(["delete","get","head","options"],(function(e){qe.prototype[e]=function(t,r){return this.request(Be(r||{},{method:e,url:t,data:(r||{}).data}))}})),Pe.forEach(["post","put","patch"],(function(e){qe.prototype[e]=function(t,r,n){return this.request(Be(n||{},{method:e,url:t,data:r}))}}));var $e=qe;function De(e){this.message=e}De.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},De.prototype.__CANCEL__=!0;var Fe=De,He=Fe;function Ie(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new He(e),t(r.reason))}))}Ie.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Ie.source=function(){var e;return{token:new Ie((function(t){e=t})),cancel:e}};var Me=Ie,ze=G,Xe=F,Je=$e,Ve=ke;function Ke(e){var t=new Je(e),r=Xe(Je.prototype.request,t);return ze.extend(r,Je.prototype,t),ze.extend(r,t),r}var Ge=Ke(Re);Ge.Axios=Je,Ge.create=function(e){return Ke(Ve(Ge.defaults,e))},Ge.Cancel=Fe,Ge.CancelToken=Me,Ge.isCancel=ne,Ge.all=function(e){return Promise.all(e)},Ge.spread=function(e){return function(t){return e.apply(null,t)}},Ge.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},D.exports=Ge,D.exports.default=Ge;var We=D.exports;const Qe=()=>{const e=We.create({baseURL:"/api/",transformRequest(e,t){const r=((e="")=>{var t;return(null==(t=e.match(/csrftoken=([^;]+)/))?void 0:t[1])||""})("undefined"==typeof document?"":document.cookie);return t.delete["X-CSRFToken"]=r,t.post["X-CSRFToken"]=r,t.post["Content-Type"]="application/json",JSON.stringify(e)}});return e.interceptors.response.use((e=>e.data),(e=>{throw e})),e},Ye=e=>e,Ze=((e={})=>{const{client:t=Qe(),fromServer:r=Ye,toServer:n=Ye}=e;let o=(new Date).valueOf();const s={},a={},i=E({loading:{},byUrl:{},byId:{}}),u=e=>{const n=o>s[e]||!i.byUrl[e];if(i.loading[e]){let t;a[e]=a[e]||[];const r=new Promise((e=>t=e));return a[e].push(t),r}return n?(i.loading[e]=!0,t.get(e).then((t=>{var n;return s[e]=(new Date).valueOf(),i.byUrl[e]=t,t.id?i.byId[t.id]=r(t):t.items&&t.items.forEach((e=>i.byId[e.id]=r(e))),i.loading[e]=!1,null==(n=a[e])||n.forEach((e=>e(t))),t}))):Promise.resolve(i.byUrl[e])},c=e=>(o=(new Date).valueOf(),e);return{state:i,fetch:u,get:e=>(u(e),i.byUrl[e]),markStale:c,post:(e,r)=>t.post(e,n(r)).then(c),put:(e,r)=>t.put(e,n(r)).then(c),delete:e=>t.delete(e).then(c)}})({});Ze.state.ready=!1;const et=()=>x.enabled?Ze.fetch("auth/user.json").then((({user:e})=>(Ze.state.ready=!0,e))):Promise.resolve(Ze.state.user),tt=()=>x.enabled?(Ze.markStale(),et()):Promise.resolve(Ze.state.user);var rt={api:Ze,get:()=>{var e;return x.enabled?(et(),null==(e=Ze.get("auth/user.json"))?void 0:e.user):Ze.state.user},fetch:et,logout:()=>x.enabled?Ze.fetch("auth/logout/").then(tt):Promise.resolve(),refetch:tt,markStale:Ze.markStale};var nt=(e,t,r)=>{e.matched.some((e=>e.meta.authRequired))?rt.fetch().then((()=>((e,t)=>{if(rt.get())t();else{if(e.path===x.AUTH_START)throw"@unrest/vue-auth detected cyclic redirect";t({path:x.AUTH_START,query:{next:e.fullPath}})}})(e,r))):e.matched.some((e=>e.meta.authRedirect))?rt.fetch().then((()=>((e,t)=>{if(rt.get()){const r=e.query.next||x.AUTH_REDIRECT;if(e.path===r)throw"@unrest/vue-auth detected cyclic redirect";t(r)}else t()})(e,r))):r()};const ot=(st=i({AuthForm:A,AuthMenu:U,AuthSocialLinks:L,config:x,configure:e=>{var t;Object.assign(x,e),x.enabled&&"offline"===(null==(t=rt.api.state.user)?void 0:t.id)?(rt.api.state.user=null,rt.api.state.ready=!1):x.enabled||(rt.api.state.user={id:"offline"},rt.api.state.ready=!0)}},rt),t(st,r({get enabled(){return x.enabled},get user(){return rt.get()},get ready(){return rt.get(),rt.api.state.ready},routes:[{path:"/auth/:auth_mode/",name:"auth",component:A,meta:{authRedirect:!0}}],plugin:{install:(e,t)=>{e.config.globalProperties.$auth=ot,e.component("UnrestAuthMenu",U),e.component("UnrestAuthSocialLinks",L);const{$store:r,$router:n}=e.config.globalProperties;r&&(r.auth=ot,r.list.push(ot)),n&&n.beforeEach(nt)}}})));var st;export default ot;
