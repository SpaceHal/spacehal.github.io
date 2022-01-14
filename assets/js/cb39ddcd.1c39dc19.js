"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[2519],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),c=i,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||a;return t?r.createElement(k,o(o({ref:n},u),{},{components:t})):r.createElement(k,o({ref:n},u))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2064:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),o=["components"],l={title:"Einen einfachen Roboter bauen und testen",sidebar_label:"Erste Schritte",description:"Einen Roboter zu bauen ist nicht schwer. Mit ein wenig Geschick kann ein Roboter gebaut werden, der mit einem Arduino gesteuert wird.",custom_edit_url:null,keywords:["Arduino","Roboter","bauen","selber bauen","Roboter bauen","Linie folgen","programmieren","Linienfolger","Linienfolger bauen"]},s=void 0,d={unversionedId:"robotik/beginning",id:"robotik/beginning",title:"Einen einfachen Roboter bauen und testen",description:"Einen Roboter zu bauen ist nicht schwer. Mit ein wenig Geschick kann ein Roboter gebaut werden, der mit einem Arduino gesteuert wird.",source:"@site/docs/robotik/beginning.md",sourceDirName:"robotik",slug:"/robotik/beginning",permalink:"/docs/robotik/beginning",editUrl:null,tags:[],version:"current",lastUpdatedAt:1641119333,formattedLastUpdatedAt:"2.1.2022",frontMatter:{title:"Einen einfachen Roboter bauen und testen",sidebar_label:"Erste Schritte",description:"Einen Roboter zu bauen ist nicht schwer. Mit ein wenig Geschick kann ein Roboter gebaut werden, der mit einem Arduino gesteuert wird.",custom_edit_url:null,keywords:["Arduino","Roboter","bauen","selber bauen","Roboter bauen","Linie folgen","programmieren","Linienfolger","Linienfolger bauen"]},sidebar:"sideBarRobotik",next:{title:"Linienfolger einfach",permalink:"/docs/robotik/edgeFollower"}},u=[{value:"Bauteilliste",id:"bauteilliste",children:[],level:3},{value:"Grundfunktion zur Geschwindigkeitssteuerung",id:"grundfunktion-zur-geschwindigkeitssteuerung",children:[],level:2},{value:"Aufgaben",id:"aufgaben",children:[],level:2}],m={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wenn Sie die Inhalte aus dem Bereich ",(0,a.kt)("a",{parentName:"p",href:"/docs/arduino/helloworld"},"Arduino")," durchgearbeitet haben, sollten Sie in der Lage sein einen einfachen, fahrbaren Roboter mit zwei Motoren aufzubauen. Hierf\xfcr kann entweder aus Acrylglas oder Sperrholz ein Chassis selber gefertigt werden oder es kann im Internet ein fertiges Chassis mit zwei geeigneten Motoren gekauft werden (Suchbegriff: ",(0,a.kt)("em",{parentName:"p"},"robot chassis 2wd"),")."),(0,a.kt)("img",{src:"/img/robotik/ArduinoRobot_web2.jpg",alt:"Selbst gebauter Arduino-Roboter mit differentiellem Antrieb",width:"700",className:"center"}),(0,a.kt)("p",null,"Eine m\xf6gliche Schaltung f\xfcr einen Roboter mit zwei Tastern, drei (Status-)LEDs und dem Motortreiber DRV8833 ist im Folgenden abgebildet. Achten Sie auf die externe Spannungsversorgung der Motoren."),(0,a.kt)("img",{src:"/img/robotik/BotCircuit2.jpg",alt:"Schaltung f\xfcr einen einfachen Roboter mit zwei Motoren",width:"500pt",className:"center"}),(0,a.kt)("h3",{id:"bauteilliste"},"Bauteilliste"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Bauteil"),(0,a.kt)("th",{parentName:"tr",align:null},"Anzahl"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Arduino (Uno)"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/arduino/helloworld"},"LED")),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/arduino/debounce"},"Taster")),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Widerstand 220 Ohm"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Motortreiber ",(0,a.kt)("a",{parentName:"td",href:"/docs/motor/drv8833"},"DRV8833")),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TT - ",(0,a.kt)("a",{parentName:"td",href:"/docs/motor/basics"},"Motor")," mit R\xe4der"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Chassis (z.B. Acrylplatte)"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Batteriehalter mit 4 AA Batterien"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9V Block mit Anschlusskable"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Steckbrett (half size)"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Verbindungskabel"),(0,a.kt)("td",{parentName:"tr",align:null},"ca. 10")))),(0,a.kt)("h2",{id:"grundfunktion-zur-geschwindigkeitssteuerung"},"Grundfunktion zur Geschwindigkeitssteuerung"),(0,a.kt)("p",null,"Bevor der Roboter verschiedene einfache Aktionen (Kreis oder Viereck) ausf\xfchren kann, ist es sinnvoll, wenn eine Funktion zum Steuern der Geschwindigkeit programmiert wird. Die Funktion, nennen wir sie ",(0,a.kt)("inlineCode",{parentName:"p"},"setSpeeds()")," oder ",(0,a.kt)("inlineCode",{parentName:"p"},"setzeGeschwindigkeit()"),", sollte zwei Parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"int pPwmLinks")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"int pPwmRechts")," haben, welche Werte im Bereich von ",(0,a.kt)("inlineCode",{parentName:"p"},"-255")," bis ",(0,a.kt)("inlineCode",{parentName:"p"},"255")," akzeptieren. Die beiden Parameter geben als PWM-Wert die Geschwindigkeiten der beiden Motoren an, wobei ein negativer Wert bedeutet, dass sich der entsprechende Motor r\xfcckw\xe4rts dreht. "),(0,a.kt)("p",null,"Damit die Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"setSpeeds()")," bzw. ",(0,a.kt)("inlineCode",{parentName:"p"},"setzeGeschwindigkeit()")," die Motoren auch in beide Richtungen drehen lassen kann, muss der Motortreiber in Abh\xe4ngigkeit vom Vorzeichen der Parameter im korrekten ",(0,a.kt)("a",{parentName:"p",href:"/docs/motor/drv8833#die-geschwindigkeit-mit-pwm-signalen-steuern"},"Betriebsmode")," f\xfcr Vorw\xe4rts- oder R\xfcckw\xe4rtslauf konfiguriert werden."),(0,a.kt)("p",null,"Das Ger\xfcst der Funktion k\xf6nnte wie folgt aussehen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"void setSpeeds(int pPwmLinks, int pPwmRechts){\n  \n   // ---------  Linker Motor ---------\n   if (pPwmLinks < 0)                     // r\xfcckw\xe4rts\n   {\n      speedRight = abs(pPwmLinks);        // abs() ist die Betragsfunktion, um aus dem negativen `pPwmLinks` einen positiven Wert zu machen\n      digitalWrite(IN1, LOW);\n      analogWrite(IN2, pPwmLinks); \n   }\n   else if (pPwmLinks > 0)                // vorw\xe4rts\n   {\n      // Konfiguration des Motortreibers\n      // f\xfcr eine ge\xe4nderte Drehrichtung ...\n   }\n   else {                                 // Motorbremse\n      // Konfiguration des Motortreibers \n      // f\xfcr die Motorbremse ...\n   }\n\n   // ---------  Rechter Motor ---------\n   if (pPwmRechts < 0)                    // r\xfcckw\xe4rts\n   {\n      // ...\n   }\n   else if (pPwmRechts > 0)               // vorw\xe4rts\n   {\n      // ...\n   }\n   else {                                 // Motorbremse\n      // ...\n   }\n}\n")),(0,a.kt)("p",null,"Mit diesem Programmger\xfcst kann der Roboter schon einige Aufgaben durchf\xfchren. Damit er aber auch mit seiner Umwelt interagieren kann und zum Beispiel einer ",(0,a.kt)("a",{parentName:"p",href:"/docs/robotik/edgeFollower"},"Linie folgen")," folgt, ist es notwendig den Roboter um einen ",(0,a.kt)("a",{parentName:"p",href:"/docs/sensoren/irSensor"},"IR-Sensor")," zu erweitern. "),(0,a.kt)("h2",{id:"aufgaben"},"Aufgaben"),(0,a.kt)("p",null,"F\xfcr die folgenden Aufgaben wird ein Roboter mit ",(0,a.kt)("strong",{parentName:"p"},"Differentialantrieb")," (",(0,a.kt)("a",{parentName:"p",href:"https://link.springer.com/chapter/10.1007/978-3-319-62533-1_1#Sec7"},"differential drive"),"), also ein Roboter mit zwei unabh\xe4ngig steuerbaren R\xe4dern vorausgesetzt. Zus\xe4tzlich sollte der verwendete Roboter mindestens ",(0,a.kt)("strong",{parentName:"p"},"zwei Taster")," und ",(0,a.kt)("strong",{parentName:"p"},"zwei oder mehr LEDs")," aufweisen. Weitere Sensoren werden an dieser Stelle nicht ben\xf6tigt."),(0,a.kt)("details",{className:"ueben"}," ",(0,a.kt)("summary",null,"Aufgaben"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Bei der ersten Aufgabe geht es darum, den Roboter sicher losfahren und wieder stoppen zu lassen. Programmieren Sie einen Taster so, dass  beim ",(0,a.kt)("strong",{parentName:"p"},"ersten Dr\xfccken")," des Tasters der  Roboter ",(0,a.kt)("strong",{parentName:"p"},"losf\xe4hrt")," und beim ",(0,a.kt)("strong",{parentName:"p"},"erneuten Dr\xfccken stoppt"),".\nWenn der Roboter f\xe4hrt, soll zus\xe4tzlich eine (gr\xfcne) ",(0,a.kt)("strong",{parentName:"p"},"LED aufleuchten"),". Ber\xfccksichtigen Sie das ",(0,a.kt)("a",{parentName:"p",href:"/docs/arduino/debounce"},"Prellen")," des Tasters. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Schreiben Sie ein Programm, welches den Roboter genau 1,5 Meter ",(0,a.kt)("strong",{parentName:"p"},"eine gerade Linie")," fahren l\xe4sst. Schreiben Sie hierf\xfcr eine eigene Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"setSpeed(int pLeft, int pRight)"),", welche die Geschwindigkeit der beiden Motoren steuert."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Notieren Sie das Tastverh\xe4ltnis des PWM-Signals, ab welchem die Motoren sich zu drehen anfangen."),(0,a.kt)("li",{parentName:"ul"},"Nutzen Sie einen ",(0,a.kt)("strong",{parentName:"li"},"Kalibrierungsfaktor")," f\xfcr die beiden Motoren, damit der Roboter bei gleichen PWM-Werten (f\xfcr ",(0,a.kt)("inlineCode",{parentName:"li"},"pLeft")," und ",(0,a.kt)("inlineCode",{parentName:"li"},"pRight"),") geradeaus f\xe4hrt. \xdcberlegen Sie sich ein Experiment zum Bestimmen des Kalibrierungsfaktors. "),(0,a.kt)("li",{parentName:"ul"},"Testen Sie, ob der Kaliebrierungsfakter auch bei anderen Geschwindigkeiten funktioniert.")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"float motorKalibrierung = 0.95; // Werte zwischen 1.1 und 0.9 sollten funktionieren\n\nvoid setSpeed(int pLinks, int pRechts)\n{\n  int lPwmLinks = pLinks;                       // PWM-Wert f\xfcr den linken Motor\n  int lPwmRechts = motorKalibrierung * pRechts; // PWM-Wert f\xfcr den rechten Motor\n  /*\n   Code f\xfcr die Motorsteuerung mit dem Motortreiber ...\n  */\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Schreiben und testen Sie verschiedene Programme, welche folgende Aktionen ausf\xfchren. Nutzen Sie jeweils die selber geschriebene Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"setSpeeds()"),"."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Der Roboter f\xe4hrt genau 1,5 Meter geradeaus. Dabei beschleunigt er zu erst und bremst dann kontinuierlich ab."),(0,a.kt)("li",{parentName:"ol"},"Der Roboter f\xe4hrt einen Kreis mit einem Durchmesser von ca. einem Meter. Schreiben Sie hierf\xfcr eine Funktion ",(0,a.kt)("inlineCode",{parentName:"li"},"void fahreKreis(int pZeit)"),", welche den Roboter f\xfcr die angegebene Zeit einen Kreis fahren l\xe4sst."),(0,a.kt)("li",{parentName:"ol"},"Der Roboter f\xe4hrt ein Quadrat mit einer Kantenl\xe4nge von ca. einem Meter. Beginnen Sie diese Aufgabe, in dem Sie eine Funktion ",(0,a.kt)("inlineCode",{parentName:"li"},"void drehen(int pZeit)")," schreiben, welche den Roboter f\xfcr die angegebene Zeit auf der Stelle drehen l\xe4sst. Programmieren Sie anschlie\xdfend eine Funktion ",(0,a.kt)("inlineCode",{parentName:"li"},"void fahreRechteck(int pZeitKantenlaenge)"),", welche die Funktion ",(0,a.kt)("inlineCode",{parentName:"li"},"void drehen(int pZeit)")," verwendet, um den Roboter ein Rechteck mit der angegebenen Kantenl\xe4nge fahren l\xe4sst."),(0,a.kt)("li",{parentName:"ol"},"Der Roboter f\xe4hrt eine Acht.  "),(0,a.kt)("li",{parentName:"ol"},"Der Roboter ",(0,a.kt)("em",{parentName:"li"},"zeichnet")," (wenn m\xf6glich mit Stift), das ",(0,a.kt)("em",{parentName:"li"},"Haus vom Nikolaus"),". Erweitern Sie hierf\xfcr das Programm f\xfcr das Rechteck.")),(0,a.kt)("p",{parentName:"li"},"Die Start- und Endpunkte sollten (wenn m\xf6glich) nahe beieinander liegen.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Erweitern Sie den Roboter um drei Taster und zwei bis vier LEDs (7 Segementanzeige oder Display ist auch m\xf6glich). Schreiben Sie f\xfcr den Roboter eine ",(0,a.kt)("strong",{parentName:"p"},"Men\xfcsteuerung"),", bei der mit zwei Tastern eine aus vier verschiedene Roboteraktionen der 3. Aufgabe ausgew\xe4hlt und mit den dritten Taster aktiviert werden kann. Die LEDs sollen entsprechend der ausgew\xe4hlten Funktionen unterschiedlich leuchten. "),(0,a.kt)("p",{parentName:"li"},"Der Eintrag ",(0,a.kt)("a",{parentName:"p",href:"/docs/arduino/simpleMenu"},"Men\xfcsteuerung")," kann Ihnen bei der Realisierung helfen.")))))}p.isMDXComponent=!0}}]);