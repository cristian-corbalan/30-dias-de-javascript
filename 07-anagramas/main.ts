'use strict';

function esAnagrama(primeraPalabra: string, segundaPalabra: string) {
  primeraPalabra = primeraPalabra.toLowerCase().split('').sort().join('');
  segundaPalabra = segundaPalabra.toLowerCase().split('').sort().join('');
  return primeraPalabra === segundaPalabra;
}
