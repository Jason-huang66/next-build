(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4186)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,i=r(2648).Z,a=r(1598).Z,o=r(7273).Z,s=a(r(7294)),l=i(r(3121)),c=r(2675),d=r(139),u=r(8730);r(7238);var f=i(r(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if(null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,o=!1;r.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>o,persist(){},preventDefault(){a=!0,t.preventDefault()},stopPropagation(){o=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let _=s.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:i,widthInt:a,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:h,placeholder:g,loading:m,srcString:_,config:x,unoptimized:b,loader:v,onLoadRef:j,onLoadingCompleteRef:w,onLoad:y,onError:E}=e,N=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return m=f?"lazy":m,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},N,r,{width:a,height:i,decoding:"async","data-nimg":h?"fill":"1",className:c,loading:m,style:n({},d,u),ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&p(e,_,j,w,b))},[_,j,w,E,b,t]),onLoad(e){let t=e.currentTarget;p(t,_,j,w,b)},onError(e){let{style:t}=e.currentTarget;"transparent"===t.color&&(t.color=""),"blur"===g&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),E&&E(e)}})))}),x=s.forwardRef((e,t)=>{let r,i;var a,{src:p,sizes:x,unoptimized:b=!1,priority:v=!1,loading:j,className:w,quality:y,width:E,height:N,fill:C,style:S,onLoad:k,onLoadingComplete:z,placeholder:P="empty",blurDataURL:R,layout:O,objectFit:I,objectPosition:L,lazyBoundary:A,lazyRoot:D}=e,H=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let M=s.useContext(u.ImageConfigContext),T=s.useMemo(()=>{let e=h||M||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[M]),G=H,W=G.loader||f.default;if(delete G.loader,"__next_img_default"in W){if("custom"===T.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let B=W;W=e=>{let{config:t}=e,r=o(e,["config"]);return B(r)}}if(O){"fill"===O&&(C=!0);let F={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];F&&(S=n({},S,F));let q={responsive:"100vw",fill:"100vw"}[O];q&&!x&&(x=q)}let V="",U=m(E),Z=m(N);if("object"==typeof(a=p)&&(g(a)||void 0!==a.src)){let J=g(p)?p.default:p;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(r=J.blurWidth,i=J.blurHeight,R=R||J.blurDataURL,V=J.src,!C){if(U||Z){if(U&&!Z){let Q=U/J.width;Z=Math.round(J.height*Q)}else if(!U&&Z){let X=Z/J.height;U=Math.round(J.width*X)}}else U=J.width,Z=J.height}}let K=!v&&("lazy"===j||void 0===j);((p="string"==typeof p?p:V).startsWith("data:")||p.startsWith("blob:"))&&(b=!0,K=!1),T.unoptimized&&(b=!0);let Y=m(y),$=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:L}:{},{color:"transparent"},S),ee="blur"===P&&R?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:Z,blurWidth:r,blurHeight:i,blurDataURL:R}),'")')}:{},et=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:a,sizes:o,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let a=/(^|\s)(1?\d?\d)vw/g,o=[];for(let s;s=a.exec(r);s)o.push(parseInt(s[2]));if(o.length){let l=.01*Math.min(...o);return{widths:i.filter(e=>e>=n[0]*l),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:c,kind:"x"}}(t,i,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,n)=>"".concat(s({config:t,src:r,quality:a,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:s({config:t,src:r,quality:a,width:l[d]})}}({config:T,src:p,unoptimized:b,width:U,quality:Y,sizes:x,loader:W}),er=p,en={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:G.crossOrigin},ei=s.useRef(k);s.useEffect(()=>{ei.current=k},[k]);let ea=s.useRef(z);s.useEffect(()=>{ea.current=z},[z]);let eo=n({isLazy:K,imgAttributes:et,heightInt:Z,widthInt:U,qualityInt:Y,className:w,imgStyle:$,blurStyle:ee,loading:j,config:T,fill:C,unoptimized:b,placeholder:P,loader:W,srcString:er,onLoadRef:ei,onLoadingCompleteRef:ea},G);return s.default.createElement(s.default.Fragment,null,s.default.createElement(_,Object.assign({},eo,{ref:t})),v?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},en))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:a}=e,o=n||t,s=i||r,l=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},4186:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),i=r(9008),a=r.n(i),o=r(5675),s=r.n(o),l=r(7160),c=r.n(l);function d(){return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:c().main,children:[(0,n.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,n.jsx)("a",{href:"https://nextjs.org",children:"Next.js!!!"})]}),(0,n.jsxs)("p",{className:c().description,children:["Get started by editing"," ",(0,n.jsx)("code",{className:c().code,children:"pages/index.tsx"})]}),(0,n.jsxs)("div",{className:c().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs",className:c().card,children:[(0,n.jsx)("h2",{children:"Documentation →"}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,n.jsx)("h2",{children:"Learn →"}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,n.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:c().card,children:[(0,n.jsx)("h2",{children:"Examples →"}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",className:c().card,children:[(0,n.jsx)("h2",{children:"Deploy →"}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,n.jsx)("footer",{className:c().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:c().logo,children:(0,n.jsx)(s(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);