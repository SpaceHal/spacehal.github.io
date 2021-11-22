"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[2070],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),p=a,h=c["".concat(d,".").concat(p)]||c[p]||m[p]||r;return t?i.createElement(h,o(o({ref:n},u),{},{components:t})):i.createElement(h,o({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6171:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var i=t(3117),a=t(102),r=(t(7294),t(3905)),o=["components"],l={title:"Erste Schritte mit dem Zumo 32u4",sidebar_label:"Erste Schritte",description:"Schnelleinstieg f\xfcr den Zumo 32u4. Motoren, Taster, LEDs und Display in Betrieb nehmen.",custom_edit_url:null},d=void 0,s={unversionedId:"zumo32u4/gettingStarted",id:"zumo32u4/gettingStarted",isDocsHomePage:!1,title:"Erste Schritte mit dem Zumo 32u4",description:"Schnelleinstieg f\xfcr den Zumo 32u4. Motoren, Taster, LEDs und Display in Betrieb nehmen.",source:"@site/docs/zumo32u4/gettingStarted.md",sourceDirName:"zumo32u4",slug:"/zumo32u4/gettingStarted",permalink:"/docs/zumo32u4/gettingStarted",editUrl:null,tags:[],version:"current",lastUpdatedAt:1630426919,formattedLastUpdatedAt:"31.8.2021",frontMatter:{title:"Erste Schritte mit dem Zumo 32u4",sidebar_label:"Erste Schritte",description:"Schnelleinstieg f\xfcr den Zumo 32u4. Motoren, Taster, LEDs und Display in Betrieb nehmen.",custom_edit_url:null},sidebar:"sideBarZumo",previous:{title:"Installation",permalink:"/docs/zumo32u4/installation"},next:{title:"LEDs",permalink:"/docs/zumo32u4/zumoBasics"}},u=[{value:"Einbinden der Zumo32u4 Bibliothek",id:"einbinden-der-zumo32u4-bibliothek",children:[],level:2},{value:"LEDs",id:"leds",children:[{value:"Aufgaben",id:"aufgaben",children:[],level:3}],level:2},{value:"Taster",id:"taster",children:[{value:"Aufgaben",id:"aufgaben-1",children:[],level:3}],level:2},{value:"Motoren",id:"motoren",children:[{value:"Aufgaben",id:"aufgaben-2",children:[],level:3}],level:2},{value:"LCD Display",id:"lcd-display",children:[{value:"Aufgaben",id:"aufgaben-3",children:[{value:"Vorlage Aufgabe 1",id:"vorlage-aufgabe-1",children:[],level:4}],level:3}],level:2}],m={toc:u};function c(e){var n=e.components,l=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nachdem der Treiber und die Bibliothek installiert worden sind, kann der Zumo programmiert werden. Da der Zumo auch mit ",(0,r.kt)("strong",{parentName:"p"},"Arduino")," programmiert wird, ist der Einstieg nicht besonders schwer. Allerdings gibt es einige neue Befehle, welche zur Steuerung des Roboters notwendig sind. In der vereinfachten ",(0,r.kt)("a",{parentName:"p",href:"/docs/zumo32u4/zumoBasics"},"Befehlsreferenz")," finden Sie ein \xdcbersicht der wichtigsten Befehle. Schauen Sie sich die Referenz immer mal wieder an, um sich mit den Programmierm\xf6glichkeiten des Zumos vertraut zu machen."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Eine Zusammenfassung aller wichtigen Befehle gibt es auch als ",(0,r.kt)("a",{target:"_blank",href:t(4394).Z},(0,r.kt)("strong",null,"Cheat Sheet"))," (Spickzettel)"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Eine Zusammenfassung aller wichtigen Befehle gibt es auch als ",(0,r.kt)("a",{target:"_blank",href:t(4234).Z},(0,r.kt)("strong",null,"Cheat Sheet"))," (Spickzettel)"))),(0,r.kt)("p",null,"F\xfcr einen schnellen Einstig und als guten \xdcberblick \xfcber die Grundfunktionen lernen Sie im folgenden Beispiel Methoden zum Steuern der"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#leds"},"LEDs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#taster"},"Taster")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#motoren"},"Motoren")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#lcd-display"},"LCD Display"))),(0,r.kt)("p",null,"kennen. Nach diesem Schnelleinstieg sollten Sie mithilfe der ",(0,r.kt)("a",{parentName:"p",href:"/docs/zumo32u4/zumoBasics"},"Befehlsreferenz")," in der Lage sein auch Sensoren (Bodensensor, Hindernisssensor) in Ihr Programm einzubinden. Erl\xe4uterungen finden Sie als Kommentar im Code oder etwas ausf\xfchrlicher weiter unten."),(0,r.kt)("h2",{id:"einbinden-der-zumo32u4-bibliothek"},"Einbinden der Zumo32u4 Bibliothek"),(0,r.kt)("p",null,"Die Befehle zum Steuern des Zumo 32u4 befinden sich in der ",(0,r.kt)("a",{parentName:"p",href:"https://www.pololu.com/docs/0J63/6"},"Zumo 32u4 Arduino Library"),". Diese Bibliothek muss einmal auf dem Rechner ",(0,r.kt)("a",{parentName:"p",href:"/docs/zumo32u4/installation#zumo32u4-bibliothek"},"installiert")," werden und wird dann mit der folgenden Befehlszeile in einem Arduino-Programm eingebunden (noch vor der ",(0,r.kt)("inlineCode",{parentName:"p"},"setup()")," Methode):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"//highlight-next-line\n#include <Zumo32U4.h>    // Die Bibliothek sollte immer als erstes eingebunden werden\n\nvoid setup(){\n                         // ...\n}\n")),(0,r.kt)("p",null,"Nur wenn die Bibliothek korrekt installiert und in das Programm eingebunden wurde, k\xf6nnen die unten aufgef\xfchrten Befehle verwendet werden."),(0,r.kt)("h2",{id:"leds"},"LEDs"),(0,r.kt)("p",null,"Zum Steuern der drei ",(0,r.kt)("a",{parentName:"p",href:"/docs/zumo32u4/zumoBasics"},"LEDs")," steht jeweils eine eigene Funktion zur Verf\xfcgung: ",(0,r.kt)("inlineCode",{parentName:"p"},"ledRed()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ledYellow()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ledGreen()"),". Als Argument wird der Zustand der LED, als ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," f\xfcr aus oder ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," f\xfcr an \xfcbergeben."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"// Blinkender Zumo\n#include <Zumo32U4.h>  // Einbinden der ZUMO Bibliothek\n\nvoid setup(){\n    // ohne Inhalt\n}\n\nvoid loop(){\n  //highlight-next-line\n  ledRed(1);   // rote LED einschalten\n  //highlight-next-line\n  ledGreen(0); // gr\xfcne LED ausschalten\n  delay(1000);\n\n  //highlight-next-line\n  ledRed(0);   // rote LED ausschalten\n  //highlight-next-line\n  ledGreen(1); // gr\xfcne LED ansschaltens\n  delay(500);\n}\n")),(0,r.kt)("h3",{id:"aufgaben"},"Aufgaben"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,r.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Lassen Sie eine oder mehrere LEDs ohne den ",(0,r.kt)("inlineCode",{parentName:"li"},"delay()")," Befehl blinken. Verwenden Sie die ",(0,r.kt)("inlineCode",{parentName:"li"},"millis()")," Funktion.")))),(0,r.kt)("h2",{id:"taster"},"Taster"),(0,r.kt)("p",null,"F\xfcr die Nutzung der ",(0,r.kt)("a",{parentName:"p",href:"/docs/zumo32u4/buttons"},"Taster")," werden drei Klassen (",(0,r.kt)("inlineCode",{parentName:"p"},"Zumo32U4ButtonA"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Zumo32U4ButtonB")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"Zumo32U4ButtonC"),") bereitgestellt. Nach dem Erzeugen des entsprechenden Objektes stehen verschiedene Methoden zum Auslesen der Taster bereit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"Zumo32U4ButtonA buttonA;  // Objekt f\xfcr den Taster A\n")),(0,r.kt)("p",null,"Zum Beispiel wird mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"waitForButton()")," die ",(0,r.kt)("strong",{parentName:"p"},"Programmausf\xfchrung")," solange ",(0,r.kt)("strong",{parentName:"p"},"unterbrochen"),", bis der entsprechende Taster gedr\xfcckt w\xfcrde. \xc4hnlich wie mit ",(0,r.kt)("a",{parentName:"p",href:"/docs/arduino/input#warten-auf-eine-tastereingabe-mit-der-while-schleife"},"dieser")," ",(0,r.kt)("inlineCode",{parentName:"p"},"while"),"-Schleife."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"// Blinken nach Tasterdruck\n#include <Zumo32U4.h>        // Einbinden der ZUMO Bibliothek\n\n//highlight-next-line\nZumo32U4ButtonA buttonA;     // Objekt f\xfcr den Taster A\n\nvoid setup(){\n    ledRed(1);\n    //highlight-next-line\n    buttonA.waitForButton(); // Programm pausiert, bis Taster A gedr\xfcckt wurde\n    ledRed(0);\n}\n\nvoid loop(){\n  ledGreen(1);               // LED einschalten\n  delay(1000);\n\n  ledGreen(0);               // LED ausschalten\n  delay(500);\n}\n")),(0,r.kt)("p",null,"Die Methode ",(0,r.kt)("inlineCode",{parentName:"p"},"isPressed()")," gibt ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," zur\xfcck, wenn der Taster gedr\xfcckt ist, ansonsten ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". Diese Methode ist nicht entprellt. Die Methode eignet sich besonders um in Abh\xe4ngigkeit der Taster Aktionen ausf\xfchren zu lassen. Hierf\xfcr wird die Methode mit eine ",(0,r.kt)("inlineCode",{parentName:"p"},"if-else")," Verzweigung kombibiert."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"if ( buttonA.isPressed() ){\n  // tue etwas, wenn der Taster A gedr\xfcckt wurde ...\n}\n")),(0,r.kt)("h3",{id:"aufgaben-1"},"Aufgaben"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,r.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Die rote LED soll immer, nachdem der Taster A gedr\xfcckt wurde drei Mal kurz aufblinken. Verwenden Sie die ",(0,r.kt)("inlineCode",{parentName:"li"},"buttonA.waitForButton()")," Funktion."),(0,r.kt)("li",{parentName:"ol"},"Die drei LEDs (rot, gr\xfcn, gelb) sollen mit den Tastern A,B und C gesteuert werden. Wenn der Taster A (bzw. B und C) gedr\xfcckt ist, soll die gelbe (bzw. gr\xfcne und rote) LED aufleuchten. Ist der entsprechende Taster nicht gedr\xfcckt, ist die LED aus. Verwenden Sie die Funktion ",(0,r.kt)("inlineCode",{parentName:"li"},"isPressed()"),".")))),(0,r.kt)("h2",{id:"motoren"},"Motoren"),(0,r.kt)("p",null,"F\xfcr die ",(0,r.kt)("a",{parentName:"p",href:"/docs/zumo32u4/motors"},"Motoren")," steht die Klasse ",(0,r.kt)("inlineCode",{parentName:"p"},"Zumo32U4Motors")," zur Verf\xfcgung. Die wichtigste Methode zum Steuern der beiden Motoren ist ",(0,r.kt)("inlineCode",{parentName:"p"},"setSpeeds(int left, int right)"),". Die Argumente geben jeweils die Drehgeschwindigkeit der beiden Motoren an. Die erlaubten Werte liegen im Bereich von -400 bis 400."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"// Drehender Zumo\n#include <Zumo32U4.h>        // Einbinden der ZUMO Bibliothek\n\nZumo32U4ButtonA buttonA;     // Objekt f\xfcr den Taster A\n//highlight-next-line\nZumo32U4Motors motors;       // Objekt f\xfcr die Motoren\n\nvoid setup(){\n    ledGreen(1);\n    buttonA.waitForButton(); // Programm pausiert, bis Taster A gedr\xfcckt wurde\n    ledGreen(0);\n}\n\nvoid loop(){\n  //highlight-next-line\n  motors.setSpeeds(-200, 200); // auf der Stelle drehen\n  delay(1000);\n\n  //highlight-next-line\n  motors.setSpeeds(0, 0);     // Motoren stoppen\n  delay(500);\n\n  //highlight-next-line\n  motors.setSpeeds(200, -200); // auf der Stelle drehen\n  delay(1000);\n}\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Die Geschwindigkeit der Motoren des Zumo 32u4 wird mit Werten zwischen ",(0,r.kt)("strong",{parentName:"p"},"-400 und +400")," gesteuert."))),(0,r.kt)("h3",{id:"aufgaben-2"},"Aufgaben"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,r.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Lassen Sie den Roboter, immer nachdem ein ",(0,r.kt)("strong",{parentName:"li"},"beliebiger")," Taster gedr\xfcckt wurde, einen Kreis mit einem Durchmesser von ca. 30 cm fahren. Start und Zielpunkt des Roboters sollen an der gleichen Stelle liegen.")))),(0,r.kt)("h2",{id:"lcd-display"},"LCD Display"),(0,r.kt)("p",null,"Auf de Roboter befindet sich ein einfaches  ",(0,r.kt)("a",{parentName:"p",href:"/docs/zumo32u4/display"},"LED-Display")," f\xfcr 8x2 Zeichen. Im nachfolgenden Beispiel sind die wichtigsten Methoden zum Ansteuern des Displays beschrieben. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino",metastring:"{5,11-14,17-18,23-24}","{5,11-14,17-18,23-24}":!0},'/* Einfaches Beispiel f\xfcr das Display*/\n\n#include <Zumo32U4.h>\n\nZumo32U4LCD lcd;           // Objekt f\xfcr das LCD-Display\nZumo32U4ButtonA buttonA;   // Objekt f\xfcr den Taster A\nint counter = 0;\n\nvoid setup()\n{\n  lcd.clear();             // L\xf6scht das Display und setzt den Cursor nach oben links (0,0).\n  lcd.print("Hey,");       // Gibt Text aus. Alter Text wird \xfcberschrieben.\n  lcd.gotoXY(0, 1);        // Setzt den Cursor auf die angegebenen xy-Koordinaten.\n  lcd.print("drueck A");\n  buttonA.waitForButton(); // Warten auf Taster A.\n\n  lcd.clear();\n  lcd.print("Zaehler");    // Keine Umlaute verwenden.\n}\n\nvoid loop()\n{\n  lcd.gotoXY(0, 1);        // Setzt den Cursor (X,Y): 1. Stelle, 2. Zeile,\n  lcd.print(counter);      // Gibt den Wert der Variablen aus.\n  counter++;\n  delay(100);\n}\n')),(0,r.kt)("h3",{id:"aufgaben-3"},"Aufgaben"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,r.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Vervollst\xe4ndigen Sie das unten gegebene ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#vorlage-aufgabe-1"},"Programm"))," so, dass der Roboter die angegeben Aufgaben ausf\xfchrt."),(0,r.kt)("li",{parentName:"ol"},"Schreiben Sei eine Funktion ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"void drehen(in grad)")),", welche den Roboter um die angegebene Gradzahl drehen l\xe4sst. Ein negativer Winkel soll eine Drehung nach rechts und  ein positiver Winkel eine Drehung nach links verursachen.\nVerwenden Sie die Funktion, um den Roboter das ",(0,r.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Haus_vom_Nikolaus"},"Haus vom Nikolaus")," fahren zu lassen."),(0,r.kt)("li",{parentName:"ol"},"Erstellen Sie sich eine eigene Befehlsreferenz mit Word oder OpenOffice. Notieren Sie sich zu jedem Befehl auch eine eigenes Beispiel.")))),(0,r.kt)("h4",{id:"vorlage-aufgabe-1"},"Vorlage Aufgabe 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},'/* Vervollst\xe4ndigen Sie die Vorlage mit den angegebenen Funktionen */\n\n#include <Zumo32U4.h>    // Die Bibliothek sollte immer als erstes eingebunden werden\n\nZumo32U4LCD lcd;          // Display (8x2)\nZumo32U4ButtonA buttonA;  // Taster A\nZumo32U4ButtonB buttonB;  // Taster B\nZumo32U4ButtonC buttonC;  // Taster C\nZumo32U4Motors motors;    // Motoren\n\nint leftSpeed  = 200;     // Werte zwischen -400 ... +400\nint rightSpeed = 200;\n\nvoid setup() {\n  lcd.clear();             \n  lcd.print("A  B  C");\n}\n\nvoid loop() {\n  if ( buttonA.isPressed() ) {   // Abfrage, ob Taster gedr\xfcckt wurde\n   // - gelbe LED anschalten, Textausgabe "gerade"\n   // - 0,5 Sekunden warten\n   // - 50 cm geradeaus fahren\n   // - gelbe LED ausschalten,  Men\xfc anzeigen "A  B  C"\n  }\n  else if (buttonB.isPressed()) {\n    // - gr\xfcne LED anschalten, Textausgabe "beschleunigen" \n    // - 0,5 Sekunden warten\n    // - den Roboter (ca. 1 Sekunde) auf Maximalgeschwindigkeit beschleunigen\n    // - den Geschwindigkeit wieder (ca. 1 Sekunden) bis zum Stillstand verringern \n    // - gr\xfcne LED ausschalten, Men\xfc anzeigen "A  B  C"\n  }\n  else if (buttonC.isPressed()) {\n    // - rote LED anschalten, Textausgabe "Viereck" \n    // - 0,5 Sekunden warten\n    // - den Roboter ein m\xf6glichst exaktes Quadrat fahren lassen (ca. 20cm x 20cm)\n    // - Start und Ziel sollen identisch sein\n    // - rote LED ausschalten, Men\xfc anzeigen "A  B  C"\n  }\n}\n')))}c.isMDXComponent=!0},4394:function(e,n,t){n.Z=t.p+"assets/files/BefehlsreferenzZumo32u4-83d669fd0b0518fcca651b5a1d3ea504.pdf"},4234:function(e,n,t){n.Z=t.p+"assets/files/BefehlsreferenzZumo32u4-83d669fd0b0518fcca651b5a1d3ea504.pdf"}}]);