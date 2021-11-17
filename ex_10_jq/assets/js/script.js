// vérifier le chargement du Dom avec cette fonction :
$(function(){


$("#button").on ({
    mouseenter: function(){$("#text").css("color","blue");},
    mouseleave: function () {$("#text").css("color","black");},
})
});


