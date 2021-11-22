"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[5647],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<s;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9309:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var r=n(3117),a=n(102),s=(n(7294),n(3905)),i=["components"],o={title:"Inkrementalgeber (Radencoder)",sidebar_label:"Radencoder",description:"Verwendung des Radencoders beim Zumo 32u4",custom_edit_url:null,keywords:["Arduino","Unterricht","Schule","Roboter","Robotik","Odometrie","Positionsbestimmung","Encoder","Radencoder","Zumo32u4","Zumo"]},l=void 0,m={unversionedId:"zumo32u4/encode",id:"zumo32u4/encode",isDocsHomePage:!1,title:"Inkrementalgeber (Radencoder)",description:"Verwendung des Radencoders beim Zumo 32u4",source:"@site/docs/zumo32u4/encode.md",sourceDirName:"zumo32u4",slug:"/zumo32u4/encode",permalink:"/docs/zumo32u4/encode",editUrl:null,tags:[],version:"current",lastUpdatedAt:1631966711,formattedLastUpdatedAt:"18.9.2021",frontMatter:{title:"Inkrementalgeber (Radencoder)",sidebar_label:"Radencoder",description:"Verwendung des Radencoders beim Zumo 32u4",custom_edit_url:null,keywords:["Arduino","Unterricht","Schule","Roboter","Robotik","Odometrie","Positionsbestimmung","Encoder","Radencoder","Zumo32u4","Zumo"]},sidebar:"sideBarZumo",previous:{title:"N\xe4herungssensoren",permalink:"/docs/zumo32u4/proxy"},next:{title:"Inertiale Messeinheit",permalink:"/docs/zumo32u4/gyroscope"}},p=[{value:"<code>static int \tgetCountsLeft()</code>",id:"static-int-getcountsleft",children:[{value:"Beispiel",id:"beispiel",children:[],level:3}],level:2},{value:"<code>static int \tgetCountsRight()</code>",id:"static-int-getcountsright",children:[],level:2},{value:"<code>static int \tgetCountsAndResetLeft()</code>",id:"static-int-getcountsandresetleft",children:[],level:2},{value:"<code>static int  getCountsAndResetRight()</code>",id:"static-int--getcountsandresetright",children:[],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Pololu Zumo 32u4 Library: ",(0,s.kt)("a",{parentName:"em",href:"https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_encoders.html"},"Odometrie"))),(0,s.kt)("p",null,"Mit einem ",(0,s.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Inkrementalgeber"},"Inkrementalgeber")," (Rad-Encoder) kann man messen, wie weit sich die einzelnen Motoren zwischen zwei Messungen gedreht haben. Der Zumo 32u4 hat an jedem Motor einen ",(0,s.kt)("a",{parentName:"p",href:"https://www.pololu.com/docs/0J63/all#3.4"},"Quadratur-Encoder"),", welcher mit jeweils einer magnetischen Scheibe an der Motorwelle und einem ",(0,s.kt)("a",{parentName:"p",href:"https://www.leifiphysik.de/elektrizitaetslehre/bewegte-ladungen-feldern/grundwissen/hall-effekt"},"Hall-Effekt"),"-Sensor auf dem Controllerboard des Zumo realisiert ist. Der Quadratur-Encoder hat eine Aufl\xf6sung von 12 Schritten pro Umdrehung."),(0,s.kt)("p",null,"Da die R\xe4der nicht direkt, sondern mit einem Getriebe  mit der Motorwelle verbunden sind (\xdcbersetzung 75.81:1), f\xfchrt das zu einer Aufl\xf6sung von ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"12"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mn",{parentName:"mrow"},"75.81"),(0,s.kt)("mo",{parentName:"mrow"},"\u2248"),(0,s.kt)("mn",{parentName:"mrow"},"909"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"7")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"12\\times 75.81 \\approx 909,7")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.72777em",verticalAlign:"-0.08333em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"7"),(0,s.kt)("span",{parentName:"span",className:"mord"},"5"),(0,s.kt)("span",{parentName:"span",className:"mord"},"."),(0,s.kt)("span",{parentName:"span",className:"mord"},"8"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2248"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8388800000000001em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"9"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"9"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"7")))))," Impulsen pro Radumdrehung (CPR - counts per revolution) oder ca. 0,128 mm zur\xfcckgelegter Strecke pro Impuls."),(0,s.kt)("h2",{id:"static-int-getcountsleft"},(0,s.kt)("inlineCode",{parentName:"h2"},"static int \tgetCountsLeft()")),(0,s.kt)("p",null,"Gibt die vom linken Encoder erkannte Anzahl von Impulses zur\xfcck. Die Z\xe4hlung beginnt mit null. Ein positiver R\xfcckgabewert entspricht einer Vorw\xe4rtsbewegung, ein negativer Wert einer R\xfcckw\xe4rtsbewegung des Roboters. "),(0,s.kt)("p",null,"Die Anazahl der Impulse werden als ",(0,s.kt)("inlineCode",{parentName:"p"},"int"),"-Wert zur\xfcckgegeben. \xdcberschreitet der Wert ",(0,s.kt)("inlineCode",{parentName:"p"},"32767"),", springt er auf ",(0,s.kt)("inlineCode",{parentName:"p"},"-32768")," und z\xe4hlt positiv weiter. Unterschreitet der Wert  ",(0,s.kt)("inlineCode",{parentName:"p"},"-32768"),", springt er auf ",(0,s.kt)("inlineCode",{parentName:"p"},"32767"),". Aus diesem Grund sollte darauf geachtete werden, dass die Encoderwerte regelm\xe4\xdfig abgefragt und zur\xfcckgesetzt werden."),(0,s.kt)("p",null,"Der Encoder wird durch einen Interrupt gesteuert, weshalb keine zus\xe4tzliche Funktion zum Bestimmen der Encoder-Impulse aufgerufen werden muss."),(0,s.kt)("h3",{id:"beispiel"},"Beispiel"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"// Zeigt die Encoder-Werte auf dem Display an\n\n#include <Wire.h>\n#include <Zumo32U4.h>\n\nZumo32U4Encoders encoders; //  Encoder-Objekt deklarieren\nZumo32U4LCD lcd;\n\nunsigned long lastDisplayTime = 0;\n\nvoid setup() {\n  // bleibt leer\n}\n\nvoid loop() {\n  if ((millis() - lastDisplayTime) >= 100) {\n\n    int countsLeft = encoders.getCountsLeft();   // Aufruf der getCountsLeft() Methode\n    int countsRight = encoders.getCountsRight(); // Aufruf der getCountsLeft() Methode\n\n    lcd.clear();\n    lcd.print(countsLeft);\n    lcd.gotoXY(0, 1);\n    lcd.print(countsRight);\n    \n    lastDisplayTime = millis();\n  }\n}\n")),(0,s.kt)("h2",{id:"static-int-getcountsright"},(0,s.kt)("inlineCode",{parentName:"h2"},"static int \tgetCountsRight()")),(0,s.kt)("p",null,"Wie ",(0,s.kt)("inlineCode",{parentName:"p"},"getCountsLeft()")," nur f\xfcr das rechte Rad."),(0,s.kt)("h2",{id:"static-int-getcountsandresetleft"},(0,s.kt)("inlineCode",{parentName:"h2"},"static int \tgetCountsAndResetLeft()")),(0,s.kt)("p",null,"Verh\xe4lt sich wie ",(0,s.kt)("inlineCode",{parentName:"p"},"static int getCountsLeft()"),", au\xdfer dass vor jeder R\xfcckgabe des Wertes der Z\xe4hler auf Null gesetzt wird. Bei wiederkehrendem Aufruf von ",(0,s.kt)("inlineCode",{parentName:"p"},"getCountsAndResetLeft()")," wird alo die Anzahl der Encoder-Impulse zwischen zwei Aufrufen zur\xfcckgegeben und ein ungewollter \xdcberlauf des Z\xe4hlwertes vermieden."),(0,s.kt)("h2",{id:"static-int--getcountsandresetright"},(0,s.kt)("inlineCode",{parentName:"h2"},"static int  getCountsAndResetRight()")),(0,s.kt)("p",null,"Wie ",(0,s.kt)("inlineCode",{parentName:"p"},"getCountsAndResetRight()")," nur f\xfcr das rechte Rad."))}c.isMDXComponent=!0}}]);