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
// 2eme méthode par un impact sur le css => .css('visibility','hidden/visible') => avantage les bouttons restent à leur place (ne remontent pas) car les <p> gardent leur place
// $("#red").click(function(){
//     $("#text").css('visibility','hidden');
// })
// $("#green").click(function(){
//     $("#text").css('visibility','visible');
// })

// 3eme méthode => .toggle() c'est un interrupteur à utiliser qu'avec un seul boutton : si le texte est affiché alors le boutton masque et quand le texte est masqué alors le boutton affiche
// $("#red").click(function(){
//     $("#text").toggle();
// })

// 4eme méthode sur le .css : ('display','block')/ .ccs('display','none')


});