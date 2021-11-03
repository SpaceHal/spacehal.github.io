"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[5225],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return p}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),g=s(r),p=i,f=g["".concat(c,".").concat(p)]||g[p]||d[p]||o;return r?t.createElement(f,a(a({ref:n},l),{},{components:r})):t.createElement(f,a({ref:n},l))}));function p(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5417:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),a={title:"Auf einem Gitter navigieren",sidebar_label:"Gitternavigation",description:"Ein fortgeschrittener Linienfolger zum navigieren auf einem Gitter.",custom_edit_url:null},u=void 0,c={unversionedId:"robotik/gridNavigation",id:"robotik/gridNavigation",isDocsHomePage:!1,title:"Auf einem Gitter navigieren",description:"Ein fortgeschrittener Linienfolger zum navigieren auf einem Gitter.",source:"@site/docs/robotik/gridNavigation.md",sourceDirName:"robotik",slug:"/robotik/gridNavigation",permalink:"/docs/robotik/gridNavigation",editUrl:null,tags:[],version:"current",lastUpdatedAt:1631966711,formattedLastUpdatedAt:"18.9.2021",frontMatter:{title:"Auf einem Gitter navigieren",sidebar_label:"Gitternavigation",description:"Ein fortgeschrittener Linienfolger zum navigieren auf einem Gitter.",custom_edit_url:null},sidebar:"sideBarRobotik",previous:{title:"Gyroskop",permalink:"/docs/robotik/gyroscope"}},s=[{value:"Erkennen von Kreuzungen",id:"erkennen-von-kreuzungen",children:[{value:"Notwendige Datentypen",id:"notwendige-datentypen",children:[]},{value:"Methoden zum Erkennen der Kreuzung",id:"methoden-zum-erkennen-der-kreuzung",children:[]}]}],l={toc:s};function d(e){var n=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/robotik/IntersectionDetection.png",alt:"Detecting an intersection with a robot",width:"500px",class:"center"}),(0,o.kt)("h2",{id:"erkennen-von-kreuzungen"},"Erkennen von Kreuzungen"),(0,o.kt)("h3",{id:"notwendige-datentypen"},"Notwendige Datentypen"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-arduino"},"// Aufz\xe4hlungstyp f\xfcr die Ausrichtung des Roboters\nenum  Headings {\n  NORTH,\n  WEST,\n  SOUTH,\n  EAST\n};\nHeadings botHeading = NORTH;  // Startorientierung\n\n\n// Structure mit Arduino: https://www.circuitxcode.com/using-arduino-struct/\n// Structure f\xfcr die Position\nstruct Position\n{\n  int x, y;\n};\nPosition goal = {4, 5};       // m\xf6gliche Zielposition\n\n// Structure zum Beschreiben der m\xf6glichen Fahrichtungen an einer Kreuzung\nstruct IntersectionTyp\n{\n  bool left;\n  bool right;\n  bool straight;\n};\n")),(0,o.kt)("h3",{id:"methoden-zum-erkennen-der-kreuzung"},"Methoden zum Erkennen der Kreuzung"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-arduino"},"// Gibt <true> zur\xfcck, wenn der Sensor eine Linie sieht.\n// `readCalibrated()` muss vorher aufgerufen worden sein.\nbool aboveLine(byte sensorIndex) {\n  return lineSensorValues[sensorIndex] > lineThreshold;\n}\n\n// Erkennt Abzweigung oder Kreuzungen und gibt einen Struct zur\xfcck, der angibt in welcher Richtung ein Weg weitergeht.\n// Wird aufgerufen, sobald einer der seitlichen Bodensensoren aktiviert wird.\nstruct IntersectionTyp getIntersection() {\n  IntersectionTyp interTyp = {0, 0, 0};           // Struct initialisieren\n\n  // Es wurde bereits erkannt, dass eine Abzweigung/Kreuzung da ist. Nun m\xfcssen die m\xf6glichen\n  // Wegrichtungen ermittelt werden.\n  driveDistanceMM(SPEED, DISTANCE_LINE_MM);       // auf Kreuzung fahren und nach Abzweigung pr\xfcfen\n  lineSensors.readCalibrated(lineSensorValues);   // Sensorwerte lesen\n\n  if (aboveLine(0)) interTyp.left = 1;            // Abzweigung nach links erkannt\n  if (aboveLine(4)) interTyp.right = 1;           // Abzweigung nach rechts erkannt\n\n  // weiter fahren, bis der Mittelpunkt des Zumo genau \xfcber der Linie ist und pr\xfcfen, ob es geradeaus weiter geht.\n  driveDistanceMM(SPEED, DISTANCE_AFTER_LINE_MM);\n  lineSensors.readCalibrated(lineSensorValues);   // Sensorwerte lesen\n  if (aboveLine(2)) interTyp.straight = 1;        // Abzweigung nach vorne erkannt\n\n  return interTyp;\n}\n")))}d.isMDXComponent=!0}}]);