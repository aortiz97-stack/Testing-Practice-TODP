const Calculator = () => {
  const add = (n1, n2) => n1 + n2;
  const subtract = () => {};
  const multiply = () => {};
  const divide = () => {};
  return {
    add, subtract, multiply, divide,
  };
};

const calculator = Calculator();

console.log(typeof calculator);

module.exports = calculator;
