import { SyntheticEvent } from 'react';
import { DesignSystemTheme } from '../../../../themes';
import { InputProps } from '../../../input';
import { InlineEditInputProps } from '../../inline-edit-input';
import { IconButtonProps } from '../../../button/variants/icon-button/icon-button.interfaces';
import { IconSize, InlineEditInputColors } from '../../inline-edit-input.interfaces';
import { OverrideObject } from '../../../../themes/theme.interfaces';
import { InputOverrides } from 'baseui/input';
interface EditInputOverrides {
    Input?: OverrideObject<InputProps>;
    SubmitIconButton?: OverrideObject<IconButtonProps>;
    CancelIconButton?: OverrideObject<IconButtonProps>;
}
export interface EditInputProps extends Pick<InlineEditInputProps, 'inputText' | 'onChange' | 'onSubmit'> {
    disabled: Required<InlineEditInputProps['disabled']>;
    'data-testid': string;
    colors?: Pick<InlineEditInputColors, 'cancelIcon' | 'checkIcon'>;
    iconSize?: IconSize;
    isInvalidValue: boolean;
    overrides?: EditInputOverrides;
    onKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void;
    onCancelClick(a: SyntheticEvent<HTMLButtonElement, Event>): void;
}
/** Text input component overrides */
export declare const inputOverridesStyles: (theme: DesignSystemTheme) => InputOverrides;
/**
 * Input editable component that will save changes on submit
 */
export declare const EditInput: ({ "data-testid": dataTestId, inputText, disabled, colors, iconSize, isInvalidValue, overrides, onChange, onKeyDown, onSubmit, onCancelClick, }: EditInputProps) => JSX.Element;
export {};
