// vérifier le chargement du Dom avec cette fonction :
$(function(){


// 1eme méthode native : si text est display: none en CSS
$("#text").show();

// 2eme méthode en css
$("#text").css("display", "block");

// 3eme méthode sans CSS
$("#text").css("display", "none");
$("#text").show();

});