"use strict"

///////////////////////////////////////////////////////////////////
// Créez un programme qui affiche ses arguments reçus à l’envers.
///////////////////////////////////////////////////////////////////
// Exemples d’utilisation:
///////////////////////////
// $> python exo.py “Suis” “Je” “Drôle”
// Drôle
// Je
// Suis
// --------------------------------------
// $ > python exo.py ha ho
// ho
// ha
// --------------------------------------
// $ > python exo.py “Bonjour 36”
// Bonjour 36
// --------------------------------------
// Afficher error et quitter le programme en cas de problèmes d’arguments.
//////////////////////////////////////////////////////////////////////

//////////////////
// 1. FONCTIONS //
//////////////////

// Length of an array
function arrLength(arr) {
  let count = 0;

  if(arr[0] === undefined) {
    count = 0;

  } else {
    do {
      count++;
    } while(arr[count] !== undefined);
  };

  return count;
};


// get the argument after the name of script
function args(arr){
  const newArr = [];

  if(arrLength(arr) < 3) {
    return "Error";

  } else {
    for(let i = 2; i < arrLength(arr); i++) {
      newArr.push(arr[i]);
    };
  };

  return newArr;
};

//////////////////////////
// 2. GESTION D'ERREURS //
//////////////////////////

// XXXXXXXXXXXXXXXXXXXXXXXX

////////////////
// 3. PARSING //
////////////////

// XXXXXXXXXXXXXXXXXXXXXXXX

///////////////////
// 4. RESOLUTION //
///////////////////

// XXXXXXXXXXXXXXXXXXXXXXXX

//////////////////////////
// 5. AFFICHAGE RESULAT //
//////////////////////////

const arg = process.argv;
let allArg = args(arg);

if(allArg === "Error") {
  console.log(allArg);
} else {

  for(let i = arrLength(allArg) - 1; i >= 0; i--) {
    console.log(allArg[i]);
  };
}
