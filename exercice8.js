var div = document.getElementById("1")
var txt = "new text"
function modiftext(div, txt){
    alert(" modifier la div")
    div.innerHTML = (txt);
}
modiftext(div, txt)
