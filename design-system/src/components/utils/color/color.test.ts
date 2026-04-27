import {
  doesBrowserSupportsColorType,
  formatHexColor,
  hexToRgb,
  isValidHexColor,
} from './color.utils';

describe('color-utils - tests', () => {
  test('checks if the browser supports color type', () => {
    const result = doesBrowserSupportsColorType();

    expect(typeof result).toBe('boolean');
  });

  test('validates hex color values', () => {
    expect(isValidHexColor('#FFFFFF')).toBe(true);
    expect(isValidHexColor('#abc123')).toBe(true);
    expect(isValidHexColor('invalid')).toBe(false);
    expect(isValidHexColor(undefined)).toBe(false);
  });

  test('formats hex color values', () => {
    expect(formatHexColor('#FFFFFF')).toBe('#FFFFFF');
    expect(formatHexColor('abc123')).toBe('#abc123');
    expect(formatHexColor('#invalid')).toBe('#ad');
    expect(formatHexColor('xxxxx')).toBe('#');
  });

  test('converts hex color to RGB', () => {
    expect(hexToRgb('#FFFFFF')).toBe('rgb(255, 255, 255)');
    expect(hexToRgb('#abc123')).toBe('rgb(171, 193, 35)');
  });
});
