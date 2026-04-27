import { useMemo } from 'react';

import { mergeOverrides } from 'baseui';
import { Avatar as BaseAvatar } from 'baseui/avatar';

import { StatefulTooltipNext } from '@components/tooltip-next';
import { COMMON_HEIGHT_32 } from '@constants/common.constants';

import { getAvatarOverrides, getAvatarColorConfig, processInitials } from './avatar.overrides';
import { AvatarAnchor } from './avatar.styles';

import type { AvatarProps } from './avatar.interface';
import type { AvatarOverrides } from 'baseui/avatar';

/**
 * The `Avatar` component displays a user's avatar with customizable properties such as
 * background color, size, kind, appearance, and optional disabled state.
 */
export const Avatar = ({
  dataTestId = 'avatar',
  disabled,
  size = COMMON_HEIGHT_32,
  initials,
  name = '',
  overrides,
  zIndex,
  src,
  kind = 'users',
  appearance = 'filled',
  clickable = false,
  onClick,
  href,
  showTooltip = true,
}: AvatarProps): JSX.Element => {
  // Get color configuration from kind and appearance
  const colorConfig = useMemo(() => {
    return getAvatarColorConfig(kind, appearance);
  }, [kind, appearance]);

  // Process initials based on avatar size, with name as fallback
  const processedInitials = useMemo(() => {
    return processInitials(initials, size, name);
  }, [initials, size, name]);

  const mergedOverrides: AvatarOverrides = useMemo(() => {
    const customOverrides = getAvatarOverrides({
      backgroundColor: colorConfig.backgroundColor,
      textColor: colorConfig.textColor,
      disabled: Boolean(disabled),
      dataTestId,
      size,
      clickable: Boolean(clickable),
      name,
    });

    return mergeOverrides(customOverrides, overrides);
  }, [
    colorConfig.backgroundColor,
    colorConfig.textColor,
    disabled,
    dataTestId,
    size,
    clickable,
    name,
    overrides,
  ]);

  const baseAvatarComponent = (
    <BaseAvatar
      size={size}
      initials={processedInitials}
      name={name}
      src={src}
      overrides={mergedOverrides}
    />
  );

  /**
   * Helper function to wrap avatar with appropriate interactive element
   */
  const renderAvatarWithWrapper = (): JSX.Element => {
    if (href) {
      return (
        <AvatarAnchor
          $as="a"
          href={href}
          onClick={clickable ? onClick : undefined}
          aria-disabled={disabled}
          data-testid={`${dataTestId}--link`}
        >
          {baseAvatarComponent}
        </AvatarAnchor>
      );
    }

    if (clickable && onClick) {
      return (
        <AvatarAnchor
          $as="button"
          role="button"
          onClick={onClick}
          disabled={disabled}
          aria-disabled={disabled}
          data-testid={`${dataTestId}--button`}
        >
          {baseAvatarComponent}
        </AvatarAnchor>
      );
    }

    return <AvatarAnchor aria-disabled={disabled}>{baseAvatarComponent}</AvatarAnchor>;
  };

  const avatarWithWrapper = renderAvatarWithWrapper();

  if (!showTooltip) {
    return avatarWithWrapper;
  }

  return (
    <StatefulTooltipNext
      content={name}
      showArrow
      placement="bottom"
      zIndex={zIndex}
    >
      {avatarWithWrapper}
    </StatefulTooltipNext>
  );
};
