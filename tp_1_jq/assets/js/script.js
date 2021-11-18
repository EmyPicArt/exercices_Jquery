// vérifier le chargement du Dom avec cette fonction :
$(function(){



var goodNumber = 98;

$('#buttonSubmit').click(function(){
    var input = $("#inputNumber").val();
    console.log(input)
    if(input == goodNumber){
        alert(' Bravo c\'est correct !')
    } else if(input <= 97){
        alert(' plus !')
    } else if(input >= 99){
        alert(' Moins !')
    }else{
        alert(' essaie encore !')
    }
});
// $("#getNumber").click(function(){
//     var random = (max, min) => {
//     return Math.floor(Math.random() * max - min + 1) + min;
// }
//  $("#random")(100,1);
//  console.log(random)
// })



    
});