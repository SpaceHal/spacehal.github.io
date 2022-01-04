"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[3933],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),u=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(t),k=a,c=p["".concat(d,".").concat(k)]||p[k]||m[k]||r;return t?i.createElement(c,l(l({ref:n},s),{},{components:t})):i.createElement(c,l({ref:n},s))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9279:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var i=t(3117),a=t(102),r=(t(7294),t(3905)),l=["components"],o={title:"Funktionen",sidebar_label:"6. Funktionen",description:"Funktionen mit Arduino.",custom_edit_url:null,keywords:["Arduino","Funktionen","Paramter","R\xfcckgabewert","Beispiel","Aufgaben"]},d=void 0,u={unversionedId:"arduino/functions",id:"arduino/functions",title:"Funktionen",description:"Funktionen mit Arduino.",source:"@site/docs/arduino/functions.md",sourceDirName:"arduino",slug:"/arduino/functions",permalink:"/docs/arduino/functions",editUrl:null,tags:[],version:"current",lastUpdatedAt:1641119333,formattedLastUpdatedAt:"2.1.2022",frontMatter:{title:"Funktionen",sidebar_label:"6. Funktionen",description:"Funktionen mit Arduino.",custom_edit_url:null,keywords:["Arduino","Funktionen","Paramter","R\xfcckgabewert","Beispiel","Aufgaben"]},sidebar:"sideBarArduino",previous:{title:"5. Taster und if-Verzweigung",permalink:"/docs/arduino/input"},next:{title:"7. Zeitkritische Aufgaben",permalink:"/docs/arduino/millis"}},s=[{value:"Eine Funktion zum Anschalten einer LED",id:"eine-funktion-zum-anschalten-einer-led",children:[{value:"Ein Blink-Programm",id:"ein-blink-programm",children:[],level:4}],level:2},{value:"Konventionen",id:"konventionen",children:[],level:2},{value:"Funktionen mit Parametern",id:"funktionen-mit-parametern",children:[{value:"Beispiel",id:"beispiel",children:[],level:4}],level:2},{value:"Funktionen mit R\xfcckgabewert",id:"funktionen-mit-r\xfcckgabewert",children:[],level:2},{value:"Statische Variablen",id:"statische-variablen",children:[],level:2}],m={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Eine Funktionen ist ein ",(0,r.kt)("strong",{parentName:"p"},"zusammengefasster Codeblock")," (Unterprogramm), welcher an beliebigen Stellen eines Programms (wiederkehrend) aufgerufen werden kann. Wird eine Funktion in einem Programm aufgerufen, so wird zuerst der Code der Funktion ausgef\xfchrt und anschlie\xdfend das Programm an der Steile des Funktionsaufrufes weitergef\xfchrt. Funktionen k\xf6nnen ",(0,r.kt)("strong",{parentName:"p"},"Parameter als Eingabegr\xf6\xdfen")," akzeptieren und ",(0,r.kt)("strong",{parentName:"p"},"berechnete Werte zur\xfcckgeben"),"."),(0,r.kt)("h2",{id:"eine-funktion-zum-anschalten-einer-led"},"Eine Funktion zum Anschalten einer LED"),(0,r.kt)("p",null,"Ein sehr einfaches Beispiel f\xfcr eine Funktion k\xf6nnte das ",(0,r.kt)("strong",{parentName:"p"},"Anschalten einer LED")," sein. Diese Funktion soll keine Eingabeparameter und keine R\xfcckgabewerte haben und beim Aufruf eine vorher festgelegte LED anschalten. Deshalb beginnt die Funktionsdefinition mit dem Schl\xfcsselwort ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", was angibt, dass die Funktion ",(0,r.kt)("strong",{parentName:"p"},"keinen R\xfcckgabewert")," hat."),(0,r.kt)("p",null,"Nach dem Schl\xfcsselwort ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," folgt der selbst gew\xe4hlte Name der Funktion und ein Runde Klammern. Der von der Funktion auszuf\xfchrende Code wird anschlie\xdfend zwischen zwei geschweifte Klammern ",(0,r.kt)("inlineCode",{parentName:"p"},"{...}"),"  geschrieben."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"//  Funktionsdefinition f\xfcr `anschalten()`\nvoid anschaltenLed()       // Keine Parameter, keine R\xfcckgabewert           \n{\n    digitalWrite(2,HIGH);  // Eine Funktion kann auch mehr als eine Zeile Code enthalten.\n}\n")),(0,r.kt)("p",null,"Nachdem eine Funktion definiert wurde, kann sie mit ihrem Namen aufgerufen werden:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"anschaltenLed();  //  Funktionsaufruf\n")),(0,r.kt)("p",null,"\xc4hnlich wie bei Schleifen oder Programmverzweigungen kann auch eine Funktion auf ",(0,r.kt)("strong",{parentName:"p"},"globale Variablen zugreifen"),". Im folgenden Beispiel wird die globale Variable ",(0,r.kt)("inlineCode",{parentName:"p"},"pinLed")," zum Schalten der LED genutzt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"int pinLed 2;\n\nvoid anschaltenLed()               \n{\n    digitalWrite(pinLed,HIGH);  // Die Funktion greift auf die globale Variable `pinLed` zu.\n}\n")),(0,r.kt)("h4",{id:"ein-blink-programm"},"Ein Blink-Programm"),(0,r.kt)("p",null,"Wird noch eine weitere Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"ausschalten()")," definiert, so ergibt sich ein sehr verst\xe4ndlicher Code zum Blinken eine LED:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"int pinLed 2;   \n\n// Eine Funktionsdefinition \n//highlight-start\nvoid anschaltenLed(){\n    digitalWrite(pinLed,HIGH);  \n}\n//highlight-end\n\n// Noch eine Funktionsdefinition \n//highlight-start\nvoid ausschaltenLed(){\n    digitalWrite(pinLed,LOW);   \n}\n//highlight-end\n\nvoid setup() {\n  pinMode(pinLed,OUTPUT); \n}\n\nvoid loop() {\n  //highlight-next-line\n  anschaltenLed();  // Aufruf der Funktion \n  delay(1000); \n  //highlight-next-line\n  ausschaltenLed(); // Aufruf der Funktion                       \n  delay(1000);                 \n}\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Beim Aufruf einer Funktion d\xfcrfen die runden Klammern nach dem Funktionsnamen nicht fehlen."))),(0,r.kt)("h2",{id:"konventionen"},"Konventionen"),(0,r.kt)("p",null,"Eine wesentliche Aufgabe von Funktionen ist es, ein Programm lesbar zu machen. Aus diesem Grund sind die gew\xe4hlten ",(0,r.kt)("strong",{parentName:"p"},"Funktionsnamen")," \xe4u\xdferst wichtig. Folgenden Regeln sollten Sie beim Schreiben eigener Funktionen beachten:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ein Funktionsname beginnt immer mit einem ",(0,r.kt)("strong",{parentName:"li"},"Verb im Infinitiv"),". Anschlie\xdfend k\xf6nnen weiter W\xf6rter zum Erl\xe4utern folgen (",(0,r.kt)("inlineCode",{parentName:"li"},"schaltenLed()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"messenSensor()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"lesenZustand()"),", ...)."),(0,r.kt)("li",{parentName:"ul"},"Der Funktionsname beschreibt nur die von der Funktion ausgef\xfchrte Aktion."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Je k\xfcrzer eine Funktion, desto besser"),". Schreiben Sie lieber zwei oder drei kurze Funktionen, als eine lange Funktion."),(0,r.kt)("li",{parentName:"ul"},"Nutzen Sie Funktionen auch bei kurzen Programmen.")),(0,r.kt)("details",{className:"ueben"}," ",(0,r.kt)("summary",null,"Aufgaben"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Schreiben Sie die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"gruessen()")," (verwenden Sie keine Umlaute), welche auf dem seriellen Monitor folgenden Satz schreibt:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Hallo Welt, wie geht es?\n")),(0,r.kt)("p",{parentName:"li"},"Nutzen Sie ansschlie\xdfend die Funktion, um den Satz dreimal auszugeben:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Hallo Welt, wie geht es?\nHallo Welt, wie geht es?\nHallo Welt, wie geht es?\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Schreiben Sie eine Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"aufblinken()"),", welche ein LED zuerst anschaltet und 0,2 Sekunden sp\xe4ter wieder ausschaltet. Nutzen Sie die Funktion, um eine LED ",(0,r.kt)("strong",{parentName:"p"},"blinken")," zu lassen:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"void loop(){\n    aufblinken();\n    delay(1000);\n}\n"))))),(0,r.kt)("h2",{id:"funktionen-mit-parametern"},"Funktionen mit Parametern"),(0,r.kt)("p",null,"Im obigen ",(0,r.kt)("a",{parentName:"p",href:"/docs/arduino/functions#eine-funktion-zum-anschalten-einer-led"},"Beispiel")," kann mit der Funktion  ",(0,r.kt)("inlineCode",{parentName:"p"},"anschalten()"),"  die LED am Pin ",(0,r.kt)("inlineCode",{parentName:"p"},"pinLed")," angeschaltet werden. Aber was ist, wenn mit der selben Funktion auch eine zweite oder dritte LED angeschaltet werden soll? Eine L\xf6sung w\xe4re, die globale Variable ",(0,r.kt)("inlineCode",{parentName:"p"},"pinLed")," zu \xe4ndern. Allerdings f\xfchrt das zu einem sehr un\xfcbersichtlichen Code."),(0,r.kt)("p",null,"Besser ist es, der Funktion einen ",(0,r.kt)("strong",{parentName:"p"},"Parameter zu \xfcbergeben"),", der angibt, welche LED angeschaltet werden soll. Der ",(0,r.kt)("strong",{parentName:"p"},"Funktionsparameter")," wird bei der Funktionsdefintion nach dem Funktionsnamen in runden Klammern angegeben. "),(0,r.kt)("p",null,"Da es sich bei dem Funktionsparameter um eine Variable handelt, muss zus\xe4tzlich auch der Datentyp des Parameters angegeben werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"void anschaltenLed(int pParameter) { // Funktion mit Parameter vom Typ Integer\n  // `pParameter`kann wie eine beliebige Variable genutzt werden\n }\n")),(0,r.kt)("p",null,"Innerhalb der Funktion kann der Parameter wie jede andere Variable verwendet werden. Au\xdferhalb der Funktion, also in einer anderen Funktion oder im Hauptprogramm, kann auf den Parameter nicht zugegriffen werden. ",(0,r.kt)("strong",{parentName:"p"},"Der G\xfcltigkeitsbereich des Funktionsparameters bezieht sich nur auf die Funktion selbst.")),(0,r.kt)("p",null,"Damit ein Funktionsparameter von globalen oder lokalen Variablen unterschieden werden kann, ist es sinnvoll, sie speziell zu Kennzeichnen. An dieser Stelle soll daher die ",(0,r.kt)("strong",{parentName:"p"},"Konvention")," eingef\xfchrt werden, dass jeder Funktionsparameter mit einem kleinen ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),", gefolgt von einem Gro\xdfbuchstaben,  beginnt (z.B. ",(0,r.kt)("inlineCode",{parentName:"p"},"pPinLED")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"pZustand"),")."),(0,r.kt)("h4",{id:"beispiel"},"Beispiel"),(0,r.kt)("p",null,"Im folgenden Beispiel werden mit einer ",(0,r.kt)("strong",{parentName:"p"},"Funktion mit Parametern")," zwei LEDs nacheinander angeschaltet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"#define LED1 4\n#define LED2 5\n\n//highlight-start\nvoid anschaltenLed(bool pPinLed){ // Funktionsdefinition mit Paramter\n  digitalWrite(pPinLed, HIGH);\n}\n//highlight-end\n\nvoid setup(){\n  pinMode(LED1,OUTPUT);\n  pinMode(LED2,OUTPUT);\n\n  //highlight-next-line\n  anschaltenLed(LED1);            // Funktionsaufruf mit Parameter\n  delay(500);\n  //highlight-next-line\n  anschaltenLed(LED2);            // Funktionsaufruf mit Parameter\n}\n\nvoid loop(){\n  // bleibt leer\n}\n")),(0,r.kt)("p",null," Eine Funktion kann auch ",(0,r.kt)("strong",{parentName:"p"},"mehr als einen Parameter")," haben. In diesem Fall werden alle weiteren Parameter durch ein Komma voneinander getrennt in der Funktionsdefinition angegeben:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"void anschaltenLed(int pParameter1, bool pParamter2, float pParameter3) {\n  // Eine Funktion mit mehreren Parametern.\n }\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Als Konvention beginnt der Name eines Funktionsparamters immer mit einem kleinen ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),". Zum Beispiel ",(0,r.kt)("inlineCode",{parentName:"p"},"pPinLED")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"pZustand"),"."))),(0,r.kt)("details",{className:"ueben"}," ",(0,r.kt)("summary",null,"Aufgaben"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Schreiben Sie eine Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"blinkenLED(int pPeriodendauer)"),", welche eine LED am Pin 3 blinken l\xe4sst. Der Funktionsparameter soll die Periodendauer in Millisekunden des Blinksignals angeben. Testen Sie die Funktion.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Erweitern Sie die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"blinkenLED()")," (Aufgabe 1) um einen Parameter f\xfcr den verwendeten LED-Pin. \xdcberpr\xfcfen Sie, ob es mit der Funktion m\xf6glich ist, zwei LEDs gleichzeitig blinken zu lassen."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"int LED1 = 5;\nint LED2 = 6;\n\nvoid loop(){\n  blinkenLED(LED1,1000);\n  blinkenLED(LED2,500);\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Schreiben Sie eine Funktion zum Schalten einer LED. Die Funkion ",(0,r.kt)("inlineCode",{parentName:"p"},"schalten(int pPin, bool pZustand)")," soll zwei Paramter erhalten, welche den Pin der LED und den aktuellen Zustand der LED angeben. Nutzen Sie die Funktion, um eine LED blinken zu lassen.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Schreiben Sie eine Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"codierenBuchstabe(char pBuchstabe)")," welche den Morse-Code f\xfcr den angegeben Buchstaben an einer LED als Blink-Muster ausgibt (Es ist ausreichend, wenn die Funktion nur die Buchstaben 'O' und 'S' codieren kann). Nutzen Sie die Funktion, um den Morse-Code f\xfcr ",(0,r.kt)("em",{parentName:"p"},"SOS")," ein einer LED ausgeben zu lassen.\nInformieren Sie sich bei Wikipedia \xfcber den ",(0,r.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Morsecode#Zeitschema_und_Veranschaulichung"},"Morse-Code"),"."),(0,r.kt)("p",{parentName:"li"}," Ihre ",(0,r.kt)("inlineCode",{parentName:"p"},"loop()")," Funktion sollte  folgenderma\xdfen aussehen:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"void loop() {\n  codierenBuchstabe('S');\n  codierenBuchstabe('O');\n  codierenBuchstabe('S');\n  zeigeWortabstand();     // Zeitlicher Abstand zwischen zwei W\xf6rtern\n}\n"))))),(0,r.kt)("h2",{id:"funktionen-mit-r\xfcckgabewert"},"Funktionen mit R\xfcckgabewert"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int summe(int a, int b){\n  return a+b;\n}\n")),(0,r.kt)("h2",{id:"statische-variablen"},"Statische Variablen"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Statische Variablen"),", die innerhalb einer Funktion deklariert werden, existieren auch nach dem Beenden einer Funktion weiter. Das bedeutet, dass sie beim erneuten Ausf\xfchren der Funktion den selben Wert wie beim Beenden des letzten Funktionsaufrufs haben. Sie eignen sich zum Beispiel ",(0,r.kt)("strong",{parentName:"p"},"zum Speichern von Zust\xe4nden"),"."),(0,r.kt)("p",null,"Im Folgenden Beispiel wird mit der statischen Variablen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"static bool lZustandLed = false; \n")),(0,r.kt)("p",null,"der aktuelle Zustand einer LED gespeichert. "),(0,r.kt)("p",null,"Bei jedem Aufruf der Funktion wird der Zustand der Variablen ge\xe4ndert und als digitales Signal ausgegeben. Die LED wird also bei jedem Funktionsaufruf umgeschaltet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#define LED1 4\n\n//highlight-start\nvoid umschaltenLed(int pPinLed){\n  //highlight-next-line\n  static bool lZustandLed = false;   // statische Variable, wird nach dem Beenden der Funktion nicht gel\xf6scht \n  lZustandLed != lZustandLed;\n  digitalWrite(pPinLed, lZustandLed);\n}\n//highlight-end\n\nvoid setup(){\n  pinMode(LED1,OUTPUT);\n}\n\nvoid loop(){\n  //highlight-next-line\n  umschaltenLed(LED1);            // Funktionsaufruf mit Parameter\n  delay(500);\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/static-variables-in-c/"},"Static Variables in C")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.c-howto.de/tutorial/variablen-konstanten/statische-variablen/"},"Statische Variablen"))))}p.isMDXComponent=!0}}]);