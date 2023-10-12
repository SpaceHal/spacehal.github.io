"use strict";(self.webpackChunkspace_hal=self.webpackChunkspace_hal||[]).push([[483],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>c});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),g=d(r),m=i,c=g["".concat(l,".").concat(m)]||g[m]||p[m]||a;return r?t.createElement(c,o(o({ref:n},s),{},{components:r})):t.createElement(c,o({ref:n},s))}));function c(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[g]="string"==typeof e?e:i,o[1]=u;for(var d=2;d<a;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8563:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var t=r(7462),i=(r(7294),r(3905));const a={title:"Auf einer Linie mit Kreuzungen und Unterbrechungen navigieren",sidebar_label:"Linie mit Kreuzungen",description:"Ein fortgeschrittener Linienfolger der Kreuzungen, Abzweigungen und Sackgassen erkennt und sein Verhalten automatisch anpasst.",custom_edit_url:null,keywords:["Arduino","Linienfolger Kreuzungen","Kantenfolge","Roboter","Robotik","Kreuzungen","Linienunterbrechungen","Hindernis","Abbiegen","zumo 32u4"]},o=void 0,u={unversionedId:"robotik/advancedLine",id:"robotik/advancedLine",title:"Auf einer Linie mit Kreuzungen und Unterbrechungen navigieren",description:"Ein fortgeschrittener Linienfolger der Kreuzungen, Abzweigungen und Sackgassen erkennt und sein Verhalten automatisch anpasst.",source:"@site/docs/robotik/advancedLine.md",sourceDirName:"robotik",slug:"/robotik/advancedLine",permalink:"/docs/robotik/advancedLine",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"Auf einer Linie mit Kreuzungen und Unterbrechungen navigieren",sidebar_label:"Linie mit Kreuzungen",description:"Ein fortgeschrittener Linienfolger der Kreuzungen, Abzweigungen und Sackgassen erkennt und sein Verhalten automatisch anpasst.",custom_edit_url:null,keywords:["Arduino","Linienfolger Kreuzungen","Kantenfolge","Roboter","Robotik","Kreuzungen","Linienunterbrechungen","Hindernis","Abbiegen","zumo 32u4"]},sidebar:"mySidebar",previous:{title:"Gewichteter Mittelwert",permalink:"/docs/robotik/weightedAverage"},next:{title:"Motorencoder",permalink:"/docs/category/motorencoder"}},l={},d=[{value:"Auf einer Linie mit Kreuzungen navigieren",id:"auf-einer-linie-mit-kreuzungen-navigieren",level:2},{value:"Hauptprogramm <code>void loop()</code>",id:"hauptprogramm-void-loop",level:2},{value:"Teilfunktionen",id:"teilfunktionen",level:2},{value:"Eventerkennung <code>isEvent()</code>",id:"eventerkennung-isevent",level:3},{value:"Auf die unterschiedlichen Events reagieren <code>reagierenAufEvent()</code>",id:"auf-die-unterschiedlichen-events-reagieren-reagierenaufevent",level:3},{value:"Funktion <code>abbiegen(int pRichtung)</code>",id:"funktion-abbiegenint-prichtung",level:3},{value:"Hilfsfunktion zum Debuggen",id:"hilfsfunktion-zum-debuggen",level:2}],s={toc:d},g="wrapper";function p(e){let{components:n,...a}=e;return(0,i.kt)(g,(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://spacehal.github.io/docs/robotik/advancedLine"})),(0,i.kt)("p",null,"Das Folgen einer Linie mit Kreuzungen, Unterbrechungen oder \xc4hnlichem erh\xf6ht die Komplexit\xe4t des Linienfolgers. "),(0,i.kt)("p",null,"Neben dem Regler f\xfcr den ",(0,i.kt)("a",{parentName:"p",href:"/docs/robotik/lineFollowerPD"},"Linienfolger")," muss der Roboter zus\xe4tzlich noch so programmiert werden, dass er regelm\xe4\xdfig ",(0,i.kt)("strong",{parentName:"p"},"\xfcberpr\xfcft"),", ob er sich gerade ",(0,i.kt)("strong",{parentName:"p"},"\xfcber einer Kreuzung oder Unterbrechung befindet"),". Hat der Roboter ein Hindernis erkannt, muss er abh\xe4ngig vom Hindernis eine vorher ",(0,i.kt)("strong",{parentName:"p"},"festgelegte Aktion")," (",(0,i.kt)("em",{parentName:"p"},"links abbiegen, rechts abbiegen, weiterfahren, etc."),") ",(0,i.kt)("strong",{parentName:"p"},"ausf\xfchren"),"."),(0,i.kt)("p",null,"Im Folgenden sind ein paar Anregungen zum Erkennen einer Kreuzung oder zum geschicketen Reagieren auf Kreuzungen aufgef\xfchrt. Es handelt sich hier nicht um eine vollst\xe4ndige L\xf6sung des Problems, sondern vielmehr um m\xf6gliche Ans\xe4tze f\xfcr eigene Realisierungen."),(0,i.kt)("h2",{id:"auf-einer-linie-mit-kreuzungen-navigieren"},"Auf einer Linie mit Kreuzungen navigieren"),(0,i.kt)("img",{src:"/img/robotik/AdvancedParcour.png",alt:"Linienfolger mit Kreuzungen",width:"500px",className:"center"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Der vollst\xe4ndige ",(0,i.kt)("a",{target:"_blank",href:r(5241).Z},"Parcours mit Kreuzungen")," kann auch im A0 Format heruntergeladen werden.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Hinweis: Die Nummerierung der Ereignisse (Kreuzungen, W\xfcste, Unterbrechung, etc ...) ist nur bedingt vollst\xe4ndig. Abh\xe4ngig vom Verhalten des Roboters kann es notwendig sein, auch andere markante Stellen als Kreuzungen zu betrachten.")),(0,i.kt)("h2",{id:"hauptprogramm-void-loop"},"Hauptprogramm ",(0,i.kt)("inlineCode",{parentName:"h2"},"void loop()")),(0,i.kt)("p",null,"Um den fortgeschrittenen Linienfolger programmieren zu k\xf6nnen, ist es wichtig ein ",(0,i.kt)("strong",{parentName:"p"},"gut strukturiertes Hauptprogramm")," zu haben. Steht das Hauptprogramm, kann man sich relativ gut auf die einzelnen Teilfunktionen konzentrieren, ohne die \xdcbersicht \xfcber die verschiedenen Aufgaben zu verlieren. Im wesentlichen soll das im Hauptprogramm unterscheiden, ob der Roboter gerade der Linie folgen soll (",(0,i.kt)("inlineCode",{parentName:"p"},"folgeLine()"),") oder auf besondere Events (Kreuzung, W\xfcste, Unterbrehung) reagieren (",(0,i.kt)("inlineCode",{parentName:"p"},"reagierenAufEvent(eventNummer)"),") soll."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},'/***    Hauptprogramm f\xfcr den fortgeschrittenen Linienfolger   ***/\n\nint eventNummer = 0;\n\nvoid loop() {\n\n  if (!istEvent())                       // kein Event (Kreuzung, W\xfcste, Unterbrechung) also Linie\n  { \n    folgeLine();                         // Regler zum Linienfolgen\n  }\n  else                                   // Event erkannt\n  {  \n    eventNummer++;                       // Z\xe4hlvariable f\xfcr die Events\n    if (eventNummer < 12) {\n      reagierenAufEvent(eventNummer);    // Abh\xe4ngig vom Event abbiegen, weiterfahren, etc. \n    }\n    else  {                              // letztes  Event ist erreicht\n      motors.setSpeeds(0, 0);   \n      lcd.print(" -ENDE- ");\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Im oben dargestellten ",(0,i.kt)("strong",{parentName:"p"},"Beispielcode")," wird in der ersten if-Abfrage die Funktion ",(0,i.kt)("a",{parentName:"p",href:"#funktion-istEvent"},(0,i.kt)("inlineCode",{parentName:"a"},"istEvent()"))," aufgerufen. Die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"istEvent()")," gibt ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," zur\xfcck, sobald sich der Roboter \xfcber einer Kreuzung oder \xe4hnlichem (W\xfcste, Unterbrechung) befindet. Da in der if-Abfrage die Aussage mit ",(0,i.kt)("inlineCode",{parentName:"p"},"!")," negiert wird, folgt der Roboter so lange der Linie mit dem Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"folgeLine()"),", wie sich der Roboter ",(0,i.kt)("strong",{parentName:"p"},"nicht")," auf einer Kreuzung befindet."),(0,i.kt)("p",null,"Wurde ein Event erkannt, wird der ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," Zweig aufgerufen und die Z\xe4hlvariable ",(0,i.kt)("inlineCode",{parentName:"p"},"eventNummer")," f\xfcr die aktuelle Kreuzung um eins erh\xf6ht. Nachdem \xfcberpr\xfcft wurde, ob das letzte Event noch nicht erreicht wurde (",(0,i.kt)("inlineCode",{parentName:"p"},"if (eventNummer < 12)"),"), wird die Funktion ",(0,i.kt)("a",{parentName:"p",href:"#funktion-reagierenAufEvent"},(0,i.kt)("inlineCode",{parentName:"a"},"reagierenAufEvent(int eventNummer)"))," mit der Eventnummer aufgerufen."),(0,i.kt)("p",null,"In der Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"reagierenAufEvent(int eventNummer)")," sollte mit einer ",(0,i.kt)("inlineCode",{parentName:"p"},"switch"),"-",(0,i.kt)("inlineCode",{parentName:"p"},"case"),"-Anweisung oder \xe4hnlichem f\xfcr jedes Event (",(0,i.kt)("inlineCode",{parentName:"p"},"eventNummer"),") eine Anweisung hinterlegt sein, wie sich der Roboter an entsprechender Stelle zu verhalten hat (",(0,i.kt)("em",{parentName:"p"},"links abbiegen, rechts abbiegen, weiterfahren, etc."),")."),(0,i.kt)("h2",{id:"teilfunktionen"},"Teilfunktionen"),(0,i.kt)("h3",{id:"eventerkennung-isevent"},"Eventerkennung ",(0,i.kt)("inlineCode",{parentName:"h3"},"isEvent()")),(0,i.kt)("p",null,"Wie oben beschrieben, soll die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"istEvent()")," nur erkennen, ob sich der Roboter \xfcber einer Kreuzung, W\xfcste oder Unterbrechung befindet. Hat die Funktion eine Kreuzung erkannt, soll sie den boolschen Wert ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," zur\xfcckgeben. Ansonsten ist der R\xfcckgabewert ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".  Daf\xfcr reicht es aus, die einzelnen Sensorwerte mit einem Schwellwert (z.B. 500) zu vergleichen und sich f\xfcr die einzelnen Sensoren eine geeignete Bedingung zum Erkennen einer Kreuzung zu \xfcberlegen."),(0,i.kt)("p",null,"In der folgende Abbildung sind einige m\xf6gliche ",(0,i.kt)("em",{parentName:"p"},"Kreuzungstypen")," und die zugeh\xf6rigen Zust\xe4nde der Bodensensoren dargestellt. Nutzen Sie diese Abbildung, um sich eine geeignete Bedingung zum Erkennen eines ",(0,i.kt)("em",{parentName:"p"},"Events")," (Kreuzung, W\xfcste, Unterbrechung) zu \xfcberlegen. Eventuell ist es einfacher, sich eine Bedingung daf\xfcr zu \xfcberlegen, dass der Roboter sich ",(0,i.kt)("strong",{parentName:"p"},"nicht")," auf der Linie befindet, der gefolgt werden soll."),(0,i.kt)("p",null,"Verkn\xfcpfen Sie hierbei den Zustand verschiedener Sensoren mit logischen Ausdr\xfccken (UND ",(0,i.kt)("inlineCode",{parentName:"p"},"&&"),", ODER ",(0,i.kt)("inlineCode",{parentName:"p"},"||"),")."),(0,i.kt)("img",{src:"/img/robotik/Kreuzungen.png",alt:"Erkennen von Kreuzungen",width:"550px",className:"center"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bool istEvent(){\n  /* Gibt `true` zur\xfcck, wenn ein Event  (Kreuzungen,\n     W\xfcsten oder Unterbrechungen) erkannt wurde. Verwendet\n     die Bodensensoren zum Erkennen von Events.  */\n}\n")),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Schreiben Sie ein Programm, welches den Roboter einer Linie folgen l\xe4sst und bei jeder Kreuzung (bzw. W\xfcste oder Unterbrechung) stehen bleibt. Nachdem ein Taster bet\xe4tigt wurde, soll der Roboter wieder der Linie bis zur n\xe4chsten Kreuzung folgen (ohne abzubiegen oder \xe4hnliches). Nutzen Sie die Vorlage."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"}," // --- Unvollst\xe4ndige Code-Vorlage ---\n\n void loop() {\n   if (!istEvent()){                            // keine Kreuzung, also Linie\n     folgeLinie();                                 // Regler zum Linienfolgen\n   }\n   else{                                           // Kreuzung (oder \xe4hnlich) erkannt\n     // 1. Roboter bleibt stehen\n     // 2. Nach Tasterdruck soll der Roboter \n     //    bis zur n\xe4chsten Kreuzung weiterfahren\n   }\n }\n"))))),(0,i.kt)("h3",{id:"auf-die-unterschiedlichen-events-reagieren-reagierenaufevent"},"Auf die unterschiedlichen Events reagieren ",(0,i.kt)("inlineCode",{parentName:"h3"},"reagierenAufEvent()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"void reagierenAufEvent(int pKreuzNummer) {\n  // F\xfcr jedes Event wird die zugeh\xf6rige Aktion als `case` hinterlegt.\n  switch (pKreuzNummer) {\n    case 1:\n    case 2:\n    case 5:\n      abbiegen(RECHTS);\n      break;\n\n    case 3:\n      fahrenWueste();\n      break;\n\n      // Weitere Anweisungen ...\n  }\n}\n")),(0,i.kt)("h3",{id:"funktion-abbiegenint-prichtung"},"Funktion ",(0,i.kt)("inlineCode",{parentName:"h3"},"abbiegen(int pRichtung)")),(0,i.kt)("p",null,"Die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"abbiegen(int pRichtung)")," soll den Roboter an einer Kreuzung nach links bzw. rechts abbiegen lassen. Der Parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"pRichtung")," gibt dabei die Richtung an. Damit der Code gut lesbar ist, k\xf6nnen mit den Zeilen"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#define LINKS 1\n#define RECHTS 2\n")),(0,i.kt)("p",null,"die Definitionen ",(0,i.kt)("inlineCode",{parentName:"p"},"LINKS")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"RECHTS")," f\xfcr die Werte ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," vorgenommen werden. Wird die Funktion dann aufgerufen, wird als Parameter nicht ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," sondern ",(0,i.kt)("inlineCode",{parentName:"p"},"LINKS")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"RECHTS")," \xfcbergeben. Dadurch wird die Lesbarkeit des Codes deutlich erh\xf6ht."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"abbiegen(LINKS);  // entspricht abbiegen(1);\n")),(0,i.kt)("p",null,"Nachdem der Roboter mit der Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"abbiegen()")," abgebogen ist, sollte er die zu folgende Linie erkennen und dieser auch sofort problemlos mit der Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"folgeLinie()")," folgen k\xf6nnen. Daher ist gut, wenn der Roboter am Ende der Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"abbiegen")," in m\xf6glichst exakt in Fahrtrichtung auf der neuen Linie steht und gleichzeitig der Mittelsensor die Linie erkennt."),(0,i.kt)("img",{src:"/img/robotik/Abbiegen.png",alt:"Abbiegen eines Roboters an einer Kreuzung",width:"650px",className:"center"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// An Kreuzungen nach links oder rechts abbiegen\nvoid abbiegen(int pRichtung){\n  // 1. Der Roboter f\xe4hrt mittig auf die Kreuzung\n  // 2. Der Roboter dreht sich nach links/rechts\n  // 3. Das Drehen wird gestoppt, wenn der Roboter\n  //    mittig auf dem neuen Weg steht\n}\n")),(0,i.kt)("h2",{id:"hilfsfunktion-zum-debuggen"},"Hilfsfunktion zum Debuggen"),(0,i.kt)("p",null,"Die Hilfsfunktion ",(0,i.kt)("inlineCode",{parentName:"p"},"zeigenWerte()")," gibt auf dem Display zuerst die Sensorwerte des ganz linken und ganz rechten Sensors aus. Nach zwei Sekunden wird die Anzeige ge\xe4ndert, und die Werte des mittleren Sensors und die Position der Linie wird ausgegeben."),(0,i.kt)("p",null,"Verwenden Sie die Funktion zum Testen, ob der Roboter an den Kreuzungen auch wirklich das erkennt, was sie vermuten. Nutzen Sie die, oder eine \xe4hnliche Funktion, lieber einmal zu viel als zu wenig. Es kann Ihnen viel M\xfche und Kopfzerbrechen ersparen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},'void zeigenWerte() {\n  char msg[8];\n  //int lPosition = lineSensors.readLine(lineSensorValues); // wenn gewollt, aktualisieren der Sensorwerte\n\n  sprintf(msg, "0: %4d", lineSensorValues[0]);   // Sensor ganz links\n  lcd.gotoXY(0, 0); lcd.print(msg);\n  sprintf(msg, "4: %4d", lineSensorValues[4]);   // Sensor ganz rechts\n  lcd.gotoXY(0, 1); lcd.print(msg);\n  delay(2000);\n\n  sprintf(msg, "2:  %4d", lineSensorValues[2]);  // Mittelsensor \n  lcd.gotoXY(0, 0); lcd.print(msg);\n  sprintf(msg, "Pos %4d", lPosition);            // Position der Linie\n  lcd.gotoXY(0, 1); lcd.print(msg);\n  delay(2000);\n  lcd.clear();\n}\n')),(0,i.kt)("p",null,"Zum Ausgeben der Werte auf dem Display wird die Funktion ",(0,i.kt)("a",{parentName:"p",href:"/docs/arduino/seriell#ext--mit-sprintf-formatieren"},(0,i.kt)("inlineCode",{parentName:"a"},"sprintf()"))," genutzt. Die Funktion erlaubt es Text und Zahlenwerte nach bestimmten Regeln zu formatieren. Der Formatierte Text wird in den ",(0,i.kt)("inlineCode",{parentName:"p"},"char"),"-Array  ",(0,i.kt)("inlineCode",{parentName:"p"},"msg[]")," geschrieben und anschlie\xdfend mit ",(0,i.kt)("inlineCode",{parentName:"p"},"lcd.print(msg1)")," auf dem LCD-Display ausgegeben."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"}," Das LCD-Display des Zumo 32u4 hat pro Zeil nur 8 Zeichen. Also sollten nicht mehr als 8 Zeichen pro Zeile ausgegeben werden.")))}p.isMDXComponent=!0},5241:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/files/AdvancedParcours-a0ac749fb43a6a84e29a243c8ec9b710.pdf"}}]);