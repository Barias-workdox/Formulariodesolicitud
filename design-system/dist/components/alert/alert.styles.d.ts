import { AlertKind } from './alert';
import { DesignSystemTheme } from '../../themes';
import { StyleObject } from 'styletron-react';
interface AlertColors {
    background: string;
    border: string;
    text: string;
    outline: string;
}
/**
 * Retrieves the color set for a given alert kind from the theme.
 */
export declare const getColors: (theme: DesignSystemTheme, kind: AlertKind) => AlertColors;
/**
 * Generates the container styles for an alert using the provided color set.
 */
export declare const containerStyles: (colors: AlertColors) => StyleObject;
export {};
