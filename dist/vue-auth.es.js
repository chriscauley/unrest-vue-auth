var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,u=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&a(e,r,t[r]);if(s)for(var r of s(t))n.call(t,r)&&a(e,r,t[r]);return e};import{resolveComponent as i,openBlock as l,createBlock as c,createVNode as m,toDisplayString as h,withDirectives as d,withCtx as p,vShow as g,createTextVNode as f,Fragment as v,renderList as y,createCommentVNode as b}from"vue";import $ from"querystring";import{ReactiveRestApi as _}from"@unrest/vue-reactive-storage";const k={AUTH_START:"/login/",AUTH_REDIRECT:"/",modes:[{slug:"login",form_name:"schema/LoginForm",title:"Login"},{slug:"sign-up",form_name:"schema/SignUpForm",title:"Sign Up"},{slug:"reset-password",form_name:"schema/ResetPassword",title:"Reset Password"}]},A={modal:{outer:e=>`modal ${e}`,content:e=>`modal-content ${e}`}},R={__route:{meta:{authRedirect:!0}},data:()=>({css:A}),computed:{slug(){return this.$route.path.match(/(login|sign-up|forgot-password)/)[1]},mode(){return k.modes.find((e=>e.slug===this.slug))}},methods:{success(){this.$auth.markStale(),this.$auth.fetch().then((()=>this.$router.replace(this.$route.query.next||"/")))}}};R.render=function(e,t,r,s,o,n){const a=i("unrest-schema-form"),u=i("unrest-auth-social-links");return l(),c("div",{class:o.css.modal.outer("-relative")},[m("div",{class:o.css.modal.content("-auto")},[m("h2",null,h(n.mode.title),1),m(a,{form_name:n.mode.form_name,success:n.success},null,8,["form_name","success"]),m(u)],2)],2)};const S={props:{items:{type:Array,default:()=>[]}},computed:{dropdown_items(){const{AUTH_START:e}=k;return[...this.items,{text:"Logout",click:()=>this.$auth.logout().then((()=>this.$router.push(e)))}]}}},T={class:"unrest-auth-menu"},P={key:1},w=f(" Log In "),U=f(" Sign Up ");S.render=function(e,t,r,s,o,n){const a=i("unrest-dropdown"),u=i("router-link");return d((l(),c("div",T,[e.$auth.user?(l(),c(a,{key:0,items:n.dropdown_items,title:e.$auth.user.username},null,8,["items","title"])):(l(),c("div",P,[m(u,{to:"/auth/login/",class:"btn -link"},{default:p((()=>[w])),_:1}),m(u,{to:"/auth/sign-up/",class:"btn -link"},{default:p((()=>[U])),_:1})]))],512)),[[g,e.$auth.ready]])};const x={computed:{providers(){var e;return null==(e=k.oauth_providers)?void 0:e.map(this.processProvider)}},methods:{processProvider(e){const t=$.stringify({next:this.$route.next});"string"==typeof e&&(e={slug:e});const{slug:r}=e;return u({title:r[0].toUpperCase()+r.slice(1),href:`/login/${r}/?${t}`,class:`btn btn-${r} mx-4`},e)}}},O={key:0},j=m("div",{className:"my-4 text-center"},"-- Or Connect With --",-1),E={className:"flex justify-center mb-4"};x.render=function(e,t,r,s,o,n){return n.providers?(l(),c("div",O,[j,m("div",E,[(l(!0),c(v,null,y(n.providers,(e=>(l(),c("a",{href:e.href,class:e.class,key:e.slug},h(e.title),11,["href"])))),128))])])):b("",!0)};const L=_({});L.state.ready=!1;const q=()=>L.fetch("auth/user.json").then((({user:e})=>(L.state.ready=!0,e))),H=()=>(L.markStale(),q());var C={api:L,get:()=>{var e;return q(),null==(e=L.get("auth/user.json"))?void 0:e.user},fetch:q,logout:()=>L.fetch("auth/logout/").then(H),refetch:H,markStale:L.markStale};var I=(e,t,r)=>{e.matched.some((e=>e.meta.authRequired))?C.fetch().then((()=>((e,t)=>{C.get()?t():t({path:k.AUTH_START,query:{next:e.fullPath}})})(e,r))):e.matched.some((e=>e.meta.authRedirect))?C.fetch().then((()=>((e,t)=>{C.get()?t(e.query.next||k.AUTH_REDIRECT):t()})(e,r))):r()};const D=(F=u({AuthForm:R,AuthMenu:S,AuthSocialLinks:x,config:k},C),t(F,r({get user(){return C.get()},get ready(){return C.get(),C.api.state.ready},routes:[{path:"/auth/:slug/",name:"auth",component:R,meta:{authRedirect:!0}}],plugin:{install:(e,t)=>{e.config.globalProperties.$auth=D,e.component("UnrestAuthMenu",S),e.component("UnrestAuthSocialLinks",x);const{$store:r,$router:s}=e.config.globalProperties;r&&(r.auth=D,r.list.push(D)),s&&s.beforeEach(I)}}})));var F;export default D;
