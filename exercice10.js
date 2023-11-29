
var compteur = 0;
var compteur2 = 0;

var MaDiv = document.getElementById("MEthode2");
MaDiv.addEventListener("click", UneProcedureQuiChangeLetext);

var MaDiv = document.getElementById("MEthode3");
MaDiv.addEventListener("mouseover", UneProcedureQuiSurvole);


var MaDiv = document.getElementById("MEthode4");
MaDiv.addEventListener("Keydown", UneProcedureQuiEcrit);


function UneProcedureQuiEcrit(evenement)
{
    evenement.target.innerHTML = "write here:"+evenement.key;
}


function UneProcedureQuiChangeLetext(evenement) 
{
   compteur++;
   evenement.target.innerHTML = "clicked on" +compteur+" fois";
}

function UneProcedureQuiSurvole(evenement) 
{
   compteur2++;
   evenement.target.innerHTML = "clicked on" +compteur2+" fois";
}


function hideDiv() {
   var div = document.getElementById('myDiv');
   div.style.display = 'none';
 }
 