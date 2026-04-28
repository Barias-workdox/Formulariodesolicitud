import { ReactElement, ReactNode, Ref } from 'react';
import { LABEL_PLACEMENT, STYLE_TYPE, LabelPlacement } from 'baseui/checkbox';
export type LabelPlacementType = LabelPlacement;
export { LABEL_PLACEMENT, STYLE_TYPE };
export type SwitchProps = {
    'data-testid'?: string;
    children?: ReactNode;
    name?: string;
    /** Used to get a ref to the input element. Useful for focusing on validation errors */
    inputRef?: Ref<HTMLInputElement>;
    /** Sub label text such as subtitle under children node */
    description?: string;
    /** If Disabled, can not interact with user. Defaults to `false` */
    disabled?: boolean;
    /** If is loading, will show a spinner and cannot interact with user. Defaults to `false` */
    loading?: boolean;
    /** Where to put the Switch Label. Defaults to `right` */
    labelPlacement?: LabelPlacementType;
    /** Value of the Switch */
    checked?: boolean;
    /** Handle change callback when Switch is toggled. Works as a controlled input */
    onChange?(newValue: boolean): void;
};
/**
 * A Styled Switch, working as a controlled input with every required UI state
 */
export declare const Switch: ({ "data-testid": dataTestId, name, inputRef: externalInputRef, description, checked, children, loading, disabled, labelPlacement, onChange, }: SwitchProps) => ReactElement;
