'use strict';

function countMelodySequences(notas: number[]) {
  let cantidadSecuencias = 0;

  for (let i = 0; i < notas.length; i++) {
    if (notas[i + 1] === undefined) {
      continue;
    }

    for (let j = i + 1; j < notas.length; j++) {
      const notasSeleccionadas = notas.slice(i, j + 1).sort((a, b) => a - b);

      let primeraNota = notasSeleccionadas.at(0)
      let ultimaNota = notasSeleccionadas.at(-1);

      const secuenciaValida = [];
      for (let k = primeraNota; k <= ultimaNota; k++) {
        secuenciaValida.push(k);
      }

      if(notasSeleccionadas.length !== secuenciaValida.length){
        continue;
      }

      let esValido = true;
      for (let k = 0; k < secuenciaValida.length; k++) {
        if(secuenciaValida[k] !== notasSeleccionadas[k]) {
          esValido = false;
          break;
        }
      }

      if(esValido) {
        cantidadSecuencias++;
      }
    }
  }

  return cantidadSecuencias;
}
