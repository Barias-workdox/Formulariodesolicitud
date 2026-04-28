import { GetOverridesProps } from './button.styles.interfaces';
import { ButtonOverrides } from 'baseui/button';
/**
 * Returns the complete BaseUI overrides object for the Button component.
 * Generates all necessary style overrides for BaseUI Button including
 * the base button, enhancers, and loading spinner components.
 */
export declare const getOverrides: ({ dataTestId, isLoading, disabled, fullWidth, size, kind, appearance, }: GetOverridesProps) => ButtonOverrides;
