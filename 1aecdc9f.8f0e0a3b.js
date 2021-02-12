(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{133:function(e,n,a){"use strict";a.d(n,"a",(function(){return m})),a.d(n,"b",(function(){return u}));var t=a(0),i=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),d=function(e){var n=i.a.useContext(b),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},m=function(e){var n=d(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},o=i.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),m=d(a),o=t,u=m["".concat(s,".").concat(o)]||m[o]||p[o]||r;return a?i.a.createElement(u,c(c({ref:n},b),{},{components:a})):i.a.createElement(u,c({ref:n},b))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,s=new Array(r);s[0]=o;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,s[1]=c;for(var b=2;b<r;b++)s[b]=a[b];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},74:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return s})),a.d(n,"metadata",(function(){return c})),a.d(n,"rightToc",(function(){return l})),a.d(n,"default",(function(){return d}));var t=a(3),i=a(7),r=(a(0),a(133)),s={title:"Den Arduino mit einem Taster steuern",sidebar_label:"5. Taster und if-Verzweigung",description:"Digitale Eingaben (Taster) und if-Verzweigung mit dem Arduino realisieren. Und wozu wird ein Pullup-Widerstand ben\xf6tigt?",custom_edit_url:null},c={unversionedId:"arduino/input",id:"arduino/input",isDocsHomePage:!1,title:"Den Arduino mit einem Taster steuern",description:"Digitale Eingaben (Taster) und if-Verzweigung mit dem Arduino realisieren. Und wozu wird ein Pullup-Widerstand ben\xf6tigt?",source:"@site/docs/arduino/input.md",slug:"/arduino/input",permalink:"/docs/arduino/input",editUrl:null,version:"current",sidebar_label:"5. Taster und if-Verzweigung",sidebar:"sideBarArduino",previous:{title:"Programmiertechniken - Schleifen",permalink:"/docs/arduino/loop"},next:{title:"Funktionen",permalink:"/docs/arduino/functions"}},l=[{value:"Einen Taster direkt verbinden",id:"einen-taster-direkt-verbinden",children:[]},{value:"Taster mit Pullup-Widerstand verbinden",id:"taster-mit-pullup-widerstand-verbinden",children:[]},{value:"Interner Pull-Up Widerstand",id:"interner-pull-up-widerstand",children:[]},{value:"Die <code>if</code> Verzweigung - Eine bedingte Anweisung",id:"die-if-verzweigung---eine-bedingte-anweisung",children:[{value:"<code>if ... else if ... else</code>",id:"if--else-if--else",children:[]}]},{value:"Einfaches Taster-Beispiel",id:"einfaches-taster-beispiel",children:[{value:"<code>pinMode(pin,INPUT)</code>",id:"pinmodepininput",children:[]},{value:"<code>digitalRead(pin)</code>",id:"digitalreadpin",children:[]},{value:"Aufgaben",id:"aufgaben",children:[]}]},{value:"Ein Taster zum Umschalten",id:"ein-taster-zum-umschalten",children:[{value:"Aufgaben",id:"aufgaben-1",children:[]}]}],b={rightToc:l};function d(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},b,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Im folgenden Programmbeispiel werden ",Object(r.b)("strong",{parentName:"p"},"digitale Signale eingelesen"),". Hierzu soll ein Taster \xfcber den digitalen Pin 3 mit dem Arduino verbunden und eine LED gesteuert werden. "),Object(r.b)("h2",{id:"einen-taster-direkt-verbinden"},"Einen Taster direkt verbinden"),Object(r.b)("img",{src:"/img/arduino/ohnePullUpWiderstand.svg",alt:"drawing",width:"450px",class:"center"}),Object(r.b)("p",null,"Die einfachste M\xf6glichkeit, einen Taster anzuschlie\xdfen, w\xe4re, ihn direkt mit einer Spannungsquelle (Vcc) und einem Arduino-Pin zu verbinden (",Object(r.b)("em",{parentName:"p"},"Abb. links"),"). Ein digitaler Arduino-Pin, welcher als Input konfiguriert ist, weist einen sehr hohen Innenwiderstand (",Object(r.b)("span",Object(t.a)({parentName:"p"},{className:"math math-inline"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"katex"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"katex-mathml"}),Object(r.b)("math",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mo",{parentName:"mrow"},"\u2248"),Object(r.b)("mn",{parentName:"mrow"},"100"),Object(r.b)("mtext",{parentName:"mrow"},"\xa0M"),Object(r.b)("mi",Object(t.a)({parentName:"mrow"},{mathvariant:"normal"}),"\u03a9")),Object(r.b)("annotation",Object(t.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\approx 100 \\text{ M}\\Omega")))),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"strut",style:{height:"0.48312em",verticalAlign:"0em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mrel"}),"\u2248"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord"}),"1"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord"}),"0"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord"}),"0"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord text"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord"}),"\xa0M")),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord"}),"\u03a9"))))),") auf. Wird der Taster nun gedr\xfcckt, so w\xfcrde die gesamte Spannung am Eingangspin abfallen. In unserem Beispiel also  ca. 5V am Pin 3."),Object(r.b)("p",null,"Ist der Taster jedoch ",Object(r.b)("strong",{parentName:"p"},"offen"),", so w\xe4re das Potential am Eingangspin unbestimmt oder auch schwebend (",Object(r.b)("em",{parentName:"p"},"engl.: floating"),") und nicht, wie man annehmen k\xf6nnte, null. In Abh\xe4ngigkeit von der Umgebung (z.B. eine Hand, die sich der Schaltung n\xe4hert) \xe4ndert sich die anliegende Spannung, und der Zustand des Pins ist unvorhersehbar (HIGH oder LOW)."),Object(r.b)("p",null,"Um das zu \xe4ndern, m\xfcsste der Pin au\xdferdem mit der Masse verbunden werden. In der rechten Abbildung ist genau das geschehen, nur mit dem Unterschied, dass der Taster zwischen dem Pin und der Masse liegt. Ist der Taster offen, w\xe4re alles in Ordnung (am Pin liegen dann Vcc = 5V). Problematisch wird es aber, wenn der Taster gedr\xfcckt wird. Dann entsteht ein ",Object(r.b)("strong",{parentName:"p"},"Kurzschluss")," zwischen Vcc und GND, was unbedingt vermieden werden sollte."),Object(r.b)("h2",{id:"taster-mit-pullup-widerstand-verbinden"},"Taster mit Pullup-Widerstand verbinden"),Object(r.b)("img",{src:"/img/arduino/PullUpWiderstand.svg",alt:"drawing",width:"400px",class:"center"}),Object(r.b)("p",null,"Zum Verhindern eines Kurzschlusses beim Schlie\xdfen des Tasters wird zwischen Vcc und dem Taster ein Widerstand eingef\xfcgt. Ist der Taster offen, wird die Eingangsspannung des Pins auf die angeschlossene Spannung Vcc hochgezogen, ohne dass es einen Kurzschluss gibt. Daher auch der Name ",Object(r.b)("strong",{parentName:"p"},"Pullup-Widerstand"),". Ist der Taster geschlossen, so ist der Pin direkt mit der Masse verbunden und die Spannung betr\xe4gt 0V."),Object(r.b)("p",null,"Geeignete Werte f\xfcr einen Pullup-Widerstand sind ",Object(r.b)("span",Object(t.a)({parentName:"p"},{className:"math math-inline"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"katex"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"katex-mathml"}),Object(r.b)("math",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("msub",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msub"},"R"),Object(r.b)("mtext",{parentName:"msub"},"up")),Object(r.b)("mo",{parentName:"mrow"},"="),Object(r.b)("mn",{parentName:"mrow"},"10"),Object(r.b)("mtext",{parentName:"mrow"},"\u2009"),Object(r.b)("mi",{parentName:"mrow"},"k"),Object(r.b)("mi",Object(t.a)({parentName:"mrow"},{mathvariant:"normal"}),"\u03a9"),Object(r.b)("mtext",{parentName:"mrow"},"\xa0"),Object(r.b)("mo",{parentName:"mrow"},"\u22ef"),Object(r.b)("mn",{parentName:"mrow"},"50"),Object(r.b)("mtext",{parentName:"mrow"},"\u2009"),Object(r.b)("mi",{parentName:"mrow"},"k"),Object(r.b)("mi",Object(t.a)({parentName:"mrow"},{mathvariant:"normal"}),"\u03a9")),Object(r.b)("annotation",Object(t.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"R_\\text{up} = 10\\, k\\Omega\\ \\cdots 50\\, k\\Omega")))),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"strut",style:{height:"0.969438em",verticalAlign:"-0.286108em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.00773em"}}),"R"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"msupsub"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"vlist",style:{height:"0.15139200000000003em"}}),Object(r.b)("span",Object(t.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"-0.00773em",marginRight:"0.05em"}}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord text mtight"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord mtight"}),"up"))))),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"vlist",style:{height:"0.286108em"}}),Object(r.b)("span",{parentName:"span"})))))),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mrel"}),"="),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord"}),"1"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord"}),"0"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03148em"}}),"k"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord"}),"\u03a9"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mspace"}),"\xa0"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"minner"}),"\u22ef"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord"}),"5"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord"}),"0"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03148em"}}),"k"),Object(r.b)("span",Object(t.a)({parentName:"span"},{className:"mord"}),"\u03a9")))))),Object(r.b)("h2",{id:"interner-pull-up-widerstand"},"Interner Pull-Up Widerstand"),Object(r.b)("img",{src:"/img/arduino/intPullUpWiderstand.svg",alt:"drawing",width:"300px",class:"center"}),Object(r.b)("p",null,"Alternativ zu einem externen Pullup-Widerstand, der extra in die Schaltung eingef\xfcgt werden muss, gibt es beim Arduino auch die M\xf6glichkeit, einen internen Pullup-Widerstand zu konfigurieren. Daf\xfcr gibt es zwei M\xf6glichkeiten"),Object(r.b)("p",null,"Mit dem Befehl ",Object(r.b)("inlineCode",{parentName:"p"},"pinMode()")," und dem Parameter ",Object(r.b)("inlineCode",{parentName:"p"},"INPUT_PULLUP"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-arduino"}),"#define TASTER_PIN 3  \npinMode(TASTER_PIN, INPUT_PULLUP); // Pin als Eingang mitPullup-Widerstand konfigurieren\n")),Object(r.b)("p",null,"Oder durch ein Kombination der Befehle ",Object(r.b)("inlineCode",{parentName:"p"},"pinmode()")," und ",Object(r.b)("inlineCode",{parentName:"p"},"digitalWrite()"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-arduino"}),"#define TASTER_PIN 3            \npinMode(TASTER_PIN, INPUT);     // Pin als Eingang definieren\ndigitalWrite(TASTER_PIN, HIGH); // Pullup-Widerstand des Pins einschalten\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Ein Taster sollte nur mit einem Pullup- oder Pulldown-Widerstand verwendet werden, da der Spannungszustand des Taster-Pins sonst nicht stabil ist und der Zustand des Eingangspins sich zuf\xe4llig \xe4ndern kann."))),Object(r.b)("h2",{id:"die-if-verzweigung---eine-bedingte-anweisung"},"Die ",Object(r.b)("inlineCode",{parentName:"h2"},"if")," Verzweigung - Eine bedingte Anweisung"),Object(r.b)("p",null,"Hat man den Status eines Tasters eingelesen, m\xf6chte man in aller Regel den weiteren Programmablauf vom Tasterzustand abh\xe4ngig machen. Hierf\xfcr eignet sich die ",Object(r.b)("inlineCode",{parentName:"p"},"if")," Verzweigung als bedingte Anweisung."),Object(r.b)("img",{src:"/img/arduino/ifCondition.png",alt:"drawing",width:"290px",class:"center"}),Object(r.b)("p",null,"Nach dem Schl\xfcsselwort ",Object(r.b)("inlineCode",{parentName:"p"},"if")," folgt in Klammern eine Bedingung. Diese Bedingung kann zum Beispiel ein Vergleich ",Object(r.b)("inlineCode",{parentName:"p"},"zahl==1")," oder ",Object(r.b)("inlineCode",{parentName:"p"},"zahl>1")," sein. Ist die Bedingung wahr, also ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", dann wird der in geschweiften Klammern ",Object(r.b)("inlineCode",{parentName:"p"},"{ ... }"),"  stehende Code ausgef\xfchrt. "),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-arduino"}),'int zahl = 6;\n\nif( zahl > 6 )\n{\n  Serial.println("Die Zahl ist gr\xf6\xdfer als 6.");\n}\n')),Object(r.b)("h3",{id:"if--else-if--else"},Object(r.b)("inlineCode",{parentName:"h3"},"if ... else if ... else")),Object(r.b)("p",null,"Oft kommt es aber vor, dass in einem Programm viele verschiedene Verzweigungen ben\xf6tigt werden, wobei f\xfcr jede einzelne Verzweigung eine Bedingung ben\xf6tigt wird. Hierf\xfcr stehen die Schl\xfcsselw\xf6rt ",Object(r.b)("inlineCode",{parentName:"p"},"else if")," und ",Object(r.b)("inlineCode",{parentName:"p"},"else")," zur Verf\xfcgung."),Object(r.b)("img",{src:"/img/arduino/ifElseIfCondition.png",alt:"drawing",width:"380px",class:"center"}),Object(r.b)("p",null,"Ist die Bedingung  einer ",Object(r.b)("inlineCode",{parentName:"p"},"if")," Anweisung ",Object(r.b)("strong",{parentName:"p"},"nicht erf\xfcllt"),", so wird als n\xe4chstes \xfcberpr\xfcft, ob eine ",Object(r.b)("inlineCode",{parentName:"p"},"else if")," Anweisung gegeben ist und ob deren Bedingung erf\xfcllt ist. In einer ",Object(r.b)("inlineCode",{parentName:"p"},"if")," Verzweigung k\xf6nnen beliebig viele  ",Object(r.b)("inlineCode",{parentName:"p"},"else if")," Anweisungen angegeben werden, welche alle nacheinander abgearbeitet werden."),Object(r.b)("p",null,"Mit dem abschlie\xdfenden Schl\xfcsselwort ",Object(r.b)("inlineCode",{parentName:"p"},"else")," k\xf6nnen Anweisungen f\xfcr den Fall angegeben werden, dass keine der bei ",Object(r.b)("inlineCode",{parentName:"p"},"if")," oder ",Object(r.b)("inlineCode",{parentName:"p"},"else if")," angegebenen Bedingungen wahr ist. "),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-arduino"}),'int zahl = 6;\n\nif( zahl < 6 )\n{\n  Serial.println("Die Zahl ist kleiner als 6.");\n}\n// Bedingung k\xf6nnen mit && als logisches UND verkn\xfcpft werden\nelse if( (zahl >= 6) &&  (zahl <= 10))  \n{\n  Serial.println("Die Zahl liegt zwischen 6 und 10.");\n}\nelse // ohne Bedingung\n{\n  Serial.println("Die Zahl ist gr\xf6\xdfer als 10.");\n}\n')),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Sobald eine Bedingung in  einer ",Object(r.b)("inlineCode",{parentName:"p"},"if ... else if")," Verzweigung erf\xfcllt ist, wird der zugeh\xf6rige Code ausgef\xfchrt. Weitere, noch nicht \xfcberpr\xfcfte Bedingungen werden ignoriert und nicht mehr \xfcberpr\xfcft."))),Object(r.b)("h2",{id:"einfaches-taster-beispiel"},"Einfaches Taster-Beispiel"),Object(r.b)("p",null,"Im folgenden Beispiel soll exemplarisch der Zustand eines Tasters vom Arduino eingelesen werden. Ist der Taster gedr\xfcckt, soll eine angeschlossene LED aufleuchten, ist er nicht gedr\xfcckt, soll nichts passieren. "),Object(r.b)("img",{src:"/img/arduino/BreadBoard_ButtonLED.png",alt:"drawing",width:"550px",class:"center"}),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-arduino",metastring:'title="tasterEinlesen.ino"',title:'"tasterEinlesen.ino"'}),"/* Einfaches Beispiel zum Einlesen des Tasterzustandes (externer Pullup-Widerstand) */\n\n# define PIN_LED 8  // Pin LED\n# define PIN_TASTER 3   // Pin Taster\n\nvoid setup() {\n  pinMode(PIN_LED, OUTPUT);   // Pin als Ausgang definieren\n  //highlight-next-line\n  pinMode(PIN_TASTER, INPUT); // Pin als Eingang definieren (externer Pullup-Wid.)\n}\nvoid loop() {\n  //highlight-next-line\n  int zustandTaster = digitalRead(PIN_TASTER); // Tasterzustand einlesen\n\n  // Pr\xfcfen des Tasterzustandes:\n  //highlight-next-line\n  if (zustandTaster == LOW) { //wenn gedr\xfcckt (LOW) ...\n    digitalWrite(PIN_LED, HIGH); // LED anschalten\n  //highlight-next-line   \n  } else { // sonst ...\n    digitalWrite(PIN_LED, LOW); // ansonsten LED ausschalten\n  }\n}\n\n")),Object(r.b)("h3",{id:"pinmodepininput"},Object(r.b)("inlineCode",{parentName:"h3"},"pinMode(pin,INPUT)")),Object(r.b)("p",null,"Konfiguriert den angegebenen Pin des Arduinos als Eingang."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-arduino"}),"pinMode(PIN_TASTER, INPUT); // Pin als Eingang definieren (externer Pullup-Wid.)\n")),Object(r.b)("h3",{id:"digitalreadpin"},Object(r.b)("inlineCode",{parentName:"h3"},"digitalRead(pin)")),Object(r.b)("p",null,"Liest den digitalen Zustand eines Pins ein und gibt entsprechend dem Zustand als R\xfcckgabewert ",Object(r.b)("inlineCode",{parentName:"p"},"LOW")," oder ",Object(r.b)("inlineCode",{parentName:"p"},"HIGH")," zur\xfcck."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-arduino"}),"int zustandTaster = digitalRead(PIN_TASTER); // Tasterzustand einlesen\n")),Object(r.b)("h3",{id:"aufgaben"},"Aufgaben"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\xdcben")),Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Was passiert, wenn ein Taster direkt (also ohne Pullup-Widerstand) mit dem Arduino verbunden wird.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Ein Taster ist mit einem Pullup-Widerstand mit dem Arduino verbunden. Welches Level (HIGH oder LOW) liegt am Arduino an, wenn der Taster offen bzw. geschlossen ist? Erl\xe4utern Sie Ihre Antwort.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In der Abbildung ist ein Pull-Down-Widerstand dargestellt. Analysieren Sie, welchen Zustand (Spannung) der angeschlossene Pin aufweist, wenn der Taster a) geschlossen und b) ge\xf6ffnet ist. (Begr\xfcndung nicht vergessen.)"),Object(r.b)("img",{src:"/img/arduino/PullDown.png",alt:"drawing",width:"150px",class:"center"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\xc4ndern sie das ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"input#einfaches-taster-beispiel"}),"Beispielprogramm")," so, dass beim Dr\xfccken des Tasters eine angeschlossene LED blinkt (1 Sekunde an, 1 Sekunde aus). Verh\xe4lt sich ihr Programm, wie Sie es erwarten?")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\xc4ndern Sie die obige ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"input#einfaches-taster-beispiel"}),"Beispielschaltung")," und nutzen Sie anstelle des externen, einen ",Object(r.b)("strong",{parentName:"p"},"internen Pullup-Widerstand"),". \xc4ndern Sie hierf\xfcr auch den Programmcode.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\xc4ndern Sie die obige ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"input#einfaches-taster-beispiel"}),"Beispielschaltung")," (",Object(r.b)("strong",{parentName:"p"},"ohne \xc4nderung im Programmcode)")," so, dass die LED beim Dr\xfccken des Tasters ausgeschaltet wird. Sie also leuchtet, wenn der Taster nicht gedr\xfcckt ist. Bauen sie die Schaltung auf und dokumentieren Sie diese z.B. mit ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://fritzing.org/home/"}),"Fritzing"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Bauen Sie eine Schaltung mit zwei LEDs und zwei Tastern auf. Schreiben Sie anschlie\xdfend ein Programm mit folgenden Eigenschaften:"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Die erst LED leuchtet, wenn der Taster 1 gedr\xfcckt ist."),Object(r.b)("li",{parentName:"ol"},"Die zweite LED leuchtet, wenn der Taster 2 gedr\xfcckt ist."),Object(r.b)("li",{parentName:"ol"},"Beide LEDs leuchten, wenn beide Taster gedr\xfcckt sind."),Object(r.b)("li",{parentName:"ol"},"Verwenden Sie nur ",Object(r.b)("strong",{parentName:"li"},"eine")," ",Object(r.b)("inlineCode",{parentName:"li"},"if ... else if ... else if ... else")," Verzweigung."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Schreiben Sie ein Programm, welches mit ",Object(r.b)("inlineCode",{parentName:"p"},"Serial.print()")," auf dem seriellen Monitor alle Zahlen von 0 bis 100 ausgibt. Als Ausnahme soll jedoch f\xfcr jede Zahl, die durch 3 teilbar ist, ",Object(r.b)("em",{parentName:"p"},"Fizz")," und f\xfcr jede Zahl, die durch 5 teilbar ist, ",Object(r.b)("em",{parentName:"p"},"Buzz")," ausgegeben werden.\nWenn Ihr Programm funktioniert, erweitern Sie es so, dass es ",Object(r.b)("em",{parentName:"p"},"FizzBuzz")," ausgibt, wenn die Zahl durch 3 und 5 teilbar ist."),Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Hinweis: Verwenden Sie den ",Object(r.b)("a",Object(t.a)({parentName:"em"},{href:"https://www.arduino.cc/reference/de/language/structure/arithmetic-operators/modulo/"}),"Modulo-Opertor")," ",Object(r.b)("inlineCode",{parentName:"em"},"%")," f\xfcr die Division mit Rest.")))))),Object(r.b)("h2",{id:"ein-taster-zum-umschalten"},"Ein Taster zum Umschalten"),Object(r.b)("p",null,"Wird mit einem Taster eine LED gesteuert, so sollte die LED ",Object(r.b)("strong",{parentName:"p"},"beim ersten Dr\xfccken des Tasters angehen und beim zweiten Dr\xfccken wieder ausgehen"),". Anstatt also die LED einfach anzuschalten, wenn der Taster gedr\xfcckt ist, muss sich das System den Zustand der LED und des Tasters merken und entsprechend den Zustand der LED \xe4ndern."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-arduino"}),"/* Unvollst\xe4ndiger Code f\xfcr eine tastergesteuerte LED */\n\n#define TASTER 3          // Taster-Pin mit Pull-UP Widerst. (LOW = gedr\xfcckt)\n#define LED 13            // an Schaltung anpassen\n\n//highlight-start\nint statusLED = LOW;             // aktueller Status der LED muss gespeichert werden\nint statusTaster = HIGH;         // aktueller Status des Taster\nint statusTasterLetzter = HIGH;  // Status des Tasters beim letzten loop() Durchlauf\n//highlight-end\n\nvoid setup(){\n    //   - TASTER mit Pull-UP-Widerstand konfigurieren\n    //   - LED konfigurieren \n    //   - serielle Schnittstelle konfigurieren */  \n} \n\nvoid loop(){\n  statusTaster = digitalRead(TASTER); // Taster-Pin einlesen\n    \n    // WENN (Status des Tasters ge\xe4ndert)\n    //      WENN (Taster gedr\xfcckt)\n    //         Status der LED \xe4ndern (statusLED)             \n  \n  statusTasterLetzter = statusTaster; // aktualisieren des letzten Tasterstatus\n  digitalWrite(LED,statusLED);\n} // END loop()\n\n")),Object(r.b)("h3",{id:"aufgaben-1"},"Aufgaben"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\xdcben")),Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Lesen Sie den unvollst\xe4ndigen Programmcode f\xfcr eine tastergesteuerte LED sorgf\xe4ltig durch und erg\xe4nzen Sie die fehlenden Programmteile. Sollte sich die LED nicht verhalten wie gew\xfcnscht, nutzen Sie die ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"seriell"}),"serielle Schnittstelle")," zum Debuggen.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"F\xfcgen Sie in Ihr Programm eine Z\xe4hlvariable ein, welche bei jedem Bet\xe4tigen des Tasters um eins erh\xf6ht wird. Geben Sie den Wert der Z\xe4hlvariable \xfcber die serielle Schnittstelle auf dem PC aus. Nutzen Sie f\xfcr die serielle Schnittstelle eine hohe Baudrate (115.200  baud)."),Object(r.b)("p",{parentName:"li"},"Analysieren Sie das Verhalten der Z\xe4hlvariablen."))))))}d.isMDXComponent=!0}}]);