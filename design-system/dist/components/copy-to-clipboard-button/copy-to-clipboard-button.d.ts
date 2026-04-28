import { ReactElement } from 'react';
import { StatefulTooltipProps } from '../tooltip';
import { IconButtonProps } from '../button/variants/icon-button/icon-button.interfaces';
export type CopyToClipboardButtonState = 'default' | 'copied';
export interface CopyToClipboardButtonProps {
    'data-testid': string;
    /** Text to copy to clipboard */
    text: string;
    /** Override the default i18n tooltip text */
    tooltipText?: string;
    /** Override the default i18n tooltip text after the it is copied */
    copiedTooltipText?: string;
    buttonKind?: IconButtonProps['kind'];
    buttonSize?: IconButtonProps['size'];
    /** Used to override the copy to clipboard component */
    children?: ReactElement;
    /** All properties of the icon button. Used only if children is undefined */
    iconButtonProps?: Omit<IconButtonProps, 'onClick'>;
    /** All properties of the tooltip. Used only if children is undefined */
    tooltipProps?: StatefulTooltipProps;
    /**
     * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
     *
     * @deprecated Only required for legacy support with `DocumentViewerModal`
     */
    zIndex?: number;
    /** After the clipboard is saved, this callback will trigger */
    onCopy?(isError?: boolean): void;
}
/**
 * Allows to render a default icon button with a dynamic tooltip
 * and copies the text to clipboard. Also, a new children can be passed
 * to override the default component
 */
export declare const CopyToClipboardButton: ({ "data-testid": dataTestId, text, tooltipText: overrideTooltipText, copiedTooltipText: overrideCopiedTooltipText, buttonKind, buttonSize, children, iconButtonProps, tooltipProps, zIndex, onCopy, }: CopyToClipboardButtonProps) => ReactElement;
