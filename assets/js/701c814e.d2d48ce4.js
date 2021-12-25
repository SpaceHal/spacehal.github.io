"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[3289],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},m=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(t),c=a,g=p["".concat(s,".").concat(c)]||p[c]||o[c]||r;return t?i.createElement(g,d(d({ref:n},m),{},{components:t})):i.createElement(g,d({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,d=new Array(r);d[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,d[1]=l;for(var u=2;u<r;u++)d[u]=t[u];return i.createElement.apply(null,d)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9887:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var i=t(3117),a=t(102),r=(t(7294),t(3905)),d=["components"],l={title:"Endliche Automaten (Finite State Machine)",sidebar_label:"10. Endliche Automaten",description:"Endlichen Automaten (Zustandsdiagramme) mit dem enum Aufz\xe4hlungstyp und der switch-case Anweisung im Arduino realisieren.",custom_edit_url:null,keywords:["Arduino","Endlichen Automaten","Zustandsdiagramm","switch-case","Finite State Machine","State Machine"]},s=void 0,u={unversionedId:"arduino/stateMachine",id:"arduino/stateMachine",isDocsHomePage:!1,title:"Endliche Automaten (Finite State Machine)",description:"Endlichen Automaten (Zustandsdiagramme) mit dem enum Aufz\xe4hlungstyp und der switch-case Anweisung im Arduino realisieren.",source:"@site/docs/arduino/stateMachine.md",sourceDirName:"arduino",slug:"/arduino/stateMachine",permalink:"/docs/arduino/stateMachine",editUrl:null,tags:[],version:"current",lastUpdatedAt:1631966711,formattedLastUpdatedAt:"18.9.2021",frontMatter:{title:"Endliche Automaten (Finite State Machine)",sidebar_label:"10. Endliche Automaten",description:"Endlichen Automaten (Zustandsdiagramme) mit dem enum Aufz\xe4hlungstyp und der switch-case Anweisung im Arduino realisieren.",custom_edit_url:null,keywords:["Arduino","Endlichen Automaten","Zustandsdiagramm","switch-case","Finite State Machine","State Machine"]},sidebar:"sideBarArduino",previous:{title:"9. Arrays (Listen)",permalink:"/docs/arduino/array"},next:{title:"11. PWM Signal",permalink:"/docs/arduino/pwm"}},m=[{value:"Wichtige Begriffe",id:"wichtige-begriffe",children:[],level:2},{value:"Zustandsdiagramm",id:"zustandsdiagramm",children:[],level:2},{value:"Programmiertechniken",id:"programmiertechniken",children:[{value:"<code>enum</code> Aufz\xe4hlungstyp",id:"enum-aufz\xe4hlungstyp",children:[],level:3},{value:"<code>switch-case</code> Verzweigung",id:"switch-case-verzweigung",children:[],level:3},{value:"Arduino-Programmbeispiel",id:"arduino-programmbeispiel",children:[],level:3}],level:2},{value:"Aufgaben",id:"aufgaben",children:[],level:2}],o={toc:m};function p(e){var n=e.components,t=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,i.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Programme oder logische Systeme, welche eine ",(0,r.kt)("strong",{parentName:"p"},"endliche")," Anzahl verschiedener Zust\xe4nde aufweisen und diese nach festgelegten Kriterien \xe4ndern sollen, k\xf6nnen durch ",(0,r.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Endlicher_Automat"},"endliche Automaten")," (auch endliche Zustandsmaschine oder ",(0,r.kt)("em",{parentName:"p"},"finit state machine - FSM"),") modelliert werden. Ein endlicher Automat soll ein Verhalten modellieren, welches auf einer endlichen Anzahl von ",(0,r.kt)("strong",{parentName:"p"},"Zust\xe4nden"),", ",(0,r.kt)("strong",{parentName:"p"},"Aktionen")," und ",(0,r.kt)("strong",{parentName:"p"},"Zustands\xfcberg\xe4ngen")," basiert. "),(0,r.kt)("h2",{id:"wichtige-begriffe"},"Wichtige Begriffe"),(0,r.kt)("p",null,"Im Folgenden werden die Begriffe am Beispiel der ",(0,r.kt)("a",{parentName:"p",href:"/docs/arduino/millis#blinken-mit-millis"},"blinkenden LED mit der millis()-Funktion")," erl\xe4utert:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Zust\xe4nde")," speichern Information bzw. einen Status ab. Im Beispiel der blinkende LED wird daf\xfcr die Variable ",(0,r.kt)("inlineCode",{parentName:"li"},"zustandLED")," verwendet, welche angibt, ob die LED an- oder ausgeschaltet ist. Zust\xe4nde alleine \xe4ndern das System jedoch nicht, daf\xfcr ist immer eine ",(0,r.kt)("em",{parentName:"li"},"Aktion")," notwendig!"),(0,r.kt)("li",{parentName:"ul"},"Durch eine ",(0,r.kt)("strong",{parentName:"li"},"Aktion")," wird der Zustand des endlichen Automaten ge\xe4ndert. Wann ein bestimmter Zustand ge\xe4ndert bzw. angenommen wird, h\xe4ngt von dem System ab. Bei der blinkenden LED wird der Zustand des Automaten mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"li"},"digitalWrite(LED, zustandLED)")," nach der Zeitabfrage ge\xe4ndert."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Zustands\xfcberg\xe4nge")," oder auch ",(0,r.kt)("strong",{parentName:"li"},"Zustands\xe4nderungen")," werden in der Regel durch Programmverzweigungen wie ",(0,r.kt)("inlineCode",{parentName:"li"},"if-else")," oder ",(0,r.kt)("inlineCode",{parentName:"li"},"switch-case")," beschrieben. Sie geben an, unter welchen Bedingungen ein Zustand in einen anderen wechseln soll. Beim Blink-Beispiel gibt es genau zwei Zustands\xe4nderungen: Anschalten und Ausschalten der LED. ")),(0,r.kt)("h2",{id:"zustandsdiagramm"},"Zustandsdiagramm"),(0,r.kt)("p",null,"Mit einem Zustandsdiagramm lassen sich endliche Automaten graphisch darstellen. Das abgebildete Zustandsdiagramm beschreibt den endlichen Automaten f\xfcr die ",(0,r.kt)("a",{parentName:"p",href:"/docs/arduino/millis#blinken-mit-millis"},"blinkende LED"),"."),(0,r.kt)("img",{src:"/img/arduino/Automat.png",alt:"drawing",width:"460pt",class:"center"}),(0,r.kt)("p",null,"In einem Zustandsdiagramm wird das Verhalten eines endlichen Automaten anschaulich dargestellt. Die ",(0,r.kt)("strong",{parentName:"p"},"Zust\xe4nde")," des Automaten werden hierbei mit Kreisen oder abgerundeten Vierecken abgebildet. Jeder Zustand darf nur einmal dargestellt werden."),(0,r.kt)("p",null,"Erlaubte ",(0,r.kt)("strong",{parentName:"p"},"Zustands\xfcberg\xe4nge")," werden mit Pfeilen dargestellt. ",(0,r.kt)("strong",{parentName:"p"},"Aktionen"),", die zu Zustands\xe4nderungen f\xfchren, m\xfcssen nicht unbedingt dargestellt werden, k\xf6nnen aber f\xfcr das Verst\xe4ndnis sehr hilfreich sein. Das Gleiche gilt f\xfcr die Bedingungen, unter welchen der Automat seine Zust\xe4nde \xe4ndert. "),(0,r.kt)("p",null,"Im Allgemeinen gilt, so lange wie es dem Verst\xe4ndnis und der \xdcbersichtlichkeit dient, sollten die Aktionen und die notwendigen Bedingungen vermerkt werden, ansonsten ist darauf zu verzichten."),(0,r.kt)("h2",{id:"programmiertechniken"},"Programmiertechniken"),(0,r.kt)("p",null,"Im Abschnitt ",(0,r.kt)("a",{parentName:"p",href:"/docs/arduino/millis"},"Zeitkritische Aufgaben")," wurde der oben abgebildete Automat mit Hilfe der Variablen ",(0,r.kt)("inlineCode",{parentName:"p"},"int zustandLED")," und der ",(0,r.kt)("inlineCode",{parentName:"p"},"if-else")," Verzweigung programmiert. Bei Automaten mit mehr als nur zwei Zust\xe4nden oder bei geschachtelten Automaten gibt es jedoch einen besseren Ansatz, der das Programm \xfcbersichtlicher und lesbarer macht."),(0,r.kt)("p",null,"Ein etwas komplexerer Automat, welcher im Folgenden programmiert werden soll, l\xe4sst sich mit zwei LEDs erstellen. \xc4hnlich wie bei der blinken LED, wechselt der Automat nach einer vorgegeben Zeitspanne seinen Zustand. Im Zustandsdiagramm sind die vier m\xf6glichen Zust\xe4nde mit den erlaubten Zustands\xfcberg\xe4ngen abgebildet."),(0,r.kt)("img",{src:"/img/arduino/Automat2LEDs.png",alt:"drawing",width:"430pt",class:"center"}),(0,r.kt)("h3",{id:"enum-aufz\xe4hlungstyp"},(0,r.kt)("inlineCode",{parentName:"h3"},"enum")," Aufz\xe4hlungstyp"),(0,r.kt)("p",null,"Das Schl\xfcsselwort ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," erm\xf6glicht die Aufz\xe4hlung von Konstanten. Mit ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," wird ein Aufz\xe4hlungstyp deklariert:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enum LedStates {AUS, LED1, LED12, LED2};  // Typendeklaration (Aufz\xe4hlungstyp)\n")),(0,r.kt)("p",null,"Mit dieser Zeile wird der Aufz\xe4hlungstyp  ",(0,r.kt)("inlineCode",{parentName:"p"},"LedStates")," mit den Konstanten ",(0,r.kt)("inlineCode",{parentName:"p"},"AUS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LED1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LED12"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LED2")," deklariert."),(0,r.kt)("p",null,"Nach dieser Deklaration ist es m\xf6glich, die Variable ",(0,r.kt)("inlineCode",{parentName:"p"},"ledState")," als ",(0,r.kt)("inlineCode",{parentName:"p"},"LedStates"),"-Typ zu deklarieren und ihr den Wert ",(0,r.kt)("inlineCode",{parentName:"p"},"AUS")," zuzuweisen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"LedStates ledState; // Variablendeklaration\nledState = AUS;     // Variablenzuweisung\n")),(0,r.kt)("p",null,"Da der ",(0,r.kt)("inlineCode",{parentName:"p"},"LedStates")," vorher als Aufz\xe4hlungstyp deklariert wurde, kann der Variablen ",(0,r.kt)("inlineCode",{parentName:"p"},"ledState")," nur einer der vorher deklarierten Werte zugewiesen werden. Hier wird der Variablen ",(0,r.kt)("inlineCode",{parentName:"p"},"ledState")," der Wert ",(0,r.kt)("inlineCode",{parentName:"p"},"AUS")," zugewiesen."),(0,r.kt)("p",null,"Wie bei einfachen Variablen kann die Deklaration und die Zuweisung auch in einer Zeile durchgef\xfchrt werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"LedStates ledState  = AUS; // Variablendeklaration und Zuweisung\n")),(0,r.kt)("h3",{id:"switch-case-verzweigung"},(0,r.kt)("inlineCode",{parentName:"h3"},"switch-case")," Verzweigung"),(0,r.kt)("p",null,"\xc4hnlich wie bei der ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," Verzweigung, erm\xf6glicht es die ",(0,r.kt)("a",{parentName:"p",href:"https://www.arduino.cc/reference/de/language/structure/control-structure/switchcase/"},(0,r.kt)("inlineCode",{parentName:"a"},"switch-case")," Verzweigung"),", den Programmablauf in Abh\xe4ngigkeit von verschiedene Bedingungen zu kontrollieren. Besonders geeignet ist die  ",(0,r.kt)("inlineCode",{parentName:"p"},"switch-case")," Verzweigung f\xfcr den Fall, dass viele verschiedene Bedingungen abgefragt werden sollen."),(0,r.kt)("p",null,"Als einfaches Beispiel wird die Variable ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," ausgewertet. F\xfcr den Fall, dass ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," die Werte ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," annimmt, soll das Programm spezielle Anweisungen ausf\xfchren. F\xfcr alle anderen Werte von ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," wird der so genannte Default-Fall ausgef\xfchrt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},'int a = 2;\n\nswitch (a)                      // Nach dem Schl\xfcsselwort folgt in Klammern der auszuwertende Ausdruck\n{\n  case 1:                       // Vergleicht `a` mit dem Wert nach case (hier 1).\n    Serial.println("Fall 1.");        \n    break;                      // Beendet die gesamte Switch-Verzweigung. \n\n  case 2:\n     Serial.println("Fall 2.");  // Da a=2 ist, w\xfcrde der hier stehen Code ausgef\xfchrt werden ...\n    break;\n\n  case 3:\n    Serial.println("Fall 3.");\n    break;\n\n  default:                       // Wenn `a` keinem der aufgef\xfchrten Werte entspricht\n    Serial.println("Alle anderen Zust\xe4nde.");\n}\n')),(0,r.kt)("h3",{id:"arduino-programmbeispiel"},"Arduino-Programmbeispiel"),(0,r.kt)("p",null,"Die ",(0,r.kt)("inlineCode",{parentName:"p"},"switch-case")," Verzweigung eignet sich zusammen mit der ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," Aufz\xe4hlung besonders gut zur Programmierung eines Automaten. Am Beispiel des Automaten mit 2 LEDs soll das Grundprinzip erl\xe4utert werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"#define pinLed1 6  // LED_1\n#define pinLed2 5  // LED_2\n\n// Zust\xe4nde des Automaten als Aufz\xe4hlungstyp deklarieren\nenum LedStates {AUS, LED_1, LED_12, LED_2};\nLedStates ledState = AUS;\n\nunsigned long letzteZeit = 0;  //  Zeitpunkt letzte LED-\xc4nderung\nconst    long intervall  = 500;    // Blinkintervall in ms (Konstante)\n\nvoid setup() {\n  pinMode(pinLed1, OUTPUT);\n  pinMode(pinLed2, OUTPUT);\n} \n\nvoid loop() {\n\n  // Bedingung f\xfcr den Zustands\xfcbergang. Der Automat soll seinen Zustand nur \xe4ndern,\n  // wenn die angegebene Intervall-Zeit \xfcberschritten ist.\n  if (millis() - letzteZeit >= intervall)\n  {\n    letzteZeit = millis();  // Zeitstempel f\xfcr Zeitvergleich\n\n    // Jeder `case` der switch-Verzweigung entspricht dem *alten* Zustand des Automaten\n    // und gibt an, in welchen neuen Zustand gewechselt werden soll. In der case-Anweisung\n    // wird der neue Zustand des Automaten aktualisiert. Der neue Zustand wird sofort\n    // aktiviert, die entsprechenden LEDs werden an oder ausgeschaltet.\n    switch (ledState)\n    {\n      case AUS:                      // aktueller Zustand: AUS\n        ledState = LED_1;            // neuer Zustand des Automaten: LED_1\n        digitalWrite(pinLed1, HIGH); // LED_1 AN\n        digitalWrite(pinLed2, LOW);  // LED_2 AUS\n        break;                       // ohne die break-Anweisung w\xfcrde sofort 'case LED_2' ausgef\xfchrt werden\n\n      case LED_1:                    // aktueller Zustand: LED 1 an\n        ledState = LED_12;\n        digitalWrite(pinLed1, HIGH);\n        digitalWrite(pinLed2, HIGH);\n        break;\n\n      case LED_12:                   // aktueller Zustand: LED 1&2 an\n        ledState = LED_2;\n        digitalWrite(pinLed1, LOW);\n        digitalWrite(pinLed2, HIGH);\n        break;\n\n      case LED_2:                    // aktueller Zustand: LED 2 an\n        ledState = AUS;\n        digitalWrite(pinLed1, LOW);\n        digitalWrite(pinLed2, LOW);\n        break;\n\n        // Der Default-Fall wird nicht ben\xf6tigt, da alle Wert abgefragt werden.\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Automaten und Zustandsdiagramme sind besonders bei der Programmierung von ",(0,r.kt)("strong",{parentName:"p"},"Robotern")," sehr wichtig, da diese ein Vielzahl verschiedener Zust\xe4nde einnehmen k\xf6nnen."),(0,r.kt)("h2",{id:"aufgaben"},"Aufgaben"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,r.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Kopieren Sie des ",(0,r.kt)("a",{parentName:"p",href:"/docs/arduino/stateMachine#arduino-programmbeispiel"},"Beispielprogramm")," und lassen sie es auf Ihrem Arduino mit der entsprechenden Schaltung laufen. Untersuchen Sie, was passiert, wenn einige der ",(0,r.kt)("inlineCode",{parentName:"p"},"break"),"-Anweisung auskommentiert (",(0,r.kt)("inlineCode",{parentName:"p"},"// "),") werden. Wie verh\xe4lt sich dann Ihr Programm?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zeichnen Sie ein Zustandsdiagramm f\xfcr den Automaten mit ",(0,r.kt)("strong",{parentName:"p"},"zwei LEDs,")," bei dem folgende \xdcberg\xe4nge bzw. Zust\xe4nde erlaubt sind. Nach dem letzten Zustand springt der Automat in der ersten Zustand zur\xfcck."),(0,r.kt)("p",{parentName:"li"}," alle Leds ",(0,r.kt)("strong",{parentName:"p"},"aus")," ",(0,r.kt)("span",null,"\u2192")," Led ",(0,r.kt)("strong",{parentName:"p"},"1 an"),", Led 2 aus ",(0,r.kt)("span",null,"\u2192")," alle Leds ",(0,r.kt)("strong",{parentName:"p"},"aus")," ",(0,r.kt)("span",null,"\u2192"),"  Led ",(0,r.kt)("strong",{parentName:"p"},"1&2 an")," ",(0,r.kt)("span",null,"\u2192"),"  alle LEDs ",(0,r.kt)("strong",{parentName:"p"},"aus")," ",(0,r.kt)("span",null,"\u2192")," Led ",(0,r.kt)("strong",{parentName:"p"},"2 an"),", Led 1 aus ",(0,r.kt)("span",null,"\u2192")," . . .")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Schreiben Sie ein Programm f\xfcr den obigen Automaten und testen Sie es an einer entsprechenden Schaltung.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\xc4ndern Sie das Programm f\xfcr den urspr\xfcnglichen ",(0,r.kt)("a",{parentName:"p",href:"/docs/arduino/stateMachine#arduino-programmbeispiel"},"Automaten mit 2 LEDs")," so, dass f\xfcr jeden der vier Zust\xe4nde ein eigenes Zeitintervall (",(0,r.kt)("inlineCode",{parentName:"p"},"dTime1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dTime2"),",...) angegeben werden kann, in welchem er aktiv ist. Oder anders ausgedr\xfcckt, jeder der vier Zust\xe4nde soll unterschiedlich lange aktiv sein.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zeichnen Sie das Zustandsdiagramm f\xfcr eine einfache Autoampel (mit den Bedingungen f\xfcr die Zustands\xfcberg\xe4nge). F\xfcr die Zeiten der einzelnen Ampelphasen gilt:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ROT: 3 Sekunden"),(0,r.kt)("li",{parentName:"ul"},"ROT-GELB: 0.5 Sekunden"),(0,r.kt)("li",{parentName:"ul"},"GR\xdcN: 3 Sekunden"),(0,r.kt)("li",{parentName:"ul"},"GELB: 1 Sekunde")),(0,r.kt)("p",{parentName:"li"},"Bauen Sie anschlie\xdfend eine geeignete Schaltung auf und programmieren Sie mit der ",(0,r.kt)("inlineCode",{parentName:"p"},"switch-case")," Anweisung und dem ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," Datentyp den endlichen Automaten f\xfcr die Ampel.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Entwickeln Sie ein Programm und eine elektrische Schaltung zur Simulation  einer ",(0,r.kt)("strong",{parentName:"p"},"Ampelanlage f\xfcr Fu\xdfg\xe4nger")," (eine Fu\xdfg\xe4ngerampel ",(0,r.kt)("inlineCode",{parentName:"p"},"FA")," und eine Ampel f\xfcr PKWs ",(0,r.kt)("inlineCode",{parentName:"p"},"PA"),"). \xc4hnlich wie  bei ",(0,r.kt)("em",{parentName:"p"},"echten")," Ampelanlagen f\xfcr Fu\xdfg\xe4nger, darf die Fu\xdfg\xe4ngerampel erst nach dem Bet\xe4tigen eines Tasters (",(0,r.kt)("em",{parentName:"p"},"Anforderung durch einen Fu\xdfg\xe4nger"),") und einer gewissen Wartezeit auf Gr\xfcn umschalten.  Beachten Sie bei der Bearbeitung der Aufgabe folgende Punkte:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Erstellen Sie ein ",(0,r.kt)("strong",{parentName:"li"},"vollst\xe4ndiges Zustandsdiagramm")," f\xfcr beide Ampeln. Recherchieren Sie die m\xf6glichen Zust\xe4nde der Ampeln und benennen Sie diese sinnvoll (",(0,r.kt)("inlineCode",{parentName:"li"},"FArot"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"FAgruen"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PArot"),", ...). Geben Sie im Zustandsdiagramm alle Zust\xe4nde und Bedingungen f\xfcr die Zustands\xfcberg\xe4nge korrekt an."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Entwickeln Sie eine Schaltung")," f\xfcr die Ampelanlage. ",(0,r.kt)("strong",{parentName:"li"},"Zeichnen Sie Ihre Schaltung auf")," und bauen Sie sie anschlie\xdfend auf dem Steckbrett auf. Vergessen Sie nicht den Taster f\xfcr die Fu\xdfg\xe4ngeranforderung."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Schreiben Sie ein Programm"),", welches ihr Zustandsdiagramm umsetzt. Verwenden Sie die ",(0,r.kt)("inlineCode",{parentName:"li"},"switch-case"),"-Anweisung.")))))))}p.isMDXComponent=!0}}]);