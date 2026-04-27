import { getPartialText } from '../generative-text.util';

const inputValues = ['apple', 'banana', 'cherry', 'date'];

describe('getPartialText - test', () => {
  it('should return an array of strings from the start to the supplied index (inclusive)', () => {
    const index = 2;

    const result = getPartialText(inputValues, index);

    expect(result).toEqual(inputValues.slice(0, index + 1));
  });

  it('should handle the case where the index is 0', () => {
    const index = 0;

    const result = getPartialText(inputValues, index);

    expect(result).toEqual(inputValues.slice(0, index + 1));
  });

  it('should return an empty array when the index is negative', () => {
    const index = -1;

    const result = getPartialText(inputValues, index);

    expect(result).toEqual([]);
  });

  it('should return the entire array when the index is greater than or equal to the length of the array', () => {
    const index = 5;

    const result = getPartialText(inputValues, index);

    expect(result).toEqual(inputValues);
  });
});
