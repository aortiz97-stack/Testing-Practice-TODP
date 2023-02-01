const capitalize = require('./capitalize');

test('Capitalize function returns a string', () => {
  expect(typeof capitalize('string')).toBe('string');
});

test('Function does not capitalize first letter if it is already capitalized', () => {
  expect(capitalize('String')).toBe('String');
});

test('Function capitalizes first letter if lowercased', () => {
  expect(capitalize('string')).toBe('String');
});
