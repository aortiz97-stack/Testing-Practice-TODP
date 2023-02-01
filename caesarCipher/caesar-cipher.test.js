const caesarCipher = require('./caesar-cipher');

test('Caesar cipher is a function', () => {
    expect(typeof caesarCipher).toBe('function');
});

test('Caesar cipher returns a string', () => {
  expect(typeof caesarCipher('string')).toBe('string');
});
