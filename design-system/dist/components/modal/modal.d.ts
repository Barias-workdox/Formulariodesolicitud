import { ModalProps as BaseModalProps } from 'baseui/modal';
export interface ModalProps extends Omit<BaseModalProps, 'onClose'> {
    /**
     * If false, will not render the close icon button. Defaults to true
     *
     * @deprecated - use the new `closeable` native property. Will be removed in the near future
     */
    showCloseButton?: boolean;
    /**
     * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
     *
     * @deprecated Only required for legacy support with `DocumentViewerModal`
     */
    zIndex?: number;
    onClose?(): void;
}
/**
 * Custom styled base ui component
 *
 * Has two predefined styles 'RegularModal' and 'SectionedModal' with custom headers, body, and footers
 */
export declare const Modal: ({ showCloseButton, closeable, zIndex, autoFocus, ...restProps }: ModalProps) => React.ReactElement;
