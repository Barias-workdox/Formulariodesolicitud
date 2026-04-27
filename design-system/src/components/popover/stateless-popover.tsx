import { useMemo } from 'react';
import type { ReactElement } from 'react';

import { Popover } from 'baseui/popover';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { StyledWrapper, getPopoverOverrides } from './popover.styles';

import type { PopoverProps as BasePopoverProps } from 'baseui/popover';

export type StatelessPopoverProps = BasePopoverProps & {
  /**
   * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
   *
   * @deprecated Only required for legacy support with `DocumentViewerModal`
   */
  zIndex?: number;
};

/**
 * StatelessPopover is a styled wrapper around Base Web's Popover component.
 */
export const StatelessPopover = ({
  children,
  overrides,
  zIndex,
  ...rest
}: StatelessPopoverProps): ReactElement => {
  const mergedOverrides = useMemo(
    () => mergeOverridesDeep(getPopoverOverrides({ zIndex }), overrides),
    [overrides, zIndex],
  );

  return (
    <Popover
      overrides={mergedOverrides}
      {...rest}
    >
      <StyledWrapper>{children}</StyledWrapper>
    </Popover>
  );
};
