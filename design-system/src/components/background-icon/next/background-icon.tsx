import { useMemo } from 'react';

import {
  BACKGROUND_ICON_DEFAULTS,
  BACKGROUND_ICON_SIZE_MAP,
  BACKGROUND_ICON_TEST_ID,
  BACKGROUND_ICON_COLORS,
  DISABLED_COLORS,
} from './background-icon.constants';
import { StyledIconWrapper, StyledRoot } from './background-icon.styles';
import { Badge } from './components/badge/badge';

import type { BackgroundIconKind, BackgroundIconProps } from './background-icon.interfaces';

/**
 * Type guard to check if a kind supports badge functionality.
 * Only 'brand' and 'neutral' kinds can display badges.
 */
const isBadgeEnabledKind = (kind: BackgroundIconKind): kind is 'brand' | 'neutral' => {
  return kind === 'brand' || kind === 'neutral';
};

/**
 * BackgroundIcon component (Next version)
 * A decorative component that displays a Carbon icon within a colored background container.
 * Supports multiple sizes, semantic colors, visual appearances, and optional badge indicators.
 */
export const BackgroundIcon = ({
  dataTestId = BACKGROUND_ICON_TEST_ID,
  icon: Icon,
  size = BACKGROUND_ICON_DEFAULTS.size,
  kind = BACKGROUND_ICON_DEFAULTS.kind,
  appearance = BACKGROUND_ICON_DEFAULTS.appearance,
  shape = BACKGROUND_ICON_DEFAULTS.shape,
  disabled = false,
  badge,
}: BackgroundIconProps): JSX.Element => {
  const colors = useMemo(
    () => (disabled ? DISABLED_COLORS : BACKGROUND_ICON_COLORS[kind][appearance]),
    [disabled, kind, appearance],
  );

  const { iconSize } = BACKGROUND_ICON_SIZE_MAP[size];

  const shouldShowBadge = badge && isBadgeEnabledKind(kind);

  return (
    <StyledRoot
      data-testid={`${dataTestId}--wrapper`}
      $backgroundColor={colors.backgroundColor}
      $size={size}
      $shape={shape}
      $disabled={disabled}
      aria-hidden="true"
      role="presentation"
    >
      <StyledIconWrapper
        data-testid={`${dataTestId}--icon`}
        $iconColor={colors.iconColor}
        $disabled={disabled}
      >
        <Icon
          size={iconSize}
          aria-hidden="true"
        />
      </StyledIconWrapper>

      {shouldShowBadge && (
        <Badge
          kind={kind}
          size={size}
          shape={shape}
          data-testid={`${dataTestId}--badge`}
        />
      )}
    </StyledRoot>
  );
};
