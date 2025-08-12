# Habilidades compatibles
Estás creando un sistema de emparejamiento entre candidatos y ofertas laborales. Cada oferta publica una lista de habilidades deseadas (por ejemplo “**JavaScript**”, “**React**”, “**CSS**”). A su vez, cada candidato envía su CV con habilidades declaradas.

Tu objetivo es crear una función que reciba una oferta laboral y una lista de candidatos, y devuelva los IDs de los candidatos que **cumplen al menos el 70% de las habilidades requeridas**.

## Ejemplos:
```javascript
const oferta = ['JavaScript', 'React', 'Node', 'CSS', 'Git']

const candidatos = [
{ id: 'juan', skills: ['JavaScript', 'React', 'Node', 'Git'] },
{ id: 'ana', skills: ['JavaScript', 'CSS', 'React', 'Node', 'Git'] },
{ id: 'leo', skills: ['HTML', 'CSS'] },
{ id: 'lu', skills: ['JavaScript', 'Node'] },
]

candidatosCompatibles(oferta, candidatos)
// ➞ ["ana", "juan"]
```

## Reglas:
- El 70% de coincidencia se calcula sobre la cantidad de habilidades de la oferta (redondear hacia abajo).
- Las habilidades no distinguen mayúsculas/minúsculas.
- No repitas candidatos.
- Ordenar el resultado alfabéticamente por ID.

## Explicación
- Si la oferta tiene **5 habilidades requeridas**, el **70%** equivale a **3.5**. Al redondear hacia abajo, el número mínimo de habilidades requeridas por candidato es 3.
- Si la oferta tiene **6 habilidades requeridas**, el **70%** equivale a **4.2**. Al redondear hacia abajo, el número mínimo de habilidades requeridas por candidato es 4.

💡 Por esta razón, **Ana** y **Juan** son candidatos válidos, pero **Leo** no lo es. Ana y Juan tienen **3 habilidades requeridas**, mientras que Leo solo tiene **2**.

