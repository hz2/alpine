import{a7 as w,j as D,a8 as x,r as d,a9 as C,aa as b,ab as O,a as m,ac as M,M as B,ad as H,ae as R}from"./entry.305ad51c.js";function E(...o){var h;const l=typeof o[o.length-1]=="string"?o.pop():void 0;typeof o[0]!="string"&&o.unshift(l);let[e,u,a={}]=o;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=D(),v=()=>null,_=()=>t.isHydrating?t.payload.data[e]:t.static.data[e];a.server=a.server??!0,a.default=a.default??v,a.getCachedData=a.getCachedData??_,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??x.deep;const f=()=>![null,void 0].includes(a.getCachedData(e));if(!t._asyncData[e]||!a.immediate){(h=t.payload._errors)[e]??(h[e]=null);const n=a.deep?d:C;t._asyncData[e]={data:n(a.getCachedData(e)??a.default()),pending:d(!f()),error:b(t.payload._errors,e),status:d("idle")}}const r={...t._asyncData[e]};r.refresh=r.execute=(n={})=>{if(t._asyncDataPromises[e]){if(n.dedupe===!1)return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if((n._initial||t.isHydrating&&n._initial!==!1)&&f())return Promise.resolve(a.getCachedData(e));r.pending.value=!0,r.status.value="pending";const c=new Promise((s,i)=>{try{s(u(t))}catch(P){i(P)}}).then(s=>{if(c.cancelled)return t._asyncDataPromises[e];let i=s;a.transform&&(i=a.transform(s)),a.pick&&(i=k(i,a.pick)),r.data.value=i,r.error.value=null,r.status.value="success"}).catch(s=>{if(c.cancelled)return t._asyncDataPromises[e];r.error.value=s,r.data.value=B(a.default()),r.status.value="error"}).finally(()=>{c.cancelled||(r.pending.value=!1,t.payload.data[e]=r.data.value,r.error.value&&(t.payload._errors[e]=H(r.error.value)),delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=c,t._asyncDataPromises[e]};const y=()=>r.refresh({_initial:!0}),g=a.server!==!1&&t.payload.serverRendered;{const n=R();if(n&&!n._nuxtOnBeforeMountCbs){n._nuxtOnBeforeMountCbs=[];const s=n._nuxtOnBeforeMountCbs;n&&(O(()=>{s.forEach(i=>{i()}),s.splice(0,s.length)}),m(()=>s.splice(0,s.length)))}g&&t.isHydrating&&(r.error.value||f())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):n&&(t.payload.serverRendered&&t.isHydrating||a.lazy)&&a.immediate?n._nuxtOnBeforeMountCbs.push(y):a.immediate&&y(),a.watch&&M(a.watch,()=>r.refresh());const c=t.hook("app:data:refresh",async s=>{(!s||s.includes(e))&&await r.refresh()});n&&m(c)}const p=Promise.resolve(t._asyncDataPromises[e]).then(()=>r);return Object.assign(p,r),p}async function j(o){await new Promise(e=>w(e));const l=o?Array.isArray(o)?o:[o]:void 0;await D().hooks.callHookParallel("app:data:refresh",l)}function k(o,l){const e={};for(const u of l)e[u]=o[u];return e}export{j as r,E as u};
