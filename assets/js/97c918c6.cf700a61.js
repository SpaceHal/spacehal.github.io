"use strict";(self.webpackChunkspace_hal=self.webpackChunkspace_hal||[]).push([[4512],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),s=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(u.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,h=m["".concat(u,".").concat(c)]||m[c]||p[c]||a;return t?i.createElement(h,l(l({ref:n},d),{},{components:t})):i.createElement(h,l({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={title:"Installation",sidebar_label:"Installation",description:"Treiber und Bibliothek (Arduino) f\xfcr den Zumo 32u4 installieren.",custom_edit_url:null},l=void 0,o={unversionedId:"zumo32u4/installation",id:"zumo32u4/installation",title:"Installation",description:"Treiber und Bibliothek (Arduino) f\xfcr den Zumo 32u4 installieren.",source:"@site/docs/zumo32u4/installation.md",sourceDirName:"zumo32u4",slug:"/zumo32u4/installation",permalink:"/docs/zumo32u4/installation",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"Installation",sidebar_label:"Installation",description:"Treiber und Bibliothek (Arduino) f\xfcr den Zumo 32u4 installieren.",custom_edit_url:null},sidebar:"mySidebar",previous:{title:"Zumo 32u4",permalink:"/docs/category/zumo-32u4"},next:{title:"Erste Schritte",permalink:"/docs/zumo32u4/gettingStarted"}},u={},s=[{value:"Treiber f\xfcr Windowssysteme",id:"treiber-f\xfcr-windowssysteme",level:2},{value:"A-Star Board des Zumo 32u4 bei Arduino einbinden (optional)",id:"a-star-board-des-zumo-32u4-bei-arduino-einbinden-optional",level:2},{value:"Zumo32u4 Bibliothek",id:"zumo32u4-bibliothek",level:2},{value:"Automatische Installation",id:"automatische-installation",level:3},{value:"Manuelle Installation",id:"manuelle-installation",level:3},{value:"Alternative Installation",id:"alternative-installation",level:4}],d={toc:s},m="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bevor der Zumo mit der Arduino-Programmierumgebung programmiert werden kann, muss die Bibliothek ",(0,r.kt)("em",{parentName:"p"},"Zumo32u4")," eingebunden werden. Auch wenn der Zumo ohne die Bibliothek programmiert werden kann, stellt die Bibliothek viele Methode zur Verf\xfcgung, welche das Steuern der LEDs, der Motoren, der Sensoren, des Displays, etc. deutlich vereinfacht."),(0,r.kt)("h2",{id:"treiber-f\xfcr-windowssysteme"},"Treiber f\xfcr Windowssysteme"),(0,r.kt)("p",null,"Unter Windows muss au\xdferdem ein ",(0,r.kt)("strong",{parentName:"p"},"Treiber")," f\xfcr den Mikrocontroller des Zumo 32u4 installiert werden (unter Linux und macOS nicht notwendig). Auf den Schulrechnern sollte der Treiber bereits installiert sein. Ein ausf\xfchrliche Anleitung zur Installation des Treibers (A-Star 32u4) ist auf der ",(0,r.kt)("a",{parentName:"p",href:"https://www.pololu.com/docs/0J63/5.1"},"Pololu Webseite")," hier zu finden. "),(0,r.kt)("h2",{id:"a-star-board-des-zumo-32u4-bei-arduino-einbinden-optional"},"A-Star Board des Zumo 32u4 bei Arduino einbinden (optional)"),(0,r.kt)("p",null,"Der Zumo 32u4 hat einen sogenannten ",(0,r.kt)("em",{parentName:"p"},"Bootloader"),", welcher es erm\xf6glicht die von Ihnen am Rechner geschrieben Programme auf den Mikrocontroller zu laden. Der Bootloaders kann in der Arduino IDE mit dem ",(0,r.kt)("em",{parentName:"p"},"Boardverwalter")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.pololu.com/docs/0J63/5.2"},"eingebunden werden"),". Nach erfolgreichem Einbunden des Boards, kann unter ",(0,r.kt)("em",{parentName:"p"},"Werkzeuge>Board"),"  ",(0,r.kt)("strong",{parentName:"p"},"Pololu A-Star 32U4")," als Board f\xfcr den mit dem Rechner verbundene Zumo 32u4 ausgew\xe4hlt werden."),(0,r.kt)("p",null,"Wenn Arduino nicht f\xfcr den ",(0,r.kt)("strong",{parentName:"p"},"Pololu A-Star 32U4")," Bootloader eingerichtet wurde, sollte unter ",(0,r.kt)("em",{parentName:"p"},"Werkzeuge>Board")," das Board ",(0,r.kt)("strong",{parentName:"p"},"Arduino Leonardo")," ausgew\xe4hlt werden. "),(0,r.kt)("h2",{id:"zumo32u4-bibliothek"},"Zumo32u4 Bibliothek"),(0,r.kt)("h3",{id:"automatische-installation"},"Automatische Installation"),(0,r.kt)("p",null,"Zum Einbinden der Zumo-Bibliothek wird der ",(0,r.kt)("strong",{parentName:"p"},"Bibliotheksverwalter")," ge\xf6ffnet: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arduino >1.8.9: ",(0,r.kt)("em",{parentName:"li"},"Werkzeuge > Bibliothek verwalten")),(0,r.kt)("li",{parentName:"ul"},"Arduino 1.8.5: ",(0,r.kt)("em",{parentName:"li"},"Sketch > Bibliothek einbinden > Bibliotheken verwalten"))),(0,r.kt)("p",null,"Im Suchfeld (",(0,r.kt)("em",{parentName:"p"},"Grenzen Sie Ihre Suche ein ..."),") geben sie ",(0,r.kt)("em",{parentName:"p"},'"zumo32u4"')," ein. Klicken Sie bei der Bibliothek ",(0,r.kt)("em",{parentName:"p"},"Zumo32u4 by Pololu Version xxx")," auf ",(0,r.kt)("em",{parentName:"p"},"Installieren"),"."),(0,r.kt)("p",null,"Nach erfolgreichen Installation sollte der Bibliotheksverwalter wie folgt aussehen:"),(0,r.kt)("img",{src:"/img/zumo32u4/BibliotheksVerwaltungZumo.png",alt:"Bibliotheksverwalter Arduino",width:"95%",className:"center"}),(0,r.kt)("h3",{id:"manuelle-installation"},"Manuelle Installation"),(0,r.kt)("p",null,"Bei der manuellen Installation, muss die gezippte Bibliothek herruntergeladen werden, um sie anschlie\xdfend ins Arduinoverszeichniss zu kopieren."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Laden Sie die ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pololu/zumo-32u4-arduino-library"},"Zumo 32u4 Bibliothek")," von Github als ",(0,r.kt)("strong",{parentName:"li"},"zip-Datei")," (",(0,r.kt)("em",{parentName:"li"},"Clone or Download > Download ZIP"),") und speichern Sie sie."),(0,r.kt)("li",{parentName:"ol"},"\xd6ffnen Sie Arduino."),(0,r.kt)("li",{parentName:"ol"},"W\xe4hlen Sie unter ",(0,r.kt)("em",{parentName:"li"},"Sketch > Bibliothek einbinden > .ZIP-Bibliothek hinzuf\xfcgen ...")," aus und geben Sie die abgespeicherte ZIP-Datei an."),(0,r.kt)("li",{parentName:"ol"},"Starten Sie Arduino neu. "),(0,r.kt)("li",{parentName:"ol"},"Die Bibliothek wurde richtig installiert, wenn Sie unter ",(0,r.kt)("em",{parentName:"li"},"Datei>Beispiele")," ganz unten einen neuen Eintrag ",(0,r.kt)("em",{parentName:"li"},"Zumo32u4")," sehen.")),(0,r.kt)("h4",{id:"alternative-installation"},"Alternative Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Laden Sie die ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pololu/zumo-32u4-arduino-library"},"Zumo 32u4 Bibliothek")," von Github als ",(0,r.kt)("strong",{parentName:"li"},"zip-Datei")," (",(0,r.kt)("em",{parentName:"li"},"Clone or Download > Download ZIP"),") und entpacken Sie diese anschlie\xdfend."),(0,r.kt)("li",{parentName:"ol"},"Benennen Sie das entpackte Verzeichnis ",(0,r.kt)("em",{parentName:"li"},'"zumo-32u4-arduino-library-master"')," in ",(0,r.kt)("em",{parentName:"li"},'"Zumo32U4"')," um."),(0,r.kt)("li",{parentName:"ol"},"Suchen Sie auf Ihrem Rechner das Sketchbook-Verzeichnis. In der Arduino IDE wird das Sketchbook-Verzeichnis unter ",(0,r.kt)("em",{parentName:"li"},"Datei>Einstellungen>Sketchbook-Speicherort")," angezeigt. In diesem Verzeichnis sollte ein Unterverzeichnis ",(0,r.kt)("em",{parentName:"li"},"Arduino/libraries/")," zu finden sein, in welches Sie das entpackte Bibliotheksverzeichnis ",(0,r.kt)("em",{parentName:"li"},"Zumo32U4")," kopieren. Sollte das ",(0,r.kt)("em",{parentName:"li"},"Library"),"-Verzeichnis nicht existieren, erstellen Sie dieses."),(0,r.kt)("li",{parentName:"ol"},"Starten Sie die Arduino-IDE neu. Die Bibliothek wurde richtig installiert, wenn Sie unter ",(0,r.kt)("em",{parentName:"li"},"Datei>Beispiele")," ganz unten einen neuen Eintrag ",(0,r.kt)("em",{parentName:"li"},"Zumo32u4")," sehen.")))}p.isMDXComponent=!0}}]);