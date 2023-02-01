function reverseString(string) {
  let reversedString = '';
  for (let i = string.length - 1; i > -1; i -= 1 ) {
    reversedString += string[i];
  }
  return reversedString;
}

module.exports = reverseString;
