// vérifier le chargement du Dom avec cette fonction :
$(function(){



// var goodNumber = 98;

// $('#buttonSubmit').click(function(){
//     var input = $("#inputNumber").val();
//     console.log(input)
//     if(input == goodNumber){
//         alert(' Bravo c\'est correct !')
//     } else if(input <= 97){
//         alert(' plus !')
//     } else if(input >= 99){
//         alert(' Moins !')
//     }else{
//         alert(' essaie encore !')
//     }
// });

// générer un nombre aléatoire créer une var avec le nombre gagnant,  et math.random = générer un nombre entre 0 et 1, math.floor = arrondir à l'entier sup le nombre, on le multiplie par 100 car intervalle entre 0 et 100 (et +1 pour avoir le 100 compris)
var goodNumber = Math.floor(Math.random() * 100) + 1;
// calculer le nbr de tentatives avec une boucle let qui démarre à 0
let guessCount = 0;

$("#buttonSubmit").click(function(){
    var userGuess = $("#inputNumber").val();
    // incrémentation +1 à chaque tentative
    guessCount++;

    if(userGuess == goodNumber){
        alert(' Bravo c\'est correct ! Voici ton nombre de tentatives : ' + guessCount)
    }
    else if(userGuess < goodNumber){
        alert(' Plus !')
    }
    else if(userGuess > goodNumber){
        alert(' Moins !')
    }
});




    
});