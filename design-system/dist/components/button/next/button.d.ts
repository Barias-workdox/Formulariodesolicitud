import { ReactElement } from 'react';
import { ButtonProps } from './button.interfaces';
/**
 * Button component with design system integration.
 * Supports multiple visual variants, responsive behavior, and accessibility features.
 */
export declare const Button: ({ dataTestId, kind, appearance, type, fullWidth, disabled, isLoading, size, startEnhancer, endEnhancer, children, overrides, onClick, onKeyDown, ...rest }: ButtonProps) => ReactElement;
