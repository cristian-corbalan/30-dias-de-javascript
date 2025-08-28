'use strict';

function getMaxConcurrentEvents(eventos: Array<{ inicio: number, fin: number }>) {
  let mayorCantidadEventos = 0;

  for (let i = 0; i < eventos.length; i++) {
    const eventoActual = eventos[i];

    let cantidadEventosSolapados = 1;
    for (let j = i + 1; j < eventos.length; j++) {
      const eventoFuturo = eventos[j];

      if(eventoFuturo.inicio >= eventoActual.inicio && eventoFuturo.inicio < eventoActual.fin) {
        cantidadEventosSolapados++;
      }
    }

    if(cantidadEventosSolapados > mayorCantidadEventos) {
      mayorCantidadEventos = cantidadEventosSolapados;
    }
  }

  return mayorCantidadEventos;
}
