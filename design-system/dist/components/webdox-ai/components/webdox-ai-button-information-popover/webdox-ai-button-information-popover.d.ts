import { InformationPopoverCommonProps, PopoverVariant } from './webdox-ai-button-information-popover.interfaces';
export interface WebdoxAIButtonInformationPopoverProps extends Omit<InformationPopoverCommonProps, 'isOpen' | 'close'> {
    variant: PopoverVariant;
    isOpen: boolean;
    onClose(): void;
    onOpen?(): void;
}
/**
 * A component that renders an information popover based on the provided variant.
 *
 * @deprecated - This component is deprecated because it does not preserve the instance of
 * its children, causing issues with animations and state retention.
 * Use the new `WebdoxAIButtonInformationPopover` component instead located in the file `./next`,
 * which resolves these issues and provides better performance.
 */
export declare const WebdoxAIButtonInformationPopover: ({ "data-testid": dataTestId, user, variant, children, overrides, isOpen, onClose, onOpen, ...rest }: WebdoxAIButtonInformationPopoverProps) => JSX.Element;
