"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[4512],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),c=i,h=p["".concat(u,".").concat(c)]||p[c]||m[c]||a;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8277:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o={title:"Installation",sidebar_label:"Installation",description:"Treiber und Bibliothek (Arduino) f\xfcr den Zumo 32u4 installieren.",custom_edit_url:null},l=void 0,u={unversionedId:"zumo32u4/installation",id:"zumo32u4/installation",isDocsHomePage:!1,title:"Installation",description:"Treiber und Bibliothek (Arduino) f\xfcr den Zumo 32u4 installieren.",source:"@site/docs/zumo32u4/installation.md",sourceDirName:"zumo32u4",slug:"/zumo32u4/installation",permalink:"/docs/zumo32u4/installation",editUrl:null,version:"current",lastUpdatedAt:1630426919,formattedLastUpdatedAt:"8/31/2021",frontMatter:{title:"Installation",sidebar_label:"Installation",description:"Treiber und Bibliothek (Arduino) f\xfcr den Zumo 32u4 installieren.",custom_edit_url:null},sidebar:"sideBarZumo",next:{title:"Erste Schritte",permalink:"/docs/zumo32u4/gettingStarted"}},s=[{value:"Treiber f\xfcr Windowssysteme",id:"treiber-f\xfcr-windowssysteme",children:[]},{value:"A-Star Board des Zumo 32u4 bei Arduino einbinden (optional)",id:"a-star-board-des-zumo-32u4-bei-arduino-einbinden-optional",children:[]},{value:"Zumo32u4 Bibliothek",id:"zumo32u4-bibliothek",children:[{value:"Automatische Installation",id:"automatische-installation",children:[]},{value:"Manuelle Installation",id:"manuelle-installation",children:[]}]}],d={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bevor der Zumo mit der Arduino-Programmierumgebung programmiert werden kann, muss die Bibliothek ",(0,a.kt)("em",{parentName:"p"},"Zumo32u4")," eingebunden werden. Auch wenn der Zumo ohne die Bibliothek programmiert werden kann, stellt die Bibliothek viele Methode zur Verf\xfcgung, welche das Steuern der LEDs, der Motoren, der Sensoren, des Displays, etc. deutlich vereinfacht."),(0,a.kt)("h2",{id:"treiber-f\xfcr-windowssysteme"},"Treiber f\xfcr Windowssysteme"),(0,a.kt)("p",null,"Unter Windows muss au\xdferdem ein ",(0,a.kt)("strong",{parentName:"p"},"Treiber")," f\xfcr den Mikrocontroller des Zumo 32u4 installiert werden (unter Linux und macOS nicht notwendig). Auf den Schulrechnern sollte der Treiber bereits installiert sein. Ein ausf\xfchrliche Anleitung zur Installation des Treibers (A-Star 32u4) ist auf der ",(0,a.kt)("a",{parentName:"p",href:"https://www.pololu.com/docs/0J63/5.1"},"Pololu Webseite")," hier zu finden. "),(0,a.kt)("h2",{id:"a-star-board-des-zumo-32u4-bei-arduino-einbinden-optional"},"A-Star Board des Zumo 32u4 bei Arduino einbinden (optional)"),(0,a.kt)("p",null,"Der Zumo 32u4 hat einen sogenannten ",(0,a.kt)("em",{parentName:"p"},"Bootloader"),", welcher es erm\xf6glicht die von Ihnen am Rechner geschrieben Programme auf den Mikrocontroller zu laden. Der Bootloaders kann in der Arduino IDE mit dem ",(0,a.kt)("em",{parentName:"p"},"Boardverwalter")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.pololu.com/docs/0J63/5.2"},"eingebunden werden"),". Nach erfolgreichem Einbunden des Boards, kann unter ",(0,a.kt)("em",{parentName:"p"},"Werkzeuge>Board"),"  ",(0,a.kt)("strong",{parentName:"p"},"Pololu A-Star 32U4")," als Board f\xfcr den mit dem Rechner verbundene Zumo 32u4 ausgew\xe4hlt werden."),(0,a.kt)("p",null,"Wenn Arduino nicht f\xfcr den ",(0,a.kt)("strong",{parentName:"p"},"Pololu A-Star 32U4")," Bootloader eingerichtet wurde, sollte unter ",(0,a.kt)("em",{parentName:"p"},"Werkzeuge>Board")," das Board ",(0,a.kt)("strong",{parentName:"p"},"Arduino Leonardo")," ausgew\xe4hlt werden. "),(0,a.kt)("h2",{id:"zumo32u4-bibliothek"},"Zumo32u4 Bibliothek"),(0,a.kt)("h3",{id:"automatische-installation"},"Automatische Installation"),(0,a.kt)("p",null,"Zum Einbinden der Zumo-Bibliothek wird der ",(0,a.kt)("strong",{parentName:"p"},"Bibliotheksverwalter")," ge\xf6ffnet: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arduino >1.8.9: ",(0,a.kt)("em",{parentName:"li"},"Werkzeuge > Bibliothek verwalten")),(0,a.kt)("li",{parentName:"ul"},"Arduino 1.8.5: ",(0,a.kt)("em",{parentName:"li"},"Sketch > Bibliothek einbinden > Bibliotheken verwalten"))),(0,a.kt)("p",null,"Im Suchfeld (",(0,a.kt)("em",{parentName:"p"},"Grenzen Sie Ihre Suche ein ..."),") geben sie ",(0,a.kt)("em",{parentName:"p"},'"zumo32u4"')," ein. Klicken Sie bei der Bibliothek ",(0,a.kt)("em",{parentName:"p"},"Zumo32u4 by Pololu Version xxx")," auf ",(0,a.kt)("em",{parentName:"p"},"Installieren"),"."),(0,a.kt)("p",null,"Nach erfolgreichen Installation sollte der Bibliotheksverwalter wie folgt aussehen:"),(0,a.kt)("img",{src:"/img/zumo32u4/BibliotheksVerwaltungZumo.png",alt:"Bibliotheksverwalter Arduino",width:"95%",class:"center"}),(0,a.kt)("h3",{id:"manuelle-installation"},"Manuelle Installation"),(0,a.kt)("p",null,"Bei der manuellen Installation, muss die gezippte Bibliothek herruntergeladen werden, um sie anschlie\xdfend ins Arduinoverszeichniss zu kopieren."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Laden Sie die ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pololu/zumo-32u4-arduino-library"},"Zumo 32u4 Bibliothek")," von Github als ",(0,a.kt)("strong",{parentName:"li"},"zip-Datei")," (",(0,a.kt)("em",{parentName:"li"},"Clone or Download > Download ZIP"),") und speichern Sie sie."),(0,a.kt)("li",{parentName:"ol"},"\xd6ffnen Sie Arduino."),(0,a.kt)("li",{parentName:"ol"},"W\xe4hlen Sie unter ",(0,a.kt)("em",{parentName:"li"},"Sketch > Bibliothek einbinden > .ZIP-Bibliothek hinzuf\xfcgen ...")," aus und geben Sie die abgespeicherte ZIP-Datei an."),(0,a.kt)("li",{parentName:"ol"},"Starten Sie Arduino neu. "),(0,a.kt)("li",{parentName:"ol"},"Die Bibliothek wurde richtig installiert, wenn Sie unter ",(0,a.kt)("em",{parentName:"li"},"Datei>Beispiele")," ganz unten einen neuen Eintrag ",(0,a.kt)("em",{parentName:"li"},"Zumo32u4")," sehen.")),(0,a.kt)("h4",{id:"alternative-installation"},"Alternative Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Laden Sie die ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pololu/zumo-32u4-arduino-library"},"Zumo 32u4 Bibliothek")," von Github als ",(0,a.kt)("strong",{parentName:"li"},"zip-Datei")," (",(0,a.kt)("em",{parentName:"li"},"Clone or Download > Download ZIP"),") und entpacken Sie diese anschlie\xdfend."),(0,a.kt)("li",{parentName:"ol"},"Benennen Sie das entpackte Verzeichnis ",(0,a.kt)("em",{parentName:"li"},'"zumo-32u4-arduino-library-master"')," in ",(0,a.kt)("em",{parentName:"li"},'"Zumo32U4"')," um."),(0,a.kt)("li",{parentName:"ol"},"Suchen Sie auf Ihrem Rechner das Sketchbook-Verzeichnis. In der Arduino IDE wird das Sketchbook-Verzeichnis unter ",(0,a.kt)("em",{parentName:"li"},"Datei>Einstellungen>Sketchbook-Speicherort")," angezeigt. In diesem Verzeichnis sollte ein Unterverzeichnis ",(0,a.kt)("em",{parentName:"li"},"Arduino/libraries/")," zu finden sein, in welches Sie das entpackte Bibliotheksverzeichnis ",(0,a.kt)("em",{parentName:"li"},"Zumo32U4")," kopieren. Sollte das ",(0,a.kt)("em",{parentName:"li"},"Library"),"-Verzeichnis nicht existieren, erstellen Sie dieses."),(0,a.kt)("li",{parentName:"ol"},"Starten Sie die Arduino-IDE neu. Die Bibliothek wurde richtig installiert, wenn Sie unter ",(0,a.kt)("em",{parentName:"li"},"Datei>Beispiele")," ganz unten einen neuen Eintrag ",(0,a.kt)("em",{parentName:"li"},"Zumo32u4")," sehen.")))}m.isMDXComponent=!0}}]);