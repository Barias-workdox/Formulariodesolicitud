import { formatCompactNumber, includesStringNormalized, normalizeStringNFD } from '../text.utils';

describe('includesStringNormalized', () => {
  it('should return true when the normalized version of strToValidate is included in the normalized version of baseStr', () => {
    const baseStr = 'Crème Brûlée';
    const strToValidate = 'creme';
    const result = includesStringNormalized(baseStr, strToValidate);

    expect(result).toBe(true);
  });

  it('should return true when the normalized version of strToValidate is included in the normalized version of baseStr (with diacritical marks)', () => {
    const baseStr = 'Schrödinger';
    const strToValidate = 'schrodinger';
    const result = includesStringNormalized(baseStr, strToValidate);

    expect(result).toBe(true);
  });

  it('should return true when the normalized version of strToValidate is included in the normalized version of baseStr (with non-ASCII characters)', () => {
    const baseStr = 'Mañana';
    const strToValidate = 'mana';
    const result = includesStringNormalized(baseStr, strToValidate);

    expect(result).toBe(true);
  });

  it('should return true when the normalized version of strToValidate is included in the normalized version of baseStr (with accented characters)', () => {
    const baseStr = 'Résumé';
    const strToValidate = 'resume';
    const result = includesStringNormalized(baseStr, strToValidate);

    expect(result).toBe(true);
  });

  it('should return false when the normalized version of strToValidate is not included in the normalized version of baseStr', () => {
    const baseStr = 'Hello';
    const strToValidate = 'world';
    const result = includesStringNormalized(baseStr, strToValidate);

    expect(result).toBe(false);
  });
});

describe('normalizeStringNFD', () => {
  it('should normalize a string and remove diacritical marks', () => {
    const str = 'Crème Brûlée';
    const normalizedStr = normalizeStringNFD(str);

    expect(normalizedStr).toBe('Creme Brulee');
  });

  it('should normalize a string with diacritical marks and remove them', () => {
    const str = 'Schrödinger';
    const normalizedStr = normalizeStringNFD(str);

    expect(normalizedStr).toBe('Schrodinger');
  });

  it('should normalize a string with non-ASCII characters and remove diacritical marks', () => {
    const str = 'Mañana';
    const normalizedStr = normalizeStringNFD(str);

    expect(normalizedStr).toBe('Manana');
  });

  it('should normalize a string with accented characters and remove diacritical marks', () => {
    const str = 'Résumé';
    const normalizedStr = normalizeStringNFD(str);

    expect(normalizedStr).toBe('Resume');
  });
});

describe('formatCompactNumber', () => {
  it('should format 1382 to 1.4K', () => {
    const formattedNum = formatCompactNumber(1382);

    expect(formattedNum).toBe('1.4K');
  });

  it('should format 2354 to 2.4K', () => {
    const formattedNum = formatCompactNumber(2354);

    expect(formattedNum).toBe('2.4K');
  });

  it('should format 2500 to 2.5K', () => {
    const formattedNum = formatCompactNumber(2500);

    expect(formattedNum).toBe('2.5K');
  });

  it('should format 1,000,000 to 1M', () => {
    const formattedNum = formatCompactNumber(1_000_000);

    expect(formattedNum).toBe('1M');
  });

  it('should format a 1,000,000,000 to 1B', () => {
    const formattedNum = formatCompactNumber(1_000_000_000);

    expect(formattedNum).toBe('1B');
  });
});
