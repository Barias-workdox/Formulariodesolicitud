import { useMemo } from 'react';
import type { ReactElement } from 'react';

import { mergeOverrides } from 'baseui';
import { StatefulTooltip } from 'baseui/tooltip';

import { getOverrides } from '../tooltip-next.styles';

import type { TooltipNextSize } from '../tooltip-next.interfaces';
import type { ZIndexType } from '@interfaces/common.interfaces';
import type { StatefulTooltipProps } from 'baseui/tooltip';

export type StatefulTooltipNextProps = StatefulTooltipProps & {
  size?: TooltipNextSize;
  zIndex?: ZIndexType;
  hasPointerEventsEnabled?: boolean;
};

/**
 * A wrapper component around BaseUI's StatefulTooltip that supports size customization
 * and applies a rounded border radius.
 */
export const StatefulTooltipNext = ({
  size = 'sm',
  zIndex,
  overrides,
  hasPointerEventsEnabled = true,
  ...rest
}: StatefulTooltipNextProps): ReactElement => {
  const mergedOverrides = useMemo(
    () => mergeOverrides(getOverrides({ size, zIndex, hasPointerEventsEnabled }), overrides),
    [overrides, size, zIndex, hasPointerEventsEnabled],
  );

  return (
    <StatefulTooltip
      {...rest}
      overrides={mergedOverrides}
    />
  );
};
