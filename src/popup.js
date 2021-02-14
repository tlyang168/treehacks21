/* File: popup.js
 * -----------------------
 * This javascript file restores settings when the DOM loads.
 * You shouldn't have to change this file unless you also
 * change the corresponding popup.html file.
 */

function modifyDOM() {
    //You can play with your DOM here or check URL against your regex
    // console.log('Tab script:');
    // console.log(document.body);
    console.log('searching through DOM')
    var elements = document.getElementsByTagName("LI");
    return elements[0].innerHTML;
}


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
                console.log("Popup DOM fully loaded and parsed");
                b.onclick = function () {
                    b.style.backgroundColor = "#948167";
                    b.style.color = "#FFF5E8"; 
                    var foodItems = ["eggs", "gluten", "salt"];
                    var div = document.getElementById('display-box'); 
                    // div.innerHTML = "fish";
                    var item;
                    for (var i = 0; i < foodItems.length; i++) {
                        item = document.createElement('div');
                        item.setAttribute('class', "food-list-item");
                        item.innerHTML = foodItems[i];
                        div.appendChild(item);
                    }
                    b.onclick = function () {} 
                };
                break;
        }
    }
});

