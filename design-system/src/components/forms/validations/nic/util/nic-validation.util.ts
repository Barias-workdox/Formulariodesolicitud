/**
 * Check if the value contains only number, its util to validate some National Identification Cards (NICs).
 */
export const checkContainsOnlyNumbers = (value: string): boolean => {
  const onlyNumbersRegExp = new RegExp(/^\d+$/);

  return onlyNumbersRegExp.test(value);
};
