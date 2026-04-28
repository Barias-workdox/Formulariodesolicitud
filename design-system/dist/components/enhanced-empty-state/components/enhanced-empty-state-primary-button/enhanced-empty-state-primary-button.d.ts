import { ReactElement } from 'react';
import { ButtonProps } from '../../../button';
export type EnhancedEmptyStatePrimaryButtonProps = Pick<ButtonProps, 'children' | 'data-testid' | 'onClick' | 'startEnhancer' | 'disabled'>;
/**
 * A button component for desktop view.
 */
export declare const DesktopButton: ({ "data-testid": dataTestId, children, ...others }: EnhancedEmptyStatePrimaryButtonProps) => ReactElement;
/**
 * A button component for mobile view.
 */
export declare const MobileButton: ({ "data-testid": dataTestId, children, ...others }: EnhancedEmptyStatePrimaryButtonProps) => ReactElement;
/**
 * A component to render primary button for enhanced empty state.
 */
export declare const EnhancedEmptyStatePrimaryButton: ({ "data-testid": dataTestId, children, onClick, startEnhancer, disabled, }: EnhancedEmptyStatePrimaryButtonProps) => ReactElement;
