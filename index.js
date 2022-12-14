//Make the DIV element draggagle:

// Const
const chromediv = document.getElementById("chromediv");
const terminaldiv = document.getElementById("terminaldiv");
const chrome = document.getElementById("chrome");
const terminal = document.getElementById("terminal");

var closeChrome = document.getElementsByClassName("dot red")[1];
var closeTerminal = document.getElementsByClassName("dot red")[0];

// Drag the DIV
dragElement(chromediv);
dragElement(terminaldiv);

// Close the DIV

closeChrome.onclick = function() {
    chromediv.style.display = "none";
}
closeTerminal.onclick = function() {
    terminaldiv.style.display = "none";
}
window.onload = function() {
    chromediv.style.display = "none";
    terminaldiv.style.display = "none";
}

chrome.onclick = function() {
    chromediv.style.display = "block";
}
terminal.onclick = function() {
    terminaldiv.style.display = "block";
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

