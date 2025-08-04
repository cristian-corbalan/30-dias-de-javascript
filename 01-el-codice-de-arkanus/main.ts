'use strict';

function decodeSpell(spell: string) {
  const dictionary = {
    '☽': 1,
    '☾': 5,
    '♁': 10,
    '⚕': 50,
    '⚡': 100,
  }

  const reversedSpell = spell.split('').reverse().join('');

  let spellValue = 0;

  for (let i = 0; i < reversedSpell.length; i++) {
    const current = dictionary[reversedSpell[i]];
    const previous = dictionary[reversedSpell[i - 1]];

    if (previous && previous > current) {
      spellValue -= current;
    } else {
      spellValue += current;
    }
  }

  return spellValue;
}