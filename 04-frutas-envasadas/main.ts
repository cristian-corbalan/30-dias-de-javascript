'use strict';

function frutaEmpacadaCorrectamente(entrada: string[], salida: string[]) {
  salida.reverse();

  for (let i = 0; i < entrada.length; i++) {
    if(entrada[i] !== salida[i]) {
      return false;
    }
  }

  return true
}