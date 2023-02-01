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
