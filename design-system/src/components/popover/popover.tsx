import { useMemo } from 'react';
import type { ReactElement } from 'react';

import { PLACEMENT, StatefulPopover } from 'baseui/popover';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { StyledWrapper, getPopoverOverrides } from './popover.styles';

import type { PopoverPlacement, StatefulPopoverProps } from 'baseui/popover';

export type { PopoverPlacement as PopoverPlacementType };

export { PLACEMENT };

export interface PopoverProps extends StatefulPopoverProps {
  /**
   * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
   *
   * @deprecated Only required for legacy support with `DocumentViewerModal`
   */
  zIndex?: number;
}

/**
 * Styled Popover component that wraps Base Web's StatefulPopover.
 */
export const Popover = ({
  children,
  autoFocus = false,
  overrides,
  zIndex,
  ...rest
}: PopoverProps): ReactElement => {
  const mergedOverrides = useMemo(
    () => mergeOverridesDeep(getPopoverOverrides({ zIndex }), overrides),
    [overrides, zIndex],
  );

  return (
    <StatefulPopover
      autoFocus={autoFocus}
      overrides={mergedOverrides}
      {...rest}
    >
      <StyledWrapper>{children}</StyledWrapper>
    </StatefulPopover>
  );
};
