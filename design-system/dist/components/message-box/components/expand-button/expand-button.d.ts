import { WithTestId } from '../../../../interfaces/common.interfaces';
export interface ExpandButtonProps extends WithTestId {
    isExpanded: boolean;
    onClick(): void;
}
/**
 * This component renders a button with an expand icon.
 * The icon rotates based on the `isExpanded` prop.
 */
export declare const ExpandButton: ({ "data-testid": dataTestId, isExpanded, onClick, }: ExpandButtonProps) => JSX.Element;
