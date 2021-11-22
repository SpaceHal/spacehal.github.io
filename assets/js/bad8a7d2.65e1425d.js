"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[4798],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,g=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2417:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=t(3117),i=t(102),o=(t(7294),t(3905)),a=["components"],l={title:"Die Taster",sidebar_label:"Taster",description:"Die Taster am Zumo 32u4 verwenden.",custom_edit_url:null},d=void 0,s={unversionedId:"zumo32u4/buttons",id:"zumo32u4/buttons",isDocsHomePage:!1,title:"Die Taster",description:"Die Taster am Zumo 32u4 verwenden.",source:"@site/docs/zumo32u4/buttons.md",sourceDirName:"zumo32u4",slug:"/zumo32u4/buttons",permalink:"/docs/zumo32u4/buttons",editUrl:null,tags:[],version:"current",lastUpdatedAt:1630426919,formattedLastUpdatedAt:"31.8.2021",frontMatter:{title:"Die Taster",sidebar_label:"Taster",description:"Die Taster am Zumo 32u4 verwenden.",custom_edit_url:null},sidebar:"sideBarZumo",previous:{title:"LEDs",permalink:"/docs/zumo32u4/zumoBasics"},next:{title:"Motoren",permalink:"/docs/zumo32u4/motors"}},u=[{value:"<code>bool isPressed ()</code>",id:"bool-ispressed-",children:[{value:"Beispielprogramm",id:"beispielprogramm",children:[],level:4}],level:2},{value:"<code>void waitForPress ()</code>",id:"void-waitforpress-",children:[],level:2},{value:"<code>void waitForRelease ()</code>",id:"void-waitforrelease-",children:[],level:2},{value:"<code>void waitForButton ()</code>",id:"void-waitforbutton-",children:[{value:"Beispielprogramm",id:"beispielprogramm-1",children:[],level:4}],level:2},{value:"<code>bool getSingleDebouncedPress ()</code>",id:"bool-getsingledebouncedpress-",children:[{value:"Beispielprogramm",id:"beispielprogramm-2",children:[],level:4}],level:2},{value:"<code>bool getSingleDebouncedRelease ()</code>",id:"bool-getsingledebouncedrelease-",children:[],level:2}],c={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Pololu Zumo 32u4 Library: ",(0,o.kt)("a",{parentName:"em",href:"https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_button_a.html"},"Taster"))),(0,o.kt)("p",null,"F\xfcr das einfache Auslesen der drei Taster A,B und C k\xf6nnen die drei Klassen ",(0,o.kt)("inlineCode",{parentName:"p"},"Zumo32U4ButtonA"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Zumo32U4ButtonB")," und ",(0,o.kt)("inlineCode",{parentName:"p"},"Zumo32U4ButtonC")," genutzt werden. F\xfcr jeden Taster gibt es verschieden Methoden, welche zum Beispiel "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\xfcberpr\xfcfen, ob ein Taster ",(0,o.kt)("a",{parentName:"li",href:"#bool-isPressed"},"gedr\xfcckt")," ist, "),(0,o.kt)("li",{parentName:"ul"},"die den Programmablauf unterbrechen, bis ein Taster ",(0,o.kt)("a",{parentName:"li",href:"#void-waitForPress"},"gedr\xfcckt oder losgelassen")," wurde oder "),(0,o.kt)("li",{parentName:"ul"},"die das Dr\xfccken eines Tasters ",(0,o.kt)("a",{parentName:"li",href:"#bool-getSingleDebouncedPress"},"entprellen"),".")),(0,o.kt)("h2",{id:"bool-ispressed-"},(0,o.kt)("inlineCode",{parentName:"h2"},"bool isPressed ()")),(0,o.kt)("p",null,"Gibt ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," oder 1 zur\xfcck, wenn der entsprechende Taster gedr\xfcckt ist und ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," oder 0 wenn nicht. Der Taster wird nicht entprellt."),(0,o.kt)("h4",{id:"beispielprogramm"},"Beispielprogramm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-arduino"},"#include <Zumo32U4.h>\n\nZumo32U4ButtonB buttonB;\n\nvoid setup()\n{\n  // ohne Inhalt\n}\n\nvoid loop()\n{\n  /* Die Methode isPressed() liest direkt, ohne Entprellen den Status des Tasters ein.*/\n  if (buttonB.isPressed())\n  {\n    // Wenn der Taster gedr\xfcckt ist, dann schalte die LED an\n    ledYellow(1);\n  }\n  else\n  {\n    // Wenn der Taster nicht gedr\xfcckt ist, schalte die LED aus\n    ledYellow(0);\n  }\n}   \n")),(0,o.kt)("h2",{id:"void-waitforpress-"},(0,o.kt)("inlineCode",{parentName:"h2"},"void waitForPress ()")),(0,o.kt)("p",null,"Wartet bis der Taster gedr\xfcckt wurde. Ber\xfccksichtigt das Prellen der Taster."),(0,o.kt)("h2",{id:"void-waitforrelease-"},(0,o.kt)("inlineCode",{parentName:"h2"},"void waitForRelease ()")),(0,o.kt)("p",null,"Wartet bis der Taster losgelassen wurde. Ber\xfccksichtigt das Prellen der Taster."),(0,o.kt)("h2",{id:"void-waitforbutton-"},(0,o.kt)("inlineCode",{parentName:"h2"},"void waitForButton ()")),(0,o.kt)("p",null,"Wartet bis der Taster gedr\xfcckt und anschlie\xdfend losgelassen wurde. Ber\xfccksichtigt das Prellen der Taster."),(0,o.kt)("h4",{id:"beispielprogramm-1"},"Beispielprogramm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-arduino"},'#include <Zumo32U4.h>\n\nZumo32U4ButtonA buttonA;\nZumo32U4LCD lcd;\n\nvoid setup()\n{\n  lcd.clear();\n  lcd.print(F("Press A"));\n\n  /* Die Methode waitForButton() stoppt das Programm, bis \n     der Taster gedr\xfcckt und anschlie\xdfend losgelassen wurde.\n     Die Methode entprellt den Taster.*/\n  buttonA.waitForButton();\n\n  lcd.clear();\n  lcd.print(F("Danke"));\n}\n\nvoid loop(){\n  // ohne Inhalt\n}\n')),(0,o.kt)("h2",{id:"bool-getsingledebouncedpress-"},(0,o.kt)("inlineCode",{parentName:"h2"},"bool getSingleDebouncedPress ()")),(0,o.kt)("p",null,"Gibt immer dann  ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," oder ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," zur\xfcck, wenn der Taster vom nicht gedr\xfcckten zum gedr\xfcckten Zustand gewechselt hat. Die Methode wird mit einem Zustandsdiagramm (",(0,o.kt)("em",{parentName:"p"},"state machine"),") realisiert und muss wiederkehrend aufgerufen werden. Bei jedem Aufruf wird unter Ber\xfccksichtigung des Prellens der Status des Tasters aktualisiert."),(0,o.kt)("h4",{id:"beispielprogramm-2"},"Beispielprogramm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-arduino"},'#include <Zumo32U4.h>\n\nZumo32U4ButtonC buttonC;\nZumo32U4LCD lcd;\n\nint cPressedCount = 0;\n\nvoid setup()\n{\n  // ohne Inhalt\n}\n\nvoid loop()\n{\n  /* Wird die Methode getSingleDebouncedPress() regelm\xe4\xdfig in einer Schleife aufgerufen,\n   * so gibt sie true zur\xfcck, wenn der Taster gedr\xfcckt und false zur\xfcck, wenn der Taster \n   * nicht gedr\xfcckt ist. Die Methode ist nicht blockierend und entprellt den Taster*/\n  if (buttonC.getSingleDebouncedPress())\n  {\n    cPressedCount += 1;\n    Serial.print(F("Button C was pressed "));\n    Serial.print(cPressedCount);\n    Serial.println(F(" times."));\n\n    lcd.clear();\n    lcd.print(cPressedCount);\n  }\n\n  /* Wenn nicht blockierende Methoden wie isPressed() oder\n   * getSingleDebouncedPress() verwendet werden, k\xf6nnen mehrere Taster zu gleichen\n   * Zeit verwendet werden und au\xdferdem noch andere Aufgaben zu gleichen Zeit\n   * ausgef\xfchrt werden. In diesem Beispiel blinkt die rote LED, w\xe4hrend der Taster C\n   * regelm\xe4\xdfig abgefragt wird. */\n  ledRed(millis() % 1024 < 100); // Hackerstyle zum Blinken der LED\n}   \n')),(0,o.kt)("h2",{id:"bool-getsingledebouncedrelease-"},(0,o.kt)("inlineCode",{parentName:"h2"},"bool getSingleDebouncedRelease ()")),(0,o.kt)("p",null,"Gibt immer dann  ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," oder ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," zur\xfcck, wenn der Taster vom  gedr\xfcckten zum nicht gedr\xfcckten Zustand gewechselt hat. Die Methode wird mit einem Zustandsdiagramm (",(0,o.kt)("em",{parentName:"p"},"state machine"),") realisiert und muss wiederkehrend aufgerufen werden. Bei jedem Aufruf wird unter Ber\xfccksichtigung des Prellens der Status des Tasters aktualisiert."))}p.isMDXComponent=!0}}]);