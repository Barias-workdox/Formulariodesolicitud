import { AvatarProps } from '../avatar';
import { WithTestId } from '../../interfaces/common.interfaces';
export type MultipleAvatarsVariant = 'default' | 'brain' | 'groups' | 'companies';
export interface MultipleAvatarsProps extends WithTestId, Pick<AvatarProps, 'zIndex' | 'showTooltip' | 'size'> {
    /** An array of avatar objects, each containing a name and optionally background color and initials. */
    avatars: (Pick<AvatarProps, 'name'> & Partial<Pick<AvatarProps, 'backgroundColor' | 'initials'>>)[];
    /** The variant style of the avatars, defaulting to 'default'. */
    variant?: MultipleAvatarsVariant;
}
/** Generates a string representing the number of additional avatars beyond the maximum allowed. */
export declare const getAvatarCounter: (avatarNumber: number) => string;
/**
 * The MultipleAvatars component displays a group of avatars, with an optional tooltip showing the names
 * of additional avatars if they exceed a certain count.
 */
export declare const MultipleAvatars: ({ avatars, "data-testid": dataTestId, variant, size, zIndex, showTooltip, }: MultipleAvatarsProps) => JSX.Element;
