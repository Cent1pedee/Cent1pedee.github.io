if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const b=e=>r(e,c),d={module:{uri:c},exports:s,require:b};i[c]=Promise.all(a.map((e=>d[e]||b(e)))).then((e=>(n(...e),s)))}}define(["./workbox-0f6f39c6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/index.css",revision:"bd37fa9a7b5005ea44f4612963bfb448"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"43e984311c3d87bf71edaa802b32c664"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/friendvue.js",revision:"626bc58a7ff02342544ad4c0fe10b9b9"},{url:"js/main.js",revision:"1e90f82a47a07672cb1fa32ff97dce69"},{url:"js/personalized/debugger.js",revision:"f302a6ac09710799a82a8594e8c89d99"},{url:"js/personalized/drc.js",revision:"0442395ec79723d3225b2735c7269b03"},{url:"js/personalized/f12.js",revision:"003102849a76338db4b3b9011c79227b"},{url:"js/personalized/imgloaded.js",revision:"4e1348c6a79bdf12ec7274e3d5b355e4"},{url:"js/personalized/welcome.js",revision:"d70850b9824a2c916205461fc696b901"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"b1bd12b2235b01f2c94a38b3156c6380"},{url:"anzhiyu/random.js",revision:"454732b316d444e97a32a8360ddde19c"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/bg1_80kbver.jpg",revision:"46a1da0f6f875183e735af91a5e006ca"},{url:"img/bg1.jpg",revision:"804b4902c17cbb8c911dcb636737d66d"},{url:"img/bg2_80kbver.jpg",revision:"dc0b3366a2253ab1984ed98b97e1e8b2"},{url:"img/bg2.jpg",revision:"37d9504dcba8722dca555e1b5644fddc"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/nav/air-conditioner.png",revision:"cac6ecc7545a9cbcbb5109a33c1eaefc"},{url:"img/nav/alist.png",revision:"8899941f0de57c50589dd4495ebf643f"},{url:"img/nav/cmrgpt.png",revision:"a0883d9db66c7112c72670353a2294db"},{url:"img/nav/homepage.png",revision:"1e5d66d2d23031e27b41a7eba14f07d5"},{url:"img/nav/mdgpt.png",revision:"3fe6aaf9643f7af7d8b9ff37fcf97a1b"},{url:"img/nav/nav.png",revision:"b282b8d0f51f70b22cafa95a5fc72b1e"},{url:"img/nav/navpage.png",revision:"bce2110634d66ffdbf57069bcf1fa396"},{url:"img/nav/qexo.png",revision:"fa5c1596c0bad494202e7cb2e3dcaa0d"},{url:"img/nav/wordpress.png",revision:"9597e42b9b6bb94c30aa89b637167d26"},{url:"img/siteicon/128.png",revision:"52f6ca5e2db36c461e5bd3ade8023c89"},{url:"img/siteicon/144.png",revision:"aeabc200dffa335685bb3cb91e5cb943"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/48.png",revision:"9923064421aacd01858a17510d474515"},{url:"img/siteicon/64.png",revision:"44f3062c761581b5eff62800321b6e55"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"manifest.json",revision:"6833c7c38f574ecd97b2e416ff023a6e"},{url:"/",revision:"index-20241025121945827"},{url:"music/",revision:"music-20241025121945827"},{url:"about/",revision:"about-20241025121945827"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));