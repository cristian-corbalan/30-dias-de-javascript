'use strict';

function detectarPlagio(base: string[], frasesEstudiante: string[]) {
  const plagio: string[] = [];

  frasesEstudiante.forEach(fraseEstudiante => {
    let fraseFormateada = fraseEstudiante.trim().toLowerCase();

    const lastCharacter = fraseFormateada[fraseFormateada.length - 1];
    if (['.', '?', '!'].some((character) => character === lastCharacter)) {
      fraseFormateada = fraseFormateada.slice(0, -1);
    }

    const plagioEncontrado = base.some((frase) =>
      frase.toLowerCase().trim().includes(fraseFormateada)
    );

    if (plagioEncontrado) {
      plagio.push(fraseEstudiante);
    }
  })

  return plagio;
}