if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const t=e=>n(e,o),a={module:{uri:o},exports:s,require:t};i[o]=Promise.all(r.map((e=>a[e]||t(e)))).then((e=>(c(...e),s)))}}define(["./workbox-0f6f39c6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/bg2.jpg",revision:"5f0a20effb6478a5512bb46688191c86"},{url:"img/siteicon/128.png",revision:"52f6ca5e2db36c461e5bd3ade8023c89"},{url:"img/siteicon/144.png",revision:"aeabc200dffa335685bb3cb91e5cb943"},{url:"img/siteicon/16.png",revision:"add403d26a98b97e12b1951a4cc33a7c"},{url:"img/siteicon/32.png",revision:"5315195205a7bbf6cf6f09de48ce80c1"},{url:"img/siteicon/48.png",revision:"9923064421aacd01858a17510d474515"},{url:"img/siteicon/64.png",revision:"44f3062c761581b5eff62800321b6e55"},{url:"img/wechat.jpg",revision:"cec630a58d0259d5283a9870317d007f"},{url:"manifest.json",revision:"6833c7c38f574ecd97b2e416ff023a6e"},{url:"/",revision:"index-20230814135408356"},{url:"music/",revision:"music-20230814135408356"},{url:"about/",revision:"about-20230814135408356"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));