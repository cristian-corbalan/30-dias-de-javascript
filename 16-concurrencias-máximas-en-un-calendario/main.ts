'use strict';

function getMaxConcurrentEvents(eventos: Array<{ inicio: number, fin: number }>) {
  if (!eventos.length) return 0;

  const tiempos: Array<{ tiempo: number, tipo: 'inicio' | 'fin' }> = [];

  for (const evento of eventos) {
    tiempos.push({tiempo: evento.inicio, tipo: 'inicio'});
    tiempos.push({tiempo: evento.fin, tipo: 'fin'});
  }

  tiempos.sort((a, b) => {
    if (a.tiempo === b.tiempo) {
      return a.tipo === 'fin' ? -1 : 1;
    }

    return a.tiempo - b.tiempo;
  })

  let maxEventosSolapados = 0;
  let contadorEventosSolapados = 0;
  for (const tiempo of tiempos) {
    contadorEventosSolapados += tiempo.tipo === 'inicio' ? 1 : -1;

    if (contadorEventosSolapados > maxEventosSolapados) {
      maxEventosSolapados = contadorEventosSolapados;
    }
  }

  return maxEventosSolapados;
}
