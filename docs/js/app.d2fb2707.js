(function(t){function e(e){for(var n,l,a=e[0],s=e[1],i=e[2],u=0,p=[];u<a.length;u++)l=a[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,i||[]),C()}function C(){for(var t,e=0;e<o.length;e++){for(var C=o[e],n=!0,a=1;a<C.length;a++){var s=C[a];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=C[0]))}return t}var n={},r={app:0},o=[];function l(e){if(n[e])return n[e].exports;var C=n[e]={i:e,l:!1,exports:{}};return t[e].call(C.exports,C,C.exports,l),C.l=!0,C.exports}l.m=t,l.c=n,l.d=function(t,e,C){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:C})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var C=Object.create(null);if(l.r(C),Object.defineProperty(C,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(C,n,function(e){return t[e]}.bind(null,n));return C},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var i=0;i<a.length;i++)e(a[i]);var c=s;o.push([0,"chunk-vendors"]),C()})({0:function(t,e,C){t.exports=C("56d7")},"56d7":function(t,e,C){"use strict";C.r(e);C("e260"),C("e6cf"),C("cca6"),C("a79d");var n=C("2b0e"),r=function(){var t=this,e=t.$createElement,C=t._self._c||e;return C("div",{attrs:{id:"app"}},[C("router-view")],1)},o=[],l={name:"App"},a=l,s=(C("5c0b"),C("2877")),i=Object(s["a"])(a,r,o,!1,null,null,null),c=i.exports,u=C("8c4f"),p=function(){var t=this,e=t.$createElement,C=t._self._c||e;return C("main",{staticClass:"row h-100 align-items-center"},[C("div",{staticClass:"wrapper"},[C("div",{staticClass:"col-12"},[C("Logo")],1),C("div",{staticClass:"col-12 text-center"},[C("Profiles")],1),C("div",{staticClass:"col-12 text-center mb-5"},[C("Projects")],1)])])},f=[],d=function(){var t=this,e=t.$createElement,C=t._self._c||e;return C("div",{staticClass:"logo text-center my-5"},[C("svg",{attrs:{width:"133",height:"150",viewBox:"0 0 212 238",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[C("path",{attrs:{d:"M6.96484 46.3369C6.96484 41.5029 7.44824 37.1084 8.41504 33.1533C9.46973 29.1982 11.0518 25.8145 13.1611 23.002C15.2705 20.1016 17.9072 17.8604 21.0713 16.2783C24.2354 14.6963 27.9707 13.9053 32.2773 13.9053C37.375 13.9053 42.4287 14.4766 47.4385 15.6191C52.4482 16.7617 57.458 17.9922 62.4678 19.3105C67.5654 20.6289 72.751 21.8594 78.0244 23.002C83.3857 24.1445 88.9229 24.7158 94.6357 24.7158C98.3271 24.7158 101.491 24.4082 104.128 23.793C106.853 23.0898 109.094 22.2988 110.852 21.4199C112.873 20.4531 114.587 19.3105 115.993 17.9922L119.289 21.9473C110.676 31 103.249 39.6133 97.0088 47.7871C90.7686 55.873 85.4512 63.6074 81.0566 70.9902C76.6621 78.2852 73.1025 85.2725 70.3779 91.9521C67.7412 98.6318 65.6758 105.048 64.1816 111.2C62.6875 117.265 61.6768 123.065 61.1494 128.603C60.6221 134.14 60.3584 139.457 60.3584 144.555C60.3584 152.377 60.71 159.188 61.4131 164.989C62.2041 170.79 63.0391 175.888 63.918 180.282C64.8848 184.589 65.7197 188.412 66.4229 191.752C67.2139 195.004 67.6094 198.08 67.6094 200.98C67.6094 204.672 66.6426 207.265 64.709 208.759C62.8633 210.253 60.5342 211 57.7217 211C54.6455 211 51.877 210.604 49.416 209.813C47.043 208.935 44.9775 207.353 43.2197 205.067C41.5498 202.782 40.2314 199.618 39.2646 195.575C38.3857 191.532 37.9463 186.303 37.9463 179.887C37.9463 166.791 39.2207 153.783 41.7695 140.863C44.3184 127.943 48.0098 115.463 52.8438 103.422C57.6777 91.3809 63.5664 79.999 70.5098 69.2764C77.4531 58.5537 85.3193 48.8418 94.1084 40.1406C92.8779 40.4043 91.4717 40.624 89.8896 40.7998C88.3955 40.8877 86.8574 40.9316 85.2754 40.9316C81.584 40.9316 77.4531 40.668 72.8828 40.1406C68.3125 39.5254 63.6543 38.8662 58.9082 38.1631C54.1621 37.3721 49.416 36.7129 44.6699 36.1855C40.0117 35.5703 35.7051 35.2627 31.75 35.2627C26.4766 35.2627 22.2578 36.0977 19.0938 37.7676C16.0176 39.3496 14.2158 42.2061 13.6885 46.3369H6.96484Z",fill:"#FF005C","fill-opacity":"0.76"}}),C("path",{attrs:{d:"M148.102 127.763C143.355 127.763 138.653 128.993 133.995 131.454C129.337 133.827 125.206 137.123 121.603 141.342C117.999 145.561 115.055 150.57 112.77 156.371C110.572 162.172 109.474 168.456 109.474 175.224C109.474 183.046 110.44 190.297 112.374 196.977C114.308 203.568 116.944 209.281 120.284 214.115C123.624 218.949 127.535 222.729 132.018 225.453C136.5 228.178 141.334 229.54 146.52 229.54C151.002 229.54 155.396 228.354 159.703 225.98C164.01 223.52 167.789 220.048 171.041 215.565C174.381 211.083 177.062 205.678 179.083 199.35C181.104 193.021 182.115 185.902 182.115 177.992C182.115 170.346 181.324 163.446 179.742 157.294C178.16 151.054 175.919 145.78 173.019 141.474C170.118 137.079 166.559 133.695 162.34 131.322C158.121 128.949 153.375 127.763 148.102 127.763ZM171.041 44.3105C167.438 45.8926 163.526 47.958 159.308 50.5068C155.089 52.9678 150.782 56.0879 146.388 59.8672C142.081 63.6465 137.818 68.1289 133.6 73.3145C129.381 78.4121 125.514 84.3887 121.998 91.2441C118.482 98.0117 115.406 105.746 112.77 114.447C110.133 123.061 108.243 132.729 107.101 143.451C107.979 141.957 109.562 139.892 111.847 137.255C114.22 134.618 117.208 132.025 120.812 129.477C124.415 126.84 128.634 124.599 133.468 122.753C138.302 120.819 143.707 119.853 149.684 119.853C157.945 119.853 165.416 121.259 172.096 124.071C178.775 126.884 184.4 130.707 188.971 135.541C193.629 140.287 197.188 145.824 199.649 152.152C202.198 158.48 203.473 165.204 203.473 172.323C203.473 182.343 201.891 191.308 198.727 199.218C195.65 207.128 191.476 213.852 186.202 219.389C180.929 224.838 174.776 229.013 167.745 231.913C160.802 234.813 153.463 236.264 145.729 236.264C137.027 236.264 128.941 234.33 121.471 230.463C114.088 226.596 107.716 221.103 102.354 213.983C96.9932 206.864 92.7744 198.295 89.6982 188.275C86.71 178.256 85.2158 167.094 85.2158 154.789C85.2158 144.594 86.3584 134.794 88.6436 125.39C91.0166 115.985 94.2246 107.196 98.2676 99.0225C102.398 90.7607 107.188 83.2021 112.638 76.3467C118.087 69.4912 123.888 63.4707 130.04 58.2852C136.28 53.0996 142.696 48.8809 149.288 45.6289C155.968 42.377 162.516 40.2236 168.932 39.1689L171.041 44.3105Z",fill:"#FF005C","fill-opacity":"0.76"}}),C("path",{attrs:{d:"M189.976 110.984C189.976 111.325 189.869 111.624 189.656 111.88C189.443 112.136 189.187 112.349 188.888 112.52C188.589 112.648 188.269 112.755 187.928 112.84C187.629 112.925 187.373 112.968 187.16 112.968C186.264 112.968 185.496 112.499 184.856 111.56C184.216 110.579 183.683 109.512 183.256 108.36C182.829 107.165 182.509 106.056 182.296 105.032C182.125 104.008 182.04 103.453 182.04 103.368C181.784 103.837 181.507 104.627 181.208 105.736C180.952 106.845 180.632 107.976 180.248 109.128C179.864 110.237 179.373 111.24 178.776 112.136C178.221 112.989 177.496 113.416 176.6 113.416C176.173 113.416 175.768 113.16 175.384 112.648C175 112.136 174.637 111.475 174.296 110.664C173.955 109.853 173.613 108.936 173.272 107.912C172.973 106.888 172.653 105.885 172.312 104.904C172.013 103.923 171.715 103.005 171.416 102.152C171.117 101.256 170.819 100.552 170.52 100.04C170.264 100.68 170.029 101.555 169.816 102.664C169.645 103.773 169.496 104.947 169.368 106.184C169.24 107.379 169.133 108.573 169.048 109.768C168.963 110.963 168.92 112.008 168.92 112.904C168.92 113.501 168.749 113.928 168.408 114.184C168.109 114.44 167.789 114.568 167.448 114.568C166.979 114.568 166.509 114.269 166.04 113.672C165.571 113.032 165.101 112.221 164.632 111.24C164.163 110.259 163.715 109.149 163.288 107.912C162.904 106.675 162.541 105.437 162.2 104.2C161.901 102.963 161.667 101.789 161.496 100.68C161.325 99.528 161.24 98.568 161.24 97.8C161.24 97.2453 161.261 96.7333 161.304 96.264C161.347 95.88 161.368 95.5173 161.368 95.176C161.411 94.8347 161.432 94.6427 161.432 94.6C161.432 94.472 161.389 94.3867 161.304 94.344C161.261 94.3013 161.24 94.1947 161.24 94.024C161.24 93.896 161.389 93.704 161.688 93.448C162.029 93.1493 162.371 93 162.712 93C163.309 93 163.693 93.128 163.864 93.384C164.077 93.64 164.184 93.9387 164.184 94.28C164.184 94.408 164.163 94.6 164.12 94.856C164.12 95.112 164.12 95.688 164.12 96.584C164.12 97.1813 164.227 98.0773 164.44 99.272C164.653 100.467 164.909 101.683 165.208 102.92C165.507 104.157 165.805 105.309 166.104 106.376C166.445 107.4 166.723 108.04 166.936 108.296C167.021 108.125 167.064 107.933 167.064 107.72C167.107 107.464 167.149 107.272 167.192 107.144L167.896 101.896C168.067 100.573 168.408 99.1867 168.92 97.736C169.475 96.2427 170.051 95.0907 170.648 94.28C170.861 93.9387 171.096 93.768 171.352 93.768C171.608 93.768 171.843 93.96 172.056 94.344C172.781 95.5387 173.315 96.7333 173.656 97.928C174.04 99.08 174.36 100.232 174.616 101.384C174.915 102.493 175.235 103.624 175.576 104.776C175.96 105.885 176.536 107.016 177.304 108.168C177.645 107.613 178.072 106.717 178.584 105.48C179.096 104.2 179.608 102.92 180.12 101.64C180.675 100.36 181.187 99.2507 181.656 98.312C182.125 97.3307 182.488 96.84 182.744 96.84C182.872 96.84 183.085 96.8613 183.384 96.904C183.683 96.9467 183.896 96.968 184.024 96.968C184.408 96.968 184.728 97.416 184.984 98.312C185.24 99.1653 185.453 100.189 185.624 101.384C185.837 102.536 186.029 103.709 186.2 104.904C186.413 106.056 186.648 106.931 186.904 107.528C187.075 107.955 187.331 108.36 187.672 108.744C188.013 109.128 188.355 109.491 188.696 109.832C189.123 110.216 189.549 110.6 189.976 110.984ZM199.283 108.552C199.283 109.277 199.027 109.917 198.515 110.472C198.045 110.984 197.427 111.432 196.659 111.816C195.933 112.157 195.123 112.435 194.227 112.648C193.331 112.861 192.477 113.032 191.667 113.16C190.856 113.245 190.131 113.309 189.491 113.352C188.893 113.352 188.509 113.352 188.339 113.352C187.4 113.352 186.675 113.203 186.163 112.904C185.651 112.605 185.395 112.072 185.395 111.304C185.395 111.048 185.416 110.835 185.459 110.664C185.501 110.451 185.672 110.344 185.971 110.344C186.099 110.344 186.312 110.387 186.611 110.472C186.909 110.515 187.144 110.536 187.315 110.536C187.485 110.536 188.019 110.515 188.915 110.472C189.853 110.387 190.835 110.259 191.859 110.088C192.925 109.917 193.864 109.683 194.675 109.384C195.528 109.043 195.955 108.616 195.955 108.104C195.955 108.019 195.507 107.763 194.611 107.336C193.757 106.867 192.456 106.099 190.707 105.032C189.341 104.179 188.381 103.325 187.827 102.472C187.272 101.576 186.995 100.381 186.995 98.888C186.995 97.9493 187.187 97.1813 187.571 96.584C187.997 95.9867 188.552 95.5173 189.235 95.176C189.96 94.8347 190.771 94.6 191.667 94.472C192.605 94.3013 193.587 94.216 194.611 94.216C194.696 94.216 194.952 94.2587 195.379 94.344C195.848 94.4293 196.339 94.5787 196.851 94.792C197.363 94.9627 197.811 95.1973 198.195 95.496C198.621 95.752 198.835 96.0507 198.835 96.392C198.835 96.4773 198.749 96.6053 198.579 96.776C198.451 96.9467 198.216 97.2667 197.875 97.736C197.747 97.6933 197.512 97.6293 197.171 97.544C196.872 97.4587 196.509 97.3733 196.083 97.288C195.699 97.16 195.293 97.0747 194.867 97.032C194.44 96.9467 194.099 96.904 193.843 96.904C192.733 96.904 191.837 97.1173 191.155 97.544C190.472 97.928 190.131 98.696 190.131 99.848C190.131 100.403 190.344 100.915 190.771 101.384C191.24 101.853 191.816 102.301 192.499 102.728C193.181 103.112 193.907 103.517 194.675 103.944C195.485 104.328 196.232 104.755 196.915 105.224C197.597 105.693 198.152 106.205 198.579 106.76C199.048 107.272 199.283 107.869 199.283 108.552Z",fill:"#545454"}})])])},m=[],h={name:"Logo"},b=h,v=Object(s["a"])(b,d,m,!1,null,null,null),x=v.exports,w=function(){var t=this,e=t.$createElement,C=t._self._c||e;return C("div",{staticClass:"projects m-auto"},t._l(t.projects,(function(e){return C("span",{key:e.text},[C("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.text)+" ")]),e.bullet?C("span",{class:{"hide-on-mobile":e.hideOnMobile}},[t._v("•")]):t._e()])})),0)},_=[],g={name:"Projects",data:function(){return{projects:[{text:"WordMap",url:"/word-map",bullet:!0},{text:"Safe Plants for Cats",url:"/safe-plants-for-cats",bullet:!0,hideOnMobile:!0},{text:"Gifstori",url:"/gifstori",bullet:!0},{text:"PhotoViewer",url:"/photos"}]}}},y=g,j=Object(s["a"])(y,w,_,!1,null,null,null),O=j.exports,P=function(){var t=this,e=t.$createElement,C=t._self._c||e;return C("div",{staticClass:"profiles mx-auto mb-4"},t._l(t.profiles,(function(e){return C("span",{key:e.text},[C("a",{staticClass:"mx-3",attrs:{href:e.url}},[C("span",{class:"fa fa-"+e.icon}),C("span",{staticClass:"sr-only"},[t._v(t._s(e.text))])])])})),0)},M=[],S={name:"Profiles",data:function(){return{profiles:[{text:"Twitter",url:"//twitter.com/_76ms",icon:"twitter"},{text:"GitHub",url:"//github.com/76ms",icon:"github"},{text:"CodePen",url:"//codepen.io/76ms/",icon:"codepen"},{text:"SoundCloud",url:"//soundcloud.com/76ms",icon:"soundcloud"}]}}},L=S,$=Object(s["a"])(L,P,M,!1,null,null,null),k=$.exports,E={name:"Home",components:{Logo:x,Projects:O,Profiles:k}},Z=E,F=Object(s["a"])(Z,p,f,!1,null,null,null),H=F.exports;n["a"].use(u["a"]);var T=[{path:"*",name:"Home",component:H}],G=new u["a"]({routes:T}),J=G;n["a"].config.productionTip=!1,new n["a"]({router:J,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,C){"use strict";C("9c0c")},"9c0c":function(t,e,C){}});
//# sourceMappingURL=app.d2fb2707.js.map