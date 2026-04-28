import { ButtonSize } from './button.interfaces';
/** Size-specific configuration for button dimensions and typography */
export declare const SIZE_CONFIG: Record<ButtonSize, {
    height: string;
    padding: 'spacingXs' | 'spacingMd';
    fontSize: string;
}>;
/** CSS properties that transition on state changes */
export declare const TRANSITION_PROPERTIES: readonly ["background-color", "border-color", "color", "box-shadow", "outline-color"];
/** Responsive size mapping */
export declare const RESPONSIVE_SIZE_MAP: Record<ButtonSize, ButtonSize>;
export declare const ENHANCER_SIZE: {
    readonly "32px": "16px";
    readonly "44px": "20px";
};
