import { Tag } from '@components/tag/next';
import { useTranslation } from '@components/utils';

import type { TagProps } from '@components/tag/next/tag.interfaces';
import type { WebdoxAIUsageStatus } from '@components/webdox-ai/interfaces/webdox-ia-plans.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export type UsageCounterTagProps = {
  /** current status of the plan */
  usageStatus?: WebdoxAIUsageStatus;
  /** The icon to display. */
  icon: TagProps['icon'];
  /** The number of requests remaining. */
  remainingRequests: number;
  /** The total number of requests available. */
  totalRequests: number;
};

const tagKindByUsageStatus: Record<WebdoxAIUsageStatus, TagProps['kind']> = {
  exhausted: 'negative',
  low: 'warning',
  active: 'positive',
  unlimited: 'positive',
};

/**
 * A tag component that displays the usage counter of the WebdoxAI.
 */
export const UsageCounterTag = ({
  dataTestId,
  icon,
  usageStatus,
  remainingRequests,
  totalRequests,
}: WithTestId<UsageCounterTagProps>): JSX.Element => {
  const { t } = useTranslation();
  const tagKind = usageStatus ? tagKindByUsageStatus[usageStatus] : 'neutral';

  return (
    <Tag
      data-testid={`${dataTestId}__counter-tag`}
      kind={tagKind}
      variant="outlined"
      icon={icon}
    >
      {usageStatus === 'unlimited'
        ? t('webdoxAI.planUsage.popovers.planTrial.unlimitedTitle')
        : `${remainingRequests}/${totalRequests}`}
    </Tag>
  );
};
