'use strict';

function portalFueraDeFase(portales: string) {
  for (const codigo of portales) {
    let cantidadUsos = 0;

    for (let i = 0; i < portales.length; i++) {
      cantidadUsos += portales[i] === codigo ? 1 : 0;
    }

    if(cantidadUsos === 1) {
      return portales.indexOf(codigo);
    }
  }

  return -1
}
