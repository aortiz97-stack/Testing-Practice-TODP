const calculator = require('./calculator');

test('Calculator is an object', () => {
  expect(typeof calculator).toBe('object');
});

test('Calculator has an add operation', () => {
  expect(typeof calculator.add).toBe('function');
});

test('Calculator has a subtract operation', () => {
  expect(typeof calculator.subtract).toBe('function');
});

test('Calculator has a multiply operation', () => {
  expect(typeof calculator.multiply).toBe('function');
});

test('Calculator has a division operation', () => {
  expect(typeof calculator.divide).toBe('function');
});

test('Add operation returns the sum of two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('Subtract operation returns the difference of two numbers', () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('Multiply operation returns the product of two numbers', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('Divide operation returns the quotient of two numbers', () => {
  expect(calculator.divide(2, 3)).toBeCloseTo(2 / 3);
  expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
});
