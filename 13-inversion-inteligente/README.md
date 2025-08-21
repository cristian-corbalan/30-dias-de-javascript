# Inversión inteligente

Estás desarrollando una app para ayudar a inversores a maximizar sus ganancias en la bolsa. Te piden implementar una función que calcule la mayor ganancia posible comprando y vendiendo una acción el mismo día.

Recibís como entrada un array de números, donde cada número representa el precio de la acción en un momento del día. El tiempo avanza de izquierda a derecha.

## Requisitos:

- Solo podés comprar antes de vender.
- Si no es posible obtener ganancia, devolvé -1.

## Ejemplos:

```javascript
const dailyPrices = [45, 24, 35, 31, 40, 38, 11]

maxStockProfit(dailyPrices) // => 16
// Compra a 24, vende a 40
```
