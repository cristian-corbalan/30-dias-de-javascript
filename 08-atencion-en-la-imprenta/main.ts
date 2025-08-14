'use strict';

function secuenciaDeNumeros(tinta: number, codigos: number) {
  const codigosDefectuosos = [];

  for (let codigo = 1; codigo <= codigos; codigo++) {
    if(codigo.toString().includes(tinta.toString())) {
      codigosDefectuosos.push(codigo);
    }
  }

  return codigosDefectuosos;
}

console.log(secuenciaDeNumeros(1, 15))
// [1, 10, 11, 12, 13, 14, 15]

console.log(secuenciaDeNumeros(2, 20))
// [2, 12, 20]