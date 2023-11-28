
var txt = "New text";

function modifText(txt) {
    alert(" modification des divs");
    
    var elements = document.getElementsByClassName("nom");

    for (var i = 0; i < elements.length; i++) {
        elements[i].innerText = txt;
    }
}

modifText(txt);