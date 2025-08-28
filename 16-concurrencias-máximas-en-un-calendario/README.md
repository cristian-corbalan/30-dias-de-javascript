# 📊 Concurrencias máximas en un calendario

Tenés una aplicación de calendario y querés analizar en qué momento del día hay más actividades solapadas (es decir, que ocurren al mismo tiempo).

Implementá la función `getMaxConcurrentEvents` que recibe un array de eventos. Cada evento tiene una hora de inicio y una hora de fin representadas como enteros (minutos desde las 00:00).

Tu función debe devolver el **máximo número de eventos que están ocurriendo al mismo tiempo**.

## Ejemplos:
```javascript
const eventos = [
{ inicio: 60, fin: 120 }, // 1:00 a 2:00
{ inicio: 110, fin: 180 }, // 1:50 a 3:00
{ inicio: 150, fin: 210 }, // 2:30 a 3:30
]

getMaxConcurrentEvents(eventos)
// ➞ 2

// Entre el minuto 110 y 120 hay 2 eventos simultáneos.
// Entre el minuto 150 y 180 también hay 2. Pero nunca 3 a la vez.
```

## Reglas:

- Si un evento termina en el mismo minuto que otro empieza, no se consideran solapados.
- Todos los eventos son válidos: inicio < fin.
- El array puede estar vacío, y en ese caso devolvés 0.
- Las horas están dadas en minutos desde la medianoche (ej: 60 = 1:00am, 90 = 1:30am).
