"use strict";(self.webpackChunkspacehale=self.webpackChunkspacehale||[]).push([[4493],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),d=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(a.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,f=p["".concat(a,".").concat(m)]||p[m]||c[m]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=p;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const o={id:"oled",title:"OLED Display",sidebar_label:"OLED Display",description:"OLED Display 0.96 und 1.3 Zoll mit Arduino ansteuern. Text und Graphik mit der u8g2-Bibliothek",custom_edit_url:null,keywords:["Arduino","Arduino Display","OLED","OLED Display","OLED 0.96","OLED 1.3","OLED 1.3 Zoll","OLED 0.96 Zoll","u2g8 OLED"]},l=void 0,u={unversionedId:"arduino/oled",id:"arduino/oled",title:"OLED Display",description:"OLED Display 0.96 und 1.3 Zoll mit Arduino ansteuern. Text und Graphik mit der u8g2-Bibliothek",source:"@site/docs/arduino/oled.md",sourceDirName:"arduino",slug:"/arduino/oled",permalink:"/docs/arduino/oled",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"oled",title:"OLED Display",sidebar_label:"OLED Display",description:"OLED Display 0.96 und 1.3 Zoll mit Arduino ansteuern. Text und Graphik mit der u8g2-Bibliothek",custom_edit_url:null,keywords:["Arduino","Arduino Display","OLED","OLED Display","OLED 0.96","OLED 1.3","OLED 1.3 Zoll","OLED 0.96 Zoll","u2g8 OLED"]},sidebar:"mySidebar",previous:{title:"Objektorientierung",permalink:"/docs/arduino/objectOriented"},next:{title:"Erste Schritte",permalink:"/docs/robotik/beginning"}},a={},d=[{value:"Hallo Welt",id:"hallo-welt",level:2},{value:"Terminal mit Zeilenvorschub mit u8x8",id:"terminal-mit-zeilenvorschub-mit-u8x8",level:2}],s={toc:d};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hallo-welt"},"Hallo Welt"),(0,i.kt)("p",null,"F\xfcr die OLED 0.96 Zoll Variante mit I2C Schnittstelle (4 Pins: GND, VCC, SCL, SDA, kein Reset Pin) gilt folgender Konstruktor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(U8X8_PIN_NONE);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},'#include <Arduino.h>\n#include <U8x8lib.h>\n\nU8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(U8X8_PIN_NONE);\n\nvoid setup(void)\n{\n  u8x8.begin();\n  u8x8.setFont(u8x8_font_chroma48medium8_r);\n  u8x8.drawString(3, 3, "Hallo Welt !");\n  delay(2000);\n}\n\nvoid loop(void)\n{\n  u8x8.clear();\n  u8x8.setInverseFont(0);\n  u8x8.drawString(0, 0, "(0,0)");\n  u8x8.drawString(10, 0, "(10,0)");\n\n  u8x8.setInverseFont(1);\n  u8x8.drawString(0, 7, "(0,8)");\n  u8x8.drawString(10, 7, "(10,8)");\n\n  delay(2000);\n  u8x8.setInverseFont(0);\n  u8x8.clear();\n  for (int z = 0; z < 8; z++) {\n    u8x8.setCursor(0, z);\n    u8x8.print("Z");\n    u8x8.print(z);\n    u8x8.print(": ");\n    for (int i = 0; i < (z * 2); i++) {\n      u8x8.print(".");\n      delay(100);\n    }\n  }\n  delay(2000);\n  for (int z = 7; z >= 0; z--) {\n    u8x8.clearLine(z);\n    delay(100);\n  }\n\n  delay(1000);\n}\n')),(0,i.kt)("h2",{id:"terminal-mit-zeilenvorschub-mit-u8x8"},"Terminal mit Zeilenvorschub mit u8x8"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/olikraus/u8g2/wiki/u8x8reference#print"},"u8x8reference \xb7 olikraus/u8g2 Wiki \xb7 GitHub")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-arduino"},'#include <Arduino.h>\n#include <U8x8lib.h>\n\n// Konstruktur f\xfcr I2C OLED 0,96 mit 4 Pins (ohne Reset Pin)\nU8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(U8X8_PIN_NONE);         \n\n// setup the terminal (U8X8LOG) and connect to u8g2 for automatic refresh of the display\n// The size (width * height) depends on the display \n#define U8LOG_WIDTH 16\n#define U8LOG_HEIGHT 8\nuint8_t u8log_buffer[U8LOG_WIDTH*U8LOG_HEIGHT];\nU8X8LOG u8x8log;\n\nvoid setup(void)\n{\n  u8x8.begin();\n  u8x8.setFont(u8x8_font_chroma48medium8_r);\n  \n  u8x8log.begin(u8x8, U8LOG_WIDTH, U8LOG_HEIGHT, u8log_buffer);\n  u8x8log.setRedrawMode(1);     // 0: Update screen with newline, 1: Update screen for every char  \n}\n\nunsigned long t = 0;\n// print the output of millis() to the terminal every second\nvoid loop(void) {\n  if ( t < millis() ) {\n    t = millis() + 15000;           // every 15 seconds\n    u8x8log.print("\\f");            // \\f = form feed: clear the screen\n  }\n  u8x8log.print("millis=");\n  u8x8log.print(millis());\n  u8x8log.print("\\n");\n  delay(20);\n}\n')))}c.isMDXComponent=!0}}]);