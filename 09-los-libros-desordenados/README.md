# Los libros desordenados

El bibliotecario Don Biblio está reorganizando la gran biblioteca de la ciudad. Cada libro tiene una posición específica donde debe colocarse, pero por un error del sistema… ¡los libros están completamente desordenados! 😱

## El programa recibe dos listas:

- Una con los títulos de los libros (por ejemplo: `['Aprende lo Último de JavaScript', 'Aprende Git y GitHub', 'Cocina']`).
- Y otra con las posiciones de la estantería donde deben ir (como `[2, 0, 1]`).

Tu tarea es ayudar a Don Biblio a colocarlos correctamente según sus posiciones.

## ¿Cómo funciona?

Cada libro tiene una posición única en la estantería, pero las posiciones:

- **No necesariamente comienzan en 0** (podrían empezar en 5, 12, etc.).
- **Siempre son números consecutivos y en orden ascendente**.

Tu función debe devolver un array con los libros **en el orden correcto**, como si los estuvieras colocando en la estantería desde la posición más baja a la más alta.

## Ejemplos:
```javascript
const libros = ['Ajedrez', 'Poesía', 'Geografía', 'Física']
const posiciones = [2, 3, 1, 0]

organizarEstanteria(libros, posiciones)
// ['Física', 'Geografía', 'Ajedrez', 'Poesía']

const librosRaros = ['Dragones', 'Hechizos', 'Brujería', 'Alquimia', 'Pociones']
const posicionesRaras = [8, 6, 5, 7, 9]

organizarEstanteria(librosRaros, posicionesRaras)
// ['Brujería', 'Hechizos', 'Alquimia', 'Dragones', 'Pociones']
```

## Reglas:
- Siempre habrá el mismo número de libros y de posiciones.
- Ningún libro ni ninguna posición se repite.
- Las posiciones pueden empezar en cualquier número, pero siempre serán consecutivas.
