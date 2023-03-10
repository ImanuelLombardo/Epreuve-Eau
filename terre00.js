"use strict"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l’ordre croissant, dans l’ordre croissant. La répétition est volontaire.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exemples d’utilisation:
///////////////////////////
// $ > python exo.py
// 012, 013, 014, 015, 016, 017, 018, 019, 023, 024, ... , 789
// --------------------------------------------------------------
// 987 n’est pas là parce que 789 est présent.
// 020 n’est pas là parce que 0 apparaît deux fois.
// 021 n’est pas là parce que 012 est présent.
// 000 n’est pas là parce que cette combinaison ne comporte pas exclusivement des chiffres différents les uns des autres.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////
// 1. FONCTIONS //
//////////////////

function combinationThreeNumber() {
  for(let centaine = 0; centaine < 10; centaine++) {
    for (let dizaine = 0; dizaine < 10; dizaine++) {
      for (let unite = 0; unite < 10; unite++) {
        if (centaine !== dizaine &&
          centaine !== unite &&
          dizaine !== unite) {
          if (dizaine < unite &&
            centaine < dizaine) {
            console.log(`${centaine}${dizaine}${unite}`);
          }
        };
      };
    };
  };
}

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

combinationThreeNumber();
