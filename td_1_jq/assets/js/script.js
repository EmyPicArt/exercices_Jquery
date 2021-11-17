// vérifier le chargement du Dom avec cette fonction :
$(function(){

$("#button").click(function(){
    // pour récuperer la valeur de l'input en JQ : $("#").val() et pour faire un calcul avec il faut indiquer que cette string est un number interger avec parseInt()
    var globalNote = ((parseInt($("#firstNote").val()) + parseInt($("#secondNote").val())+ parseInt($("#thirdNote").val()) + parseInt($("#fourthNote").val()) + parseInt($("#fifthNote").val())) /5);

    if(globalNote >= 0 && globalNote <10){
        alert(globalNote + '/20' + ' En dessous de la moyenne')
    }
    else if(globalNote >= 10 && globalNote <13){
        alert(globalNote + '/20' + ' Mouais c\'est moyen')
    }
    else if(globalNote >= 13 && globalNote <16){
        alert(globalNote + '/20' + ' Ca commence à être bon')
    }
    else if(globalNote >= 16 && globalNote <20){
        alert(globalNote + '/20' + ' C\'est très bien')
    }
    else if(globalNote === 20)
    {
        alert(globalNote + '/20' + ' C\'est excellent !')
}})
    
});
