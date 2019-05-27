var liste = [1, 2, 3];
var kunstner = ["Scorpions", "M+M", "U-Tek"];
var album = ["Crazy World", "The World is a Ball", "Das Mass Der Dinge"];
     var divIndhold = "";

function news() {  
    for (var i = 0; i < liste.length; i++){

    
        divIndhold = divIndhold + '<div><h4>'+kunstner[i]+'</h4> <img src="images/albums/'+liste[i]+'.jpg" alt="'+kunstner[i]+'"><h4>'+album[i]+'</h4> </div>';
     
    

 
    
    }
     document.getElementById("news").innerHTML = divIndhold;  
}


news();

