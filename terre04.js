"use strict"

///////////////////////////////////////////////////////////////////
// Créez un programme qui affiche le premier nombre premier
// supérieur au nombre donné en argument.
///////////////////////////////////////////////////////////////////
// Exemples d’utilisation:
///////////////////////////
// $> python exo.py 14
// 17
// $ >
// -------------------------
// Afficher -1 si le paramètre est négatif ou mauvais.
//////////////////////////////////////////////////////////////////////

//////////////////
// 1. FONCTIONS //
//////////////////

// Function for to know if a number is a prime number
function isPrimeNumbers(num) {
  let result = 0;
  let count = 0;

  if (num < 0) {
    // console.log("Réssayez avec un chiffre entier positif");
    return -1;

  } else if (Number.isNaN(num)) {
    // console.log("Ce n'est pas un chiffre");
    return -1;

  } else if (num <= 1) {
    // console.log(`Non, ${num} n'est pas un nombre premier`);
    return -1;

  } else {
    for (let i = num; i > 0; i--) {
      result = num / i;

      if (Number.isInteger(result)) {
        count++;
      };
    };

    if (count === 2) {
      // console.log(`Oui, ${num} est un nombre premier`);
      return true;
    } else {
      // console.log(`Non, ${num} n'est pas un nombre premier`);
      return false;
    };
  };
};

//--------------------------------------------------------------------

// Function to have the first next prime number
function nextPrimeNumber(num) {
  // Check errors and calculate the next prime number
  if (num < 0) {
    // console.log("Réssayez avec un chiffre entier positif");
    return -1;

  } else if (Number.isNaN(num)) {
    // console.log("Ce n'est pas un chiffre");
    return -1;

  } else {
    for (let i = num + 1; i > 0; i++) {
      if (i === 1) {
        continue;
      } else if (isPrimeNumbers(i)) {
        // return `Le chiffre premier suivant est ${i}`;
        return i;
      };
    };
  };
};

//--------------------------------------------------------------------
// Function to get the useful argument
function getArg(){
  const args = process.argv;
  let neededArg = 0;

  if (length(args) > 3){
    // console.log("Il doit y avoir qu'un seul argument");
    return -1;
  } else if (args[2] < 0) {
    // console.log("l'argument doit être un chiffre positif");
    return -1;
  } else if (typeof Number(args[2]) !== 'number') {
    // console.log("L'argument doit être un chiffre");
    return -1;
  } else {
    neededArg = args[2];
    return Number(neededArg);
  }

};

//--------------------------------------------------------------------
// Function to get the length of an array
function length(arr) {
  let count = 0;

  do{
    count++
  } while(arr[count] !== undefined);

  return count;
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

const number = getArg();

//////////////////////////
// 5. AFFICHAGE RESULAT //
//////////////////////////

console.log(nextPrimeNumber(number));
