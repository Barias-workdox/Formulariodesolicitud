import { ReactElement } from 'react';
import { SwitchProps } from './switch.interface';
/**
 * A styled Switch component that functions as a controlled input with all required UI states.
 *
 * Features:
 * - Fully accessible with ARIA attributes and keyboard support
 * - Supports both title and description text
 * - Customizable label placement
 * - Disabled state handling
 * - Theme-aware styling
 * - Two text size variants: 14px (14px/12px) and 16px (16px/14px)
 * - Comprehensive accessibility support with ariaLabel, ariaLabelledBy, and ariaDescribedBy
 *
 * Accessibility:
 * - Provide an accessible name via title, ariaLabel, or ariaLabelledBy
 * - Use ariaDescribedBy to reference additional descriptive content
 * - Component automatically handles proper ARIA attributes for screen readers
 */
export declare const Switch: ({ dataTestId, description, checked, title, disabled, labelPlacement, variant, ariaLabel, ariaLabelledBy, ariaDescribedBy, onChange, }: SwitchProps) => ReactElement;
