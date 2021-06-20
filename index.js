var pic = document.querySelectorAll("img");
 
function pict(){  
     
   
var randNum1 = Math.floor(Math.random()*5 + 1); 
var randNum2 = Math.floor(Math.random()*5 + 1); 
var source1 = "images/dice" + randNum1 +".png"; 
var source2 = "images/dice" + randNum2 +".png"; 
 
    pic[0].setAttribute("src",source1); 
    pic[1].setAttribute("src",source2); 
     
     
    if(randNum1>randNum2){ 
        document.querySelector("h1").innerHTML = "Player 1 Win";
    }else if(randNum1<randNum2){ 
        document.querySelector("h1").innerHTML = "Player 2 Win";
    }else{ 
        document.querySelector("h1").innerHTML = "Draw";
    }
} 

 
