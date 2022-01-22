import { createArray } from '../index';
test('Create Array', () => {
  expect(createArray({ to: 2 })).toEqual([0, 1]);
});

test('Create Array with `from` parametr', () => {
  expect(createArray({ from: 2, to: 4 })).toEqual([2, 3]);
});

test('Create Array with `step` parametr', () => {
  expect(createArray({ step: 2, to: 5 })).toEqual([0, 2, 4]);
});

test('Create Array with `from ` and `step` parametr', () => {
  expect(createArray({ from: 5, step: 2, to: 10 })).toEqual([5, 7, 9]);
});
