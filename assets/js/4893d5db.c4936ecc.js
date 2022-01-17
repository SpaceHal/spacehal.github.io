"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[8690],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),u=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=u(e.components);return i.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||a;return t?i.createElement(h,l(l({ref:n},o),{},{components:t})):i.createElement(h,l({ref:n},o))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<a;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3959:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return o},default:function(){return p}});var i=t(3117),r=t(102),a=(t(7294),t(3905)),l=["components"],s={title:"Entprellen eines Tasters",sidebar_label:"8. Taster entprellen",description:"Wie wird ein Taster mit einem Arduino entprellt? Einfache Beispiele mit Pseudo-Code zum Entprellen mit und ohne der millis()-Funktion.",custom_edit_url:null,keywords:["Arduino","Entprellen","Taster","Taster entprellen","Taster entprellen mit millis()","Pullup","Pulldown","Debouncing","millis()","Umschalten","delay()"]},d=void 0,u={unversionedId:"arduino/debounce",id:"arduino/debounce",title:"Entprellen eines Tasters",description:"Wie wird ein Taster mit einem Arduino entprellt? Einfache Beispiele mit Pseudo-Code zum Entprellen mit und ohne der millis()-Funktion.",source:"@site/docs/arduino/debounce.md",sourceDirName:"arduino",slug:"/arduino/debounce",permalink:"/docs/arduino/debounce",editUrl:null,tags:[],version:"current",lastUpdatedAt:1641119333,formattedLastUpdatedAt:"2.1.2022",frontMatter:{title:"Entprellen eines Tasters",sidebar_label:"8. Taster entprellen",description:"Wie wird ein Taster mit einem Arduino entprellt? Einfache Beispiele mit Pseudo-Code zum Entprellen mit und ohne der millis()-Funktion.",custom_edit_url:null,keywords:["Arduino","Entprellen","Taster","Taster entprellen","Taster entprellen mit millis()","Pullup","Pulldown","Debouncing","millis()","Umschalten","delay()"]},sidebar:"sideBarArduino",previous:{title:"7. Zeitkritische Aufgaben",permalink:"/docs/arduino/millis"},next:{title:"9. Arrays (Listen)",permalink:"/docs/arduino/array"}},o=[{value:"Prellen eines Tasters",id:"prellen-eines-tasters",children:[],level:2},{value:"Entprellen (debouncing)",id:"entprellen-debouncing",children:[{value:"Einfaches (blockierendes) Entprellen",id:"einfaches-blockierendes-entprellen",children:[],level:3},{value:"Pseudocode (nicht blockierend mit <code>millis()</code>)",id:"pseudocode-nicht-blockierend-mit-millis",children:[],level:3}],level:2},{value:"Bounce2-Bibliothek zum Entprellen",id:"bounce2-bibliothek-zum-entprellen",children:[],level:2},{value:"Links",id:"links",children:[],level:2}],c={toc:o};function p(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wird ein einfacher Taster als ",(0,a.kt)("a",{parentName:"p",href:"/docs/arduino/input#ein-taster-zum-umschalten"},"Umschalter"),", zum Beispiel zum An- und Ausschalten einer LED verwendet, kann es passieren, dass beim einmaligen Bet\xe4tigen scheinbar zuf\xe4llig manchmal geschaltet und manchmal nicht geschaltet wird. "),(0,a.kt)("p",null,"Die Ursache f\xfcr dieses scheinbar willk\xfcrliche Verhalten wird als Prellen (engl. ",(0,a.kt)("em",{parentName:"p"},"bouncing"),") bezeichnet. Beim Dr\xfccken des Tasters \xe4ndert sich der Zustand am Eingangspin nicht nur einmal, sondern gelegentlich auch \xf6fter. \xc4hnlich wie ein Lineal, welches auf einen Tisch geschlagen wird, springen die Kontakte eines Tasters beim Bet\xe4tigen f\xfcr einen kurzen Moment hin und her. Dies f\xfchrt zu ungewollten, sich schnell \xe4ndernden Spannungszust\xe4nden am Eingangspin. Werden diese schnellen Zustands\xe4nderungen verarbeitet, so scheint es, dass beim Bet\xe4tigen des Tasters nichts passiert, obwohl in Wahrheit vielleicht angeschaltet und gleich danach wieder ausgeschaltet wurde."),(0,a.kt)("p",null,"Mit einem geeigneten Code k\xf6nnen Taster entprellt werden, damit sie beim Bet\xe4tigen auch wirklich nur einmal schalten. "),(0,a.kt)("h2",{id:"prellen-eines-tasters"},"Prellen eines Tasters"),(0,a.kt)("img",{src:"/img/arduino/debounce.png",alt:"drawing",width:"340px",className:"center"}),(0,a.kt)("p",null,"In der oben stehenden Abbildung ist schematisch der Verlauf der Spannung bei einem LOW-aktiven Taster (Signalpegel LOW beim Dr\xfccken) dargestellt. Wird der Taster gedr\xfcckt, so f\xe4llt die Spannung am Eingangspin zuerst auf 0 V ab, springt jedoch gleich darauf wieder auf einen h\xf6heren Spannungswert. Wu\u0308rde jeder Zustandswechsel von ",(0,a.kt)("inlineCode",{parentName:"p"},"HIGH")," auf ",(0,a.kt)("inlineCode",{parentName:"p"},"LOW")," zum Umschalten der LED f\xfchren, so wa\u0308re bei einem prellenden Schalter nicht vorhersehbar, ob die LED zum Schluss an- oder ausgeschaltet ist."),(0,a.kt)("h2",{id:"entprellen-debouncing"},"Entprellen (debouncing)"),(0,a.kt)("p",null,"Ein Taster ist entprellt, wenn die schnellen ungewollten Zustands\xe4nderungen w\xe4hrend des Dr\xfcckens eines Tasters ignoriert wurden. Wird also am Tasterpin eine ",(0,a.kt)("strong",{parentName:"p"},"erste Zustands\xe4nderung")," detektiert, m\xfcssen fu\u0308r eine vorgegebene Zeit (Prellzeit) alle folgenden ",(0,a.kt)("strong",{parentName:"p"},"unerw\xfcnschten Zustands\xe4nderungen ignoriert")," werden. Da die meisten Taster nur in einem Zeitbereich ","\\","(\\Delta t","\\",") von ca. 30 ms prellen, sollte ein Prellzeit von 30 ms ausreichen. "),(0,a.kt)("p",null,"Anschlie\xdfend muss der ",(0,a.kt)("strong",{parentName:"p"},"Zustand des Tasters erneut eingelesen")," werden. Entspricht der Zustand dem nach der ersten Zustand\xe4nderung (",(0,a.kt)("em",{parentName:"p"},"im Beispiel also LOW"),"), dann wurde der Taster erfolgreich entprellt."),(0,a.kt)("h3",{id:"einfaches-blockierendes-entprellen"},"Einfaches (blockierendes) Entprellen"),(0,a.kt)("p",null,"Die einfachste, wenn auch nicht beste L\xf6sung, um einen Taster zu entprellen, kann durch eine einfache blockierende Programmverz\xf6gerung mit der ",(0,a.kt)("inlineCode",{parentName:"p"},"delay()"),"-Funktion realisiert werden."),(0,a.kt)("p",null,"Im folgenden Beispiel wird die ",(0,a.kt)("strong",{parentName:"p"},"fallende Flanke")," des Tasterpins, als der \xdcbergang von ungedr\xfcckt ",(0,a.kt)("inlineCode",{parentName:"p"},"HIGH")," zu gedr\xfcckt ",(0,a.kt)("inlineCode",{parentName:"p"},"LOW")," entprellt und zum Umschalten einer LED verwendet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino",metastring:'title="entprellenMitDelay.ino"',title:'"entprellenMitDelay.ino"'},"// Ein sehr einfaches Beispiel zum Entprellen eines Tasters und Umschalten einer LED.\n// Dieses Beispiel blockiert den MC w\xe4hrend des Entprellens.\n\n#define BUTTON 12                        // an Schaltung anpassen\n#define LED 3                            // an Schaltung anpassen\n\nint stateButton      = HIGH;             // aktueller Status des Taster-PINs\nint stateButtonLast  = HIGH;             // Status des Taster-PINs vor der letzten \xdcberpr\xfcfung\nint stateLED         = LOW;              // Status der LED (an oder aus)\n\nvoid umschaltenLED(int pPin){\n  stateLED = !stateLED;                  // LED-Status umschalten\n  digitalWrite(pPin, stateLED);          // LED-Status aktualisieren\n}\n\nvoid setup() {\n  pinMode(BUTTON, INPUT_PULLUP);         // Tasterpin mit Pull-Up-Widerstand konfigurieren\n  pinMode(LED, OUTPUT);\n}\n\nvoid loop() {\n  stateButton = digitalRead(BUTTON);     // aktuellen Zustand des Tasters bestimmen\n\n  // Ist Taster gedr\xfcckt ( stateButton == 0 ) UND war er vorher nicht gedr\xfcckt (stateButtonLast == 1)\n  if ((stateButton == 0) && (stateButtonLast == 1))\n  {\n    delay(30);                           // 30 ms warten, um falsche Zustands\xe4nderungen zu ignorieren\n    stateButton = digitalRead(BUTTON);   // Zustand des Taster \xfcberpr\xfcfen\n    if (stateButton == 0) {              // Ist der Taster immer noch gedr\xfcckt?\n      umschaltenLED(LED);                \n    }\n  }\n  stateButtonLast = stateButton;         // alten Wert des Tasters speichern\n}\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Hinweis:")," Das Zeichen ",(0,a.kt)("inlineCode",{parentName:"p"},"!")," ist das Negationszeichen und bedeutet ",(0,a.kt)("em",{parentName:"p"},"nicht"),". Der Ausdruck ",(0,a.kt)("inlineCode",{parentName:"p"},"stateLED = !stateLED;")," negiert also den Wert von ",(0,a.kt)("inlineCode",{parentName:"p"},"stateLED")," (aus 0 wird 1 und aus 1 wird 0)."))),(0,a.kt)("h3",{id:"pseudocode-nicht-blockierend-mit-millis"},"Pseudocode (nicht blockierend mit ",(0,a.kt)("inlineCode",{parentName:"h3"},"millis()"),")"),(0,a.kt)("p",null,"Der Nachteil des obigen Codes zum Entprellen ist, dass der Programmablauf durch die ",(0,a.kt)("inlineCode",{parentName:"p"},"delay()")," Funktion blockiert wird. Ein nichtblockierendes Entprellen l\xe4sst sich mit der ",(0,a.kt)("inlineCode",{parentName:"p"},"millis()")," Funktion realisieren."),(0,a.kt)("p",null,"Der folgende ",(0,a.kt)("strong",{parentName:"p"},"unvollst\xe4ndige")," Programmcode zum Entprellen eines Tasters mit der ",(0,a.kt)("inlineCode",{parentName:"p"},"millis()"),"-Funktion zeigt beispielhaft, wie das Dr\xfccken eines Tasters (nicht das Loslassen) entprellt werden kann."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"// Unvollst\xe4ndiger Code zum Entprellen eines Tasters und umschalten einer LED\n\n#define BUTTON 0                    // an Schaltung anpassen\n#define LED 13                      // an Schaltung anpassen\n\nbool entprellen      = false;\nint stateButton      = HIGH;        // aktueller  Status des Tasters\nint stateButtonLast  = HIGH;        // letzter  Status des Tasters\nint stateLED         = LOW;         // Status der LED (an oder aus)\n\nunsigned long entprellZeit = 30;    // in ms\nunsigned long zeitTaster = 0;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(BUTTON, INPUT_PULLUP);    // interner Pull-Up-Widerstand\n  pinMode(LED, OUTPUT);\n}\n\nvoid loop() {\n  stateButton = digitalRead(BUTTON); // Taster-Pin einlesen\n\n  // Wurde der Taster gedr\xfcckt?\n  if ((stateButton == 0) && (stateButtonLast == 1)) {\n\n    // Zeitstempel zum Entprellen zur\xfccksetzen und merken, dass\n    // beim n\xe4chsten Durchlauf enprellt werden muss:\n    zeitTaster = millis();\n    entprellen = true;\n  }\n\n  // Die Zustands\xe4nderung wurde bereits erkannt, jetzt wird entprellt:\n  if (entprellen)\n  {\n    /*                PSEUDOCODE zum Entprellen\n      --------------------------------------------------------\n      WENN (Zeit seit letzter \xc4nderung am Pin > entprellZeit)\n      {\n        WENN (Taster immer noch gedr\xfcckt)\n        {\n          - stateLED umschalten\n          - entprellen beenden\n        }\n      }\n      --------------------------------------------------------\n    */\n  }\n  stateButtonLast = stateButton;      // alten Tasterzustand speichern\n  digitalWrite(LED, stateLED);        // LED-Status aktualisieren\n}\n")),(0,a.kt)("details",{className:"ueben"}," ",(0,a.kt)("summary",null,"Aufgaben"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Erl\xe4utern")," Sie, warum nach der Prellzeit der Zustand des Tasters \xfcberpr\xfcft werden muss."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Vervollst\xe4ndigen")," Sie den nicht blockierenden ",(0,a.kt)("strong",{parentName:"li"},"Code zum Entprellen")," eines Tasters. Beim Bet\xe4tigen des Tasters soll eine angeschlossene LED an- bzw. ausgeschaltet werden (toggeln)."),(0,a.kt)("li",{parentName:"ol"},"Bauen Sie eine Schaltung mit ",(0,a.kt)("strong",{parentName:"li"},"4 gleichfarbigen LEDs und einem Taster")," auf. Zu Beginn leuchtet nur die erste LED. Beim ersten Bet\xe4tigen des Taster soll die zweite LED aufleuchten und alle anderen LEDs aus sein. Wird der Taster ein weiteres Mal bet\xe4tigt, so soll die 3. LED aufleuchten, danach die 4. LED und so weiter. Verwenden Sie einen geeigneten ",(0,a.kt)("strong",{parentName:"li"},"Automaten"),"."),(0,a.kt)("li",{parentName:"ol"},"Bauen Sie eine Schaltung mit zwei LEDs und zwei Tastern auf. Schreiben Sie ein Programm, das jede LED mit einem einzelnen Taster an und ausschalten l\xe4sst (Taster 1 schaltet nur LED 1 und Taster 2 schaltet nur LED 2). Achten Sie darauf die Taster zu entprellen."))),(0,a.kt)("h2",{id:"bounce2-bibliothek-zum-entprellen"},"Bounce2-Bibliothek zum Entprellen"),(0,a.kt)("p",null,"Mit der Arduino-Bibliothek ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/thomasfredericks/Bounce2"},"bounce2"))," kann das Entprellen stark vereinfacht werden. Die Dokumentation findet sich ",(0,a.kt)("a",{parentName:"p",href:"http://thomasfredericks.github.io/Bounce2/files/index.html"},"hier"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"// This example toggles the debug LED (pin 13) on or off\n// when a button on pin 2 is pressed.\n\n// Include the Bounce2 library found here :\n// https://github.com/thomasfredericks/Bounce2\n#include <Bounce2.h>\n\n#define BUTTON_PIN 2\n#define LED_PIN 13\nint ledState = LOW;\n\nBounce debouncer = Bounce(); // Instantiate a Bounce object\n\nvoid setup() {\n  debouncer.attach(BUTTON_PIN,INPUT_PULLUP); // Attach the debouncer to a pin with INPUT_PULLUP mode\n  debouncer.interval(25); // Use a debounce interval of 25 milliseconds\n  \n  pinMode(LED_PIN,OUTPUT); // Setup the LED\n  digitalWrite(LED_PIN,ledState);\n}\n\nvoid loop() {\n   debouncer.update();               // Update the Bounce instance. Should be called only once per loop().\n   \n   if ( debouncer.fell() ) {         // Call code if button transitions from HIGH to LOW\n     ledState = !ledState;           // Toggle LED state\n     digitalWrite(LED_PIN,ledState); // Apply new LED state\n   }\n}\n\n")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=e1-kc04jSE4"},"Debounce a Switch (Circuit) - Video")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.skillbank.co.uk/arduino/switchbounce.htm"},"Using digital inputs: Switch bounce and solutions to it")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/thomasfredericks/Bounce2"},"Arduino Library Bounce2")),(0,a.kt)("li",{parentName:"ul"},"Die ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/LennartHennigs/Button2"},"Button2-Bibliothek")," ist deutlich umfangreicher als die Bounce2 Bibliothek und erm\xf6glicht das Arbeit mit Eventhandlern f\xfcr verschiedene Taster-Events wie ",(0,a.kt)("em",{parentName:"li"},"Click"),", ",(0,a.kt)("em",{parentName:"li"},"LongClick"),", ",(0,a.kt)("em",{parentName:"li"},"DoubleClick"),", ",(0,a.kt)("em",{parentName:"li"},"TripleClick"),".")))}p.isMDXComponent=!0}}]);