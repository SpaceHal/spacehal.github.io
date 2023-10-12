"use strict";(self.webpackChunkspace_hal=self.webpackChunkspace_hal||[]).push([[808],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(b,a(a({ref:n},p),{},{components:t})):r.createElement(b,a({ref:n},p))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7263:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const l={title:"Batteriespannung",sidebar_label:"Batteriespannung",description:"Batteriespannung auslesen",custom_edit_url:null,keywords:["Zumo 32u4","Betriebspannung","Batterie"]},a=void 0,o={unversionedId:"zumo32u4/power",id:"zumo32u4/power",title:"Batteriespannung",description:"Batteriespannung auslesen",source:"@site/docs/zumo32u4/power.md",sourceDirName:"zumo32u4",slug:"/zumo32u4/power",permalink:"/docs/zumo32u4/power",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"Batteriespannung",sidebar_label:"Batteriespannung",description:"Batteriespannung auslesen",custom_edit_url:null,keywords:["Zumo 32u4","Betriebspannung","Batterie"]},sidebar:"mySidebar",previous:{title:"LEDs",permalink:"/docs/zumo32u4/zumoBasics"},next:{title:"Taster",permalink:"/docs/zumo32u4/buttons"}},u={},s=[{value:"<code>uint16_t readBatteryMillivolts()</code>",id:"uint16_t-readbatterymillivolts",level:2},{value:"Beispiel",id:"beispiel",level:4},{value:"<code>bool usbPowerPresent()</code>",id:"bool-usbpowerpresent",level:2},{value:"Beispiel",id:"beispiel-1",level:4}],p={toc:s},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Die Bibliothek des Zumo 32u4 stellt zwei Funktionen f\xfcr die Analyse der Spannungsversorgung bereit. Beide Funktionen k\xf6nnen direkt, also ohne die Verwendung eines Objektes verwendet werden."),(0,i.kt)("h2",{id:"uint16_t-readbatterymillivolts"},(0,i.kt)("inlineCode",{parentName:"h2"},"uint16_t readBatteryMillivolts()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"int spannung = readBatteryMillivolts();  // Batteriespannung in mV einlesen\n")),(0,i.kt)("p",null,"Misst die Batteriespannung und gibt sie in Millivolt (mV) zur\xfcck. Kann verwendet werden, um die Batteriespannung anzuzeigen."),(0,i.kt)("p",null,"Da der Zumo 32u4 keine Schaltung zum Ausschalten bei geringer Batteriespannung hat, sollte die Spannung (insbesonders bei Verwendung von Akkus) bei jedem Start \xfcberpr\xfcft werden, um ",(0,i.kt)("strong",{parentName:"p"},"Tiefentladung zu vermeiden"),". "),(0,i.kt)("h4",{id:"beispiel"},"Beispiel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'/* Spannungsstester:\n   Bei angeschlossenem USB den Zumo ein/ausschalten.  */\n\n#include <Zumo32U4.h>     // Einbinden der ZUMO Bibliothek\n\nZumo32U4LCD lcd;          // Objekt f\xfcr das LCD-Display\nint uMin = 4000;          // Minimal Batteriespannung\n\nvoid setup() { /* bleibt leer */}\n\nvoid loop() {\n  int uBat = readBatteryMillivolts();  // Batteriespannung einlesen\n  lcd.gotoXY(0, 0); lcd.print(uBat);\n  lcd.print(" mV");\n\n  lcd.gotoXY(0, 1);\n  if (uBat < uMin) {\n    lcd.print("BAT. LOW");\n  }\n  else {\n    lcd.print("BAT. OK ");\n  }\n  delay(100);\n}\n')),(0,i.kt)("h2",{id:"bool-usbpowerpresent"},(0,i.kt)("inlineCode",{parentName:"h2"},"bool usbPowerPresent()")),(0,i.kt)("p",null,"Die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"usbPowerPresent()")," gibt ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," zur\xfcck, wenn am USB-Anschluss eine Spannung anliegt, der Roboter also mit dem PC verbunden ist. "),(0,i.kt)("h4",{id:"beispiel-1"},"Beispiel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"#include <Zumo32U4.h>  // Einbinden der ZUMO Bibliothek\n\nvoid setup(){\n    // ohne Inhalt\n}\nvoid loop(){\n  if (usbPowerPresent ())\n  {\n      ledYellow(1); // Led ist an, wenn der USB-Anschluss verwendet wird\n  } \n  else\n  {\n      ledYellow(0); // Led ist aus, wenn der USB-Anschluss nicht verwendet wird\n  } \n}\n")))}c.isMDXComponent=!0}}]);