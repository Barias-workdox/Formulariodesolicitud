import { FooterMessageButtonProps } from './footer-message-button.interfaces';
/**
 * Get base brain button styles overrides
 */
export declare const baseOverrides: FooterMessageButtonProps['popoverOverrides'];
/**
 * Footer button with an integrated tooltip
 */
export declare const FooterMessageButton: ({ "data-testid": dataTestId, disabled, isLoading, tooltipText, zIndex, popoverOverrides, children, buttonKind, onClick, }: FooterMessageButtonProps) => JSX.Element;
