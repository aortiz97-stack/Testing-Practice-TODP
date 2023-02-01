function capitalize(string) {
  const newStr = string[0].toUpperCase() + string.slice(1);
  return newStr;
}

module.exports = capitalize;
