import { CheckmarkOutline, WarningHex } from '@carbon/icons-react';

import { useCss } from '@components/utils/hooks/use-css';
import { COMMON_ICON_SIZE_16 } from '@constants/common.constants';

import type { WithTestId } from '@interfaces/common.interfaces';

export type PositiveOrNegativeIconProps = WithTestId & {
  positive: boolean;
  error: boolean;
};

/**
 * Icon used for the input validations.
 */
export const PositiveOrNegativeIcon = ({
  'data-testid': dataTestId,
  positive,
  error,
}: PositiveOrNegativeIconProps): JSX.Element => {
  const { theme } = useCss();

  if (error) {
    return (
      <WarningHex
        data-testid={`${dataTestId}--error-icon`}
        size={COMMON_ICON_SIZE_16}
        color={theme.colors.negative}
      />
    );
  }

  if (positive) {
    return (
      <CheckmarkOutline
        data-testid={`${dataTestId}--positive-icon`}
        size={COMMON_ICON_SIZE_16}
        color={theme.colors.positive}
      />
    );
  }

  return null;
};
