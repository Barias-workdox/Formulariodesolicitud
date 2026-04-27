import { InformationFilled } from '@carbon/icons-react';

import { Tag } from '@components/tag';
import { StatefulTooltipNext } from '@components/tooltip-next';

import { feedFileTooltipOverrides } from '../feed-file.styles';

import type { FeedFileInfoTagProps } from '../feed-file.interfaces';

/**
 * Displays additional information for the user
 * when a document meets certain conditions
 */
export const FeedFileInfoTag = ({
  'data-testid': dataTestId,
  title,
  kind = 'negative',
  variant = 'overlay',
  content,
  icon: Icon = InformationFilled,
}: FeedFileInfoTagProps): JSX.Element => {
  return (
    <StatefulTooltipNext
      content={content}
      showArrow
      overrides={feedFileTooltipOverrides()}
      ignoreBoundary
    >
      <span>
        <Tag
          data-testid={`${dataTestId}__info-tag`}
          kind={kind}
          variant={variant}
          icon={<Icon />}
        >
          {title}
        </Tag>
      </span>
    </StatefulTooltipNext>
  );
};
