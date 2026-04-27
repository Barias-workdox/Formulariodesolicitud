import type { PropsWithChildren } from 'react';

import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { CommonHeight } from '@constants/common.constants';
import type { SvgIconComponent, WithTestId } from '@interfaces/common.interfaces';
import type { DesignSystemColorType } from '@themes';
import type { OverrideObject, Overrides } from '@themes/theme.interfaces';

export type BackgroundIconShape = 'square' | 'round';

/**
 * Props for the styled root component of the BackgroundIcon.
 */
export interface StyledRootProps {
  /** The background color of the root element. */
  $backgroundColor: DesignSystemColorType;
  /** The size of the root element. */
  $size: CommonHeight;
  /** The shape of the root element, either 'square' or 'round'. */
  $shape: BackgroundIconShape;
  /** Indicates whether the component is disabled. */
  $disabled: boolean;
  /** Indicates whether the component is clickable. */
  $isClickable: boolean;
}

export interface BackgroundIconOverrides extends Overrides {
  Root?: OverrideObject<StyledRootProps>;
}

export type BackgroundIconProps = WithTestId &
  PropsWithChildren<{
    /** The background color of the icon. */
    backgroundColor?: DesignSystemColorType;
    /** Indicates whether the background icon is disabled. */
    disabled?: boolean;
    /** The icon component to be rendered. If it is `undefined`, the children will be rendered instead. */
    Icon?: CarbonIconType | SvgIconComponent;
    /** The color of the icon. */
    iconColor?: DesignSystemColorType;
    /** Custom overrides for the component styles. */
    overrides?: BackgroundIconOverrides;
    /** The shape of the background icon, either 'square' or 'round'. */
    shape?: BackgroundIconShape;
    /** The size of the background icon. */
    size?: CommonHeight;
    /** The role of the background icon. */
    role?: string;
    /** The aria-expanded attribute of the background icon. */
    ariaExpanded?: boolean;
    /** The aria-controls attribute of the background icon. */
    ariaControls?: string;
    /** The aria-label attribute of the background icon. */
    ariaLabel?: string;
    /** The tabIndex attribute of the background icon. */
    tabIndex?: number;
    /** Click handler for the background icon. */
    onClick?(): void;
  }>;
