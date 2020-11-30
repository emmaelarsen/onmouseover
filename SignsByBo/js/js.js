/**
 * file: js.js
 * purpose: interactivity
 **/

//document.ready function tjekker om DOM'en er loaded
$(document).ready(function() {
            
console.log('JavaScript from js/js.js: up and running!');

    // ... your code here ...
    



document.getElementById("kaffe1").onmouseover = function() {mouseOver()};
    
document.getElementById("kaffe1").onmouseout = function() {mouseOut()};

function mouseOver() {
document.getElementById("kaffe1").src="images/anton.png";
}

function mouseOut() {
  document.getElementById("kaffe1").src="images/kaffe.png";
}
    

    
    /**
        
           function mouseOver() {
            document.getElementById("kaffe1").src = "images/anton.png";
        }

        function mouseOut() {
            document.getElementById("kaffe1").src = "images/kaffe.png";
        }
    
        **/ 
    
    
    // ... end ...
});


//Hvis man har en id kan man godt brugen den som variabel