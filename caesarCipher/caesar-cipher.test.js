/* eslint-disable no-undef */
const caesarCipher = require('./caesar-cipher');

test('cipher is a function', () => {
  expect(typeof caesarCipher).toBe('function');
});

test('cipher returns a string', () => {
  expect(typeof caesarCipher('string')).toBe('string');
});

test('cipher shifts letters by shift factor correctly', () => {
  expect(caesarCipher('abcd')).toBe('bcde');
  expect(caesarCipher('abcd', 5)).toBe('fghi');
});

test('cipher shifts letters and wraps around with positive shift factor', () => {
  expect(caesarCipher('wxyz')).toBe('xyza');
  expect(caesarCipher('wxyz', 5)).toBe('bcde');
});

test('cipher retains the case of characters', () => {
  expect(caesarCipher('London')).toBe('Mpoepo');
  expect(caesarCipher('McKinney')).toBe('NdLjoofz');
});

test('cipher can process words with spaces and punctuation', () => {
  expect(caesarCipher("London's bridge has fallen!")).toBe("Mpoepo't csjehf ibt gbmmfo!");
});

test('cipher works with negative shift numbers', () => {
  expect(caesarCipher('abcd', -1)).toBe('zabc');
  expect(caesarCipher('yzab', -5)).toBe('tuvw');
});
