import { DesignSystemTheme } from '../../../../themes';
import { SpinnerProps } from '../../../spinner';
import { TextProps } from '../../../text';
import { InlineEditInputProps } from '../../inline-edit-input';
import { IconButtonProps } from '../../../button/variants/icon-button/icon-button.interfaces';
import { IconSize, InlineEditInputColors } from '../../inline-edit-input.interfaces';
import { StatefulTooltipNextProps } from '../../../tooltip-next';
import { OverrideObject } from '../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
export interface CaptionInputPropsOverrides {
    Tooltip?: OverrideObject<StatefulTooltipNextProps>;
    Text?: OverrideObject<TextProps>;
    IconButton?: OverrideObject<IconButtonProps>;
    Spinner?: OverrideObject<SpinnerProps>;
}
export interface CaptionInputProps extends Pick<InlineEditInputProps, 'captionText' | 'onToggle' | 'zIndex'> {
    disabled: Required<InlineEditInputProps['disabled']>;
    iconSize?: IconSize;
    colors?: Pick<InlineEditInputColors, 'editIcon'>;
    isLoading: Required<InlineEditInputProps['isLoading']>;
    'data-testid': string;
    overrides?: CaptionInputPropsOverrides;
    onCaptionClick(): void;
}
export declare const styles: {
    captionTextStyles: (theme: DesignSystemTheme) => StyleObject;
    spinnerContainerStyles: StyleObject;
};
/**
 * Input caption with an icon. On hover will display a tooltip with the complete name
 */
export declare const CaptionInput: ({ "data-testid": dataTestId, captionText, zIndex, disabled, colors, iconSize, isLoading, overrides, onCaptionClick, onToggle, }: CaptionInputProps) => JSX.Element;
