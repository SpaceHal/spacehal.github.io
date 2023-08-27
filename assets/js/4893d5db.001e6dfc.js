"use strict";(self.webpackChunkspacehale=self.webpackChunkspacehale||[]).push([[8690],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),u=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},o=function(e){var n=u(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return t?r.createElement(h,s(s({ref:n},o),{},{components:t})):r.createElement(h,s({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={title:"Entprellen eines Tasters",sidebar_label:"Taster entprellen",description:"Wie wird ein Taster mit einem Arduino entprellt? Einfache Beispiele mit Pseudo-Code zum Entprellen mit und ohne der millis()-Funktion.",custom_edit_url:null,keywords:["Arduino","Entprellen","Taster","Taster entprellen","Taster entprellen mit millis()","Pullup","Pulldown","Debouncing","millis()","Umschalten","delay()"]},s=void 0,l={unversionedId:"arduino/debounce",id:"arduino/debounce",title:"Entprellen eines Tasters",description:"Wie wird ein Taster mit einem Arduino entprellt? Einfache Beispiele mit Pseudo-Code zum Entprellen mit und ohne der millis()-Funktion.",source:"@site/docs/arduino/debounce.md",sourceDirName:"arduino",slug:"/arduino/debounce",permalink:"/docs/arduino/debounce",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"Entprellen eines Tasters",sidebar_label:"Taster entprellen",description:"Wie wird ein Taster mit einem Arduino entprellt? Einfache Beispiele mit Pseudo-Code zum Entprellen mit und ohne der millis()-Funktion.",custom_edit_url:null,keywords:["Arduino","Entprellen","Taster","Taster entprellen","Taster entprellen mit millis()","Pullup","Pulldown","Debouncing","millis()","Umschalten","delay()"]},sidebar:"mySidebar",previous:{title:"Zeitkritische Aufgaben",permalink:"/docs/arduino/millis"},next:{title:"Arrays (Feld)",permalink:"/docs/arduino/array"}},d={},u=[{value:"Entprellen (debouncing)",id:"entprellen-debouncing",level:2},{value:"Einfaches (blockierendes) Entprellen",id:"einfaches-blockierendes-entprellen",level:3},{value:"Pseudocode (nicht blockierend mit <code>millis()</code>)",id:"pseudocode-nicht-blockierend-mit-millis",level:3},{value:"Bounce2-Bibliothek zum Entprellen",id:"bounce2-bibliothek-zum-entprellen",level:2},{value:"Links",id:"links",level:2}],o={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wird ein einfacher Taster als ",(0,a.kt)("a",{parentName:"p",href:"/docs/arduino/input#ein-taster-zum-umschalten"},"Umschalter"),", zum Beispiel zum An- und Ausschalten einer LED verwendet, kann es passieren, dass beim einmaligen Bet\xe4tigen scheinbar zuf\xe4llig manchmal geschaltet und manchmal nicht geschaltet wird. "),(0,a.kt)("img",{src:"/img/arduino/debounce.png",alt:"Taster entprellen",width:"360px",className:"center"}),(0,a.kt)("p",null,"Die Ursache f\xfcr dieses scheinbar willk\xfcrliche Verhalten wird als ",(0,a.kt)("strong",{parentName:"p"},"Prellen")," (engl. ",(0,a.kt)("em",{parentName:"p"},"bouncing"),") bezeichnet. Beim Dr\xfccken des Tasters \xe4ndert sich der Zustand am Eingangspin nicht nur einmal, sondern gelegentlich auch \xf6fter. \xc4hnlich wie ein Lineal, welches auf einen Tisch geschlagen wird, springen die Kontakte eines Tasters beim Bet\xe4tigen f\xfcr einen kurzen Moment hin und her. Dies f\xfchrt zu ungewollten, sich schnell \xe4ndernden Spannungszust\xe4nden am Eingangspin. Werden diese schnellen Zustands\xe4nderungen verarbeitet, so scheint es, dass beim Bet\xe4tigen des Tasters nichts passiert, obwohl in Wahrheit vielleicht angeschaltet und gleich danach wieder ausgeschaltet wurde."),(0,a.kt)("p",null,"Ein ",(0,a.kt)("strong",{parentName:"p"},"entprellter Taster")," ignoriert diese ungewollten schnellen Zustands\xe4nderungen und stellte sicher, dass beim Dr\xfccken (oder auch Loslassen) eines Taster nur genau eine Aktion ausgef\xfchrt werden kann."),(0,a.kt)("h2",{id:"entprellen-debouncing"},"Entprellen (debouncing)"),(0,a.kt)("p",null,"In der oben stehenden Abbildung ist schematisch der Verlauf der Spannung bei einem ",(0,a.kt)("a",{parentName:"p",href:"input#programm-zum-auslesen-des-tasterzustands-interner-pullup-widerstand"},"LOW-aktiven Taster")," (Signalpegel LOW beim Dr\xfccken) dargestellt. Wird der Taster gedr\xfcckt, so f\xe4llt die Spannung am Eingangspin zuerst auf 0 V ab, springt jedoch gleich darauf wieder auf einen h\xf6heren Spannungswert. Wu\u0308rde jeder Zustandswechsel von ",(0,a.kt)("inlineCode",{parentName:"p"},"HIGH")," auf ",(0,a.kt)("inlineCode",{parentName:"p"},"LOW")," zum Umschalten der LED f\xfchren, so wa\u0308re bei einem prellenden Schalter nicht vorhersehbar, ob die LED zum Schluss an- oder ausgeschaltet ist."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ein Taster ist entprellt"),", wenn die schnellen, ungewollten Zustands\xe4nderungen w\xe4hrend des Dr\xfcckens eines Tasters ignoriert wurden. Wird also am Tasterpin eine erste Zustands\xe4nderung detektiert, m\xfcssen fu\u0308r eine vorgegebene Zeit (Prellzeit) alle folgenden ",(0,a.kt)("strong",{parentName:"p"},"unerw\xfcnschten Zustands\xe4nderungen ignoriert")," werden. Da die meisten Taster nur in einem Zeitbereich ",(0,a.kt)("span",{parentName:"p",className:"math math-inline"},(0,a.kt)("span",{parentName:"span",className:"katex"},(0,a.kt)("span",{parentName:"span",className:"katex-mathml"},(0,a.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,a.kt)("semantics",{parentName:"math"},(0,a.kt)("mrow",{parentName:"semantics"},(0,a.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0394"),(0,a.kt)("mi",{parentName:"mrow"},"t")),(0,a.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Delta t")))),(0,a.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,a.kt)("span",{parentName:"span",className:"base"},(0,a.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,a.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,a.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," von ca. 30 ms prellen, sollte ein Prellzeit von 30 ms ausreichen. "),(0,a.kt)("p",null,"Anschlie\xdfend muss der ",(0,a.kt)("strong",{parentName:"p"},"Zustand des Tasters erneut eingelesen")," werden. Entspricht der Zustand dem nach der ersten Zustand\xe4nderung (",(0,a.kt)("em",{parentName:"p"},"im Beispiel also LOW"),"), dann wurde der Taster erfolgreich entprellt."),(0,a.kt)("h3",{id:"einfaches-blockierendes-entprellen"},"Einfaches (blockierendes) Entprellen"),(0,a.kt)("p",null,"Die einfachste, wenn auch nicht beste L\xf6sung, um einen Taster zu entprellen, kann durch eine einfache blockierende Programmverz\xf6gerung mit der ",(0,a.kt)("inlineCode",{parentName:"p"},"delay()"),"-Funktion realisiert werden."),(0,a.kt)("p",null,"Im folgenden Beispiel wird die ",(0,a.kt)("strong",{parentName:"p"},"fallende Flanke")," des Tasterpins, als der \xdcbergang von ungedr\xfcckt ",(0,a.kt)("inlineCode",{parentName:"p"},"HIGH")," zu gedr\xfcckt ",(0,a.kt)("inlineCode",{parentName:"p"},"LOW")," entprellt und zum Umschalten einer LED verwendet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino",metastring:'title="entprellenMitDelay.ino"',title:'"entprellenMitDelay.ino"'},"// Ein sehr einfaches Beispiel zum Entprellen eines Tasters und Umschalten einer LED.\n// Dieses Beispiel blockiert den MC w\xe4hrend des Entprellens.\n\n#define BUTTON 12                          // an Schaltung anpassen\n#define LED 3                              // an Schaltung anpassen\n\nint zustandTaster      = HIGH;             // aktueller Status des Taster-PINs\nint zustandTasterAlt   = HIGH;             // Status des Taster-PINs vor der letzten \xdcberpr\xfcfung\nint zustandLed         = LOW;              // Status der LED (an oder aus)\n\nvoid umschaltenLED(int pPin){\n  zustandLed = !zustandLed;                // LED-Status umschalten\n  digitalWrite(pPin, zustandLed);          // LED an- oder ausschalten\n}\n\nvoid setup() {\n  pinMode(BUTTON, INPUT_PULLUP);           // Tasterpin mit Pull-Up-Widerstand konfigurieren\n  pinMode(LED, OUTPUT);\n}\n\nvoid loop() {\n  zustandTaster = digitalRead(BUTTON);     // aktuellen Zustand des Tasters bestimmen\n\n  // Wurde der Taster gerade gedr\xfcckt ( zustandTaster == 0 ) UND war er vorher nicht gedr\xfcckt (zustandTasterAlt == 1)\n  if ((zustandTaster == 0) && (zustandTasterAlt == 1))\n  {\n    delay(30);                             // 30 ms warten, um falsche Zustands\xe4nderungen zu ignorieren\n    zustandTaster = digitalRead(BUTTON);   // Zustand des Taster \xfcberpr\xfcfen\n    if (zustandTaster == 0) {              // Ist der Taster immer noch gedr\xfcckt?\n      umschaltenLED(LED);                \n    }\n  }\n  zustandTasterAlt = zustandTaster;         // alten Wert des Tasters speichern\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Hinweis:")," Das Zeichen ",(0,a.kt)("inlineCode",{parentName:"p"},"!")," ist das Negationszeichen und bedeutet ",(0,a.kt)("em",{parentName:"p"},"nicht"),". Der Ausdruck ",(0,a.kt)("inlineCode",{parentName:"p"},"zustandLed = !zustandLed;")," negiert also den Wert von ",(0,a.kt)("inlineCode",{parentName:"p"},"zustandLed")," (aus 0 wird 1 und aus 1 wird 0).")),(0,a.kt)("h3",{id:"pseudocode-nicht-blockierend-mit-millis"},"Pseudocode (nicht blockierend mit ",(0,a.kt)("inlineCode",{parentName:"h3"},"millis()"),")"),(0,a.kt)("p",null,"Der Nachteil des obigen Codes zum Entprellen ist, dass der Programmablauf durch die ",(0,a.kt)("inlineCode",{parentName:"p"},"delay()")," Funktion blockiert wird. Ein nichtblockierendes Entprellen l\xe4sst sich mit der ",(0,a.kt)("inlineCode",{parentName:"p"},"millis()")," Funktion realisieren."),(0,a.kt)("p",null,"Der folgende ",(0,a.kt)("strong",{parentName:"p"},"unvollst\xe4ndige")," Programmcode zum Entprellen eines Tasters mit der ",(0,a.kt)("inlineCode",{parentName:"p"},"millis()"),"-Funktion zeigt beispielhaft, wie das Dr\xfccken eines Tasters (nicht das Loslassen) entprellt werden kann."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"// Unvollst\xe4ndiger Code zum Entprellen eines Tasters und umschalten einer LED\n\n#define BUTTON 12                    // an Schaltung anpassen\n#define LED 3                        // an Schaltung anpassen\n\nbool entprellen      = false;\nbool zustandTaster    = HIGH;        // aktueller  Status des Tasters\nbool zustandTasterAlt = HIGH;        // letzter  Status des Tasters\nbool zustandLed       = LOW;         // Status der LED (an oder aus)\n\nunsigned long entprellZeit = 30;     // in ms\nunsigned long startEntprellen;       // Zeitpunkt, wenn das Enprellen beginnt\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(BUTTON, INPUT_PULLUP);     // interner Pull-Up-Widerstand\n  pinMode(LED, OUTPUT);\n}\n\nvoid loop() {\n  zustandTaster = digitalRead(BUTTON); // Taster-Pin einlesen\n\n  // Wurde der Taster gedr\xfcckt?\n  if ((zustandTaster == 0) && (zustandTasterAlt == 1)) {\n    startEntprellen = millis();       // Zeitstempel f\xfcr das Entprellen\n    entprellen = true;                // Entprellen soll gestartet werden\n  }\n\n  // Die Zustands\xe4nderung des Tasters wurde bereits erkannt, jetzt muss entprellt werden:\n  if (entprellen)\n  {\n    /*                PSEUDOCODE zum Entprellen\n      --------------------------------------------------------\n      WENN (Zeit seit letzter \xc4nderung am Pin > entprellZeit)\n      {\n        WENN (Taster immer noch gedr\xfcckt)\n        {\n          - zustandLed umschalten\n          - entprellen beenden\n        }\n      }\n      --------------------------------------------------------\n    */\n  }\n  zustandTasterAlt = zustandTaster;     // alten Tasterzustand speichern\n  digitalWrite(LED, zustandLed);        // LED-Status aktualisieren\n}\n")),(0,a.kt)("details",{className:"ueben"}," ",(0,a.kt)("summary",null,"Aufgaben"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Erl\xe4utern")," Sie, warum nach der Prellzeit der Zustand des Tasters \xfcberpr\xfcft werden muss."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Vervollst\xe4ndigen")," Sie den nicht blockierenden ",(0,a.kt)("strong",{parentName:"li"},"Code zum Entprellen")," eines Tasters. Beim Bet\xe4tigen des Tasters soll eine angeschlossene LED an- bzw. ausgeschaltet werden (toggeln)."),(0,a.kt)("li",{parentName:"ol"},"Bauen Sie eine Schaltung mit ",(0,a.kt)("strong",{parentName:"li"},"4 gleichfarbigen LEDs und einem Taster")," auf. Zu Beginn leuchtet nur die erste LED. Beim ersten Bet\xe4tigen des Taster soll die zweite LED aufleuchten und alle anderen LEDs aus sein. Wird der Taster ein weiteres Mal bet\xe4tigt, so soll die 3. LED aufleuchten, danach die 4. LED und so weiter. Verwenden Sie einen geeigneten ",(0,a.kt)("strong",{parentName:"li"},"Automaten"),"."),(0,a.kt)("li",{parentName:"ol"},"Bauen Sie eine Schaltung mit zwei LEDs und zwei Tastern auf. Schreiben Sie ein Programm, das jede LED mit einem einzelnen Taster an und ausschalten l\xe4sst (Taster 1 schaltet nur LED 1 und Taster 2 schaltet nur LED 2). Achten Sie darauf die Taster zu entprellen."))),(0,a.kt)("h2",{id:"bounce2-bibliothek-zum-entprellen"},"Bounce2-Bibliothek zum Entprellen"),(0,a.kt)("p",null,"Mit der Arduino-Bibliothek ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/thomasfredericks/Bounce2"},"bounce2"))," kann das Entprellen stark vereinfacht werden. Die Dokumentation findet sich ",(0,a.kt)("a",{parentName:"p",href:"http://thomasfredericks.github.io/Bounce2/files/index.html"},"hier"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"// This example toggles the debug LED (pin 13) on or off\n// when a button on pin 2 is pressed.\n\n// Include the Bounce2 library found here :\n// https://github.com/thomasfredericks/Bounce2\n#include <Bounce2.h>\n\n#define BUTTON_PIN 12\n#define LED_PIN 3\nint ledState = LOW;\n\nBounce debouncer = Bounce(); // Instantiate a Bounce object\n\nvoid setup() {\n  debouncer.attach(BUTTON_PIN,INPUT_PULLUP); // Attach the debouncer to a pin with INPUT_PULLUP mode\n  debouncer.interval(25); // Use a debounce interval of 25 milliseconds\n  \n  pinMode(LED_PIN,OUTPUT); // Setup the LED\n  digitalWrite(LED_PIN,ledState);\n}\n\nvoid loop() {\n   debouncer.update();               // Update the Bounce instance. Should be called only once per loop().\n   \n   if ( debouncer.fell() ) {         // Call code if button transitions from HIGH to LOW\n     ledState = !ledState;           // Toggle LED state\n     digitalWrite(LED_PIN,ledState); // Apply new LED state\n   }\n}\n\n")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=e1-kc04jSE4"},"Debounce a Switch (Circuit) - Video")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.skillbank.co.uk/arduino/switchbounce.htm"},"Using digital inputs: Switch bounce and solutions to it")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/thomasfredericks/Bounce2"},"Arduino Library Bounce2")),(0,a.kt)("li",{parentName:"ul"},"Die ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/LennartHennigs/Button2"},"Button2-Bibliothek")," ist deutlich umfangreicher als die Bounce2 Bibliothek und erm\xf6glicht das Arbeit mit Eventhandlern f\xfcr verschiedene Taster-Events wie ",(0,a.kt)("em",{parentName:"li"},"Click"),", ",(0,a.kt)("em",{parentName:"li"},"LongClick"),", ",(0,a.kt)("em",{parentName:"li"},"DoubleClick"),", ",(0,a.kt)("em",{parentName:"li"},"TripleClick"),".")))}p.isMDXComponent=!0}}]);