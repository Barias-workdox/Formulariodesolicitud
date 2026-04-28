import { BackgroundIconKind, BackgroundIconSize, BackgroundIconShape } from '../../background-icon.interfaces';
/**
 * Props for the styled badge root component.
 */
export interface StyledBadgeRootProps {
    /** The visual appearance variant of the parent BackgroundIcon */
    $shape: BackgroundIconShape;
    /** The kind of the parent BackgroundIcon (affects badge color) */
    $kind: BackgroundIconKind;
    /** The size of the parent BackgroundIcon (affects badge size and position) */
    $size: BackgroundIconSize;
}
/**
 * Styled component for the badge root container.
 * Positioned absolutely at the top-right corner of the BackgroundIcon.
 */
export declare const StyledBadgeRoot: import('styletron-react').StyletronComponent<"div", StyledBadgeRootProps>;
