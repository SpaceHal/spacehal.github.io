//alert("MathJAx config loads");
var font = "Neo-Euler";
MathJax.Hub.Config({
    tex2jax: {
        inlineMath: [
            ['$', '$']
        ],
        displayMath: [
            ['\\[', '\\]']
        ],
        processEscapes: true,
    },
    "SVG": {
        font: font
    },
    "HTML-CSS": {
        fonts: ['Neo-Euler', 'Gyre'],
        /*webFont: font,
        imageFont: font,
        preferredFont: font,
        availableFonts: [],*/
        scale: 85,
        mtextFontInherit: true
    }
});