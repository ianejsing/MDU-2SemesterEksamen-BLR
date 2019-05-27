//variable liste. Her laver vi vores variabler. 
var liste = [1, 2, 3];
var kunstner = ["Scorpions", "M+M", "U-Tek"];
var album = ["Crazy World", "The World is a Ball", "Das Mass Der Dinge"];
     var divIndhold = "";

//Funktionen
function news() {  
    for (var i = 0; i < liste.length; i++){

    //funtionen fylder variablen divindhold med informationen fra arraysene og lægger den oveni den tidligere divIndhold. Det gør den 1 gang for hver ting i listen.  
        divIndhold = divIndhold + '<div><h4>'+kunstner[i]+'</h4> <img src="images/albums/'+liste[i]+'.jpg" alt="'+kunstner[i]+'"><h4>'+album[i]+'</h4> </div>';    
    }
     document.getElementById("news").innerHTML = divIndhold;  
}

//Her kalder vi funktionen
news();

