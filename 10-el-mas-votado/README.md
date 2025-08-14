# El más votado

Imagina que estás desarrollando un sistema de votaciones para un concurso. Cada persona puede votar a un solo participante, pero puede votar más de una vez durante el evento. Después de que finalice el evento, necesitas saber qué participante recibió el mayor número de votos. Sin embargo, puede haber un empate, y en ese caso, se debe devolver el nombre del último participante empatado.

## Ejemplos:

```javascript
participanteConMasVotos(['Ana', 'Luis', 'Pedro', 'Ana', 'Luis', 'Luis'])
// -> "Luis" porque tiene el mayor número de votos (3 votos).

participanteConMasVotos(['Carlos', 'Ana', 'Carlos', 'Ana', 'Ana'])
// -> "Ana" porque tiene el mayor número de votos (3 votos) y es la última en el empate.

participanteConMasVotos(['Mario', 'Luigi', 'Luigi', 'Peach'])
// -> "Luigi" porque tiene el mayor número de votos (2 votos).
```

## Restricciones

El array votos siempre tendrá al menos un voto.
