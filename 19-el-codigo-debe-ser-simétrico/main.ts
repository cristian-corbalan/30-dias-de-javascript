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
