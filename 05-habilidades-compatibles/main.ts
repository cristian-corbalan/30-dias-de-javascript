'use strict';

function candidatosCompatibles(oferta: string[], candidatos: Array<{ id: string, skills: string[] }>) {
  oferta = oferta.map(oferta => oferta.toLowerCase());
  candidatos.forEach(candidato => {
    candidato.skills = candidato.skills.map(skill => skill.toLowerCase());
  })

  const candidatosAprobados = new Set()
  const ofertaPorcentaje = Math.floor(oferta.length * 0.7);
  for (const candidato of candidatos) {
    const candidatoPorcentaje = new Set(oferta).intersection(new Set(candidato.skills)).size;

    if (candidatoPorcentaje >= ofertaPorcentaje) {
      candidatosAprobados.add(candidato.id);
    }
  }

  return Array.from(candidatosAprobados).sort();
}