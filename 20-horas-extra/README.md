# Horas extra

Una empresa implementó una nueva política: por cada día feriado que cae entre semana (de lunes a viernes), el personal deberá recuperar **2 horas extra** en algún otro momento **dentro del mismo año**.

Tu tarea es implementar la función `calcularHorasExtra`, que recibe:

- un número `año` (por ejemplo `2024`)
- un array de strings `feriados`, donde cada string representa una fecha en formato `"MM/DD"` (mes/día)

La función debe devolver un número: la cantidad total de horas extra que deberán hacerse ese año por los feriados que caen en días laborables.

## A tener en cuenta:

- Solo cuentan los feriados que caen de lunes a viernes.
- No te preocupes por si el año es bisiesto, `Date` lo gestiona automáticamente.
- Las horas extra siempre se hacen en el mismo año del feriado.

## Ejemplos:

```javascript
calcularHorasExtra(2022, ['01/06', '04/01', '12/25']) // 4
// 6 de enero (jueves) y 1 de abril (viernes) => 2 feriados laborables
// 25 de diciembre es domingo, no cuenta
// Resultado: 2 * 2 = 4

calcularHorasExtra(2023, ['01/01', '03/17', '12/08']) // 4
// 17 de marzo y 8 de diciembre caen entre semana
// Resultado: 2 \* 2 = 4

calcularHorasExtra(2025, ['01/01', '07/20', '12/25']) // 0
// Todos caen en fin de semana
```
