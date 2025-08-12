# 🧃 Frutas envasadas

En la fábrica de jugos Frutópolis, los robots empacadores reciben frutas en una cinta transportadora. Por reglas de seguridad, las frutas deben entrar y salir en un orden específico: la última fruta que entra debe ser la primera en salir.

Tu misión es ayudar a verificar si una secuencia de salida es posible, dadas las frutas que entraron. Implementa la función `frutaEmpacadaCorrectamente` que reciba dos arrays: `entrada` (el orden en el que las frutas llegaron) y `salida` (el orden en el que las frutas se empacaron), y devuelva `true` si la secuencia de salida es válida, o `false` si no se puede lograr respetando el orden de apilado.

## Ejemplos:
```javascript
frutaEmpacadaCorrectamente(
['manzana', 'banana', 'kiwi'],
['kiwi', 'banana', 'manzana']
)
// true → se empacaron en orden LIFO

frutaEmpacadaCorrectamente(
['manzana', 'banana', 'kiwi'],
['banana', 'kiwi', 'manzana']
)
// false → no se puede obtener así desde una pila
```

## Reglas:
- Las frutas son strings únicos, sin repetir.
- Solo se puede usar una pila para empacar.
- Devuelve `true` si la salida es posible, `false` si no.
