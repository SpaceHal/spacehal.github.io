"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[7378],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return t?i.createElement(h,l(l({ref:n},p),{},{components:t})):i.createElement(h,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},389:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var i=t(3117),r=t(102),a=(t(7294),t(3905)),l=["components"],o={title:"Kontrollstrukturen - Schleifen",sidebar_label:"4. Schleifen",custom_edit_url:null,keywords:["Arduino","Unterricht","Schule","Schleifen","Programmieren","while Schleife","for Schleife","Aufgaben"]},d=void 0,s={unversionedId:"arduino/loop",id:"arduino/loop",title:"Kontrollstrukturen - Schleifen",description:"Die for-Schleife",source:"@site/docs/arduino/loop.md",sourceDirName:"arduino",slug:"/arduino/loop",permalink:"/docs/arduino/loop",editUrl:null,tags:[],version:"current",lastUpdatedAt:1641119333,formattedLastUpdatedAt:"2.1.2022",frontMatter:{title:"Kontrollstrukturen - Schleifen",sidebar_label:"4. Schleifen",custom_edit_url:null,keywords:["Arduino","Unterricht","Schule","Schleifen","Programmieren","while Schleife","for Schleife","Aufgaben"]},sidebar:"sideBarArduino",previous:{title:"3. Variablen",permalink:"/docs/arduino/variable"},next:{title:"5. Taster und if-Verzweigung",permalink:"/docs/arduino/input"}},p=[{value:"Die for-Schleife",id:"die-for-schleife",children:[{value:"Vergleichsoperatoren",id:"vergleichsoperatoren",children:[],level:3},{value:"Beispiel",id:"beispiel",children:[],level:3},{value:"Eine geschachtelte <code>for</code> Schleife",id:"eine-geschachtelte-for-schleife",children:[],level:3}],level:2},{value:"Die while-Schleife",id:"die-while-schleife",children:[{value:"Mit der while-Schleife auf eine Tastereingabe warten",id:"mit-der-while-schleife-auf-eine-tastereingabe-warten",children:[],level:3}],level:2}],c={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"die-for-schleife"},"Die for-Schleife"),(0,a.kt)("p",null,"Die ",(0,a.kt)("inlineCode",{parentName:"p"},"for"),"-Schleife geh\xf6rt zu den wichtigsten Kontrollstrukturen eines Programms und erlaubt das wiederholende Ausf\xfchren eines Programmabschnitts. Die Schleife beginnt mit dem ",(0,a.kt)("strong",{parentName:"p"},"Schl\xfcsselwort")," ",(0,a.kt)("inlineCode",{parentName:"p"},"for"),", gefolgt von ",(0,a.kt)("strong",{parentName:"p"},"drei Anweisungen")," im ",(0,a.kt)("strong",{parentName:"p"},"Schleifenkopf"),". Im ",(0,a.kt)("strong",{parentName:"p"},"Schleifenrumpf"),", welcher in geschweiften Klammern ",(0,a.kt)("inlineCode",{parentName:"p"},"{...}")," steht, befindet sich der wiederholend auszuf\xfchrende Anweisungsblock."),(0,a.kt)("img",{src:"/img/arduino/forLoop.png",alt:"drawing",width:"370pt",className:"center"}),(0,a.kt)("p",null,"Ausf\xfchrung einer ",(0,a.kt)("inlineCode",{parentName:"p"},"for"),"-Schleife:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Initialisierung")," mit einer ",(0,a.kt)("strong",{parentName:"li"},"Z\xe4hlvariable"),". Die Deklaration der Z\xe4hlvariable ",(0,a.kt)("inlineCode",{parentName:"li"},"int i")," kann innerhalb oder au\xdferhalb des Schleifenkopfs erfolgen. Wird sie im Schleifenkopf initialisiert, wird die Z\xe4hlvariable nur w\xe4hrend der Abarbeitung der Schleife existieren."),(0,a.kt)("li",{parentName:"ol"},"\xdcberpr\xfcfen der ",(0,a.kt)("strong",{parentName:"li"},"Testbedingung")," mittels logischer Ausdr\xfccke. Im obigen Beispiel liefert die Testbedingung so lange ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", wie der Wert von  ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," kleiner als ",(0,a.kt)("inlineCode",{parentName:"li"},"10")," ist. F\xfcr ",(0,a.kt)("inlineCode",{parentName:"li"},"i = 10")," oder Werte gr\xf6\xdfer ",(0,a.kt)("inlineCode",{parentName:"li"},"10")," liefert die Testbedingung ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ol"},"Wenn die Testbedingung ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," liefert, wird die Schleife ",(0,a.kt)("strong",{parentName:"li"},"direkt beendet")," (ohne die Anweisungen im Schleifenrumpf auszuf\xfchren)."),(0,a.kt)("li",{parentName:"ol"},"Wenn die Testbedingung ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," liefert, werden die Anweisungen im Schleifenrumpf ausgef\xfchrt."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Aktualisieren")," der Z\xe4hlvariable. Der Ausdruck ",(0,a.kt)("inlineCode",{parentName:"li"},"i++")," bedeutet ",(0,a.kt)("inlineCode",{parentName:"li"},"i=i+1")," und erh\xf6ht den Wert der Variable ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," bei jedem Durchlauf.")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Die einzelnen Ausdr\xfccke im Schleifenkopf werden mit einem ",(0,a.kt)("strong",{parentName:"p"},"Semikolon")," voneinander getrennt."))),(0,a.kt)("h3",{id:"vergleichsoperatoren"},"Vergleichsoperatoren"),(0,a.kt)("p",null,"Arduino stellt eine Reihe verschiedener ",(0,a.kt)("strong",{parentName:"p"},"Vergleichsoperatoren")," zur Verf\xfcgung. Alle Operatoren haben gemeinsam, dass zwei Werte miteinander verglichen werden und als Ergebnis nur ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," (1) oder ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," (0) zur\xfcckgegeben wird."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Erl\xe4uterungen"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"x == y")),(0,a.kt)("td",{parentName:"tr",align:null},"Ist x gleich y?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"x != y")),(0,a.kt)("td",{parentName:"tr",align:null},"Ist x ungleich y?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"x < y")),(0,a.kt)("td",{parentName:"tr",align:null},"Ist x kleiner y?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"x > y")),(0,a.kt)("td",{parentName:"tr",align:null},"Ist x gr\xf6\xdfer y?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"x <= y")),(0,a.kt)("td",{parentName:"tr",align:null},"Ist x kleiner gleich y?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"x >= y")),(0,a.kt)("td",{parentName:"tr",align:null},"Ist x gr\xf6\xdfer gleich y?")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Die Operatoren ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"==")," sind sehr verschieden. W\xe4hrend ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," ein ",(0,a.kt)("strong",{parentName:"p"},"Zuweisungsoperator")," ist, also einer Variablen einen Wert zuweist (z.B. ",(0,a.kt)("inlineCode",{parentName:"p"},"int wert = 312"),") handelt es sich bei ",(0,a.kt)("inlineCode",{parentName:"p"},"==")," um einen ",(0,a.kt)("strong",{parentName:"p"},"Vergleichsoperator"),", der ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," zur\xfcckgibt, wenn zwei Werte gleich sind. Das Verwechseln beider Operatoren ist ein h\xe4ufiger Fehler bei Programmieranf\xe4ngern.")),(0,a.kt)("h3",{id:"beispiel"},"Beispiel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino",metastring:"{7-11}","{7-11}":!0},'// Einfaches Beispiel f\xfcr eine for-Schleife\n\nvoid setup() {\n  Serial.begin(115200);\n  Serial.println("Warten (1 sec) ....");\n  delay(1000);\n  for (int i = 0 ; i<5; i++)\n  {\n    Serial.print("Zaehler: "); Serial.println(i);\n    delay(500);\n  }\n}\n\nvoid loop() {\n  // bleibt leer\n}\n')),(0,a.kt)("p",null,"Ausgabe auf dem seriellen Monitor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Warten (1 sec) ....\nZaehler: 0\nZaehler: 1\nZaehler: 2\nZaehler: 3\nZaehler: 4\n")),(0,a.kt)("h3",{id:"eine-geschachtelte-for-schleife"},"Eine geschachtelte ",(0,a.kt)("inlineCode",{parentName:"h3"},"for")," Schleife"),(0,a.kt)("p",null,"Schleifen k\xf6nnen auch geschachtelt werden. Bei einer geschachtelten Schleife befindet sich im Rumpf der ",(0,a.kt)("strong",{parentName:"p"},"\xe4u\xdferen Schleife")," eine weitere ",(0,a.kt)("strong",{parentName:"p"},"innere Schleife"),". Dadurch wird die innere Schleife sooft neu gestartet, wie es in der \xe4u\xdferen Schleife angegeben ist. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino",metastring:'title=" https://wokwi.com/arduino/projects/318944954351092307 "',title:'"',"https://wokwi.com/arduino/projects/318944954351092307":!0,'"':!0},'/* Eine geschachtelte for-Schleife\n * Wokwi-Link: https://wokwi.com/arduino/projects/318944954351092307 */\n\nvoid setup() {\n  Serial.begin(115200);\n  Serial.println("Warten (1 sec) ....");\n  delay(1000);\n  int i,j; // Deklaration der Z\xe4hlvariablen kann auch au\xdferhalb der Schleife stattfinden\n  // highlight-next-line\n  for (i = 0 ; i<5; i++) // Zeilen (\xe4u\xdfere Schleife)\n  {     \n    Serial.println();  \n    Serial.print("Zeile: "); Serial.print(i);\n    // highlight-next-line\n    for(j=0; j<10; j++)  // Spalten (innere Schleife)\n    {\n      Serial.print("*");\n      delay(100);\n    }\n  }\n}\n\nvoid loop() {\n  // bleibt leer\n}\n')),(0,a.kt)("p",null,"Im obigen Beispiel wird die innere Schleife "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"for(j=0; j<10; j++)  // Spalten (innere Schleife)\n")),(0,a.kt)("p",null,"welche 10 mal durchlaufen wird, von der \xe4u\xdferen Schleife 5 mal neu gestartet. Insgesamt wird also die Zeile "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},'Serial.print("*");\n')),(0,a.kt)("p",null,"in der inneren Schleife 50 mal aufgerufen."),(0,a.kt)("p",null,"Auf dem seriellen Monitor erscheint folgende Ausgabe:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"Warten (1 sec) ....\n\nZeile: 0**********\nZeile: 1**********\nZeile: 2**********\nZeile: 3**********\nZeile: 4**********\n")),(0,a.kt)("details",{className:"ueben"}," ",(0,a.kt)("summary",null,"Aufgaben"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Schreiben Sie ein Programm, welches abwechselnd zwei verschiedene LEDs blinken l\xe4sst:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Zuerst blinkt die 1. LED 3x auf."),(0,a.kt)("li",{parentName:"ul"},"Anschlie\xdfend blinkt die 2. LED 5x auf."),(0,a.kt)("li",{parentName:"ul"},"Dann beginnt die Blinksequenz wieder von vorne."),(0,a.kt)("li",{parentName:"ul"},"Nutzen Sie die ",(0,a.kt)("inlineCode",{parentName:"li"},"for"),"-Schleife und vermeiden Sie sich wiederholenden Code."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Schreiben Sie ein Programm, welches die ",(0,a.kt)("strong",{parentName:"p"},"Blinkgeschwindigkeit")," einer (oder mehrerer) LEDs schrittweise von ganz langsam zu  ganz schnell und wieder zu ganz langsam, etc. \xe4ndert.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\xc4ndern Sie das Programm mit der geschachtelten Schleife so, dass auf dem seriellen Monitor folgender Text ausgegeben wird:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Zeile: 0*\nZeile: 1**\nZeile: 2***\nZeile: 3****\nZeile: 4*****\nZeile: 5******\nZeile: 6*******\nZeile: 7********\nZeile: 8*********\nZeile: 9**********\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Hinweis: Bei der Testbedingung im Schleifenkopf k\xf6nnen auch zwei Variablen miteinander verglichen werden:"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"for(int i = 0; i > k; i++){ ... }"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\xc4ndern Sie das Programm mit der geschachtelten Schleife noch einmal. Diesmal soll folgender Text ausgegeben werden:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Zeile: 0**********\nZeile: 1*********\nZeile: 2********\nZeile: 3*******\nZeile: 4******\nZeile: 5*****\nZeile: 6****\nZeile: 7***\nZeile: 8**\nZeile: 9*\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Lassen Sie zwei LEDs im angegebenen Rhythmus blinken."),(0,a.kt)("img",{src:"/img/arduino/blinkRhythmus.svg",alt:"Blink-Rhythmus For Schleife",width:"500pt",className:"center"}),"Nutzen Sie geschachtelte `for`-Schleifen. Verwenden Sie maximal zweimal den Befehl `delay()`."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Erweitern Sie folgendes Programmger\xfcst so, dass 5 angeschlossene LEDs wie unten abgebildet blinken. Zum Vervollst\xe4ndigen des Programms d\xfcrfen Sie ",(0,a.kt)("strong",{parentName:"p"},"maximal zweimal")," den Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"digitalWrite()")," verwenden.",(0,a.kt)("br",{parentName:"p"}),"\n","Achten Sie beim Aufbauen der Schaltung auf die Verwendung der richtigen Pins."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-arduino"},"// 5 LEDs mit for-Schleife blinken lassen\nint dTime = 200;\n\nvoid setup(){\n    for (int i = 2; i <= 6; i++){\n        pinMode(i, OUTPUT);\n    }\n}\nvoid loop(){\n    // maximal zweimal 'digitalWrite()' verwenden\n  \n}\n")),(0,a.kt)("img",{src:"/img/arduino/led5forLoop_low.gif",alt:"drawing",width:"500pt",className:"center"})))),(0,a.kt)("h2",{id:"die-while-schleife"},"Die while-Schleife"),(0,a.kt)("p",null,"Die ",(0,a.kt)("inlineCode",{parentName:"p"},"while"),"-Schleife wird so lange ausgef\xfchrt (also der dazugeh\xf6rige Code-Block), wie die ",(0,a.kt)("strong",{parentName:"p"},"Testbedingung")," wahr (",(0,a.kt)("inlineCode",{parentName:"p"},"true"),") ist. Damit ist sie von der Struktur wesentlich einfacher als die ",(0,a.kt)("inlineCode",{parentName:"p"},"for"),"-Schleife. "),(0,a.kt)("img",{src:"/img/arduino/whileLoop.png",alt:"drawing",width:"340pt",className:"center"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int i = 1;\n//highlight-next-line\nwhile(i < 5){\n  Serial.println(i);\n  i++;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Serieller Monitor:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"1\n2\n3\n4\n")),(0,a.kt)("h3",{id:"mit-der-while-schleife-auf-eine-tastereingabe-warten"},"Mit der while-Schleife auf eine Tastereingabe warten"),(0,a.kt)("p",null,"Die ",(0,a.kt)("inlineCode",{parentName:"p"},"while"),"-Schleife eignet sich besonders gut, um ein Programm so lange pausieren zu lassen, bis ein Taster gedr\xfcckt wurde. Auch wenn die ",(0,a.kt)("a",{parentName:"p",href:"/docs/arduino/input"},"Tastereingabe")," erst im n\xe4chsten Abschnitt behandelt wird, soll hier schon einmal der Code f\xfcr die Programmverz\xf6gerung vorgestellt werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/* Die while-Schleife wird solange ausgef\xfchrt, wie der Taster nicht gedr\xfcckt ist.\n * Das Programm pausiert also, bis der Taster gedr\xfcckt wurde. */\n\nint zustandTaster = digitalRead(TASTER)\nwhile (zustandTaster) { // zustandTaster: gedr\xfcckt = LOW (0) / offen = HIGH (1)\n    zustandTaster = digitalRead(TASTER)\n}\n")))}u.isMDXComponent=!0}}]);