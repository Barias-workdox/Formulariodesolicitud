import { WithTestId } from '../../../../../../interfaces/common.interfaces';
export type ItemLabelCounterProps = WithTestId & {
    isActive: boolean;
    disabled: boolean;
    counter?: number;
};
/**
 * `ItemLabelCounter` is a component used to display a counter or supplementary text
 * alongside a label in a navigation menu.
 *
 * This component adjusts its style based on the `isActive` and `disabled` states
 *
 * TODO: Replace this component with the new Tag component when it is developed.
 */
export declare const ItemLabelCounter: ({ dataTestId, isActive, disabled, counter, }: ItemLabelCounterProps) => JSX.Element;
