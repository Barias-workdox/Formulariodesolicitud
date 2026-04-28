import { ThemeOverrides } from '../theme.interfaces';
/** BaseUI typography key mapping shared by all v3 themes */
declare const typography: ThemeOverrides['typography'];
/** Spacing tokens with support for deprecated versions */
declare const spacing: ThemeOverrides['spacing'];
/** Border tokens with support for deprecated versions */
declare const borders: ThemeOverrides['borders'];
declare const baseOverrides: Pick<ThemeOverrides, 'typography' | 'lighting' | 'spacing' | 'borders' | 'elevations'>;
export { typography, spacing, borders, baseOverrides };
