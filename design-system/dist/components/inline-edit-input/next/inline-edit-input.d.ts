import { InlineEditInputMode } from './inline-edit-input.interfaces';
import { InputProps } from '../../input/next';
import { WithZIndex } from '../../../interfaces/common.interfaces';
export type InlineEditInputProps = InputProps & WithZIndex & {
    mode?: InlineEditInputMode;
    onModeChange?(mode: InlineEditInputMode): void;
};
/**
 * InlineEditInput component for editing text inline.
 * It allows switching between caption and input modes.
 * In caption mode, it displays the text and an edit button.
 * In input mode, it allows the user to edit the text.
 */
export declare const InlineEditInput: ({ "data-testid": dataTestId, disabled, inputRef, kind, mode, onChange, onModeChange, overrides, readOnly, value, zIndex, ...rest }: InlineEditInputProps) => JSX.Element;
