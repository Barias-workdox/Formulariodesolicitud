import { FormControlProps } from '../../../form-control';
import { TextareaProps } from '../../../textarea';
import { ControllerProps } from 'react-hook-form';
export type TextareaControlProps = Omit<FormControlProps, 'children'> & TextareaProps & Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
};
/**
 * Component that requires a controller from the form context and implements Textarea form control
 * from DS
 */
export declare const TextareaControl: ({ "data-testid": dataTestId, name, label, disabled, caption, control, defaultValue, infoTooltip, showCharacterCounter, labelWithHorizontalPadding, maxLength, formControlOverrides, currentCharactersQuantity, noExternalMargins, required, ...rest }: TextareaControlProps) => JSX.Element;
