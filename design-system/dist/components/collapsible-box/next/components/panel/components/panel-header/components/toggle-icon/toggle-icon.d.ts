import { WithTestId } from '../../../../../../../../../interfaces/common.interfaces';
export interface ToggleIconProps extends WithTestId {
    $expanded?: boolean;
}
/**
 * Component that renders a toggleable icon button.
 * The button displays a `ChevronUp` or `ChevronDown` icon depending on the `$expanded` state.
 */
export declare const ToggleIcon: ({ $expanded, "data-testid": dataTestId, }: ToggleIconProps) => JSX.Element;
