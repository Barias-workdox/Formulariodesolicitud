import { WithTestId } from '../../../../../../../interfaces/common.interfaces';
export interface CompoundTitleProps extends WithTestId {
    $expanded?: boolean;
}
/**
 * Component that renders a compound title with optional dividers between its child elements.
 * It supports custom props for child elements and adjusts their appearance based on the `$expanded` prop.
 */
export declare const CompoundTitle: import('react').ForwardRefExoticComponent<CompoundTitleProps & {
    children?: import('react').ReactNode | undefined;
} & import('react').RefAttributes<HTMLDivElement>>;
