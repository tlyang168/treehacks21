/* File: popup.js
 * -----------------------
 * This javascript file restores settings when the DOM loads.
 * You shouldn't have to change this file unless you also
 * change the corresponding popup.html file.
 */


// linking to external website
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
        var b = buttons[i];
        switch (b.id) {
            case 'log-in':
                b.onclick = function () {
                    chrome.tabs.create({active: true, url: chrome.extension.getURL('src/external.html')});
                };
                break;
            case 'check-item':
                b.onclick = function () {
                    chrome.tabs.executeScript({
                        file: 'content.js'
                    });
                }
                break;
        }
    }
});

