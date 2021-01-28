const test = require('ava');
const sumOfEvenNumbers = require('./index');

test('should throw error', async (assert) => {
  assert.throws(() => sumOfEvenNumbers(null), {
    message: 'Parameter numbers must be an array of numbers',
  });
});

test('should return the corrent sum', async (assert) => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const result = sumOfEvenNumbers(numbers);
  assert.is(result, 12);
});

test('should return 0 when no even number is found', async (assert) => {
  const numbers = [1, 3, 5, 7, 9];
  const result = sumOfEvenNumbers(numbers);
  assert.is(result, 0);
});
