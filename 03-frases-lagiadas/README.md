# Frases Plagiadas

Varias escuelas están usando un sistema automático para detectar si los alumnos copiaron texto de otras fuentes. Tu
tarea es implementar una función que compare un conjunto de frases escritas por un estudiante con una base de frases
consideradas como sospechosas de ser copiadas.

Una frase se considera plagiada si coincide con una frase de la base **ignorando mayúsculas, espacios al inicio/final y
signos de puntuación al final** (como ".", "!", "?", al final de la frase).

## Ejemplos:

```javascript
const base = [
  'El conocimiento es poder.',
  'Aprender nunca es una pérdida de tiempo!',
  'Programar es divertido',
]

const frasesEstudiante = [
  'el conocimiento es poder',
  ' Aprender nunca es una pérdida de tiempo ',
  'programar es divertido.',
  'La práctica hace al maestro',
]

detectarPlagio(base, frasesEstudiante)
// ➞ [
// "el conocimiento es poder",
// " Aprender nunca es una pérdida de tiempo ",
// "programar es divertido."
// ]
```

## Reglas:

* Ignora mayúsculas/minúsculas.
* Ignora espacios al principio o final de la frase.
* Ignora ”.”, ”!” o ”?” al final de la frase.
* Devuelve un array con las frases del estudiante que están plagiadas.
* El orden debe respetar el array de frases del estudiante.
* No modifiques las frases originales en el resultado.
