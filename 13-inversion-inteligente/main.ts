'use strict';

function maxStockProfit(preciosDiarios: number[]) {
  let maxGanancia = -1;

  for (let i = 0; i < preciosDiarios.length; i++) {
    const precioActual = preciosDiarios[i];

    for (let j = i + 1; j < preciosDiarios.length; j++) {
      const precioFuturo = preciosDiarios[j];

      const ganancia = precioFuturo - precioActual;

      if (ganancia > 0 && ganancia > maxGanancia) {
        maxGanancia = ganancia
      }
    }
  }

  return maxGanancia;
}