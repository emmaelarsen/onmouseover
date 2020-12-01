/**
 * file: js.js
 * purpose: interactivity
 **/

//document.ready function tjekker om DOM'en er loaded
$(document).ready(function() {
            
console.log('Hej fra js/js.js: nu med jQuery!');

    // ... din kode begynder her
    $('#kaffe1').mouseover(function(){
        $('#kaffe1').attr("src","https://multimusen.dk/wp-content/uploads/cropped-multimusen-150-150-1.png");
        console.log('Musepilen er over mig nu.');
    });
    
    $('#kaffe1').mouseout(function(){
        $('#kaffe1').attr("src","images/kaffe.png");
    });
    
    // osv. $('#kaffe2'). ... osv.
    
    // ... din kode slut

});


//Hvis man har en id kan man godt brugen den som variabel