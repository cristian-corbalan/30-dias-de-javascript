'use strict';

function usuariosSospechosos(transacciones: Array<{ userId: string, timestamp: number }>) {
  transacciones.sort((a, b) => a.userId.localeCompare(b.userId) || a.timestamp - b.timestamp);

  let usuarioId = '';
  let primeraTransaccion = 0;
  let cantidadTransacciones = 0;

  const sospechosos = new Set();

  for (const transaccion of transacciones) {
    if (usuarioId !== transaccion.userId) {
      usuarioId = transaccion.userId;
      primeraTransaccion = transaccion.timestamp;
      cantidadTransacciones = 1;
    } else {
      cantidadTransacciones++;
      if (cantidadTransacciones === 3 && primeraTransaccion + 60 >= transaccion.timestamp) {
        sospechosos.add(transaccion.userId);
      }
    }
  }

  return Array.from(sospechosos);
}