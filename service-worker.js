if(!self.define){let i,e={};const n=(n,a)=>(n=new URL(n+".js",a).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(a,o)=>{const c=i||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let b={};const r=i=>n(i,c),t={module:{uri:c},exports:b,require:r};e[c]=Promise.all(a.map((i=>t[i]||r(i)))).then((i=>(o(...i),b)))}}define(["./workbox-0f6f39c6"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"css/imgloaded.css",revision:"2126a343357bef4413aab63c50cbe35f"},{url:"css/index.css",revision:"19b00434ae7ff08c2c0d878a860568b7"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"552e43a6cddda9df1e8f68b6f73b6325"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/friendvue.js",revision:"626bc58a7ff02342544ad4c0fe10b9b9"},{url:"js/imgloaded.js",revision:"57fcbf62f94ef182d3fb74abbae6c6d0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"anzhiyu/random.js",revision:"848eb2efe0593506050a4d9f9c89c8dd"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/nav/alist.png",revision:"8899941f0de57c50589dd4495ebf643f"},{url:"img/nav/cmrgpt.png",revision:"a0883d9db66c7112c72670353a2294db"},{url:"img/nav/homepage.png",revision:"1e5d66d2d23031e27b41a7eba14f07d5"},{url:"img/nav/mdgpt.png",revision:"3fe6aaf9643f7af7d8b9ff37fcf97a1b"},{url:"img/nav/nav.png",revision:"b282b8d0f51f70b22cafa95a5fc72b1e"},{url:"img/nav/navpage.png",revision:"bce2110634d66ffdbf57069bcf1fa396"},{url:"img/nav/qexo.png",revision:"fa5c1596c0bad494202e7cb2e3dcaa0d"},{url:"img/nav/wordpress.png",revision:"9597e42b9b6bb94c30aa89b637167d26"},{url:"img/python-cleaning/output_36_1.png",revision:"4fbc3b454bc66c77284b9031f0055e08"},{url:"img/python-cleaning/output_38_1.png",revision:"598274d36d9e402bf8ac2c310b505438"},{url:"img/python-cleaning/output_39_1.png",revision:"ef6e0fe20c324f8f943eb1500f699bc7"},{url:"img/python-cleaning/output_40_1.png",revision:"4cf96294d7a7bd5c160c59b61a65859c"},{url:"img/python-cleaning/output_47_1.png",revision:"2754da6f17a5140163ec03e71e00f6a1"},{url:"img/python-cleaning/output_7_1.png",revision:"4fbc3b454bc66c77284b9031f0055e08"},{url:"img/python-cleaning/output_8_1.png",revision:"394778c30cc2657e32ed416f146a4444"},{url:"img/python-matplotlib/output_10_1.png",revision:"53030c63f8285541ca2563700b10a8b4"},{url:"img/python-matplotlib/output_11_1.png",revision:"972198f2dba70d94fa34b082cd7edb21"},{url:"img/python-matplotlib/output_12_1.png",revision:"78075e26cc6b0e81bf61ac039d77e75d"},{url:"img/python-matplotlib/output_13_1.png",revision:"c7dc374519b77ba1b7d3ffcf4ed2c477"},{url:"img/python-matplotlib/output_14_1.png",revision:"5c881eb7b380e5c2b974f04736c89077"},{url:"img/python-matplotlib/output_15_0.png",revision:"e0f4b8c42b93c856a346bb2f66161368"},{url:"img/python-matplotlib/output_17_1.png",revision:"84c7cf83dbe4b04a104aba29023baff5"},{url:"img/python-matplotlib/output_21_1.png",revision:"a7b2158414b11eb1ad1478d7f64a637c"},{url:"img/python-matplotlib/output_22_1.png",revision:"22941894752991ebf5ffda2c1034a52f"},{url:"img/python-matplotlib/output_23_1.png",revision:"6f2a80b8813aa506e7d3dcb417a47fe9"},{url:"img/python-matplotlib/output_24_1.png",revision:"b7bdb6bb9a7f5f74f7efbc4805103e2d"},{url:"img/python-matplotlib/output_27_1.png",revision:"ca6c407221bc10c3ac37328b1f8cbef6"},{url:"img/python-matplotlib/output_30_1.png",revision:"ce7568273b5aad6003ab222561481c5e"},{url:"img/python-matplotlib/output_31_1.png",revision:"22c1e6473588e8968b4e7f75749262f0"},{url:"img/python-matplotlib/output_32_1.png",revision:"fea4a5a53ff8d22baa594894ffb691ae"},{url:"img/python-matplotlib/output_35_1.png",revision:"16b2d73e816a76fa0d638530867f7d2b"},{url:"img/python-matplotlib/output_39_1.png",revision:"8d673b1189ac81cd2740f46a4301f827"},{url:"img/python-matplotlib/output_42_1.png",revision:"b65ff6a3a31c9bbefee85e63be109d06"},{url:"img/python-matplotlib/output_6_1.png",revision:"bc3e0a82c0e086f378af09c6416b0b03"},{url:"img/python-matplotlib/output_7_1.png",revision:"ef6d6567de92f68554033832b64a7123"},{url:"img/python-matplotlib/output_8_1.png",revision:"dcb081795cc0516eef966919b7931d15"},{url:"img/python-matplotlib/output_9_1.png",revision:"8f21180f606891fa86707609714f0d4c"},{url:"img/siteicon/128.png",revision:"52f6ca5e2db36c461e5bd3ade8023c89"},{url:"img/siteicon/144.png",revision:"aeabc200dffa335685bb3cb91e5cb943"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/48.png",revision:"9923064421aacd01858a17510d474515"},{url:"img/siteicon/64.png",revision:"44f3062c761581b5eff62800321b6e55"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"manifest.json",revision:"6833c7c38f574ecd97b2e416ff023a6e"},{url:"/",revision:"index-20230930165529385"},{url:"music/",revision:"music-20230930165529385"},{url:"about/",revision:"about-20230930165529385"}],{}),i.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new i.CacheFirst,"GET")}));