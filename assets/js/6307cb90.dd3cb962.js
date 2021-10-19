"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[1521],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},61188:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a={title:"Das 8x2 LCD-Display",sidebar_label:"LCD-Display",custom_edit_url:null},l=void 0,u={unversionedId:"zumo32u4/display",id:"zumo32u4/display",isDocsHomePage:!1,title:"Das 8x2 LCD-Display",description:"Pololu Zumo 32u4 Library: Display",source:"@site/docs/zumo32u4/display.md",sourceDirName:"zumo32u4",slug:"/zumo32u4/display",permalink:"/docs/zumo32u4/display",editUrl:null,tags:[],version:"current",lastUpdatedAt:1630426919,formattedLastUpdatedAt:"8/31/2021",frontMatter:{title:"Das 8x2 LCD-Display",sidebar_label:"LCD-Display",custom_edit_url:null},sidebar:"sideBarZumo",previous:{title:"Motoren",permalink:"/docs/zumo32u4/motors"},next:{title:"Liniensensoren",permalink:"/docs/zumo32u4/lineSensor"}},d=[{value:"<code>void clear()</code>",id:"void-clear",children:[]},{value:"<code>void print()</code>",id:"void-print",children:[]},{value:"<code>void gotoXY(int x, int y)</code>",id:"void-gotoxyint-x-int-y",children:[]},{value:"Beispiel",id:"beispiel",children:[]}],s={toc:d};function c(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Pololu Zumo 32u4 Library: ",(0,o.kt)("a",{parentName:"em",href:"https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_l_c_d.html"},"Display"))),(0,o.kt)("h2",{id:"void-clear"},(0,o.kt)("inlineCode",{parentName:"h2"},"void clear()")),(0,o.kt)("p",null,"L\xf6scht den Displayinhalt und setzten den Cursor auf die erste Stelle in der ersten Zeile (0,0)."),(0,o.kt)("h2",{id:"void-print"},(0,o.kt)("inlineCode",{parentName:"h2"},"void print()")),(0,o.kt)("p",null,"Kann wie der Arduinobefehl ",(0,o.kt)("inlineCode",{parentName:"p"},"Serial.print()"),"verwendet werden. Kann Strings oder auch auch Integerwerte ausgeben.\nDer Befehl ",(0,o.kt)("inlineCode",{parentName:"p"},"println()")," steht f\xfcr das Display nicht zur Verf\xfcgung."),(0,o.kt)("h2",{id:"void-gotoxyint-x-int-y"},(0,o.kt)("inlineCode",{parentName:"h2"},"void gotoXY(int x, int y)")),(0,o.kt)("p",null,"Positioniert den Cursor entsprechend den angegeben X,Y-Koordinaten auf dem Display. Die Koordinaten (0,0) entsprechen dem ersten Zeichen in der ersten Zeile. Die Koordinaten (0,1) setzen den Cursor auf das erste Zeihen in der zweiten Zeile.\nBeim anschlie\xdfenden Aufruf von ",(0,o.kt)("inlineCode",{parentName:"p"},"print()")," wird der Inhalt an der aktuellen Cursorposition ausgegeben."),(0,o.kt)("h2",{id:"beispiel"},"Beispiel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-arduino",metastring:"{5,10-11,16-17}","{5,10-11,16-17}":!0},'// Einfaches Beispiel f\xfcr das LCD-Display des Zumo 32u4\n\n#include <Zumo32U4.h>\n\nZumo32U4LCD lcd;         // Objekt f\xfcr das LCD-Display\nint counter = 0;           \n\nvoid setup()\n{\n  lcd.clear();           // l\xf6scht das Display und setzt den Cursor nach oben links (0,0)\n  lcd.print("Zahl");     // gibt den Text "Zahl" aus \n}\n\nvoid loop()\n{\n  lcd.gotoXY(0, 1);      // Setzt den Cursor (X,Y): 1. Stelle, 2. Zeile,\n  lcd.print(counter);    // gibt den Wert der Variablen aus (der alte Text wird \xfcberschrieben)\n  counter++;\n  delay(100);\n}\n')))}c.isMDXComponent=!0}}]);