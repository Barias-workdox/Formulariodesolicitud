import { convertCssUnitToPx } from '../styles.utils';

describe('convertCssUnitToPx', () => {
  const originalGetComputedStyle = window.getComputedStyle;

  afterEach(() => {
    window.getComputedStyle = originalGetComputedStyle;
  });

  it('should return the number itself if the value is a number', () => {
    expect(convertCssUnitToPx(100)).toBe(100);
  });

  it('should return the fallback value for undefined, null, or empty string', () => {
    expect(convertCssUnitToPx(undefined)).toBe(0);
    expect(convertCssUnitToPx(null)).toBe(0);
    expect(convertCssUnitToPx('')).toBe(0);
  });

  it('should use the custom fallback value when provided', () => {
    expect(convertCssUnitToPx(undefined, 10)).toBe(10);
    expect(convertCssUnitToPx('invalid-value', 25)).toBe(25);
  });

  it('should correctly parse pixel values from a string', () => {
    expect(convertCssUnitToPx('150px')).toBe(150);
    expect(convertCssUnitToPx('0px')).toBe(0);
    expect(convertCssUnitToPx('12.5px')).toBe(12.5);
  });

  it('should return the fallback for invalid pixel units', () => {
    expect(convertCssUnitToPx('abcpx', 5)).toBe(5);
  });

  it('should convert "rem" units to pixels based on the root font size', () => {
    window.getComputedStyle = vi.fn().mockImplementation((element) => {
      if (element.style.width === '2rem') {
        return { width: '32px' };
      }
      if (element.style.width === '1.5rem') {
        return { width: '15px' };
      }

      return originalGetComputedStyle(element);
    });

    expect(convertCssUnitToPx('2rem')).toBe(32);
    expect(convertCssUnitToPx('1.5rem')).toBe(15);
  });

  it('should convert "vw" units to pixels based on the viewport width', () => {
    window.getComputedStyle = vi.fn().mockImplementation((element) => {
      if (element.style.width === '10vw') {
        return { width: '120px' };
      }
      if (element.style.width === '50vw') {
        return { width: '400px' };
      }

      return originalGetComputedStyle(element);
    });
    expect(convertCssUnitToPx('10vw')).toBe(120);
    expect(convertCssUnitToPx('50vw')).toBe(400);
  });

  it('should return the fallback value for unknown or unsupported units', () => {
    window.getComputedStyle = vi.fn().mockImplementation((element) => {
      if (element.style.width === '100parsecs') {
        return { width: '' };
      }
      if (element.style.width === '50%') {
        return { width: '50px' };
      }

      return originalGetComputedStyle(element);
    });

    expect(convertCssUnitToPx('100parsecs', 10)).toBe(10);
    expect(convertCssUnitToPx('50%', 50)).toBe(50);
  });
});
