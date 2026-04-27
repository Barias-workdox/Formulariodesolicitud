import { useMemo } from 'react';

import { IconButton } from '@components/button';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { DSTrans } from '@components/utils/i18n/translation-component';
import { COMMON_HEIGHT_32 } from '@constants/common.constants';

import type { FooterMessageButtonProps } from './footer-message-button.interfaces';

/**
 * Get base brain button styles overrides
 */
export const baseOverrides: FooterMessageButtonProps['popoverOverrides'] = {
  Body: {
    style: ({ $theme }) => ({
      maxWidth: `calc(${$theme.spacing.spacing2xs8} * 4)`,
    }),
  },
} satisfies FooterMessageButtonProps['popoverOverrides'];

/**
 * Footer button with an integrated tooltip
 */
export const FooterMessageButton = ({
  'data-testid': dataTestId,
  disabled = false,
  isLoading = false,
  tooltipText,
  zIndex,
  popoverOverrides,
  children,
  buttonKind = 'tertiary-brain',
  onClick,
}: FooterMessageButtonProps): JSX.Element => {
  const popoverOverridesMerged = useMemo(() => {
    return mergeOverridesDeep(baseOverrides, popoverOverrides);
  }, [popoverOverrides]);

  return (
    <StatefulTooltipNext
      showArrow
      placement="bottom"
      zIndex={zIndex}
      content={tooltipText ? <DSTrans i18nKey={tooltipText} /> : undefined}
      overrides={popoverOverridesMerged}
    >
      <IconButton
        data-testid={dataTestId}
        size={COMMON_HEIGHT_32}
        disabled={disabled}
        isLoading={isLoading}
        kind={buttonKind}
        onClick={onClick}
      >
        {children}
      </IconButton>
    </StatefulTooltipNext>
  );
};
