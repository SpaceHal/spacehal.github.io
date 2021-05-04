(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[2226],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return c}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(t),c=i,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||r;return t?a.createElement(k,l(l({ref:n},s),{},{components:t})):a.createElement(k,l({ref:n},s))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6009:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return d},default:function(){return s}});var a=t(2122),i=t(9756),r=(t(7294),t(3905)),l={title:"Programmiertechniken - Variablen",sidebar_label:"3. Variablen"},o={unversionedId:"arduino/variable",id:"arduino/variable",isDocsHomePage:!1,title:"Programmiertechniken - Variablen",description:"In der Informatik sind Variablen eine Art Platzhalter oder Container f\xfcr Daten und Informationen. Der Inhalt einer Variablen kann sich jederzeit \xe4ndern. Um eine Variable nutzen zu k\xf6nnen, muss im Programmcode f\xfcr jede Variable der Variablenname und der Datentyp (ob es sich um einen Text, Zahl, Buchstabe, etc. handelt) festgelegt werden. Diese Festlegung der Eigenschaften einer Variablen wird Deklaration bzw. Variablendeklaration genannt (von declarare lat. bekannt machen, bezeichnen).",source:"@site/docs/arduino/variable.md",sourceDirName:"arduino",slug:"/arduino/variable",permalink:"/docs/arduino/variable",editUrl:"https://spacehal.github.io/docs/arduino/variable.md",version:"current",sidebar_label:"3. Variablen",frontMatter:{title:"Programmiertechniken - Variablen",sidebar_label:"3. Variablen"},sidebar:"sideBarArduino",previous:{title:"Debuggen mit der seriellen Schnittstelle",permalink:"/docs/arduino/seriell"},next:{title:"Programmiertechniken - Schleifen",permalink:"/docs/arduino/loop"}},d=[{value:"Variablenname",id:"variablenname",children:[]},{value:"Datentyp",id:"datentyp",children:[{value:"Zusammenfassung einiger Datentypen",id:"zusammenfassung-einiger-datentypen",children:[]},{value:"Beispiele Deklaration",id:"beispiele-deklaration",children:[]}]},{value:"Zuweisung und Initialisierung",id:"zuweisung-und-initialisierung",children:[]},{value:"Einfache Rechenoperationen",id:"einfache-rechenoperationen",children:[]},{value:"G\xfcltigkeitsbreich (Scope)",id:"g\xfcltigkeitsbreich-scope",children:[{value:"Beispiel",id:"beispiel",children:[]}]},{value:"Aufgaben",id:"aufgaben",children:[]}],p={toc:d};function s(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In der Informatik sind ",(0,r.kt)("strong",{parentName:"p"},"Variablen")," eine Art Platzhalter oder Container f\xfcr Daten und Informationen. Der Inhalt einer Variablen kann sich jederzeit \xe4ndern. Um eine Variable nutzen zu k\xf6nnen, muss im Programmcode f\xfcr jede Variable der ",(0,r.kt)("strong",{parentName:"p"},"Variablenname")," und der ",(0,r.kt)("strong",{parentName:"p"},"Datentyp")," (ob es sich um einen Text, Zahl, Buchstabe, etc. handelt) festgelegt werden. Diese Festlegung der Eigenschaften einer Variablen wird ",(0,r.kt)("strong",{parentName:"p"},"Deklaration")," bzw. ",(0,r.kt)("strong",{parentName:"p"},"Variablendeklaration")," genannt (von ",(0,r.kt)("a",{parentName:"p",href:"https://de.langenscheidt.com/latein-deutsch/declarare"},(0,r.kt)("em",{parentName:"a"},"declarare"))," lat. bekannt machen, bezeichnen)."),(0,r.kt)("h2",{id:"variablenname"},"Variablenname"),(0,r.kt)("p",null,"Der ",(0,r.kt)("strong",{parentName:"p"},"Variablenname")," soll immer beschreiben, welche Funktion oder welchen Inhalt eine Variable hat. Es ist sinnvoll, f\xfcr Variablen Begriffe wie ",(0,r.kt)("inlineCode",{parentName:"p"},"wertSensorLinks")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"pinRoteLED")," zu verwenden."),(0,r.kt)("p",null,"Variablennamen sollten immer mit einem Kleinbuchstaben beginnen. Die Nutzung eines Unterstrichs zum Trennen einzelner W\xf6rter sollte vermieden werden. Stattdessen kann zur verbesserten Lesbarkeit bei zusammengesetzten  W\xf6rtern die Gro\xdfschreibung verwendet werden. Statt ",(0,r.kt)("inlineCode",{parentName:"p"},"zustand_motor_links")," sollte die Variable besser ",(0,r.kt)("inlineCode",{parentName:"p"},"zustandMotorLinks")," genannt werden."),(0,r.kt)("h2",{id:"datentyp"},"Datentyp"),(0,r.kt)("p",null,"Variablen k\xf6nnen f\xfcr viele verschiedene Datentypen festgelegt werden. Der ",(0,r.kt)("strong",{parentName:"p"},"Datentyp")," gibt an, ob die Variable z.B. Zahlen oder Buchstaben beinhalten kann. "),(0,r.kt)("p",null,"Die wichtigsten Datentypen beim Arduino:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool"),": Speichert nur die ",(0,r.kt)("strong",{parentName:"li"},"logischen Zust\xe4nde")," bzw. Werte ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," (1) oder ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," (0), also wahr oder falsch ab."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"char"),": Zum Speichern ",(0,r.kt)("strong",{parentName:"li"},"einzelner Buchstabe"),"n wird der Datentyp ",(0,r.kt)("inlineCode",{parentName:"li"},"char")," verwendet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"long"),": Gelten f\xfcr ",(0,r.kt)("strong",{parentName:"li"},"ganzahlige Werte"),", wobei ",(0,r.kt)("inlineCode",{parentName:"li"},"int")," einen deutlich kleineren Wertebereich hat (-32.768 bis 32.767)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsigned int")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"unsigned long"),": \xc4hnlich wie ",(0,r.kt)("inlineCode",{parentName:"li"},"int")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"long"),", allerdings k\xf6nnen nur ",(0,r.kt)("strong",{parentName:"li"},"positive ganzzahlige Werte")," gesspeichert werden. Dadurch verdoppelt sich der Wertebereich der positiven Zahlen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"float")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"double"),": Werden f\xfcr ",(0,r.kt)("strong",{parentName:"li"},"Flie\xdfkommazahlen")," (als Dezimalbr\xfcche mit festgelegter Genauigkeit) verwendet. ",(0,r.kt)("inlineCode",{parentName:"li"},"double")," wei\xdft ein deutliche h\xf6here Genauigkeit auf, ben\xf6tigt allerddings auch dppelt soviel Speicher wie ",(0,r.kt)("inlineCode",{parentName:"li"},"float"),".")),(0,r.kt)("h3",{id:"zusammenfassung-einiger-datentypen"},"Zusammenfassung einiger Datentypen"),(0,r.kt)("p",null,"Die Gr\xf6\xdfe der aufgelisteten Datentypen gilt nur bei einigen Arduino-Boards (Arduino-Uno, Arduino-Nano, ...)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Datentyp"),(0,r.kt)("th",{parentName:"tr",align:"center"},"kleinster Wert"),(0,r.kt)("th",{parentName:"tr",align:"center"},"gr\xf6\xdfter Wert"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Gr\xf6\xdfe in Bit"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Anmerkungen"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"false (0)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true (1)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"8"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-32.768"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32.767"),(0,r.kt)("td",{parentName:"tr",align:"center"},"16"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unsigned int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"65535"),(0,r.kt)("td",{parentName:"tr",align:"center"},"16"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"nur positive Werte"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-2.147.483.648"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2.147.483.647"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unsigned long")),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4.294.967.295"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"nur positive Werte"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"3,4E-38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3,4E+38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Flie\xdfkommazahlen"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"double")),(0,r.kt)("td",{parentName:"tr",align:"center"},"1,7E-308"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1,7E+308"),(0,r.kt)("td",{parentName:"tr",align:"center"},"64"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Flie\xdfkommazahlen"))))),(0,r.kt)("p",null,"Oft werden auch ",(0,r.kt)("a",{parentName:"p",href:"https://de.wikibooks.org/wiki/C-Programmierung_mit_AVR-GCC/_Datentypen"},"alternative Datentypen")," benutzt, die die Kompatibilit\xe4t  mit verschiedenen Mikrocontrollern verbessern sollen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uint8_t")," , ",(0,r.kt)("inlineCode",{parentName:"li"},"uint16_t"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32_t"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"uint64_t"),": Speichern positive ganzzahlige Werte mit der angegeben Bitbreite (8, 16, 32, 64 bit)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int8_t")," , ",(0,r.kt)("inlineCode",{parentName:"li"},"int16_t"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"int32_t"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"int64_t"),": Speichert positive und negative ganzzahlige Werte mit der angegeben Bitbreite (8, 16, 32, 64 bit)")),(0,r.kt)("h3",{id:"beispiele-deklaration"},"Beispiele Deklaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int pinRoteLed;   // Die Variable kann nur ganzzahlige Werte annehmen\nfloat fehlerwert; // Die Variable kann auch eine Flie\xdfkommazahl (Dezimalbruch) sein.\n")),(0,r.kt)("h2",{id:"zuweisung-und-initialisierung"},"Zuweisung und Initialisierung"),(0,r.kt)("p",null,"Nachdem eine Variable ",(0,r.kt)("strong",{parentName:"p"},"deklariert")," wurde, ist es m\xf6glich, ihr auch einen ",(0,r.kt)("strong",{parentName:"p"},"Wert zuzuweisen"),". Zuweisungen werden mit dem ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," Operator durchgef\xfchrt. Auch wenn es nicht immer ganz offensichtlich ist, sollte der  ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," Operator nicht mit dem Gleichheitszeichen (=) in der Mathematik verwechselt werden. Das Gleichheitszeichen dr\xfcckt aus, dass etwas ",(0,r.kt)("strong",{parentName:"p"},"gleich ist"),". Der Zuweisungs-Operator ",(0,r.kt)("strong",{parentName:"p"},"weist")," der Variablen einen Wert ",(0,r.kt)("strong",{parentName:"p"},"zu"),". Dieser Unterschied wird sp\xe4ter wichtig, wenn Vergleichsoperatoren wie zum Beispiel ",(0,r.kt)("inlineCode",{parentName:"p"},"==")," verwendet werden."),(0,r.kt)("p",null,"Zuweisungen k\xf6nnen getrennt von der Variablendeklaration durchgef\xfchrt werden. Wird einer Variablen das erste Mal ein Wert zugewiesen, spricht man auch von der ",(0,r.kt)("strong",{parentName:"p"},"Initialisierung")," der Variablen. Bevor eine Variable initialisiert wurde,  ist der Wert der Variablen unbekannt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int auszeitRoteLed;    // Variablendeklaration (Wert der Variable ist unbekannt)\nauszeitRoteLed = 1000; // Zuweisung und Initialisierung\n\nauszeitRoteLed = 300;  // eine erneute Zuweisung \xfcberschreibt die Variable mit einem neuen Wert\n")),(0,r.kt)("p",null,"Da jede Variable deklariert und auch initialisiert werden muss, kann das auch in einer Programmzeile gemacht werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"float fehlerWert  = 3.1415; // Deklaration und erst Zuweisung, also Initialisierung in einer Zeile.\nint pinLED        = 12;     // Initialisierung eines Integer-Wertes\nchar einBuchstabe = `b`;    // Initialisierung eines char-Datentypes.\n")),(0,r.kt)("h2",{id:"einfache-rechenoperationen"},"Einfache Rechenoperationen"),(0,r.kt)("p",null,"Mit Variablen k\xf6nnen nicht nur Werte gespeichert werden, sondern mit ihnen k\xf6nnen auch verschiedene Rechnoperationen (z.B. Adition ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),", Subtraktion ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),", Mulitplikation ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),", Division ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),") durchgef\xfchrt werden. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int a = 6;\nint b = 3;\nint c;\n\nc = a - b; //  c: 3\nc = a + b; //  c: 9\nc = a * b; //  c: 18\nc = a / b; //  c: 2\n")),(0,r.kt)("p",null,"Nicht immer soll das Ergbenis einer Rechenoperation in einer ",(0,r.kt)("em",{parentName:"p"},"neuen")," Variable gespeichert werden. In diesem Fall kann das Ergebnis auch direkt den alten Wert der Variablen \xfcberschreiben."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int i = 1;\ni = i + 1; // i: 2\n\nint a = 6;\ni = i + 6; // i: 2 + 6 = 8\n")),(0,r.kt)("h2",{id:"g\xfcltigkeitsbreich-scope"},"G\xfcltigkeitsbreich (Scope)"),(0,r.kt)("p",null,"Kann auf eine Variable im gesamten Programm zu gegriffen werden, handelt es sich um eine ",(0,r.kt)("strong",{parentName:"p"},"globale Variable"),". Existiert eine Variabel nur in Teilen des Programms, handelt es sich um ",(0,r.kt)("strong",{parentName:"p"},"lokale Variablen")),(0,r.kt)("p",null,"Ob ein Variable global oder lokal ist, h\xe4ngt davon ab, wo sie deklariert wurde."),(0,r.kt)("h4",{id:"lokale-variablen"},"Lokale Variablen"),(0,r.kt)("p",null,"Variablen, die in einem Programmabschnitt deklariert wurden, der durch zwei geschweifte Klammern ",(0,r.kt)("inlineCode",{parentName:"p"},"{ ... }")," begrenzt ist, sind lokale Variablen. Bisher kennen sie nur die ",(0,r.kt)("inlineCode",{parentName:"p"},"void loop()")," bzw. ",(0,r.kt)("inlineCode",{parentName:"p"},"void setup()")," Funktionen, welche einen durch geschweifte Klammern begrenzten Bereich aufweisen. Deklarieren Sie also eine Variable innerhalb dieser Funktionen, existieren Sie auch nur innerhalb dieser Funktionen. Wird die Funktion beendet, verschwindet auch die Variable."),(0,r.kt)("p",null,"Lokale Variablen sollten immer mit einem kleinen ",(0,r.kt)("inlineCode",{parentName:"p"},"l")," beginen: ",(0,r.kt)("inlineCode",{parentName:"p"},"lMessWert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lZaehler"),"."),(0,r.kt)("h4",{id:"globale-variablen"},"Globale Variablen"),(0,r.kt)("p",null,"Wird eine Variable au\xdferhalb von geschweiften Klammern ",(0,r.kt)("inlineCode",{parentName:"p"},"{ ... }")," deklariert, so ist die Variable global. Sie wird solange existieren, wie das Programm l\xe4uft und es kann aus dem gesamten Programmcode darauf zugegriffen werden."),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="variablen.ino"',title:'"variablen.ino"'},'int pinLed = 12; // globale Variable\nint zaehlerGlobal = 0;\nfloat test;\n\nvoid setup(){ // Geschweifte Klammern geben einen G\xfcltigkeitsbereich (Scope) an.\n  int lZahlerSetup = 0;    // Lokale Variable\n  pinMode(pinLed,OUTPUT); // kann die globale Variable pinLed nutzen\n  Serial.begin(9600);\n}\n\nvoid loop(){ \n  int lZahlerLoop = 0;\n\n  zaehlerGlobal  = zaehlerGlobal + 1;\n  //lZahlerSetup   = lZahlerSetup  + 1;  // FEHLER: zahlerSetup existiert hier nicht\n  lZahlerLoop    = lZahlerLoop   + 1;\n\n  Serial.print("zaehlerGlobal: ");\n  Serial.print(zaehlerGlobal);           // zaehlerGlobal: 1, 2, 3, ...\n  Serial.print(", lZahlerLoop: ");\n  Serial.println(lZahlerLoop);           // lZahlerLoop:   1, 1, 1, ... (lZahlerLoop wird immer wieder neu initialisiert.)\n}\n')),(0,r.kt)("h2",{id:"aufgaben"},"Aufgaben"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,r.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Erl\xe4utern Sie den Unterschied zwischen einer ",(0,r.kt)("strong",{parentName:"li"},"Deklaration"),", einer ",(0,r.kt)("strong",{parentName:"li"},"Zuweisung")," und ein ",(0,r.kt)("strong",{parentName:"li"},"Initialisierung")," einer Variablen. Geben Sie jeweils ein Beispiel an."),(0,r.kt)("li",{parentName:"ol"},"Mit welchen Datentypen l\xe4sst sich die Zahl ",(0,r.kt)("inlineCode",{parentName:"li"},"42465")," speichern."),(0,r.kt)("li",{parentName:"ol"},"Lassen Sie mit dem seriellen Monitor und ",(0,r.kt)("inlineCode",{parentName:"li"},"Serial.println()")," fortlaufend alle durch 8 teilbaren Zahlen ausgeben.")))))}s.isMDXComponent=!0}}]);