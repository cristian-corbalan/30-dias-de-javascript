# ¡Atención en la imprenta!

Estamos trabajando en una imprenta que produce etiquetas con códigos numéricos para paquetes. Cada dígito del 0 al 9 se imprime con una tinta distinta, y a veces… ¡una de las tintas se acaba!

Tu tarea es escribir una función que nos diga qué etiquetas saldrán defectuosas porque **contienen el dígito cuya tinta se ha agotado**.

## ¿Cómo funciona?

La función recibe:

- Un dígito (del 0 al 9) que representa la **tinta que se ha agotado**.
- Un número que representa la **cantidad total de etiquetas** que se van a imprimir, desde 1 hasta ese número.

La función debe devolver un array con todos los números que **contienen el dígito sin tinta**. Esos son los códigos que saldrán mal impresos.

## Ejemplos:

```javascript
secuenciaDeNumeros(1, 15)
// [1, 10, 11, 12, 13, 14, 15]

secuenciaDeNumeros(2, 20)
// [2, 12, 20]
```
