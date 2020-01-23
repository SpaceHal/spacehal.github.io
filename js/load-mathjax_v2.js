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
        webFont: font,
        imageFont: font,
        preferredFont: font,
        availableFonts: [],
        scale: 85,
        mtextFontInherit: true
    }
});