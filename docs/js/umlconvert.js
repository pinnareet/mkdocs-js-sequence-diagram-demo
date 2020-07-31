// Source: https://github.com/hahadaphne/mkdocs_UML/blob/master/docs/js/umlconvert.js
(function (document) {
    function convertUML(className, converter, settings) {
        var charts = document.querySelectorAll("pre.highlight,div." + className),
            arr = [],
            i, j, maxItem, diagram, text, curNode,
            isPre;

        // Is there a settings object?
        if (settings === void 0) {
            settings = {};
        }

        // Make sure we are dealing with an array
        for(i = 0, maxItem = charts.length; i < maxItem; i++) arr.push(charts[i]);

        // Find the UML source element and get the text
        for (i = 0, maxItem = arr.length; i < maxItem; i++) {
            isPre = arr[i].tagName.toLowerCase() == 'pre';
            if (isPre) {
                // Handles <pre><code>
                var childEl = arr[i].firstChild;
                var parentEl = childEl.parentNode;
                text = "";
                for (j = 0; j < childEl.childNodes.length; j++) {
                    curNode = childEl.childNodes[j];
                    var whitespace = /^\s*$/;
                    if (curNode.nodeName === "#text" && !(whitespace.test(curNode.nodeValue))) {
                        text = curNode.nodeValue;
                        break;
                    }
                }
                // Do UML conversion and replace source
                var el = document.createElement('div');
                el.className = className;
                parentEl.parentNode.insertBefore(el, parentEl);
                parentEl.parentNode.removeChild(parentEl);
            } else {
                // Handles <div>
                el = arr[i];
                text = el.textContent || el.innerText;
                if (el.innerText){
                    el.innerText = '';
                } else {
                    el.textContent = '';
                }
            }


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
