'use strict';

function participanteConMasVotos(votos: string[]) {
  const participantes = {}

  for (const participante of votos) {
    participantes[participante] = participantes[participante] + 1 || 1;
  }

  let participanteConMasVotos = {
    nombre: '',
    cantidad: -1,
  };

  for (const participante in participantes) {
    if (participantes[participante] >= participanteConMasVotos.cantidad) {
      participanteConMasVotos.nombre = participante;
      participanteConMasVotos.cantidad = participantes[participante];
    }
  }

  return participanteConMasVotos.nombre;
}