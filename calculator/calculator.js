const Calculator = () => {
  const add = () => {};
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
