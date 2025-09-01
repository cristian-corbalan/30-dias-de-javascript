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

console.log(calcularHorasExtra(2022, ['01/06', '04/01', '12/25'])); // 4
// 6 de enero (jueves) y 1 de abril (viernes) => 2 feriados laborables
// 25 de diciembre es domingo, no cuenta
// Resultado: 2 * 2 = 4

console.log(calcularHorasExtra(2023, ['01/01', '03/17', '12/08'])); // 4
// 17 de marzo y 8 de diciembre caen entre semana
// Resultado: 2 \* 2 = 4

console.log(calcularHorasExtra(2025, ['01/01', '07/20', '12/25'])); // 0
// Todos caen en fin de semana