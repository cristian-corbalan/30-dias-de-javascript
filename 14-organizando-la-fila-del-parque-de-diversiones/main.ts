'use strict';

function groupVisitors(nivelesDeEnergia: number[]) {
  const grupos = []

  for (const nivel of nivelesDeEnergia) {
    let agregado = false;

    for (let i = 0; i < grupos.length; i++) {
      if (nivel > grupos[i]) {
        agregado = true;
        grupos[i] = nivel;
        break;
      }
    }

    if (!agregado) {
      grupos.push(nivel);
    }
  }
  return grupos.length;
}