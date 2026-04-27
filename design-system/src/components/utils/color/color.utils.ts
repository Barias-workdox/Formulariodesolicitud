/**
 * Determines whether the current browser supports the HTML5 color input type.
 */
export function doesBrowserSupportsColorType(): boolean {
  const i = document.createElement('input');

  i.setAttribute('type', 'color');

  return i.type !== 'text';
}

/**
 * Determines whether a given string is a valid 6-digit hexadecimal color value.
 */
export function isValidHexColor(hex: string | undefined): boolean {
  return hex !== undefined && /^#[0-9A-F]{6}$/i.test(hex);
}

/**
 * Formats a hexadecimal color value string by removing any non-hexadecimal characters and ensuring it is exactly 6 characters long.
 */
export function formatHexColor(colorValue: string): string {
  return `#${colorValue
    .replace('#', '') // Remove # if already set
    .replace(/[^0-9a-fA-F]/g, '')
    .substr(0, 6)}`;
}

/**
 * Converts a hex color code to an RGB color code.
 */
export function hexToRgb(hexColor: string): string {
  // Remove any leading '#' character
  hexColor = hexColor.replace(/^#/, '');

  // Convert the hex code to a number
  const num = parseInt(hexColor, 16);

  // Extract the red, green, and blue components from the number
  const red = (num >> 16) & 255;
  const green = (num >> 8) & 255;
  const blue = num & 255;

  // Return the RGB color code as a string
  return `rgb(${red}, ${green}, ${blue})`;
}
