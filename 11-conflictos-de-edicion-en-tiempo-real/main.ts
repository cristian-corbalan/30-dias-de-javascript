'use strict';

function resolverConflictos(primerUsuarioCambios: Array<{
  user: string,
  op: "insert" | "delete",
  index: number,
  text: string
}>, segundoUsuarioCambios: Array<{ user: string, op: "insert" | "delete", index: number, text?: string }>) {
  const cadena = []

  for (const cambio of primerUsuarioCambios) {
    if (cambio.op === "insert") {
      cadena.splice(cambio.index, 0, ...cambio.text.split(''));
    }else {
      cadena.splice(cambio.index, 1);
    }
  }

  for (const cambio of segundoUsuarioCambios) {
    if (cambio.index !== 0 && !cadena[cambio.index]) {
      continue;
    }

    if (cambio.op === "insert") {
      cadena.splice(cambio.index, 0, ...cambio.text.split(''));
    }else {
      cadena.splice(cambio.index, 1);
    }
  }

  return cadena.join('');
}