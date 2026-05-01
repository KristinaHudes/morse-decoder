const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  let decoded = '';

  for (let i = 0; i < expr.length; i += 10) {
    const chunk = expr.slice(i, i + 10);

    if (chunk === '**********') {
      decoded += ' ';
    } else {
      let morse = '';
      for (let j = 0; j < chunk.length; j += 2) {
        const pair = chunk.slice(j, j + 2);
        if (pair === '10') morse += '.';
        if (pair === '11') morse += '-';
      }

      decoded += MORSE_TABLE[morse] || '';
    }
  }

  return decoded;
};
