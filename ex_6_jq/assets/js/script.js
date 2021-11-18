// vérifier le chargement du Dom avec cette fonction :
$(function(){

    // 1ere methode 2 événements pour retouver la taille initiale
// $("#img1").on ({
//     mouseenter: function(){$(this).width(500);},
//     mouseleave: function () {$(this).width(auto);},
// })
// });

// 2eme methode au survol :créer un événement hover et une fonction ,cibler l'img et agrandir sa largeur .width
$("#img1").hover(function(){
    $("#img1").width(500)});

})