import { SharedStylePropsArg } from 'baseui/modal';
export type ModalCloseButtonProps = SharedStylePropsArg & {
    canClose: boolean;
};
/** Styled Custom Close button for modal */
export declare function ModalCloseButton({ canClose, ...restProps }: ModalCloseButtonProps): JSX.Element;
