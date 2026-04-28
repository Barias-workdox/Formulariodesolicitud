import { ReactElement } from 'react';
import { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import { ButtonProps } from '../../../button';
import { StatefulTooltipProps } from '../../../tooltip';
import { WithZIndex } from '../../../../interfaces/common.interfaces';
export type CopyToClipboardButtonState = 'default' | 'copied';
export interface CopyToClipboardButtonProps extends WithZIndex {
    'data-testid': string;
    /** Value to copy. */
    value: string | ClipboardItem;
    /** Override the default i18n tooltip text */
    tooltipText?: string;
    /** Override the default i18n tooltip text after the it is copied */
    copiedTooltipText?: string;
    /** Override the default i18n button text */
    buttonText?: string;
    /** Override the default i18n button text after the it is copied */
    copiedButtonText?: string;
    buttonSize?: ButtonProps['size'];
    /** Used to override the copy to clipboard component */
    children?: ReactElement | (({ buttonState }: {
        buttonState: CopyToClipboardButtonState;
    }) => ReactElement);
    /** All properties of the button. Used only if children is undefined */
    buttonProps?: Omit<ButtonProps, 'onClick'>;
    /** All properties of the tooltip. Used only if children is undefined */
    tooltipProps?: StatefulTooltipProps;
    buttonKind?: ButtonProps['kind'];
    /** After the clipboard is saved, this callback will trigger */
    onCopy?(isError?: boolean): void;
}
interface CopyToClipboardButtonStateType {
    /** Default i18n tooltip text key */
    tooltipTextKey?: string;
    /** The icon that will render in the icon button section */
    Icon: CarbonIconType;
    /** Will override the default i18n tooltipTextKey if supplied */
    mainTooltipText?: string;
    /** Will override the default i18n textKey if supplied */
    mainButtonText?: string;
    /** Default i18n text key to show in the button */
    textKey?: string;
}
/** Get the copy to clipboard button states with texts and icons required by the component */
export declare const getAllCopyToClipboardButtonStates: (tooltipText?: string, copiedTooltipText?: string, buttonText?: string, copiedButtonText?: string) => Record<CopyToClipboardButtonState, CopyToClipboardButtonStateType>;
/**
 * Allows to render a default icon button with a dynamic tooltip
 * and copies the text to clipboard. Also, a new children can be passed
 * to override the default component
 */
export declare const CopyToClipboardButton: ({ "data-testid": dataTestId, value, tooltipText: overrideTooltipText, copiedTooltipText: overrideCopiedTooltipText, buttonText: overrideButtonText, copiedButtonText: overrideCopiedButtonText, children, buttonProps, tooltipProps, zIndex, buttonKind, onCopy, }: CopyToClipboardButtonProps) => ReactElement;
export {};
