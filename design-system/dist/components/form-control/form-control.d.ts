import { TextareaProps } from '../textarea';
import { WithZIndex } from '../../interfaces/common.interfaces';
import { FormControlProps as BaseWebFormControlProps } from 'baseui/form-control';
import { StyleObject } from 'styletron-standard';
interface BaseFormControlProps extends BaseWebFormControlProps {
    /** To include horizontal padding on label, default true */
    labelWithHorizontalPadding?: boolean;
    /** If supplied, will render an info icon with a tooltip with this caption on the Form control label right side */
    infoTooltip?: string | JSX.Element;
    /**
     * Custom Overrides for every component section in StyleObject form
     *
     * @deprecated use the `overrides` props instead
     */
    customOverrides?: {
        Caption?: StyleObject;
    };
    /** Counting the number of characters typed in a text box component  */
    currentCharactersQuantity?: number;
    /** Maximum allowable length character */
    maxLength?: TextareaProps['maxLength'];
    /**
     * To display the character count in the right section of the label.
     * It will display the current number of characters / max allowed quantity of characters
     */
    showCharacterCounter?: boolean;
    /**
     * When set to `true`, this property indicates that the form control should be rendered
     * without any margins, resulting in a more compact appearance. This can be particularly
     * useful in situations where a denser layout is desired or where space constraints are
     * a concern. When applied, it removes external margins from the form control container
     * and adjusts the bottom margin of the caption element, ensuring a tighter alignment
     * with surrounding UI elements.
     */
    noExternalMargins?: boolean;
    /** If true, the form control is required and shows an asterisk. */
    required?: boolean;
}
export type FormControlProps = WithZIndex<BaseFormControlProps>;
/**
 * Styled component for every form controls. It consist in a label above and a caption below
 * the Control. Also, it works with states all states like `error` and `positive`
 *
 * If showCharacterCounter, maxLength and currentCharactersQuantity are supplied,
 * the character count is displayed on the label.
 */
export declare function FormControl({ overrides, currentCharactersQuantity, infoTooltip, labelWithHorizontalPadding, maxLength, showCharacterCounter, customOverrides, noExternalMargins, zIndex, required, ...rest }: FormControlProps): React.ReactElement;
export {};
