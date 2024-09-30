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
    let answer = '';
    for(let i = 0; i <= expr.length - 1; i += 10) {
        let tenSymbols = expr.slice(i, i + 10);
        let letter = tenSymbols.slice(tenSymbols.indexOf('1'));
        if (letter.length === 1) {
            answer += ' ';
            continue;
        }
        let morseString = '';
        for (let j = 1; j <= letter.length - 1; j += 2) {
            morseString += letter[j] === '0' ? '.' : '-';
            
        }
        answer += MORSE_TABLE[morseString];
    }
    return answer;
}


module.exports = {
    decode
}