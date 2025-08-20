# Desfile de los Pájaros Cantores

En una competencia anual de aves, los pájaros cantores desfilan uno tras otro. Cada pájaro canta una nota representada por un número entero. Sin embargo, al jurado solo le interesan las secuencias en las que los pájaros cantan notas sin repetir y que tengan exactamente todas las notas desde el mínimo hasta el máximo sin interrupciones.

El jurado quiere saber cuántas de estas secuencias válidas existen en el desfile. Una secuencia válida debe tener al menos 2 pájaros y cumplir:

- Las notas no se repiten
- Contienen todos los enteros entre el mínimo y el máximo

Tu tarea es implementar una función que cuente cuántas subsecuencias consecutivas válidas hay en el arreglo.

```javascript
const birdNotes = [1, 3, 2, 5, 4]
countMelodySequences(birdNotes) // → 6

// Las secuencias válidas son:

// [1, 3, 2] → contiene 1, 2, 3 ✅
// [1, 3, 2, 5] → no es válida, falta el 4
// [1, 3, 2, 5, 4] → contiene todos del 1 al 5 ✅
// [3, 2] → contiene 2, 3 ✅
// [3, 2, 5] → no es válida
// [3, 2, 5, 4] → es válida ✅
// [2, 5] → no es válida, falta el 2 y 3
// [2, 5, 4] → no es válido, falta el 3
// [5, 4] → es válida ✅

// Total: 5 secuencias distintas que cumplen.
```
