"use strict";var ge=Object.defineProperty;var _e=(e,t,s)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var Y=(e,t,s)=>(_e(e,typeof t!="symbol"?t+"":t,s),s);function ye(e,t=null){return t||(t=e,e=document),e.querySelector(t)}function j(){}function be(e,t){for(const s in t)e[s]=t[s];return e}function re(e){return e()}function ae(){return Object.create(null)}function A(e){e.forEach(re)}function de(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function we(e){return Object.keys(e).length===0}function ve(e,t,s,n){if(e){const l=ce(e,t,s,n);return e[0](l)}}function ce(e,t,s,n){return e[1]&&n?be(s.ctx.slice(),e[1](n(t))):s.ctx}function xe(e,t,s,n){if(e[2]&&n){const l=e[2](n(s));if(t.dirty===void 0)return l;if(typeof l=="object"){const r=[],i=Math.max(t.dirty.length,l.length);for(let o=0;o<i;o+=1)r[o]=t.dirty[o]|l[o];return r}return t.dirty|l}return t.dirty}function $e(e,t,s,n,l,r){if(l){const i=ce(t,s,n,r);e.p(i,l)}}function Me(e){if(e.ctx.length>32){const t=[],s=e.ctx.length/32;for(let n=0;n<s;n++)t[n]=-1;return t}return-1}function p(e,t){e.appendChild(t)}function _(e,t,s){e.insertBefore(t,s||null)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function W(e){return document.createTextNode(e)}function v(){return W(" ")}function D(e,t,s,n){return e.addEventListener(t,s,n),()=>e.removeEventListener(t,s,n)}function b(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function k(e,t,s){const n=t.toLowerCase();n in e?e[n]=typeof e[n]=="boolean"&&s===""?!0:s:t in e?e[t]=typeof e[t]=="boolean"&&s===""?!0:s:b(e,t,s)}function ke(e){return Array.from(e.childNodes)}function le(e,t){t=""+t,e.data!==t&&(e.data=t)}function S(e,t,s,n){s==null?e.style.removeProperty(t):e.style.setProperty(t,s,n?"important":"")}let ee;function P(e){ee=e}const L=[],z=[];let E=[];const Q=[],Ce=Promise.resolve();let X=!1;function ze(){X||(X=!0,Ce.then(fe))}function Z(e){E.push(e)}function te(e){Q.push(e)}const J=new Set;let O=0;function fe(){if(O!==0)return;const e=ee;do{try{for(;O<L.length;){const t=L[O];O++,P(t),Oe(t.$$)}}catch(t){throw L.length=0,O=0,t}for(P(null),L.length=0,O=0;z.length;)z.pop()();for(let t=0;t<E.length;t+=1){const s=E[t];J.has(s)||(J.add(s),s())}E.length=0}while(L.length);for(;Q.length;)Q.pop()();X=!1,J.clear(),P(e)}function Oe(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Z)}}function Le(e){const t=[],s=[];E.forEach(n=>e.indexOf(n)===-1?t.push(n):s.push(n)),s.forEach(n=>n()),E=t}const R=new Set;let Ee;function H(e,t){e&&e.i&&(R.delete(e),e.i(t))}function I(e,t,s,n){if(e&&e.o){if(R.has(e))return;R.add(e),Ee.c.push(()=>{R.delete(e),n&&(s&&e.d(1),n())}),e.o(t)}else n&&n()}function se(e,t,s){const n=e.$$.props[t];n!==void 0&&(e.$$.bound[n]=s,s(e.$$.ctx[n]))}function q(e){e&&e.c()}function T(e,t,s){const{fragment:n,after_update:l}=e.$$;n&&n.m(t,s),Z(()=>{const r=e.$$.on_mount.map(re).filter(de);e.$$.on_destroy?e.$$.on_destroy.push(...r):A(r),e.$$.on_mount=[]}),l.forEach(Z)}function N(e,t){const s=e.$$;s.fragment!==null&&(Le(s.after_update),A(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function He(e,t){e.$$.dirty[0]===-1&&(L.push(e),ze(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(e,t,s,n,l,r,i=null,o=[-1]){const a=ee;P(e);const d=e.$$={fragment:null,ctx:[],props:r,update:j,not_equal:l,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:ae(),dirty:o,skip_bound:!1,root:t.target||a.$$.root};i&&i(d.root);let h=!1;if(d.ctx=s?s(e,t.props||{},(c,w,...x)=>{const $=x.length?x[0]:w;return d.ctx&&l(d.ctx[c],d.ctx[c]=$)&&(!d.skip_bound&&d.bound[c]&&d.bound[c]($),h&&He(e,c)),w}):[],d.update(),h=!0,A(d.before_update),d.fragment=n?n(d.ctx):!1,t.target){if(t.hydrate){const c=ke(t.target);d.fragment&&d.fragment.l(c),c.forEach(g)}else d.fragment&&d.fragment.c();t.intro&&H(e.$$.fragment),T(e,t.target,t.anchor),fe()}P(a)}class G{constructor(){Y(this,"$$");Y(this,"$$set")}$destroy(){N(this,1),this.$destroy=j}$on(t,s){if(!de(s))return j;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(s),()=>{const l=n.indexOf(s);l!==-1&&n.splice(l,1)}}$set(t){this.$$set&&!we(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Se="4";typeof window!="undefined"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Se);const Pe="0.9.4";function Ie(e){let t,s,n,l,r;const i=e[5].default,o=ve(i,e,e[4],null);return{c(){t=m("dialog"),s=m("form"),o&&o.c(),b(s,"action",""),b(s,"method","dialog"),b(s,"class","svelte-15f2hai"),S(t,"max-width",e[1]+"px"),S(t,"max-height",e[2]+"px"),b(t,"class","svelte-15f2hai")},m(a,d){_(a,t,d),p(t,s),o&&o.m(s,null),e[6](t),n=!0,l||(r=D(t,"close",e[7]),l=!0)},p(a,[d]){o&&o.p&&(!n||d&16)&&$e(o,i,a,a[4],n?xe(i,a[4],d,null):Me(a[4]),null),(!n||d&2)&&S(t,"max-width",a[1]+"px"),(!n||d&4)&&S(t,"max-height",a[2]+"px")},i(a){n||(H(o,a),n=!0)},o(a){I(o,a),n=!1},d(a){a&&g(t),o&&o.d(a),e[6](null),l=!1,r()}}}function Te(e,t,s){let{$$slots:n={},$$scope:l}=t,{maxWidth:r=500}=t,{maxHeight:i=300}=t,{showModal:o}=t,a;function d(c){z[c?"unshift":"push"](()=>{a=c,s(3,a)})}const h=()=>s(0,o=!1);return e.$$set=c=>{"maxWidth"in c&&s(1,r=c.maxWidth),"maxHeight"in c&&s(2,i=c.maxHeight),"showModal"in c&&s(0,o=c.showModal),"$$scope"in c&&s(4,l=c.$$scope)},e.$$.update=()=>{e.$$.dirty&9&&a&&o&&a.showModal()},[o,r,i,a,l,n,d,h]}class ue extends G{constructor(t){super(),F(this,t,Te,Ie,B,{maxWidth:1,maxHeight:2,showModal:0})}}function Ne(e){let t,s,n,l,r;return{c(){t=m("header"),t.innerHTML='<sp-heading data-grow="" class="svelte-s114t0">🌈 Magic Markup Cheatsheet</sp-heading> <button type="submit" autofocus="" class="svelte-s114t0">Close</button>',s=v(),n=m("sp-divider"),l=v(),r=m("sp-body"),r.innerHTML=`<div class="flex"><sp-heading size="m" class="flex">Replace Markers List</sp-heading> <sp-heading size="xs"><span class="font-normal">Examples shown for configuration: open with <code>[</code> and close with <code>]</code></span></sp-heading></div> <div class="flex flex-thirds flex-wrap flex-align-start"><template id="cheatsheet-marker-template"><div><sp-heading size="xs" class="marker-name"></sp-heading> <sp-body size="m" class="marker-description"></sp-body></div></template></div> <sp-divider size="small" style="margin-top: 17px;"></sp-divider> <div class="flex flex-thirds flex-align-start flex-wrap"><div><sp-heading size="m">Paragraph styles</sp-heading> <div class="example flex flex-gap flex-align-start svelte-s114t0"><div data-grow=""><sp-heading size="xs">Config</sp-heading> <code data-s=""><p class="svelte-s114t0"># : Header 1<br/>
							## : Header 2<br/>
							- : UList<br/>
							raw:\\d+\\. : OList<br/>
							 </p></code></div> <div data-grow=""><sp-heading size="xs">Matches</sp-heading> <code data-s=""><p class="svelte-s114t0"># Headline<br/>
							## Headline<br/>
							- Item<br/>
							1. Item<br/>
							2. Item</p></code></div></div> <sp-body size="m"><p class="svelte-s114t0">Paragraph style patterns must be located at the start of the paragraph. They are defined with exactly one pattern, and style name is trimmed of white space. Use prefix <code data-s="">raw:</code> for access to raw GREP</p></sp-body></div> <div><sp-heading size="m">Character styles</sp-heading> <div class="example flex flex-gap flex-align-start svelte-s114t0"><div data-grow=""><sp-heading size="xs">Config</sp-heading> <code data-s=""><p class="svelte-s114t0">_: Underline<br/>
							_b_:_e_: Important<br/>
							raw:[_-⎺]{1,3}: Steps<br/>
							 <br/>
							 <br/>
							raw:a+:b+: Why<br/>
							 </p></code></div> <div data-grow=""><sp-heading size="xs">Matches</sp-heading> <code data-s=""><p class="svelte-s114t0">_Underlined_<br/>
							_b_This_e_<br/>
							_-⎺Staircase⎺-_<br/>
							⎺-_to_-⎺<br/>
							_-⎺Heaven⎺-_<br/>
							aDONTb<br/>
							aaaDO THISbbb</p></code></div></div> <sp-body size="m"><p class="svelte-s114t0">Character patterns have start and end, and these can be either the same or different. Similarly to Paragraph Styles, they support <code data-s="">raw:</code> prefix.</p></sp-body></div> <div><sp-heading size="m">Replace markers</sp-heading> <sp-heading size="xs">Usage with config</sp-heading> <code data-s="" class="example svelte-s114t0"><p class="svelte-s114t0">Same character: | and | → |rit|<br/>
					Different:      &gt; and &lt; → &gt;rit&lt;<br/>
					Open only:      * → *rit<br/>
					Close only:     !! → rit!!</p></code> <sp-body size="m"><p class="svelte-s114t0">Markers are a small selection of characters that aren&#39;t easy to type on a keyboard, or are hard to keep when pasting, and are useful for my usecases. If you&#39;re missing one, contact me.</p></sp-body></div> <div><sp-heading size="m">Collapse newlines</sp-heading> <sp-body size="m"><p class="svelte-s114t0">Collapses multiple consecutive newlines into a single one. Useful when you&#39;re managing paragraph spacing through styles, rather than empty paragraphs.</p></sp-body></div> <div><sp-heading size="m">Convert Markdown links</sp-heading> <sp-body size="m"><p class="svelte-s114t0">Converts links in format <code data-s="">[the text of hyperlink](http://example.com)</code> to proper InDesign hyperlinks.</p> <p class="svelte-s114t0">Supported formats:</p> <ul><li>— <code data-s="">[Website](https://example.com)</code></li> <li>— <code data-s="">[Call me](tel:+44444444444)</code></li> <li>— <code data-s="">[Email](mailto:adam@example.com)</code></li></ul></sp-body></div> <div><sp-heading size="m">Convert raw links</sp-heading> <sp-body size="m"><p class="svelte-s114t0">Converts raw urls to a hyperlink.</p> <p class="svelte-s114t0">Supported formats:</p> <ul><li>— URLs: <code data-s="">http(s)://example.com</code></li> <li>— Tel: <code data-s="">tel:+44444444444</code></li> <li>— Email: <code data-s="">mailto:adam@example.com</code></li></ul></sp-body></div></div> <sp-divider size="small" style="margin-top: 17px;"></sp-divider> <sp-heading size="m">Convert Raw</sp-heading> <p class="svelte-s114t0">If you need to back up your presets, or look into plugin data folder, it&#39;s located here:</p> <input type="text" readonly="" id="cheatsheet-plugin-data-folder" style="width: 100%"/>`,b(t,"class","flex svelte-s114t0"),S(t,"align-items","center"),k(n,"size","medium")},m(i,o){_(i,t,o),_(i,s,o),_(i,n,o),_(i,l,o),_(i,r,o)},p:j,d(i){i&&(g(t),g(s),g(n),g(l),g(r))}}}function Ae(e){let t,s,n;function l(i){e[1](i)}let r={maxWidth:1200,maxHeight:800,$$slots:{default:[Ne]},$$scope:{ctx:e}};return e[0]!==void 0&&(r.showModal=e[0]),t=new ue({props:r}),z.push(()=>se(t,"showModal",l)),{c(){q(t.$$.fragment)},m(i,o){T(t,i,o),n=!0},p(i,[o]){const a={};o&4&&(a.$$scope={dirty:o,ctx:i}),!s&&o&1&&(s=!0,a.showModal=i[0],te(()=>s=!1)),t.$set(a)},i(i){n||(H(t.$$.fragment,i),n=!0)},o(i){I(t.$$.fragment,i),n=!1},d(i){N(t,i)}}}function Ue(e,t,s){let{showModal:n}=t;function l(r){n=r,s(0,n)}return e.$$set=r=>{"showModal"in r&&s(0,n=r.showModal)},[n,l]}class We extends G{constructor(t){super(),F(this,t,Ue,Ae,B,{showModal:0})}}function Re(e){let t,s,n,l,r,i,o,a,d,h,c,w,x,$;return{c(){t=m("sp-heading"),s=W(e[1]),n=v(),l=m("sp-body"),r=W(e[2]),i=v(),o=m("footer"),a=m("sp-button"),a.textContent="No",d=v(),h=m("sp-button"),c=W("Yes"),k(t,"size","s"),k(a,"variant","primary"),k(a,"autofocus",""),k(h,"variant",w=e[3]?"warning":"cta"),k(h,"action","confirm"),b(o,"class","flex flex-gap flex-end")},m(f,y){_(f,t,y),p(t,s),_(f,n,y),_(f,l,y),p(l,r),_(f,i,y),_(f,o,y),p(o,a),p(o,d),p(o,h),p(h,c),a.focus(),x||($=D(a,"click",e[5]),x=!0)},p(f,y){y&2&&le(s,f[1]),y&4&&le(r,f[2]),y&8&&w!==(w=f[3]?"warning":"cta")&&k(h,"variant",w)},d(f){f&&(g(t),g(n),g(l),g(i),g(o)),x=!1,$()}}}function je(e){let t,s,n;function l(i){e[6](i)}let r={$$slots:{default:[Re]},$$scope:{ctx:e}};return e[0]!==void 0&&(r.showModal=e[0]),t=new ue({props:r}),z.push(()=>se(t,"showModal",l)),{c(){q(t.$$.fragment)},m(i,o){T(t,i,o),n=!0},p(i,[o]){const a={};o&143&&(a.$$scope={dirty:o,ctx:i}),!s&&o&1&&(s=!0,a.showModal=i[0],te(()=>s=!1)),t.$set(a)},i(i){n||(H(t.$$.fragment,i),n=!0)},o(i){I(t.$$.fragment,i),n=!1},d(i){N(t,i)}}}function De(e,t,s){let n=!1,l="Are you sure?",r="This action cannot be undone.",i=!1;function o({heading:h,body:c,destructive:w=!1}){s(1,l=h),s(2,r=c),s(3,i=w),s(0,n=!0)}const a=()=>s(0,n=!1);function d(h){n=h,s(0,n)}return[n,l,r,i,o,a,d]}class qe extends G{constructor(t){super(),F(this,t,De,je,B,{show:4})}get show(){return this.$$.ctx[4]}}function Be(e){let t,s,n,l,r,i,o,a,d,h,c,w,x,$,f,y,M,K,U,V,ne,pe={};f=new qe({props:pe}),e[4](f);function he(u){e[5](u)}let ie={};return e[1]!==void 0&&(ie.showModal=e[1]),M=new We({props:ie}),z.push(()=>se(M,"showModal",he)),{c(){t=m("uxp-panel"),s=m("button"),s.textContent="Cohnfirm?",n=v(),l=m("sp-divider"),r=v(),i=m("div"),o=m("button"),o.textContent="Cheatsheet",a=v(),d=m("button"),d.textContent="Help",h=v(),c=m("span"),c.innerHTML="",w=v(),x=m("span"),x.textContent=`🌈 ${Pe}`,$=v(),q(f.$$.fragment),y=v(),q(M.$$.fragment),b(o,"class","cheatsheet"),b(d,"class","help"),b(c,"data-grow",""),b(x,"class","version low-opacity"),b(i,"id","info"),b(i,"class","flex"),k(t,"panelid","magicMarkup")},m(u,C){_(u,t,C),p(t,s),p(t,n),p(t,l),p(t,r),p(t,i),p(i,o),p(i,a),p(i,d),p(i,h),p(i,c),p(i,w),p(i,x),_(u,$,C),T(f,u,C),_(u,y,C),T(M,u,C),U=!0,V||(ne=[D(s,"click",e[2]),D(o,"click",e[3])],V=!0)},p(u,[C]){const me={};f.$set(me);const oe={};!K&&C&2&&(K=!0,oe.showModal=u[1],te(()=>K=!1)),M.$set(oe)},i(u){U||(H(f.$$.fragment,u),H(M.$$.fragment,u),U=!0)},o(u){I(f.$$.fragment,u),I(M.$$.fragment,u),U=!1},d(u){u&&(g(t),g($),g(y)),e[4](null),N(f,u),N(M,u),V=!1,A(ne)}}}function Fe(e,t,s){require("indesign"),require("uxp");let n,l=d=>{n.show({heading:"Are you sure?",body:"This action cannot be undone.",destructive:!0})},r=!1;const i=d=>s(1,r=!0);function o(d){z[d?"unshift":"push"](()=>{n=d,s(0,n)})}function a(d){r=d,s(1,r)}return[n,r,l,i,o,a]}class Ge extends G{constructor(t){super(),F(this,t,Fe,Be,B,{})}}new Ge({target:ye("#plugin")});
