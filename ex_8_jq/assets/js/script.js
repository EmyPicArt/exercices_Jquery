// vérifier le chargement du Dom avec cette fonction :
$(function(){

    // cibler le button masquer et au clic function cacher le texte .hide()
$("#red").click(function(){
    $("#text").hide();
})
    // cibler le button afficher et au clic function montrer le texte .show()
$("#green").click(function(){
    $("#text").show();
})

    
});