import { useMemo } from 'react';
import type { ReactNode } from 'react';

import { Popover } from 'baseui/popover';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { InformationPopoverContent } from './components/information-popover-content';
import { customPopoverOverrides } from './information-popover.styles';

import type { InformationPopoverOverrides } from './information-popover.interfaces';
import type { PopoverOverrides, PopoverProps } from 'baseui/popover';

export interface InformationPopoverProps extends Omit<PopoverProps, 'content' | 'overrides'> {
  'data-testid': string;
  title: string | ReactNode;
  content: string | ReactNode;
  children: ReactNode;
  overrides?: InformationPopoverOverrides;
  close(): void;
}

/**
 * A popover component for displaying informational content.
 *
 * @remarks
 * This component wraps the Popover component from Base Web and consists of a title and content.
 */
export const InformationPopover = ({
  'data-testid': dataTestId = 'information-popover',
  title,
  content,
  children,
  overrides,
  close,
  ...popoverProps
}: InformationPopoverProps): JSX.Element => {
  const { PopoverContent: PopoverContentOverride, ...popoverOverrides } = overrides || {};

  const PopoverContent = getOverride(PopoverContentOverride) || InformationPopoverContent;

  const mergedOverrides: PopoverOverrides = useMemo(() => {
    return mergeOverridesDeep(customPopoverOverrides, popoverOverrides);
  }, [popoverOverrides]);

  return (
    <Popover
      autoFocus={false}
      showArrow={false}
      overrides={mergedOverrides}
      content={
        <PopoverContent
          data-testid={dataTestId}
          close={close}
          content={content}
          title={title}
          {...getOverrideProps(PopoverContentOverride)}
        />
      }
      {...popoverProps}
    >
      {children}
    </Popover>
  );
};
