"use strict"

///////////////////////////////////////////////////////////////////
// Créez un programme qui affiche le N-ème élément de la célèbre
// suite de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13) étant le début de la suite et le
// premier élément étant à l’index 0.
///////////////////////////////////////////////////////////////////
// Exemples d’utilisation:
///////////////////////////
// $> python exo.py 3
// 2
// $ >
// -------------------------
// Afficher -1 si le paramètre est négatif ou mauvais.
//////////////////////////////////////////////////////////////////////

//////////////////
// 1. FONCTIONS //
//////////////////

// Function to have the length of an array
function length(arr) {
  let count = 0;

  do {
    count++;
  } while(arr[count] !== undefined);

  return count;
};

// Function to have the useful argument
function args() {
  const allArgs = process.argv;
  const usefulArgs = [];

  if(allArgs[2] === undefined){
    console.log("Il faut mettre 1 argument (chiffre) pour que le script fonctionne");

  } else if (allArgs[2] < 0) {
    console.log("L'argument doit être un chiffre positif");

  } else if(length(allArgs) > 3) {
    console.log("Il faut mettre qu'un seul argument");

  } else if(typeof(allArgs[2]) === "") {
    console.log("Il faut mettre un chiffre et non un string");

  } else {
    usefulArgs.push(allArgs[2]);
  };


  return parseInt(usefulArgs);
};

// Array fibonacci
function arrFib() {
  const arr = [0, 1];
  let num1 = 0;
  let num2 = 0;
  let result = 0;

  for(let i = 2; i < 100; i++) {
    num1 = arr[i-2];
    num2 = arr[i-1];
    result = num1 + num2;
    arr.push(result);
  };


  return arr;
};

// Function to have nbr fibonacci test
function numFibonacci(index) {
  const arr = arrFib();
  const num = arr[index];

  if(num > 0) {
    return num;
  } else {
    return -1;
  }
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

const index = args();
const num = numFibonacci(index);

//////////////////////////
// 5. AFFICHAGE RESULAT //
//////////////////////////

console.log(num);
