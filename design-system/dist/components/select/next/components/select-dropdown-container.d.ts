import { Optgroups } from 'baseui/select';
/**
 * Partial property definitions for customizing the appearance and behavior of `StyledDropdownContainer`.
 *
 * These properties are intended for overriding styles and behavior in the 'baseui/select' component.
 */
export type DropdownContainerProps = {
    /**
     * The properties and items to be displayed in the dropdown container.
     */
    children: {
        props: {
            /**
             * An object containing dropdown items organized in optgroups.
             */
            items: Optgroups;
        };
    };
};
/**
 * Custom dropdown container for a select component.
 *
 * This component is used as a container for rendering dropdown items in a select component.
 */
export declare const SelectDropdownContainer: import('react').ForwardRefExoticComponent<import('react').RefAttributes<HTMLDivElement>>;
