"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[4268],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),u=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return t?r.createElement(h,l(l({ref:n},s),{},{components:t})):r.createElement(h,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=p;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1065:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),l={title:"LEDs",sidebar_label:"LEDs",description:"Die LEDs am Zumo 32u4 steuern.",custom_edit_url:null},a=void 0,d={unversionedId:"zumo32u4/zumoBasics",id:"zumo32u4/zumoBasics",isDocsHomePage:!1,title:"LEDs",description:"Die LEDs am Zumo 32u4 steuern.",source:"@site/docs/zumo32u4/zumoBasics.md",sourceDirName:"zumo32u4",slug:"/zumo32u4/zumoBasics",permalink:"/docs/zumo32u4/zumoBasics",editUrl:null,version:"current",frontMatter:{title:"LEDs",sidebar_label:"LEDs",description:"Die LEDs am Zumo 32u4 steuern.",custom_edit_url:null},sidebar:"sideBarZumo",previous:{title:"Erste Schritte",permalink:"/docs/zumo32u4/gettingStarted"},next:{title:"Taster",permalink:"/docs/zumo32u4/buttons"}},u=[{value:"<code>void ledRed(bool on)</code>",id:"void-ledredbool-on",children:[]},{value:"<code>void ledGreen(bool on)</code>",id:"void-ledgreenbool-on",children:[]},{value:"<code>void ledYellow(bool on)</code>",id:"void-ledyellowbool-on",children:[]},{value:"<code>bool usbPowerPresent()</code>",id:"bool-usbpowerpresent",children:[]},{value:"<code>uint16_t readBatteryMillivolts()</code>",id:"uint16_t-readbatterymillivolts",children:[]}],s={toc:u};function c(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Pololu Zumo 32u4 Library: ",(0,i.kt)("a",{parentName:"em",href:"https://pololu.github.io/zumo-32u4-arduino-library/_zumo32_u4_8h.html"},"LEDs"))),(0,i.kt)("p",null,"Mit dem Einbinden der Zumo- Bibliothek ",(0,i.kt)("inlineCode",{parentName:"p"},"#include <Zumo32U4.h>")," stehen folgende grundlegende Funktionen zur Steuerung der LEDs zu Verf\xfcgung."),(0,i.kt)("h2",{id:"void-ledredbool-on"},(0,i.kt)("inlineCode",{parentName:"h2"},"void ledRed(bool on)")),(0,i.kt)("p",null,"Schaltet die rote LED an ",(0,i.kt)("inlineCode",{parentName:"p"},"ledRed(1)")," oder aus ",(0,i.kt)("inlineCode",{parentName:"p"},"ledRed(0)"),". Die rote Led ist am Port f\xfcr die serielle Daten\xfcbertragung (Pin 17) angeschlossen und leuchtete auf, wenn Daten gesendet werden. Deshalb ist es schwierig die LED korrekt zu steuern, wenn der USB-Anschluss verwendet wird."),(0,i.kt)("h4",{id:"beispiel"},"Beispiel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"#include <Zumo32U4.h>  // Einbinden der ZUMO Bibliothek\n\nvoid setup(){\n    // ohne Inhalt\n}\n\nvoid loop(){\n  ledRed(1); // LED einschalten\n  delay(1000);\n  ledRed(0); // LED ausschalten\n  delay(500);\n}\n")),(0,i.kt)("h2",{id:"void-ledgreenbool-on"},(0,i.kt)("inlineCode",{parentName:"h2"},"void ledGreen(bool on)")),(0,i.kt)("p",null,"Schaltet die gr\xfcne LED an ",(0,i.kt)("inlineCode",{parentName:"p"},"ledGreen(1)")," oder aus ",(0,i.kt)("inlineCode",{parentName:"p"},"ledGreen(0)"),". Die gr\xfcne Led ist am Port f\xfcr die serielle Daten\xfcbertragung angeschlossen und leuchtete auf, wenn Daten empfangen werden. Deshalb ist es schwierig die LED korrekt zu steuern, wenn der USB-Anschluss verwendet wird."),(0,i.kt)("h2",{id:"void-ledyellowbool-on"},(0,i.kt)("inlineCode",{parentName:"h2"},"void ledYellow(bool on)")),(0,i.kt)("p",null,"Schaltet die am Pin 13 anliegende gr\xfcne LED an ",(0,i.kt)("inlineCode",{parentName:"p"},"ledYellow(1)")," oder aus ",(0,i.kt)("inlineCode",{parentName:"p"},"ledYellow(0)"),". Die gelbe LED wird vom USB-Anschluss nicht beeinflusst."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Nur die gelbe LED ist unabh\xe4ngig vom USB-Anschluss. Wenn der Roboter ",(0,i.kt)("strong",{parentName:"p"},"nicht")," nicht an PC angeschlossen ist, werden auch die rote und gr\xfcne LED nicht weiter gest\xf6rt."))),(0,i.kt)("h2",{id:"bool-usbpowerpresent"},(0,i.kt)("inlineCode",{parentName:"h2"},"bool usbPowerPresent()")),(0,i.kt)("p",null,"Die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"usbPowerPresent()")," gibt ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," zur\xfcck, wenn am USB-Anschluss eine Spannung anliegt, der Roboter also mit dem PC verbunden ist. "),(0,i.kt)("h4",{id:"beispiel-1"},"Beispiel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},"#include <Zumo32U4.h>  // Einbinden der ZUMO Bibliothek\n\nvoid setup(){\n    // ohne Inhalt\n}\nvoid loop(){\n  if (usbPowerPresent ())\n  {\n      ledYellow(1); // Led ist an, wenn der USB-Anschluss verwendet wird\n  } \n  else\n  {\n      ledYellow(0); // Led ist aus, wenn der USB-Anschluss nicht verwendet wird\n  } \n}\n")),(0,i.kt)("h2",{id:"uint16_t-readbatterymillivolts"},(0,i.kt)("inlineCode",{parentName:"h2"},"uint16_t readBatteryMillivolts()")),(0,i.kt)("p",null,"Misst die Batteriespannung und gibt sie in Millivolt (mV) zur\xfcck. Kann verwendet werden, um die Batteriespannung anzuzeigen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  lcd.clear();\n  lcd.gotoXY(0, 1);\n  lcd.print(F("Press A"));\n\n  while (!buttonA.getSingleDebouncedRelease()) // Wartet auf auf eine Tastereingabe\n  {\n    lcd.gotoXY(0, 0);\n    lcd.print(readBatteryMillivolts());\n    lcd.print(F(" mV "));\n    delay(100);\n  }\n')))}c.isMDXComponent=!0}}]);