import type { ReactNode, PropsWithChildren } from 'react';

import { Popover } from '@components/popover';
import { addExtraProps } from '@utils/add-extra-props';

import { UsageOverviewPopoverBody, UsageOverviewPopoverHeader } from './components';
import { StyledPopoverContent } from './styled-components';

import type { PopoverProps } from '@components/popover';
import type { WithZIndex } from '@interfaces/common.interfaces';

export type UsageOverviewPopoverProps = WithZIndex &
  PropsWithChildren<{
    placement?: PopoverProps['placement'];
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
  }>;

/**
 * A popover component for displaying the usage overview of the WebdoxAI.
 */
export const UsageOverviewPopover = ({
  children,
  header,
  body,
  footer,
  placement,
  zIndex,
}: UsageOverviewPopoverProps): JSX.Element => {
  return (
    <Popover
      placement={placement}
      zIndex={zIndex}
      content={({ close }) => {
        /**
         * Add extra props to the header component.
         */
        const headerWithExtraProps = header ? addExtraProps(header, { close }) : null;

        return (
          <StyledPopoverContent>
            {headerWithExtraProps}
            {body}
            {footer}
          </StyledPopoverContent>
        );
      }}
      showArrow
    >
      {children}
    </Popover>
  );
};

UsageOverviewPopover.Header = UsageOverviewPopoverHeader;
UsageOverviewPopover.Body = UsageOverviewPopoverBody;
