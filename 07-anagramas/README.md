# Anagramas

Dado un par de palabras, debemos determinar si son anagramas entre sí. Dos palabras son anagramas si contienen las mismas letras en la misma cantidad, pero en cualquier orden.

## Por ejemplo:

- “cinema” y “iceman” son anagramas.
- “hello” y “world” no son anagramas.

## Instrucciones:

- Crear una función que reciba dos cadenas de texto.
- La función debe devolver `true` si las palabras son anagramas y `false` si no lo son.
- La comparación debe ser insensible a mayúsculas y minúsculas.

## Ejemplos:
```javascript
esAnagrama('cinema', 'iceman') // true
esAnagrama('hello', 'world') // false
esAnagrama('Listen', 'Silent') // true
esAnagrama('evil', 'vile') // true
```

## Consideraciones:
- Las palabras pueden tener diferentes longitudes, pero solo serán anagramas si las letras y la cantidad de cada letra coinciden.
- Puedes asumir que no habrá caracteres especiales (solo letras).
