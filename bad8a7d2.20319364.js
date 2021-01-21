(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{111:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return c}));var r=t(3),i=t(7),o=(t(0),t(131)),a={title:"Die Taster",sidebar_label:"Taster",description:"Die Taster am Zumo 32u4 verwenden."},d={unversionedId:"zumo32u4/buttons",id:"zumo32u4/buttons",isDocsHomePage:!1,title:"Die Taster",description:"Die Taster am Zumo 32u4 verwenden.",source:"@site/docs/zumo32u4/buttons.md",slug:"/zumo32u4/buttons",permalink:"/docs/zumo32u4/buttons",editUrl:"null/docs/zumo32u4/buttons.md",version:"current",sidebar_label:"Taster",sidebar:"someSidebar",previous:{title:"LEDs",permalink:"/docs/zumo32u4/zumoBasics"},next:{title:"Die Liniensensoren",permalink:"/docs/zumo32u4/lineSensor"}},s=[{value:"<code>bool isPressed ()</code>",id:"bool-ispressed-",children:[]},{value:"<code>void waitForPress ()</code>",id:"void-waitforpress-",children:[]},{value:"<code>void waitForRelease ()</code>",id:"void-waitforrelease-",children:[]},{value:"<code>void waitForButton ()</code>",id:"void-waitforbutton-",children:[]},{value:"<code>bool getSingleDebouncedPress ()</code>",id:"bool-getsingledebouncedpress-",children:[]},{value:"<code>bool getSingleDebouncedRelease ()</code>",id:"bool-getsingledebouncedrelease-",children:[]}],l={rightToc:s};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"F\xfcr das einfache Auslesen der drei Taster A,B und C k\xf6nnen die drei Klassen ",Object(o.b)("inlineCode",{parentName:"p"},"Zumo32U4ButtonA"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Zumo32U4ButtonB")," und ",Object(o.b)("inlineCode",{parentName:"p"},"Zumo32U4ButtonC")," genutzt werden. F\xfcr jeden Taster gibt es verschieden Methoden, welche zum Beispiel "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\xfcberpr\xfcfen, ob ein Taster ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#bool-isPressed"}),"gedr\xfcckt")," ist, "),Object(o.b)("li",{parentName:"ul"},"die den Programmablauf unterbrechen, bis ein Taster ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#void-waitForPress"}),"gedr\xfcckt oder losgelassen")," wurde oder "),Object(o.b)("li",{parentName:"ul"},"die ein das Dr\xfccken eines Tasters ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#bool-getSingleDebouncedPress"}),"entprellen"),".")),Object(o.b)("h2",{id:"bool-ispressed-"},Object(o.b)("inlineCode",{parentName:"h2"},"bool isPressed ()")),Object(o.b)("p",null,"Gibt ",Object(o.b)("inlineCode",{parentName:"p"},"true")," oder 1 zur\xfcck, wenn der entsprechende Taster gedr\xfcckt ist und ",Object(o.b)("inlineCode",{parentName:"p"},"false")," oder 0 wenn nicht. Der Taster wird nicht entprellt."),Object(o.b)("h4",{id:"beispielprogramm"},"Beispielprogramm"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-arduino"}),"#include <Zumo32U4.h>\n\nZumo32U4ButtonB buttonB;\n\nvoid setup()\n{\n  // ohne Inhalt\n}\n\nvoid loop()\n{\n  /* Die Methode isPressed() liest direkt, ohne Entprellen den Status des Tasters ein.*/\n  if (buttonB.isPressed())\n  {\n    // Wenn der Taster gedr\xfcckt ist, dann schalte die LED an\n    ledYellow(1);\n  }\n  else\n  {\n    // Wenn der Taster nicht gedr\xfcckt ist, schalte die LED aus\n    ledYellow(0);\n  }\n}   \n")),Object(o.b)("h2",{id:"void-waitforpress-"},Object(o.b)("inlineCode",{parentName:"h2"},"void waitForPress ()")),Object(o.b)("p",null,"Wartet bis der Taster gedr\xfcckt wurde. Ber\xfccksichtigt das Prellen der Taster."),Object(o.b)("h2",{id:"void-waitforrelease-"},Object(o.b)("inlineCode",{parentName:"h2"},"void waitForRelease ()")),Object(o.b)("p",null,"Wartet bis der Taster losgelassen wurde. Ber\xfccksichtigt das Prellen der Taster."),Object(o.b)("h2",{id:"void-waitforbutton-"},Object(o.b)("inlineCode",{parentName:"h2"},"void waitForButton ()")),Object(o.b)("p",null,"Wartet bis der Taster gedr\xfcckt und anschlie\xdfend losgelassen wurde. Ber\xfccksichtigt das Prellen der Taster."),Object(o.b)("h4",{id:"beispielprogramm-1"},"Beispielprogramm"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-arduino"}),'#include <Zumo32U4.h>\n\nZumo32U4ButtonA buttonA;\nZumo32U4LCD lcd;\n\nvoid setup()\n{\n  lcd.clear();\n  lcd.print(F("Press A"));\n\n  /* Die Methode waitForButton() stoppt das Programm, bis \n     der Taster gedr\xfcckt und anschlie\xdfend losgelassen wurde.\n     Die Methode entprellt den Taster.*/\n  buttonA.waitForButton();\n\n  lcd.clear();\n  lcd.print(F("Danke"));\n}\n\nvoid loop(){\n  // ohne Inhalt\n}\n')),Object(o.b)("h2",{id:"bool-getsingledebouncedpress-"},Object(o.b)("inlineCode",{parentName:"h2"},"bool getSingleDebouncedPress ()")),Object(o.b)("p",null,"Gibt immer dann  ",Object(o.b)("inlineCode",{parentName:"p"},"true")," oder ",Object(o.b)("inlineCode",{parentName:"p"},"1")," zur\xfcck, wenn der Taster vom nicht gedr\xfcckten zum gedr\xfcckten Zustand gewechselt hat. Die Methode wird mit einem Zustandsdiagramm (",Object(o.b)("em",{parentName:"p"},"state machine"),") realisiert und muss wiederkehrend aufgerufen werden. Bei jedem Aufruf wird unter Ber\xfccksichtigung des Prellens der Status des Tasters aktualisiert."),Object(o.b)("h4",{id:"beispielprogramm-2"},"Beispielprogramm"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-arduino"}),'#include <Zumo32U4.h>\n\nZumo32U4ButtonC buttonC;\nZumo32U4LCD lcd;\n\nint cPressedCount = 0;\n\nvoid setup()\n{\n  // ohne Inhalt\n}\n\nvoid loop()\n{\n  /* Wird die Methode getSingleDebouncedPress() regelm\xe4\xdfig in einer Schleife aufgerufen,\n   * so gibt sie true zur\xfcck, wenn der Taster gedr\xfcckt und false zur\xfcck, wenn der Taster \n   * nicht gedr\xfcckt ist. Die Methode ist nicht blockierend und entprellt den Taster*/\n  if (buttonC.getSingleDebouncedPress())\n  {\n    cPressedCount += 1;\n    Serial.print(F("Button C was pressed "));\n    Serial.print(cPressedCount);\n    Serial.println(F(" times."));\n\n    lcd.clear();\n    lcd.print(cPressedCount);\n  }\n\n  /* Wenn nicht blockierende Methoden wie isPressed() oder\n   * getSingleDebouncedPress() verwendet werden, k\xf6nnen mehrere Taster zu gleichen\n   * Zeit verwendet werden und au\xdferdem noch andere Aufgaben zu gleichen Zeit\n   * ausgef\xfchrt werden. In diesem Beispiel blinkt die rote LED, w\xe4hrend der Taster C\n   * regelm\xe4\xdfig abgefragt wird. */\n  ledRed(millis() % 1024 < 100); // Hackerstyle zum Blinken der LED\n}   \n')),Object(o.b)("h2",{id:"bool-getsingledebouncedrelease-"},Object(o.b)("inlineCode",{parentName:"h2"},"bool getSingleDebouncedRelease ()")),Object(o.b)("p",null,"Gibt immer dann  ",Object(o.b)("inlineCode",{parentName:"p"},"true")," oder ",Object(o.b)("inlineCode",{parentName:"p"},"1")," zur\xfcck, wenn der Taster vom  gedr\xfcckten zum nicht gedr\xfcckten Zustand gewechselt hat. Die Methode wird mit einem Zustandsdiagramm (",Object(o.b)("em",{parentName:"p"},"state machine"),") realisiert und muss wiederkehrend aufgerufen werden. Bei jedem Aufruf wird unter Ber\xfccksichtigung des Prellens der Status des Tasters aktualisiert."))}c.isMDXComponent=!0},131:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),c=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},u=function(e){var n=c(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=r,m=u["".concat(a,".").concat(p)]||u[p]||b[p]||o;return t?i.a.createElement(m,d(d({ref:n},l),{},{components:t})):i.a.createElement(m,d({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=p;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);