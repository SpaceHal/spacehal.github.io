"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[483],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return p}});var i=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=i.createContext({}),d=function(e){var n=i.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},s=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(r),p=t,m=c["".concat(l,".").concat(p)]||c[p]||g[p]||a;return r?i.createElement(m,u(u({ref:n},s),{},{components:r})):i.createElement(m,u({ref:n},s))}));function p(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,u=new Array(a);u[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,u[1]=o;for(var d=2;d<a;d++)u[d]=r[d];return i.createElement.apply(null,u)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8563:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var i=r(3117),t=r(102),a=(r(7294),r(3905)),u=["components"],o={title:"Auf einer Linie mit Kreuzungen und Abzweigungen navigieren",sidebar_label:"Linie mit Kreuzungen",description:"Ein fortgeschrittener Linienfolger der Kreuzungen, Abzweigungen und Sackgassen erkennt und sein Verhalten automatisch anpasst.",custom_edit_url:null,keywords:["Arduino","Linenfolger","Kantenfolge","Roboter","Robotik","Kreuzungen","Linienunterbrechungen","Hindernis","Abbiegen"]},l=void 0,d={unversionedId:"robotik/advancedLine",id:"robotik/advancedLine",isDocsHomePage:!1,title:"Auf einer Linie mit Kreuzungen und Abzweigungen navigieren",description:"Ein fortgeschrittener Linienfolger der Kreuzungen, Abzweigungen und Sackgassen erkennt und sein Verhalten automatisch anpasst.",source:"@site/docs/robotik/advancedLine.md",sourceDirName:"robotik",slug:"/robotik/advancedLine",permalink:"/docs/robotik/advancedLine",editUrl:null,tags:[],version:"current",lastUpdatedAt:1631966711,formattedLastUpdatedAt:"18.9.2021",frontMatter:{title:"Auf einer Linie mit Kreuzungen und Abzweigungen navigieren",sidebar_label:"Linie mit Kreuzungen",description:"Ein fortgeschrittener Linienfolger der Kreuzungen, Abzweigungen und Sackgassen erkennt und sein Verhalten automatisch anpasst.",custom_edit_url:null,keywords:["Arduino","Linenfolger","Kantenfolge","Roboter","Robotik","Kreuzungen","Linienunterbrechungen","Hindernis","Abbiegen"]},sidebar:"sideBarRobotik",previous:{title:"Gewichteter Mittelwert",permalink:"/docs/robotik/weightedAverage"},next:{title:"Motorencoder",permalink:"/docs/robotik/wheelEncoder"}},s=[{value:"Auf einer Linie mit Kreuzungen navigieren",id:"auf-einer-linie-mit-kreuzungen-navigieren",children:[],level:2},{value:"Hauptprogramm <code>void loop()</code>",id:"hauptprogramm-void-loop",children:[],level:2},{value:"Kreuzungserkennung",id:"kreuzungserkennung",children:[{value:"Funktion <code>istKreuzung()</code>",id:"funktion-istkreuzung",children:[],level:3}],level:2},{value:"Auf Kreuzungen reagieren",id:"auf-kreuzungen-reagieren",children:[{value:"Funktion <code>drehenLinksRechts(int pRichtung)</code>",id:"funktion-drehenlinksrechtsint-prichtung",children:[],level:3},{value:"Funktion <code>reagierenKreuzung()</code>",id:"funktion-reagierenkreuzung",children:[],level:3}],level:2},{value:"Hilfsfunktion zum Debuggen",id:"hilfsfunktion-zum-debuggen",children:[{value:"<code>sprintf()</code>",id:"sprintf",children:[],level:3}],level:2}],g={toc:s};function c(e){var n=e.components,r=(0,t.Z)(e,u);return(0,a.kt)("wrapper",(0,i.Z)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Das Folgen einer Linie mit Kreuzungen, Unterbrechungen oder \xc4hnlichem erh\xf6ht die Komplexit\xe4t des Linienfolgers. "),(0,a.kt)("p",null,"Neben dem Regler f\xfcr den ",(0,a.kt)("a",{parentName:"p",href:"/docs/robotik/lineFollowerPD"},"Linienfolger")," muss der Roboter zus\xe4tzlich noch so programmiert werden, dass er regelm\xe4\xdfig ",(0,a.kt)("strong",{parentName:"p"},"\xfcberpr\xfcft"),", ob er sich gerade ",(0,a.kt)("strong",{parentName:"p"},"\xfcber einer Kreuzung oder Unterbrechung befindet"),". Hat der Roboter ein Hindernis erkannt, muss er abh\xe4ngig vom Hindernis eine vorher ",(0,a.kt)("strong",{parentName:"p"},"festgelegte Aktion")," (",(0,a.kt)("em",{parentName:"p"},"links abbiegen, rechts abbiegen, weiterfahren, etc."),") ",(0,a.kt)("strong",{parentName:"p"},"ausf\xfchren"),"."),(0,a.kt)("p",null,"Im Folgenden sind ein paar Anregungen zum Erkennen einer Kreuzung oder zum geschicketen Reagieren auf Kreuzungen aufgef\xfchrt. Es handelt sich hier nicht um eine vollst\xe4ndige L\xf6sung des Problems, sondern vielmehr um m\xf6gliche Ans\xe4tze f\xfcr eigene Realisierungen."),(0,a.kt)("h2",{id:"auf-einer-linie-mit-kreuzungen-navigieren"},"Auf einer Linie mit Kreuzungen navigieren"),(0,a.kt)("img",{src:"/img/robotik/AdvancedParcour.png",alt:"Advanced line follower track with intersections",width:"500px",class:"center"}),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Hinweis: Die Nummerierung der Kreuzungen und \xe4hnlichem ist nur bedingt vollst\xe4ndig. Abh\xe4ngig vom Verhalten des Roboters kann es notwendig sein, auch andere markante Stellen als Kreuzungen zu betrachten."))),(0,a.kt)("h2",{id:"hauptprogramm-void-loop"},"Hauptprogramm ",(0,a.kt)("inlineCode",{parentName:"h2"},"void loop()")),(0,a.kt)("p",null,"Im Hauptprogramm des fortgeschrittenen Linienfolgers sollte zum einen der Regler zum Linienfolgen (",(0,a.kt)("inlineCode",{parentName:"p"},"folgeLine()"),") aufgerufen werden, zum andern aber auch Kreuzungen u.\xe4. erkannt und darauf reagiert werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino",metastring:"{6,10-13}","{6,10-13}":!0},'int aktuelleKreuzung = 0;\n\nvoid loop() {\n  if (!istKreuzung())                       // keine Kreuzung, also Linie\n  { \n    folgeLine();                            // Regler zum Linienfolgen\n  }\n  else                                      // Kreuzung (oder \xe4hnlich) erkannt\n  {  \n    aktuelleKreuzung++;                     // Z\xe4hlvariable f\xfcr die Kreuzungen\n    if (aktuelleKreuzung < 12) {\n      reagierenKreuzung(aktuelleKreuzung);  // Abh\xe4ngig vom Hindernis abbiegen, weiterfahren, etc. \n    }\n    else  {                                 // letzte  Kreuzung ist erreicht\n      motors.setSpeeds(0, 0);   \n      lcd.print(" -ENDE- ");\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Im oben dargestellten ",(0,a.kt)("strong",{parentName:"p"},"Beispielcode")," wird in der ersten if-Abfrage die Funktion ",(0,a.kt)("a",{parentName:"p",href:"#funktion-istkreuzung"},(0,a.kt)("inlineCode",{parentName:"a"},"istKreuzung()"))," aufgerufen. Die Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"istKreuzung()")," sollte ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," zur\xfcckgibt, sobald sich der Roboter \xfcber einer Kreuzung oder \xe4hnlichem befindet. Da in der if-Abfrage die Aussage mit ",(0,a.kt)("inlineCode",{parentName:"p"},"!")," negiert wird, folgt der Roboter so lange der Linie mit dem Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"folgeLine()"),", wie sich der Roboter ",(0,a.kt)("strong",{parentName:"p"},"nicht")," auf einer Kreuzung befindet."),(0,a.kt)("p",null,"Wurde eine Kreuzung erkannt, wird der ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," Zweig aufgerufen und die Z\xe4hlvariable ",(0,a.kt)("inlineCode",{parentName:"p"},"aktuelleKreuzung")," f\xfcr die aktuelle Kreuzung um eins erh\xf6ht. Die Z\xe4hlvariable wird, nachdem \xfcberpr\xfcft w\xfcrde, ob die letzte Kreuzung noch nicht erreicht wurde (",(0,a.kt)("inlineCode",{parentName:"p"},"if (aktuelleKreuzung < 12)"),"), als Argument f\xfcr die Funktion ",(0,a.kt)("a",{parentName:"p",href:"#funktion-reagierenkreuzung"},(0,a.kt)("inlineCode",{parentName:"a"},"reagierenKreuzung(int aktuelleKreuzung)"))," verwendet."),(0,a.kt)("p",null,"In der Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"reagierenKreuzung(int aktuelleKreuzung)")," sollte mit einer ",(0,a.kt)("inlineCode",{parentName:"p"},"switch"),"-",(0,a.kt)("inlineCode",{parentName:"p"},"case"),"-Anweisung oder \xe4hnlichem f\xfcr jede Kreuzungsnummer eine Anweisung hinterlegt sein, wie sich der Roboter an entsprechender Stelle zu verhalten hat (",(0,a.kt)("em",{parentName:"p"},"links abbiegen, rechts abbiegen, weiterfahren, etc."),")."),(0,a.kt)("h2",{id:"kreuzungserkennung"},"Kreuzungserkennung"),(0,a.kt)("p",null,"Wie oben beschrieben, soll die Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"istKreuzung()")," nur erkennen, ob sich der Roboter \xfcber einer Kreuzung (oder W\xfcste / Unterbrechung) befindet. Hat die Funktion eine Kreuzung erkannt, soll sie den boolschen Wert ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," zur\xfcckgeben. Ansonsten ist der R\xfcckgabewert ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".  Daf\xfcr reicht es aus, die einzelnen Sensorwerte mit einem Schwellwert (z.B. 500) zu vergleichen und sich f\xfcr die einzelnen Sensoren eine geeignete Bedingung zum Erkennen einer Kreuzung zu \xfcberlegen."),(0,a.kt)("p",null,"Die Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"bool siehtSensorSchwarz(byte pSensorIndex)")," soll einen Teil dieser Aufgabe \xfcbernehmen, indem sie die einzelnen Sensorwerte mit einem Schwellwert ",(0,a.kt)("inlineCode",{parentName:"p"},"schwellwertLinie")," vergleicht. Befindet sich der als Paramter ",(0,a.kt)("inlineCode",{parentName:"p"},"pSensorIndex")," angegebene Sensor \xfcber einer Line (also schwarzer Untergrund), so soll der R\xfcckgabewert ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," sein."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Gibt `true` (1) zur\xfcck, wenn der angegebene Sensor eine Linie detektiert.\nbool siehtSensorSchwarz(byte pSensorIndex) {\n  const int schwellwertLinie = 500;\n  return lineSensorValues[pSensorIndex] > schwellwertLinie; // lineSensorValues[] wird mit readLine() oder readCalibrated() aktualisiert\n}\n")),(0,a.kt)("h3",{id:"funktion-istkreuzung"},"Funktion ",(0,a.kt)("inlineCode",{parentName:"h3"},"istKreuzung()")),(0,a.kt)("p",null,"Die Funtion ",(0,a.kt)("inlineCode",{parentName:"p"},"istKreuzung()")," soll nun mit Hilfe der Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"siehtSensorSchwarz()")," Kreuzungen und \xe4hnliches erkennen. In der folgende Abbildung sind einige m\xf6gliche ",(0,a.kt)("em",{parentName:"p"},"Kreuzungstypen")," und die zugeh\xf6rigen Zust\xe4nde der Bodensensoren dargestellt. Nutzen Sie diese Abbildung, um sich eine geeignete Bedingung zum Erkennen einer Kreuzung zu \xfcberlegen. Damit die Bedingung funktioniert, sollten Sie den Zustand verschiedener Sensoren mit logischen Ausdr\xfccken (UND ",(0,a.kt)("inlineCode",{parentName:"p"},"&&"),", ODER ",(0,a.kt)("inlineCode",{parentName:"p"},"||"),") verkn\xfcpfen."),(0,a.kt)("img",{src:"/img/robotik/Kreuzungen.png",alt:"Erkennen von Kreuzungen",width:"550px",class:"center"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bool istKreuzung(){\n  /* --- Pseudo-Code ---\n  wenn (Kreuzung mit Bodensensoren erkannt)\n    return true\n  ansonsten\n    return false  \n  ---------------------- */\n}\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\xdcBEN")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},"Schreiben Sie ein Programm, welches den Roboter einer Linie folgen l\xe4sst und bei jeder Kreuzung (bzw. W\xfcste oder Unterbrechung) stehen bleibt.")))),(0,a.kt)("h2",{id:"auf-kreuzungen-reagieren"},"Auf Kreuzungen reagieren"),(0,a.kt)("h3",{id:"funktion-drehenlinksrechtsint-prichtung"},"Funktion ",(0,a.kt)("inlineCode",{parentName:"h3"},"drehenLinksRechts(int pRichtung)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#define LINKS 1\n#define RECHTS 2\n\nvoid drehenLinksRechts(int pRichtung){\n  const int drehZeit = 200; // in Millisekunden\n  const int mSpeed = 100;\n\n  // 1. F\xe4hrt bis zur Mitte der Kreuzung ...\n  \n  // 2. Drehen um ca. 30 bis 60 Grad\n  if(pRichtung == LINKS){\n    motors.setSpeeds(-mSpeed, mSpeed);\n    delay(drehZeit);\n    // ...  \n  }\n  else if (pRichtung == RECHTS){\n    // ...\n  }\n\n  // 3. Weiter drehen, bis der Mittelsensor [2] die Linie wieder erkennt\n}\n")),(0,a.kt)("h3",{id:"funktion-reagierenkreuzung"},"Funktion ",(0,a.kt)("inlineCode",{parentName:"h3"},"reagierenKreuzung()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#define LINKS 1\n#define RECHTS 2\n\n\nvoid reagierenKreuzung(int pKreuzNummer) {\n  // F\xfcr jede Kreuzung wird die zugeh\xf6rige Aktion als `case` hinterlegt.\n  switch (pKreuzNummer) {\n    case 1:\n    case 2:\n    case 5:\n      drehenLinksRechts(RECHTS);\n      break;\n\n    case 3:\n      fahrenWueste();\n      break;\n\n      // Weitere Anweisungen ...\n  }\n}\n")),(0,a.kt)("h2",{id:"hilfsfunktion-zum-debuggen"},"Hilfsfunktion zum Debuggen"),(0,a.kt)("p",null,"Die Hilfsfunktion ",(0,a.kt)("inlineCode",{parentName:"p"},"showIntersectionReadings()")," gibt auf dem Display zuerst die Sensorwerte des ganz linken und ganz rechten Sensors aus. Nach vier Sekunden wird die Anzeige ge\xe4ndert, und die Werte des mittleren Sensors und die Position der Linie wird ausgegeben."),(0,a.kt)("p",null,"Verwenden Sie die Funktion zum Testen, ob der Roboter an den Kreuzungen auch wirklich das erkennt, was sie vermuten. Nutzen Sie die, oder eine \xe4hnliche Funktion, lieber einmal zu viel als zu wenig. Es kann Ihnen viel M\xfche und Kopfzerbrechen ersparen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},'void showIntersectionReadings() {\n  char msg1[8];\n  char msg2[8];\n\n  delay(1000);\n  int lPosition = lineSensors.readLine(lineSensorValues); // aktualisiere der Sensorwertee\n\n\n  sprintf(msg1, "0: %4d", lineSensorValues[0]); // Sensor ganz links\n  lcd.gotoXY(0, 0); lcd.print(msg1);\n  sprintf(msg2, "4: %4d", lineSensorValues[4]); // Sensor ganz rechts\n  lcd.gotoXY(0, 1); lcd.print(msg2);\n  delay(4000);\n\n  sprintf(msg1, "2:  %4d", lineSensorValues[2]);  // Sensor mitte\n  lcd.gotoXY(0, 0); lcd.print(msg1);\n  sprintf(msg2, "Pos %4d", lPosition);           // Positin der Linie\n  lcd.gotoXY(0, 1); lcd.print(msg2);\n  delay(4000);\n  lcd.clear();\n}\n')),(0,a.kt)("p",null,"Zum Ausgeben der Werte auf dem Display wird die Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"sprintf()")," genutzt. Die Funktion erlaubt es Text und Zahlenwerte nach bestimmten Regeln zu formatieren und ein eine neue Variable (hier den ",(0,a.kt)("inlineCode",{parentName:"p"},"char"),"-Array ",(0,a.kt)("inlineCode",{parentName:"p"},"msg1[]")," oder ",(0,a.kt)("inlineCode",{parentName:"p"},"msg2[]")," zu schreiben und anschlie\xdfend mit ",(0,a.kt)("inlineCode",{parentName:"p"},"lcd.print(msg1)")," auf dem LCD-Display auszugeben."),(0,a.kt)("h3",{id:"sprintf"},(0,a.kt)("inlineCode",{parentName:"h3"},"sprintf()")),(0,a.kt)("p",null,"Das Prozentzeihen ",(0,a.kt)("inlineCode",{parentName:"p"},"%")," markiert einen Platzhalter f\xfcr Zahlenwerte, die formatiert werden sollen. So wird zum Beispiel mit ",(0,a.kt)("inlineCode",{parentName:"p"},"%4d")," ein Integerwert ausgeben und nach links Platz f\xfcr 4 Stellen bereitgestellt. Hat der Integerwert weniger als 4 Stellen, so wird an der Stelle ein Leerzeichen ausgegeben. Siehe auch ",(0,a.kt)("a",{parentName:"p",href:"https://de.wikibooks.org/wiki/C-Programmierung:_Einfache_Ein-_und_Ausgabe"},"hier"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Arduino"},"int wert1 = 80;\nsprintf(msg1, \"Wert:%4d\", wert1); //\n// Ausgabe: 'Num:  80'\nint wert1 = 1280;\nsprintf(msg1, \"Num:%4d\", wert2);\n// Ausgabe: 'Wert:2280'\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"}," Das LCD-Display des Zumo 32u4 hat pro Zeil nur 8 Zeichen. Also sollten nicht mehr als 8 Zeichen pro Zeile ausgegeben werden."))))}c.isMDXComponent=!0}}]);