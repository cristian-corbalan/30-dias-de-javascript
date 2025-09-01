'use strict';

function calcularHorasExtra(anio: number, feriados: string[]) {
  let horasExtras = 0;
  for (const feriado of feriados) {
    const [mes, fecha] = feriado.split('/').map((x) => +x);

    const dia = new Date(anio, mes - 1, fecha).getDay();

    if (dia >= 1 && dia <= 5) {
      horasExtras++;
    }
  }

  return horasExtras * 2;
}
