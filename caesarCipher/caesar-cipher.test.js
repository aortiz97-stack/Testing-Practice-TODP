/* eslint-disable no-undef */
const caesarCipher = require('./caesar-cipher');

test('Caesar cipher is a function', () => {
  expect(typeof caesarCipher).toBe('function');
});

test('Caesar cipher returns a string', () => {
  expect(typeof caesarCipher('string')).toBe('string');
});

test('Caesar cipher shifts letters by shift factor correctly', () => {
  expect(caesarCipher('abcd')).toBe('bcde');
  expect(caesarCipher('abcd', 5)).toBe('fghi');
});
