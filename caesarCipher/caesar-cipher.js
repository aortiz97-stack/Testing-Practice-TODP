function caesarCipher(string, shiftFactor = 1) {
  let encryptedStr = '';
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < string.length; i += 1) {
    const char = string.charAt(i);
    let alphabet = lowerAlphabet;
    if (!lowerAlphabet.includes(char)) {
      alphabet = upperAlphabet;
    }
    let alphabetIdx = alphabet.indexOf(char);
    if (alphabetIdx !== -1 || (alphabetIdx === -1 && alphabet.includes(char))) {
      alphabetIdx += shiftFactor;
      if (alphabetIdx < 0) alphabetIdx = 26 + alphabetIdx;
      alphabetIdx %= 26;
      encryptedStr += alphabet.charAt(alphabetIdx);
    } else {
      encryptedStr += char;
    }
  }
  return encryptedStr;
}

module.exports = caesarCipher;
