/*global document */
(function() {
    var mainContent = document.getElementById('main');
    if (!mainContent) {
        console.warn("no main content");
        return;
    } else {
        console.log("yes main content");
    }
    var elements = [
        mainContent.getElementsByTagName('h3'),
        mainContent.getElementsByTagName('h4'),
        mainContent.getElementsByTagName('h5'),
        mainContent.getElementsByTagName('h6'),
    ];
    for (var i = 0; i < elements.length; i++) {
        for (var k = 0; k < elements[i].length; k++) {
            var header = elements[i][k];
            var anchor = document.createElement('a');
            anchor.className = 'header-deep-links';
            anchor.href = '#' + header.id;
            anchor.innerHTML = '#';
            header.insertBefore(anchor, header.firstChild);
        }
    }
})();
