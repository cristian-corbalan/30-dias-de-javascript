# ¡¿2 + 2 = 5?!

¡Los programadores han perdido la cordura! S1vitar está completamente convencido de que la única forma de obtener el resultado 8 es sumando `5 + 3` (solo tienen un número acotado de números para usar). Pero Hector de Gato no está nada de acuerdo y argumenta que la respuesta correcta es `2 + 3 + 3`.

¡Hay que resolver este conflicto! Tu misión será crear una función que devuelva todas las posibles combinaciones de números que, al ser sumados, den como resultado el número objetivo.


```javascript
combinacionesSuma([2, 3, 5], 8)

// salida:
// [
// [2, 2, 2, 2],
// [2, 3, 3],
// [3, 5]
// ]
```

# Reglas:

- Debes devolver todas las combinaciones posibles sin repeticiones.
- Cada número del conjunto puede repetirse en una combinación (como un número infinito).
- El conjunto de entrada puede tener números repetidos, pero no debes incluir combinaciones duplicadas.
