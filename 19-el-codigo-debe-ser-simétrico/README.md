# El código debe ser… ¡SIMÉTRICO!

Vegetta777 está construyendo una nueva base en Minecraft, y como todos sabemos**… ¡todo tiene que ser simétrico!**. Pero hay un problema: algunos nombres de estructuras no son perfectamente simétricos 😱

Por suerte, Vegetta es flexible (un poquito). Él considera que un nombre de estructura **es aceptable** si puede volverse simétrico **eliminando, como máximo, una letra**.

Tu misión es ayudar a Vegetta implementando la función `esSimetricoParaVegetta(nombre)` Que recibe una cadena de texto y devuelve `true` si es (o casi es) simétrica, o `false` si no hay salvación y debe destruirse inmediatamente con dinamita.

## Ejemplos:

```javascript
esSimetricoParaVegetta('sala') // true
// Quitando la "s", queda "ala", que es simétrico (¡Vegetta aprueba!)

esSimetricoParaVegetta('torret') // false
// No es simétrica ni aunque quites una letra :(

esSimetricoParaVegetta('redder') // true
// Ya es un palíndromo perfecto, Vegetta está orgulloso

esSimetricoParaVegetta('mansionnomisam') // true
// No es simétrica ni aunque quites una letra :(

esSimetricoParaVegetta('minecraft') // false
// Demasiado caótico, ¡TNT al instante!
```
