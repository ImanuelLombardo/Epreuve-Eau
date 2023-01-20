"use strict"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exemples d’utilisation:
///////////////////////////
// $ > python exo.py
// 00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
// $ >
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////
// 1. FONCTIONS //
//////////////////

function combinationTwoNumber() {
  let num1 = 0;
  let num2 = 0;

  // Number left
  for(let i = 1; i < 100; i++) {
    // Number right
    for(let j = num1 + 1; j < 100; j++) {
      num2 = j;

      if(num2 < 10) {
        if(num1 < 10) {
          console.log(`0${num1} 0${num2}`);
        } else {
          console.log(`${num1} 0${num2}`);
        };

      } else {
        if(num1 < 10) {
          console.log(`0${num1} ${num2}`);
        } else {
          console.log(`${num1} ${num2}`);
        }

      };
    };
    num1 = i;

    if(num2 < 99) {
      if (num1 < 10) {
        console.log(`0${num1} ${num2}`);
      } else {
        console.log(`${num1} ${num2}`);
      };
    };
  };
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

combinationTwoNumber();
