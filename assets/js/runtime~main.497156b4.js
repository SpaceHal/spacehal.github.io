!function(){"use strict";var e,c,a,t,d,f={},n={};function r(e){var c=n[e];if(void 0!==c)return c.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return f[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=f,e=[],r.O=function(c,a,t,d){if(!a){var f=1/0;for(u=0;u<e.length;u++){a=e[u][0],t=e[u][1],d=e[u][2];for(var n=!0,o=0;o<a.length;o++)(!1&d||f>=d)&&Object.keys(r.O).every((function(e){return r.O[e](a[o])}))?a.splice(o--,1):(n=!1,d<f&&(f=d));if(n){e.splice(u--,1);var b=t();void 0!==b&&(c=b)}}return c}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[a,t,d]},r.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(c,{a:c}),c},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var f={};c=c||[null,a({}),a([]),a(a)];for(var n=2&t&&e;"object"==typeof n&&!~c.indexOf(n);n=a(n))Object.getOwnPropertyNames(n).forEach((function(c){f[c]=function(){return e[c]}}));return f.default=function(){return e},r.d(d,f),d},r.d=function(e,c){for(var a in c)r.o(c,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:c[a]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(c,a){return r.f[a](e,c),c}),[]))},r.u=function(e){return"assets/js/"+({53:"935f2afb",221:"89d379cf",453:"30a24c52",483:"650d5f94",533:"b2b675dd",1002:"559c22c9",1442:"555ae9d5",1449:"af172acd",1477:"b2f554cd",1521:"6307cb90",1633:"031793e1",1637:"5edd59ad",1713:"a7023ddc",1809:"1aecdc9f",2070:"fbaf8b60",2216:"7675fe79",2226:"bcc68f27",2240:"245cf607",2519:"cb39ddcd",2535:"814f3328",3089:"a6aa9e1f",3187:"d02d6820",3205:"a80da1cf",3206:"0eabc122",3289:"701c814e",3415:"c3c46c87",3608:"9e4087bc",3707:"3570154c",3751:"3720c009",3817:"c9c0e211",3933:"25351227",4013:"01a85c17",4035:"8e9f0a8a",4061:"2868cdab",4121:"55960ee5",4148:"8f2f1d81",4195:"c4f5d8e4",4259:"55e4af40",4268:"03164b94",4512:"97c918c6",4559:"c81ed5ac",4694:"bdd709f1",4722:"7127fcc2",4798:"bad8a7d2",5225:"1dd05913",5253:"b33e8c12",5302:"bfe358c2",5440:"778b291a",5579:"d943a4ea",5616:"0bb5f1c7",5647:"d1cff842",5686:"14cc40a6",5760:"980cae5b",6103:"ccc49370",6176:"d610846f",6535:"d0920450",6887:"11a82ccf",6921:"768ea13a",7170:"d6177396",7286:"1a3ae04d",7378:"b83b6389",7487:"479cbfe2",7907:"39c015ea",7918:"17896441",8523:"32d7a02f",8610:"6875c492",8690:"4893d5db",9514:"1be78505",9700:"e16015ca",9782:"7a7a77d2",9806:"4414b203"}[e]||e)+"."+{53:"6bd1033e",221:"0c94125f",453:"06b99e96",483:"0cbc22e1",533:"643e162a",1002:"f82a7487",1442:"6128c6da",1449:"d6c03499",1477:"529a7e80",1521:"dd3cb962",1633:"831c07aa",1637:"c254bfb1",1713:"5b863f0c",1742:"209828a7",1809:"cfd20d24",2070:"b822df00",2216:"7f9e9cd4",2226:"9cd03b8a",2240:"3db502a9",2519:"160804f7",2535:"77a970cc",3089:"d846181a",3187:"67e5addd",3205:"37e5f097",3206:"48a79449",3289:"1eadf199",3415:"b495f199",3516:"cea20b6d",3608:"e080efe5",3707:"7ac16073",3751:"aad40bc2",3817:"15113edc",3933:"ee528f92",4013:"8bbb3588",4035:"38ae4afe",4061:"ad1e7df7",4121:"d946cd40",4148:"b69067b2",4195:"def37449",4259:"78ee4ed2",4268:"d5cab89b",4512:"d4c77023",4559:"eef9ee4c",4608:"312b7446",4694:"061fa72a",4722:"7602fa0c",4798:"ec315f9f",5225:"b60af793",5253:"7c2fe203",5256:"27831be5",5302:"00ff0529",5440:"1fffa556",5579:"3cd10094",5616:"ff2d65bb",5647:"4eae6cf4",5686:"991546c7",5760:"65c91abc",6103:"d6e7877f",6159:"0978d024",6176:"d6d8df8d",6535:"2b61395b",6887:"4feca7ef",6921:"2c460f08",6945:"dfc27298",7170:"b6e4ea0f",7182:"a1535178",7286:"8c0a3b29",7378:"ee5d1ee8",7487:"9db6c04f",7907:"d8d197c3",7918:"92c102e1",8017:"07715548",8523:"89af11e4",8610:"03fcfae2",8690:"2761f83a",9514:"ae8e7440",9700:"dfd85e48",9782:"dc1c6120",9806:"fdfd2edb"}[e]+".js"},r.miniCssF=function(e){return"assets/css/styles.54fefa50.css"},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},t={},d="space-hal-2:",r.l=function(e,c,a,f){if(t[e])t[e].push(c);else{var n,o;if(void 0!==a)for(var b=document.getElementsByTagName("script"),u=0;u<b.length;u++){var i=b[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==d+a){n=i;break}}n||(o=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,r.nc&&n.setAttribute("nonce",r.nc),n.setAttribute("data-webpack",d+a),n.src=e),t[e]=[c];var l=function(c,a){n.onerror=n.onload=null,clearTimeout(s);var d=t[e];if(delete t[e],n.parentNode&&n.parentNode.removeChild(n),d&&d.forEach((function(e){return e(a)})),c)return c(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),o&&document.head.appendChild(n)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r.p="/",r.gca=function(e){return e={17896441:"7918",25351227:"3933","935f2afb":"53","89d379cf":"221","30a24c52":"453","650d5f94":"483",b2b675dd:"533","559c22c9":"1002","555ae9d5":"1442",af172acd:"1449",b2f554cd:"1477","6307cb90":"1521","031793e1":"1633","5edd59ad":"1637",a7023ddc:"1713","1aecdc9f":"1809",fbaf8b60:"2070","7675fe79":"2216",bcc68f27:"2226","245cf607":"2240",cb39ddcd:"2519","814f3328":"2535",a6aa9e1f:"3089",d02d6820:"3187",a80da1cf:"3205","0eabc122":"3206","701c814e":"3289",c3c46c87:"3415","9e4087bc":"3608","3570154c":"3707","3720c009":"3751",c9c0e211:"3817","01a85c17":"4013","8e9f0a8a":"4035","2868cdab":"4061","55960ee5":"4121","8f2f1d81":"4148",c4f5d8e4:"4195","55e4af40":"4259","03164b94":"4268","97c918c6":"4512",c81ed5ac:"4559",bdd709f1:"4694","7127fcc2":"4722",bad8a7d2:"4798","1dd05913":"5225",b33e8c12:"5253",bfe358c2:"5302","778b291a":"5440",d943a4ea:"5579","0bb5f1c7":"5616",d1cff842:"5647","14cc40a6":"5686","980cae5b":"5760",ccc49370:"6103",d610846f:"6176",d0920450:"6535","11a82ccf":"6887","768ea13a":"6921",d6177396:"7170","1a3ae04d":"7286",b83b6389:"7378","479cbfe2":"7487","39c015ea":"7907","32d7a02f":"8523","6875c492":"8610","4893d5db":"8690","1be78505":"9514",e16015ca:"9700","7a7a77d2":"9782","4414b203":"9806"}[e]||e,r.p+r.u(e)},function(){var e={1303:0,532:0};r.f.j=function(c,a){var t=r.o(e,c)?e[c]:void 0;if(0!==t)if(t)a.push(t[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var d=new Promise((function(a,d){t=e[c]=[a,d]}));a.push(t[2]=d);var f=r.p+r.u(c),n=new Error;r.l(f,(function(a){if(r.o(e,c)&&(0!==(t=e[c])&&(e[c]=void 0),t)){var d=a&&("load"===a.type?"missing":a.type),f=a&&a.target&&a.target.src;n.message="Loading chunk "+c+" failed.\n("+d+": "+f+")",n.name="ChunkLoadError",n.type=d,n.request=f,t[1](n)}}),"chunk-"+c,c)}},r.O.j=function(c){return 0===e[c]};var c=function(c,a){var t,d,f=a[0],n=a[1],o=a[2],b=0;for(t in n)r.o(n,t)&&(r.m[t]=n[t]);if(o)var u=o(r);for(c&&c(a);b<f.length;b++)d=f[b],r.o(e,d)&&e[d]&&e[d][0](),e[f[b]]=0;return r.O(u)},a=self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[];a.forEach(c.bind(null,0)),a.push=c.bind(null,a.push.bind(a))}()}();