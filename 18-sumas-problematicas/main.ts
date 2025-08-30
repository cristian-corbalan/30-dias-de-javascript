'use strict';

function combinacionesSuma(numeros: number[], objetivo: number) {
  const combinacionesValidas = []

  numeros = [...new Set(numeros)];

  function calcularSuma(actual: number[], posicion: number) {
    const suma = actual.reduce((total, x) => total + x, 0)

    if (suma > objetivo) return;

    if (suma === objetivo) {
      combinacionesValidas.push(actual)
      return;
    }

    actual.push(numeros[posicion]);

    calcularSuma([...actual], posicion);

    if (posicion + 1 < numeros.length) {
      calcularSuma(actual.slice(0, -1), posicion + 1);
    }
  }


  for (let i = 0; i < numeros.length; i++) {
    calcularSuma([numeros[i]], i);
  }

  return combinacionesValidas;
}
