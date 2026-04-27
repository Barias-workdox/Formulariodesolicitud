import type { MouseEvent, PropsWithChildren } from 'react';

import type { SvgComponentType } from '../../../types/svg-component.interface';
import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { DesignSystemColorType } from '@themes';
import type { StyleObject } from 'styletron-react';

/**
 * Visual appearance of the tag (appearance).
 * - 'outlined': border only.
 * - 'light': subtle background.
 */
export type TagVariant = 'outlined' | 'light';

/**
 * Semantic intent and color of the tag.
 */
export type TagKind =
  | 'positive'
  | 'negative'
  | 'warning'
  | 'neutral'
  | 'peace'
  | 'power'
  | 'brand'
  | 'ai';

/**
 * Tag sizes (height):
 * - sm: 20px (small)
 * - md: 24px (medium)
 * - lg: 32px (large)
 */
export type TagSize = 'sm' | 'md' | 'lg';

/**
 * Tag shape.
 * - 'rounded': rounded corners.
 * - 'pill': capsule style.
 */
export type TagShape = 'rounded' | 'pill';

/**
 * Tag component props.
 *
 * - variant: visual appearance of the tag (see TagVariant).
 * - size: sm (20px) | md (24px).
 * - shape: border shape of the tag.
 * - kind: semantic color.
 * - disabled: disables interactions.
 * - icon: optional left icon (Carbon or custom SVG).
 * - showAction: shows an action button on the right. When true, the tag itself is not clickable (clickable = !showAction).
 * - actionIcon: icon for the action button (Carbon).
 * - zIndex: z-index of the main container.
 * - onClick: callback when the tag is clicked (when showAction is false, the tag itself is clickable).
 * - children: textual content or nested nodes.
 */
export type TagProps = PropsWithChildren<
  WithTestId<{
    $style?: StyleObject;
    kind: TagKind;
    variant: TagVariant;
    shape?: TagShape;
    disabled?: boolean;
    size?: TagSize;
    icon?: CarbonIconType | SvgComponentType;
    showAction?: boolean;
    actionIcon?: CarbonIconType;
    zIndex?: number;
    onClick?(event?: MouseEvent<HTMLButtonElement | HTMLDivElement>): void;
  }>
>;

/**
 * Shared props for styling (styled-components).
 */
export interface SharedTagProps {
  $variant?: TagVariant;
  $kind?: TagKind;
  $size?: TagSize;
  $shape?: TagShape;
  $disabled?: boolean;
  $clickable?: boolean; // Derived from !showAction, used internally for styling
}

/**
 * Color group applied to the tag.
 */
export interface ColorGroup {
  borderColor: DesignSystemColorType;
  color: DesignSystemColorType;
  backgroundColor: DesignSystemColorType;
}

/**
 * Color schema per UI state for a Tag.
 * - default: full color group (bg, text, border)
 * - hover/focus: only bg and border change; text/icon remain the same
 */
export interface TagStateColors {
  default: ColorGroup;
  hover: Pick<ColorGroup, 'backgroundColor' | 'borderColor'>;
  focus: Pick<ColorGroup, 'backgroundColor' | 'borderColor'>;
}
