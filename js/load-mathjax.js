window.MathJax = {
    tex: {
        inlineMath: [
            ['$', '$'],
            ['\\(', '\\)']
        ]
    },
    chtml: {
        scale: 0.95, // global scaling factor for all expressions
        minScale: .5, // smallest scaling factor to use
        matchFontHeight: true, // true to match ex-height of surrounding font
        mtextInheritFont: false, // true to make mtext elements use surrounding font
        merrorInheritFont: true, // true to make merror text use surrounding font
        mathmlSpacing: false, // true for MathML spacing rules, false for TeX rules
        skipAttributes: {}, // RFDa and other attributes NOT to copy to the output
        exFactor: .5, // default size of ex in em units
        displayAlign: 'center', // default for indentalign when set to 'auto'
        displayIndent: '0', // default for indentshift when set to 'auto'
        fontURL: '[mathjax]/components/output/chtml/fonts/woff-v2', // The URL where the fonts are found
        adaptiveCSS: true // true means only produce CSS that is used in the processed equations
    }
};

(function() {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    script.async = true;
    document.head.appendChild(script);
})();