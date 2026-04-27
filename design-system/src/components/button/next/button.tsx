import { useMemo, type ReactElement } from 'react';

import { Button as BaseButton } from 'baseui/button';

import { ariaKeyDownHandler } from '@components/utils/accessibility.utils';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { COMMON_HEIGHT_44 } from '@constants/common.constants';

import { getAriaProps, renderEnhancer } from './button.utils';
import { getOverrides } from './styles/button.styles';

import type { ButtonProps } from './button.interfaces';
import type { Overrides } from '@themes/theme.interfaces';
import type { ButtonProps as BaseButtonProps } from 'baseui/button';

/**
 * Button component with design system integration.
 * Supports multiple visual variants, responsive behavior, and accessibility features.
 */
export const Button = ({
  dataTestId = 'button',
  kind = 'brand',
  appearance = 'filled',
  type = 'button',
  fullWidth = false,
  disabled = false,
  isLoading = false,
  size = COMMON_HEIGHT_44,
  startEnhancer,
  endEnhancer,
  children,
  overrides,
  onClick,
  onKeyDown,
  ...rest
}: ButtonProps): ReactElement => {
  const isInactive = disabled || isLoading;

  const baseOverrides = useMemo(
    () => getOverrides({ kind, appearance, size, fullWidth, disabled, isLoading, dataTestId }),
    [kind, appearance, size, fullWidth, disabled, isLoading, dataTestId],
  );

  const mergedOverrides = useMemo(
    () => mergeOverridesDeep(baseOverrides as Overrides, overrides as Overrides),
    [baseOverrides, overrides],
  );

  const ariaProps = useMemo(() => getAriaProps(isLoading, disabled), [isLoading, disabled]);

  /**
   * Handles click events, preventing action when button is inactive
   */
  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>): void => {
    if (!isInactive) onClick?.(e);
  };

  /**
   * Handles keyboard events with accessibility support
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
    if (isInactive) return;

    onKeyDown?.(e);

    if (!e.defaultPrevented) {
      ariaKeyDownHandler(() =>
        handleClick(e as unknown as React.SyntheticEvent<HTMLButtonElement>),
      )(e);
    }
  };

  return (
    <BaseButton
      isLoading={isLoading}
      disabled={disabled}
      type={type}
      kind={kind as BaseButtonProps['kind']}
      size={size as BaseButtonProps['size']}
      overrides={mergedOverrides}
      startEnhancer={startEnhancer ? renderEnhancer(startEnhancer, size) : undefined}
      endEnhancer={endEnhancer ? renderEnhancer(endEnhancer, size) : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...ariaProps}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};
