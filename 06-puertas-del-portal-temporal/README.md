# Puertas del portal temporal

En el año 4022, los humanos usan portales temporales para moverse entre dimensiones. Cada portal tiene un código único (una letra minúscula) y solo uno de ellos está fuera de fase: no se repite en la secuencia de activaciones. Tu misión es encontrar el primer portal fuera de fase que aparece en la lista.

Implementa la función `portalFueraDeFase` que reciba un string con los códigos de portales activados en orden, y devuelva el índice del primer portal que no se repite. Si todos los portales están en fase (es decir, se repiten), devuelve `-1`.

## Ejemplos:

```javascript
portalFueraDeFase('xyxyxy')
// todas se repiten -> -1

portalFueraDeFase('quasar')
// q en el índice 0 ✅

portalFueraDeFase('aabbccddeeffg')
// g en el índice 12 ✅
```

## Reglas:
- El input siempre será un string no vacío con letras minúsculas.
- Si no hay portales fuera de fase, devuelve -1.
- El índice debe ser el de la primera aparición única.
