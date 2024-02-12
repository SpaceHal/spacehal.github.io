"use strict";(self.webpackChunkspace_hal=self.webpackChunkspace_hal||[]).push([[7558],{3905:(e,n,r)=>{r.d(n,{Zo:()=>o,kt:()=>k});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},o=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),g=d(r),p=i,k=g["".concat(s,".").concat(p)]||g[p]||m[p]||a;return r?t.createElement(k,u(u({ref:n},o),{},{components:r})):t.createElement(k,u({ref:n},o))}));function k(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,u=new Array(a);u[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:i,u[1]=l;for(var d=2;d<a;d++)u[d]=r[d];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9779:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=r(7462),i=(r(7294),r(3905));const a={title:"Mit einem Roboter ein Labyrinth l\xf6sen",sidebar_label:"Labyrinth",custom_edit_url:null,keywords:["Arduino","Roboter","Linienfolger","Zumo 32U4","Labyrinth","Labyrinth l\xf6sen","Rechte Hand Regel","Linke Hand Regel","Linke Hand Regel Labyrinth","Rechte Hand Regel Labyrinth","Labyrinth Algorithmus"]},u=void 0,l={unversionedId:"robotik/maze",id:"robotik/maze",title:"Mit einem Roboter ein Labyrinth l\xf6sen",description:"Einf\xfchrung",source:"@site/docs/robotik/maze.md",sourceDirName:"robotik",slug:"/robotik/maze",permalink:"/docs/robotik/maze",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"Mit einem Roboter ein Labyrinth l\xf6sen",sidebar_label:"Labyrinth",custom_edit_url:null,keywords:["Arduino","Roboter","Linienfolger","Zumo 32U4","Labyrinth","Labyrinth l\xf6sen","Rechte Hand Regel","Linke Hand Regel","Linke Hand Regel Labyrinth","Rechte Hand Regel Labyrinth","Labyrinth Algorithmus"]},sidebar:"mySidebar",previous:{title:"Barcode Auslesen",permalink:"/docs/robotik/botBarcode"},next:{title:"Gitternavigation",permalink:"/docs/robotik/gridNavigation"}},s={},d=[{value:"Einf\xfchrung",id:"einf\xfchrung",level:2},{value:"Unterschiedliche Kreuzungstypen erkennen",id:"unterschiedliche-kreuzungstypen-erkennen",level:2},{value:"Aufz\xe4hlungsdatentyp <code>enum</code> f\xfcr die Kreuzungstypen",id:"aufz\xe4hlungsdatentyp-enum-f\xfcr-die-kreuzungstypen",level:3},{value:"Bestimmen des Kreuzungstypes",id:"bestimmen-des-kreuzungstypes",level:3},{value:"Funktion <code>fahrenZurKreuzung()</code>",id:"funktion-fahrenzurkreuzung",level:3},{value:"<code>aufLinie()</code>",id:"auflinie",level:4},{value:"Funktion <code>bestimmenKreuzung()</code>",id:"funktion-bestimmenkreuzung",level:3},{value:"<code>fahrenStreckeMM()</code>",id:"fahrenstreckemm",level:4},{value:"Abbiegen an Kreuzungen",id:"abbiegen-an-kreuzungen",level:2},{value:"L\xf6sen des Labyrinths mit Rechter-Hand-Regel",id:"l\xf6sen-des-labyrinths-mit-rechter-hand-regel",level:2},{value:"Optimierung der Rechten-Hand-Regel",id:"optimierung-der-rechten-hand-regel",level:2},{value:"Tr\xe9maux-Algorithmus",id:"tr\xe9maux-algorithmus",level:2},{value:"Der Algorithmus",id:"der-algorithmus",level:4},{value:"Links",id:"links",level:2}],o={toc:d},g="wrapper";function m(e){let{components:n,...r}=e;return(0,i.kt)(g,(0,t.Z)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"einf\xfchrung"},"Einf\xfchrung"),(0,i.kt)("p",null,"Neben dem ",(0,i.kt)("a",{parentName:"p",href:"/docs/robotik/edgeFollower"},"Linienfolger")," ist das L\xf6sen eines Labyrinths eine ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=2V6QE0GJ-zw"},"beliebte")," Aufgabe f\xfcr mobile Roboter. Labyrinthe gibt es in vielen verschiedenen Formen und Gr\xf6\xdfen. Die im Folgenden beschriebenen Ans\xe4tze und Ideen beziehen sich alle auf Labyrinthe, bei denen die Pfade mit einer schwarzen Linie auf wei\xdfem Grund dargestellt sind und Abzweigungen immer im 90 Grad Winkel erfolgen. "),(0,i.kt)("img",{src:"/img/robotik/MazeOverview.png",alt:"Allgemeines Labyrinth",width:"400px",className:"center"}),(0,i.kt)("p",null,"Im Wesentlichen kann das L\xf6sen eines Labyrinths in ",(0,i.kt)("strong",{parentName:"p"},"vier unterschiedliche Teilaufgaben")," unterteilt werden:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Der Roboter muss einer ",(0,i.kt)("a",{parentName:"li",href:"../category/linienfolger"},"Linie folgen")," k\xf6nnen. "),(0,i.kt)("li",{parentName:"ol"},"Der Roboter muss die unterschiedlichen  ",(0,i.kt)("a",{parentName:"li",href:"/docs/robotik/maze#unterschiedliche-kreuzungstypen-erkennen"},"Kreuzungen erkennen"),"."),(0,i.kt)("li",{parentName:"ol"},"Der Roboter muss an einer Kreuzung zu jeden beliebigen Weg ",(0,i.kt)("a",{parentName:"li",href:"/docs/robotik/maze#abbiegen-an-kreuzungen"},"abbiegen")," k\xf6nnen. "),(0,i.kt)("li",{parentName:"ol"},"Der Roboter ben\xf6tigt Regeln (z.B. Rechte-Hand-Regel), wie er das ",(0,i.kt)("a",{parentName:"li",href:"/docs/robotik/maze#l%C3%B6sen-des-labyrinths-mit-rechter-hand-regel"},"Ende des Labyrinths")," finden soll.")),(0,i.kt)("p",null,"Im Folgenden wird auf die Realisierung der Punkte 2 bis 4 eingegangen. Algorithmen f\xfcr einen ",(0,i.kt)("a",{parentName:"p",href:"../category/linienfolger"},"Linienfolger")," wurden an anderer Stelle besprochen und werden hier nicht weiter aufgef\xfchrt.  "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Auch wenn sich die folgenden Programmausz\xfcge auf den Roboter ",(0,i.kt)("a",{parentName:"p",href:"https://www.pololu.com/category/286/original-zumo-32u4-robot"},"Zumo 32u4")," der Firma Pololu beziehen, sind die Erl\xe4uterungen sehr allgemeiner Natur und sollten sich problemlos auf andere Roboter \xfcbertragen lassen.")),(0,i.kt)("h2",{id:"unterschiedliche-kreuzungstypen-erkennen"},"Unterschiedliche Kreuzungstypen erkennen"),(0,i.kt)("p",null,"Die Kreuzungserkennung des Roboters soll alle Kreuzungen (Abzweigungen, Sackgassen, Ziel) des Labyrinths erkennen. Insgesamt gibt es 8 unterschiedliche Kreuzungstypen, die mit den Bodensensoren erkannt werden k\xf6nnen. Wie in der Abbildung dargestellt, wird jedem Kreuzungstyp eine Abk\xfcrzung (L, R, LG, RG, etc.) zugewiesen, welche sp\xe4ter zum L\xf6sen des Labyrinths ben\xf6tigt werden."),(0,i.kt)("img",{src:"/img/robotik/IntersectionTypes.png",alt:"Kreuzungstypen beim Labyrinth",width:"600px",className:"center"}),(0,i.kt)("h3",{id:"aufz\xe4hlungsdatentyp-enum-f\xfcr-die-kreuzungstypen"},"Aufz\xe4hlungsdatentyp ",(0,i.kt)("inlineCode",{parentName:"h3"},"enum")," f\xfcr die Kreuzungstypen"),(0,i.kt)("p",null,"\xc4hnlich wie bei den ",(0,i.kt)("a",{parentName:"p",href:"/docs/arduino/stateMachine#enum-aufz%C3%A4hlungstyp"},"endlichen Automaten"),", macht es auch bei den Kreuzungstypen Sinn, einen eigenen Datentyp (",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp"),") f\xfcr die verschiedenen Kreuzungen zu erstellen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Deklaration eines neuen Datentyps `KreuzungsTyp`\nenum KreuzungsTyp {L, R, LR, LG, RG, LRG, S, ZIEL};\n")),(0,i.kt)("p",null,"Damit l\xe4sst sich dann eine Variable vom erstellten Datentyp ",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp")," deklarieren und ihr zum Beispiel den Wert ",(0,i.kt)("inlineCode",{parentName:"p"},"LRG")," f\xfcr eine Kreuzung mit 4 Abzweigungen zuweisen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"KreuzungsTyp kreuzung = LRG;  // Variable `kreuzung` vom Typ `KreuzungsTyp`\n")),(0,i.kt)("p",null,"Au\xdferdem kann eine Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"bestimmenKreuzung()")," definiert werden, deren R\xfcckgabewert vom Typ ",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp")," ist:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Funktion mit R\xfcckgabewert vom Typ `KreuzungsTyp`\nKreuzungsTyp bestimmenKreuzung(){  \n    // ...\n}\n")),(0,i.kt)("p",null,"Dadurch l\xe4sst sich die gesamte ",(0,i.kt)("strong",{parentName:"p"},"Kreuzungserkennung")," in einer Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"bestimmenKreuzung()")," durchf\xfchren und das Ergebnis wird als Datentyp ",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp")," zur\xfcckgegeben. Das vollst\xe4ndige Programm zum L\xf6sen des Labyrinths wird damit deutlich lesbarer und strukturierter."),(0,i.kt)("h3",{id:"bestimmen-des-kreuzungstypes"},"Bestimmen des Kreuzungstypes"),(0,i.kt)("img",{src:"/img/robotik/IntersectionErkennung.png",alt:"Kreuzungstypen erkennen",width:"580",className:"center"}),(0,i.kt)("p",null,"Das Bestimmen der Kreuzungstypen f\xfcr einen Roboter, dessen ",(0,i.kt)("strong",{parentName:"p"},"Bodensensoren auf einer Linie")," angeordnet sind (z.B. Zumo 32u4) erfolgt in drei Schritten:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Der Roboter folgt so lange der Linie, bis ",(0,i.kt)("strong",{parentName:"li"},"einer")," der ",(0,i.kt)("strong",{parentName:"li"},"\xe4u\xdferen Sensoren eine Abzweigung erkennt")," (",(0,i.kt)("em",{parentName:"li"},"Welche Bedingung muss f\xfcr eine Sackgasse erf\xfcllt sein?"),")"),(0,i.kt)("li",{parentName:"ol"},"Anschlie\xdfend sollte der Roboter bis ",(0,i.kt)("strong",{parentName:"li"},"auf die Mitte der Linie fahren"),". Dort wird erneut ",(0,i.kt)("strong",{parentName:"li"},"auf Abzweigungen \xfcberpr\xfcft"),". So wird sicher gestellt, dass alle Abzweigungen erkannt werden, auch wenn der Roboter nicht ganz senkrecht auf die Abzweigungen trifft."),(0,i.kt)("li",{parentName:"ol"},"Im n\xe4chsten Schritt ",(0,i.kt)("strong",{parentName:"li"},"f\xe4hrt")," der Roboter ",(0,i.kt)("strong",{parentName:"li"},"\xfcber die Linie hinweg"),". F\xfcr das sp\xe4ter folgende Abbiegen ist es am besten, wenn er genau mittig auf der Kreuzung stehen bleibt. Nun kann der Roboter \xfcberpr\xfcfen, ob es auch einen zus\xe4tzlichen ",(0,i.kt)("strong",{parentName:"li"},"Weg geradeaus")," gibt oder ob das Ziel (Ende des Labyrinths) erreicht wurde.")),(0,i.kt)("p",null,"Der 1. Schritt wird mit der ",(0,i.kt)("a",{parentName:"p",href:"/docs/robotik/maze#funktion-fahrenzurkreuzung"},"Funktion ",(0,i.kt)("inlineCode",{parentName:"a"},"fahrenZurKreuzung()"))," und der 2. und 3. Schritt mit der ",(0,i.kt)("a",{parentName:"p",href:"/docs/robotik/maze#funktion-bestimmenkreuzung"},"Funktion ",(0,i.kt)("inlineCode",{parentName:"a"},"bestimmenKreuzung()"))," realisiert."),(0,i.kt)("h3",{id:"funktion-fahrenzurkreuzung"},"Funktion ",(0,i.kt)("inlineCode",{parentName:"h3"},"fahrenZurKreuzung()")),(0,i.kt)("p",null,"Die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"fahrenZurKreuzung()")," soll den Roboter solange der Linie folgen lassen, bis ein Bodensensor den Beginn einer Kreuzung erkennt (1. Schritt). Wurde der Beginn einer Kreuzung erkannt, wird anschlie\xdfend die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"bestimmenKreuzung()")," zum Ermitteln des Kreuzungstypes aufgerufen (2. und 3. Schritt)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Folgt der Linie bis zur n\xe4chsten Kreuzung und \n// gibt den erkannten Kreuzungstyp zur\xfcck.\nKreuzungsTyp fahrenZurKreuzung() {\n  bool kreuzung = false;\n\n  // der Linie folgen, bis eine Kreuzung erkannt wurde\n  while (!kreuzung) { \n    folgenLinie();\n\n    // Bedingung f\xfcr eine Kreuzung (oder Sackgasse), \n    // wenn alle Sensoren auf einer Linie sind (z.B. Zumo).\n    // Sind die Bodensensoren auf einem Kreisbogen angeordnet (3pi+),\n    // gibt es eine bessere Bedingung ..\n    kreuzung = aufLinie(0) || aufLinie(4) || !aufLinie(2);\n  }\n  \n  motors.setSpeeds(0,0); // stoppen bei Kreuzung ...\n  // ... und `bestimmenKreuzung()` aufrufen und das Ergebnis zur\xfcckgeben.\n  return bestimmenKreuzung(); \n}\n")),(0,i.kt)("p",null,"Die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"folgenLinie()")," realisiert den Algorithmus zum ",(0,i.kt)("a",{parentName:"p",href:"../category/linienfolger"},"Linienfolgen")," mit einem geeignetem Algorithmus."),(0,i.kt)("h4",{id:"auflinie"},(0,i.kt)("inlineCode",{parentName:"h4"},"aufLinie()")),(0,i.kt)("p",null,"Die in ",(0,i.kt)("inlineCode",{parentName:"p"},"fahrenZurKreuzung()")," verwendete Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"bool aufLinie(byte pSensor)")," gibt ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," zur\xfcck, wenn sich der angegebene Bodensensor \xfcber einer schwarzen Linie befindet und ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", wenn der Sensor keine Linie erkannt hat. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Die Funktion aktualisiert NICHT die Sensorwerte. \n// Zum Auslesen der Sensoren die Funktion readCalibrated() aufrufen.\nbool aufLinie(byte pSensor) {\n  const int schwelleLinie = 100;                    // Schwellert zum Erkennen einer Abzweigung\n  return lineSensorValues[pSensor] > schwelleLinie; // globaler Array `lineSensorValues[]`\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Zum Erkennen einer Kreuzung sollte ein m\xf6glichst kleiner Schwellwert f\xfcr die Sensoren verwendet werden (z.B. ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),"). Ist der Schwellwert zu gro\xdf, wird der Algorithmus zum Linienfolgen zu lange ausgef\xfchrt und f\xfchrt so zu einer ungenauen Positionierung des Roboters an der Kreuzung (der Roboter w\xfcrde leicht schr\xe4g an der Kreuzung stehen).")),(0,i.kt)("h3",{id:"funktion-bestimmenkreuzung"},"Funktion ",(0,i.kt)("inlineCode",{parentName:"h3"},"bestimmenKreuzung()")),(0,i.kt)("p",null,"Der 2. und 3. Schritt f\xfcr die ",(0,i.kt)("a",{parentName:"p",href:"/docs/robotik/maze#bestimmen-des-kreuzungstypes"},"Bestimmung des Kreuzungstypes")," soll mit der Funktion  ",(0,i.kt)("inlineCode",{parentName:"p"},"bestimmenKreuzung()")," umgesetzt werden. Ohne die fertige Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"bestimmenKreuzung()")," zu pr\xe4sentieren, sollen an dieser Stelle ein paar Hinweise zur m\xf6glichen Realisierung gegeben werden. "),(0,i.kt)("p",null,"Die Hauptaufgabe der Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"bestimmenKreuzung()")," ist das Erkennen der Kreuzungstypen. Deshalb sollte die Funktion vom Typ ",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp")," sein und am Ende den ermittelten Kreuzungstyp zur\xfcckgegeben."),(0,i.kt)("p",null,"Das Erkennen des Kreuzungstyps wird wie oben beschrieben umgesetzt. Da sich die verschiedenen Kreuzungstypen aber aus unterschiedlichen Kombinationen von erkannten Abzweigungen ergibt, werden die boolschen Variablen ",(0,i.kt)("inlineCode",{parentName:"p"},"lLinks"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lRechts")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"lGerade")," genutzt, um zuerst die erkannten Abzweigungen zu speichern."),(0,i.kt)("p",null,"Anschlie\xdfend wird der sich ",(0,i.kt)("strong",{parentName:"p"},"ergebende Kreuzungstyp")," bestimmt und als Wert vom Typ ",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp")," (also ",(0,i.kt)("inlineCode",{parentName:"p"},"L"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"R"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"LG"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RG"),", etc.) von der Funktion zur\xfcckgegeben."),(0,i.kt)("p",null,"Damit der Roboter die Kreuzungen zuverl\xe4ssig erkennt, sollte f\xfcr die Positionierung auf der Linie (2. Schritt) und der Positionierung mittig auf der Kreuzung (3. Schritt) der ",(0,i.kt)("a",{parentName:"p",href:"/docs/robotik/wheelEncoder#auslesen-der-rad-encoder-beim-zumo-32u4"},"Motorencoder")," verwendet werden. Eine einfache Positionierung mit einer Zeitsteuerung kann gelegentlich funktionieren, stellt aber eine sehr fehleranf\xe4llige L\xf6sung dar."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// Bestimmen des Kreuzungstypes. \n// Die Funktion sollte aufgerufen werden, sobald ein Sensor\n// etwas anderes als der zu folgenden Linie erkennt.\nKreuzungsTyp bestimmenKreuzung(){\n    // An der Kreuzung erkannte Abzweigungen (0: keine Abzweigung)\n    bool lLinks  = 0;   // Abzweigung links \n    bool lRechts = 0;   // Abzweigungs rechts\n    bool lGerade = 0;   // Weg gereadeaus\n    \n    /*\n    Die Funktion wird aufgerufen, wenn bereits ein Sensor einen Abzweig erkannt hat.\n        1. Die Sensoren auf die Mitte der Linie positionieren (Motorencoder verwenden!).\n        2. Sensorwerte einlesen.\n        3. Abzweigungen bestimmten und `lLinks`/`lRechts` entsprechend setzen.\n        4. Weiterfahren, bis der Roboter mittig auf der Kreuzung steht.\n        5. Sensorwerte einlesen\n        6. `lGerade` setzen und auf Ziel \xfcberpr\xfcfen\n    */\n\n    // Funktion gibt mit `return` den ermittelten KreuzungsTyp zur\xfcck\n    if (/* Abzweigung links */){\n        return L;\n    }\n    else if (/* Abzweigung rechts */){\n        return R;\n    }\n    else if (/* Abzweigung links, gerade*/){\n        return LG;\n    }\n    /* usw. */\n}\n")),(0,i.kt)("h4",{id:"fahrenstreckemm"},(0,i.kt)("inlineCode",{parentName:"h4"},"fahrenStreckeMM()")),(0,i.kt)("p",null,"Au\xdferdem wird die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"fahrenStreckeMM()")," ben\xf6tigt, welche den Roboter mit Hilfe der Radencoder eine exakte Strecke zur\xfccklegen l\xe4sst. Dadurch wird die exakte Positionierung des Roboters auf der Kreuzung vereinfacht."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#define MM_PRO_IMPULS 0.128  // Encoderaufl\xf6sung (Zumo 32u4 Standard)\n\nvoid fahrenStreckeMM(int pSpeed, int pStreckeMM){\n  long encoderImpulse = pStreckeMM / MM_PRO_IMPULS;\n  \n  // Zu programmierende Eigenschaft:\n  // Fahre solange geradeaus, wie die mittlere Anzahl\n  // beider Motorenencoder kleiner als `encoderImpulse` ist\n  // ... \n}\n")),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("p",null,"Schreiben Sie eine Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp fahrenZurKreuzung()"),", welche den Roboter einer Linie entlang bis zu einer Kreuzung folgt, den Kreuzungstyp der Linie bestimmt (es sollen alle Typen erkannt werden) und stoppt. Der ",(0,i.kt)("strong",{parentName:"p"},"R\xfcckgabewert")," der Funktion ist der ermittelte Kreuzungstyp."),(0,i.kt)("p",null,"Verwenden Sie die selbstgeschriebene Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"KreuzungsTyp fahrenZurKreuzung()"),", um mit dem Roboter ",(0,i.kt)("strong",{parentName:"p"},"beliebige")," Kreuzungstypen zu erkennen und auf dem Display ausgeben zu lassen.  Nachdem eine Kreuzung erkannt wurde, folgt der Roboter auf Knopfdruck erneut der Linie bis zur n\xe4chsten Kreuzung. Bei dieser Aufgabe soll der Roboter noch keine Funktion zum Abbiegen an Kreuzungen implementiert haben (folgt sp\xe4ter).")),(0,i.kt)("h2",{id:"abbiegen-an-kreuzungen"},"Abbiegen an Kreuzungen"),(0,i.kt)("p",null,"Das Abbiegen an Kreuzungen wurde bereits an anderes ",(0,i.kt)("a",{parentName:"p",href:"/docs/robotik/advancedLine#funktion-abbiegenint-prichtung"},"Stelle")," besprochen. An dieser Stelle soll aber darauf hingewiesen werden, dass das Drehen zum Abzweig nur mit einer zeitlichen Verz\xf6gerung (",(0,i.kt)("inlineCode",{parentName:"p"},"delay()"),") nicht besonders sicher funktioniert. Deutlich genauer ist es, wenn sich der Roboter solange dreht, bis der mittlere Bodensensor die abzweigende Linie erkannt hat. Bei einer breiten Linie sollte ein Schwellwert von ca. ",(0,i.kt)("inlineCode",{parentName:"p"},"900")," recht gut funktionieren."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#define LEFT 1\n#define RIGHT 2\nvoid abbiegenKreuzung(int pRichtung){\n    if (pRichtung == LEFT){        // gegen den Uhrzeigersinn \n        // Drehen, bis der Roboter mittig auf der Linie steht.\n        // Unbedingt Bodensensoren zum Erkennen der Linie nutzen.\n    }\n    else if (pRichtung == RIGHT){  // mit dem Uhrzeigersinn\n        // Wie oben, nur andere Richtung ...\n    }\n}\n")),(0,i.kt)("h2",{id:"l\xf6sen-des-labyrinths-mit-rechter-hand-regel"},"L\xf6sen des Labyrinths mit Rechter-Hand-Regel"),(0,i.kt)("p",null,"Die Idee hinter der Rechten-Hand-Regel zum L\xf6sen eines Labyrinths ist recht einfach: Ber\xfchre mit einer ",(0,i.kt)("em",{parentName:"p"},"imagin\xe4ren rechten Hand")," immer die rechte Wand. Gibt es zum Beispiel einen Abzweig nach rechts, f\xe4hrt der Roboter auch nach rechts. Hat der Roboter eine Sackgasse erreicht, dreht er sich im 180 Grad und f\xe4hrt dann wieder zur\xfcck. Auf diese Weise kann jedes Labyrinth mit au\xdfenliegendem Start und Zielort gel\xf6st werden."),(0,i.kt)("img",{src:"/img/robotik/mazeRHR_1.png",alt:"Labyrinth Rechte-Hand-Regel",width:"400",className:"center"}),(0,i.kt)("p",null,"In der Abbildung ist der Weg des Roboters nach der Rechten-Hand-Regel dargestellt. Der zur\xfcckgelegt Weg kann auch als Abfolge von Aktionen (links ",(0,i.kt)("inlineCode",{parentName:"p"},"L"),", rechts ",(0,i.kt)("inlineCode",{parentName:"p"},"R"),", gerade ",(0,i.kt)("inlineCode",{parentName:"p"},"G"),", Ende ",(0,i.kt)("inlineCode",{parentName:"p"},"E"),") gespeichert werden. Im dargestellten Labyrinth ergibt sich mit der Rechten-Hand-Regel folgender Weg: ",(0,i.kt)("inlineCode",{parentName:"p"},"GZRRLZRRLE")),(0,i.kt)("p",null,"Ein ",(0,i.kt)("strong",{parentName:"p"},"Ansatz")," f\xfcr die Implementierung einer Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"fahrenMitRHR()")," k\xf6nnte wie folgt aussehen: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"void fahrenMitRHR(){               // RHR: Rechte-Hand-Regel\n  bool end = false; \n\n  while (!end){                   // `end` sollte am Ziel auf true gesetzt werden\n    KreuzungsTyp kreuzung;\n    kreuzung = fahrenZurKreuzung();\n\n    switch(kreuzung){\n        case L:                    // nur Abzweig nach links  \n          abbiegenKreuzung(LEFT);  // links abbiegen\n          break;\n        /*\n\n        case-Anweisungen f\xfcr alle anderen Kreuzungstypen\n\n        */\n    }\n}\n")),(0,i.kt)("p",null,"Eine Schleife (",(0,i.kt)("inlineCode",{parentName:"p"},"while(!end)"),") wird solange ausgef\xfchrt, wie der Roboter das Ende des Labyrinths noch nicht gefunden hat. Innerhalb der Schleife f\xe4hrt der Roboter mit ",(0,i.kt)("inlineCode",{parentName:"p"},"fahrenZurKreuzung()")," bis zur n\xe4chsten Kreuzung, ermittelt dort den Kreuzungstyp und biegt entsprechend der Rechten-Hand-Regel ab. Ist das Ende erreicht, wird der boolsche Ausdruck ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," auf ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," gesetzt und die Schleife und somit auch die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"fahrenMitRHR()")," beendet."),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Schreiben Sie ein Programm, welches den Roboter mit der Rechten-Hand-Regel von einem beliebigen Startort zum Ziel navigeren l\xe4sst. Am Ziel angekommen, soll der Roboter stehen bleiben.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Speichern Sie den zur\xfcckgelegten Weg in einem ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/reference/de/language/variables/data-types/stringobject/"},"String"),". In dem String wird f\xfcr jede Kreuzung die gew\xe4hlte Fahrtrichtung ",(0,i.kt)("inlineCode",{parentName:"p"},"L")," (links). ",(0,i.kt)("inlineCode",{parentName:"p"},"R")," (rechts), ",(0,i.kt)("inlineCode",{parentName:"p"},"G")," (gerade), ",(0,i.kt)("inlineCode",{parentName:"p"},"Z")," (zur\xfcck), ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," (Ende) abgelegt. Geben Sie an jeder Kreuzung den aktuell zur\xfcckgelegten Fahrweg auf dem Display aus."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Hinweis: Strings lassen sich einfach verkn\xfcpfen, bzw. verl\xe4ngern:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"String einString = \"\"; // Instanziiert einen leeren String\nSerial.println(test);  // (keine Ausgabe)\n\neinString += 'L';\nSerial.println(test);  // Ausgabe: L\n\neinString += 'R';\neinString += 'G';\nSerial.println(test); // Ausgabe: LRG\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"In der Arduino ",(0,i.kt)("a",{parentName:"em",href:"https://www.arduino.cc/reference/de/language/variables/data-types/stringobject/"},"Referenz")," finden sie eine Auflistung aller Methoden der String Klasse."))))),(0,i.kt)("h2",{id:"optimierung-der-rechten-hand-regel"},"Optimierung der Rechten-Hand-Regel"),(0,i.kt)("p",null,"Auch wenn der Roboter an dieser Stelle in der Lage sein sollte ein Labyrinth zu l\xf6sen, so ist der gew\xe4hlt Weg nicht unbedingt besonders kurz. Sackgassen erkennt der Roboter erst, wenn er sie erreicht hat und macht daher unn\xf6tige Umwege."),(0,i.kt)("img",{src:"/img/robotik/mazeRHR_2.png",alt:"Labyrinth Rechte-Hand-Regel",width:"400",className:"center"}),(0,i.kt)("p",null,"Betrachtet man die einzelnen Sackgassen, wird klar, dass der Roboter auch vorher abbiegen kann. Die zuerst angefahrende Sackgasse kann er abk\xfcrzen, indem er sofort nach links ",(0,i.kt)("inlineCode",{parentName:"p"},"L")," f\xe4hrt und nicht erst den langen Weg gerade ",(0,i.kt)("inlineCode",{parentName:"p"},"G"),", zur\xfcck ",(0,i.kt)("inlineCode",{parentName:"p"},"Z")," und rechts ",(0,i.kt)("inlineCode",{parentName:"p"},"R")," f\xe4hrt. Aus dem Weg ",(0,i.kt)("inlineCode",{parentName:"p"},"GZR")," wird somit ",(0,i.kt)("inlineCode",{parentName:"p"},"L"),". \xc4hnlich verh\xe4lt es sich mit der zweiten Sackgasse. Hier kann der Weg ",(0,i.kt)("inlineCode",{parentName:"p"},"LZR")," zu ",(0,i.kt)("inlineCode",{parentName:"p"},"Z")," vereinfacht werden."),(0,i.kt)("p",null,"In dem nun teilweise verk\xfcrzten Weg gibt es jedoch immer noch eine Sackgasse, welche der Roboter abk\xfcrzen kann. Hier f\xfchrt der Weg ",(0,i.kt)("inlineCode",{parentName:"p"},"RZR")," zu der Abk\xfcrzung ",(0,i.kt)("inlineCode",{parentName:"p"},"L")," "),(0,i.kt)("img",{src:"/img/robotik/mazeRHR_3.png",alt:"Labyrinth Rechte-Hand-Regel",width:"400",className:"center"}),(0,i.kt)("p",null,"Aus den beiden Abbildungen ergibt sich somit eine noch ",(0,i.kt)("em",{parentName:"p"},"unvollst\xe4ndige")," Liste von Regeln zum ",(0,i.kt)("strong",{parentName:"p"},"Vereinfachen")," des Weges:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"L")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"GZR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Z")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"LZR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"G")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"RZR"))),(0,i.kt)("p",null,"Das Anwenden der Regeln auf den urspr\xfcnglichen Weg kann auf zwei Arten geschehen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Beim ersten Ansatz wird gewartet, bis der gesamte Weg mit der Rechten-Hand-Regel bestimmt wurde und anschlie\xdfend solange nach zu ersetzenden Muster gesucht, bis sich der Weg nicht weiter vereinfachen l\xe4sst."),(0,i.kt)("li",{parentName:"ul"},"Beim zweiten Ansatz werden nach jeder neu durchgef\xfchrten Aktion die letzten drei Aktionen auf ein zu ersetzendes Muster untersucht.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="Vereinfachen nachdem der Weg bestimmt wurde" showLineNumbers',title:'"Vereinfachen',nachdem:!0,der:!0,Weg:!0,bestimmt:!0,'wurde"':!0,showLineNumbers:!0},"GZRRLZRRLE       (urspr\xfcnglicher Weg)\nGZR R LZR RLE    (zwei Sackgassen GZR und LZR)\n  L  R  Z  RLE   (die beiden `Z` werde ersetzt,GZR = L, LZR = Z)\nLRZRLE           (es entsteht ein neuer Pfad)\nL RZR LE         (eine Sackgasse RZR)\nL  G  LE         (neues `Z` ersetzen, RZR = G) \nLGLE             (maximal gek\xfcrzter Weg)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Vereinfachen w\xe4hrend der Weg bestimmt wird" showLineNumbers',title:'"Vereinfachen',"w\xe4hrend":!0,der:!0,Weg:!0,bestimmt:!0,'wird"':!0,showLineNumbers:!0},"G       (1. Kreuzung: G)\nGZ      (2. Kreuzung: Z)\nGZR     (3. Kreuzung: R)\nL       (ersetzen GZR = L)\nLR      (4. Kreuzung: R)\nLRL     (5. Kreuzung: L)\nLRLZ    (6. Kreuzung: Z)\nLRLZR   (7. Kreuzung: R)\nLRZ     (ersetzen LZR = Z)\nLRZR    (8. Kreuzung: R)\nLG      (ersetzen RZR = G)\nLGL     (9. Kreuzung: L)\nLGLE    (10. Kreuzung: E -> Maximal gek\xfcrzter Weg)\n")),(0,i.kt)("details",{className:"ueben"}," ",(0,i.kt)("summary",null,"Aufgaben"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Analysieren Sie die Teilwege ",(0,i.kt)("inlineCode",{parentName:"p"},"GZG"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RZG"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RZL")," und leiten Sie f\xfcr jeden eine Vereinfachung mit nur einer Roboteraktion (",(0,i.kt)("inlineCode",{parentName:"p"},"L"),",",(0,i.kt)("inlineCode",{parentName:"p"},"R"),",",(0,i.kt)("inlineCode",{parentName:"p"},"G")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"Z"),") ab. Zeichnen Sie zu jedem Teilweg die zugeh\xf6rige Wegskizze. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Notieren Sie sich f\xfcr die beiden abgebildeten Labyrinthe den ungek\xfcrzten Weg nach der Rechten-Hand-Regel. Schreiben Sie anschlie\xdfend ein Programm, welches den Weg so weit wie m\xf6glich k\xfcrzt. (Testen Sie Ihr Programm zuerst ohne Roboter.)"),(0,i.kt)("img",{src:"/img/robotik/mazes5by5.png",alt:"Labyrinth 1",width:"400"}),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Hinweis: Die String-Methode ",(0,i.kt)("inlineCode",{parentName:"em"},"einString.replace(s1,s2)")," ersetzt im String ",(0,i.kt)("inlineCode",{parentName:"em"},"einString")," den Teilstring ",(0,i.kt)("inlineCode",{parentName:"em"},"s1")," durch den Teilstring ",(0,i.kt)("inlineCode",{parentName:"em"},"s2"),". ",(0,i.kt)("a",{parentName:"em",href:"https://www.arduino.cc/reference/de/language/variables/data-types/string/functions/replace/"},"Link"),".")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://wokwi.com/projects/356664243071234049"},"Wokwi"),": Weg k\xfcrzen RHR"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lassen Sie den Roboter in zwei L\xe4ufen durch ein Labyrinth fahren. Bei der ersten Fahrt findet der Roboter mit der Rechten-Hand-Regel das Ziel und beim zweiten Lauf f\xe4hrt er auf verk\xfcrztem Weg zum Ziel."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Variation: Der Roboter f\xe4hrt mit der Rechten-Hand-Regel vom Start zum Ziel, dreht dort um und f\xe4hrt auf m\xf6glichst kurzem Weg zur\xfcck zum Start."))))),(0,i.kt)("h2",{id:"tr\xe9maux-algorithmus"},"Tr\xe9maux-Algorithmus"),(0,i.kt)("p",null,"Die Rechte-Hand-Regel ist einfach zu implementieren und findet in vielen Labyrinthen auch sicher das Ziel. Eine Einschr\xe4nkung gibt es allerdings: Befindet sich der Start oder das Ziel im Inneren des Labyrinths und hat das Labyrinth Schleifen, so wird die Rechte-Hand-Regel nicht immer das Ziel finden."),(0,i.kt)("p",null,"Bei solchen Labyrinthen (und auch allen anderen) findet der Tr\xe9maux-Algorithmus, benannt nach dem Franzosen Charles Pierre Tr\xe9maux (1859\u20131882), sicher das Ziel. Beim Tr\xe8maux-Algorithmus werden Markierungen verwendet, um bereits abgegangene Pfade zu markieren, und somit auch etwaige Schleifen zu erkennen."),(0,i.kt)("h4",{id:"der-algorithmus"},"Der Algorithmus"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Beim ",(0,i.kt)("strong",{parentName:"p"},"Betreten")," und ",(0,i.kt)("strong",{parentName:"p"},"Verlassen")," wird der jeweilige Weg an der Kreuzung immer ",(0,i.kt)("strong",{parentName:"p"},"markiert"),". Ein Weg beginnt bzw. endet immer an einer Kreuzung."),(0,i.kt)("p",null,"An einer Kreuzung wird die ",(0,i.kt)("strong",{parentName:"p"},"erste m\xf6gliche")," Regel der folgenden Regel angewendet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ist ",(0,i.kt)("strong",{parentName:"li"},"nur")," der ",(0,i.kt)("strong",{parentName:"li"},"aktuelle Eingang")," (aktueller Weg) markiert, gehe beliebigen anderen Weg."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Weitere Wege")," sind markiert, dann gehe zur\xfcck. Markiere den Eingang ein zweites Mal."),(0,i.kt)("li",{parentName:"ul"},"Der Eingang ist ",(0,i.kt)("strong",{parentName:"li"},"2 mal markiert"),", folge dem Weg mit den wenigsten Markierungen")),(0,i.kt)("p",null,"Wurde mit dem Tr\xe9maux-Algorithmus des Ende des Labyrinths gefunden, kann der Weg zur\xfcck zum Ziel ganz einfach gefunden werden, indem nur dem Weg gefolgt wird, welcher nicht mit zwei Markierungen versperrt ist."),(0,i.kt)("hr",null),(0,i.kt)("img",{src:"/img/robotik/tremaux.webp",alt:"Treamaux Algorithmus",width:"550",className:"center"}),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.mazegenerator.net/"},"Maze Generator - Erzeugt fast beliebige Labyrinthe")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://patrickmccabemakes.com/tutorials/Maze_Solving/"},"Maze Solving")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.instructables.com/Maze-Solving-Robot/"},"Maze Solving Robot")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pololu.com/file/0J195/line-maze-algorithm.pdf"},"Teaching a Robot to Solve a Line Maze")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://am.heise.de/abo/06_ma_education/Labyrinth.pdf?wt_mc=intern.abo.make.education.lp_ad.9.9"},"Arduino findet durch Labyrinth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://thecodingtrain.com/challenges/10-dfs-maze-generator"},"Maze Generator with Processing - Tutorial"))))}m.isMDXComponent=!0}}]);