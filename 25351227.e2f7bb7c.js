(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{131:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),s=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,p=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return t?i.a.createElement(p,c(c({ref:n},b),{},{components:t})):i.a.createElement(p,c({ref:n},b))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<r;b++)o[b]=t[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),i=t(7),r=(t(0),t(131)),o={title:"Funktionen",sidebar_label:"6. Funktionen",description:"Funktionen in Arduino."},c={unversionedId:"arduino/functions",id:"arduino/functions",isDocsHomePage:!1,title:"Funktionen",description:"Funktionen in Arduino.",source:"@site/docs/arduino/functions.md",slug:"/arduino/functions",permalink:"/docs/arduino/functions",editUrl:"null/docs/arduino/functions.md",version:"current",sidebar_label:"6. Funktionen",sidebar:"someSidebar",previous:{title:"Den Arduino mit einem Taster steuern",permalink:"/docs/arduino/input"},next:{title:"Arrays (Listen)",permalink:"/docs/arduino/array"}},l=[{value:"Eine Funktion zum Anschalten einer LED",id:"eine-funktion-zum-anschalten-einer-led",children:[{value:"Konventionen",id:"konventionen",children:[]},{value:"Aufgaben",id:"aufgaben",children:[]}]},{value:"Funktionen mit Parametern",id:"funktionen-mit-parametern",children:[]},{value:"Funktionen mit R\xfcckgabewert",id:"funktionen-mit-r\xfcckgabewert",children:[{value:"Statische Variablen",id:"statische-variablen",children:[]}]}],b={rightToc:l};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Eine Funktionen ist ein ",Object(r.b)("strong",{parentName:"p"},"zusammengefasster Codeblock")," (Unterprogramm), welcher an beliebiger Stelle eines Programms aufgerufen werden kann. Wird eine Funktion in einem Programm aufgerufen, so wird zuerst der Code der Funktion ausgef\xfchrt und anschlie\xdfend das Programm an der Steile des Funktionsaufrufes weitergef\xfchrt. Funktionen k\xf6nnen Parameter als Eingabegr\xf6\xdfen akzeptieren und berechnet Werte zur\xfcckgeben."),Object(r.b)("h2",{id:"eine-funktion-zum-anschalten-einer-led"},"Eine Funktion zum Anschalten einer LED"),Object(r.b)("p",null,"Ein sehr einfaches Beispiel f\xfcr eine Funktion k\xf6nnte das Anschalten einer LED sein. Diese Funktion soll keine Eingabeparameter und keine R\xfcckgabewerte haben und beim Aufruf eine vorher festgelegte LED anschalten."),Object(r.b)("p",null,"Die Eigenschaften der Funktion werden in der ",Object(r.b)("strong",{parentName:"p"},"Funktionsdefinition")," beschrieben. Dort m\xfcssen der Name der Funktion (",Object(r.b)("inlineCode",{parentName:"p"},"anschalten"),") und die ",Object(r.b)("strong",{parentName:"p"},"Datentypen")," des ",Object(r.b)("strong",{parentName:"p"},"R\xfcckgabewertes")," und der ",Object(r.b)("strong",{parentName:"p"},"Eingabeparameter")," definiert werden. Au\xdferdem wird wird hier auch der, von der Funktion auszuf\xfchrende Code angegeben."),Object(r.b)("p",null,"Der ",Object(r.b)("strong",{parentName:"p"},"Datentyp des R\xfcckgabewertes")," wird bei der Definition vor den Funktionsnamen geschrieben. Wird von der Funktion ",Object(r.b)("strong",{parentName:"p"},"kein Wert zur\xfcckgegeben"),", wird das Schl\xfcsselwort ",Object(r.b)("inlineCode",{parentName:"p"},"void")," genutzt. Werden der Funktion keine Parameter \xfcbergeben, so folgen nach dem Funktionsnamen zwei leere runde Klammern. "),Object(r.b)("p",null,"Der von der Funktion auszuf\xfchrende Code wird anschlie\xdfend zwischen zwei geschweifte Klammern ",Object(r.b)("inlineCode",{parentName:"p"},"{...}"),"  geschrieben."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-arduino"}),"//  Funktionsdefinition f\xfcr `anschalten()`\nvoid anschaltenLed()               \n{\n    digitalWrite(PIN_LED,HIGH);  // Eine Funktion kann auch mehr als eine Zeile Code enthalten.\n}\n")),Object(r.b)("p",null,"Nachdem eine Funktion definiert wurde, kann sie mit ihrem Namen aufgerufen werden:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-arduino"}),"anschaltenLed();  //  Funktionsaufruf\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Beim Aufruf einer Funktion d\xfcrfen die runden Klammern nach dem Funktionsnamen nicht fehlen."))),Object(r.b)("h4",{id:"das-ganze-programm"},"Das ganze Programm"),Object(r.b)("p",null,"Wird noch eine weiter Funktion ",Object(r.b)("inlineCode",{parentName:"p"},"ausschalten()")," definiert, so ergibt sich ein sehr verst\xe4ndlicher Code zum Blinken eine LED:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-arduino"}),"#define PIN_LED 2   \n\n// Eine Funktionsdefinition \n//highlight-start\nvoid anschaltenLed(){\n    digitalWrite(PIN_LED,HIGH);  \n}\n//highlight-end\n\n// Noch eine Funktionsdefinition \n//highlight-start\nvoid ausschaltenLed(){\n    digitalWrite(PIN_LED,LOW);   \n}\n//highlight-end\n\nvoid setup() {\n  pinMode(PIN_LED,OUTPUT); \n}\n\nvoid loop() {\n  //highlight-next-line\n  anschaltenLed();  // Aufruf der Funktion \n  delay(1000); \n  //highlight-next-line\n  ausschaltenLed(); // Aufruf der Funktion                       \n  delay(1000);                 \n}\n")),Object(r.b)("h3",{id:"konventionen"},"Konventionen"),Object(r.b)("p",null,"Eine wesentliche Aufgabe von Funktionen ist es, ein Programm lesbar zu machen. Aus diesem Grund sind die gew\xe4hlten Funktionsnamen \xe4u\xdferst wichtig. Folgenden Regeln sollten sie f\xfcr ihre Funktionsnamen einhalten:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ein Funktionsname beginnt immer mit einem ",Object(r.b)("strong",{parentName:"li"},"Verb im Infinitiv"),". Anschlie\xdfend k\xf6nnen weiter W\xf6rter zum Erl\xe4utern folgen (",Object(r.b)("inlineCode",{parentName:"li"},"schaltenLed()"),", ",Object(r.b)("inlineCode",{parentName:"li"},"messenSensor()"),", ",Object(r.b)("inlineCode",{parentName:"li"},"lesenZustand()"),", ...)"),Object(r.b)("li",{parentName:"ul"},"Der Funktionsname beschreibt ",Object(r.b)("strong",{parentName:"li"},"nur")," die von der Funktion ausgef\xfchrte Aktion.")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Je k\xfcrzer eine Funktion, desto besser"),". Schreiben Sie lieber zwei oder drei kurze Funktionen, als eine lange Funktion."))),Object(r.b)("h3",{id:"aufgaben"},"Aufgaben"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),Object(r.b)("strong",{parentName:"h5"},"\xdcben"))),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Schreiben Sie die Funktion ",Object(r.b)("inlineCode",{parentName:"p"},"gruessen()")," (verwenden Sie keine Umlaute), welche auf dem seriellen Monitor folgenden Satz schreibt:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"Hallo Welt, wie geht es?\n")),Object(r.b)("p",{parentName:"li"},"Nutzen Sie ansschlie\xdfend die Funktion, um den Satz dreimal auszugeben:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"Hallo Welt, wie geht es?\nHallo Welt, wie geht es?\nHallo Welt, wie geht es?\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Schreiben Sie eine Funktion ",Object(r.b)("inlineCode",{parentName:"p"},"aufblinken()"),", welche ein LED zuerst anschaltet und 0,2 Sekunden sp\xe4ter wieder ausschaltet. Nutzen Sie die Funktion, um eine LED ",Object(r.b)("strong",{parentName:"p"},"blinken")," zu lassen:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-arduino"}),"void loop(){\n    aufblinken();\n    delay(1000);\n}\n")))))),Object(r.b)("h2",{id:"funktionen-mit-parametern"},"Funktionen mit Parametern"),Object(r.b)("p",null,"Sollte die obige Funktion ",Object(r.b)("inlineCode",{parentName:"p"},"anschalten()")," auch zum Anschalten einer anderen LED genutzt werden, m\xfcsste der Pin f\xfcr die LED ge\xe4ndert werden.  Das kann entweder direkt im Code der Funktion oder mit einem ",Object(r.b)("strong",{parentName:"p"},"Funktionsparameter")," gemacht werden. Der Funktionsparameter wird bei der Funktionsdefintion in runden Klammern nach dem Funktionsnamen angegeben. Da es sich bei dem Funktionsparamter eigentlich um eine Variable handelt, muss zus\xe4tzlich auch der Datentyp des Parameters angegeben werden."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-arduino"}),"void schaltenLed(bool pZustand){\n  digitalWrite(LED, pZustand);\n}\n")),Object(r.b)("h2",{id:"funktionen-mit-r\xfcckgabewert"},"Funktionen mit R\xfcckgabewert"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-arduino"}),"bool umschaltenLed(int pPinLed){\n  static bool state = false;   // statische Variable, wird nach dem Beenden der Funktion nicht gel\xf6scht \n  state != state;\n  digitalWrite(pPinLed, state);\n  return state;\n}\n")),Object(r.b)("h3",{id:"statische-variablen"},"Statische Variablen"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.geeksforgeeks.org/static-variables-in-c/"}),"Static Variables in C")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.c-howto.de/tutorial/variablen-konstanten/statische-variablen/"}),"Statische Variablen"))))}s.isMDXComponent=!0}}]);