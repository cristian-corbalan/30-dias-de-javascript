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