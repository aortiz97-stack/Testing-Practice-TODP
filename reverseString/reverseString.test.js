const reverseString = require('./reverseString');

test('Reverse string returns a string', () => {
  expect(typeof reverseString('string')).toBe(typeof 'string');
});
