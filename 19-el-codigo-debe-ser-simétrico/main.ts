'use strict';

function esSimetricoParaVegetta(nombre: string) {
  if (nombre.split('').reverse().join('') === nombre) return true;

  for (let i = 0; i < nombre.length; i++) {
    let nuevoNombre = nombre.split('').toSpliced(i, 1);
    let reverso = nuevoNombre.toReversed();

    console.log(nuevoNombre.join(''), '===', reverso.join(''), '=', nuevoNombre.join('') === reverso.join(''))

    if (nuevoNombre.join('') === reverso.join('')) return true
  }

  return false
}

console.log('1:', esSimetricoParaVegetta('sala')) // true
// Quitando la "s", queda "ala", que es simétrico (¡Vegetta aprueba!)

console.log('2:', esSimetricoParaVegetta('torret')) // false
// No es simétrica ni aunque quites una letra :(

console.log('3:', esSimetricoParaVegetta('redder')) // true
// Ya es un palíndromo perfecto, Vegetta está orgulloso

console.log('4:', esSimetricoParaVegetta('mansionnomisam')) // false
// Quitando la "n" central queda perfecto 👌

// console.log(esSimetricoParaVegetta('minecraft')) // false
// Demasiado caótico, ¡TNT al instante!