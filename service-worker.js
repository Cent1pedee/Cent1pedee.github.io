if(!self.define){let i,e={};const c=(c,s)=>(c=new URL(c+".js",s).href,e[c]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=c,i.onload=e,document.head.appendChild(i)}else i=c,importScripts(c),e()})).then((()=>{let i=e[c];if(!i)throw new Error(`Module ${c} didn’t register its module`);return i})));self.define=(s,n)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let b={};const o=i=>c(i,r),f={module:{uri:r},exports:b,require:o};e[r]=Promise.all(s.map((i=>f[i]||o(i)))).then((i=>(n(...i),b)))}}define(["./workbox-c2bc8b5b"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"css/index.css",revision:"bd20cc531a97e9c5214f7afed5da2c4c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"06a039812039ccbe7abd4aef2ae51026"},{url:"js/background.js",revision:"7b370436ecd2d0f43b614d374894ab0d"},{url:"js/main.js",revision:"cdd5970350f40e50e1d9b7dd1557909b"},{url:"js/search/algolia.js",revision:"cdb2dcd4b387fbb5ea25ff877fb946c6"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"abc188c87ccf64f31fa3d0eb47649a4f"},{url:"anzhiyu/random.js",revision:"b46f2f54b33c89522f6b91c28b7f9fea"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/bg2.jpg",revision:"5f0a20effb6478a5512bb46688191c86"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/128.png",revision:"52f6ca5e2db36c461e5bd3ade8023c89"},{url:"img/siteicon/144.png",revision:"aeabc200dffa335685bb3cb91e5cb943"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/48.png",revision:"9923064421aacd01858a17510d474515"},{url:"img/siteicon/64.png",revision:"44f3062c761581b5eff62800321b6e55"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"manifest.json",revision:"6833c7c38f574ecd97b2e416ff023a6e"},{url:"/",revision:"index-20230810123820481"},{url:"music/",revision:"music-20230810123820481"},{url:"about/",revision:"about-20230810123820481"}],{}),i.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new i.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
