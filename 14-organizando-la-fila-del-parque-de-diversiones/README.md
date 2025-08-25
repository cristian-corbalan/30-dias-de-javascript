# Organizando la fila del parque de diversiones

El nuevo parque de diversiones de Robot-Landia ha implementado un sistema automatizado para organizar las filas. A cada visitante se le asigna un número (su nivel de energía). Los robots de la entrada quieren organizar la fila para que nadie con menos energía esté delante de alguien con más energía en el mismo grupo.

Se permiten dividir a los visitantes en grupos consecutivos, pero el orden dentro de cada grupo debe ser **estrictamente creciente**.

Tu trabajo es calcular el mínimo número de grupos que los robots deben formar para cumplir esta regla.

## Ejemplos:
```javascript
const energyLevels = [5, 1, 2, 6]
groupVisitors(energyLevels) // → 2

// Se pueden agrupar como:
// Grupo 1: [5, 6]
// Grupo 2: [1, 2]
```

## Observaciones
Si hay energías con el mismo valor, se deben agrupar en grupos distintos.

