import { forwardRef, useMemo } from 'react';
import type { ReactElement } from 'react';

import { Button } from '@components/button';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { iconButtonOverrides } from './icon-button.styles';

import type { IconButtonProps } from './icon-button.interfaces';
import type { ButtonProps } from '@components/button/button.interfaces';

/**
 * A specialized button component designed primarily for displaying icons.
 * This component extends a generic Button component by applying icon-specific styles.
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButtonInner(
  { 'data-testid': deprecatedDataTestId, dataTestId, overrides, ...rest },
  ref,
): ReactElement {
  const mergedOverrides = useMemo(() => {
    return mergeOverridesDeep(iconButtonOverrides, overrides);
  }, [overrides]);

  return (
    <Button
      dataTestId={dataTestId ?? deprecatedDataTestId}
      ref={ref}
      kind="control"
      overrides={mergedOverrides}
      {...(rest as ButtonProps)}
    />
  );
});
