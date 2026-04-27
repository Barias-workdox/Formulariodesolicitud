import { useMemo } from 'react';
import type { ReactNode } from 'react';

import { StatefulPopover } from 'baseui/popover';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { InformationPopoverContent } from './components/information-popover-content';
import { customPopoverOverrides } from './information-popover.styles';

import type { InformationPopoverOverrides } from './information-popover.interfaces';
import type { PopoverOverrides, StatefulPopoverProps } from 'baseui/popover';

export interface StatefulInformationPopoverProps extends Omit<
  StatefulPopoverProps,
  'content' | 'overrides'
> {
  'data-testid': string;
  title: string | ReactNode;
  content: string | ReactNode;
  children: ReactNode;
  overrides?: InformationPopoverOverrides;
}

/**
 * A popover component for displaying informational content.
 *
 * @remarks
 * This component wraps the StatefulPopover component from Base Web and consists of a title and content.
 */
export const StatefulInformationPopover = ({
  'data-testid': dataTestId,
  title,
  content,
  children,
  overrides,
  ...popoverProps
}: StatefulInformationPopoverProps): JSX.Element => {
  const { PopoverContent: PopoverContentOverride, ...popoverOverrides } = overrides || {};

  const PopoverContent = getOverride(PopoverContentOverride) || InformationPopoverContent;

  const mergedOverrides: PopoverOverrides = useMemo(() => {
    return mergeOverridesDeep(customPopoverOverrides, popoverOverrides);
  }, [popoverOverrides]);

  return (
    <StatefulPopover
      autoFocus={false}
      showArrow={false}
      overrides={mergedOverrides}
      content={({ close }) => (
        <PopoverContent
          data-testid={dataTestId}
          close={close}
          content={content}
          title={title}
          {...getOverrideProps(PopoverContentOverride)}
        />
      )}
      {...popoverProps}
    >
      {children}
    </StatefulPopover>
  );
};
