import { forwardRef, useMemo } from 'react';
import type { ReactElement } from 'react';

import { Button as BaseButton } from 'baseui/button';

import { mergeOverridesDeep } from '../utils/baseui/helpers';

import { getOverrides } from './button.styles';

import type { ButtonProps } from './button.interfaces';
import type { ButtonProps as BaseButtonProps } from 'baseui/button';

/**
 * A styled button component that extends the functionality of the base UI button component with custom styling and behavior.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonInner(
  {
    'data-testid': deprecatedDataTestId,
    dataTestId,
    paddingLeft,
    paddingRight,
    fullWidth,
    overrides,
    responsive,
    ...rest
  },
  ref,
): ReactElement {
  const baseOverrides = getOverrides({
    'data-testid': deprecatedDataTestId || dataTestId,
    paddingLeft,
    paddingRight,
    fullWidth,
    responsive,
  });

  const mergedOverrides = useMemo(
    () => mergeOverridesDeep(baseOverrides, overrides),
    [baseOverrides, overrides],
  );

  return (
    <BaseButton
      ref={ref}
      type="button"
      overrides={mergedOverrides}
      {...(rest as BaseButtonProps)}
    />
  );
});
