import { ButtonProps } from '../../button.interfaces';
export type BackButtonProps = Pick<ButtonProps, 'dataTestId' | 'onClick' | 'data-testid' | 'disabled' | 'isLoading'>;
/** Styled icon button with a left arrow, used to indicate go back action */
export declare function BackButton({ dataTestId, ...props }: BackButtonProps): JSX.Element;
