const reverseString = require('./reverseString');

test('Reverse string returns a string', () => {
  expect(typeof reverseString('string')).toBe(typeof 'string');
});

test('String is reversed', () => {
  expect(reverseString('string')).toBe('gnirts');
});
