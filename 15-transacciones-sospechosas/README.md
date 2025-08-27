# Transacciones sospechosas

En una fintech que procesa pagos, querés detectar **comportamientos sospechosos** de usuarios. Se considera sospechoso si un usuario hace **más de 3 transacciones** en menos de 1 minuto.

## Implementa la función usuariosSospechosos que reciba:

- Un array de transacciones: `{ userId: string, timestamp: number }`

La función debe devolver un array con los userId que tengan al menos una secuencia de más de 3 transacciones en un rango de **60 segundos o menos**.

## Reglas:

- Las transacciones no vienen ordenadas.
- Un usuario puede aparecer varias veces en el resultado, pero devolvelo una sola vez.
- No importa cuántas secuencias sospechosas tenga: si tiene una, ya es sospechoso.

## Ejemplo
```javascript
const transacciones = [
{ userId: 'a', timestamp: 100 },
{ userId: 'a', timestamp: 130 },
{ userId: 'a', timestamp: 150 },
{ userId: 'a', timestamp: 160 },
{ userId: 'b', timestamp: 200 },
{ userId: 'b', timestamp: 300 },
{ userId: 'b', timestamp: 400 },
{ userId: 'c', timestamp: 500 },
{ userId: 'c', timestamp: 501 },
{ userId: 'c', timestamp: 502 },
{ userId: 'c', timestamp: 503 },
{ userId: 'd', timestamp: 1000 },
]

usuariosSospechosos(transacciones)
// ➞ ['a', 'c']
```
