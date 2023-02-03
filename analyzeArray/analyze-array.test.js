/* eslint-disable no-undef */
const analyzeArray = require('./analyze-array');

test('analyzeArray is a function', () => {
  expect(typeof analyzeArray).toBe('function');
});

test('analyzeArray returns an object', () => {
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6])).toBe('object');
});

test('analyzeArray returns an object with attributes it should have', () => {
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe('function');
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe('function');
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe('function');
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe('function');
});
