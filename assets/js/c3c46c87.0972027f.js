"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[3415],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,h=p["".concat(m,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6791:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o={id:"odometrie",title:"Odometrie",sidebar_label:"Odometrie",description:"Odometrie",custom_edit_url:null,keywords:["Arduino","Roboter","Robotik","Odometrie","Positionsbestimmung","Zumo32u4","Zumo"]},s=void 0,m={unversionedId:"robotik/odometrie",id:"robotik/odometrie",isDocsHomePage:!1,title:"Odometrie",description:"Odometrie",source:"@site/docs/robotik/odometrie.md",sourceDirName:"robotik",slug:"/robotik/odometrie",permalink:"/docs/robotik/odometrie",editUrl:null,version:"current",lastUpdatedAt:1630426919,formattedLastUpdatedAt:"8/31/2021",frontMatter:{id:"odometrie",title:"Odometrie",sidebar_label:"Odometrie",description:"Odometrie",custom_edit_url:null,keywords:["Arduino","Roboter","Robotik","Odometrie","Positionsbestimmung","Zumo32u4","Zumo"]},sidebar:"sideBarRobotik",previous:{title:"Kreuzungen erkennen",permalink:"/docs/robotik/advancedLine"},next:{title:"Kinematik",permalink:"/docs/robotik/kinematik"}},d=[{value:"Inkrementalgeber (<em>Incremental Encoder</em>)",id:"inkrementalgeber-incremental-encoder",children:[{value:"Aufgaben",id:"aufgaben",children:[]},{value:"Quadratur-Encoder (<em>Quadrature Encoder</em>)",id:"quadratur-encoder-quadrature-encoder",children:[]}]},{value:"Ein P-Regler zum Geradeausfahren",id:"ein-p-regler-zum-geradeausfahren",children:[{value:"Aufgaben",id:"aufgaben-1",children:[]}]},{value:"Drehung um die eigene Achse",id:"drehung-um-die-eigene-achse",children:[]}],l={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"inkrementalgeber-incremental-encoder"},"Inkrementalgeber (",(0,i.kt)("em",{parentName:"h2"},"Incremental Encoder"),")"),(0,i.kt)("p",null,"Eine der ersten Aufgaben f\xfcr den selbstgebauten Roboter war es, den Roboter eine Strecke von 1,5 Meter fahren zu lassen. Die L\xf6sung konnte nur durch Probieren von unterschiedliche langen Fahrzeit ermittelt werden. Was dem selbstgebauten Roboter fehlte, war die M\xf6glichkeit den zur\xfcckgelegten Fahrtweg zu messen."),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Odometrie")," ist eine Methode, wie mit Hilfe der beiden Antriebsr\xe4der nicht nur der zur\xfcckgelegte Weg, sondern ganz allgemein die Position und Orientierung eines mobilien Roboters bestimmt werden kann. Hierf\xfcr wir mit einem ",(0,i.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Inkrementalgeber"},"Inkrementalgeber")," (Radencoder) an jedem Motor bestimmt, wie weit sich die einzelnen Motoren zwischen zwei Messungen gedreht haben. "),(0,i.kt)("p",null,"Der Zumo 32u4 hat an jedem Motor einen ",(0,i.kt)("a",{parentName:"p",href:"#quadratur-encoder-quadrature-encdoder"},"Quadratur-Encoder"),", welcher mit einer magnetischen Scheibe pro Motorwelle und zwei ",(0,i.kt)("a",{parentName:"p",href:"https://www.leifiphysik.de/elektrizitaetslehre/bewegte-ladungen-feldern/grundwissen/hall-effekt"},"Hall-Effekt"),"-Sensoren f\xfcr jeden Motor realisiert ist. Der Quadratur-Encoder hat eine Aufl\xf6sung von 12 Schritten pro Umdrehung."),(0,i.kt)("p",null,"Da die R\xe4der nicht direkt, sondern mit einem Getriebe  mit der Motorwelle verbunden sind (\xdcbersetzung 75.81:1), f\xfchrt das zu einer Aufl\xf6sung von ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"12"),(0,i.kt)("mo",{parentName:"mrow"},"\xd7"),(0,i.kt)("mn",{parentName:"mrow"},"75.81"),(0,i.kt)("mo",{parentName:"mrow"},"\u2248"),(0,i.kt)("mn",{parentName:"mrow"},"909"),(0,i.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,i.kt)("mn",{parentName:"mrow"},"7")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"12\\times 75.81 \\approx 909,7")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.72777em",verticalAlign:"-0.08333em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"7"),(0,i.kt)("span",{parentName:"span",className:"mord"},"5"),(0,i.kt)("span",{parentName:"span",className:"mord"},"."),(0,i.kt)("span",{parentName:"span",className:"mord"},"8"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"\u2248"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8388800000000001em",verticalAlign:"-0.19444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"9"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"9"),(0,i.kt)("span",{parentName:"span",className:"mpunct"},","),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"7")))))," Impulsen pro Umdrehung (CPR - counts per revolution)."),(0,i.kt)("img",{src:"/img/robotik/RadEncoder.png",alt:"Ein Radencoder f\xfcr die Odometrie",width:"450px",class:"center"}),(0,i.kt)("h3",{id:"aufgaben"},"Aufgaben"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,i.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\xdcberlegen Sie Sich einen geeigneten Versuch, um die Encoder-Aufl\xf6sung in Millimeter pro Impuls bestimmen. Im Anschluss werden die Ergebnisse verglichen.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lassen Sie sie den Roboter eine Strecke von exakt 20 cm fahren. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Wiederholden Sie die letzte Aufgabe. Versuchen Sie jedoch den Roboter die 20 cm so schnell wie m\xf6glich zur\xfccklegen zu lassen. (",(0,i.kt)("em",{parentName:"p"},"Hinweis: Nutzen Sie einen geeigneten Regler"),")")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lassen Sie den Roboter \xfcber eine Zeit von ca. 0,6 Sekunden mit verschiedenen Geschwindigkeiten (200, 300, 400) fahren. Bestimmen sie gleichzeitig die aktuelle Geschwindigkeit in Impulsen pro Sekunde und Meter pro Sekunde. Geben Sie die Geschwindigkeiten w\xe4hrend des Beschleunigungsvorgangs auf dem seriellen Monitor aus."),(0,i.kt)("p",{parentName:"li"},"Stellen Sie abschlie\xdfend ihr Ergebnisse mit einem geeigenetem Programm (z.B. Excel oder Openoffice) graphisch dar und beantworten Sie folgende Fragen:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Wie lange ben\xf6tigt der Roboter, bis er seine jeweilige Maximalgeschwindigkeit erreicht hat?"),(0,i.kt)("li",{parentName:"ol"},"Welcher Funktionstyp beschreibt den Zusammenhang zwischen Zeit und Geschwindigkeit am besten."),(0,i.kt)("li",{parentName:"ol"},"Welche Besonderheiten fallen Ihnen an der Beschleunigungskurve auf (Zumo 32u4).")))))),(0,i.kt)("h3",{id:"quadratur-encoder-quadrature-encoder"},"Quadratur-Encoder (",(0,i.kt)("em",{parentName:"h3"},"Quadrature Encoder"),")"),(0,i.kt)("p",null,"Der oben dargestellte Rad-Encoder ist ein sehr einfacher Inkrementalgeber. Was dem Encoder fehlt, ist die M\xf6glichkeit auch die Drehrichtung des Rades zu bestimmen. Ein Quadratur-Encoder schafft hier Abhilfe. "),(0,i.kt)("img",{src:"/img/robotik/QuadEncoderClockwise.png",alt:"Quadratur Encoder",width:"500px",class:"center"}),(0,i.kt)("p",null,"Bei einem Quadratur-Encoder wird das Rad nicht mit einem Sensor, sondern mit ",(0,i.kt)("strong",{parentName:"p"},"zwei r\xe4umlich versetzten Sensoren")," abgetastet. Dadurch ergibt sich nicht nur eine Impulsfolge, welche angibt, wie weit sich das Rad gedreht hat, sondern ",(0,i.kt)("strong",{parentName:"p"},"zwei Impulsfolgen (A und B)")," aus welchen zus\xe4tzlich auch die Drehrichtung bestimmt werden kann. "),(0,i.kt)("img",{src:"/img/robotik/QuadEncoderCC.png",alt:"Quadratur Encoder",width:"500px",class:"center"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.pololu.com/docs/0J63/all#3.4"},"Quadratur-Encoder des Zumo 32u4")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://lastminuteengineers.com/rotary-encoder-arduino-tutorial/"},"Rotary Encoder")),(0,i.kt)("h2",{id:"ein-p-regler-zum-geradeausfahren"},"Ein P-Regler zum Geradeausfahren"),(0,i.kt)("h3",{id:"aufgaben-1"},"Aufgaben"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,i.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Mit dem Roboter eine 2 Meter lange strecke ",(0,i.kt)("strong",{parentName:"li"},"gerade")," abfahren. "),(0,i.kt)("li",{parentName:"ol"},"Kalibrierung des Motors bzw. des P-Controllers f\xfcr die Geradeausfahrt.")))),(0,i.kt)("h2",{id:"drehung-um-die-eigene-achse"},"Drehung um die eigene Achse"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,i.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Write a program that causes the robot to move in a straight line for 2 m and then turn 360 . What is the error in the robot\u2019s position?"),(0,i.kt)("li",{parentName:"ol"},"Write a program that causes the robot to turn 360 degree and then move in a straight line for 2 m. What is the error in the robot\u2019s position? Is there a difference\nbetween this error and the error of the previous experiment?")))))}c.isMDXComponent=!0}}]);