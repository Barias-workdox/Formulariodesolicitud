import { CaptionInputProps } from './components/caption-input/caption-input';
import { EditInputProps } from './components/edit-input/edit-input';
import { IconSize, InlineEditInputColors } from './inline-edit-input.interfaces';
import { ZIndexType } from '../../interfaces/common.interfaces';
import { OverrideObject } from '../../themes/theme.interfaces';
export type InlineEditInputMode = 'caption' | 'input';
export interface InlineEditInputOverrides {
    Root?: OverrideObject<object>;
    Caption?: OverrideObject<CaptionInputProps>;
    EditInput?: OverrideObject<EditInputProps>;
}
export interface InlineEditInputProps {
    /** Optional data-testid attribute for testing purposes. */
    'data-testid'?: string;
    /** The text to display as the caption. */
    captionText: string;
    /** Optional size of the icon. */
    iconSize?: IconSize;
    /** Optional object containing the colors for the icons. */
    colors?: InlineEditInputColors;
    /** The current text of the input. */
    inputText: string;
    /** The current mode of the component, either 'caption' or 'input'. */
    mode: InlineEditInputMode;
    /** Optional loading state of the component. */
    isLoading?: boolean;
    /** Optional disabled state of the component. */
    disabled?: boolean;
    /**
     * @deprecated - used by legacy views only.
     * Optional zIndex value for the component.
     */
    zIndex?: ZIndexType;
    /** Optional overrides for the component. */
    overrides?: InlineEditInputOverrides;
    /**
     * Function to call when the input value changes.
     *
     * @param newValue - The new value of the input.
     */
    onChange(newValue: string): void;
    /** Function to call when the input is submitted. */
    onSubmit(): void;
    /** Function to call to toggle between caption and input mode. */
    onToggle(): void;
}
/**
 * A Styled Stateful component for title name. It should:
 *   - show a caption with an icon. On hover will display a tooltip with the complete name and trim it to ui length.
 *   - on click, should change to an input editable that will save changes on submit icon press or ENTER keydown.
 *   - on ESC keydown or blur, it should change to caption and cancel every changes
 */
export declare const InlineEditInput: ({ "data-testid": dataTestId, colors, inputText, captionText, mode, iconSize, isLoading, disabled, zIndex, overrides, onChange, onSubmit, onToggle, }: InlineEditInputProps) => JSX.Element;
