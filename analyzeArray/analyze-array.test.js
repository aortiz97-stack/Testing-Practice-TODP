/* eslint-disable no-undef */
const analyzeArray = require('./analyze-array');

test('analyzeArray is a function', () => {
  expect(typeof analyzeArray).toBe('function');
});

test('analyzeArray returns an object', () => {
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6])).toBe('object');
});
