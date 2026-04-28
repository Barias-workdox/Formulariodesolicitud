import { ButtonProps } from '../../../button/button.interfaces';
export type WebdoxAIButtonProps = Pick<ButtonProps, 'data-testid' | 'disabled' | 'isLoading' | 'onClick'> & {
    hasError?: boolean;
};
/** Component that displays an animated button to use it in WebdoxAI pages. */
export declare const WebdoxAIButton: import('react').ForwardRefExoticComponent<Pick<ButtonProps, "disabled" | "onClick" | "data-testid" | "isLoading"> & {
    hasError?: boolean;
} & import('react').RefAttributes<HTMLButtonElement>>;
