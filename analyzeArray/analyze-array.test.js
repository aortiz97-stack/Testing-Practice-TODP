/* eslint-disable no-undef */
const analyzeArray = require('./analyze-array');

test('analyzeArray is a factory function ', () => {
  expect(typeof analyzeArray).toBe('function');
});

test('analyzeArray returns an object', () => {
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6])).toBe('object');
});

test('analyzeArray returns an object with attributes it should have', () => {
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe('number');
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe('number');
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe('number');
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe('number');
});

test('analyzeArray returns an object.average returns average of array contents', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('analyzeArray returns an object.average returns average of array contents', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('analyzeArray returns an object.average returns average of array contents', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('analyzeArray returns an object.average returns average of array contents', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
