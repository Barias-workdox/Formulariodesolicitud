import { FormControlProps } from '../../form-control';
import { WithZIndex } from '../../../../interfaces/common.interfaces';
export interface FormControlLabelProps extends WithZIndex {
    /** To include horizontal padding on label, default true */
    labelWithHorizontalPadding?: FormControlProps['labelWithHorizontalPadding'];
    /** If supplied, will render an info icon with a tooltip with this caption on the Form control label right side */
    infoTooltip?: FormControlProps['infoTooltip'];
    /** To display the character count */
    showCharacterCounter?: boolean;
    /** Maximum allowable length character */
    maxLength?: number;
    /** Counting the number of characters typed in a text box component  */
    currentCharactersQuantity?: number;
    label: FormControlProps['label'];
    disabled?: FormControlProps['disabled'];
    /** Wether should apply the bottom margin */
    hasMargin?: boolean;
    /** To display an asterisk to indicate required fields. */
    required?: boolean;
}
/**
 * Styled label component to be used in the form controls
 *
 * Render a info icon with a tooltip when the property `infoTooltip` is supplied,
 * can also display a label with the maximum allowable character length value
 */
export declare const FormControlLabel: ({ label, showCharacterCounter, maxLength, currentCharactersQuantity, infoTooltip, zIndex, required, }: FormControlLabelProps) => JSX.Element;
