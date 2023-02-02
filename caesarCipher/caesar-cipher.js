function caesarCipher(string, shiftFactor = 1) {
  let encryptedStr = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < string.length; i += 1) {
    const char = string.charAt(i);
    let alphabetIdx = alphabet.indexOf(char);
    alphabetIdx += shiftFactor;
    alphabetIdx %= 26;
    encryptedStr += alphabet.charAt(alphabetIdx);
  }
  return encryptedStr;
}

module.exports = caesarCipher;
