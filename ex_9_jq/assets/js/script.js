// vérifier le chargement du Dom avec cette fonction :
$(function(){


    // cibler le button, evt au clic(ouvrir une fonction : cibler le texte et modifier le .css)
$("#red").click(function(){
    $("#text").css('color','red');
})

$("#blue").click(function(){
    $("#text").css('color','blue');
})

$("#green").click(function(){
    $("#text").css('color','green');
})

    
});