'use strict';

function organizarEstanteria(libros: string[], posiciones: number[]) {
  const libreria = []

  for (let i = 0; i < posiciones.length; i++) {
    const posicion = posiciones[i];

    libreria[posicion] = libros[i];
  }

  return libreria.filter(libro => libro !== undefined);
}
