import { useMemo } from 'react';

import { Information } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useCss } from '@components/utils/hooks/use-css';
import { DSTrans } from '@components/utils/i18n/translation-component';

import { getBaseOverrides } from './info-button.overrides';

import type { InfoButtonProps } from './info-button.interfaces';

/**
 * Info button with a integrated tooltip
 */
export const InfoButton = ({
  'data-testid': dataTestId,
  disabled = false,
  isLoading = false,
  showTooltip = true,
  tooltipText,
  zIndex,
  buttonKind = 'tertiary-brain',
  overrides = {
    Button: {},
    Tooltip: {},
  },
  onClick,
}: InfoButtonProps): JSX.Element => {
  const { theme } = useCss();
  const { Button: ButtonOverrides, Tooltip: TooltipOverrides } = overrides;
  const { Tooltip: BaseTooltipOverrides } = getBaseOverrides(theme);

  const mergedTooltipOverrides = useMemo(
    () => mergeOverridesDeep(BaseTooltipOverrides, TooltipOverrides),
    [BaseTooltipOverrides, TooltipOverrides],
  );

  return (
    <StatefulTooltipNext
      showArrow
      placement="bottom"
      zIndex={zIndex}
      content={showTooltip ? <DSTrans i18nKey={tooltipText} /> : undefined}
      overrides={mergedTooltipOverrides}
    >
      <IconButton
        data-testid={dataTestId}
        size="32px"
        disabled={disabled}
        isLoading={isLoading}
        kind={buttonKind}
        onClick={onClick}
        overrides={ButtonOverrides}
      >
        <Information />
      </IconButton>
    </StatefulTooltipNext>
  );
};
