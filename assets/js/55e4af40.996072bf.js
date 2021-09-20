"use strict";(self.webpackChunkspace_hal_2=self.webpackChunkspace_hal_2||[]).push([[4259],{3905:function(e,a,n){n.d(a,{Zo:function(){return N},kt:function(){return k}});var t=n(7294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function m(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=t.createContext({}),l=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},N=function(e){var a=l(e.components);return t.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},o=t.forwardRef((function(e,a){var n=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,N=m(e,["components","mdxType","originalType","parentName"]),o=l(n),k=s,d=o["".concat(p,".").concat(k)]||o[k]||c[k]||r;return n?t.createElement(d,i(i({ref:a},N),{},{components:n})):t.createElement(d,i({ref:a},N))}));function k(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=o;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=e,m.mdxType="string"==typeof e?e:s,i[1]=m;for(var l=2;l<r;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}o.displayName="MDXCreateElement"},3981:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var t=n(7462),s=n(3366),r=(n(7294),n(3905)),i={title:"PWM Signale mit analogWrite()",sidebar_label:"11. PWM Signal",custom_edit_url:null},m=void 0,p={unversionedId:"arduino/pwm",id:"arduino/pwm",isDocsHomePage:!1,title:"PWM Signale mit analogWrite()",description:"Mit dem Arduino UNO (oder Leonard) ist es nur m\xf6glich, eine Spannung von 0 V oder 5 V zu erzeugen. Ein analoges Signal mit beliebigen Spannungswerten (z.B. 4,3 V) kann nicht direkt ausgegeben werden. Es k\xf6nnen jedoch Signale mit einer Pulsweitenmodulation (PWM) erzeugt werden, welche sich in gewisser Weise wie analoge Signale verhalten.",source:"@site/docs/arduino/pwm.md",sourceDirName:"arduino",slug:"/arduino/pwm",permalink:"/docs/arduino/pwm",editUrl:null,tags:[],version:"current",lastUpdatedAt:1630426919,formattedLastUpdatedAt:"8/31/2021",frontMatter:{title:"PWM Signale mit analogWrite()",sidebar_label:"11. PWM Signal",custom_edit_url:null},sidebar:"sideBarArduino",previous:{title:"10. Endliche Automaten",permalink:"/docs/arduino/stateMachine"},next:{title:"12. Analoger Eingang",permalink:"/docs/arduino/analogInput"}},l=[{value:"PWM-Signal",id:"pwm-signal",children:[]},{value:"<code>analogWrite()</code>",id:"analogwrite",children:[]},{value:"Dimmen einer LED",id:"dimmen-einer-led",children:[]},{value:"Aufgaben",id:"aufgaben",children:[]},{value:"Weiterf\xfchrende Links",id:"weiterf\xfchrende-links",children:[]}],N={toc:l};function c(e){var a=e.components,n=(0,s.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,t.Z)({},N,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mit dem Arduino UNO (oder Leonard) ist es nur m\xf6glich, eine Spannung von 0 V oder 5 V zu erzeugen. Ein analoges Signal mit beliebigen Spannungswerten (z.B. 4,3 V) kann nicht direkt ausgegeben werden. Es k\xf6nnen jedoch Signale mit einer ",(0,r.kt)("strong",{parentName:"p"},"Pulsweitenmodulation")," (PWM) erzeugt werden, welche sich in gewisser Weise wie analoge Signale verhalten."),(0,r.kt)("p",null,"H\xe4ufige ",(0,r.kt)("strong",{parentName:"p"},"Anwendungen")," f\xfcr PWM Signale sind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dimmen einer LED."),(0,r.kt)("li",{parentName:"ul"},"Mit Hilfe eines Kondensators einen analogen Spannungswert erzeugen."),(0,r.kt)("li",{parentName:"ul"},"Generieren eines Audiosignals."),(0,r.kt)("li",{parentName:"ul"},"Steuern der Geschwindigkeit eines Gleichstrommotors."),(0,r.kt)("li",{parentName:"ul"},"Erzeugen modulierter Signale, zum Beispiel f\xfcr Infrarot-LEDs bei einer Fernbedienung.")),(0,r.kt)("h2",{id:"pwm-signal"},"PWM-Signal"),(0,r.kt)("p",null,"Bei der Pulsweitenmodulation wird die Spannung abwechselnd an- und ausgeschaltet. Das Verh\xe4ltnis zwischen der Anzeit ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"t"),(0,r.kt)("mtext",{parentName:"msub"},"an"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t_\\text{an}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.76508em",verticalAlign:"-0.15em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord text mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"an"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"}))))))))))," und der Periodendauer des Signals (also ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"t"),(0,r.kt)("mtext",{parentName:"msub"},"an")),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"t"),(0,r.kt)("mtext",{parentName:"msub"},"aus"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t_\\text{an} + t_\\text{aus}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.76508em",verticalAlign:"-0.15em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord text mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"an"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.76508em",verticalAlign:"-0.15em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord text mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"aus"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"}))))))))))," ) wird ",(0,r.kt)("strong",{parentName:"p"},"Tastverh\xe4ltnis")," ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," oder auch ",(0,r.kt)("em",{parentName:"p"},"duty cycle")," genannt:"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mfrac",{parentName:"mrow"},(0,r.kt)("msub",{parentName:"mfrac"},(0,r.kt)("mi",{parentName:"msub"},"t"),(0,r.kt)("mtext",{parentName:"msub"},"an")),(0,r.kt)("mrow",{parentName:"mfrac"},(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"t"),(0,r.kt)("mtext",{parentName:"msub"},"an")),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"t"),(0,r.kt)("mtext",{parentName:"msub"},"aus"))))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n=\\frac{t_\\text{an}}{t_\\text{an} + t_\\text{aus}}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"2.1280799999999997em",verticalAlign:"-0.8360000000000001em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,r.kt)("span",{parentName:"span",className:"mfrac"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.29208em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.3139999999999996em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord text mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"an"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord text mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"aus"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,r.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord text mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"an"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"}))))))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8360000000000001em"}},(0,r.kt)("span",{parentName:"span"}))))),(0,r.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,r.kt)("p",null," Das Tastverh\xe4ltnis kann nur Werte zwischen 0% und 100% annehmen (siehe folgende Abbildung)."),(0,r.kt)("img",{src:"/img/arduino/PWM.png",alt:"drawing",width:"330px",class:"center"}),(0,r.kt)("h4",{id:"zeitlicher-mittelwert"},"Zeitlicher Mittelwert"),(0,r.kt)("p",null,"Wird das Tastverh\xe4ltnis mit dem Maximalwert der Spannung multipliziert, ergibt sich der zeitliche Mittelmittelwert  des PWM-Signals. In der obigen Abbildung sind drei Beispiele f\xfcr ein Tastverh\xe4ltnis von 20%, 50% und 80% angegeben."),(0,r.kt)("h2",{id:"analogwrite"},(0,r.kt)("inlineCode",{parentName:"h2"},"analogWrite()")),(0,r.kt)("p",null,"Arduino stellt die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"analogWrite(pinPwm,dutyCycle)")," zur einfachen Erzeugung von PWM-Signalen bereit. ",(0,r.kt)("inlineCode",{parentName:"p"},"dutyCycle")," kann in der Funktion Werte zwischen 0 und 255 annehmen, was ein abgestuftes Tastverh\xe4ltnis zwischen 0% und 100% erzeugt. ",(0,r.kt)("inlineCode",{parentName:"p"},"pinPWM")," gibt den verwendeten PWM-Pin an. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"analogWrite(pinPwm, 150); // \xa0Tastverh\xe4ltnis  150/255 = 58,8%\n")),(0,r.kt)("p",null,"Es ist jedoch zu beachten, dass nicht alle Arduino-Pins PWM-Signale erzeugen k\xf6nnen. Nur Pins, die mit einer Tilde (~) markierte sind, k\xf6nnen PWM-Signale ausgeben."),(0,r.kt)("h2",{id:"dimmen-einer-led"},"Dimmen einer LED"),(0,r.kt)("p",null," Ein sch\xf6nes Beispiel f\xfcr die Verwendung von PWM-Signal ist das Dimmen einer LED (\xc4nderung der Helligkeit). "),(0,r.kt)("p",null," Die Helligkeit einer LED wird nicht, wie man eventuell vermuten k\xf6nnte, \xfcber die angelegte Spannung gesteuert, sondern durch ",(0,r.kt)("strong",{parentName:"p"},"schnelles An- und Ausschalten"),". Wird eine LED schnell genug an- und ausgeschaltet, so wird dies nicht mehr als Flackern wargenommen, sondern als eine Ver\xe4nderung in der Lichtintensit\xe4t also der Helligkeit der LED. "),(0,r.kt)("p",null,"  Dieser Effekt wird beim Dimmen einer LED ausgenutzt. Eine LED wird an einen PWM-Pin angeschlossen (Vorwiderstand nicht vergessen) und mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"analogWrite()")," wird ein PWM Signal erzeugt, welches die Helligkeit der LED steuert."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-arduino"},"//   Dimmen einer LED mit einem PWM-Signal \nint ledRed = 9;  // LED am PWM Pin (~9) (VORWIDERSTAND nicht vergessen)\n\nvoid setup()\n{\n    pinMode(ledRed, OUTPUT);\n}\nvoid loop()\n{\n  // Zum \xc4ndern der LED Helligkeit wird ein PWM-Signal verwendet. Das Taktverh\xe4ltnis\n  // des PWM-Signals wird in einer for-Schleife langsam von 0 (0%) auf 255 (100%)\n  // erh\xf6ht und anschlie\xdfend wieder reduziert.\n  int helligkeit = 0;\n  for (helligkeit; helligkeit <= 255; helligkeit++)\n  {\n    analogWrite(ledRed, helligkeit);              // PWM Signal am LED Pin\n    delay(4);\n  }\n\n  for (helligkeit; helligkeit > 0; helligkeit--)\n  {\n    analogWrite(ledRed, helligkeit);              // PWM Signal am LED Pin\n    delay(4);\n  }\n}\n")),(0,r.kt)("h2",{id:"aufgaben"},"Aufgaben"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,r.kt)("strong",{parentName:"h5"},"\xdcben"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Mit dem folgenden Befehl wird ein PWM-Signal erzeugt ",(0,r.kt)("inlineCode",{parentName:"li"},"analogWrite(9, 201)"),". ",(0,r.kt)("strong",{parentName:"li"},"Bestimmen")," Sie das ",(0,r.kt)("strong",{parentName:"li"},"Tastverh\xe4ltnis")," des PWM-Signals in Prozent."),(0,r.kt)("li",{parentName:"ol"},"Welchen Wert muss der Parameter f\xfcr das Tastverh\xe4ltnis in der Funktion ",(0,r.kt)("inlineCode",{parentName:"li"},"analogWrite()")," annehmen, damit sich ein ",(0,r.kt)("strong",{parentName:"li"},"Tastverh\xe4ltnis von 80%")," ergibt."),(0,r.kt)("li",{parentName:"ol"},"Schreiben Sie ein Programm, welches per ",(0,r.kt)("strong",{parentName:"li"},"Tastendruck")," in 6 Stufen die ",(0,r.kt)("strong",{parentName:"li"},"Helligkeit")," einer LED \xe4ndert."),(0,r.kt)("li",{parentName:"ol"},"Erg\xe4nzen Sie Ihr Programm so, dass die LED beim Erreichen der ",(0,r.kt)("strong",{parentName:"li"},"maximalen Helligkeit zweimal kurz blinkt"),". Wenn der Taster ein weiteres Mal bet\xe4tigt wird, geht die LED aus und kann wieder schrittweise in der Helligkeit ge\xe4ndert werden."),(0,r.kt)("li",{parentName:"ol"},"Die Helligkeit einer LED soll sich wiederkehrend von Aus auf maximale Helligkeit und anschlie\xdfende wieder auf Aus \xe4ndern (",(0,r.kt)("strong",{parentName:"li"},"Fading"),")."),(0,r.kt)("li",{parentName:"ol"},"Schreiben Sie ein Programm f\xfcr ein ",(0,r.kt)("strong",{parentName:"li"},"futuristisches Lauflicht")," mit 6 LEDs (\xe4hnlich dem aus der 80er Jahre Fernsehserie ",(0,r.kt)("em",{parentName:"li"},"Night Rider"),"). Dabei sollen zu jedem Zeitpunkt immer zwei bis drei LEDs mit verschiedenen Helligkeitswerten leuchten. Die erste LED soll m\xf6glichst hell und die nachfolgenden LEDs etwas dunkler leuchten. Hierdurch soll der Effekt entstehen, dass der ersten LED eine Art ",(0,r.kt)("strong",{parentName:"li"},"Leuchtspur")," folgt. Das Lauflicht soll kontinuierlich hin- und herwandern.")))),(0,r.kt)("h2",{id:"weiterf\xfchrende-links"},"Weiterf\xfchrende Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://techexplorations.com/blog/arduino/blog-10-min-tutorial-what-happens-when-pwm-registers-overflow/"},"What happens when PWM registers overflow?"))))}c.isMDXComponent=!0}}]);