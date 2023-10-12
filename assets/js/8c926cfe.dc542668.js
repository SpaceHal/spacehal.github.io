"use strict";(self.webpackChunkspace_hal=self.webpackChunkspace_hal||[]).push([[4493],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,g=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return t?r.createElement(g,a(a({ref:n},s),{},{components:t})):r.createElement(g,a({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var d=2;d<l;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const l={id:"oled",title:"OLED Display",sidebar_label:"OLED Display",description:"SSD1306 OLED Display 0.96 und 1.3 Zoll mit Arduino ansteuern. Text und Graphik mit der u8g2-Bibliothek",custom_edit_url:null,keywords:["Arduino","Arduino Display","OLED","OLED Display","SSD1306","SSD1306 OLED","OLED 0.96","OLED 1.3","OLED 1.3 Zoll","OLED 0.96 Zoll","u2g8 OLED"]},a=void 0,o={unversionedId:"arduino/oled",id:"arduino/oled",title:"OLED Display",description:"SSD1306 OLED Display 0.96 und 1.3 Zoll mit Arduino ansteuern. Text und Graphik mit der u8g2-Bibliothek",source:"@site/docs/arduino/oled.md",sourceDirName:"arduino",slug:"/arduino/oled",permalink:"/docs/arduino/oled",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"oled",title:"OLED Display",sidebar_label:"OLED Display",description:"SSD1306 OLED Display 0.96 und 1.3 Zoll mit Arduino ansteuern. Text und Graphik mit der u8g2-Bibliothek",custom_edit_url:null,keywords:["Arduino","Arduino Display","OLED","OLED Display","SSD1306","SSD1306 OLED","OLED 0.96","OLED 1.3","OLED 1.3 Zoll","OLED 0.96 Zoll","u2g8 OLED"]},sidebar:"mySidebar",previous:{title:"Objektorientierung",permalink:"/docs/arduino/objectOriented"},next:{title:"Erste Schritte",permalink:"/docs/robotik/beginning"}},u={},d=[{value:"(OLED SSD1306 mit 0.96 oder 1.3 Zoll und 128\xd764 Pixeln)",id:"oled-ssd1306-mit-096-oder-13-zoll-und-12864-pixeln",level:2},{value:"Einfache Textausgabe",id:"einfache-textausgabe",level:2},{value:"Terminal mit Zeilenvorschub",id:"terminal-mit-zeilenvorschub",level:2}],s={toc:d},p="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"oled-ssd1306-mit-096-oder-13-zoll-und-12864-pixeln"},"(OLED SSD1306 mit 0.96 oder 1.3 Zoll und 128\xd764 Pixeln)"),(0,i.kt)("img",{src:"/img/arduino/OLED_I2C.jpg",alt:"drawing",width:"700pt",className:"center"}),(0,i.kt)("p",null,"Das SSD1306 OLED Display mit I2C Schnittstelle kann ohne weitere Bauteile direkt an den Arduino angeschlossen werden. Es gelten folgende Belegungen:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"OLED mit I2C"),(0,i.kt)("th",{parentName:"tr",align:null},"Arduino UNO"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GND"),(0,i.kt)("td",{parentName:"tr",align:null},"GND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VCC"),(0,i.kt)("td",{parentName:"tr",align:null},"5V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SCL"),(0,i.kt)("td",{parentName:"tr",align:null},"SCL (oder A5)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SDA"),(0,i.kt)("td",{parentName:"tr",align:null},"SDA (oder A4)")))),(0,i.kt)("p",null,"F\xfcr die einfache Text Ausgabe sollte die gut dokumentierte ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/olikraus/u8g2/wiki"},"U8g2")," Bibliothek \xfcber den Arduino Bibliotheksmanager eingebunden werden."),(0,i.kt)("p",null,"Der Konstruktor f\xfcr die 0.96 Zoll Variante des OLED Displays ist wie folgt:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(U8X8_PIN_NONE);\n")),(0,i.kt)("h2",{id:"einfache-textausgabe"},"Einfache Textausgabe"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino",metastring:'title="https://wokwi.com/projects/353733080329208833"',title:'"https://wokwi.com/projects/353733080329208833"'},'#include <Arduino.h>\n#include <U8x8lib.h>  // Bibliothek U8g2 einbinden\n\n// Beim Arduino Uno werden folgende Pins f\xfcr das OLED Display verwendet\n// OLED       Arduino UNO\n// -----     -------------\n// GND        GND\n// VCC        5V\n// SCL        SCL (oder A5)\n// SDA        SDA (oder A4)\n\n// Konstruktur f\xfcr I2C OLED 0,96 mit 4 Pins (ohne Reset Pin)\nU8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(U8X8_PIN_NONE);\n\nvoid setup(void)\n{\n  u8x8.begin();\n  //u8x8.setFont(u8x8_font_chroma48medium8_r);\n  u8x8.setFont(u8x8_font_artossans8_r);   // Schriftart ausw\xe4hlen\n  u8x8.drawString(3, 3, "Hallo Welt !");\n  delay(2000);\n}\n\nvoid loop(void)\n{\n  u8x8.clear();                       // L\xf6scht das Display\n  u8x8.setInverseFont(0);             // wei\xdf auf schwarzem Hintergrund\n  u8x8.drawString(0, 0, "(0,0)");     // Gibt einen Text an der Stelle (x,y) aus \n  u8x8.drawString(10, 0, "(10,0)");   // (10,0) ist rechts oben\n\n  u8x8.setInverseFont(1);             // schwarz auf wei\xdfem Hintergrund\n  u8x8.drawString(0, 7, "(0,8)");     // (0,8) ist links unten\n  u8x8.drawString(10, 7, "(10,8)");   // (10,8) ist rechts unten\n  delay(2000);\n  \n  u8x8.setInverseFont(0);\n  u8x8.clear();\n  for (int z = 0; z < 8; z++) {\n    u8x8.setCursor(0, z);             // setzt den Cursor an die Stelle (x,y)\n    u8x8.print("Z");                  // Gibt Text aus\n    u8x8.print(z);\n    u8x8.print(":");\n    for (int i = 0; i < (z * 2)-1; i++) {\n      u8x8.print(".");\n      delay(100);\n    }\n  }\n  delay(1000);\n\n  for (int z = 7; z >= 0; z--) {\n    u8x8.clearLine(z);                // L\xf6scht die angegebene Zeile\n    delay(100);\n  }\n  delay(1000);\n}\n')),(0,i.kt)("p",null,"Die einzelnen Befehle der Bibliothek sind in der Referenz gut erl\xe4utert. Zum Beispiel ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/olikraus/u8g2/wiki/u8x8reference#print"},(0,i.kt)("inlineCode",{parentName:"a"},"print"))," oder ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/olikraus/u8g2/wiki/u8x8reference#drawstring"},(0,i.kt)("inlineCode",{parentName:"a"},"drawString")),"."),(0,i.kt)("h2",{id:"terminal-mit-zeilenvorschub"},"Terminal mit Zeilenvorschub"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino",metastring:'title="https://wokwi.com/projects/353732054698049537"',title:'"https://wokwi.com/projects/353732054698049537"'},'#include <Arduino.h>\n#include <U8x8lib.h>  // Bibliothek U8g2 einbinden\n\n// Konstruktur f\xfcr I2C OLED 0,96 mit 4 Pins (ohne Reset Pin)\n// Beim Arduino Uno werden folgende Pins f\xfcr das OLED Display verwendet\n// OLED       Arduino UNO\n// -----     -------------\n// GND        GND\n// VCC        5V\n// SCL        SCL (oder A5)\n// SDA        SDA (oder A4)\n\nU8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(U8X8_PIN_NONE);         \n\n// Die Gr\xf6\xdfe des OLED 0.96 Displays \n#define U8LOG_WIDTH 16\n#define U8LOG_HEIGHT 8\n\n// Konfigurieren des Terminals (U8X8LOG)\nuint8_t u8log_buffer[U8LOG_WIDTH*U8LOG_HEIGHT];\nU8X8LOG u8x8log;\n\nvoid setup(void)\n{\n  u8x8.begin();\n  u8x8.setFont(u8x8_font_chroma48medium8_r);\n  \n  u8x8log.begin(u8x8, U8LOG_WIDTH, U8LOG_HEIGHT, u8log_buffer);\n  u8x8log.setRedrawMode(1);     // 0: Update screen with newline, 1: Update screen for every char  \n}\n\nunsigned long t = 0;\n// Gibt das Ergebnis von millis() dem Display aus\nvoid loop(void) {\n  if ( t < millis() ) {\n    t = millis() + 10000;          // alle 10 Sekunden\n    u8x8log.print("\\f");           // \\f = form feed: L\xf6scht das Display\n  }\n  u8x8log.print("millis=");\n  u8x8log.print(millis());\n  u8x8log.print("\\n");\n  delay(20);\n}\n')))}c.isMDXComponent=!0}}]);