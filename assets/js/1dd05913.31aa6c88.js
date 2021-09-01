"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[5225],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return f}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,g=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?t.createElement(g,a(a({ref:n},c),{},{components:r})):t.createElement(g,a({ref:n},c))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8824:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var t=r(7462),i=r(3366),o=(r(7294),r(3905)),a={title:"Auf einem Gitter navigieren",sidebar_label:"Gitternavigation",description:"Ein fortgeschrittener Linienfolger zum navigieren auf einem Gitter.",custom_edit_url:null},s=void 0,u={unversionedId:"robotik/gridNavigation",id:"robotik/gridNavigation",isDocsHomePage:!1,title:"Auf einem Gitter navigieren",description:"Ein fortgeschrittener Linienfolger zum navigieren auf einem Gitter.",source:"@site/docs/robotik/gridNavigation.md",sourceDirName:"robotik",slug:"/robotik/gridNavigation",permalink:"/docs/robotik/gridNavigation",editUrl:null,version:"current",frontMatter:{title:"Auf einem Gitter navigieren",sidebar_label:"Gitternavigation",description:"Ein fortgeschrittener Linienfolger zum navigieren auf einem Gitter.",custom_edit_url:null},sidebar:"sideBarRobotik",previous:{title:"Kinematik",permalink:"/docs/robotik/kinematik"}},l=[{value:"Erkennen von Kreuzungen",id:"erkennen-von-kreuzungen",children:[]}],c={toc:l};function p(e){var n=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/robotik/IntersectionDetection.png",alt:"Detecting an intersection with a robot",width:"500px",class:"center"}),(0,o.kt)("h2",{id:"erkennen-von-kreuzungen"},"Erkennen von Kreuzungen"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-arduino"},"enum KreuzungsTypen {GERADE, LINKS, RECHTS, LINKSRECHTS, LINKSGERADE, RECHTSGERADE, KREUZUNG, WUESTE, UNTERBRECHUNG};\n\nenum KreuzungsTypen bestimmeKreuzung(int pThreshold) {\n\n  int delayIntersection = 200; // Zeit, die der Roboter nach der ersten Messung f\xe4hrt, um anchlie\xdfend zu pr\xfcfen, wie die Strecke weitergeht\n  lineSensors.readCalibrated(lineSensorValues); // Sensorwerte aktualisieren\n  bool linksSensor  = lineSensorValues[0] > pThreshold;  \n  bool mitteSensor  = lineSensorValues[2] > pThreshold;  \n  bool rechtsSensor  = lineSensorValues[4] > pThreshold;  \n\n  if (!linksSensor && !rechtsSensor && !mitteSensor) {\n    return UNTERBROCHEN; // R\xfcckgabe Werte der Funktion: UNTERBROCHEN\n  }\n  else if(!linksSensor && !rechtsSensor){\n    return GERADE;  //R\xfcckgabe Werte der Funktion: GERADE\n  }\n  else { \n    // Linker und/oder rechter Sensor haben eine Linie erkannt.\n    // Ein St\xfcck weiterfahren und \xfcberpr\xfcfen, ob es auch geradeaus geht.\n    motors.setSpeeds(speed,speed);\n    delay(delayIntersection);\n    motors.setSpeeds(0,0); // evtl. \xfcberfl\xfcssig\n\n    // Sensorwerte m\xfcssen neu eingelesen werden, um zu \xfcberpr\xfcfen wie es weitergeht ...\n    lineSensors.readCalibrated(lineSensorValues); \n\n    /*\n       Weitere if-else Abfragen mit den *neuen* Sensorwerten zum Erkennen aller Kreuzungstypen\n     */\n\n  }\n}\n")))}p.isMDXComponent=!0}}]);