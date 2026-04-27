export const spacingBase = 0.125;

export const unitType = 'rem';

/**
 * A utility function to convert a numerical value to a spacing unit.
 */
export function spacing(value: number): string {
  return value * spacingBase + unitType;
}
