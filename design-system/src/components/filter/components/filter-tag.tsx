import type { PropsWithChildren, ReactElement } from 'react';

import { Tag } from '@components/tag';
import { StatefulTooltipNext } from '@components/tooltip-next';

import type { FilterProps } from '../filter.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { TagOverrides } from 'baseui/tag';

export type FilterTagProps = WithTestId & PropsWithChildren<Pick<FilterProps, 'tooltipText'>>;

const tagOverrides: TagOverrides = {
  Root: {
    style: () => ({
      cursor: 'pointer',
    }),
  },
};

/**
 * Renders a tag indicating the number of selected filters when multiple selections are allowed.
 * The tag is wrapped in a tooltip to provide additional information on hover.
 */
export const FilterTag = ({
  'data-testid': testId,
  children,
  tooltipText,
}: FilterTagProps): ReactElement => {
  return (
    <StatefulTooltipNext
      content={tooltipText}
      showArrow
      ignoreBoundary
      popoverMargin={8}
    >
      <span>
        <Tag
          data-testid={testId}
          variant="overlay"
          kind="accent"
          overrides={tagOverrides}
        >
          {children}
        </Tag>
      </span>
    </StatefulTooltipNext>
  );
};
