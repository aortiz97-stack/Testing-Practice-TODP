function analyzeArray(array) {
  const average = () => array.reduce((prev, cur) => prev + cur, 0) / array.length;
  const min = () => {};
  const max = () => {};
  const length = () => {};
  return {
    average, min, max, length,
  };
}

module.exports = analyzeArray;
