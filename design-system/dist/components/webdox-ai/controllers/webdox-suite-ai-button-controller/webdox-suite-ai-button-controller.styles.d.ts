import { InformationPopoverOverrides } from '../../../information-popover/information-popover.interfaces';
import { DirectionType } from '../../interfaces';
import { PlacementType, WithZIndex } from '../../../../interfaces/common.interfaces';
type GetPopoverOverridesProps = WithZIndex<{
    isCollapsibleButtonOpen: boolean;
    placement: PlacementType;
    direction: DirectionType;
}>;
/**
 * Get the overrides for the popover.
 */
export declare const getPopoverOverrides: ({ isCollapsibleButtonOpen, placement, direction, zIndex, }: GetPopoverOverridesProps) => InformationPopoverOverrides;
export {};
