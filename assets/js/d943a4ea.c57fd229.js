"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[5579],{3905:function(e,n,i){i.d(n,{Zo:function(){return u},kt:function(){return c}});var r=i(7294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function s(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var d=r.createContext({}),l=function(e){var n=r.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},u=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var i=e.components,t=e.mdxType,s=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(i),c=t,h=m["".concat(d,".").concat(c)]||m[c]||p[c]||s;return i?r.createElement(h,o(o({ref:n},u),{},{components:i})):r.createElement(h,o({ref:n},u))}));function c(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=i.length,o=new Array(s);o[0]=m;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:t,o[1]=a;for(var l=2;l<s;l++)o[l]=i[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},7638:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var r=i(7462),t=i(3366),s=(i(7294),i(3905)),o={title:"Die Liniensensoren",sidebar_label:"Liniensensoren",description:"Die Liniensensoren des Zumo32u4",custom_edit_url:null},a=void 0,d={unversionedId:"zumo32u4/lineSensor",id:"zumo32u4/lineSensor",isDocsHomePage:!1,title:"Die Liniensensoren",description:"Die Liniensensoren des Zumo32u4",source:"@site/docs/zumo32u4/lineSensor.md",sourceDirName:"zumo32u4",slug:"/zumo32u4/lineSensor",permalink:"/docs/zumo32u4/lineSensor",editUrl:null,version:"current",frontMatter:{title:"Die Liniensensoren",sidebar_label:"Liniensensoren",description:"Die Liniensensoren des Zumo32u4",custom_edit_url:null},sidebar:"sideBarZumo",previous:{title:"LCD-Display",permalink:"/docs/zumo32u4/display"},next:{title:"N\xe4herungssensoren",permalink:"/docs/zumo32u4/proxy"}},l=[{value:"Einf\xfchrung",id:"einf\xfchrung",children:[]},{value:"Konfigurieren",id:"konfigurieren",children:[{value:"<code>void initThreeSensors()</code>",id:"void-initthreesensors",children:[]},{value:"<code>void initFiveSensors()</code>",id:"void-initfivesensors",children:[]},{value:"<code>void init(...)</code>",id:"void-init",children:[]},{value:"<code>void calibrate()</code>",id:"void-calibrate",children:[]}]},{value:"Messen",id:"messen",children:[{value:"<code>void read(...)</code>",id:"void-read",children:[]},{value:"<code>void readCalibrated(...)</code>",id:"void-readcalibrated",children:[]},{value:"<code>int readLine(...)</code>",id:"int-readline",children:[]}]}],u={toc:l};function p(e){var n=e.components,i=(0,t.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Pololu Zumo 32u4 Library: ",(0,s.kt)("a",{parentName:"em",href:"https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_line_sensors.html"},"Liniensensoren"))),(0,s.kt)("h2",{id:"einf\xfchrung"},"Einf\xfchrung"),(0,s.kt)("p",null,"Der Zumo32u4 hat f\xfcnf unabh\xe4ngige IR-Bodensensoren, welche Linien oder auch Abgr\xfcnde detektieren k\xf6nnen. Die Sensoren befinden sich auf der Unterseite des Roboters, direkt hinter dem Metallschild. "),(0,s.kt)("img",{src:"/img/zumo32u4/ZumoLineSensor.jpg",alt:"Liniensensoren des Zumo",width:"500px",class:"center"}),(0,s.kt)("p",null," Ein einzelner ",(0,s.kt)("a",{parentName:"p",href:"https://www.pololu.com/docs/0J63/3.5"},"Bodensensor")," bestehen aus einer Reihenschaltung eines ",(0,s.kt)("a",{parentName:"p",href:"https://www.pololu.com/file/0J117/QRE1113GR.pdf"},"Fototransistors")," (welcher vereinfacht als lichtabh\xe4ngiger Widerstand angesehen werden kann) und eines Kondensators. Ist der Kondensator aufgeladen, so h\xe4ngt die Entladekurve vom Fototransistor und somit vom detektierten IR-Licht ab. Wird mit dem Mikrocontroller die Entladezeit des Kondensators gemessen, so kann damit die Menge des detektierten IR-Lichtes bestimmt werden."),(0,s.kt)("p",null,"Die Klasse ",(0,s.kt)("inlineCode",{parentName:"p"},"Zumo32U4LineSensors")," stellt alle notwendigen Methoden zum Konfigurieren, Auslesen und Weiterverabeiten der 5 IR-Bodensensoren bereit. Sie ist in der Bibliothek des Zumo 32u4 integriert und wird durch den ",(0,s.kt)("inlineCode",{parentName:"p"},"include")," Befehl in das Programm eingebunden."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-arduino"},"#inlcude <Zumo32U4.h>\n")),(0,s.kt)("h2",{id:"konfigurieren"},"Konfigurieren"),(0,s.kt)("h3",{id:"void-initthreesensors"},(0,s.kt)("inlineCode",{parentName:"h3"},"void initThreeSensors()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-arduino"},"void initThreeSensors(uint8_t emitterPin = SENSOR_LEDON)\n")),(0,s.kt)("p",null,"Initialisiert und konfiguriert das Liniensensor-Objekt so, dass ",(0,s.kt)("strong",{parentName:"p"},"drei Sensoren")," (die beiden \xe4u\xdferen und der mittlere) verwendet werden. Kann verwendet werden, wenn auch alle drei N\xe4herungssensoren genutzt werden."),(0,s.kt)("h3",{id:"void-initfivesensors"},(0,s.kt)("inlineCode",{parentName:"h3"},"void initFiveSensors()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"void initFiveSensors(uint8_t emitterPin = SENSOR_LEDON)\n")),(0,s.kt)("p",null,"Initialisiert und konfiguriert das Liniensensor-Objekt so, dass ",(0,s.kt)("strong",{parentName:"p"},"alle f\xfcnf Sensoren")," verwendet werden. Funktioniert nur, wenn die seitlichen N\xe4herungssensoren deaktiviert wurden. Korrekte Jumper-Einstellung an der Platine der Liniensensoren beachten."),(0,s.kt)("h4",{id:"beispiel"},"Beispiel"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-arduino"},"// Konfiguriert den Zumo 32u4 f\xfcr 5 Bodensensoren\n#inlcude <Zumo32U4.h>\n\nZumo32U4LineSensors lineSensors;    // Liniensensor-Objekt\nvoid setup()\n{\n    lineSensors.initFiveSensors();  // Konfiguration f\xfcr 5 Bodensensoren\n}\n")),(0,s.kt)("h3",{id:"void-init"},(0,s.kt)("inlineCode",{parentName:"h3"},"void init(...)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"void init (uint8_t *pins, uint8_t\xa0numSensors, uint16_t\xa0timeout = 2000, uint8_t\xa0emitterPin = SENSOR_LEDON\xa0)\n")),(0,s.kt)("p",null,"Initialisiert das Liniensensor-Objekt so, dass es einen benutzerdefinierten Satz von ",(0,s.kt)("inlineCode",{parentName:"p"},"pins")," verwendet. Meistens sollte die Konfiguration mit  ",(0,s.kt)("inlineCode",{parentName:"p"},"void initThreeSensors()")," oder ",(0,s.kt)("inlineCode",{parentName:"p"},"void initFiveSensors()")," ausreichen."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Das Array ",(0,s.kt)("inlineCode",{parentName:"p"},"pins")," enth\xe4lt die Arduino-Pin-Nummer f\xfcr jeden Sensor. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"numSensors")," gibt die L\xe4nge des Arrays ",(0,s.kt)("inlineCode",{parentName:"p"},"pins")," an (d.h. die Anzahl der verwendeten Linien-Sensoren).")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"timeout")," gibt die Zeitspanne in Mikrosekunden an, nach welcher der Sensor die Fl\xe4che als vollst\xe4ndig schwarz betrachtet. Das hei\xdft, wenn die Impulsl\xe4nge f\xfcr einen Pin die Zeit\xfcberschreitung \xfcberschreitet, wird das Impuls-Timing gestoppt und der Messwert f\xfcr diesen Pin wird als volles Schwarz betrachtet. Es wird empfohlen, dass der Timeout zwischen 1000 und 3000 us eingestellt wird, abh\xe4ngig vom Bodenabstand der Sensoren und der Umgebungsbeleuchtung. Die Verwendung von Timeout erm\xf6glicht es, die Dauer eines Sensorlesezyklus zu verk\xfcrzen und gleichzeitig n\xfctzliche analoge Messungen des Reflexionsgrades beizubehalten.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"emitterPin")," ist der Arduino-Pin, der die IR-LEDs Liniensensoren steuert."))),(0,s.kt)("h4",{id:"beispiel-1"},"Beispiel"),(0,s.kt)("p",null,"Initialisieren der drei mittleren IR Sensoren."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-arduino"},"#inlcude <Zumo32U4.h>\n\nZumo32U4LineSensors lineSensors;                            // Liniensensor-Objekt\n\nshort pins[] = {SENSOR_DOWN2, SENSOR_DOWN3, SENSOR_DOWN4}; // Array mit Sensor-Pins\nlineSensors.init(pins, sizeof(pins), 2000, SENSOR_LEDON);  // Initialisierung der Sensoren mit dem vorher definiertem Array \n")),(0,s.kt)("h3",{id:"void-calibrate"},(0,s.kt)("inlineCode",{parentName:"h3"},"void calibrate()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"void calibrate(unsigned char readMode = QTR_EMITTERS_ON)\n")),(0,s.kt)("p",null,"Lie\xdft die Sensorwerte f\xfcr ein Kalibrierung. Die beim wiederholden Aufrufen der Methode ermittelten Maximal- und Minimalwerte werden f\xfcr jeden Sensor einzeln abgespeichert und bei der Methode ",(0,s.kt)("inlineCode",{parentName:"p"},"readCalibrated()")," genutzt. Auf die Kalibrierungsdaten (Minimal- und Maximalwerte der Sensore) kann mit den Pointern ",(0,s.kt)("inlineCode",{parentName:"p"},"calibratedMinimumOn"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"calibratedMaximumOn")," und ",(0,s.kt)("inlineCode",{parentName:"p"},"calibratedMinimumOff"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"calibratedMaximumOff")," zugegriffen werden. Dieser Pointer zeigen auf Arrays mit der L\xe4nge ",(0,s.kt)("inlineCode",{parentName:"p"},"numSensors"),", wie es bei die Initialisierung angegeben worden ist."),(0,s.kt)("p",null,"Die Kalibrierungsdaten werden von den Methoden ",(0,s.kt)("a",{parentName:"p",href:"#void-readcalibrated#"},(0,s.kt)("inlineCode",{parentName:"a"},"readCalibrated()"))," und ",(0,s.kt)("a",{parentName:"p",href:"#int-readline"},(0,s.kt)("inlineCode",{parentName:"a"},"readLine"),"()")," verwendet."),(0,s.kt)("h4",{id:"beispiel-2"},"Beispiel"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-arduino"},"// Drehen des Roboters um +90\xb0, -180\xb0 und abschlie\xdfend +90\xb0 zum Kalibrieren der Liniensensoren\n\nfor(int i = 0; i < 120; i++)\n  {\n    if (i > 30 && i <= 90)\n    {\n      motors.setSpeeds(-200, 200);\n    }\n    else\n    {\n      motors.setSpeeds(200, -200);\n    }\n    lineSensors.calibrate();  // Kalibrierungsmethode\n  }\n  motors.setSpeeds(0, 0);\n}\n")),(0,s.kt)("h2",{id:"messen"},"Messen"),(0,s.kt)("h3",{id:"void-read"},(0,s.kt)("inlineCode",{parentName:"h3"},"void read(...)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"void read(unsigned int *sensor_values, unsigned char readMode=QTR_EMITTERS_ON)\n")),(0,s.kt)("p",null,"Liest die rohen, ",(0,s.kt)("strong",{parentName:"p"},"unkalibrierten")," Sensorwerte in einen Array ",(0,s.kt)("inlineCode",{parentName:"p"},"sensor_values"),". Es ",(0,s.kt)("strong",{parentName:"p"},"muss")," Platz f\xfcr so viele Werte vorhanden sein, wie bei der Initialisierung an Sensoren angegeben wurden.\nDie zur\xfcckgegebenen Werte sind ein Ma\xdf f\xfcr den Reflexionsgrad in abstrakten Einheiten, wobei ",(0,s.kt)("em",{parentName:"p"},"h\xf6here Werte einem niedrigeren Reflexionsgrad")," entsprechen (z.B. eine schwarze Fl\xe4che oder ein Hohlraum). "),(0,s.kt)("p",null,"Ein schwarze Linie erzeugt also einen gr\xf6\xdferen Messwert als der wei\xdfe Untergrund."),(0,s.kt)("h4",{id:"beispiel-3"},"Beispiel"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-arduino"},"Zumo32U4LineSensors lineSensors;       // Liniensensor-Objekt\n\nunsigned int lineSensorValues[3];      // Array f\xfcr drei Sensorwerte\nlineSensors.read(lineSensorValues);    // Array f\xfcr die Sensorwerte wird \xfcberschrieben\n")),(0,s.kt)("h3",{id:"void-readcalibrated"},(0,s.kt)("inlineCode",{parentName:"h3"},"void readCalibrated(...)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"void readCalibrated(unsigned int *sensor_values, unsigned char readMode=QTR_EMITTERS_ON)\n")),(0,s.kt)("p",null,"Liefert Werte, die auf einen Wert zwischen 0 und 1000 kalibriert sind, wobei 0 dem von ",(0,s.kt)("a",{parentName:"p",href:"#void-calibrate"},(0,s.kt)("inlineCode",{parentName:"a"},"void calibrate()"))," gelesenen Minimalwert entspricht und 1000 dem Maximalwert entspricht.  Die Kalibrierungswerte werden f\xfcr jeden Sensor separat gespeichert, so dass Unterschiede in den Sensoren automatisch ber\xfccksichtigt werden. Vor dem Aufruf der Methode sollte immer eine Kalibrierung mit ",(0,s.kt)("a",{parentName:"p",href:"#void-calibrate"},(0,s.kt)("inlineCode",{parentName:"a"},"void calibrate()"))," durchgef\xfchrt werden."),(0,s.kt)("p",null,"Wie bei der Methode ",(0,s.kt)("inlineCode",{parentName:"p"},"read()")," liefert ein schwarzer Untergrund gr\xf6\xdfere Werte, als ein wei\xdfer Untergrund."),(0,s.kt)("h4",{id:"beispiel-4"},"Beispiel"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-arduino"},"#define NUM_SENSORS 3\nZumo32U4LineSensors lineSensors;              // Liniensensor-Objekt\n\nunsigned int lineSensorValues[NUM_SENSORS];   // Array f\xfcr die Sensorwerte\nlineSensors.readCalibrated(lineSensorValues); // Array f\xfcr die Sensorwerte wird \xfcberschrieben\n")),(0,s.kt)("h4",{id:"beispiel-zum-auslesen-eines-einzelnen-sensorwertes"},"Beispiel zum Auslesen eines einzelnen Sensorwertes"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Arduino"},'// Mit einem Bodensensor die Linienkante detektieren\n\n#include <Zumo32U4.h>\n\nZumo32U4LineSensors lineSensors;\nZumo32U4ButtonA buttonA;\nZumo32U4Motors motors;\nZumo32U4LCD lcd;\n\n#define NUM_SENSORS 5                        // Anzahl der verwendeten Sensoren\nunsigned int lineSensorValues[NUM_SENSORS];  // Array f\xfcr die Sensorwerte\n\nint timeStamp = 0;\n\n// Kalibrierung der Bodensensoren durch automatisches drehen des Roboters \xfcber der Linie.\nvoid calibrateSensors() {\n  lcd.clear();\n  lcd.print(F("Calib ..."));\n  delay(500);\n\n  // Kalibirierungsschleife: Roboter dreht sich und nimmt 120 Messwerte auf\n  for (int i = 0; i < 120; i++) {\n    if (i > 30 && i <= 90) {\n      motors.setSpeeds(-200, 200);\n    } else {\n      motors.setSpeeds(200, -200);\n    }\n    lineSensors.calibrate();  // Sensoren auswerten und kalibrieren\n  }\n  motors.setSpeeds(0, 0);     // Motor stoppen\n  lcd.clear();\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  lineSensors.initFiveSensors();  // Bodensensoren initialisieren\n\n  lcd.clear();\n  lcd.print("Sensor");\n  lcd.gotoXY(0, 1);\n  lcd.print("Demo ->A");\n  buttonA.waitForPress();\n  calibrateSensors();\n}\n\nvoid loop() {\n  if ( (millis() - timeStamp) > 500) {\n    lineSensors.readCalibrated(lineSensorValues); // Sensorwerte einlesen\n    int sensorValue = lineSensorValues[2];        // Index 2 : Mittensensor\n    Serial.println(sensorValue);\n    lcd.gotoXY(0, 0);\n    lcd.print(sensorValue);\n    lcd.print(("   "));\n\n  }\n}\n')),(0,s.kt)("h3",{id:"int-readline"},(0,s.kt)("inlineCode",{parentName:"h3"},"int readLine(...)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"int readLine(unsigned int *sensor_values, unsigned char readMode=QTR_EMITTERS_ON, unsigned char white_line=0)\n")),(0,s.kt)("p",null,"Funktioniert wie ",(0,s.kt)("inlineCode",{parentName:"p"},"readCalibrated()"),", gibt aber auch eine gesch\xe4tzte Position des Roboters in Bezug auf eine Linie zur\xfcck. Die Sch\xe4tzung erfolgt unter Verwendung eines ",(0,s.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Gewichtung"},"gewichteten Mittelwerts"),", welcher die Sensorwerte mit Vielfachen von 1000 multipliziert, so dass ein R\xfcckgabewert von 0 anzeigt, dass die Zeile direkt unter Sensor 0 liegt, ein R\xfcckgabewert von 1000 zeigt an, dass die Zeile direkt unter Sensor 1 liegt, 2000 zeigt an, dass sie unter Sensor 2000 liegt, usw.  Zwischenwerte zeigen an, dass sich die Linie zwischen zwei Sensoren befindet. Die Formel lautet : $$ \\frac{0\\cdot x_0 + 1000\\cdot x_1 + 2000 \\cdot x_2 +\\cdots}{x_0 + x_1 + x_2 + \\cdots} $$ "),(0,s.kt)("p",null,"Standardm\xe4\xdfig geht diese Funktion von einer dunklen Linie (hohe Werte) aus, die von Wei\xdf (niedrige Werte) umgeben ist.  Wenn die verwendete Linie hell auf Schwarz ist, setzen Sie das optionale zweite Argument ",(0,s.kt)("inlineCode",{parentName:"p"},"white_line")," auf ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),".  In diesem Fall wird jeder Sensorwert vor der Mittelung durch (1000 - Wert) ersetzt."),(0,s.kt)("h4",{id:"beispiel-5"},"Beispiel"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-arduino"},"#define NUM_SENSORS 5\nZumo32U4LineSensors lineSensors;              // Liniensensor-Objekt\n\nunsigned int lineSensorValues[NUM_SENSORS];   // Array f\xfcr die Sensorwerte\nint position = lineSensors.readLine(lineSensorValues);\n")),(0,s.kt)("h4",{id:"beispiel-f\xfcr-die-bestimmung-der-linienposition-mit-readline"},"Beispiel f\xfcr die Bestimmung der Linienposition mit ",(0,s.kt)("inlineCode",{parentName:"h4"},"readLine()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-arduino"},'/*\n   Liniensensor-Demo mit alle f\xfcnf Boden Sensoren\n*/\n\n#include <Zumo32U4.h>\n\nZumo32U4LineSensors lineSensors;\nZumo32U4ButtonA buttonA;\nZumo32U4Motors motors;\nZumo32U4LCD lcd;\n\n\n#define NUM_SENSORS 5                       // Anzahl der verwendeten Sensoren\nunsigned int lineSensorValues[NUM_SENSORS]; // Array f\xfcr die Sensorwerte\n\nint timeStamp = 0;\n\n// Eine Sekunde warten und dann beginnen mit der Kalibirierung der Bodensensoren\n// durch automatisches Drehen des Roboters um etwa -90, +180, -90 Grad.\nvoid calibrateSensors()\n{\n  lcd.clear();\n  lcd.print(F("Calib ..."));\n  delay(1000);\n\n  // Kalibirierungsschleife: Roboter dreht sich und nimmt 120 Messwerte auf\n  for (int i = 0; i < 120; i++)\n  {\n    if (i > 30 && i <= 90){\n      motors.setSpeeds(-200, 200);\n    }\n    else{\n      motors.setSpeeds(200, -200);\n    } \n\n    lineSensors.calibrate();  // Sensoren auswerten und kalibrieren\n  }\n  motors.setSpeeds(0, 0);\n  lcd.clear();\n}\n\nvoid setup() {\n  lineSensors.initFiveSensors();    // Bodensensoren initialisieren\n\n  // "Welcome"-Anzeige auf dem Display\n  lcd.clear();\n  lcd.gotoXY(0, 0); lcd.print(F("LineDemo"));\n  lcd.gotoXY(0, 1); lcd.print(F("-> A"));\n  buttonA.waitForPress();\n  lcd.clear();\n\n  calibrateSensors();\n}\n\nvoid loop() {\n  \n  int updateTime = 333;\n\n  // alle 0.33 ms auswerten der Sensoren und aktualisieren des Display\n  if ( (millis() - timeStamp) > updateTime){\n    int position = lineSensors.readLine(lineSensorValues);\n    lcd.gotoXY(0,0);\n    lcd.print(position);\n    lcd.print(F("   "));  \n  }\n}\n')))}p.isMDXComponent=!0}}]);