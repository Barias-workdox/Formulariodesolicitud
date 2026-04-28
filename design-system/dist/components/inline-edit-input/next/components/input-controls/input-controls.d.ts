import { InlineEditInputMode } from '../../inline-edit-input.interfaces';
import { WithTestId, WithZIndex } from '../../../../../interfaces/common.interfaces';
export type InputControlsProps = WithZIndex & WithTestId & {
    mode: InlineEditInputMode;
    disabled?: boolean;
    readOnly?: boolean;
    submitDisabled?: boolean;
    onCancel?(): void;
    onEdit?(): void;
    onSubmit?(): void;
};
/**
 * Component that renders the input controls for the inline edit input.
 * It includes buttons for editing, submitting, and canceling the edit.
 */
export declare const InputControls: ({ "data-testid": dataTestId, disabled, mode, onCancel, onEdit, onSubmit, readOnly, submitDisabled, zIndex, }: InputControlsProps) => JSX.Element;
