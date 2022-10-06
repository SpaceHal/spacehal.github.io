"use strict";(self.webpackChunkspacehale=self.webpackChunkspacehale||[]).push([[3187],{3905:(e,n,i)=>{i.d(n,{Zo:()=>p,kt:()=>c});var t=i(7294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=t.createContext({}),o=function(e){var n=t.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},p=function(e){var n=o(e.components);return t.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(i),c=r,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||a;return i?t.createElement(h,l(l({ref:n},p),{},{components:i})):t.createElement(h,l({ref:n},p))}));function c(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<a;o++)l[o]=i[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},146:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var t=i(7462),r=(i(7294),i(3905));const a={title:"Arrays (Listen)",sidebar_label:"Arrays (Listen)",description:"Mit Arrays in Lauflicht in Arduino programmieren.",custom_edit_url:null,keywords:["Arduino","Array","Listen","Klassen","Blinken","LEDs","Lauflicht"]},l=void 0,s={unversionedId:"arduino/array",id:"arduino/array",title:"Arrays (Listen)",description:"Mit Arrays in Lauflicht in Arduino programmieren.",source:"@site/docs/arduino/array.md",sourceDirName:"arduino",slug:"/arduino/array",permalink:"/docs/arduino/array",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"Arrays (Listen)",sidebar_label:"Arrays (Listen)",description:"Mit Arrays in Lauflicht in Arduino programmieren.",custom_edit_url:null,keywords:["Arduino","Array","Listen","Klassen","Blinken","LEDs","Lauflicht"]},sidebar:"mySidebar",previous:{title:"Taster entprellen",permalink:"/docs/arduino/debounce"},next:{title:"Endliche Automaten",permalink:"/docs/arduino/stateMachine"}},d={},o=[{value:"Motivation",id:"motivation",level:2},{value:"Arrays (Listen)",id:"arrays-listen",level:2},{value:"Deklaration ohne Wertzuweisung",id:"deklaration-ohne-wertzuweisung",level:3},{value:"Einfaches Beispiel",id:"einfaches-beispiel",level:2},{value:"Ein Array f\xfcr die LED-Pins",id:"ein-array-f\xfcr-die-led-pins",level:2},{value:"Beispiel",id:"beispiel",level:3}],p={toc:o};function u(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://spacehal.github.io/docs/arduino/array"})),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Im Abschnitt ",(0,r.kt)("a",{parentName:"p",href:"/docs/arduino/loop"},"Schleifen")," sollten in einer Aufgabe mehrere LEDs an verschiedenen Pins an- bzw. ausgeschaltet werden. Eine m\xf6gliche L\xf6sung w\xe4re es, nur Pins zu verwenden, welche mit aufeinander folgenden Zahlen bezeichnet werden (z.B. Pin 3, 4, 5, 6, 7)."),(0,r.kt)("p",null,"Mit diesem Ansatz k\xf6nnten dann alle Pins durch eine ",(0,r.kt)("inlineCode",{parentName:"p"},"for"),"-Schleife zum Beispiel auf ",(0,r.kt)("inlineCode",{parentName:"p"},"HIGH"),"gesetzt werden:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"for(pin = 3; pin <8; pin++) // alle Pins von 3 bis 7\n{\n    digitalWrite(pin,HIGH)\n}\n")),(0,r.kt)("p",null,"Ganz offensichtlich funktioniert dieser Ansatz nicht, wenn die verwendeten Pins keine aufeinander folgende Nummerierung aufweisen. In diesem Fall eignen sich jedoch  ",(0,r.kt)("strong",{parentName:"p"},"Arrays (Listen)"),", um die verschiedenen Pins anzusteuern."),(0,r.kt)("h2",{id:"arrays-listen"},"Arrays (Listen)"),(0,r.kt)("p",null,"Ein Array ist nichts anderes als eine ",(0,r.kt)("strong",{parentName:"p"},"Liste von Variablen"),", welche alle den selben Datentyp haben. Ein Array vom Datentyp ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," kann zum Beispiel ",(0,r.kt)("strong",{parentName:"p"},"mehrere")," Integer-Werte speichern:"),(0,r.kt)("img",{src:"/img/arduino/Array.png",alt:"Arraystruktur",width:"340px",className:"center"}),(0,r.kt)("p",null,"Um das abgebildete Array zu erzeugen, wird der Datentyp (",(0,r.kt)("inlineCode",{parentName:"p"},"int"),") gefolgt von dem ",(0,r.kt)("strong",{parentName:"p"},"Namen des Arrays mit eckigen Klammern")," (",(0,r.kt)("inlineCode",{parentName:"p"},"zahlen[]"),") geschrieben. Werte k\xf6nnen dem Array bei der Deklaration sofort in einer geschweiften Klammer ",(0,r.kt)("inlineCode",{parentName:"p"},"{ ... }")," \xfcbergeben werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int zahlen[] = {12, 30, 42, 56, 98};  // Ein Array vom Typ Integer mit 5 Elementen (Werten)\n")),(0,r.kt)("p",null,"Der Vorteil des Arrays gegen\xfcber einzelnen Variablen liegt darin, dass der Array nur einen Namen hat und die einzelnen Element \xfcber ihren Index (",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),", ...) angesprochen werden k\xf6nnen. Anders als vielleicht zu vermuten w\xe4re, hat ",(0,r.kt)("strong",{parentName:"p"},"das erste Element")," den Index ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". Bei f\xfcnf Elementen hat somit das letzte Element den Index ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),"."),(0,r.kt)("img",{src:"/img/arduino/ArrayZugriff.png",alt:"Zugriff auf einen Array",width:"300px",className:"center"}),(0,r.kt)("p",null,"Mit Hilfe der Indizes kann mit den einzelnen Array-Elementen wie mit einfachen Datentypen gearbeitet werden. "),(0,r.kt)("p",null,"Es k\xf6nnen Werte (neu) zugewiesen werden:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"zahlen[0] = 3;\n")),(0,r.kt)("p",null,"Elemente k\xf6nnen mit Werten oder anderen Elementen verglichen werden:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"zahlen[1] > 15;         // true\nzahlen[4] < zahlen[3]   // false\n")),(0,r.kt)("p",null,"Oder es k\xf6nnen Werte \xfcber die serielle Schnittstelle ausgegeben werden:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Serial.print(`Der Wert von zahlen[3] ist:`);\nSerial.println(zahlen[3]);\n")),(0,r.kt)("p",null,"Au\xdferdem - und das ist der Grund, warum Arrays so n\xfctzlich sind - kann f\xfcr den Index auch eine Variable verwendet werden:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int index = 4;\nzahlen[index] = 100; // zahlen[4] = 100\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Der Index f\xfcr das erste Element eines Arrays ist immer ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".")),(0,r.kt)("h3",{id:"deklaration-ohne-wertzuweisung"},"Deklaration ohne Wertzuweisung"),(0,r.kt)("p",null,"Ein Array mit einer ",(0,r.kt)("strong",{parentName:"p"},"festen")," Gr\xf6\xdfe kann auch ohne gleichzeitige Wertezuweisung deklariert werden. Das ist besonders dann sinnvoll, wenn die Werte f\xfcr die einzelnen Arrayelemente noch nicht bekannt sind. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int zahlen[5]; // Deklariert einen Array f\xfcr 5 Elemente\n")),(0,r.kt)("p",null,"Um dem Array Werte zuzuweisen, kann dann mit einer Schleife jedem einzelnen Arrayelement der gew\xfcscnhte Werte zugewiesen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"for(int i = 0; i<5; i++){ // Schleife f\xfcr die einzelnen Elemente des Array\n  zahlen[i]= 2*i;\n}\n")),(0,r.kt)("p",null,"F\xfcr das gegebene Beispiel nehmen die einzelnen Elemente folgende Werte an:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"zahlen[0]: 0\nzahlen[1]: 2\nzahlen[2]: 4\nzahlen[3]: 6\nzahlen[4]: 8\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Ein Array muss immer mit einer ",(0,r.kt)("strong",{parentName:"p"},"festen Gr\xf6\xdfe")," (Anzahl von Elementen) deklariert werden. Diese Gr\xf6\xdfe kann sp\xe4ter nicht mehr ge\xe4ndert werden.")),(0,r.kt)("h2",{id:"einfaches-beispiel"},"Einfaches Beispiel"),(0,r.kt)("p",null,"Im folgenden Beispiel werden mit einer for-Schleife die Werte eines Arrays \xfcber die serielle Schnittstelle ausgegeben."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},'#define ANZAHL 7\n//highlight-next-line\nint werte[] = {12, 30, 42, 56, 98, 298, 305};\n\nvoid setup(){\n  Serial.begin(115200);\n  delay(1000);\n\n    for(int i = 0; i < ANZAHL; i++){  // Der erste Index ist 0\n        Serial.print("werte[");\n        Serial.print(i);\n        Serial.print("]=");\n        //highlight-next-line\n        Serial.println(werte[i]);     //  Zugriff auf die Elemente des Arrays\n        delay(300);\n    }\n}\n\nvoid loop(){\n    // bleibt leer ...\n}\n')),(0,r.kt)("h2",{id:"ein-array-f\xfcr-die-led-pins"},"Ein Array f\xfcr die LED-Pins"),(0,r.kt)("p",null,"Betrachten wir noch einmal das Beispiel der LEDs, welche an verschiedenen Arduino-Pins angeschlossen sind. Die LEDs werden an den PWM-Pins ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"6"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"9")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," angeschlossen. Die Leds selbst werden von 0 bis 4 durchnummeriert. Insgesamt werden also 5 LEDs angeschlossen."),(0,r.kt)("img",{src:"/img/arduino/ArraySteckplatine.png",alt:"Leds alls Array",width:"350px",className:"center"}),(0,r.kt)("p",null,"Ein Array, der die LED-Pins beinhaltet k\xf6nnte dann folgenderma\xdfen aussehen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int pins[] = {3, 5, 6, 9, 10};  // Array mit den einzelnen PINS als Elemente\n")),(0,r.kt)("p",null,"Hat man sich einmal solch einen Array f\xfcr die LEDs erstellt, kann dieser genutzt werden, um die einzelnen Pins ",(0,r.kt)("inlineCode",{parentName:"p"},"pins[i]")," als "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ausgang zu definieren ",(0,r.kt)("inlineCode",{parentName:"li"},"pinMode(pinLeds[i],OUTPUT)"),", "),(0,r.kt)("li",{parentName:"ul"},"sie zu schalten ",(0,r.kt)("inlineCode",{parentName:"li"},"digitalWrite(pinLeds[i],HIGH)")," oder, "),(0,r.kt)("li",{parentName:"ul"},"da es ",(0,r.kt)("a",{parentName:"li",href:"/docs/arduino/pwm"},"PMW f\xe4hige Ausg\xe4nge")," sind, die einzelnen LEDs auch zu dimmen.")),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("p",null,"Im folgendem Beispielprogramm wird ein Array ",(0,r.kt)("inlineCode",{parentName:"p"},"pins[]")," mit 5 Elementen genutzt, um 5 LEDs nacheinander ein- und auszuschalten."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"#define NUMLED 5 // Anzahl der Array Elemente \nint pins[] = {3, 5, 6, 9, 10};\n\nvoid setup(){\n    //highlight-start\n    for(int i = 0; i < NUMLED; i++){ \n        pinMode(pinLeds[i],OUTPUT); // Jeden einzelnen Pin als Ausgang konfigurieren\n    }\n    //highlight-end\n}\n\nvoid loop(){\n    //highlight-start\n    for(int i = 0; i < NUMLED; i++){\n        digitalWrite(pinLeds[i],HIGH); // Jeden einzelne LED anschalten\n        //highlight-end\n        delay(250);\n    }\n    delay(1000);\n\n    //highlight-start\n    for(int i = 0; i < NUMLED; i++){\n        digitalWrite(pinLeds[i],LOW); // Jeden einzelne LED ausschalten\n        //highlight-end\n        delay(250);\n    }\n    delay(1000);\n}\n")),(0,r.kt)("details",{className:"ueben"}," ",(0,r.kt)("summary",null,"Aufgaben"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Bestimmen Sie den ",(0,r.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Mittelwert"},"Mittelwert"),", den gr\xf6\xdften und den kleinsten Wert des folgenden Arrays und geben Sie diese auf dem seriellen Monitor aus"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"int zahlen[10] = {5, 12, 56, 2, 89, 45, 23, 56, 89, 12};\n")),(0,r.kt)("p",{parentName:"li"},"Wenn Sie es sich zustrauen, bestimmen Sie auch den ",(0,r.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Median"},"Medianwert"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Bauen Sie eine Schaltung mit ca. 5 LEDs und 2 Tastern auf. Schreiben Sie ein Programm, welches ",(0,r.kt)("strong",{parentName:"p"},"mit den zwei Tastern die Position einer leuchtenden LED steuert"),". Der eine Taster bewegt das Licht nach links, der anderer Taster nach rechts. Befindet sich die leuchtende LED am Rand, springt sie beim entsprechenden Tasterdruck \xfcber zum anderen Rand (LED-Licht zirkuliert). Die Taster sollen entprellt werden.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Analysieren Sie folgendes Programm. Beantworten Sie daf\xfcr die Fragen im Kommentar."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"#define NUMLED 6\nconst int pinLeds[NUMLED] = {3, 5, 6, 9, 10, 11};\nint zustandLeds[] = {0, 0, 0, 0, 0, 0};\n//highlight-next-line\nint dir = 1; // Welche Bedeutung hat die Variable `dir`?\n//highlight-next-line\nint num = 0; // Welche Bedeutung hat die Variable `num`?\n\nunsigned long lastTime = 0;\nunsigned long delayMillis = 200;\n\nvoid setup() {\n  for (int i = 0; i < NUMLED; i++) {\n    pinMode(pinLeds[i], OUTPUT);\n  }\n}\n\nvoid loop() {\n  //highlight-next-line\n  if ((millis() - lastTime) > delayMillis) { // Wof\xfcr ist die if-Abfrage?\n    //highlight-next-line\n    for (int i = 0; i < NUMLED; i++)         // Was passiert in dieser Schleife?\n    {\n      if (i == num) {\n        zustandLeds[i] = HIGH;\n      } else {\n        zustandLeds[i] = LOW;\n      }\n      digitalWrite(pinLeds[i], zustandLeds[i]);\n    }\n    \n    //highlight-start\n    if (num >= NUMLED-1) {                   \n      dir = -1;                              // Warum wird der Wert von `dir` ge\xe4ndert?\n    } else if (num == 0) {\n      dir = 1;\n    }\n    num += dir;                              // Welchen Wert nimmt `num` an\n    //highlight-end\n\n    lastTime = millis();\n  }\n}\n"))))))}u.isMDXComponent=!0}}]);