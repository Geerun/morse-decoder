const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morzeString = '';
    let result = '';
    let tempString = '';

    for (let i = 0; i <= ((expr.length)/10 - 1); i++) {
        if (expr.slice(i*10,i*10+10) == "**********") {result += " "} 
        else { 
          tempString = expr.slice(i*10,i*10+10);
          morzeString = '';
          for (let j = 0; j <= 4; j++){
            if (tempString.slice(j*2,j*2+2) == "10"){morzeString += '.'}
            if (tempString.slice(j*2,j*2+2) == "11"){morzeString += '-'}
          }
          result += MORSE_TABLE[morzeString];
              }
    }
    return result;
}
 

module.exports = {
    decode
}

