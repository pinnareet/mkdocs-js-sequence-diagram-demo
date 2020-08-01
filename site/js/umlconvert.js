// Source: https://github.com/hahadaphne/mkdocs_UML/blob/master/docs/js/umlconvert.js
(function (document) {
    function convertUML(className, converter, settings) {
        var charts = document.querySelectorAll("code." + className),
            arr = [],
            i, j, maxItem, diagram, text;

        // Is there a settings object?
        if (settings === void 0) {
            settings = {};
        }

        // Make sure we are dealing with an array
        for(i = 0, maxItem = charts.length; i < maxItem; i++) arr.push(charts[i]);

        // Find the UML source element and get the text
        for (i = 0, maxItem = arr.length; i < maxItem; i++) {
            parentEl = arr[i].parentNode;
            text = arr[i].textContent || arr[i].innerText;
            if (arr[i].innerText){
                arr[i].innerText = '';
            } else {
                arr[i].textContent = '';
            }

            var el = document.createElement('div');
            el.className = className;
            parentEl.parentNode.insertBefore(el, parentEl);
            parentEl.parentNode.removeChild(parentEl);

            // sequence-diagram.js
            diagram = converter.parse(text);
            diagram.drawSVG(el, settings);

        }
    }

    function onReady(fn) {
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState === 'interactive')
                    fn();
            });
        }
    }

    onReady(function(){
        convertUML('language-uml-sequence-diagram', Diagram, {theme: 'simple'});
    });
})(document);

if (document.readyState == "complete") {
    alert("Your page is loaded");
}
